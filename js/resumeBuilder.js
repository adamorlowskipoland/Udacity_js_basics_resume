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
    "bioPic" : "../images/fry.jpg"
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

var work = {
    "jobs" : [
        {
            "employer" : "Rywal-RHC",
            "title" : "Project Manager",
            "dates" : "2013-2016",
            "location" : "Poland",
            "workDescription" : ["Management", "Sales"]
        },
        {
            "employer" : "Trops S.A.",
            "title" : "Sales Representative",
            "dates" : "2010-2013",
            "location" : "kuj-pom area",
            "workDescription" : "Sales"
        }
    ]
};


//picture 
//
//$('#skills').prepend(HTMLbioPic);
//$('.biopic:last').src = bio.bioPic;
//console.log(document.getElementsByClassName('biopic'));


if (bio.skills !== "") {
    $('#header').append(HTMLskillsStart);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $('#skills').append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $('#skills').append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $('#skills').append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $('#skills').append(formattedSkill);
    
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $('#skills').append(formattedSkill);
    
} else {
    console.log("There is no skills");
}


for (job in work.jobs) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(formattedEmployer + formattedTitle);
}

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);




