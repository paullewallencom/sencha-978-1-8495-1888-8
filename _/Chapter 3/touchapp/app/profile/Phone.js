Ext.define('AM.profile.Phone', {
    extend: 'Ext.app.Profile',

    isActive: function() {
        return false;		//We do not support Phone...so always return false
    }
});