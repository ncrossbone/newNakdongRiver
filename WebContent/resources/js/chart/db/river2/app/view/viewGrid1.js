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
							text: '����',
							iconCls: 'excel', 
							handler: function() {
								var data = Ext.getCmp("grid1").getStore().data.items;
								
								var html = "<div><table border='1'><thead><tr>";
								
								html += "<th>�߱ǿ�</th>";
								html += "<th>������</th>";
								html += "<th>�⵵</th>";
								html += "<th>����</th>";
								html += "<th>1��</th>";
								html += "<th>2��</th>";
								html += "<th>3��</th>";
								html += "<th>4��</th>";
								html += "<th>5��</th>";
								html += "<th>6��</th>";
								html += "<th>7��</th>";
								html += "<th>8��</th>";
								html += "<th>9��</th>";
								html += "<th>10��</th>";
								html += "<th>11��</th>";
								html += "<th>12��</th>";
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
							, fieldLabel: '������'
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
									
									
									// ������ ���ý�
									if(nv != 0 && nv != '0') {
										gproxy.extraParams = {
											mw: request.getParameter('mw'),
											obs: nv,
											year: yearVal
										};
									}
									
									// ��ü ���ý�
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
							, fieldLabel: '�⵵'
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
								{xtype: 'gridcolumn', dataIndex: 'AM_NM', header: '�߱ǿ�', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'OBS_NM', header: '������', flex: 2},
								{xtype: 'gridcolumn', dataIndex: 'OB_YEAR', header: '�⵵', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'OB_DAY', header: '����', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_1', header: '1��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_2', header: '2��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_3', header: '3��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_4', header: '4��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_5', header: '5��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_6', header: '6��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_7', header: '7��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_8', header: '8��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_9', header: '9��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_10', header: '10��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_11', header: '11��', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'MONTH_12', header: '12��', flex: 1, align: 'right', renderer: function(val, p, record) {
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