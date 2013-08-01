/*
 * File: app/controller/UsrAutCtl.js
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

Ext.define('App.controller.UsrAutCtl', {
    extend: 'Ext.app.Controller',
    alias: 'controller.usrautctl',

    stores: [
        'UsrInf'
    ],

    refs: [
        {
            ref: 'BsePnl',
            selector: 'bsepnl',
            xtype: 'bsepnl'
        }
    ],

    AfrRnd: function(component, eOpts) {
        component.down('label[itemId=ErrMsg]').setVisible(false);
        component.getForm().findField('UsrNme').focus(false,200);
    },

    SnIBtnClk: function(button, e, eOpts) {
        var AutLst = {Sls:true,Fin:true,Opr:true,Sup:true};
        var Btn = button;
        var Frm = Btn.up('form').getForm();
        var SveCrl = Frm.findField('SveCrl').getValue();
        var ErrMsg = Btn.nextSibling('label[itemId=ErrMsg]');

        if (Frm.isValid()) {
            Frm.submit({
                scope: this,
                success: function(Frm, Acn) {
                    var Sto = Ext.data.StoreManager.lookup('UsrInf'); 
                    var Rcd = Sto.load().first();
                    var UsrCrl = Acn.result.UsrCrl;
                    if (SveCrl){
                        if (!Rcd) {
                            Rcd = Ext.create('App.model.UsrInf');
                            Rcd.set('UsrCrl',UsrCrl);
                            Sto.add(Rcd);
                            Sto.sync();
                        }
                        else {
                            Rcd.set('UsrCrl',UsrCrl);
                            Sto.update(Rcd);
                            Sto.sync();
                        }
                    }

                    this.ChkAut(Frm.findField('UsrNme').getValue(),UsrCrl);
                    Btn.up('window').close();
                },
                failure: function(Frm, Acn) {
                    ErrMsg.setVisible(true);
                }
            });
        }
        else {
            ErrMsg.setVisible(true);
        }
    },

    SnOBtnClk: function(button, e, eOpts) {
        var Sto = Ext.data.StoreManager.lookup('UsrInf'); 
        Sto.removeAll();
        Sto.sync(); 

        this.getBsePnl().down('panel').hide();
        this.getBsePnl().down('toolbar').hide();

        var UsrSnI = Ext.create('App.view.UsrSnI', {
            renderTo: Ext.getBody()
        });

        UsrSnI.show();
    },

    SpcKey: function(field, e, eOpts) {
        if (e.keyCode == Ext.EventObject.ENTER) {
            this.SnIBtnClk(field.up('form').down('button[itemId=SnIBtn]'));
        }
    },

    TxtFldChg: function(field, newValue, oldValue, eOpts) {
        field.up('panel').down('label[itemId=ErrMsg]').setVisible(false);
    },

    AutErrBtnClk: function(button, e, eOpts) {
        button.up('window').close();
        this.SnOBtnClk(button, e, eOpts);
    },

    ChkAut: function(UsrNme, UsrCrl) {
        var PgmNme = 'PHPSTDTPL';

        Ext.Ajax.request({
            scope: this,
            url: '../shared/ChkAut.php',
            method: 'post',
            params: {
                UsrCrl: UsrCrl,
                PgmNme: PgmNme
            },    
            success: function(RspJSN){
                Rsp = Ext.JSON.decode(RspJSN.responseText);
                if (Rsp.success === true) {
                    var AutLst = {Sls:true,Fin:true,Opr:true,Sup:true};
                    App.getApplication().getController('BseCtl').IniDsp(AutLst);
                }
                else {
                    var AutErr = Ext.create('App.view.AutErr', {
                        renderTo: Ext.getBody()
                    });

                    Frm = AutErr.down('form');
                    Frm.down('container').update('<div style="text-align:center"><p><b>' + UsrNme + '</b> is not authorized to the Standard Template</p><p>Please submit an IT Request for access to <b>' + PgmNme + '</b></p>');

                    AutErr.show();
                }
            },
            failure: function(){
                console.log('Load Error-php');
            }
        });
    },

    init: function(application) {
        this.control({
            "usrsni panel": {
                afterrender: this.AfrRnd
            },
            "usrsni form button[itemId=SnIBtn]": {
                click: this.SnIBtnClk
            },
            "bsepnl toolbar button[text=Sign Off]": {
                click: this.SnOBtnClk
            },
            "usrsni textfield": {
                specialkey: this.SpcKey,
                change: this.TxtFldChg
            },
            "auterr form button[itemId=AutErrBtn]": {
                click: this.AutErrBtnClk
            }
        });
    }

});
