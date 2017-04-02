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











//We learned about relational operators and how they can classify the relationship between two values. Your job is to write the function getRelationship(x,y) function, which should return a string representing whether x is >, < or = y. For example:
//
//var rel = getRelationship(2, 3);
//console.log(rel); // <
//If one or both of the values aren't numbers, your function should output:
//
//"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
//where [this value] and [that value] are replaced with the non-numerical values. The sentence should be grammatically correct by outputting either is or are and pluralizing number if necessary.
//
//For example:
//
//var rel1 = getRelationship("this", 2);
//console.log(rel1); // "Can't compare relationships because this is not a number"
//
//var rel2 = getRelationship("that");
//console.log(rel2) // "Can't compare relationships because that and undefined are not numbers"
//Notice in the second example, because the y value was missing, the output said that undefined was not a number.
//
//Adapted from UVa problem 11172.


//function getRelationship(x, y) {
//    // Your code goes here!
//    if (isNaN(x) && isNaN(y)) {
//        console.log("Can't compare relationships because " + x + " and " + y + " are not numbers.");
//        
//    } else if (isNaN(x)) {
//        console.log("Can't compare relationships because " + x + " is not a number.");
//        
//    } else if (isNaN(y)) {
//        console.log("Can't compare relationships because " + y + " is not a number.");
//        
//    } else {
//        if (x > y) {
//            return ">";
//        } else if (x < y) {
//            return "<";
//        } else {
//            return "=";
//        }
//    }
//};
//
//// Try logging these functions to test your code!
//console.log(getRelationship(1,4));
//console.log(getRelationship(1,1));
//console.log(getRelationship("that",2));
//console.log(getRelationship("this"," something else"));
//console.log(getRelationship(3));
//console.log(getRelationship("hi"));
//console.log(getRelationship(NaN));
//console.log(getRelationship(NaN, undefined));








//Twelve people have walked on the Moon. They are:
//
//Neil Armstrong
//Buzz Aldrin
//Pete Conrad
//Alan Bean
//Alan Shepard
//Edgar Mitchell
//David Scott
//James Irwin
//John W Young
//Charles Duke
//Eugene Cernan
//Harrison Schmitt
//You'll notice that these names are listed in the order that they first stepped on the Moon, not alphabetical order. To alphabetize them, it would make sense to write their names as lastname, firstname. For example: Neil Armstrong becomes Armstrong, Neil.
//
//Finish the alphabetizer(_names) function, which takes in a names array (of length N) containing strings of names and returns an alphabetized array of names in lastname, firstname format.

//var moonWalkers = [
//  "Neil Armstrong",
//  "Buzz Aldrin",
//  "Pete Conrad",
//  "Alan Bean",
//  "Alan Shepard",
//  "Edgar Mitchell",
//  "David Scott",
//  "James Irwin",
//  "John Young",
//  "Charles Duke",
//  "Eugene Cernan",
//  "Harrison Schmitt"
//];
//
//function alphabetizer(names) {
//    // Your code goes here!
//}
//
//// Try logging your results to test your code!
//console.log(alphabetizer(moonWalkers));











