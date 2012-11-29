/*
 * File: apl/controller/UsrSnI.js
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

Ext.define('EvtMgr.controller.UsrSnI', {
    extend: 'Ext.app.Controller',
    alias: 'controller.usrsni',

    ClkSnI: function(button, e, options) {
        if (button.type == 'button'){
            Btn = button; 
            Frm = Btn.up('form').getForm();
        } 
        else {
            Frm = button.getForm();
            Btn = button.down('button');
        }

        Fld = Frm.getValues();
        Ext.Ajax.request({
            url: '../shared/PrsSnI.php',
            scope: this,
            params: {
                UsrNme: Fld.UsrNme,
                Pwd: Fld.Pwd
            },
            success: function(RspJSN){
                Rsp = Ext.JSON.decode(RspJSN.responseText);
                if (Rsp.Scs === true) {
                    Btn.up('window').close();
                }
                else {
                    Btn.nextSibling('label').setVisible(true); 
                }
            },
            failure: function(){
                console.log('Load Error-php');
            }
        });


    },

    AfrRnd: function(abstractcomponent, options) {
        abstractcomponent.getForm().findField('UsrNme').focus(false,200);
    },

    SpcKey: function(field, e, options) {
        if (e.keyCode == Ext.EventObject.ENTER) {
            this.ClkSnI(field.up('form'));
        }
    },

    TxtChg: function(field, newValue, oldValue, options) {
        field.nextSibling('label').setVisible(false);
    },

    init: function(application) {
        this.control({
            "usrsni form button[text=Sign In]": {
                click: this.ClkSnI
            },
            "usrsni panel": {
                afterrender: this.AfrRnd
            },
            "usrsni textfield": {
                specialkey: this.SpcKey,
                change: this.TxtChg
            }
        });
    }

});
