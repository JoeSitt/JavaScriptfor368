function Matrixcheck(x){//this function is an error catch to make sure the variable is an actual matrix in the correct format;
	if(!Array.isArray(x)){
		return false;
	}
	if(!Array.isArray(x[0])){
		return false;
	}
	var i=0;
	var j=0;
	x.width=x[0].length;
	for (i = 0; i < x.length; i++) {
		if (x.width != x[i].length) {
			return false;
		}
		x.width=x[i].length;
	}
	return true;
}



function mm(m1,m2){
	var goodmat = false;
	var goodmat2 = false;
	if (!goodmat) {
		if(Matrixcheck(m1)){
			goodmat= true;
			document.write("matrix 1"+'<br/>')
			display(m1);

		} else{
			document.write("sorry but the thing inputted for the first matrix is not a matrix, please press refresh and start again."+'<br/>');
			return;
		}
	}
	if(!goodmat2 && goodmat) {
		if(Matrixcheck(m2)){
			goodmat2= true;
			document.write("matrix 2"+'<br/>')
			display(m2);
		} else{
			document.write("sorry but the thing inputted for the second matrix is not a matrix, please press refresh and start again."+'<br/>');
			return;
		}
	}

	if (m1.width != m2.length) {// this is an error check to make sure the matracies are able to be multiplied together in their current order.
		document.write("these two matracies will not multiply together in their current state."+'<br/>');
	return;
	}
	m3=multiply(m1,m2);
	document.write("result"+'<br/>')
	display(m3);
	return m3;
}

function multiply(a, b) {// source:http://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript Author:Micheal Laszlo
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

function display(m) {// source:http://stackoverflow.com/questions/27205018/multiply-2-matrices-in-javascript Author:Micheal Laszlo
  for (var r = 0; r < m.length; ++r) {
    //document.write('&nbsp;&nbsp;'+m[r].join(' ')+'<br />');
		document.write('&nbsp;&nbsp;'+m[r].join(' ')+'<br />');
  }
}


main = function() {
	var m1=[[7,4]];
	var	m2=[[4,3],[2,2]];
	mm(m1,m2);
	document.write("Thank you for using Joe's Matrix multiplier. please press refresh to try"+" again.")
}
