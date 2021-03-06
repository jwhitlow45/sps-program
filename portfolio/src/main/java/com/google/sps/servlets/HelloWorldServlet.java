package com.google.sps.servlets;
import com.google.gson.Gson;

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
    new ArrayList<String>(Arrays.asList("\"SQL is just command-line Excel.\" -Unkown",
                                        "\"We do things not because they are easy, but because we thought they were going to be easy.\" -Unknown",
                                        "\"6 hours of debugging can save you 5 minutes of reading documentation.\" -Unknown",
                                        "\"The best thing about a boolean is even if you are wrong, you are only off by a bit.\" -Unknown",
                                        "\"If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.\" -Gerald Weinberg",
                                        "\"The trouble with programmers is that you can never tell what a programmer is doing until it's too late.\" -Seymour Cray",
                                        "\"A good programmer is someone who always looks both ways before crossing a one-way street.\" -Doug Linder",
                                        "\"Walking on water and developing software from a specification are easy if both are frozen.\" -Unknown",
                                        "\"There are 10 types of people: those who understand binary and those who don't.\" -Unknown"));

  Gson gson = new Gson();
  String json = gson.toJson(myStringList);
  
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;");                        //set response type
    response.getWriter().println(json);  //print random message
  }
}
