import {Component, ViewChild } from '@angular/core';
import { Expression } from './models/expression';
import { ExpressionBoxComponent } from './expression-box/expression-box.component';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  @ViewChild(ExpressionBoxComponent)
  private boxComp: ExpressionBoxComponent;

  results = [];
  expressions: Expression[] = [
    new  Expression('../../assets/images/add.gif', 40, 40, 'add'),
    new  Expression('../../assets/images/subtract.gif', 70, 40, 'subtract'),
    new  Expression('../../assets/images/foo.gif', 40, 40, 'foo'),
    new  Expression('../../assets/images/complex.gif', 70, 40, 'complex')
  ];

  getResults() {
    this.results = this.boxComp.evaluteExpressions();
  }

  clearResults() {
    this.results = [];
    this.boxComp.expressionDropList = [];
  }
}