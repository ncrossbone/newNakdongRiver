Ext.define('chart.view.view', {
    extend: 'Ext.panel.Panel',
    
    width: 700,
    height: 400,
	id: 'view1',
	title: '환경기초시설 정보',

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
						text: '인쇄',
						iconCls: 'print',
						handler: function(){
						}
					}, {
						text: '저장',
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
                            text: '시설명'
                        },
                        {
                            xtype: 'gridcolumn',
                            text: '주소'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'FACI_AMT',
                            text: '용량'
                        },
                        /*{
                            xtype: 'gridcolumn',
                            dataIndex: 'TRT_METHOD_PRE',
                            text: '공정전처리'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TRT_METHOD_1',
                            text: '공정1차'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TRT_METHOD_2',
                            text: '공정2차'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'TRT_METHOD_3',
                            text: '공정3차'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'START_DD',
                            text: '가동개시일'
                        },
                        */{
                            xtype: 'gridcolumn',
                            dataIndex: 'OPR_ORG',
                            text: '운영기관'
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