import { Component, OnInit, Input } from '@angular/core';
import { ExpressionDrop } from '../../models/expression-drop';
import { Expression } from '../../models/expression';

@Component({
  selector: 'app-expression-item-drop',
  templateUrl: './expression-item-drop.component.html',
  styleUrls: ['./expression-item-drop.component.css']
})
export class ExpressionItemDropComponent implements OnInit {
  @Input() expressionDrop: ExpressionDrop;
  expression: Expression;
  startX: number;
  startY: number;
  paramIds: number[];
  params = [];

  constructor() { }

  ngOnInit() {
    this.expression = this.expressionDrop.expression;
    this.startX = this.expressionDrop.startX;
    this.startY = this.expressionDrop.startY;
    this.paramIds = Array.from(new Array(this.expression.paramCount), (x,i) => i);
    for (let i = 0; i < this.expression.paramCount; i++) {
      this.params.push(null);
    }

  }

  onGiven(param: {}) {
    const index = parseInt(Object.keys(param)[0]);
    this.params[index] = param[index];
  }

  evalute() {
    const values = this.params;
    for (let i = 0; i < values.length; i++) {
      if (!values[i]) {
        return 'can not be evaluated';
      }
    }
    if (this.expression.type === 'add') {
        return values[0] + values[1];
    } else if (this.expression.type === 'subtract') {
        return values[0] - values[1];
    } else if (this.expression.type === 'foo') {
        return values[0].toString() + values[1].toString() + values[2].toString();
    } else {
      let value = values[0];
      let result = 1;
      while (value > 0) {
        result *= value--;
      }
      return result;
    }
}

}
