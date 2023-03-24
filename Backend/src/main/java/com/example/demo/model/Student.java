package com.example.demo.model;

public class Student {
	
	private long id;
	private String fname;
	private String lName;
	private String email;
	private int nic;
	private int tpNo;
	private String username;
	private String password;
	private String degree;
	
	
	public Student() {
		
	}
	public Student(String fname, String lName, String email, int nic, int tpNo, String username, String password,
			String degree) {
		super();
		this.fname = fname;
		this.lName = lName;
		this.email = email;
		this.nic = nic;
		this.tpNo = tpNo;
		this.username = username;
		this.password = password;
		this.degree = degree;
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getNic() {
		return nic;
	}
	public void setNic(int nic) {
		this.nic = nic;
	}
	public int getTpNo() {
		return tpNo;
	}
	public void setTpNo(int tpNo) {
		this.tpNo = tpNo;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	
	
	
	
	

}
