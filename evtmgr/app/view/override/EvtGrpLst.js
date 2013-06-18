Ext.define('EvtMgr.view.override.EvtGrpLst', {
    override: 'EvtMgr.view.EvtGrpLst',
    plugins: [{ 
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '{Des:this.FmtDes}',
            {
                FmtDes: function(Des){
                    console.log(Des);
                    var HTM = "";
                    if (Des !== "") {
                        var color = Des >= "" ? 'green' : 'red';
                        HTM = '<div><b>Description:</b><div><div style="color: ' + color + ';">' + Des + '<div>';
                    }
                    return HTM;
                }
            })
    }]    
});