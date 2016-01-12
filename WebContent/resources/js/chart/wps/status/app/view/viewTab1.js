Ext.define('chart.view.viewTab1', {
    extend: 'Ext.panel.Panel',

	id: 'viewTab1',
	xtype: 'viewTab1',
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
								$("#chart1").print();
							}	
						},
						{
							text: '저장',
							iconCls: 'save', 
							handler: function() {
//								Ext.getCmp('chart1').save({type: 'image/png'});
								var chart = Ext.getCmp('chart1');
								saveCharToImage(chart);
							}	
						},
						{
							xtype: 'combobox',
							store: 'storeYear',
							queryMode: 'local',
							displayField: 'ITEM',
							valueField: 'VAL',
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
									var chart = Ext.getCmp('chart1');
									var grid = Ext.getCmp('grid1');
									
									var cstore = chart.getStore();
									var cproxy = cstore.getProxy();
									
									var gstore = grid.getStore();
									var gproxy = gstore.getProxy();
									
									var request = new Request();
									
									cproxy.extraParams = {
										year: nv,
										mw: request.getParameter('mw')
									};
									gproxy.extraParams = {
										year: nv,
										mw: request.getParameter('mw')
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
									id: 'chart1',
									draggable: false,
									animate: true,
									shadow: true,
									width: 600,
									height: 300,
									store: 'storeType11',
				                    legend: {
						                position: 'bottom'
						            },
									axes: [
										{
				                            type: 'Category',
				                            fields: ['YEAR'],
				                            position: 'bottom'
										},
										{
											type: 'Numeric',
				                            fields: ['TREATED', 'RAWED'],
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
				                            type: 'column',
				                            xField: 'YEAR',
				                            yField: ['TREATED', 'RAWED'],
											title: ['하수처리', '하수미처리'],
                            				fill: false,
				                            tips: {
				                            	trackMouse: true,
				                            	width: 300,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('YEAR') + "년 ";
				                            		var value = "";
				                            		
				                            		if(item.yField == 'TREATED') {
				                            			name += " 하수처리: ";
				                            			value = storeItem.get('TREATED');
				                            		} else if(item.yField == 'RAWED') {
				                            			name += " 하수미처리: ";
				                            			value = storeItem.get('RAWED');
				                            		} 
				                            		
					                    			value = setComma(value);
													
													this.setTitle(name + value);
				                            	}
				                            }
				                        }
				                    ],
									listeners: {
										render: {
											fn: function(me) {
												// 년도 변경시에 수행되는 로직이 있으므로 이것은 불필요 한듯... 2014.05.08
//												var store = me.getStore();
//												var proxy = store.getProxy();
//												
//												var request = new Request();
//												
//												proxy.extraParams = {
//													year: request.getParameter('year'),
//													mw: request.getParameter('mw')
//												};
//												
//												store.load();
											}
										}
									}
								}
							]
                        },
                        {
                            xtype: 'panel',
							width: 600,
							border: false,
							height: 220,
							tbar: [
								{
									text: '엑셀',
									iconCls: 'excel', 
									handler: function() {
										var data = Ext.getCmp("grid1").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>년도</th>";
										html += "<th>중권역명</th>";
										html += "<th>시도</th>";
										html += "<th>시군구</th>";
										html += "<th>시가/비시가</th>";
										html += "<th>처리/미처리</th>";
										html += "<th>물사용량(톤)</th>";
										
										html += "</tr>";
										html += "</thead>";
										html += "<tbody>";
										
										
										for(var i in data) {
											html += "<tr>";
											html += "<td>" + data[i].data['YEAR'] + "</td>";
											html += "<td>" + data[i].data['AM_NM'] + "</td>";
											html += "<td>" + data[i].data['DO_NM'] + "</td>";
											html += "<td>" + data[i].data['CTY_NM'] + "</td>";
											html += "<td>" + data[i].data['GUBUN2'] + "</td>";
											html += "<td>" + data[i].data['GUBUN3'] + "</td>";
											html += "<td>" + data[i].data['USEWATER'] + "</td>";
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
									store: 'storeType12',
									border: false,
									width: 598,
									height: 193,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'YEAR', header: '년도', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'AM_NM', header: '중권역명', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'DO_NM', header: '시도', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'CTY_NM', header: '시군구', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'GUBUN2', header: '시가/비시가', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'GUBUN3', header: '처리/미처리', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'USEWATER', header: '물사용량(톤)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}}
									],
									listeners: {
										render: {
											fn: function(me) {
												// 년도 변경시에 수행되는 로직이 있으므로 이것은 불필요 한듯... 2014.05.08
//												var store = me.getStore();
//												var proxy = store.getProxy();
//												
//												var request = new Request();
//												
//												proxy.extraParams = {
//													year: request.getParameter('year'),
//													mw: request.getParameter('mw')
//												};
//												
//												store.load();
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