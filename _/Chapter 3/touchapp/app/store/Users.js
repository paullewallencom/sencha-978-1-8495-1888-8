Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.Users',
    
    config: {
        autoLoad: true,
        model: 'AM.model.User',
        storeId: 'Users',
        proxy: {
            type: 'ajax',
            api: {
                read: 'data/users.json',
                update: 'data/updateUsers.json'
            },
            reader: {
                type: 'json',
                rootProperty: 'users'
            }
        },
        listeners: {
        	load: function(store, recs, successful, eOpts) {
        		if (successful)
        			this.dataBuf = recs;
        		else
        			this.dataBuf = [];
        	}
        }
    },
    
    filterUsersByDepartment: function(deptCode) {
    	this.clearFilter();
    	this.filter([{
            property: 'department',
            value: deptCode
        }]);
    },
    
    refresh: function() {
    	this.clearFilter();
    }

});