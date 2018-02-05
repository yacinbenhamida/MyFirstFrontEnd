package com.crud.service;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import com.crud.model.Employee;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@Override
	public List<Employee> getAll() {
		List<Employee> lstEmps = new ArrayList<>();
		Iterator<Employee> it = employeeRepository.findAll().iterator();
		while (it.hasNext()) {
			
			lstEmps.add(it.next());
		}
		System.out.println(lstEmps.toString());
		return lstEmps;
	}

	@Override
	public Employee getEmployee(int id) {
		return employeeRepository.findOne(id);
	}

	@Override
	public Employee insertEmployee(Employee e) {
		return employeeRepository.save(e);
	}

	@Override
	public Employee updateEmployee(Employee e) {
		return employeeRepository.save(e);
	}

	@Override
	public void deleteEmployee(int id) {
		employeeRepository.delete(id);
	}

}
