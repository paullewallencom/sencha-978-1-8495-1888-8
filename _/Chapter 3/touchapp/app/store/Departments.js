Ext.define('AM.store.Departments', {
    extend: 'Ext.data.Store',
    alias: 'store.Departments',
    
    config: {
        autoLoad: true,
        model: 'AM.model.Department',
        storeId: 'Departments',
        proxy: {
            type: 'ajax',
            api: {
                read: 'data/departments.json'
            },
            reader: {
                type: 'json',
                rootProperty: 'departments'
            }
        }
    }
});