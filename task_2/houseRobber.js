const houseRobber = (nums) => {
	const decreaseArray = nums.sort(function(a, b) {
  	return b - a;
	})
return decreaseArray[0] + decreaseArray[1];
}
