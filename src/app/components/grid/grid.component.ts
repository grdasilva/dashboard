import { Component, OnInit, Input } from '@angular/core';
import { Module } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  state;

  @Input() dados;
  @Input() dadosRHPC;

  columnDefs;
  columnDefsRHPC;
  columnDefsEC;
  defaultColDef;

  rowData;
  rowDataRHPC;

  optionsOfDropdown = [
    { name: 'Estabelecimento Comercial', value: 'Painel EC' },
    { name: 'RH Base Ativa', value: 'Painel RH BA' },
    { name: 'RH Pipeline Clientes', value: 'Painel RH PC' }
  ];
  
  constructor() {
    this.columnDefs = [
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
        width: 250,
        sortable: true,
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
            field: 'noventaDiasSemPedidos',
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
  
    this.columnDefsEC = [
      { headerName: 'Rede', field: 'rede', sortable: true, filter: true },
      { 
        headerName: 'Rede Credenciada',
        children: [
          {
            headerName: 'Base ativa período anterior',
            field: 'baseAtivaPeriodoAnterior',
            width: 250,
            sortable: true,
          },
          {
            headerName: 'Ganhos de Clientes',
            children: [
              {
                headerName: 'TotalGanhos',
                field: 'totalGanhos'
              },
              {
                headerName: 'Novos',
                field: 'novos'
              },
              {
                headerName: 'Migrações',
                field: 'mmigracoes'
              }
            ]
          }
        ]  
      },
      { headerName: 'Rede Habilitada' },
      { headerName: 'Rede Transicional' },
      { headerName: 'Liquidação Estabelecimento Comercial' }
    ];

    this.columnDefsRHPC = [
      { headerName: 'Rede', field: 'rede', sortable: true, filter: true },
      { 
        headerName: 'Total de Propostas',
        children: [
          { 
            headerName: 'Qtd Total de Propostas',
            field: 'qtdTotalPropostas',
            columnGroupShow: 'open' 
          },
          {
            headerName: 'Faturamento Total',
            field: 'faturamentoTotalPropostas'
          },
          {
            headerName: 'Faturamento Alimentação',
            field: 'faturamentoAlimentacaoTotalPropostas',
            columnGroupShow: 'open'
          },
          {
            headerName: 'Faturamento Refeição',
            field: 'faturamentoRefeicaoTotalPropostas',
            columnGroupShow: 'open'
          },
          {
            headerName: 'Faturamento Transporte',
            field: 'faturamentoTransporteTotalPropostas',
            columnGroupShow: 'open'
          }
        ] 
      },
      { 
        headerName: 'Clientes em Ativação',
        width: 300,
        children: [
          { 
            headerName: 'Qtd de Clientes',
            field: 'qtdClientesEmAtivacao',
            columnGroupShow: 'open' 
          },
          {
            headerName: 'Faturamento Total',
            field: 'faturamentoTotalClientesEmAtivacao'
          },
          {
            headerName: 'Faturamento Alimentação',
            field: 'faturamentoAlimentacaoClientesEmAtivacao',
            columnGroupShow: 'open'
          },
          {
            headerName: 'Faturamento Refeição',
            field: 'faturamentoRefeicaoClientesEmAtivacao',
            columnGroupShow: 'open'
          },
          {
            headerName: 'Faturamento Transporte',
            field: 'faturamentoTransporteClientesEmAtivacao',
            columnGroupShow: 'open'
          }
        ]
      },
      { 
        headerName: 'Clientes em Negociação',
        children: [
          { 
            headerName: 'Qtd de Clientes',
            field: 'qtdClientesEmNegociacao',
            columnGroupShow: 'open' 
          },
          {
            headerName: 'Faturamento Total',
            field: 'faturamentoTotalClientesEmNegociacao'
          },
          {
            headerName: 'Faturamento Alimentação',
            field: 'faturamentoAlimentacaoClientesEmNegociacao',
            columnGroupShow: 'open'
          },
          {
            headerName: 'Faturamento Refeição',
            field: 'faturamentoRefeicaoClientesEmNegociacao',
            columnGroupShow: 'open'
          },
          {
            headerName: 'Faturamento Transporte',
            field: 'faturamentoTransporteClientesEmNegociacao',
            columnGroupShow: 'open'
          }
        ]
      },
      { 
        headerName: 'Clientes Declinados',
        children: [
          { 
            headerName: 'Qtd de Clientes',
            field: 'qtdClientesDeclinados',
            columnGroupShow: 'open' 
          },
          {
            headerName: 'Faturamento Total',
            field: 'faturamentoTotalClientesDeclinados'
          },
          {
            headerName: 'Faturamento Alimentação',
            field: 'faturamentoAlimentacaoClientesDeclinados',
            columnGroupShow: 'open'
          },
          {
            headerName: 'Faturamento Refeição',
            field: 'faturamentoRefeicaoClientesDeclinados',
            columnGroupShow: 'open'
          },
          {
            headerName: 'Faturamento Transporte',
            field: 'faturamentoTransporteClientesDeclinados',
            columnGroupShow: 'open'
          }
        ] 
      }
    ];

    this.defaultColDef = {
      sortable: true,
      resizable: true,
      filter: true,
    };
  }
  
  ngOnInit(): void {
    this.rowData = this.dados;
    this.rowDataRHPC = this.dadosRHPC;
    this.insertDataInGrid();
    this.insertDataInGridRHPC();
  }

  insertDataInGridRHPC() {
    let precision = 100;
    this.rowDataRHPC.forEach(rede => {
      rede.qtdTotalPropostas = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoTotalPropostas = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoAlimentacaoTotalPropostas = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoRefeicaoTotalPropostas = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoTransporteTotalPropostas = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.qtdClientesEmAtivacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoTotalClientesEmAtivacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoAlimentacaoClientesEmAtivacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoRefeicaoClientesEmAtivacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoTransporteClientesEmAtivacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.qtdClientesEmNegociacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoTotalClientesEmNegociacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoAlimentacaoClientesEmNegociacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoRefeicaoClientesEmNegociacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoTransporteClientesEmNegociacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.qtdClientesDeclinados = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoTotalClientesDeclinados = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoAlimentacaoClientesDeclinados = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoRefeicaoClientesDeclinados = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.faturamentoTransporteClientesDeclinados = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    });
  }
  
  insertDataInGrid() {
    let precision = 100;
    this.rowData.forEach(rede => {
      rede.baseAtivaPeriodoAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.potencialPeriodoAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.totalGanhos = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.novos = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.migracoes = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.totalPerdas = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.cancelamentos = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.noventaDiasSemPedidos = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.soCartoes = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.migracoesPerdas = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.baseAtivaPeriodoAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.potencialPeriodoAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.fatPedidosPeriodoAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.fatPedidosPeriodoAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.fatUtilizacaoPeriodoAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      rede.fatUtilizacaoPeriodoAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    });       
  }

  onChangedValue(eventData): void {
    this.state = eventData;
  }

}
