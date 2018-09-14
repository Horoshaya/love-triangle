/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var count = 0;

	for (var i = 0; preferences.length - 1 >= i; i++) {
		while (preferences[i] == undefined && preferences.length - 1 >= i){
			i++;
		}

		var num = i+1,
			one = preferences[i],
			two = preferences[--one],
			three = preferences[--two];

		if (num == three && ++one != three) {
			count++;

			delete preferences[i];
			delete preferences[--one];
			delete preferences[two];
		
		}	
	}

  return count;
};
