Ext.define('AM.controller.desktop.Users', {
    extend: 'Ext.app.Controller',

    config: {
    	stores: ['Users'],

        models: ['User'],

        views: ['user.Edit', 'user.List'],

        refs: {
        	usersPanel: 'userlist'
        },
        routes: {
            'list': 'showUsersList',
            'users/:id': 'showUsersByDepartment'
        }
    },
    init: function(app) {
        this.control({
        	'userlist list': {
                disclose: this.editUser
            },
            'useredit button[action=save]': {
                tap: this.updateUser
            },
            'useredit button[action=cancel]': {
                tap: this.cancelEditUser
            }
        });
        
        app.on('departmentselected', function(app, model) {
        	this.getUsersStore().filterUsersByDepartment(model.get('code'));
        	this.getUsersPanel().down('toolbar').setTitle(model.get('name') + ' Users');
        }, this);
    },
    editUser: function(view, model, t, index, e, eOpts) {
        var edit = Ext.create('AM.view.user.Edit');
        Ext.Viewport.add(edit);

        edit.setRecord(model);
        Ext.Viewport.setActiveItem(edit);
    },
    updateUser: function(button, e ,eOpts) {
        var form   = button.up('formpanel');
        var record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        this.getUsersStore().sync();
        Ext.Viewport.setActiveItem(0);
    },
    cancelEditUser: function(button, e ,eOpts) {
    	Ext.Viewport.setActiveItem(0);
    },
    showUsersList: function() {
    	var list = Ext.create('AM.view.user.List');
        Ext.Viewport.add(list);
        Ext.Viewport.setActiveItem(list);
    },
    showUsersByDepartment: function(deptId) {
    	var list = Ext.create('AM.view.user.List');
        Ext.Viewport.add(list);
        Ext.Viewport.setActiveItem(list);
        
        this.getUsersStore().filterUsersByDepartment(deptId);
    },
    getUsersStore: function() {
    	return this.getUsersPanel().down('list').getStore();
    }
});
