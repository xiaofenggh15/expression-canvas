import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expression } from '../models/expression';

@Component({
  selector: 'app-expression-item',
  templateUrl: './expression-item.component.html',
  styleUrls: ['./expression-item.component.css']
})
export class ExpressionItemComponent implements OnInit {
  @Input() expression: Expression;
  // @Output() dragged = new EventEmitter<Expression>();

  constructor() { }

  ngOnInit() {
  }

  onDrag(event: any) {
    const expressionJson = JSON.stringify(this.expression);
    event.dataTransfer.setData('expression', expressionJson);
  }

}
