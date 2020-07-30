import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PainelRH } from 'src/app/interfaces/painelRH';
import { PanelService } from 'src/app/services/panel.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dados;
  state;
  dateNow = Date.now();
  searchString;
  displayedFilters: string[] = [];
  optionsOfDropdown = [
    { name: 'Painel EC', value: 'Painel EC' },
    { name: 'Painel RH', value: 'Painel RH' },
    { name: 'Painel Results', value: 'Painel Results' }
  ];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    this.insertDataTable('');
  }

  addFilter(name): void {
    if (this.displayedFilters.length === 0) {
      this.displayedFilters.push(name);
    } else {
      if(name === 'INICIO') { 
        this.displayedFilters = [];
      } else {
        if(this.displayedFilters.length !== 3) {
          const existentFilter = this.displayedFilters.filter(filter => filter === name);
          if (existentFilter.length === 0) {
            this.displayedFilters.push(name);
          } else {
            this.displayedFilters = this.displayedFilters.filter(f => f !== name);
          }
        }
      }
    }
  }

  onChangedValue(eventData): void {
    this.state = eventData;
  }

  insertDataTable(name) {
    let precision = 100;
    this.dados.forEach(element => {
      element.baseAtivaMesAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.baseAtivaMesAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.cancelamentosClientes = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteAndamentoFaturamentoAlimentacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteAndamentoFaturamentoRefeicao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteAndamentoFaturamentoTotal = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteAndamentoFaturamentoTransporte = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteAndamentoQtdTotal = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteDeclinadoFaturamentoAlimentacao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteDeclinadoFaturamentoRefeicao = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteDeclinadoFaturamentoTotal = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteDeclinadoFaturamentoTransporte = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.clienteDeclinadoQtdTotal = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.faturamentoCartoesMesAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.faturamentoCartoesMesAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.faturamentoMdrMesAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.faturamentoMdrMesAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.fiancaValorMesAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.fiancaValorMesAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.migracoesPerdasClientes = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.novosClientes = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.novosMigracoesClientes = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.potencialMesAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.potencialMesAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.rebateValorMesAnterior = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.rebateValorMesAtual = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.totalGanhosClientes = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
      element.totalPerdasClientes = Math.floor(Math.random() * (1000000 * precision - 1 * precision) + 1 * precision) / (1 * precision);
    });
    if (name !== '') {
      this.addFilter(name);
    }
  }

  updateTable(name) {
    this.panelService.updateInformationPanelRH().subscribe((data: any) => {
      this.dados = data;
    }, err => { alert(err) }, () => this.insertDataTable(name));
  }

  rebuildTable() {
    this.panelService.getInformationPanelRH().subscribe((data: any) => {
      this.dados = data;
    }, err => { alert(err) }, () => this.insertDataTable('INICIO'));
  }
}
