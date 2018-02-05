import { Component,OnInit,Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Employee} from './../model/employee';
import {EmployeeService} from './../model/employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class InfoComponent implements OnInit{
        em : Employee;
    constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private location:Location){}
    ngOnInit():void
    {
        this.route.params.switchMap((params:Params)=>this.employeeService.getEmployee(+params['id']))
        .subscribe(employee=>this.em = employee);
    }
    goBack():void{
        this.location.back();
    }
    updateEmployee():void{
        this.employeeService.updateEmployee(this.em);
        this.goBack();
    }
}
