package com.company.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.company.util.DBUtil;

public class userDaoimp implements UserDao {

	@Override
	public boolean isValidUser(String name, String password) {
		String query = "SELECT * FROM info WHERE name=? AND password=?";
			try(Connection con = DBUtil.getConnection();
				PreparedStatement pst = con.prepareStatement(query)){
				
				pst.setString(1, name);
				pst.setString(2, password);
				
				ResultSet rs= pst.executeQuery();
				
				//System.out.println("Query is running");
				return rs.next();
				
			}
			catch(SQLException e) {
				e.printStackTrace();
				return false;
			}
		
	}
	
	@Override
	public boolean addInfo(Info info) {
		String query = "INSERT INTO info (name, email, password) VALUES (?,?,?)";
		
		try(Connection con = DBUtil.getConnection();
				PreparedStatement pst = con.prepareStatement(query)){
				
				pst.setString(1, info.getName());
				pst.setString(2, info.getEmail());
				pst.setString(3, info.getPassword());
				
				int rows= pst.executeUpdate();
				System.out.println("useradded");
				return rows>0;
	}
		catch(SQLException e) {
			e.printStackTrace();
			return false;
		}
	

}}
