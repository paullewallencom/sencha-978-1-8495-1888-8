Ext.define('Employee', {
	extend: 'User',
	config: {
		department: ''
	},
	getString: function() {
		return this.mixins.Stringyfy.getString.call(this) + "\nDEPARTMENT: " + this.department;
	},
	constructor: function(config) {
		this.initConfig(config);
		this.self.count++;
	}
});