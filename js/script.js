// Zadanie 9.4 CHoinka


function drawTree(heightTree){
  
for(var i=1; i<=heightTree; i++) {
    var star = ' ';
        for(var j=i; j<=heightTree; j++){
        star += " ";
        }
        for (var k=0; k<(i*2)-1; k++ ){
			star +="*";
	}
        console.log(star);
        }   
}
drawTree(10);




