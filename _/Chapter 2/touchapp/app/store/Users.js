Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    
    config: {
        autoLoad: true,
        model: 'AM.model.User',
        storeId: 'Users',
        proxy: {
            type: 'ajax',
            api: {
                read: 'data/users.json
            },
            reader: {
                type: 'json',
                rootProperty: 'users'
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