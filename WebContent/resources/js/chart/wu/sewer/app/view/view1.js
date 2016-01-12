Ext.define('chart.view.view1', {
    extend: 'Ext.panel.Panel',

    width: 850,
    height: 300,
    title: '행정구역별 하수도 보급률',
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
								text: '엑셀',
								iconCls: 'excel', 
								handler: function() {
									var data = Ext.getCmp("grid11").getStore().data.items;
									
									var html = "<div><table border='1'><thead><tr>";
									
									html += "<th>조사년도</th>";
									html += "<th>시도</th>";
									html += "<th>시군구</th>";
									html += "<th>총인구(명)</th>";
									html += "<th>하수처리구역내(명)</th>";
									html += "<th>하수처리구역외(미처리인구)(명)</th>";
									html += "<th>공공하수처리구역인구보급률(%)</th>";
									
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
							fieldLabel: '년도',
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
											// setValue를 하면 자동으로 change함수 호출됨
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
											// setValue를 하면 자동으로 change함수 호출됨
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
								{xtype: 'gridcolumn', dataIndex: 'RSRH_YR', header: '조사년도', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'SIDO', header: '시도', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'SIGUNGU', header: '시군구', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'POP_TOL', header: '총인구(명)', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'SEWERAGE_EIX', header: '하수처리구역내(명)', flex: 2, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'SEWERAGE_NOT', header: '하수처리구역외(미처리인구)(명)', flex: 2, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'SEWERAGE_RAT', header: '공공하수처리구역인구보급률(%)', flex: 2, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}}
							],
							listeners: {
								render: {
									fn: function(me) {

										// 아래 소스 싹다 주석 필요없는듯..
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