/*
 * File: app/controller/EvtGrp.js
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

Ext.define('EvtMgr.controller.EvtGrp', {
    extend: 'Ext.app.Controller',
    alias: 'controller.evtgrp',

    stores: [
        'EvtGrp',
        'Evt'
    ],

    refs: [
        {
            ref: 'BsePnl',
            selector: 'bsepnl'
        },
        {
            ref: 'EvtGrpLst',
            selector: 'evtgrplst'
        },
        {
            ref: 'EvtLst',
            selector: 'evtlst'
        }
    ],

    AfrRndFrm: function(component, eOpts) {
        var Cmp = component;
        var map = new Ext.util.KeyMap({
            target: Cmp.getEl(),
            key: 13,
            fn: function(Evt){
                var Elm = Ext.Element.getActiveElement();
                if(Elm.type != 'textarea'){
                    this.SveBtnClk(Cmp.down('button[itemId=SveBtn]'), Evt, null);
                } 
            },
            scope: this
        });

        Cmp.down('label[itemId=ErrMsg]').setVisible(false);
        Cmp.getForm().findField('Ttl').focus(false,500);
    },

    AddBtnClk: function(button, e, eOpts) {
        this.LodFrm('Add');
    },

    SveBtnClk: function(button, e, eOpts) {
        var Wdw = button.up('window'),
            Pnl = Wdw.down('form'),
            Frm = Pnl.getForm(),
            Rcd = Frm.getRecord(),
            VluLst = Frm.getValues();

        if (!Frm.isValid()) {
            button.up('window').down('label[itemId=ErrMsg]').setVisible(true);
            return;
        }

        switch(Pnl.down('label[itemId=Acn]').text)
        {
            case 'Add':
            Rcd = Ext.create('EvtMgr.model.EvtGrp');
            Rcd.set(VluLst);
            this.getEvtGrpStore().add(Rcd);
            Pnl.down('label[itemId=ErrMsg]').setVisible(false);
            Frm.reset();
            Frm.findField('AccIdn').setValue(Ext.util.Cookies.get('AccIdn'));
            Pnl.down('label[itemId=Acn]').setText('Add');        
            break;

            case 'Edt':
            Frm.getRecord().set(VluLst);
            Wdw.close();
            break;

            case 'Dlt':
            this.getEvtGrpStore().remove(Frm.getRecord());
            Lst = this.getEvtGrpLst();
            Sto = this.getEvtGrpStore();
            if (Sto.getTotalCount() > 0) {
                Lst.getSelectionModel().select(0);
                this.getController('Evt').LodSto(Sto.first().get('Idn'));
            }
            Wdw.close();
        }
    },

    DltBtnClk: function(button, e, eOpts) {
        this.LodFrm('Dlt');
    },

    EdtBtnClk: function(button, e, eOpts) {
        this.LodFrm('Edt');
    },

    CnlBtnClk: function(button, e, eOpts) {
        button.up('window').destroy();
    },

    SlcChg: function(model, selected, eOpts) {
        this.getController('Evt').LodSto(selected[0].get('Idn'));
    },

    init: function(application) {
        this.getEvtGrpStore().on({
            scope: this,
            load : this.StoRdy
        });

        this.control({
            "evtgrpwdw form": {
                afterrender: this.AfrRndFrm
            },
            "evtgrplst toolbar button[itemId=AddBtn]": {
                click: this.AddBtnClk
            },
            "evtgrpwdw form button[itemId=SveBtn]": {
                click: this.SveBtnClk
            },
            "evtgrplst toolbar button[itemId=DltBtn]": {
                click: this.DltBtnClk
            },
            "evtgrplst toolbar button[itemId=EdtBtn]": {
                click: this.EdtBtnClk
            },
            "evtgrplst toolbar button[itemId=CnlBtn]": {
                click: this.CnlBtnClk
            },
            "evtgrplst": {
                selectionchange: this.SlcChg
            }
        });
    },

    LodSto: function(AccIdn) {
        this.getEvtGrpStore().load({
            params: { 
                AccIdn: AccIdn
            }
        });
    },

    StoRdy: function(Sto) {
        var Rcd = Sto.first();
        var Ctl = this;

        if(Rcd) {
            this.getController('Evt').LodSto(Rcd.get('Idn'));
        }

        if (Sto.getTotalCount() > 0) {
            this.getEvtGrpLst().getSelectionModel().select(0);
        }

        var DrpTrg = Ext.create('Ext.dd.DropZone', this.getEvtGrpLst().getView().el, {
            ddGroup: 'EvtLst',

            getTargetFromEvent: function(Evt) {
                Dta = {"Sel":Ctl.getEvtGrpLst().getSelectionModel().getSelection()[0], "Trg":Evt.getTarget('.x-grid-row')};
                return Dta;
            },

            onNodeEnter : function(TrgDta, DaD, Evt, DrgDta){
            },

            onNodeDrop : function(TrgDta, DaD, Evt, DrgDta){
                var Trg = TrgDta.Trg;
                var Sel = TrgDta.Sel;
                var EvtGrpIdnNew = Ctl.getEvtGrpLst().getView().getRecord(Trg).getData().Idn;
                var EvtGrpIdnOld = Ctl.getEvtGrpLst().getView().getRecord(Sel).getData().Idn;

                Ext.each(DrgDta.records, function (Evt) {
                    Evt.set('EvtGrpIdn',EvtGrpIdnNew);
                });

                Ctl.getEvtStore().sync();

                Ext.Function.defer(function(){
                    Ctl.getController('Evt').LodSto(EvtGrpIdnOld);
                    Ctl.getEvtGrpLst().getView().select(Ctl.getEvtGrpLst().getView().getRecord(Sel));
                }, 1000);
            }
        });
    },

    LodFrm: function(Acn) {
        var EvtGrpWdw = Ext.create('EvtMgr.view.EvtGrpWdw', {
            renderTo: Ext.getBody()
        });
        var Pnl = EvtGrpWdw.down('form'),
            Frm = Pnl.getForm();

        Frm.findField('AccIdn').setValue(Ext.util.Cookies.get('AccIdn'));
        Pnl.down('label[itemId=Acn]').setText(Acn);

        if (Acn != 'Add') {
            var Rcd = this.getEvtGrpLst().getSelectionModel().getSelection()[0];
            Frm.loadRecord(Rcd);
        }

        if (Acn == 'Dlt') {
            Pnl.query('.field').forEach(function(Fld){
                Fld.setReadOnly(true);
            });
            Pnl.down('toolbar button[itemId=SveBtn]').setText('Delete');
        }

        EvtGrpWdw.show();
    }

});
