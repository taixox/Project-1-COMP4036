document.getElementById("h/t").onclick=cointoss;
function cointoss() {
    let num = Math.floor(Math.random() * 2) + 1;
    if (num == 1) {
       document.getElementById("result").innerHTML = "You got heads!";
    }
    else if(num == 2){
      document.getElementById("result").innerHTML = "You got tails!";  
    }
}


 
  function showgen(){
    let year=Number(document.getElementById("year").value);
    if(year >=2013 && year<=2024){
      document.getElementById("gen").innerHTML = "You are a part of Generation Alpha!"
    }
    else if(year >=1995 && year<=2012){
      document.getElementById("gen").innerHTML = "You are a part of Generation Z!"
    }
    else if(year >=1980 && year<=1994){
      document.getElementById("gen").innerHTML = "You are a part of Generation Y, also known as Millennials!"
    }
    else if(year >=1965 && year<=1979){
      document.getElementById("gen").innerHTML = "You are a part of Generation X!"
    }
    else if(year >=1946 && year<=1964){
     document.getElementById("gen").innerHTML = "You are a part of the Baby Boomer Generation!"
    }
    else if(year >=1925 && year<=1945){
      document.getElementById("gen").innerHTML = "You are a part of the Silent Generation!"
    }
    if(year >=1901 && year<=1942){
      document.getElementById("gen").innerHTML = "You are a part of the Greatest Generation!"
    }
  }
  
 document.getElementById("rand").onclick=randomnum;
function randomnum() {
    let val = Math.floor(Math.random() * 10) + 1;
    document.getElementById("value").innerHTML = "Your random number is: " + val;
}