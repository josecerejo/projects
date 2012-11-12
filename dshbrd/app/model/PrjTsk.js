/*
 * File: app/model/PrjTsk.js
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

Ext.define('DshBrd.model.PrjTsk', {
    extend: 'Ext.data.Model',

    idProperty: 'task_id',

    fields: [
        {
            name: 'project'
        },
        {
            name: 'task_id'
        },
        {
            name: 'stoplight'
        },
        {
            name: 'task_name'
        },
        {
            name: 'req_hours'
        },
        {
            name: 'epd_hours'
        },
        {
            name: 'start'
        },
        {
            name: 'finish_date'
        },
        {
            name: 'actual_finish'
        },
        {
            name: 'status'
        },
        {
            name: 'assigned_to'
        },
        {
            name: 'related_resource'
        }
    ]
});