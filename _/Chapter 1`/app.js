Ext.onReady(function() {
	
	//Define the user model
	Ext.define('User', {
		extend : 'Ext.data.Model',
		fields : [ 'id', 'name', 'email'],
	});

	//Define the Users store, which uses the User as the model 
	//and loads models from the users.json file
	Ext.define('Users', {
		extend : 'Ext.data.Store',
		model : 'User',
		autoLoad : true,

		proxy : {
			type : 'ajax',
			api : {
				read : 'data/users.json'
			},
			reader : {
				type : 'json',
				root : 'users',
				successProperty : 'success'
			}
		}
	});

	//Create an instance of the store that we defined above
	var store = Ext.create('Users', {});

	//Create the viewport which shows a grid loaded with the
	//user information from the store
	Ext.create('Ext.container.Viewport', {
		items : [ {
			xtype : 'grid',
			title : 'All Users',
			store : store,
			columns : [ {
				header : 'Name',
				dataIndex : 'name',
				flex : 1
			}, {
				header : 'Email',
				dataIndex : 'email',
				flex : 1
			} ],
			//event handlers
			listeners : {
				itemdblclick : function(view, record) {
					
					//Create a window and show a form panel with the values
					//populated from the record
					var win = Ext.create('Ext.window.Window', {
						title : 'Edit User',
					    layout: 'fit',
					    autoShow: true,
					    height: 120,
					    width: 280,
					    items: [{
			                 xtype: 'form',
			                 padding: '5 5 0 5',
			                 border: false,
			                 style: 'background-color: #fff;',
			                 items: [
			                     {
			                         xtype: 'textfield',
			                         name : 'name',
			                         fieldLabel: 'Name'
			                     },
			                     {
			                         xtype: 'textfield',
			                         name : 'email',
			                         fieldLabel: 'Email'
			                     }
			                 ]
			             }],
				         buttons: [{
				                 text: 'Save',
				                 action: 'save',
				                 handler: function() {
				                	 alert('Save!');
				                 }
				             },
				             {
				                 text: 'Cancel',
				                 action: 'cancel',
				                 handler: function() {
				                	 alert('Cancel!');
				                 }
				        }]
					});
					
					win.show();
					win.down('form').loadRecord(record);
				}
			}
		} ]
	});

});