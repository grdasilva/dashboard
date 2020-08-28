import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  state;

  columnDefs = [
    { headerName: 'Rede', field: 'rede', sortable: true, filter: true },
    {
      headerName: 'Base ativa período anterior',
      field: 'baseAtivaPeriodoAnterior',
      width: 250,
      sortable: true,
    },
    {
      headerName: 'Potencial período anterior',
      field: 'potencialPeriodoAnterior',
      sortable: true
    },
    {
      headerName: 'Ganhos de clientes',
      children: [
        {
          headerName: 'Total Ganhos',
          field: 'totalGanhos'
        },
        {
          headerName: 'Novos',
          field: 'novos',
          columnGroupShow: 'open',
        },
        {
          headerName: 'Migrações',
          field: 'migracoes',
          columnGroupShow: 'open',
        }
      ]
    },
    {
      headerName: 'Perdas de clientes',
      children: [
        {
          headerName: 'Total perdas',
          field: 'totalPerdas'
        },
        {
          headerName: 'Cancelamentos',
          field: 'cancelamentos',
          columnGroupShow: 'open',
        },
        {
          headerName: '90 dias sem pedidos',
          field: '90diasSemPedidos',
          columnGroupShow: 'open',
        },
        {
          headerName: 'Só cartões',
          field: 'soCartoes',
          columnGroupShow: 'open',
        },
        {
          headerName: 'Migrações',
          field: 'migracoesPerdas',
          columnGroupShow: 'open',
        }
      ]
    },
    {
      headerName: 'Base ativa período atual',
      field: 'baseAtivaPeriodoAtual',
      width: 250,
      sortable: true
    },
    {
      headerName: 'Potencial período atual',
      field: 'potencialPeriodoAtual',
      sortable: true
    },
    {
      headerName: 'Faturamento Pedidos',
      children: [
        {
          headerName: 'Período anterior',
          field: 'fatPedidosPeriodoAnterior',
        },
        {
          headerName: 'Período atual',
          field: 'fatPedidosPeriodoAtual',
        }
      ]
    },
    {
      headerName: 'Faturamento Utilização',
      children: [
        {
          headerName: 'Período anterior',
          field: 'fatUtilizacaoPeriodoAnterior',
        },
        {
          headerName: 'Período atual',
          field: 'fatUtilizacaoPeriodoAtual',
        }
      ]
    }
  ];

  rowData = [
    { rede: 'Rede SP', baseAtivaPeriodoAnterior: 2000, potencialPeriodoAnterior: 35000, totalGanhos: 5000, novos: 50000, migracoes: 23 },

  ];

  optionsOfDropdown = [
    { name: 'Estabelecimento Comercial', value: 'Painel EC' },
    { name: 'RH Base Ativa', value: 'Painel RH BA' },
    { name: 'RH Pipeline Clientes', value: 'Painel RH PC' }
  ];

  constructor() { }
  
  ngOnInit(): void {
  }
  
  insertDataInGrid() {
    
  }

  onChangedValue(eventData): void {
    this.state = eventData;
  }

}
