function bonAppetit(bill) {
	function sumAll(bill) {
		return bill.reduce(function(accum, currentValue) {
			return accum + currentValue;
		}, 0);
	}

	console.log(bill);
	console.log(sumAll);
}

console.log(bonAppetit[(2, 4, 6)]);
//console.log(sumAll[(2, 4, 6)]);
