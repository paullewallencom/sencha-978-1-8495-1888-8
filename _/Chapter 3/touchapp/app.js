/**

 * @author Ajit Kumar (ajit.kumar@walkingtree.in)
 */

Ext.Loader.setPath({
    'Ext': 'app/touch/src',
    'MW': 'mw'
});

Ext.application({
	name: 'AM',
	
	profiles: ['Desktop', 'Phone'],
	
	launch: function() {
		var mwUtils = Ext.create('MW.utils.Converter', {});
		alert(mwUtils.convertDeptCodeToName('FIN'));
	}
});

