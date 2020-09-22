function panggilNestedArray(value){
	var newObj = [];
	for (var i = 0; i < value.length; i++) {
		for(var j=0; j < value.length; j++){
				newObj[j]=value[j][i]
			}
			console.log(newObj);
		}
	}

var nestedArray = [
[1,2,3,4],
["Mark Zuckerberg","Elon Musk","Bill Gates","Steve Jobs"],
["Facebook", "Tesla", "Microsoft","Apple"]
]

panggilNestedArray(nestedArray)
