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
									text: '�μ�',
									iconCls: 'print',
									handler: function() {
										$("#chart1").print();
									}	
								},
								{
									text: '����',
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
										title: '���',
			                            tips: {
			                            	trackMouse: true,
			                            	width: 250,
			                            	height: 25,
			                            	titleAlign: 'center',
			                            	renderer: function(storeItem, item) {
			                            		var name = storeItem.get('YEAR');
			                            		var value = storeItem.get('RF_AVG');
			                            		
				                    			value = setComma(value);
												
												this.setTitle(name + "�� ���: " + value);
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
										title: '�ְ�',
			                            tips: {
			                            	trackMouse: true,
			                            	width: 250,
			                            	height: 25,
			                            	titleAlign: 'center',
			                            	renderer: function(storeItem, item) {
			                            		var name = storeItem.get('YEAR');
			                            		var value = storeItem.get('RF_MAX');
			                            		
				                    			value = setComma(value);
												
												this.setTitle(name + "�� �ְ�: " + value);
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
										title: '����',
			                            tips: {
			                            	trackMouse: true,
			                            	width: 250,
			                            	height: 25,
			                            	titleAlign: 'center',
			                            	renderer: function(storeItem, item) {
			                            		var name = storeItem.get('YEAR');
			                            		var value = storeItem.get('RF_MIN');
			                            		
				                    			value = setComma(value);
												
												this.setTitle(name + "�� ����: " + value);
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
									text: '�μ�',
									iconCls: 'print',
									handler: function() {
										$("#chart2").print();
									}	
								},
								{
									text: '����',
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
										title: '������',
			                            tips: {
			                            	trackMouse: true,
			                            	width: 250,
			                            	height: 25,
			                            	titleAlign: 'center',
			                            	renderer: function(storeItem, item) {
			                            		var name = storeItem.get('MONTH');
			                            		var value = storeItem.get('RF');
			                            		
				                    			value = setComma(value);
												
												this.setTitle(name + "�� ������: " + value);
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
								text: '����',
								iconCls: 'excel', 
								handler: function() {
									var data = Ext.getCmp("grid1").getStore().data.items;
									
									var html = "<div><table border='1'><thead><tr>";
									
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
									html += "<th>���</th>";
									html += "<th>�ִ�</th>";
									html += "<th>�ּ�</th>";
									
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
								text:'���� : mm'
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
								header: '����',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '1M',
								header: '1��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '2M',
								header: '2��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '3M',
								header: '3��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '4M',
								header: '4��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '5M',
								header: '5��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '6M',
								header: '6��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '7M',
								header: '7��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '8M',
								header: '8��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '9M',
								header: '9��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '10M',
								header: '10��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '11M',
								header: '11��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: '12M',
								header: '12��',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'RF_AVG',
								header: '���',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'RF_MAX',
								header: '�ִ�',
								flex: 1,
								align: 'right'
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'RF_MIN',
								header: '�ּ�',
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