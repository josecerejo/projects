/*
 * File: app/store/IvtTyp.js
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

Ext.define('EvtMgr.store.IvtTyp', {
    extend: 'Ext.data.Store',
    alias: 'store.ivttyp',

    requires: [
        'EvtMgr.model.LstVlu'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            model: 'EvtMgr.model.LstVlu',
            remoteFilter: true,
            storeId: 'IvtTyp',
            sorters: {
                property: 'LstVlu'
            },
            proxy: {
                type: 'rest',
                url: 'data/LstVlu.php',
                reader: {
                    type: 'json',
                    root: 'Dta',
                    successProperty: 'Scs',
                    totalProperty: 'Ttl'
                }
            },
            filters: {
                property: 'LstIdn',
                value: 4
            }
        }, cfg)]);
    }
});