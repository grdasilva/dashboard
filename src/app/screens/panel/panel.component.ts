import { Component, OnInit } from '@angular/core';
import { TestingService } from '../../services/testing.service';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  data: Pokemon[];

  constructor(private testingService:TestingService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.testingService.getTypesOfHabitat().subscribe((habitat: any) => {
      this.data = habitat.results;
    });
  }

}
