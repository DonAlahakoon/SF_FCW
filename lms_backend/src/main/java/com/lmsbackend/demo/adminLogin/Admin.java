package com.lmsbackend.demo.adminLogin;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="Admin")
public class Admin {
	
	@Id
	private int id;
	private String email;
	private String username;
	private String password;
}
