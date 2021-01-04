Ext.define('AM.store.Departments', {
    extend: 'Ext.data.Store',
    model: 'AM.model.Department',
    
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