/**
 * @author Ajit Kumar (ajit.kumar@walkingtree.in)
 */

Ext.define('MW.utils.Converter', {
	
	convertDeptCodeToName: function(deptCode) {
		if (deptCode === 'FIN')
			return 'Finance';
		if (deptCode === 'DEV')
			return 'Development';
		if (deptCode === 'SAL')
			return 'Sales';
	}
	
});