package com.crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.crud.model.Employee;
import com.crud.service.EmployeeService;
import com.crud.service.EmployeeServiceImpl;

@SpringBootApplication
public class CrudApplication {

	public static void main(String[] args) {
		
		SpringApplication.run(CrudApplication.class, args);
		
	}
}
