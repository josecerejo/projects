/*
 * File: app/view/JobInfPgm.js
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

Ext.define('DshBrd.view.JobInfPgm', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.jobinfpgm',

    border: 0,
    title: 'Programs',
    store: 'JobInfPgm',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {

            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'PgmNme',
                    flex: 1,
                    text: 'Program'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'PgmLib',
                    flex: 1,
                    text: 'Library'
                }
            ]
        });

        me.callParent(arguments);
    }

});