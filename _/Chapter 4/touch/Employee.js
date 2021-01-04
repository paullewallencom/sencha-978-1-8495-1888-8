Ext.define('Employee', {
	extend: 'User',
	config: {
		department: ''
	},
	mixins: {
		Stringyfy: 'ToString'
	},
	getString: function() {
		return this.mixins.Stringyfy.getString.call(this) + "\nDEPARTMENT: " + this.department;
	},
	constructor: function(config) {
		this.initConfig(config);
		this.self.count++;
	}
});