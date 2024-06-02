package com.company.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;

import com.company.dao.UserDao;
import com.company.dao.userDaoimp;


@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private static UserDao userDao = new userDaoimp();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String name = request.getParameter("name");
		String password = request.getParameter("password");
		
		
		if(userDao.isValidUser(name, password)) {
			HttpSession session = request.getSession();
			session.setAttribute("name", name);
			response.sendRedirect("https://g.co/kgs/rNpvuNu");
		}
		else{
			PrintWriter out = response.getWriter();
			out.println("Invalid user or/and password. Try Again!");
			//response.sendRedirect("LoginPage.html");
			
		}
	}

}
