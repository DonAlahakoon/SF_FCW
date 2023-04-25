package com.lmsbackend.demo.course;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CourseController {
	
	@Autowired
	public CourseRepository cseRep;
	
	@PostMapping("/newCourse")
	public String newCourse(@RequestBody Course course) {
		cseRep.save(course);
		return "Course id:"+course.getId()+" added succesfully";
	}
	
	@GetMapping("/findAllCourses")
	public List<Course> findAllCourses(){
		return cseRep.findAll();
	}
	
	@DeleteMapping("/deleteCourse/{id}")
	public String deleteCourse(@PathVariable String id) {
		cseRep.deleteById(id);
		return "Course id:"+id+" deleted successfully";
	}

}
