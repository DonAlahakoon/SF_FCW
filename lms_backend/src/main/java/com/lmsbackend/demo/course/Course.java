package com.lmsbackend.demo.course;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection="Course")
public class Course {
	
	private String id;
	private String cname;
	

}
