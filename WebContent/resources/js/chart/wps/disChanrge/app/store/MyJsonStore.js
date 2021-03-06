/*
 * File: app/store/MyJsonStore.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
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

Ext.define('MyApp.store.MyJsonStore', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.animalModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'MyApp.model.airModel',
        'MyApp.model.waterModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            model: 'MyApp.model.animalModel',
            storeId: 'MyJsonStore',
            proxy: {
                type: 'ajax',
                url: '/nakdong/wps/wpsStatus_animal.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onJsonstoreBeforeLoad,
                    scope: me
                },
                load: {
                    fn: me.onJsonstoreLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onJsonstoreBeforeLoad: function(store, operation, eOpts) {
        var request = new Request();
        this.proxy.extraParams = {
            search_type_mw: request.getParameter('search_type_mw'),
            search_type_sw: request.getParameter('search_type_sw'),
            search_type_sido: request.getParameter('search_type_sido'),
            search_type_sgg: request.getParameter('search_type_sgg'),
            search_type_work: request.getParameter('search_type_work'),
            search_type_num: request.getParameter('search_type_num'),
            search_type_ani: request.getParameter('search_type_ani')
        };
    },

    onJsonstoreLoad: function(store, records, successful, eOpts) {
        var aaa = 0;
    }

});