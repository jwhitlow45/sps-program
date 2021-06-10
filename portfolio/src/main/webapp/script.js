// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

sessionStorage.setItem("mostRecentQuoteIndex", "-1")  //create session storage keeping track of most recent quote

async function displayRandomMessage()
{
  const responseFromServer = await fetch('/messages');
  const textFromResponse = await responseFromServer.json();
  const messageContainer = document.getElementById("random-message");
  const numQuotes = Object.keys(textFromResponse).length;
  var randomInt = Math.floor(Math.random() * numQuotes);
  var mostRecentQuote = parseInt(sessionStorage.getItem("mostRecentQuoteIndex"));
  if(mostRecentQuote == randomInt)  //check if quote is repeating
  {
    randomInt++;            //iterate to next quote
    randomInt %= numQuotes; //prevent randomInt from running off array
  }
  sessionStorage.setItem("mostRecentQuoteIndex", randomInt)  //create session storage keeping track of most recent quote
  messageContainer.innerText = textFromResponse[randomInt];
}

function toggle_dark_mode()
{
  if (localStorage.getItem("darkMode") == "enabled")
    localStorage.setItem("darkMode", "disabled");
  else if (localStorage.getItem("darkMode") == "disabled")
    localStorage.setItem("darkMode", "enabled");
  apply_theme();  
}

function apply_theme()
{
  //dark mode implemenetation
  if (localStorage.getItem("darkMode") == "enabled")
    enable_dark_mode();
  if (localStorage.getItem("darkMode") == "disabled")
    disable_dark_mode();
  else
  {
    localStorage.setItem("darkMode", "disabled");
    localStorage.getItem("darkMode");
    console.log("here");
  }
}

function enable_dark_mode()
{
  document.body.style.background = "#3c3c3c";
  document.body.style.color = "#ffffff";
}

function disable_dark_mode()
{
  document.body.style.background = "#ffffff";
  document.body.style.color = "#000000";
}

function run_on_page_load()
{
  change_page_content();                      //run function allowing button functionality
  $("#content").load("/html/about-me.html" ); //load landing page
  apply_theme();                              //apply website theme (dark/light mode)
}

function change_page_content()
{
  $(document).ready(function()  
  {  
    $("#about-me-button").click(function()  
    {  
        $("#content").load("html/about-me.html"); 
    });
    $("#education-button").click(function()  
    {  
        $("#content").load("html/education.html"); 
    });
    $("#experience-button").click(function()  
    {  
        $("#content").load("html/experience.html"); 
    });
    $("#references-button").click(function()  
    {  
        $("#content").load("html/references.html"); 
    });
    $("#contact-me-button").click(function()  
    {  
        $("#content").load("html/contact-me.html"); 
    });
  });
}
