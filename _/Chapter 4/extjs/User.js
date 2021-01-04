Ext.define('User', {
	alias: ['AppUser'],
	uses: ['Logger'],
//	requires: ['Logger'],
//	alternateClassName: 'AppUser',
//	statics: {
//		count: 0
//	},
	inheritableStatics: {
		count: 0
	},
	config: {
		name: '',
		address: '',
		age: 0
	},
	mixins: {
		Stringyfy: 'ToString'
	},
	constructor: function(config) {
		this.initConfig(config);
		this.self.count++;
//		Logger.log(this.getString());
	},
	applyAge: function(age) {
		if (!Ext.isEmpty(age)) {
			if (age < 18) {
//				alert('Age must be greater than 18 Years');
				throw new Error('Age must be greater than 18 Years');
			} else {
				return age;
			}
		}
	}
});