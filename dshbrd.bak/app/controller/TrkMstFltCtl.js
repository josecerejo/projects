/*
 * File: app/controller/TrkMstFltCtl.js
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

Ext.define('DshBrd.controller.TrkMstFltCtl', {
    extend: 'Ext.app.Controller',

    stores: [
        'TrkMstFlt',
        'TrkMstLst'
    ],

    refs: [
        {
            ref: 'TrkMstFlt',
            selector: 'trkmstflt'
        },
        {
            ref: 'TrkMstLst',
            selector: 'trkmst'
        }
    ],

    FltBfrRnr: function(component, eOpts) {
        this.FltTrkIdn(null,null,null,null);
        this.FltSchCBx(null,null,null,null);
    },

    FltApy: function(button, e, eOpts) {
        var Frm = button.up('form'),
            Sto = this.getTrkMstLstStore(),
            ExpDte = new Date();

        ExpDte.setDate(ExpDte.getDate() + 3650);
        Ext.util.Cookies.set('TrkMstFlt',Ext.JSON.encode(Frm.getForm().getValues()), ExpDte);

        Sto.loadPage(1);
        button.up('window').close();
    },

    FltRst: function(button, e, eOpts) {
        var Frm = button.up('form').getForm();
        var Dte = new Date();

        Frm.reset();
        Frm.findField('DteRcvLow').setValue('01/01/' + Ext.Date.format(Dte, 'Y'));
        Frm.findField('DteRcvHgh').setValue(Ext.Date.format(Dte, 'm/d/Y'));
        Frm.findField('CllSts').setValue('Open');
    },

    FltCnl: function(button, e, eOpts) {
        button.up('window').close();
    },

    FltTrkIdn: function(field, newValue, oldValue, eOpts) {
        try {
            var Frm = this.getTrkMstFlt().down('form').getForm();
            if (Frm.findField('TrkIdn').getValue() === '') {
                Frm.getFields().each(function(Fld){
                    Fld.setDisabled(false);
                });
                this.FltSchCBx(null,null,null,null);
            }
            else {
                Frm.getFields().each(function(Fld){
                    Fld.setDisabled(true);
                }); 
                Frm.findField('TrkIdn').setDisabled(false);
            }
        }
        catch(Err) {
            console.log(Err);
            console.log('ChgTrkIdn');
        }
    },

    FltSchCBx: function(field, newValue, oldValue, eOpts) {
        try {
            var Frm = this.getTrkMstFlt().down('form').getForm();
            Frm.findField('SchTxt').setDisabled(true);
            if (Frm.findField('SchDes').getValue() || Frm.findField('SchSln').getValue()) {
                Frm.findField('SchTxt').setDisabled(false);
            }
        }
        catch(Err) {
            console.log(Err);
            console.log('ChgSchCBx');
        }
    },

    FltCllTyp: function(field, newValue, oldValue, eOpts) {
        try {
            var CBx = field.up('form').getForm().findField('CllCtg');
            CBx.clearValue();
            if (!newValue || newValue.length > 1) {
                CBx.setDisabled(true);
            }
            else if (newValue.length == 1) {
                CBx.store.clearFilter();
                CBx.store.filter('CllTyp',newValue);
                CBx.setDisabled(false);
            }
        }
        catch(Err) {
            console.log(Err);
            console.log('ChgCllTyp');
        }
    },

    FltCllAsgGrp: function(field, newValue, oldValue, eOpts) {
        try {
            var CBx = field.up('form').getForm().findField('AsgNme');
            CBx.store.clearFilter();
            CBx.store.filter('GrpNme',newValue);
            CBx.clearValue();
            if (!newValue){
                CBx.setDisabled(true);
            }
            else {
                CBx.setDisabled(false);
            }
        }
        catch(Err) {
            console.log(Err);
            console.log('ChgCllAsgGrp');
        }
    },

    init: function(application) {
        this.control({
            "trkmstflt": {
                beforerender: this.FltBfrRnr
            },
            "trkmstflt toolbar button[text=Apply]": {
                click: this.FltApy
            },
            "trkmstflt toolbar button[text=Reset]": {
                click: this.FltRst
            },
            "trkmstflt toolbar button[text=Cancel]": {
                click: this.FltCnl
            },
            "trkmstflt textfield[name=TrkIdn]": {
                change: this.FltTrkIdn
            },
            "trkmstflt checkboxfield": {
                change: this.FltSchCBx
            },
            "trkmstflt combobox[name=CllTyp]": {
                change: this.FltCllTyp
            },
            "trkmstflt combobox[name=GrpNme]": {
                change: this.FltCllAsgGrp
            }
        });
    }

});
