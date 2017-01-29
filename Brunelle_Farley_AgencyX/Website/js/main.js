// JavaScript Document
(function() {
		"use strict";
console.log("Template file has loaded.");
	
		var container = document.querySelector("#mainCon");
		var newSection = document.createElement("section");
		var clickMe = document.querySelector("#load");
	
		var content = [
		{heading: "lorem ipsum", 
		 copy: "lorem ipsum dolor set", 
		 image: "placeholder.jpg"},
		{heading: "lorem ipsum", 
		 copy: "lorem ipsum dolor set", 
		 image: "placeholder.jpg"},
		{heading: "lorem ipsum", 
		 copy: "lorem ipsum dolor set", 
		 image: "placeholder.jpg"},
		];
		
		function output(){
		var insertContent = "";
		
		for(var i=0; i<content.length; i++){
			insertContent += '<img src="'+content[i].image+'" alt="image"><p>'+content[i].heading+" "+content[i].copy+"</p>";
			}
		newSection.innerHTML = insertContent;
		container.appendChild(newSection);
		}
		
		clickMe.addEventListener("click", output, false);
		//don't need a new section, just to fill the sections we do have.
		//content needs to be tied to Nav links via listeners to select the individual links, even though there's only three links just loop the listeners to keep the code tidy?
		//the content needs to be called and placed in the proper containers. I imagine that it's as simple as making more objects and calling the right object to the right panel.
		//Testimonials need to be dropped on other pages through innerHTML, turning display off, something like that.
		//I think using something like child.node would be useful in selecting among the different panels. Yes.
		//Anything else? Well, obviously the code that's here needs to be modified.
		//instead of a new section, we want to insert the content into sections that already exist. To do that, we can change the innerHTML of an already existing section. The thing I'm wondering about is putting the content in order. Everything up to that point is pretty straightforward.
		//I think that's about it actually. This code base should be sufficient as a good starting point to quickly build out the functionality.
		//~Jesse

})();