package com.company.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import com.company.dao.Info;
import com.company.dao.UserDao;
import com.company.dao.userDaoimp;


@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static UserDao UserDao = new userDaoimp();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisterServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String name= request.getParameter("name");
		String password= request.getParameter("password");
		String email= request.getParameter("email");
		
		Info info = new Info();
		info.setName(name);
		info.setEmail(email);
		info.setPassword(password);
		
		if(UserDao.addInfo(info)) {
			PrintWriter out = response.getWriter();
			out.println("Registration Successful, Do Login!");
		}
		else {
			PrintWriter Out = response.getWriter();
			Out.println("User exists");
			
		}
	}

}
