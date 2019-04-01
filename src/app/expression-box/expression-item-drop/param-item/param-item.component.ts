import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-param-item',
  templateUrl: './param-item.component.html',
  styleUrls: ['./param-item.component.css']
})
export class ParamItemComponent implements OnInit {
  @Input() paramId: number;
  @Output() givenValue = new EventEmitter<any>() ;
  idValuePair = {};
  constructor() { }

  ngOnInit() {
  }

  onChange(event: any) {
    this.idValuePair[this.paramId] = !isNaN(event.target.value) ?
                  Number(event.target.value) : event.target.value;
    this.givenValue.emit(this.idValuePair);
  }

}
