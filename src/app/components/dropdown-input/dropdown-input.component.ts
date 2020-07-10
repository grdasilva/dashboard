import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-input',
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss']
})
export class DropdownInputComponent implements OnInit {

  @Input() data;
  @Output() state: EventEmitter<any>;

  constructor() { 
    this.state = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
