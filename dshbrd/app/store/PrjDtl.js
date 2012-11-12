/*
 * File: app/store/PrjDtl.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DshBrd.store.PrjDtl', {
    extend: 'Ext.data.Store',

    requires: [
        'DshBrd.model.PrjDtl'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: false,
            storeId: 'PrjDtl',
            model: 'DshBrd.model.PrjDtl',
            proxy: {
                type: 'rest',
                url: 'data/PrjDtl.php',
                reader: {
                    type: 'json',
                    idProperty: 'project_id',
                    root: 'Dta',
                    successProperty: 'Scs',
                    totalProperty: 'Ttl'
                }
            }
        }, cfg)]);
    }
});