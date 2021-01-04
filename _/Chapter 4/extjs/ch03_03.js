Ext.require(['User']);

Ext.onReady(function() {
	
	var user = Ext.create('AppUser', {
		name: 'Ajit Kumar',
		address: 'Plot# 66, ABC Lane, XYZ Street, My State, My Country - 500014',
		age: 12
	});
	
	var employee = Ext.create('Employee', {
		name: 'Ajit Kumar',
		address: 'Plot# 66, ABC Lane, XYZ Street, My State, My Country - 500014',
		age: 34,
		department: 'Finance'
	});
	
	var employee = Ext.create('Employee', {
		name: 'Ajit Kumar',
		address: 'Plot# 66, ABC Lane, XYZ Street, My State, My Country - 500014',
		age: 34,
		department: 'Finance'
	});
	
	var employee = Ext.create('Employee', {
		name: 'Ajit Kumar',
		address: 'Plot# 66, ABC Lane, XYZ Street, My State, My Country - 500014',
		age: 34,
		department: 'Finance'
	});
	
//	alert(user.name + ":" + user.getAddress());
//	alert(employee.getName() + ":" + employee.getDepartment());
//	alert('Total users in the system: ' + User.count);
//	alert('Total users in the system: ' + Employee.count);
//	alert(user.getString());
//	alert(employee.getString());
	Logger.log(employee.getString());
});