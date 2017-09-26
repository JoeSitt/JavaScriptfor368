function square(x){
	for(i=0; i<x;i++){
		for(j=0;j<x;j++){
			if(i==0||i==x-1||j==0||j==x-1){
				chalk.print("* ");//I didnt like the rectangle so i added a space to make it a square
			} else{
				chalk.print("  ");
			}
		}
		chalk.println("");
	}
	chalk.println("Thank you for using Joe's Print-O-Square. Press refresh to use again.");
}

function dimond(x){
	var spacecounter = 0;
  for(i=1; x*2-1 >= i; i++ ){
    for(j=0; x-i>j; j++ ){
    	chalk.print("  ");
    }
		if (i>x) {
			for (j = 0; i-x >j; j++) {
				chalk.print("  ");
			}
		}
    chalk.print("* ");
    for (j = 0; ((i-1)*2-1 >= j)&&(i<=x); j++) {
			if((i-1)*2-1 > j||i==1||i ==x*2-1){
      chalk.print("  ");
    } else {
      chalk.print("* ");
			spacecounter=j+2;
    }
    }
		spacecounter=spacecounter-2;
		for (j = 0; (spacecounter>=j)&&(i>x); j++) {
      if(spacecounter> j||i==1||i ==x*2-1){
      chalk.print("  ");
    } else {
      chalk.print("* ");
    }
    }



		chalk.println("");
  }
}


function dimondrough(x){
	var spacecounter = 0;
  for(i=1; x*2-1 >= i; i++ ){
    for(j=0; x-i>j; j++ ){
    	chalk.print("__");
    }
		if (i>x) {
			for (j = 0; i-x >j; j++) {
				chalk.print("==");
			}
		}
    chalk.print("* ");
    for (j = 0; ((i-1)*2-1 >= j)&&(i<=x); j++) {
			if((i-1)*2-1 > j||i==1||i ==x*2-1){
      chalk.print("..");
    } else {
      chalk.print("* ");
			spacecounter=j+2;
    }
    }
		spacecounter=spacecounter-2;
		for (j = 0; (spacecounter>=j)&&(i>x); j++) {
      if(spacecounter> j||i==1||i ==x*2-1){
      chalk.print("<>");
    } else {
      chalk.print("* ");
    }
    }



		chalk.println("");
  }
}




main = function() {

	var x = prompt("Please pick a size for your square which is greater than 1 and less than 119.",6);
	if((isNaN(x))||x<2||x>=119||x%1!=0){
		x=6;
		chalk.println("Incorrect input. 6 was used as a default.")
		}
	square(x);
	}
