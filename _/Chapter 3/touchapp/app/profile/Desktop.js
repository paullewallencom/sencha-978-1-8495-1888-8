Ext.define('AM.profile.Desktop', {
    extend: 'Ext.app.Profile',
    
    config: {
    	controllers: ['Users', 'Departments'],
	    views: ['user.List', 'department.List'],
	    stores: ['AM.store.Users', 'AM.store.Departments'],
	    models: ['AM.model.User', 'AM.model.Department']
    },

    isActive: function() {
        return Ext.os.is.Desktop;
    },
    launch: function() {
        var config = {
     	layout: 'fit',
    		items: [{
    			xtype: 'departmentlist',
    			docked: 'left',
    			width: 400
    		}, {
    			xtype: 'userlist'
    		}]
        		
    	};

        Ext.Viewport.add(config);
    }
});