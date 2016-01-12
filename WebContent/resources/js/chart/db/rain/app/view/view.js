Ext.define('chart.view.view', {
    extend: 'Ext.panel.Panel',

    width: 700,
    height: 700,
	id: 'view1',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
					xtype: 'panel',
					border: false,
					layout: 'vbox',
					items: [{
						xtype: 'panel',
						width: 700,
						border: 0,
						overflowX: 'auto',
						layout: 'hbox',
						items: [{
							xtype: 'panel',
							width: 350,
							border: 0,
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
										Ext.getCmp('chart1').save({type: 'image/png'});
									}	
								}
							],
							items: [{
								xtype: 'chart',
								id: 'chart1',
								draggable: false,
								animate: true,
								shadow: true,
								width: 330,
								height: 400,
								margin: '10px 10px 10px 10px',
								store: 'storeType1',
								legend: {
									position: 'bottom'
								},
								axes: [{
									type: 'Category',
									fields: ['YEAR'],
									position: 'bottom'
								}, {
									type: 'Numeric',
									fields: ['RF_AVG', 'RF_MAX', 'RF_MIN'],
									position: 'left',
									grid: true,
									label: {
										renderer: function(value){
											return setComma(value.toFixed(2));
										}
									}
								}],
								series: [
		                        	{
			                            type: 'line',
			                            xField: 'YEAR',
			                            yField: ['RF_AVG'],
										title: '평균',
			                            tips: {
			                            	trackMouse: true,
			                            	width: 250,
			                            	height: 25,
			                            	titleAlign: 'center',
			                            	renderer: function(storeItem, item) {
			                            		var name = storeItem.get('YEAR');
			                            		var value = storeItem.get('RF_AVG');
			                            		
				                    			value = setComma(value);
												
												this.setTitle(name + "년 평균: " + value);
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
		                        	}, {
			                            type: 'line',
			                            xField: 'YEAR',
			                            yField: ['RF_MAX'],
										title: '최고',
			                            tips: {
			                            	trackMouse: true,
			                            	width: 250,
			                            	height: 25,
			                            	titleAlign: 'center',
			                            	renderer: function(storeItem, item) {
			                            		var name = storeItem.get('YEAR');
			                            		var value = storeItem.get('RF_MAX');
			                            		
				                    			value = setComma(value);
												
												this.setTitle(name + "년 최고: " + value);
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
		                        	}, {
			                            type: 'line',
			                            xField: 'YEAR',
			                            yField: ['RF_MIN'],
										title: '최저',
			                            tips: {
			                            	trackMouse: true,
			                            	width: 250,
			                            	height: 25,
			                            	titleAlign: 'center',
			                            	renderer: function(storeItem, item) {
			                            		var name = storeItem.get('YEAR');
			                            		var value = storeItem.get('RF_MIN');
			                            		
				                    			value = setComma(value);
												
												this.setTitle(name + "년 최저: " + value);
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
										fn: function(me){
											var store = me.getStore();
											var proxy = store.getProxy();
											
											var request = new Request();
											
											proxy.extraParams = {
												raincode: request.getParameter('raincode')
											};
											
											store.load();
										}
									}
								}
							}]
						}, {
							xtype: 'panel',
							width: 350,
							border: 0,
							tbar: [
								{
									text: '인쇄',
									iconCls: 'print',
									handler: function() {
										$("#chart2").print();
									}	
								},
								{
									text: '저장',
									iconCls: 'save', 
									handler: function() {
										Ext.getCmp('chart2').save({type: 'image/png'});
									}	
								}
							],
							items: [{
								xtype: 'chart',
								id: 'chart2',
								draggable: false,
								animate: true,
								shadow: true,
								width: 330,
								height: 400,
								margin: '10px 10px 10px 10px',
								store: 'storeType2',
								legend: {
									position: 'bottom'
								},
								axes: [{
									type: 'Category',
									fields: ['MONTH'],
									position: 'bottom'
								}, {
									type: 'Numeric',
									fields: ['RF'],
									position: 'left',
									grid: true,
									label: {
										renderer: function(value){
											return setComma(value.toFixed(2));
										}
									}
								}],
								series: [
		                        	{
			                            type: 'line',
			                            xField: 'MONTH',
			                            yField: ['RF'],
										title: '측정값',
			                            tips: {
			                            	trackMouse: true,
			                            	width: 250,
			                            	height: 25,
			                            	titleAlign: 'center',
			                            	renderer: function(storeItem, item) {
			                            		var name = storeItem.get('MONTH');
			                            		var value = storeItem.get('RF');
			                            		
				                    			value = setComma(value);
												
												this.setTitle(name + "년 측정값: " + value);
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
										fn: function(me){
											var store = me.getStore();
											var proxy = store.getProxy();
											
											var request = new Request();
											
											proxy.extraParams = {
												raincode: request.getParameter('raincode')
											};
											
											store.load();
										}
									}
								}
							}]
						}]
					}, {
						xtype: 'panel',
						width: 700,
						border: false,
						height: 250,
						tbar: [
							{
								text: '엑셀',
								iconCls: 'excel', 
								handler: function() {
									var data = Ext.getCmp("grid1").getStore().data.items;
									
									var html = "<div><table border='1'><thead><tr>";
									
									html += "<th>연도</th>";
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
									html += "<th>평균</th>";
									html += "<th>최대</th>";
									html += "<th>최소</th>";
									
									html += "</tr>";
									html += "</thead>";
									html += "<tbody>";
									
									
									for(var i in data) {
										html += "<tr>";
										html += "<td>" + data[i].data['YEAR'] + "</td>";
										html += "<td>" + data[i].data['1M'] + "</td>";
										html += "<td>" + data[i].data['2M'] + "</td>";
										html += "<td>" + data[i].data['3M'] + "</td>";
										html += "<td>" + data[i].data['4M'] + "</td>";
										html += "<td>" + data[i].data['5M'] + "</td>";
										html += "<td>" + data[i].data['6M'] + "</td>";
										html += "<td>" + data[i].data['7M'] + "</td>";
										html += "<td>" + data[i].data['8M'] + "</td>";
										html += "<td>" + data[i].data['9M'] + "</td>";
										html += "<td>" + data[i].data['10M'] + "</td>";
										html += "<td>" + data[i].data['11M'] + "</td>";
										html += "<td>" + data[i].data['12M'] + "</td>";
										html += "<td>" + data[i].data['RF_AVG'] + "</td>";
										html += "<td>" + data[i].data['RF_MAX'] + "</td>";
										html += "<td>" + data[i].data['RF_MIN'] + "</td>";
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
								width:550
							},
							{
								text:'단위 : mm'
							}],
						items: [{
							xtype: 'grid',
							id: 'grid1',
							store: 'storeType3',
							border: false,
							width: 700,
							height: 225,
							columns: [{
								xtype: 'gridcolumn',
								dataIndex: 'YEAR',
								header: '연도',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '1M',
								header: '1월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '2M',
								header: '2월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '3M',
								header: '3월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '4M',
								header: '4월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '5M',
								header: '5월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '6M',
								header: '6월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '7M',
								header: '7월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '8M',
								header: '8월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '9M',
								header: '9월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '10M',
								header: '10월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '11M',
								header: '11월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '12M',
								header: '12월',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'RF_AVG',
								header: '평균',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'RF_MAX',
								header: '최대',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'RF_MIN',
								header: '최소',
								flex: 1,
								align: 'right'
							}],
							listeners: {
								render: {
									fn: function(me){
										var store = me.getStore();
										var proxy = store.getProxy();
										
										var request = new Request();
										
										proxy.extraParams = {
											raincode: request.getParameter('raincode')
										};
										
										store.load();
									}
								}
							}
						}]
					}]
				}
            ]
        });

        me.callParent(arguments);
    }
});