///*
//This is empty on purpose! Your code to build the resume will go here.
// */
//const formattedName = HTMLheaderName.replace("%data%", "Adam Orlov");
//const formattedRole = HTMLheaderRole.replace("%data%", "Junior JavaScript Developer");
//
//$('#header').prepend(formattedRole);
//$('#header').prepend(formattedName);
//
//
//
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



var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!

    var names = finalName.split(" ");
//    names[names.length-1] = names[names.length-1].toUpperCase();
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    
    
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));