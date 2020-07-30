import { Component, OnInit } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { PainelEC } from 'src/app/interfaces/painelEC';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  data: PainelEC[];

  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.panelService.getInformationPanelRH().subscribe((data: any) => {
      this.data = data;
    });
  }
}
