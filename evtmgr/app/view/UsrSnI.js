/*
 * File: app/view/UsrSnI.js
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

Ext.define('EvtMgr.view.UsrSnI', {
    extend: 'Ext.window.Window',
    alias: 'widget.usrsni',

    height: 153,
    hidden: false,
    width: 380,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    closable: false,
    title: 'Sign In',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    flex: 1,
                    border: 0,
                    maxWidth: 500,
                    width: 500,
                    defaults: {
                        labelWidth: 75,
                        labelSeparator: ' ',
                        enableKeyEvents: true
                    },
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    url: '../shared/PrsSnI.php',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'User Name',
                            name: 'UsrNme',
                            vtype: 'alphanum'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Password',
                            name: 'Pwd',
                            inputType: 'password',
                            vtype: 'alphanum'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            flex: 1,
                            dock: 'bottom',
                            defaults: {
                                minWidth: 50
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    itemId: 'SbmBtn',
                                    maxWidth: 60,
                                    text: 'Sign In'
                                },
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'label',
                                    margins: '0 8 0 0',
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
        });

        me.callParent(arguments);
    }

});