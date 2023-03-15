function scuberGreetingForFeet(feetNum){
  // Write your code here!
  if(feetNum <= 400){
    return ("This one is on me!")
  }
  else if(feetNum > 400 && feetNum < 2000 ){
    return("That will be twenty bucks.")
  }
  else if(feetNum >= 2000 && feetNum <= 2500){
    return("I will gladly take your thirty bucks.")
  }
  else if(feetNum > 2500){
    return("No can do.")
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  if(cityName == "NYC"){
    return ("Ok, sounds good.")
  }
  else{
    return ("No go.")
  }
}

function switchOnCharmFromTip(tipMoney){
  // Write your code here!
  if(tipMoney === "generous"){
    return "Thank you so much."
  }
  else if(tipMoney === "not as generous"){
    return "Thank you."
  }
  else{
    return "Bye."
  }
}