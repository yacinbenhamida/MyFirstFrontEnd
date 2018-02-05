import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeService} from './model/employee.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],    
  imports:[
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
