Ext.define('chart.view.view1', {
    extend: 'Ext.panel.Panel',

    width: 850,
    height: 300,
    title: '���������� �ϼ��� ���޷�',
	id: 'view1',
	
    requires: [
        'chart.store.storeYear1'
    ],


    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
					width: 850,
					height: 300,
					border: false,
					tbar: [
							{
								text: '����',
								iconCls: 'excel', 
								handler: function() {
									var data = Ext.getCmp("grid11").getStore().data.items;
									
									var html = "<div><table border='1'><thead><tr>";
									
									html += "<th>����⵵</th>";
									html += "<th>�õ�</th>";
									html += "<th>�ñ���</th>";
									html += "<th>���α�(��)</th>";
									html += "<th>�ϼ�ó��������(��)</th>";
									html += "<th>�ϼ�ó��������(��ó���α�)(��)</th>";
									html += "<th>�����ϼ�ó�������α����޷�(%)</th>";
									
									html += "</tr>";
									html += "</thead>";
									html += "<tbody>";
									
									
									for(var i in data) {
										html += "<tr>";
										html += "<td>" + data[i].data['RSRH_YR'] + "</td>";
										html += "<td>" + data[i].data['SIDO'] + "</td>";
										html += "<td>" + data[i].data['SIGUNGU'] + "</td>";
										html += "<td>" + data[i].data['POP_TOL'] + "</td>";
										html += "<td>" + data[i].data['SEWERAGE_EIX'] + "</td>";
										html += "<td>" + data[i].data['SEWERAGE_NOT'] + "</td>";
										html += "<td>" + data[i].data['SEWERAGE_RAT'] + "</td>";
										html += "</tr>";
									}
									
									html += "</tbody></table></div>";
									
									$(html).find("td").attr("style", "mso-number-format:'\\@'; text-align: center;");
									
									if($("form[name='excelForm']").length > 0) {
										$("form[name='excelForm']").remove()
									}
									 
									$("body").append("<form name='excelForm' method='post' target='_blank' accept-charset='EUC-KR'><input type='hidden' id='excel' name='excel'></form>")
									
									$("#excel").val(
										$("<div>").append(
											$(html).clone()
										).html()
									);
									
									document.excelForm.action="/nakdong/exportExcel.do"; 
									document.excelForm.submit();
								}	
							},
						{
							xtype: 'combobox',
							id: 'combo1',
							fieldLabel: '�⵵',
							labelWidth: 28,
							labelSeparator: '',
							store: 'storeYear1',
							queryMode: 'local',
							displayField: 'RSRH_YR',
							valueField: 'RSRH_YR',
							width:100,
							listeners: {
								render: function(me) {
									var request = new Request();
									var store = me.getStore();
									var proxy = store.getProxy();
									
									proxy.extraParams = {
										mw: request.getParameter('mw')
									};
									
									store.load({
										scope: this,
										callback: function(records, operation, success){
											// setValue�� �ϸ� �ڵ����� change�Լ� ȣ���
											me.setValue(records[0].data.RSRH_YR);
										}
									});
								},
								change: function(me, nv, ov){
									var grid = Ext.getCmp('grid11');
									
									var gstore = grid.getStore();
									var gproxy = gstore.getProxy();
									
									var request = new Request();
									
									var endYear = Ext.getCmp('combo2');
									var endYearVal = endYear.getValue();
									
									if(endYearVal==null || endYearVal==''){
										endYearVal = nv;
									}
									
									gproxy.extraParams = {
										start_year: nv,
										end_year: endYearVal,
										mw: request.getParameter('mw')
									};
									
									gstore.load();
								}
							}
						},
						{
							xtype: 'combobox',
							id: 'combo2',
							fieldLabel: '~',
							labelWidth: 28,
							labelSeparator: '',
							store: 'storeYear1',
							queryMode: 'local',
							displayField: 'RSRH_YR',
							valueField: 'RSRH_YR',
							width:100,
							listeners: {
								render: function(me) {
									var request = new Request();
									var store = me.getStore();
									var proxy = store.getProxy();
									
									proxy.extraParams = {
										mw: request.getParameter('mw')
									};
									
									store.load({
										scope: this,
										callback: function(records, operation, success){
											// setValue�� �ϸ� �ڵ����� change�Լ� ȣ���
											me.setValue(records[0].data.RSRH_YR);
										}
									});
								},
								change: function(me, nv, ov){
									var grid = Ext.getCmp('grid11');
									
									var gstore = grid.getStore();
									var gproxy = gstore.getProxy();
									
									var request = new Request();
									
									var startYear = Ext.getCmp('combo1');
									var startYearVal = startYear.getValue();
									
									if(startYearVal==null || startYearVal==''){
										startYearVal = nv;
									}
									
									gproxy.extraParams = {
										start_year: startYearVal,
										end_year: nv,
										mw: request.getParameter('mw')
									};
									
									gstore.load();
								}
							}
						}
					],
					items: [
						{
							xtype: 'grid',
							id: 'grid11',
							store: 'storeType11',
							border: false,
							height: 240,
							columns: [
								{xtype: 'gridcolumn', dataIndex: 'RSRH_YR', header: '����⵵', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'SIDO', header: '�õ�', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'SIGUNGU', header: '�ñ���', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'POP_TOL', header: '���α�(��)', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'SEWERAGE_EIX', header: '�ϼ�ó��������(��)', flex: 2, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'SEWERAGE_NOT', header: '�ϼ�ó��������(��ó���α�)(��)', flex: 2, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'SEWERAGE_RAT', header: '�����ϼ�ó�������α����޷�(%)', flex: 2, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}}
							],
							listeners: {
								render: {
									fn: function(me) {

										// �Ʒ� �ҽ� �ϴ� �ּ� �ʿ���µ�..
//										var request = new Request();
//										var store = me.getStore();

//										store.load();
										
//										var proxy = store.getProxy();
//										
//										var year = Ext.create('Ext.data.Store', {
//											model: 'chart.model.modelYear1',
//								            proxy: {
//								                type: 'ajax',
//								                url: '/nakdong/wu/wuSewer_year1.json',
//								                reader: {
//								                    type: 'json',
//								                    root: 'result'
//								                }
//								            }
//										});
//										
//										var yproxy = year.getProxy();
//										yproxy.extraParams = {
//											mw: request.getParameter('mw')
//										};
//										
//										year.load({
//											scope: this,
//											callback: function(records, operation, success){
//												
//												var yv = records[0].data.RSRH_YR;
//										
//												proxy.extraParams = {
//													year: yv,
//													mw: request.getParameter('mw')
//												};
//												store.load();
//											}
//										});
									}
								}
							}
						}
					]
                }
            ]
        });

        me.callParent(arguments);
    }
});