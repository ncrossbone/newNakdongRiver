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
								
								html += "<th>년도</th>";
								html += "<th>풍수량(m<sup>3</sup>/s)</th>";
								html += "<th>평수량(m<sup>3</sup>/s)</th>";
								html += "<th>저수량(m<sup>3</sup>/s)</th>";
								html += "<th>갈수량(m<sup>3</sup>/s)</th>";
								
								html += "</tr>";
								html += "</thead>";
								html += "<tbody>";
								
								
								for(var i in data) {
									html += "<tr>";
									html += "<td>" + data[i].data['RSRH_YR'] + "</td>";
									html += "<td>" + data[i].data['MAX_AMT'] + "</td>";
									html += "<td>" + data[i].data['AVG_AMT'] + "</td>";
									html += "<td>" + data[i].data['SAV_AMT'] + "</td>";
									html += "<td>" + data[i].data['DRY_AMT'] + "</td>";
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
					],
                    items: [
                        {
							xtype: 'grid',
							id: 'grid1',
							store: 'storeType1',
							border: false,
							width: 698,
							height: 140,
							columns: [
								{xtype: 'gridcolumn', dataIndex: 'RSRH_YR', header: '년도', flex: 1},
								{xtype: 'gridcolumn', dataIndex: 'MAX_AMT', header: '풍수량(m<sup>3</sup>/s)', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'AVG_AMT', header: '평수량(m<sup>3</sup>/s)', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'SAV_AMT', header: '저수량(m<sup>3</sup>/s)', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}},
								{xtype: 'gridcolumn', dataIndex: 'DRY_AMT', header: '갈수량(m<sup>3</sup>/s)', flex: 1, align: 'right', renderer: function(val, p, record) {
									return setComma(val.toFixed(2));
								}}
							],
							listeners: {
								render: {
									fn: function(me){
										var store = me.getStore();
										var proxy = store.getProxy();
										
										var request = new Request();
										
										proxy.extraParams = {
											mw: request.getParameter('mw')
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