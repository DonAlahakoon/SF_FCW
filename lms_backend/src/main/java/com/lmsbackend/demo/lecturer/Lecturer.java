package com.lmsbackend.demo.lecturer;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="Lecturer")
public class Lecturer {
	
	@Id
	private String id;
	private String fname;
	private String lname;
	private String email;
	private String username;
	private String password;
	private String qualification;

}
