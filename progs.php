
  
  
  
<?php

if(isset($_POST['data'])){
	$num=rand(1,2);
	if($num==1){
	  echo 'You got heads!';
	}
	else if($num==2){
	  echo 'You got tails!';
	}
}

if(isset($_POST['num'])){
	$num=rand(1,10);
	echo "Your number is: $num";
}

 if (isset($_POST["byear"]) && !empty($_POST["byear"])) {
        $year = intval($_POST["byear"]);
        if($year >=2013 && $year<=2024){
      echo "You are a part of Generation Alpha!"
    }
    else if($year >=1995 && $year<=2012){
      echo "You are a part of Generation Z!"
    }
    else if($year >=1980 && $year<=1994){
      echo "You are a part of Generation Y, also known as Millennials!"
    }
    else if($year >=1965 && $year<=1979){
      echo "You are a part of Generation X!"
    }
    else if($year >=1946 && $year<=1964){
     echo "You are a part of the Baby Boomer Generation!"
    }
    else if($year >=1925 && $year<=1945){
      echo "You are a part of the Silent Generation!"
    }
    else if($year >=1901 && $year<=1942){
      echo "You are a part of the Greatest Generation!"
    } else {
        echo "Sorry, we couldn't determine your generation.";
        }
    } else {
        echo "Please enter your birth year.";
    }
}

?>
