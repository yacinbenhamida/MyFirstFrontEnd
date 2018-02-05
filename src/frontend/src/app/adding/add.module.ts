
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AddComponent } from './addEmployee.component';



@NgModule({
  declarations: [
      AddComponent
  ],    
  imports:[
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AddComponent]
})
export class AddModule { }
