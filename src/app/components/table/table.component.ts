import { Component, OnInit, Input, ViewChild, Output, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBGE } from './../../interfaces/ibge';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TestingService } from 'src/app/services/testing.service';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dados;
  state;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  displayedColumns: string[] = ['name', 'url'];
  dataSource: MatTableDataSource<Pokemon>;
  searchString: string;
  displayedFilters: string[] = [];
  optionsOfDropdown = [
    { name: "Bootstrap", value: "Bootstrap" },
    { name: "Material", value: "Material" }
  ];

  constructor(private testingService: TestingService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  updateTable(name) {
    this.testingService.getPokemonByHabitat(name).subscribe((data: any) => {
      this.state == 'Bootstrap' ? this.dados = data.pokemon_species : this.dataSource = data.pokemon_species;  
    });
    this.addFilter(name); 
  }

  methodSort(colName) {
    this.dados.results = this.dados.results.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
  }

  addFilter(name) {
    if (this.displayedFilters.length === 0) {
      this.displayedFilters.push(name);
    } else {
      let existentFilter = this.displayedFilters.filter(filter => filter == name);
      if (existentFilter.length == 0) {
        this.displayedFilters.push(name);
      }
    }
  }

}
