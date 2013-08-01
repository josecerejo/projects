/*
 * File: app/view/JobInfLib.js
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

Ext.define('DshBrd.view.JobInfLib', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.jobinflib',

    border: 0,
    title: 'Libraries',
    store: 'JobInfLib',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'LIB',
                    text: 'Library',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'LIBTXT',
                    text: 'Description',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'LIBTYP',
                    text: 'Type',
                    flex: 0.5
                }
            ]
        });

        me.callParent(arguments);
    }

});