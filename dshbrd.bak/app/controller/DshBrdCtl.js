/*
 * File: app/controller/DshBrdCtl.js
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

Ext.define('DshBrd.controller.DshBrdCtl', {
    extend: 'Ext.app.Controller',

    stores: [
        'AplPrf',
        'CllCls',
        'CllCtg',
        'CllSts',
        'CllPri',
        'CllTyp',
        'JobInf',
        'TrkMstFlt',
        'TrkMstLst'
    ],

    refs: [
        {
            ref: 'TrkPnl',
            selector: 'trkpnl'
        },
        {
            ref: 'AplPrf',
            selector: 'aplprf'
        },
        {
            ref: 'DshBrd',
            selector: 'dshbrd'
        },
        {
            ref: 'TrkMstLst',
            selector: 'trkmstlst'
        }
    ],

    TabChg: function(tabPanel, newCard, oldCard, eOpts) {
        Btn = tabPanel.up('viewport').down('toolbar').getComponent('FltBtn');
        switch(newCard.title.trim())
        {
            case 'Tracking':
            Btn.setDisabled(false);
            break;
            case 'Jobs':
            Btn.setDisabled(false);
            break;
            case 'Documentation':
            Btn.setDisabled(true);
            break;
            case 'Links':
            Btn.setDisabled(true);
            break;
            case 'Cognos':
            Btn.setDisabled(true);
            break;
        }
    },

    TBrRfr: function(button, e, eOpts) {
        var Tab = button.up('viewport').down('tabpanel').getActiveTab();

        if(Tab.title.trim() == 'Tracking') {
            this.getTrkMstLstStore().load();
        }
        else if(Tab.title.trim() == 'Jobs') {
            this.getJobInfStore().load();
        }
        else {
            console.log('No Filter');
        }
    },

    TBrFlt: function(button, e, eOpts) {
        var Tab = button.up('viewport').down('tabpanel').getActiveTab();

        if(Tab.title.trim() == 'Tracking') {
            var Sto = this.getTrkMstFltStore();

            Wdw = Ext.getCmp('TrkMstFlt');
            if (!Wdw) {
                Ext.create('DshBrd.view.TrkMstFlt').show();
            }
            else {
                Wdw.show();
            }

            Sto.load();
        }
        else {
            console.log('No Filter');
        }
    },

    PrfCnl: function(button, e, eOpts) {
        button.up('window').close();
    },

    PrfSve: function(button, e, eOpts) {
        var Sto = this.getAplPrfStore();
        this.getAplPrf().down('form').getForm().updateRecord();
        Sto.sync({
            success: function (Bch, Opt) {
                return true;
            },
            failure: function (Bch, Opt) {
                return false;
            }
        });

        this.getController('TrkMstCtl').TrkPnlLod(this.getTrkMstLst().getSelectionModel().getSelection()[0]);

        this.SetTab(Sto);
        button.up('window').close();
    },

    MnuClk: function(item, e, eOpts) {
        switch(item.text) {
            case 'Preferences':
            //    PrfWdw = Ext.getCmp('AplPrfWdw');
            if (!Ext.getCmp('AplPrfWdw')) {
                Ext.create('DshBrd.view.AplPrf', {
                    title: 'Preferences'
                }).show();
            }
            else {
                console.log('show');
                Wdw.show();
            }
            var Sto = this.getAplPrfStore();
            Sto.load();
            break;

            default:
            console.log(item);
        }
    },

    init: function(application) {
        this.getAplPrfStore().on({
            scope: this,
            load : this.LodAplPrf
        });

        this.control({
            "viewport tabpanel": {
                tabchange: this.TabChg
            },
            "viewport toolbar button[text=Refresh]": {
                click: this.TBrRfr
            },
            "viewport toolbar button[text=Filter]": {
                click: this.TBrFlt
            },
            "aplprf toolbar button[text=Cancel]": {
                click: this.PrfCnl
            },
            "aplprf toolbar button[text=Save]": {
                click: this.PrfSve
            },
            "menuitem": {
                click: this.MnuClk
            }
        });
    },

    SetTab: function(Sto) {
        var DshBrdTab = this.getDshBrd().down('tabpanel'),
            TrkPnlTab = this.getTrkPnl().down('tabpanel'),
            Dta = Sto.first().getData(),
            DshBrdAcvTab = DshBrdTab.getActiveTab(),
            TrkPnlAcvTab = TrkPnlTab.getActiveTab();

        Ext.Array.each(Sto.getProxy().getModel().getFields(), function(Fld) {
            if (Dta[Fld.name]) {
                if (DshBrdTab.child('#'+Fld.name)) {
                    DshBrdTab.child('#'+Fld.name).tab.show();
                }
                else if (TrkPnlTab.child('#'+Fld.name)) {
                    TrkPnlTab.child('#'+Fld.name).tab.show();
                }
            }
            else {
                if (DshBrdTab.child('#'+Fld.name)) {
                    DshBrdTab.child('#'+Fld.name).tab.hide();
                    if(DshBrdAcvTab.getItemId() == Fld.name) {
                        DshBrdTab.setActiveTab(0);
                    }
                }
                else if (TrkPnlTab.child('#'+Fld.name)) {
                    TrkPnlTab.child('#'+Fld.name).tab.hide();
                    if(TrkPnlAcvTab.getItemId() == Fld.name) {
                        TrkPnlTab.setActiveTab(0);
                    }
                }
            }
        });
    },

    LodAplPrf: function(Sto) {
        if (Sto.first()) {
            if (this.getAplPrf()) {
                this.getAplPrf().down('form').getForm().loadRecord(Sto.first());
            }
        }
        else {
            Rcd = Ext.create('DshBrd.model.AplPrf');
            Ext.Array.each(Sto.getProxy().getModel().getFields(), function(Fld) {
                Rcd.set(Fld.name,true);
            });
            Sto.add(Rcd);
            Sto.sync();
            if (this.getAplPrf()) {
                this.getAplPrf().down('form').getForm().loadRecord(Sto.first());
            }
        }

        this.SetTab(Sto);
    },

    LodSto: function() {
        this.getCllClsStore().load();
        this.getCllCtgStore().load();
        this.getCllPriStore().load();
        this.getCllStsStore().load();
        this.getCllTypStore().load();
        this.getTrkMstLstStore().load();
    }

});