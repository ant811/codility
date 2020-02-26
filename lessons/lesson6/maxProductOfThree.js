function solution(A) {	
	let sorted = A.sort((a, b) => {
		if(a < b) {
			return -1;    
		}  
		if(a > b) {
			return 1;
		}
		return 0;
	});
	
	let length = sorted.length;
	let finalThreeProd = sorted[length - 3] * sorted[length - 2] * sorted[length - 1];
	if (sorted[0] < 0 && sorted[1] < 0) {
		if (sorted[0] * sorted[1] * sorted[length - 1] > finalThreeProd) {
			return sorted[0] * sorted[1] * sorted[length - 1];
		} else {
			return finalThreeProd;
		}
	} else {
			return finalThreeProd;
	}
}

// Time complexity: O(n * log(n));

module.exports = { solution };
