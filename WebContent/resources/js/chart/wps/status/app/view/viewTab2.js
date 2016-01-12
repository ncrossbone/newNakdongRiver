Ext.define('chart.view.viewTab2', {
    extend: 'Ext.panel.Panel',

	id: 'viewTab2',
	xtype: 'viewTab2',
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
//								Ext.getCmp('chart2').save({type: 'image/png'});
								var chart = Ext.getCmp('chart2');
								saveCharToImage(chart);
							}	
						},
						{
							xtype: 'combobox',
							store: 'storeYear',
							queryMode: 'local',
							displayField: 'ITEM',
							valueField: 'VAL',
							fieldLabel: '�⵵',
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
									var chart = Ext.getCmp('chart2');
									var grid = Ext.getCmp('grid2');
									
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
									id: 'chart2',
									draggable: false,
									animate: true,
									shadow: true,
									width: 600,
									height: 300,
									store: 'storeType21',
				                    series: [
				                        {
				                            type: 'pie',
				                            field: 'VAL',
				                        	showInLegend: true,
				                            tips: {
							                  trackMouse: true,
							                  width: 150,
							                  height: 25,
							                  titleAlign: 'center',
							                  renderer: function(storeItem, item) {
											  	var item = storeItem.get('ITEM');
												var val = storeItem.get('VAL');
												var name = "";
												
												if(item == 'BEEF') name = "�ѿ�(��)";
												else if(item == 'COW') name = '����(����)';
												else if(item == 'PIG') name = '����';
												else if(item == 'CHICKEN') name = '��';
												else if(item == 'HORSE') name = '����(��)';
												else if(item == 'GOAT') name = '���(��������)';
												else if(item == 'SHEEP') name = '���(��������)';
												else if(item == 'DEER') name = '�罿';
												else if(item == 'DOG') name = '��';
												else if(item == 'DUCK') name = '����';
												else if(item == 'OSTRICH') name = 'Ÿ��';
												else if(item == 'ETC') name = '���ݱ�Ÿ';
												
							                    this.setTitle(name + ": " + val + "%");
							                  }
							                },
				                            highlight: {
							                  segment: {
							                    margin: 20
							                  }
							                },
				                            label: {
							                    field: 'ITEM',
							                    display: 'rotate',
							                    contrast: true,
							                    font: '16px ����ü',
												renderer: function(value) {
													var name = "";

													if(value== 'BEEF') name = "�ѿ�(��)";
													else if(value == 'COW') name = '����(����)';
													else if(value == 'PIG') name = '����';
													else if(value == 'CHICKEN') name = '��';
													else if(value == 'HORSE') name = '����(��)';
													else if(value == 'GOAT') name = '���(��������)';
													else if(value == 'SHEEP') name = '���(��������)';
													else if(value == 'DEER') name = '�罿';
													else if(value == 'DOG') name = '��';
													else if(value == 'DUCK') name = '����';
													else if(value == 'OSTRICH') name = 'Ÿ��';
													else if(value == 'ETC') name = '���ݱ�Ÿ';
													
					                    			return name;
				                            	}
							                }
				                        }
									],
									listeners: {
										render: {
											fn: function(me) {
												// �⵵ ����ÿ� ����Ǵ� ������ �����Ƿ� �̰��� ���ʿ� �ѵ�... 2014.05.08
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
									text: '����',
									iconCls: 'excel', 
									handler: function() {
										var data = Ext.getCmp("grid2").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>�⵵</th>";
										html += "<th>�߱ǿ���</th>";
										html += "<th>�õ�</th>";
										html += "<th>�ñ���</th>";
										html += "<th>�ѿ�(��)(����)</th>";
										html += "<th>����(����)(����)</th>";
										html += "<th>����(����)</th>";
										html += "<th>��(����)</th>";
										html += "<th>����(��)(����)</th>";
										html += "<th>���(��������)(����)</th>";
										html += "<th>���(��������)(����)</th>";
										html += "<th>�罿(����)</th>";
										html += "<th>��(����)</th>";
										html += "<th>����(����)</th>";
										html += "<th>Ÿ��(����)</th>";
										html += "<th>���ݱ�Ÿ(����)</th>";
										
										html += "</tr>";
										html += "</thead>";
										html += "<tbody>";
										
										
										for(var i in data) {
											html += "<tr>";
											html += "<td>" + data[i].data['YEAR'] + "</td>";
											html += "<td>" + data[i].data['AM_NM'] + "</td>";
											html += "<td>" + data[i].data['DO_NM'] + "</td>";
											html += "<td>" + data[i].data['CTY_NM'] + "</td>";
											html += "<td>" + data[i].data['BEEF'] + "</td>";
											html += "<td>" + data[i].data['COW'] + "</td>";
											html += "<td>" + data[i].data['PIG'] + "</td>";
											html += "<td>" + data[i].data['CHICKEN'] + "</td>";
											html += "<td>" + data[i].data['HORSE'] + "</td>";
											html += "<td>" + data[i].data['GOAT'] + "</td>";
											html += "<td>" + data[i].data['SHEEP'] + "</td>";
											html += "<td>" + data[i].data['DEER'] + "</td>";
											html += "<td>" + data[i].data['DOG'] + "</td>";
											html += "<td>" + data[i].data['DUCK'] + "</td>";
											html += "<td>" + data[i].data['OSTRICH'] + "</td>";
											html += "<td>" + data[i].data['ETC'] + "</td>";
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
									id: 'grid2',
									store: 'storeType22',
									border: false,
									width: 598,
									height: 193,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'YEAR', header: '�⵵', width: 100},
										{xtype: 'gridcolumn', dataIndex: 'AM_NM', header: '�߱ǿ���', width: 100},
										{xtype: 'gridcolumn', dataIndex: 'DO_NM', header: '�õ�', width: 100},
										{xtype: 'gridcolumn', dataIndex: 'CTY_NM', header: '�ñ���', width: 100},
										{xtype: 'gridcolumn', dataIndex: 'BEEF', header: '�ѿ�(��)(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'COW', header: '����(����)(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'PIG', header: '����(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'CHICKEN', header: '��(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'HORSE', header: '����(��)(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'GOAT', header: '���(��������)(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'SHEEP', header: '���(��������)(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'DEER', header: '�罿(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'DOG', header: '��(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'DUCK', header: '����(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'OSTRICH', header: 'Ÿ��(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'ETC', header: '���ݱ�Ÿ(����)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}}
									],
									listeners: {
										render: {
											fn: function(me) {
												// �⵵ ����ÿ� ����Ǵ� ������ �����Ƿ� �̰��� ���ʿ� �ѵ�... 2014.05.08
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