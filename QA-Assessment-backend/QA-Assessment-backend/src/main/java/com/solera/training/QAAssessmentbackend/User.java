package com.solera.training.QAAssessmentbackend;

public class User {
	private String fName;
	private String lName;
	private String userName;
	private String pword;
	public User(String fName, String lName, String userName, String pword) {
		super();
		this.fName = fName;
		this.lName = lName;
		this.userName = userName;
		this.pword = pword;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPword() {
		return pword;
	}
	public void setPword(String pword) {
		this.pword = pword;
	}
	
	
	//Login func
	
	public boolean loginFunc(String username, String password) {
		if(username.equalsIgnoreCase(this.userName) && password.equals(this.pword)) {
			return true;
		}
		else {
			return false;
		}
		
		
	}
	
	
	
	public static void main(String[] args) {
		
	}
	

}
