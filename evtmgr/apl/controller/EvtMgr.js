/*
 * File: apl/controller/EvtMgr.js
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

Ext.define('EvtMgr.controller.EvtMgr', {
    extend: 'Ext.app.Controller',
    alias: 'controller.evtmgr',

    AfrRnd: function(abstractcomponent, options) {
        //Ext.Function.defer(function() {
        //    Ext.getBody().unmask();
        //}, 1500, this);
    },

    ClkSnO: function(button, e, options) {
        Ext.Ajax.request({
            url: '../shared/UsrSnO.php',
            scope: this,
            success: function(RspJSN){
                Rsp = Ext.JSON.decode(RspJSN.responseText);
                if (Rsp.Scs === true) {
                    var UsrSnI = Ext.create('EvtMgr.view.UsrSnI', {
                        renderTo: Ext.getBody()
                    });

                    UsrSnI.show();
                }
                else {
                }
            },
            failure: function(){
                console.log('Load Error-php');
            }
        });
    },

    ClkEvt: function(button, e, options) {
        //button.up('viewport').down('panel').getLayout().setActiveItem(0);
    },

    ClkCtc: function(button, e, options) {
        //button.up('viewport').down('panel').getLayout().setActiveItem(1);
    },

    init: function(application) {
        this.control({
            "evtmgr": {
                afterrender: this.AfrRnd
            },
            "viewport button[text=Sign Out]": {
                click: this.ClkSnO
            },
            "viewport button[text=Events]": {
                click: this.ClkEvt
            },
            "viewport button[text=Contacts]": {
                click: this.ClkCtc
            }
        });
    }

});