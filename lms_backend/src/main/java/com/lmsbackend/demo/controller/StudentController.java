package com.lmsbackend.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.lmsbackend.demo.model.Student;
import com.lmsbackend.demo.repository.StudentRepository;

@SpringBootApplication
@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
public class StudentController {
	@Autowired
	public StudentRepository stRep;
	
	//create student rest api
	@PostMapping("/addStudent")
	public String addStudent(@RequestBody Student student) {
		stRep.save(student);
		return "Student id:"+student.getId()+" addedd succesfully";
	}
	
	//retrieve all students rest api
	@GetMapping("/findAllStudents")
	public List<Student> getStudents(){
		return stRep.findAll();
	}
	
	//find student by id rest api
	@GetMapping("/findStudentById/{id}")
	public Optional<Student> getStudentById(@PathVariable int id){
		return stRep.findById(id);
	}
	
	//update student by id rest api
	@PutMapping("/updateStudent/{id}")
	public String updateStudent(@PathVariable int id,@RequestBody Student student) {
		Student stu = stRep.findById(id).orElseThrow();
		
		stu.setId(student.getId());
		stu.setFname(student.getFname());
		stu.setLname(student.getLname());
		stu.setEmail(student.getEmail());
		stu.setNic(student.getNic());
		stu.setUsername(student.getUsername());
		stu.setPassword(student.getPassword());
		stu.setTpNo(student.getTpNo());
		stu.setDegree(student.getDegree());
		
		stRep.save(stu);
		
		return "Student id:"+id+" updated successfully";
	}
	
	//delete student by id
	@DeleteMapping("/deleteStudent/{id}")
	public String deleteStudent(@PathVariable int id) {
		stRep.deleteById(id);
		return "Student id:"+id+" deleted successfully.";
	}

}
