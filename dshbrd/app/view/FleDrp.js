/*
 * File: app/view/FleDrp.js
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

Ext.define('DshBrd.view.FleDrp', {
    extend: 'Ext.window.Window',
    alias: 'widget.fledrp',

    height: 430,
    width: 1000,
    layout: {
        type: 'border'
    },
    closable: false,
    title: 'File Drop',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 2,
                    region: 'center',
                    border: 0,
                    store: 'FleDrpInf',
                    plugins: [
                        Ext.create('Ext.grid.plugin.RowEditing', {
                            ptype: 'rowediting',
                            clicksToEdit: 1
                        })
                    ],
                    viewConfig: {
                        preserveScrollOnRefresh: true,
                        loadMask: false,
                        markDirty: false
                    },
                    columns: [
                        {
                            xtype: 'actioncolumn',
                            width: 25,
                            align: 'center',
                            items: [
                                {
                                    handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                        view.getStore().removeAt(rowIndex);
                                    },
                                    icon: '../shared/delete.png',
                                    tooltip: 'Remove file from list'
                                }
                            ]
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'FleNmeDrp',
                            flex: 1,
                            text: 'Dropped File'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'FleNme',
                            flex: 1,
                            text: 'File',
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'Des',
                            flex: 1.5,
                            text: 'Description',
                            editor: {
                                xtype: 'textfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if(value == "Yes") { 
                                    metaData.style = 'background-color:red; color:white;font-weight:bold'; 
                                }

                                return value;
                            },
                            align: 'center',
                            dataIndex: 'FleExs',
                            flex: 0.3,
                            text: 'Exists?'
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if (value === 0) {
                                    var CntIdn = 'prgbarcnt-' + rowIndex;
                                    Ext.Function.defer(function() {
                                        PrgBar = new Ext.ProgressBar({
                                            height: 10,
                                            renderTo: CntIdn,
                                            value: 0,
                                            id: 'prgbar-' + rowIndex
                                        });
                                    }, 10);
                                    return (Ext.String.format('<div id="{0}"></div>', CntIdn));
                                }
                                else {
                                    return value;
                                }
                            },
                            dataIndex: 'PrsSts',
                            flex: 1,
                            text: 'Status'
                        }
                    ]
                },
                {
                    xtype: 'form',
                    flex: 1,
                    region: 'south',
                    split: true,
                    border: 0,
                    height: 150,
                    hidden: true,
                    bodyPadding: 10
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            disabled: true,
                            text: 'Save'
                        },
                        {
                            xtype: 'button',
                            text: 'Cancel'
                        },
                        {
                            xtype: 'displayfield',
                            hidden: true,
                            itemId: 'FleIdnMst',
                            width: 174,
                            name: 'FleIdnMst',
                            hideLabel: true
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});