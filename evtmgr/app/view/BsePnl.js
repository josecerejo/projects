/*
 * File: app/view/BsePnl.js
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

Ext.define('EvtMgr.view.BsePnl', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.bsepnl',

    requires: [
        'EvtMgr.view.EvtGrpLst',
        'EvtMgr.view.EvtLst'
    ],

    border: 0,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'toolbar',
                    border: 0,
                    layout: {
                        padding: 1,
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'EvtBtn',
                            text: 'Events',
                            tooltip: 'Open the Events page'
                        },
                        {
                            xtype: 'button',
                            href: '../ctcmgr/app.html',
                            text: 'Contacts',
                            tooltip: 'Open the Contacts page'
                        },
                        {
                            xtype: 'tbfill',
                            border: 0
                        },
                        {
                            xtype: 'button',
                            hidden: true,
                            id: '',
                            itemId: 'RtnBtn',
                            icon: 'resources/images/page-prev.gif',
                            text: 'Return to Event List',
                            tooltip: 'Return to Event List'
                        },
                        {
                            xtype: 'button',
                            itemId: 'SnOBtn',
                            text: 'Sign Out',
                            tooltip: 'Sign out of the Event Manager'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    height: 30,
                    id: 'Hdr'
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    border: 0,
                    itemId: 'BsePnlCrd',
                    layout: {
                        type: 'card'
                    },
                    bodyBorder: false,
                    items: [
                        {
                            xtype: 'container',
                            border: false,
                            itemId: 'EvtLst',
                            layout: {
                                type: 'border'
                            },
                            items: [
                                {
                                    xtype: 'evtgrplst',
                                    flex: 0.25,
                                    region: 'west',
                                    split: true
                                },
                                {
                                    xtype: 'evtlst',
                                    flex: 1,
                                    region: 'center',
                                    split: false
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            border: false,
                            id: '',
                            itemId: 'EvtDtl',
                            layout: {
                                type: 'fit'
                            },
                            items: [
                                {
                                    xtype: 'tabpanel',
                                    border: false,
                                    activeTab: 0,
                                    items: [
                                        {
                                            xtype: 'panel',
                                            border: false,
                                            layout: {
                                                type: 'border'
                                            },
                                            title: 'Detail',
                                            items: [
                                                {
                                                    xtype: 'form',
                                                    region: 'center',
                                                    itemId: 'EvtFrm',
                                                    defaults: {
                                                        labelWidth: 75,
                                                        labelSeparator: ' '
                                                    },
                                                    bodyPadding: 10,
                                                    items: [
                                                        {
                                                            xtype: 'label',
                                                            hidden: true,
                                                            itemId: 'Acn'
                                                        },
                                                        {
                                                            xtype: 'hiddenfield',
                                                            anchor: '100%',
                                                            fieldLabel: 'Label',
                                                            name: 'Idn'
                                                        },
                                                        {
                                                            xtype: 'hiddenfield',
                                                            anchor: '100%',
                                                            name: 'AccIdn'
                                                        },
                                                        {
                                                            xtype: 'fieldcontainer',
                                                            maxWidth: 600,
                                                            defaults: {
                                                                labelWidth: 85,
                                                                labelSeparator: ' ',
                                                                labelAlign: 'right'
                                                            },
                                                            layout: {
                                                                align: 'stretch',
                                                                padding: '0 5 0 0',
                                                                type: 'vbox'
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'combobox',
                                                                    maxWidth: 400,
                                                                    fieldLabel: 'Group',
                                                                    name: 'EvtGrpIdn',
                                                                    allowBlank: false,
                                                                    blankText: 'This event group is required',
                                                                    displayField: 'Ttl',
                                                                    forceSelection: true,
                                                                    queryMode: 'local',
                                                                    store: 'EvtGrp',
                                                                    valueField: 'Idn'
                                                                },
                                                                {
                                                                    xtype: 'textfield',
                                                                    fieldLabel: 'Title',
                                                                    name: 'Ttl',
                                                                    allowBlank: false,
                                                                    blankText: 'The Title is required',
                                                                    enforceMaxLength: true,
                                                                    maxLength: 50
                                                                },
                                                                {
                                                                    xtype: 'textareafield',
                                                                    fieldLabel: 'Description',
                                                                    name: 'Des'
                                                                },
                                                                {
                                                                    xtype: 'fieldcontainer',
                                                                    defaults: {
                                                                        labelWidth: 75,
                                                                        labelSeparator: ' ',
                                                                        labelAlign: 'right'
                                                                    },
                                                                    layout: {
                                                                        align: 'stretch',
                                                                        type: 'hbox'
                                                                    },
                                                                    hideEmptyLabel: false,
                                                                    items: [
                                                                        {
                                                                            xtype: 'datefield',
                                                                            flex: 1,
                                                                            width: 17,
                                                                            labelWidth: 30,
                                                                            name: 'StrDte'
                                                                        },
                                                                        {
                                                                            xtype: 'timefield',
                                                                            flex: 1,
                                                                            margins: '0 0 0 10',
                                                                            labelWidth: 30,
                                                                            name: 'StrTme',
                                                                            increment: 30
                                                                        },
                                                                        {
                                                                            xtype: 'label',
                                                                            padding: '4 10 0 10 ',
                                                                            text: 'To'
                                                                        },
                                                                        {
                                                                            xtype: 'datefield',
                                                                            flex: 1,
                                                                            labelWidth: 30,
                                                                            name: 'EndDte'
                                                                        },
                                                                        {
                                                                            xtype: 'timefield',
                                                                            flex: 1,
                                                                            margins: '0 0 0 10',
                                                                            labelWidth: 30,
                                                                            name: 'EndTme'
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    xtype: 'fieldcontainer',
                                                                    flex: 1,
                                                                    width: 500,
                                                                    defaults: {
                                                                        labelWidth: 75,
                                                                        labelSeparator: ' ',
                                                                        labelAlign: 'right'
                                                                    },
                                                                    layout: {
                                                                        align: 'stretch',
                                                                        type: 'vbox'
                                                                    },
                                                                    fieldLabel: 'Venue',
                                                                    items: [
                                                                        {
                                                                            xtype: 'textareafield',
                                                                            flex: 1,
                                                                            name: 'SttAdr',
                                                                            emptyText: 'Street'
                                                                        },
                                                                        {
                                                                            xtype: 'fieldcontainer',
                                                                            flex: 1,
                                                                            width: 500,
                                                                            layout: {
                                                                                align: 'stretch',
                                                                                type: 'hbox'
                                                                            },
                                                                            items: [
                                                                                {
                                                                                    xtype: 'textfield',
                                                                                    flex: 1,
                                                                                    name: 'Cty',
                                                                                    emptyText: 'City',
                                                                                    enforceMaxLength: true,
                                                                                    maxLength: 50
                                                                                },
                                                                                {
                                                                                    xtype: 'textfield',
                                                                                    flex: 0.5,
                                                                                    margins: '0 0 0 10',
                                                                                    name: 'Ste',
                                                                                    emptyText: 'State/Province'
                                                                                },
                                                                                {
                                                                                    xtype: 'textfield',
                                                                                    flex: 0.5,
                                                                                    margins: '0 0 0 10',
                                                                                    name: 'PstCde',
                                                                                    emptyText: 'Zip/Postal Code',
                                                                                    enforceMaxLength: true,
                                                                                    maxLength: 10
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    xtype: 'combobox',
                                                                    border: false,
                                                                    maxWidth: 250,
                                                                    fieldLabel: 'Invitation Type',
                                                                    name: 'IvtTypIdn',
                                                                    allowBlank: false,
                                                                    blankText: 'The invitation type is required',
                                                                    displayField: 'LstVlu',
                                                                    forceSelection: true,
                                                                    store: 'IvtTyp',
                                                                    valueField: 'Idn'
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    dockedItems: [
                                                        {
                                                            xtype: 'toolbar',
                                                            dock: 'bottom',
                                                            defaults: {
                                                                minWidth: 50
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'button',
                                                                    itemId: 'SveBtn',
                                                                    text: 'Save'
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    itemId: 'CnlBtn',
                                                                    margin: '0 0 0 5',
                                                                    minWidth: 50,
                                                                    text: 'Cancel'
                                                                },
                                                                {
                                                                    xtype: 'tbfill'
                                                                },
                                                                {
                                                                    xtype: 'label',
                                                                    margins: '0 8 0 0',
                                                                    hidden: true,
                                                                    html: 'Please correct fields highlighted in <span style="color:red">red</span>',
                                                                    itemId: 'ErrMsg',
                                                                    padding: '',
                                                                    style: '{font-size: 12px;}'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'panel',
                                            border: false,
                                            title: 'Invitations'
                                        },
                                        {
                                            xtype: 'panel',
                                            border: false,
                                            title: 'Options'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});