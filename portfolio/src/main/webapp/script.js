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

async function displayRandomMessage()
{
  const responseFromServer = await fetch('/hello');
  const textFromResponse = await responseFromServer.text();
  const messageContainer = document.getElementById("random-message");
  messageContainer.innerText = textFromResponse;
} 

function display_landing_page()
{
  $("#content").load("/html/about-me.html" );
}

function load_navigation_bar()
{
  $("#navigation-bar").load("/html/nav.html");
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
  });
}
