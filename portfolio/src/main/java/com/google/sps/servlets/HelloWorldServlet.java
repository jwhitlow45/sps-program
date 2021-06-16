package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/messages")
public class HelloWorldServlet extends HttpServlet {

  //array list of strings containing messages to print to server
  ArrayList<String> myStringList = 
    new ArrayList<String>(Arrays.asList("\"SQL is just command-line Excel.\"",
                                        "\"We do things not because they are easy, but because we thought they were going to be easy.\"",
                                        "\"6 hours of debugging can save you 5 minutes of reading documentation.\""));

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");                        //set response type
    Random rd = new Random();                                     //create random object for rng
    int randomIndex = rd.nextInt(myStringList.size());            //generate random number
    response.getWriter().println(myStringList.get(randomIndex));  //print random message
  }
}
