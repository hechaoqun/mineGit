const toFixed = num => num.toFixed(2);

console.log(toFixed(100));

let fun = {
	forNum (num) {
		for(let i = 0; i < num; i++) {
			console.log(i);
		}
	}
};

fun.forNum(100);
