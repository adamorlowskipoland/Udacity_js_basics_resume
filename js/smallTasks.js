//var s = "audacity";
//
//var udacityizer = function(s) {  
//    // Right now, the variable s === "audacity"
//    // Manipulate s to make it equal to "Udacity"
//    // Your code goes here!
//    
//    s = "U" + s.slice(2);
//    
//    
////    s = s.replace("au", "U");
//    return s;
//};
//
//// Did your code work? The line below will tell you!
//console.log(udacityizer(s));
//
//
//var sampleArray = [0,0,7];
//
//var incrementLastArrayElement = function(_array) {
//    var newArray = [];
//    // Your code should make newArray equal to an array that has the same
//    // values as _array, but the last number has increased by one.
//    
//    // For example:
//    // _array = [1, 2, 3];
//    // turns into:
//    // newArray = [1, 2, 4];
//    
//    // Your code goes in here!
//    newArray = _array.slice();
//    var lastElem = newArray.pop() + 1;;
//    newArray.push(lastElem);
//    
//    // Don't delete this line!
//    return newArray;
//};
//
//// Did your code work? The line below will tell you!
//console.log(incrementLastArrayElement(sampleArray));













//var name = "AlbERt EINstEiN";
//
//function nameChanger(oldName) {
//    var finalName = oldName;
//    // Your code goes here!
//
//    var names = finalName.split(" ");
////    names[names.length-1] = names[names.length-1].toUpperCase();
//    names[1] = names[1].toUpperCase();
//    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//    finalName = names.join(" ");
//    
//    
//    // Don't delete this line!
//    return finalName;
//};
//
//// Did your code work? The line below will tell you!
//console.log(nameChanger(name));













//var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
//
//var charEscape = function(_html) {
//    var newHTML = _html;
//    // How will you make sure that newHTML doesn't contain any < or > ?
//    // Your code goes here!
//    var reg = /</g;
//    var reg2 = />/g;
//    newHTML = newHTML.replace(reg, "\"");
//    newHTML = newHTML.replace(reg2, "\"");
//    console.log(newHTML);
//    
//    // Don't delete this line!
//    return newHTML;
//};
//
//// Did your code work? The line below will tell you!
//console.log(charEscape(html));













//var weirdObject = {
//    "property": "Time for an astronomy lesson!",
//    "property1": "Cameron's minor in college was astronomy",
//    "property-2": "The 4 Galilean largest moons of Jupiter are:",
//    "property 3": "Io, Ganymede, Callisto, Europa",
//    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
//    " property": "The Sun contains 99.87% of the mass of the entire solar system",
//    "property()": "There are 5 dwarf planets in our solar system:",
//    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
//    "8property": "Mars has two tiny moons: Phobos and Deimos"
//};
//console.log(weirdObject["8property"]);
////console.log(weirdObject.8property);
//
//
//// Use console.log() to figure out if dot and/or bracket notation
//// will work to access the properties below. Mark true if you can use dot/bracket
//// notation to access the property, otherwise mark false.
//
//// For example, uncomment the line below to see if you can use dot notation to access `property1`.
////console.log(weirdObject.property1);
//
//// I'll give you the first answer. The rest are set to false. Try out each property and
//// if you can use dot or bracket notation to access it, change the answer to true!
//
//// property
//var dotNotation0 = true;
//var bracketNotation0 = true;
//
//// property1
//var dotNotation1 = true;
//var bracketNotation1 = true;
//
//// property-2
//var dotNotation2 = false;
//var bracketNotation2 = true;
//
//// property 3
//var dotNotation3 = false;
//var bracketNotation3 = true;
//
//// property$
//var dotNotation4 = true;
//var bracketNotation4 = true;
//
//// *space*property
//var dotNotation5 = false;
//var bracketNotation5 = true;
//
//// property()
//var dotNotation6 = false;
//var bracketNotation6 = true;
//
//// property[]
//var dotNotation7 = false;
//var bracketNotation7 = true;
//
//// 8property
//var dotNotation8 = false;
//var bracketNotation8 = true;








//var workOBJ = {
//  "jobs": [
//    {
//      "employer": "Udacity",
//      "title": "Course Developer",
//      "location": "Mountain View, CA",
//      "dates": "Feb 2014 - Current",
//      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//    },
//    {
//      "employer": "LearnBIG",
//      "title": "Software Engineer",
//      "location": "Seattle, WA",
//      "dates": "May 2013 - Jan 2014",
//      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//    },
//    {
//      "employer": "LEAD Academy Charter High School",
//      "title": "Science Teacher",
//      "location": "Nashville, TN",
//      "dates": "Jul 2012 - May 2013",
//      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//    },
//    {
//      "employer": "Stratford High School",
//      "title": "Science Teacher",
//      "location": "Nashville, TN",
//      "dates": "Jun 2009 - Jun 2012",
//      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//    }
//  ]
//};
//
//// Your code goes here! Let me help you get started
//
//function locationizer(work_obj) {
//    const localizations = [];
//    
//    for (var localization in work_obj.jobs) {
//        localizations.push(work_obj.jobs[localization].location);
//    }
//    return localizations;
//}
//
//// Did locationizer() work? This line will tell you!
//console.log(locationizer(workOBJ));












