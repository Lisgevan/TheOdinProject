const arr = [23, 24, 435, 67];
const arr1 = [];
arr.forEach(function (el) {
	return arr1.push(el ** 2);
});

console.log(arr1); //prints in the console >(4) [529, 576, 189225, 4489]
