/**

 * @author Ajit Kumar (ajit.kumar@walkingtree.in)
 */

//Ext.Loader.setPath({
//    'Ext': 'app/touch/src'
//});

Ext.application({
	name: 'AM',
	
//    // Setup the icons and startup screens for phones and tablets.
//    phoneStartupScreen: 'app/touch/resources/loading/Homescreen.jpg',
//    tabletStartupScreen: 'app/touch/resources/loading/Homescreen~ipad.jpg',
//
//    glossOnIcon: false,
//    icon: {
//        57: 'app/touch/resources/icons/icon.png',
//        72: 'app/touch/resources/icons/icon@72.png',
//        114: 'app/touch/resources/icons/icon@2x.png',
//        144: 'app/touch/resources/icons/icon@114.png'
//    },
//    
//
//    // dependencies
//    views: ['user.Edit', 'user.List', 'department.List'],
//    stores: ['Users', 'Departments'],
//    models: ['User', 'Department'],
    controllers: ['Users', 'Departments'],
    
    // launch application
    launch: function() {
        var config = {
     	layout: 'fit',
    		items: [{
    			xtype: 'departmentlist',
    			docked: 'left',
    			width: 400
    		}, {
    			xtype: 'userlist'
    		}]
        		
    	};

        Ext.Viewport.add(config);
    }
});

