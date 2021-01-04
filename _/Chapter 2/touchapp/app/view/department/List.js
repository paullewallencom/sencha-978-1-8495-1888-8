Ext.define('AM.view.department.List' ,{
    extend: 'Ext.Container',
    alias : 'widget.departmentlist',

    config: {
        ui: 'light',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Departments'
            },
            {
                xtype: 'list',
                height: '100%',
                ui: 'round',
                itemTpl: [
					'<div style="float:left;">{name}</div>',
					'<div style="float:left;position:absolute;padding-left:150px;">{location}</div>'
                ],
                store: 'Departments',
                onItemDisclosure: false
            }
        ]
    }
});
