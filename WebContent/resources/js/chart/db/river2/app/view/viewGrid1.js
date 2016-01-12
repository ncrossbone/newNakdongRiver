Ext.define('chart.view.viewGrid1', {
    extend: 'Ext.panel.Panel',

	id: 'viewGrid1',
	xtype: 'viewGrid1',
    layout: 'fit',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
					border: false,
					layout: 'vbox',
					tbar: [
						{
							text: '엑셀',
							iconCls: 'excel', 
							handler: function() {
								var data = Ext.getCmp("grid1").getStore().data.items;
								
								var html = "<div><table border='1'><thead><tr>";
								
								html += "<th>중권역</th>";
								html += "<th>측정소</th>";
								html += "<th>년도</th>";
								html += "<th>일자</th>";
								html += "<th>1월</th>";
								html += "<th>2월</th>";
								html += "<th>3월</th>";
								html += "<th>4월</th>";
								html += "<th>5월</th>";
								html += "<th>6월</th>";
								html += "<th>7월</th>";
								html += "<th>8월</th>";
								html += "<th>9월</th>";
								html += "<th>10월</th>";
								html += "<th>11월</th>";
								html += "<th>12월</th>";
								html += "</tr>";
								html += "</thead>";
								html += "<tbody>";
								
								
								for(var i in data) {
									html += "<tr>";
									html += "<td>" + data[i].data['AM_NM'] + "</td>";
									html += "<td>" + data[i].data['OBS_NM'] + "</td>";
									html += "<td>" + data[i].data['OB_YEAR'] + "</td>";
									html += "<td>" + data[i].data['OB_DAY'] + "</td>";
									html += "<td>" + data[i].data['MONTH_1'] + "</td>";
									html += "<td>" + data[i].data['MONTH_2'] + "</td>";
									html += "<td>" + data[i].data['MONTH_3'] + "</td>";
									html += "<td>" + data[i].data['MONTH_4'] + "</td>";
									html += "<td>" + data[i].data['MONTH_5'] + "</td>";
									html += "<td>" + data[i].data['MONTH_6'] + "</td>";
									html += "<td>" + data[i].data['MONTH_7'] + "</td>";
									html += "<td>" + data[i].data['MONTH_8'] + "</td>";
									html += "<td>" + data[i].data['MONTH_9'] + "</td>";
									html += "<td>" + data[i].data['MONTH_10'] + "</td>";
									html += "<td>" + data[i].data['MONTH_11'] + "</td>";
									html += "<td>" + data[i].data['MONTH_12'] + "</td>";
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
						}
						, {
							xtype: 'combobox'
							, id: 'combo_obs'
							, fieldLabel: '측정소'
							, labelWidth: 40
							, labelSeparator: ''
							, store: 'storeObs1'
							, queryMode: 'local'
							, displayField: 'OBS_NM'
							, valueField: 'OBS_CD'
							, width:300
							, listeners: {
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
											me.setValue(records[0].data.OBS_CD);
										}
									});
								}
								, change: function(me, nv, ov){
									var grid = Ext.getCmp('grid1');
									
									var gstore = grid.getStore();
									var gproxy = gstore.getProxy();
									
									var request = new Request();
									
									var year = Ext.getCmp('combo_year');
									var yearVal = year.getValue();
									
									
									// 측정소 선택시
									if(nv != 0 && nv != '0') {
										gproxy.extraParams = {
											mw: request.getParameter('mw'),
											obs: nv,
											year: yearVal
										};
									}
									
									// 전체 선택시
									else {
										gproxy.extraParams = {
												mw: request.getParameter('mw'),
												obs: '',
												year: yearVal
											};
									}
									
									gstore.load();
								}
							}
						}
						, {
							xtype: 'combobox'
							, id: 'combo_year'
							, fieldLabel: '년도'
							, labelWidth: 30
							, labelSeparator: ''
							, store: 'storeYear1'
							, queryMode: 'local'
							, displayField: 'OB_YEAR'
							, valueField: 'OB_YEAR'
							, width:120
							, listeners: {
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
											me.setValue(records[0].data.OB_YEAR);
										}
									});
								}
								, change: function(me, nv, ov){
									var grid = Ext.getCmp('grid1');
									
									var gstore = grid.getStore();
									var gproxy = gstore.getProxy();
									
									var request = new Request();
									
									var obs = Ext.getCmp('combo_obs');
									var obsVal = obs.getValue();
									
									if(obsVal == 0 || obsVal == '0') obsVal = '';
									
									gproxy.extraParams = {
										mw: request.getParameter('mw'),
										obs: obsVal,
										year: nv
									};
									
									gstore.load();
								}
							}
						}
					],
                    items: [
                        {
							xtype: 'grid',
							id: 'grid1',
							store: 'storeType1',
							border: false,
							width: 898,
							height: 572,
							columns: [
								{xtype: 'gridcolumn', dataIndex: 'AM_NM', header: '중권역', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'OBS_NM', header: '측정소', flex: 2},
								{xtype: 'gridcolumn', dataIndex: 'OB_YEAR', header: '년도', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'OB_DAY', header: '일자', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_1', header: '1월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_2', header: '2월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_3', header: '3월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_4', header: '4월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_5', header: '5월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_6', header: '6월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_7', header: '7월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_8', header: '8월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_9', header: '9월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_10', header: '10월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_11', header: '11월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_12', header: '12월', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
							],
							listeners: {
								render: {
									fn: function(me){
										var store = me.getStore();
										var proxy = store.getProxy();
										
										var request = new Request();
										
										proxy.extraParams = {
											mw: request.getParameter('mw')
											, obs: request.getParameter('obs')
											, year: request.getParameter('year')
										};
										
										store.load();
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