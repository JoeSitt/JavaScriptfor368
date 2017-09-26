

function Pr() {
	var num1= Math.floor(Math.random()*10);
	var num2= Math.floor(Math.random()*10);
	chalk.println(""+num1+"+"+num2+" in less than 5 sec");
	var pT = chalk.delay(5000);
	var box1= chalk.entrybox();
	box1.then(function(o){
		if(o=="stop"){}else{//i added a secret stop function to print it.
		box1.answer=parseInt(o);
		//chalk.println(""+o);
		if(num1+num2==box1.answer){
			chalk.println("Thats correct!");
		} else{
			chalk.println("Thats not right!");
		}
		}
		//pT.then(box1=Promise.reject());
	});
	
	var p3 = Promise.race([box1,pT]);
	p3.then(function(o) { //chalk.println("Game Over"); 
	    if (o == undefined) {
		chalk.println("You lost, you ran out of time"); 
		//box1=Promise.reject(pT==true);
		chalk.input[chalk.x][0].disabled=true;//I edited the chalk file so that i could have access to the text box disabled attribute. I added chalk.x(a counter of how many entryboxes were called) and chalk.input an array that has access to the variable input in chalk.entryboxes.
	    } else if(o==num1+num2){
		chalk.println("You win");
		//pT.reject();
	    }
		if(o!="stop"){
		Pr();
		}
	});
}


main = function() {
	//chalk.x=0;

	Pr();

	
	
	
}
