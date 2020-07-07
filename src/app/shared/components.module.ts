import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './../components/table/table.component';
import { FilterInputComponent } from './../components/filter-input/filter-input.component';
import { DropdownInputComponent } from './../components/dropdown-input/dropdown-input.component';
import { MaterialModule } from './material.module';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    FilterInputComponent,
    DropdownInputComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    FilterInputComponent,
    DropdownInputComponent,
    FilterPipe
  ]
})
export class ComponentsModule { }
