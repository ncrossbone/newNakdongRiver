Ext.define('chart.view.view', {
    extend: 'Ext.panel.Panel',
    
    width: 700,
    height: 400,
	id: 'view1',
	title: 'ȯ����ʽü� ����',

    requires: [
		'chart.model.modelType1',
		'chart.store.storeType1'
	],
	
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
					xtype: 'panel',
					border: false,
					layout: 'vbox',
					tbar: [{
						text: '�μ�',
						iconCls: 'print',
						handler: function(){
						}
					}, {
						text: '����',
						iconCls: 'save',
						handler: function(){
						}
					}],
					items: [{
						xtype: 'grid',
						id: 'grid11',
						store: 'modelType1',
						border: false,
						width: 596,
						height: 193,
						columns: [
							{
                            xtype: 'gridcolumn',
                            dataIndex: 'FACI_NM',
                            text: '�ü���'
                        },
                        {
                            xtype: 'gridcolumn',
                            text: '�ּ�'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'FACI_AMT',
                            text: '�뷮'
                        },
                        /*{
                            xtype: 'gridcolumn',
                            dataIndex: 'TRT_METHOD_PRE',
                            text: '������ó��'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TRT_METHOD_1',
                            text: '����1��'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TRT_METHOD_2',
                            text: '����2��'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TRT_METHOD_3',
                            text: '����3��'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'START_DD',
                            text: '����������'
                        },
                        */{
                            xtype: 'gridcolumn',
                            dataIndex: 'OPR_ORG',
                            text: '����'
                        }
						],
						listeners: {
							render: {
								fn: function(me) {
									var store = this.getStore();
									var proxy = store.getProxy();
									
									var request = new Request();
									
									proxy.extraParams = {
										search_type_type: request.getParameter('search_type_type'),
										search_type_mw: request.getParameter('search_type_mw'),
										search_type_sido: request.getParameter('search_type_sido'),
										search_type_sgg: request.getParameter('search_type_sgg'),
									};
									
									store.load();
								}
							}
						}
					}]
				}
            ]
        });

        me.callParent(arguments);
    }
});