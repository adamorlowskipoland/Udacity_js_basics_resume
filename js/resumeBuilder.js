///*
//This is empty on purpose! Your code to build the resume will go here.
// */


const formattedName = HTMLheaderName.replace("%data%", "Adam Orlowski");
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
            "location" : "Kuyavian-Pomeranian Voivodeship",
            "workDescription" : "Sales"
        }
    ]
};


var projects = {
    "projects" : [
        {
            "title" : "Cat Clicker",
            "dates" : "2017.03",
            "description" : "Building simple Cat Clicking app based on M-model O-object V-view",
            "image" : "../images/catClicker.jpg"
        },
        {
            "title" : "Todo List App",
            "dates" : "2017.02",
            "description" : "Building Todo list app with multiply views, using Object Oriented Programming.",
            "image" : "../images/todoListApp.jpg"
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

function displayWork() {
    for (job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);

        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployer + formattedTitle);
        $('.work-entry:last').append(formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
    }
}
displayWork();


projects.display = function () {
    for (var project in projects.projects) {
        
        var formattedHTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        
        var formattedHTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        
        var formattedHTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        
        var formattedHTMLprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
        console.log(formattedHTMLprojectImage);
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedHTMLprojectTitle);
        $('.project-entry:last').append(formattedHTMLprojectDates);
        $('.project-entry:last').append(formattedHTMLprojectDescription);
        
        if (projects.projects[project].image.length > 0) {
            $('.project-entry:last').append(formattedHTMLprojectImage);

        }
    }
}
projects.display();



$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
$('#main').append(internationalizeButton);
$('#mapDiv').append(googleMap);

function inName(nameString) {
    var arrayNameString = nameString.trim().split(" ");
    arrayNameString[0] = arrayNameString[0][0].toUpperCase() + arrayNameString[0].slice(1).toLowerCase();
    arrayNameString[1] = arrayNameString[1].toUpperCase();
    nameString = arrayNameString.join(" ");
    return nameString;
}



