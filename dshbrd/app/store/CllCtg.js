/*
 * File: app/store/CllCtg.js
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

Ext.define('DshBrd.store.CllCtg', {
    extend: 'Ext.data.Store',

    requires: [
        'DshBrd.model.CllCtg'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'DshBrd.model.CllCtg',
            storeId: 'CllCtg',
            proxy: {
                type: 'rest',
                url: 'data/CllCtg.php',
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