/*
 * File: app/view/TrkAsg.js
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

Ext.define('DshBrd.view.TrkAsg', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.trkasg',

    border: 0,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    border: 0,
                    store: 'TrkAsg',
                    features: [
                        {
                            ftype: 'grouping'
                        }
                    ],
                    viewConfig: {

                    },
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            ptype: 'cellediting',
                            clicksToEdit: 1
                        })
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'AsgNme',
                            flex: 1,
                            text: 'Name'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'AsgDte',
                            flex: 1,
                            text: 'Date'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'GrpNme',
                            flex: 1,
                            text: 'Group'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'RslTyp',
                            flex: 1,
                            text: 'Resolution'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TotTme',
                            flex: 1,
                            text: 'Time',
                            editor: {
                                xtype: 'numberfield'
                            }
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Save'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});