package com.company.dao;

public interface UserDao {

	boolean isValidUser(String name, String password);

	boolean addInfo(Info info);

}
