Ext.onReady(function() {
	
	//Define class
	Ext.define('User', {
		name: '',
		address: '',
		age: 0,
		
		constructor: function(name, address, age) {
			this.name = name;
			this.address = address;
			this.age = age;
		},
		getName: function() {
			return this.name;
		}
	});
	
	//Create an instance
	var user = new User('Ajit Kumar', 'Plot# 66, ABC Lane, XYZ Street, My State, My Country - 500014', 34);
	
	alert(user.getName());
});