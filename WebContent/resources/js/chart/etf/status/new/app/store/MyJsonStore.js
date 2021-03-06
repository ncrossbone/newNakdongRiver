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
        'MyApp.model.MyModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'MyApp.model.MyModel',
            storeId: 'MyJsonStore',
            proxy: {
                type: 'ajax',
                url: '/nakdong/etf/etfStatus_chart1.json',
                reader: {
                    type: 'json',
                    root: 'result'
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onJsonstoreBeforeLoad,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onJsonstoreBeforeLoad: function(store, operation, eOpts) {
        var request = new Request();
        this.proxy.extraParams = {
            search_type_type: request.getParameter('search_type_type'),
            search_type_mw: request.getParameter('search_type_mw'),
            search_type_sido: request.getParameter('search_type_sido'),
            search_type_sgg: request.getParameter('search_type_sgg')
        };
    }

});