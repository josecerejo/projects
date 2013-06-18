/*
 * File: app/model/CusInvT6.js
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

Ext.define('HuhPtl.model.CusInvT6', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'YRS'
        },
        {
            name: 'MTH',
            type: 'int'
        },
        {
            name: 'MTHNME'
        },
        {
            name: 'BUSCDE'
        },
        {
            name: 'TYPDES'
        },
        {
            convert: function(v, rec) {
                if (v) {
                    if (Ext.String.trim(v) === '') {
                        v = '*blank';
                    }
                    return Ext.String.trim(v);
                }
                else {
                    return v;
                }
            },
            name: 'CUSATR'
        },
        {
            convert: function(v, rec) {
                if (v) {
                    if (Ext.String.trim(v) === '') {
                        v = '*blank';
                    }
                    return Ext.String.trim(v);
                }
                else {
                    return v;
                }
            },
            name: 'CUSATRDES'
        },
        {
            name: 'MTDACT',
            type: 'float'
        },
        {
            name: 'MTDBUDPRO',
            type: 'float'
        },
        {
            convert: function(v, rec) {
                if (rec.get('MTDBUDPRO') > 0) {
                    return (Math.floor((rec.get('MTDACT') / rec.get('MTDBUDPRO')) * 10000)) / 100;
                }
                else {
                    return 9999999;
                }
            },
            name: 'MTDVAR',
            type: 'float'
        },
        {
            name: 'MTDOOR',
            type: 'float'
        },
        {
            name: 'MTDTOT',
            type: 'float'
        },
        {
            name: 'MTDBUD',
            type: 'float'
        },
        {
            name: 'MTDACTPRI',
            type: 'float'
        }
    ]
});