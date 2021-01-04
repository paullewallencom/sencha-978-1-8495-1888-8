Ext.onReady(function() {
	
	var pnl = Ext.create('Ext.panel.Panel', {
		title: 'My Panel',
		renderTo: Ext.getBody(),
		width: 300,
		height: 100,
		items: [{
			xtype: 'textfield',
			fieldLabel: 'Name',
			anchor: '90%'
		}, {
			xtype: 'numberfield',
			fieldLabel: 'Age'
		}]
	});
});