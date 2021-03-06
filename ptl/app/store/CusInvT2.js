/*
 * File: app/store/CusInvT2.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Ptl.store.CusInvT2', {
    extend: 'Ext.data.Store',

    requires: [
        'Ptl.model.CusInv'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'Ptl.model.CusInv',
            storeId: 'CusInvT2',
            proxy: {
                type: 'rest',
                url: 'data/CusInvT2.php',
                reader: {
                    type: 'json',
                    root: 'Dta',
                    successProperty: 'Scs',
                    totalProperty: 'Ttl'
                }
            },
            sorters: [
                {
                    property: 'YRS'
                },
                {
                    property: 'MTH'
                },
                {
                    property: 'PRDATR'
                },
                {
                    property: 'TYP'
                }
            ]
        }, cfg)]);
    }
});