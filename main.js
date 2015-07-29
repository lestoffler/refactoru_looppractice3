$ (document).on('ready', function() {

var students = [{
	name : 'Liz',
	age  : 25,
	city : 'Boulder'
},{
	name : 'Meghan',
	age  : 27,
	city : 'Denver'
},{
	name : 'Trent',
	age  : 32,
	city : 'Boulder'
},{
	name : 'Chelsea',
	age  : 24,
	city : 'Boulder'
},{
	name : 'Amir',
	age  : 18,
	city : 'Denver'
}];

// 1. Return: 25, 27, 32, 24, 18

// for (var i = 0; i < students.length; i++) {
// 	console.log(students[i].age);
// }

// 2. Return: Liz, Boulder; Meghan, Denver; Trent, Boulder; Chelsea, Boulder; Amir, Denver

// for (var i = 0; i < students.length; i++) {
// 	console.log(students[i].name, students[i].city);
// }

// 3. Return: Liz is from Boulder, Trent is from Boulder, Chelsea is from Boulder

// i8

// 4. Return: Meghan is older than 25, Trent is older than 25

for (var i = 0; i < students.length; i++) {
	return students
	// console.log(students.name + ' is older than 25');
}
});



































	