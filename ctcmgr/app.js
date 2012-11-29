/*
 * File: app.js
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

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'Evt'
    ],
    stores: [
        'Evt'
    ],
    views: [
        'UsrSnI',
        'BsePnl'
    ],
    appFolder: 'apl',
    name: 'CtcMgr',
    controllers: [
        'CtcMgr',
        'UsrSnI'
    ],

    launch: function() {
        Ext.getDoc().dom.title = 'amps | Events - Contact Manager'; 
        var BsePnl = Ext.create('CtcMgr.view.BsePnl', {
            renderTo: Ext.getBody()
        });
        BsePnl.show();

        Ext.Ajax.request({
            url: '../shared/SnISts.php',
            scope: this,
            success: function(RspJSN){
                Rsp = Ext.JSON.decode(RspJSN.responseText);
                if (Rsp.Scs === true) {
                }
                else {
                    var UsrSnI = Ext.create('CtcMgr.view.UsrSnI', {
                        renderTo: Ext.getBody()
                    });

                    UsrSnI.show();
                }
            },
            failure: function(){
                console.log('Load Error-php');
            }
        });
    }

});
