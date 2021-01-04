Ext.define('AM.view.desktop.user.List' ,{
    extend: 'Ext.Container',
    alias : 'widget.userlist',
    
    config: {
        ui: 'light',
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'All Users',
                defaults: {
                    iconMask: true
                },
                items: [{
                    xtype: 'spacer'
                },
                {
                    iconCls: 'refresh',
                    ui: 'confirm',
                    handler: function(){
                    	this.up('userlist').down('list').getStore().refresh();
                    	this.up('toolbar').setTitle('All Users');
                    }
                }]
            },
            {
                xtype: 'list',
                height: '100%',
                ui: 'round',
                itemTpl: [
					'<div style="float:left;">{name}</div>',
					'<div style="float:left;position:absolute;padding-left:150px;">{email}</div>'
                ],
                store: 'Users',
                onItemDisclosure: true
            }
        ]
    }
});
