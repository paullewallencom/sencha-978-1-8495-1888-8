Ext.setup({
	onReady: function() {
		var pnl = Ext.create('Ext.Panel', {
			fullscreen: true,
			items: [{
				xtype: 'titlebar',
			    docked: 'top',
			    title: 'My Panel'
			}, {
				xtype: 'textfield',
				label: 'Name'
			}, {
				xtype: 'numberfield',
				label: 'Age'
			}]
		});
		
		Ext.Viewport.add(pnl);
	}
});
