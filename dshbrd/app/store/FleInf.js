/*
 * File: app/store/FleInf.js
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

Ext.define('DshBrd.store.FleInf', {
    extend: 'Ext.data.Store',

    requires: [
        'DshBrd.model.FleInf'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'DshBrd.model.FleInf',
            storeId: 'FleInf',
            proxy: {
                type: 'rest',
                url: 'data/FleInf.php',
                reader: {
                    type: 'json',
                    root: 'Dta',
                    successProperty: 'Scs',
                    totalProperty: 'Ttl'
                }
            }
        }, cfg)]);
    }
});