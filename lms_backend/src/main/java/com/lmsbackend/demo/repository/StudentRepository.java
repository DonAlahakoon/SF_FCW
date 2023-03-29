package com.lmsbackend.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lmsbackend.demo.model.Student;

public interface StudentRepository extends MongoRepository<Student,Integer>{

}
