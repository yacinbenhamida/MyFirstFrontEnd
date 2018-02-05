package com.crud.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.crud.model.Employee;

public interface EmployeeService {

	List<Employee>getAll();
	Employee getEmployee(int id);
	Employee insertEmployee(Employee e);
	Employee updateEmployee (Employee e);
	void deleteEmployee(int id);
}
