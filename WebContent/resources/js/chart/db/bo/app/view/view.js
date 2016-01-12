Ext.define('chart.view.view', {
    extend: 'Ext.panel.Panel',

    width: 500,
    height: 600,
	id: 'view1',
//	title: '용수구분 누적 및 비율',

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
								$("#chart1").print();
						}
					}, {
						text: '저장',
						iconCls: 'save',
						handler: function(){
								Ext.getCmp('chart1').save({type: 'image/png'});
						}
					}],
					items: [{
						xtype: 'panel',
						width: 500,
						border: false,
						overflowX: 'auto',
						items: [{
							xtype: 'chart',
							id: 'chart1',
							draggable: false,
							animate: true,
							shadow: true,
							width: 470,
							height: 300,
							margin: '10px 10px 10px 10px',
							store: 'storeType1',
							legend: {
								position: 'bottom'
							},
							axes: [{
								type: 'Category',
								fields: ['MONTH'],
								position: 'bottom'
							}, {
								type: 'Numeric',
								fields: ['SWL', 'OWL', 'INF', 'OTF'],
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
		                            yField: ['SWL'],
									title: '상류수위',
		                            tips: {
		                            	trackMouse: true,
		                            	width: 250,
		                            	height: 25,
		                            	titleAlign: 'center',
		                            	renderer: function(storeItem, item) {
		                            		var name = storeItem.get('MONTH');
		                            		var value = storeItem.get('SWL');
		                            		
			                    			value = setComma(value);
											
											this.setTitle(name + "년 상류수위: " + value);
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
		                            xField: 'MONTH',
		                            yField: ['OWL'],
									title: '하류수위',
		                            tips: {
		                            	trackMouse: true,
		                            	width: 250,
		                            	height: 25,
		                            	titleAlign: 'center',
		                            	renderer: function(storeItem, item) {
		                            		var name = storeItem.get('MONTH');
		                            		var value = storeItem.get('OWL');
		                            		
			                    			value = setComma(value);
											
											this.setTitle(name + "년 하류수위: " + value);
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
		                            xField: 'MONTH',
		                            yField: ['INF'],
									title: '유입량',
		                            tips: {
		                            	trackMouse: true,
		                            	width: 250,
		                            	height: 25,
		                            	titleAlign: 'center',
		                            	renderer: function(storeItem, item) {
		                            		var name = storeItem.get('MONTH');
		                            		var value = storeItem.get('INF');
		                            		
			                    			value = setComma(value);
											
											this.setTitle(name + "년 유입량: " + value);
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
		                            xField: 'MONTH',
		                            yField: ['OTF'],
									title: '방류량',
		                            tips: {
		                            	trackMouse: true,
		                            	width: 250,
		                            	height: 25,
		                            	titleAlign: 'center',
		                            	renderer: function(storeItem, item) {
		                            		var name = storeItem.get('MONTH');
		                            		var value = storeItem.get('OTF');
		                            		
			                    			value = setComma(value);
											
											this.setTitle(name + "년 방류량: " + value);
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
											bocode: request.getParameter('bocode')
											, year: request.getParameter('year')
										};
										
										store.load();
									}
								}
							}
						}]
					}, {
						xtype: 'panel',
						width: 600,
						border: false,
						height: 150,
						tbar: [{
							text: '엑셀',
							iconCls: 'excel', 
							handler: function() {
								var data = Ext.getCmp("grid1").getStore().data.items;
								
								var html = "<div><table border='1'><thead><tr>";
								
								html += "<th>월</th>";
								html += "<th>상류수위</th>";
								html += "<th>하류수위</th>";
								html += "<th>유입량</th>";
								html += "<th>방류량</th>";
								
								html += "</tr>";
								html += "</thead>";
								html += "<tbody>";
								
								
								for(var i in data) {
									html += "<tr>";
									html += "<td>" + data[i].data['MONTH'] + "</td>";
									html += "<td>" + data[i].data['SWL'] + "</td>";
									html += "<td>" + data[i].data['OWL'] + "</td>";
									html += "<td>" + data[i].data['INF'] + "</td>";
									html += "<td>" + data[i].data['OTF'] + "</td>";
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
						}],
						items: [{
							xtype: 'grid',
							id: 'grid1',
							store: 'storeType1',
							border: false,
							width: 500,
							height: 220,
							columns: [{
								xtype: 'gridcolumn',
								dataIndex: 'MONTH',
								header: '월',
								flex: 1
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'SWL',
								header: '상류수위',
								flex: 1,
								align: 'right',
								renderer: function(val, p, record){
									return setComma(val.toFixed(2));
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'OWL',
								header: '하류수위',
								flex: 1,
								align: 'right',
								renderer: function(val, p, record){
									return setComma(val.toFixed(2));
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'INF',
								header: '유입량',
								flex: 1,
								align: 'right',
								renderer: function(val, p, record){
									return setComma(val.toFixed(2));
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'OTF',
								header: '방류량',
								flex: 1,
								align: 'right',
								renderer: function(val, p, record){
									return setComma(val.toFixed(2));
								}
							}],
							listeners: {
								render: {
									fn: function(me){
										var store = me.getStore();
										var proxy = store.getProxy();
										
										var request = new Request();
										
										proxy.extraParams = {
											bocode: request.getParameter('bocode')
											, year: request.getParameter('year')
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