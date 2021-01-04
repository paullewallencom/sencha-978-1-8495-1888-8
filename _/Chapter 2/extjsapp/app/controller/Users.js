Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    config: {
    	stores: ['Users'],

        models: ['User'],

        views: ['user.Edit', 'user.List'],

        refs: [{
            ref: 'usersList',
            selector: 'userlist'
        }]
    },
    
    init: function(app) {
        this.control({
            'userlist dataview': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            'useredit button[action=cancel]': {
                click: this.cancelEditUser
            }
        });
        
        app.on('departmentselected', function(app, model) {
        	this.getUsersStore().filterUsersByDepartment(model.get('code'));
        	this.getUsersList().setTitle(model.get('name') + ' Users');
        }, this);
    },

    editUser: function(grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();

        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();        
    },
    cancelEditUser: function(button) {
    	var win    = button.up('window');
    	win.close();
    }
});
