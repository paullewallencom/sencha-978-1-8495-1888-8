Ext.define('AM.view.user.Edit', {
    extend: 'Ext.form.Panel',
    alias : 'widget.useredit',

    config: {
        ui: 'light',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Edit User'
            },
        	{
                xtype: 'textfield',
                label: 'Name',
                name: 'name',
                labelWidth: '50%',
                required: true
            },
            {
                xtype: 'textfield',
                label: 'Email',
                name: 'email',
                labelWidth: '50%',
                required: true
            },
            {
            	xtype: 'toolbar',
            	docked: 'bottom',
            	items: [{
                    xtype: 'button',
                    margin: 10,
                    align: 'left',
                    ui: 'confirm',
                    action: 'save',
                    text: 'Save'
                }, {
                    xtype: 'spacer'
                }, {
                	xtype: 'button',
                    margin: 10,
                    align: 'right',
                    ui: 'decline',
                    action: 'cancel',
                    text: 'Cancel'
                }]
            }
            
        ]
    }
});
