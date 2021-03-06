/*
 * File: app/view/ChgRqs.js
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

Ext.define('DshBrd.view.ChgRqs', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chgrqs',

    border: 0,
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'center',
                    border: 0,
                    store: 'ChgRqs',
                    viewConfig: {
                        border: 0
                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'RQSNBR',
                            text: 'Request'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'CURSTP',
                            text: 'Step'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'USR',
                            text: 'Developer'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'FRMLIB',
                            text: 'Library'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TRGENV',
                            text: 'Target'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'ENVTYP',
                            text: 'Env Typ'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'RQSDTE',
                            text: 'Rqs Dte'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'RQSTME',
                            text: 'Rqs Tme'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'DSTDTE',
                            text: 'Dst Dte'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'DSTTME',
                            text: 'Dst Tme'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});