

function ghost(color,x,y) {
	//assuming the positive y direction is north on this coordinate system
	//assuming the positive x direction is east on this coordinate system
	//assuming the coordinate system is : 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
this.color=color||"translucent";
this.x=(x%16)||8;
this.y=(y%16)||8;
}


main = function() {
	var m1= new ghost();
	var m2= new ghost("red",15,0);
	var m3= new ghost("blue",8,15);
	
	
	ghost.prototype.toString= function(){
		var string = "The "+ this.color+" ghost is at position ("+this.x+","+this.y+")."
		return string; //assuming im supposed to be returning the ghost as a string of its position and color
	}
	
	console.log(m1.toString());
	console.log(m2.toString());
	console.log(m3.toString());
	
	
	ghost.prototype.up= function(){this.y=((this.y+17)%16);}
	ghost.prototype.right=function(){
		this.x=(this.x+17)%16;
	}
	ghost.prototype.down=function(){
		this.y=(this.y+15)%16;
	}
	ghost.prototype.left=function(){
		this.x=(this.x+15)%16;
	}
	
	m1.up();
	m2.down();
	m2.right();
	m3.up();
	
	console.log(m1.toString());
	console.log(m2.toString());
	console.log(m3.toString());
	
}
