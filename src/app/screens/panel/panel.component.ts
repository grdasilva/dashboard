import { Component, OnInit } from '@angular/core';
import { TestingService } from '../../services/testing.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  ibgeData: any[];

  constructor(private TestingService:TestingService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.TestingService.getAgregate().subscribe((districts: any[]) => {
      this.ibgeData = districts;
    });
  }

}
