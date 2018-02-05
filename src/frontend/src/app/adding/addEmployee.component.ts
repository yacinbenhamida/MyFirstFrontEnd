import { Component,OnInit } from '@angular/core';
import {Employee} from './../model/Employee';
import {EmployeeService} from './../model/employee.service';
import {Router} from '@angular/router';
@Component({
  selector: 'add-root',
  templateUrl: './addEmployee.component.html',
  styleUrls: ['./addEmployee.component.css']
})
export class AddComponent implements OnInit
{
    newEmp : Employee;
    name : String;
    constructor(private empServ:EmployeeService)
    {
        
    }
    
    ngAfterViewInit(){
   
  }
    ngOnInit(){
            this.newEmp = new Employee();
        }
        
        insertEmployee():void{  
        this.name =  (<HTMLInputElement>document.getElementById('nomp')).value;
        
   
         if(this.newEmp.verif()==true){
            this.empServ.insertEmployee(this.newEmp);
            alert(" insertion faite  ");}
            else {
             if (!/^[^a-zA-Z]+$/.test(name)){
             //(<HTMLInputElement>document.getElementById('alrnom')).hidden = false;
             (<HTMLInputElement>document.getElementById('nomp')).style.borderColor = "red"; 
             }
             
             alert("verifiez les champs");
            }
        }

}