import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { Expression } from '../models/expression';
import { ExpressionDrop } from '../models/expression-drop';
import { ExpressionItemDropComponent } from './expression-item-drop/expression-item-drop.component';

@Component({
  selector: 'app-expression-box',
  templateUrl: './expression-box.component.html',
  styleUrls: ['./expression-box.component.css']
})
export class ExpressionBoxComponent implements OnInit {
  @ViewChildren('cmp') droppedComps: QueryList<ExpressionItemDropComponent>;
  draggedExpresson: Expression = null;
  expressionDropList: ExpressionDrop[] = [];
  ngOnInit() {}

  onDrop(event: any) {
    event.preventDefault();
    this.draggedExpresson = JSON.parse(event.dataTransfer.getData('expression')) as Expression;
    this.expressionDropList.push(new ExpressionDrop(this.draggedExpresson, 0, 0));
 }

 allowDrop(event: any) {
   event.preventDefault();
 }

  evaluteExpressions() {
    const resultArr = this.droppedComps.map( comp => comp.evalute());
    return resultArr;
  }


}
