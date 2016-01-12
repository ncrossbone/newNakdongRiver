Ext.define('chart.view.viewChart4', {
    extend: 'Ext.panel.Panel',

	id: 'viewChart4',
	xtype: 'viewChart4',
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
							text: '인쇄',
							iconCls: 'print',
							handler: function() {
								$("#chart4").print();
							}	
						},
						{
							text: '저장',
							iconCls: 'save', 
							handler: function() {
								Ext.getCmp('chart4').save({type: 'image/png'});
							}	
						},
						{
							xtype: 'combobox',
							store: 'storeYear',
							queryMode: 'local',
							displayField: 'YR',
							valueField: 'YR',
							fieldLabel: '년도',
							labelWidth: 28,
							labelSeparator: '',
							width:100,
							listeners: {
								render: function(me) {
									var request = new Request();
									var year = request.getParameter('year');
									
									me.setValue(year);
								},
								change: function(me, nv, ov) {
									var chart = Ext.getCmp('chart4');
									var grid = Ext.getCmp('grid4');
									
									var cstore = chart.getStore();
									var cproxy = cstore.getProxy();
									
									var gstore = grid.getStore();
									var gproxy = gstore.getProxy();
									
									var request = new Request();
									
									cproxy.extraParams = {
										year: nv,
										ptno: request.getParameter('ptno')
									};
									gproxy.extraParams = {
										year: nv,
										ptno: request.getParameter('ptno')
									};
									
									cstore.load();
									gstore.load();
								}
							}
						}
					],
                    items: [
                        {
                            xtype: 'panel',
							width: '100%',
							border: false,
							items: [
								{
									xtype: 'chart',
									id: 'chart4',
									border: false,
									draggable: false,
									animate: true,
									shadow: true,
									width: 580,
									margin: '10px 10px 10px 10px',
									height: 350,
									store: 'storeType4',
									axes: [
										{
				                            type: 'Category',
				                            fields: ['WMOD'],
				                            position: 'bottom'
										},
										{
											type: 'Numeric',
				                            fields: ['TEMP'],
				                            position: 'left',
											grid: true,
				                            label: {
				                            	renderer: function(value) {
					                    			return setComma(value.toFixed(2));
				                            	}
				                            }
										}
									],
									series: [
				                        {
				                            type: 'line',
				                            xField: 'WMOD',
				                            yField: ['TEMP'],
											title: '수온',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('WMOD');
				                            		var value = storeItem.get('TEMP');
				                            		
													value = value.toFixed(2);
					                    			value = setComma(value);
													
													this.setTitle(name + "월 수온: " + value);
				                            	}
				                            },
				                            highlight: {
				                                 size: 7
				                             },
				 							markerConfig: {
				 				                type: 'circle',
				 				                size: 4,
				 				                radius: 4,
				 				                'stroke-width': 0
				 				            }
				                        }
									],
									listeners: {
										render: {
											fn: function(me) {
												var store = me.getStore();
												var proxy = store.getProxy();
												
												var request = new Request();
												
												proxy.extraParams = {
													ptno: request.getParameter('ptno')
													, year: request.getParameter('year')
												};
												
												store.load();
											}
										}
									}
								}
								, {
									xtype: 'grid',
									id: 'grid4',
									store: 'storeType4',
									border: 0,
									width: 500,
									height: 150,
									tbar: [
										{
											text: '엑셀',
											iconCls: 'excel', 
											handler: function() {
												var data = Ext.getCmp("grid4").getStore().data.items;
												
												var html = "<div><table border='1'><thead><tr>";
												
												html += "<th>월</th>";
												html += "<th>수온(℃)</th>";
												
												html += "</tr>";
												html += "</thead>";
												html += "<tbody>";
												
												
												for(var i in data) {
													html += "<tr>";
													html += "<td>" + data[i].data['WMOD'] + "</td>";
													html += "<td>" + data[i].data['TEMP'] + "</td>";
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
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'WMOD', header: '월', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'TEMP', header: '수온(℃)', flex: 1, align: 'right', renderer: function(val, p, record) {
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
													ptno: request.getParameter('ptno')
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
                }
            ]
        });

        me.callParent(arguments);
    }
});