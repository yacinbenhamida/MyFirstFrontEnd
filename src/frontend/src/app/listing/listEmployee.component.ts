import { Component,OnInit } from '@angular/core';
import {Employee} from './../model/Employee';
import {EmployeeService} from './../model/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'list-root',
  templateUrl: './listEmployee.component.html',
  styleUrls: ['./listEmployee.component.css']
})
export class ListComponent implements OnInit 
{
     employee : Employee;   
     employees : Employee[];
     selectedEmployee : Employee;
    constructor(private empServ:EmployeeService,private router:Router){
    }
    
    ngOnInit() {
    this.empServ.getEmployees().then(employees => this.employees = employees);
  } 
    clicked(e:Employee):void{
     if (confirm('vous etes sur de supprimer '+e.nom+" ? ")){
      this.empServ.deleteEmployee(e).then(()=>{
          this.employees = this.employees.filter(h=>h!==e);  }
        );}
    
    }
        showInfo(e:Employee):void{
               //this.selectedEmployee = e; 
                this.router.navigate(['/information', e.id]);
        }
}