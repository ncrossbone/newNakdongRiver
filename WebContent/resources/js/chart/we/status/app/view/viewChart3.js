Ext.define('chart.view.viewChart3', {
    extend: 'Ext.panel.Panel',

	id: 'viewChart3',
	xtype: 'viewChart3',
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
								$("#chart3").print();
							}	
						},
						{
							text: '저장',
							iconCls: 'save', 
							handler: function() {
								Ext.getCmp('chart3').save({type: 'image/png'});
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
									id: 'chart3',
									border: false,
									draggable: false,
									animate: true,
									shadow: true,
									width: 480,
									margin: '10px 10px 10px 10px',
									height: 350,
									store: 'storeType3',
									axes: [
										{
				                            type: 'Category',
				                            fields: ['WMYR'],
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
				                            xField: 'WMYR',
				                            yField: ['TEMP'],
											title: '수온',
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('WMYR');
				                            		var value = storeItem.get('TEMP');
				                            		
													value = value.toFixed(2);
					                    			value = setComma(value);
													
													this.setTitle(name + "년 수온: " + value);
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
												};
												
												store.load();
											}
										}
									}
								}
								, {
									xtype: 'grid',
									id: 'grid3',
									store: 'storeType3',
									border: 0,
									width: 500,
									height: 150,
									tbar: [
										{
											text: '엑셀',
											iconCls: 'excel', 
											handler: function() {
												var data = Ext.getCmp("grid3").getStore().data.items;
												
												var html = "<div><table border='1'><thead><tr>";
												
												html += "<th>년도</th>";
												html += "<th>수온(℃)</th>";
												
												html += "</tr>";
												html += "</thead>";
												html += "<tbody>";
												
												
												for(var i in data) {
													html += "<tr>";
													html += "<td>" + data[i].data['WMYR'] + "</td>";
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
										{xtype: 'gridcolumn', dataIndex: 'WMYR', header: '년도', flex: 1},
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