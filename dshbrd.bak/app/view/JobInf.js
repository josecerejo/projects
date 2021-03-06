/*
 * File: app/view/JobInf.js
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

Ext.define('DshBrd.view.JobInf', {
    extend: 'Ext.form.Panel',
    alias: 'widget.jobinf',

    border: 0,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    bodyPadding: 10,
    title: 'Detail',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldcontainer',
                    flex: 1,
                    height: 120,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Job',
                            name: 'JOB'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'User',
                            name: 'USR'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Job Number',
                            name: 'JOBNBRA'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Subsystem',
                            name: 'SBSQLF'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    flex: 1,
                    height: 120,
                    width: 400,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Job Type',
                            name: 'JOBTYP'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Job Status',
                            name: 'JOBSTS'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Active Status',
                            name: 'JOBSTSACV'
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Job Description',
                            name: 'JBDQLF'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});