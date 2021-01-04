Ext.define('AM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    requires: ['AM.view.department.List', 'AM.view.user.List'],

    layout: 'border',
    config: {
        items: [{
        	region: 'west',
        	width: 200,
            xtype: 'departmentlist'
        }, {
        	region: 'center',
            xtype: 'userlist'
        }]
    }
});