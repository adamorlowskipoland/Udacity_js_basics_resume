///*
//This is empty on purpose! Your code to build the resume will go here.
// */

const formattedName = HTMLheaderName.replace("%data%", "Adam Orlov");
const formattedRole = HTMLheaderRole.replace("%data%", "Junior JavaScript Developer");

var bio = {
    "name" : "Adam Orlowski",
    "role" : "Junior JavaScript Developer",
    "contacts" : {
        "mobile" : "535580335",
        "email" : "adamorlowskipoland@icloud.com",
        "github" : "adamorlowskipoland"
        },
    "welcomeMessage" : "Hi, how are you?",
    "skills" : ["HTML5", "CSS3", "Bootstrap", "JS", "jQuery"],
    "bioPic" : "images/fry.jpg"
}


var education = {
    "schools" : [
        {
            "name" : "WSB in Torun",
            "city" : "Torun",
            "major" : ["Management", "Psychology"]
        },
        {
            "name" : "III LO",
            "city" : "Torun",
            "major" : ["English", "Maths"]
        }
    ],
    "onlineCourses" : [
        {
            "name" : "JS Design Patterns",
            "city" : "online",
            "major" : ["Object Orientet Programming"]
        },
        {
            "name" : "JS Basics",
            "city" : "online",
            "major" : ["JS syntax"]
        },
        {
            "name" : "Frontend Dev Bootcamp",
            "city" : "Warsaw",
            "major" : ["HTML5", "CSS3", "Bootstrap", "JS", "jQuery"]
        }
    ]
};


$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$("#main").append(bio.name);
$("#main").append(work["currentJobPosition"]);
//$("#main").append(education.lastSchool);
