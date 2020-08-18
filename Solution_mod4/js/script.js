// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var i;
for (i=0;i<names.length;i++) {
   
  name=names[i];

  var firstLetter = name.charAt(0);
  var res = firstLetter.toLowerCase();
  
  if (res=='j') {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}