package com.crud.controller;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.crud.model.Employee;
import com.crud.service.EmployeeService;

import java.util.List;
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService empl;
	
	@RequestMapping(value="/allEmployees",method=RequestMethod.GET)
	public List<Employee>getAllEmployees(){
		return empl.getAll();
	}
	@RequestMapping(value = "/findEmployee/{cin}", method = RequestMethod.GET)
	public Employee getEmployee(@PathVariable("cin") int cin) {
		return empl.getEmployee(cin);
	}
	@RequestMapping(value = "/insertEmployee", method = RequestMethod.POST )
	public Employee insertEmployee(@RequestBody Employee emp) {
		System.out.println(""+emp.toString());
		return empl.insertEmployee(emp);
	}
	@RequestMapping(value = "/updateEmployee", method = RequestMethod.POST)
	public Employee updateEmployee(@RequestBody Employee emp) {
		return empl.updateEmployee(emp);
	}
	@RequestMapping(value = "/deleteEmployee/{cin}", method = RequestMethod.GET)
	public void deleteEmployee(@PathVariable("cin") int cin) {
		empl.deleteEmployee(cin);
	}
}
