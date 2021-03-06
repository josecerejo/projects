/*
 * File: app/controller/TrkMstCtl.js
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

Ext.define('DshBrd.controller.TrkMstCtl', {
    extend: 'Ext.app.Controller',

    stores: [
        'TrkAsg',
        'TrkAtc',
        'PrjDtl',
        'PrjTsk',
        'TrkMstDtl',
        'ChgRqs',
        'ChgRqsObj',
        'ChgObj',
        'TrkMstLst',
        'TrkMstFlt',
        'AplPrf'
    ],

    refs: [
        {
            ref: 'TrkMstLst',
            selector: 'trkmstlst'
        },
        {
            ref: 'TrkMstDtl',
            selector: 'trkmstdtl'
        },
        {
            ref: 'PrjDtl',
            selector: 'prjdtl'
        },
        {
            ref: 'TrkMstFlt',
            selector: 'trkmstflt'
        },
        {
            ref: 'TrkAtc',
            selector: 'trkatc'
        }
    ],

    CllPriChg: function(field, newValue, oldValue, eOpts) {
        var CBx = field.up('form').getForm().findField('CllCls');
        CllPriPfx = newValue.substring(0,3);

        if (CllPriPfx == 'Pro') {
            CBx.setValue('Project');
        }
        else if (CllPriPfx == 'SCR') {
            CBx.setValue('SCR');
        }
        else {
            CBx.setValue('Incident');
        }

    },

    TrkMstSve: function(button, e, eOpts) {
        this.SveChg('yes',this.getTrkMstLst().getSelectionModel().getSelection()[0]);
    },

    BfrSlc: function(rowmodel, record, index, eOpts) {
        var Frm = this.getTrkMstDtl().getForm();
        if (Frm) {
            if (Frm.isDirty()) {
                if (this.getAplPrfStore().first().getData().AtoSve){
                    this.SveChg('yes', index);
                }
                else {
                    Ext.MessageBox.show({
                        title:'Save Changes?',
                        msg: 'You have unsaved changes. <br />Do you want to save your changes?',
                        buttons: Ext.MessageBox.YESNOCANCEL, 
                        icon: Ext.MessageBox.QUESTION, 
                        scope: {
                            Obj: this,
                            Slc: index
                        },
                        fn: function(BtnIdn) {
                            var Obj = this.Obj,
                                Slc = this.Slc;
                            Obj.SveChg(BtnIdn, Slc);
                        }
                    });
                }
                return false;
            }
        }
    },

    SlcChg: function(model, selected, eOpts) {
        if (selected[0]) {
            this.TrkPnlLod(selected[0]);
        }
    },

    TrkMstLstRdy: function(tablepanel, eOpts) {
        if (this.getTrkMstLstStore().count() > 0) {
            tablepanel.getSelectionModel().select(0);
        }
    },

    CllTypChg: function(field, newValue, oldValue, eOpts) {
        var CBx = field.up('form').getForm().findField('CllCtg');
        CBx.clearValue();
        CBx.store.clearFilter();
        CBx.store.filter('CllTyp',newValue);
        CBx.setDisabled(false);
    },

    init: function(application) {
        this.getPrjDtlStore().on({
            scope: this,
            load : this.PrjDtlLod
        });

        this.getTrkMstDtlStore().on({
            scope: this,
            load : this.TrkMstDtlLod
        });

        this.getTrkMstLstStore().on({
            scope: this,
            load : this.TrkMstLstLod
        });

        this.getTrkMstFltStore().on({
            scope: this,
            load : this.TrkMstFltLod
        });

        this.control({
            "trkmstdtl combobox[name=CllPri]": {
                change: this.CllPriChg
            },
            "trkmstdtl toolbar button[text=Save]": {
                click: this.TrkMstSve
            },
            "trkmstlst": {
                beforeselect: this.BfrSlc,
                selectionchange: this.SlcChg,
                viewready: this.TrkMstLstRdy
            },
            "trkmstdtl combobox[name=CllTyp]": {
                change: this.CllTypChg
            }
        });
    },

    TrkPnlLod: function(Rcd) {
        var PrjDtlSto = this.getPrjDtlStore(),
            PrjTskSto = this.getPrjTskStore(),    
            TrkAsgSto = this.getTrkAsgStore(),
            TrkAtcSto = this.getTrkAtcStore(),
            TrkMstDtlSto = this.getTrkMstDtlStore(),
            ChgObjSto = this.getChgObjStore(),
            ChgRqsSto = this.getChgRqsStore(),
            TrkIdn = Rcd.data.TrkIdn,
            TrkIdn7 = Rcd.get('TrkIdn').slice(-7),
            AplPrfSto = this.getAplPrfStore();

        TrkMstDtlSto.load({
            params: { TrkIdn: Rcd.data.TrkIdn}
        });

        TrkAsgSto.load({
            params: { filter: '[{"property":"TrkIdn","value":"=' + TrkIdn + '"}]'}
        });

        TrkAtcSto.load({
            params: { 
                TrkIdn: TrkIdn,
                PrsTyp: 'LodDta'
            }
        });

        AplPrfDta = AplPrfSto.load().first().getData();

        PrjDtlSto.removeAll();
        PrjTskSto.removeAll();
        if (AplPrfDta.PrjTab) {
            if (Rcd.data.CllCls == 'Project' || Rcd.data.CllCls == 'SCR') {
                PrjDtlSto.load({
                    params: { filter: '[{"property":"TrkIdn","value":"' + TrkIdn + '"}]'}
                });    
            }
        }

        if (AplPrfDta.ObjTab) {
            ChgObjSto.load({
                params: { filter: '[{"property":"TrkIdn","value":"= \'' + TrkIdn7 + '\'"}]'}
            });
        }

        if (AplPrfDta.MveTab) {
            ChgRqsSto.load({
                params: { filter: '[{"property":"TrkIdn","value":"= \'' + TrkIdn7 + '\'"}]'}
            });
        }

        if (this.getTrkAtc()) {
            this.getTrkAtc().down('form').getForm().reset();
        }
    },

    PrjDtlLod: function(Sto) {
        var PrjTskSto = this.getPrjTskStore(),
            Rcd = Sto.first();

        if (Sto.first()) {
            var Frm = this.getPrjDtl().getForm();
            Frm.loadRecord(Rcd);

            var PrjIdn = Rcd.data.project_id;
            PrjTskSto.load({
                params: { filter: '[{"property":"PrjIdn","value":"' + PrjIdn + '"}]'}
            });

            Frm.findField('project_id').setValue('<a href=https://www.quickbase.com/db/bazid6rxt?a=er&rid=' + PrjIdn + ' target="_blank">' + PrjIdn + '</a>');

            if (Rcd.data.actual_finish) {
                var DteCmp = Rcd.data.projected_end_date;
                var Dte = new Date(Number(DteCmp));
                DteCmp = ('0' + (Dte.getMonth()+1)).slice(-2) + '/' + ('0' + Dte.getDate()).slice(-2) + '/' + Dte.getFullYear();
                Frm.findField('actual_finish').setValue(DteCmp);
            }
        }
        else {
            this.getPrjDtl().getForm().reset();
        }
    },

    TrkMstLstLod: function() {
        if (this.getTrkMstLstStore().getTotalCount() > 0) {
            if (this.getTrkMstLst()) {
                this.getTrkMstLst().getSelectionModel().select(0);
            }
        }
    },

    TrkMstDtlLod: function(Sto) {
        this.getTrkMstDtl().getForm().loadRecord(Sto.first());
    },

    TrkMstFltLod: function(Sto) {
        var Frm = this.getTrkMstFlt().down('form').getForm();

        if (Sto.first()) {
            Frm.loadRecord(Sto.first());
        }
        else {
            Frm.reset();
        }

        if (Frm.findField('CllTyp').value === ''){
            Frm.findField('CllCtg').setDisabled(true);
        }
    },

    SveChg: function(BtnIdn, Slc) {
        if (BtnIdn == 'yes') {
            Frm = this.getTrkMstDtl().getForm();
            Frm.updateRecord();
            this.getTrkMstDtlStore().sync({
                success: function (Bch, Opt) {
                    return true;
                },
                failure: function (Bch, Opt) {
                    return false;
                }
            });

            Frm.loadRecord(Frm.getRecord());
            Frm.reset();
            PrvRcd = this.getTrkMstLst().getSelectionModel().getSelection()[0];
            Frm.getFields().each(function(Fld){
                PrvRcd.set(Fld.getName(),Fld.getValue());
            });

            this.getTrkMstLst().getSelectionModel().select(Slc);
        }
        else if (BtnIdn == 'no') {
            console.log('No');
            this.getTrkMstDtl().getForm().reset();
            this.getTrkMstLst().getSelectionModel().select(Slc);
        }
        else if (BtnIdn == 'cancel') {
            console.log('Cancel');
        }
    }

});
