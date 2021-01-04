Ext.define('AM.controller.Departments', {
    extend: 'Ext.app.Controller',

    config: {
    	stores: ['Departments'],

        models: ['Department'],

        views: ['department.List']
    },
    
    init: function() {
        this.control({
            'departmentlist list': {
                itemtap: this.showDepartmentUser
            }
        });
    },

    showDepartmentUser: function(view, idx, t, model, e, eOpts) {
    	var app = this.initialConfig.application;
        app.fireEvent('departmentselected', app, model);
    }
});
