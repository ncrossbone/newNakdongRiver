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
												
												if(item == 'BEEF') name = "한우(소)";
												else if(item == 'COW') name = '유우(젖소)';
												else if(item == 'PIG') name = '돼지';
												else if(item == 'CHICKEN') name = '닭';
												else if(item == 'HORSE') name = '마필(말)';
												else if(item == 'GOAT') name = '산양(염소포함)';
												else if(item == 'SHEEP') name = '면양(육양포함)';
												else if(item == 'DEER') name = '사슴';
												else if(item == 'DOG') name = '개';
												else if(item == 'DUCK') name = '오리';
												else if(item == 'OSTRICH') name = '타조';
												else if(item == 'ETC') name = '가금기타';
												
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
							                    font: '16px 돋움체',
												renderer: function(value) {
													var name = "";

													if(value== 'BEEF') name = "한우(소)";
													else if(value == 'COW') name = '유우(젖소)';
													else if(value == 'PIG') name = '돼지';
													else if(value == 'CHICKEN') name = '닭';
													else if(value == 'HORSE') name = '마필(말)';
													else if(value == 'GOAT') name = '산양(염소포함)';
													else if(value == 'SHEEP') name = '면양(육양포함)';
													else if(value == 'DEER') name = '사슴';
													else if(value == 'DOG') name = '개';
													else if(value == 'DUCK') name = '오리';
													else if(value == 'OSTRICH') name = '타조';
													else if(value == 'ETC') name = '가금기타';
													
					                    			return name;
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
										var data = Ext.getCmp("grid2").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>년도</th>";
										html += "<th>중권역명</th>";
										html += "<th>시도</th>";
										html += "<th>시군구</th>";
										html += "<th>한우(소)(마리)</th>";
										html += "<th>유우(젖소)(마리)</th>";
										html += "<th>돼지(마리)</th>";
										html += "<th>닭(마리)</th>";
										html += "<th>마필(말)(마리)</th>";
										html += "<th>산양(염소포함)(마리)</th>";
										html += "<th>면양(육양포함)(마리)</th>";
										html += "<th>사슴(마리)</th>";
										html += "<th>개(마리)</th>";
										html += "<th>오리(마리)</th>";
										html += "<th>타조(마리)</th>";
										html += "<th>가금기타(마리)</th>";
										
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
										{xtype: 'gridcolumn', dataIndex: 'YEAR', header: '년도', width: 100},
										{xtype: 'gridcolumn', dataIndex: 'AM_NM', header: '중권역명', width: 100},
										{xtype: 'gridcolumn', dataIndex: 'DO_NM', header: '시도', width: 100},
										{xtype: 'gridcolumn', dataIndex: 'CTY_NM', header: '시군구', width: 100},
										{xtype: 'gridcolumn', dataIndex: 'BEEF', header: '한우(소)(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'COW', header: '유우(젖소)(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'PIG', header: '돼지(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'CHICKEN', header: '닭(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'HORSE', header: '마필(말)(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'GOAT', header: '산양(염소포함)(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'SHEEP', header: '면양(육양포함)(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'DEER', header: '사슴(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'DOG', header: '개(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'DUCK', header: '오리(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'OSTRICH', header: '타조(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}},
										{xtype: 'gridcolumn', dataIndex: 'ETC', header: '가금기타(마리)', width: 100, align: 'right', renderer: function(val, p, record) {
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