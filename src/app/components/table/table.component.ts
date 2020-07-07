import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBGE } from './../../interfaces/ibge';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { TestingService } from 'src/app/services/testing.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dados;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  displayedColumns: string[] = ['name', 'url'];
  dataSource: MatTableDataSource<IBGE>;
  searchString: string;
  state;

  constructor(private TestingService: TestingService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.dados.results);
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
    this.TestingService.getByID(name).subscribe((data: any) => {
      this.state == 'Bootstrap' ? this.dados.results = data.pokemon_species : this.dataSource = data.pokemon_species;  
    });
  }

  methodSort(colName) {
    this.dados.results = this.dados.results.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
  }
}
