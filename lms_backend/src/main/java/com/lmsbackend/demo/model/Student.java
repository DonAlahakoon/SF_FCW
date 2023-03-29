package com.lmsbackend.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="Student")
public class Student {
	
	@Id
	private int id;
	private String fname;
	private String lname;
	private String email;
	private String nic;
	private int tpNo;
	private String username;
	private String password;
	private String degree;

}
