package com.lmsbackend.demo.lecturer;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LecturerController {
	
	@Autowired
	public LecturerRepository lecRep;
	
	//create new lecturer rest api
	@PostMapping("/newLecturer")
	public String newLecturer(@RequestBody Lecturer lecturer) {
		lecRep.save(lecturer);
		return "Lecturer id: "+lecturer.getId()+" added successfully";
	}
	
	//get all lecturers rest api
	@GetMapping("/findAllLecturers")
	public List<Lecturer> findAllLecturers(){
		return lecRep.findAll();
	}
	
	//get lecturer by id rest api
	@GetMapping("/findLecturerById/{id}")
	public Optional<Lecturer> findLecturerByID(@PathVariable String id){
		return lecRep.findById(id);
	}
	
	//update lecturer by id
	@PutMapping("/updateLecturer/{id}")
	public String updateLecturer(@PathVariable String id,@RequestBody Lecturer lecturer) {
		Lecturer lec = lecRep.findById(id).orElseThrow();
		
		lec.setFname(lecturer.getFname());
		lec.setLname(lecturer.getLname());
		lec.setEmail(lecturer.getEmail());
		lec.setUsername(lecturer.getUsername());
		lec.setPassword(lecturer.getPassword());
		lec.setQualification(lecturer.getQualification());
		
		lecRep.save(lec);
		
		return "Lecturer id: "+id+" updated successfully";
	}
	
	//delete lecturer by id rest api
	@DeleteMapping("/deleteLecturer/{id}")
	public String deleteLecturer(@PathVariable String id) {
		lecRep.deleteById(id);
		return "Lecturer id:"+id+" deleted successfully";
	}

}
