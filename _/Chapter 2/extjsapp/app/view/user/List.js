Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',

    title : 'All Users',
    store: 'Users',

    columns: [
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Email', dataIndex: 'email', flex: 1}
    ],
    
    tools:[{
        type:'refresh',
        tooltip: 'Refresh',
        handler: function(){
        	var pnl = this.up('userlist');
        	pnl.getStore().refresh();
        	pnl.setTitle('All Users');
        }
    }],
    
    filterUsersByDepartment: function(deptCode) {
    	this.getStore().filterUsersByDepartment(deptCode);
    }
});
