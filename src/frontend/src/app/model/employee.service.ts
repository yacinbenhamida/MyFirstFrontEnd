import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Employee} from './Employee';
import {Component} from '@angular/Core';
@Injectable()
export class EmployeeService{
    constructor(private http:Http){}    
    
    private headers = new Headers({'Content-type':'application/json'});
    private employeesUrl = '/api/employees';
    
    getEmployees():Promise<Employee[]>{
        return this.http.get(this.employeesUrl + "/allEmployees")
        .toPromise().then(response=>response.json() as Employee[]);    
    }
    insertEmployee(e:Employee):Promise<Employee>{
    return this.http.post(this.employeesUrl+"/insertEmployee",JSON.stringify(e),{headers : this.headers})
        .toPromise().then(res=>res.json() as Employee).catch(this.handleError);    
    }
  deleteEmployee(e: Employee): Promise<void> {
    const url = `${this.employeesUrl}/deleteEmployee/${e.id}`;
    return this.http.get(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
    getEmployee(id:number): Promise<Employee>
    {
         const url = `${this.employeesUrl}/findEmployee/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Employee)
      .catch(this.handleError);
    }
    
    updateEmployee(e:Employee):Promise<Employee>
    {
        return this.http.post(this.employeesUrl + "/updateEmployee",JSON.stringify(e),{headers : this.headers})
        .toPromise().then(()=>null).catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}