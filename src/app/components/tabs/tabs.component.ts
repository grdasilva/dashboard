import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() dados;
  labels = ['Período anterior', 'Período atual'];
  data = [
    { periodoAnterior: 40000, periodoAtual: 50000 },
    { periodoAnterior: 40000, periodoAtual: 50000 },
    { periodoAnterior: 40000, periodoAtual: 50000 },
    { periodoAnterior: 40000, periodoAtual: 50000 },
    { periodoAnterior: 40000, periodoAtual: 50000 }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
