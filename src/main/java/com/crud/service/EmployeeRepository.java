package com.crud.service;

import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.crud.model.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Serializable> {

}
