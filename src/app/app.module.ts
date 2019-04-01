import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ExpressionBoxComponent } from './expression-box/expression-box.component';
import { ExpressionItemComponent } from './expression-item/expression-item.component';
import { ExpressionItemDropComponent } from './expression-box/expression-item-drop/expression-item-drop.component';
import { ParamItemComponent } from './expression-box/expression-item-drop/param-item/param-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpressionBoxComponent,
    ExpressionItemComponent,
    ExpressionItemDropComponent,
    ParamItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