//Google's PageSpeed Insights (PSI) scores websites on their speed. A perfect score is 100 and the worst score is 0. Alongside the score, PSI provides relevant advice for improvements.
//
//By integrating an automated PSI score into a suite of front-end unit tests, you can periodically check a website's overall speed.
//
//Let's assume you're building the front-end testing framework and you make a call to the PSI API. You receive the JSON below as a response.
//
//Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.
//
//Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an array of their strings.
//
//var psiResults;
//
//psiResults = {
// "kind": "pagespeedonline#result",
// "id": "/speed/pagespeed",
// "responseCode": 200,
// "title": "PageSpeed Home",
// "score": 90,
// "pageStats": {
//  "numberResources": 22,
//  "numberHosts": 7,
//  "totalRequestBytes": "2761",
//  "numberStaticResources": 16,
//  "htmlResponseBytes": "91981",
//  "cssResponseBytes": "37728",
//  "imageResponseBytes": "13909",
//  "javascriptResponseBytes": "247214",
//  "otherResponseBytes": "8804",
//  "numberJsResources": 6,
//  "numberCssResources": 2
// },
// "formattedResults": {
//  "locale": "en_US",
//  "ruleResults": {
//   "AvoidBadRequests": {
//    "localizedRuleName": "Avoid bad requests",
//    "ruleImpact": 0.0
//   },
//   ...
//   "MinifyJavaScript": {
//    "localizedRuleName": "Minify JavaScript",
//    "ruleImpact": 0.1417,
//    "urlBlocks": [
//     {
//      "header": {
//       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
//       "args": [
//        {
//         "type": "BYTES",
//         "value": "1.3KiB"
//        },
//        {
//         "type": "INT_LITERAL",
//         "value": "0"
//        }
//       ]
//      },
//      "urls": [
//       {
//        "result": {
//         "format": "Minifying $1 could save $2 ($3% reduction).",
//         "args": [
//          {
//           "type": "URL",
//           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
//          },
//          {
//           "type": "BYTES",
//           "value": "717B"
//          },
//          {
//           "type": "INT_LITERAL",
//           "value": "1"
//          }
//         ]
//        }
//       },
//       ...
//       {
//        "result": {
//         "format": "Minifying $1 could save $2 ($3% reduction).",
//         "args": [
//          {
//           "type": "URL",
//           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
//          },
//          {
//           "type": "BYTES",
//           "value": "258B"
//          },
//          {
//           "type": "INT_LITERAL",
//           "value": "0"
//          }
//         ]
//        }
//       }
//      ]
//     }
//    ]
//   },
//   ...
//   "SpriteImages": {
//    "localizedRuleName": "Combine images into CSS sprites",
//    "ruleImpact": 0.0
//   }
//  }
// },
// "version": {
//  "major": 1,
//  "minor": 11
// }
//}

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
//function ruleList(results) {
    // Your code goes here!
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
//function totalBytes(results) {
    // Your code goes here!
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!






//
//psinsights = {
// "kind": "pagespeedonline#result",
// "id": "/speed/pagespeed",
// "responseCode": 200,
// "title": "PageSpeed Home",
// "score": 90,
// "pageStats": {
//  "numberResources": 22,
//  "numberHosts": 7,
//  "totalRequestBytes": "2761",
//  "numberStaticResources": 16,
//  "htmlResponseBytes": "91981",
//  "cssResponseBytes": "37728",
//  "imageResponseBytes": "13909",
//  "javascriptResponseBytes": "247214",
//  "otherResponseBytes": "8804",
//  "numberJsResources": 6,
//  "numberCssResources": 2
// },
// "formattedResults": {
//  "locale": "en_US",
//  "ruleResults": {
//    "AvoidBadRequests": {
//      "localizedRuleName": "Avoid bad requests",
//      "ruleImpact": 0.0
//    },
//    "MinifyJavaScript": {
//      "localizedRuleName": "Minify JavaScript",
//      "ruleImpact": 0.1417,
//      "urlBlocks": [
//      {
//        "header": {
//       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
//       "args": [
//        {
//         "type": "BYTES",
//         "value": "1.3KiB"
//        },
//        {
//         "type": "INT_LITERAL",
//         "value": "0"
//        }
//       ]
//        },
//        "urls": [
//        {
//          "result": {
//         "format": "Minifying $1 could save $2 ($3% reduction).",
//         "args": [
//          {
//           "type": "URL",
//           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
//          },
//          {
//           "type": "BYTES",
//           "value": "717B"
//          },
//          {
//           "type": "INT_LITERAL",
//           "value": "1"
//          }
//         ]
//        }
//       },
//       {
//        "result": {
//         "format": "Minifying $1 could save $2 ($3% reduction).",
//         "args": [
//          {
//           "type": "URL",
//           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
//          },
//          {
//           "type": "BYTES",
//           "value": "258B"
//          },
//          {
//           "type": "INT_LITERAL",
//           "value": "0"
//          }
//         ]
//        }
//       }
//      ]
//     }
//    ]
//   },
//   "SpriteImages": {
//    "localizedRuleName": "Combine images into CSS sprites",
//    "ruleImpact": 0.0
//   }
//  }
// },
// "version": {
//  "major": 1,
//  "minor": 11
// }
//};
//
//// Try logging the outputs below to test your code!
//console.log(ruleList(psinsights));
//console.log(totalBytes(psinsights));