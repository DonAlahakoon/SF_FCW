package com.lmsbackend.demo.adminLogin;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {
	
	@Autowired
	public AdminLoginRepository adRep;
	
	//create admin rest api
	@PostMapping("/newAdmin")
	public String addAdmin(@RequestBody Admin admin) {
		adRep.save(admin);
		return "Admin id:"+admin.getId()+" added succesfully";
	}
	
	//read admin by id rest api
	@GetMapping("findAdminById/{id}")
	public Optional<Admin> getAdminById(@PathVariable int id){
		return adRep.findById(id);
	}
	
	
	//read all admins rest api
	@GetMapping("findAllAdmins")
	public List<Admin> getAllAdmins(){
		return adRep.findAll();
	}
}
