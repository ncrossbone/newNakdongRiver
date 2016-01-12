Ext.define('chart.view.view1Tab2', {
    extend: 'Ext.panel.Panel',

	id: 'view1Tab2',
	xtype: 'view1Tab2',
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
							text: '¿Œº‚',
							iconCls: 'print',
							handler: function() {
								$("#chart12").print();
							}	
						},
						{
							text: '¿˙¿Â',
							iconCls: 'save', 
							handler: function() {
								Ext.getCmp('chart12').save({type: 'image/png'});
							}	
						}
					],
                    items: [
                        {
                            xtype: 'panel',
							width: '100%',
							border: false,
                            overflowX: 'auto',
							items: [
								{
									xtype: 'chart',
									id: 'chart12',
									draggable: false,
									animate: true,
									shadow: true,
									width: 2000,
									height: 300,
									store: 'storeType12',
				                    legend: {
						                position: 'bottom'
						            },
									axes: [
										{
				                            type: 'Category',
				                            fields: ['DONG_NM'],
				                            position: 'bottom',
											label: {
									            rotate: {
									                degrees: 270
									            }
									        }
										},
										{
											type: 'Numeric',
				                            fields: ['ICR_EXT'],
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
				                            xField: 'DONG_NM',
				                            yField: ['ICR_EXT'],
											title: ['∏È¿˚'],
                            				fill: false,
				                            tips: {
				                            	trackMouse: true,
				                            	width: 300,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('DONG_NM');
				                            		var value = storeItem.get('ICR_EXT');
				                            		
					                    			value = setComma(value);
													
													this.setTitle(name + " ∏È¿˚: " + value);
				                            	}
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
													mw: request.getParameter('mw'),
													sw: request.getParameter('sw')
												};
												
												store.load();
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
									text: 'ø¢ºø',
									iconCls: 'excel', 
									handler: function() {
										var data = Ext.getCmp("grid12").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>¿æ∏Èµø</th>";
										html += "<th>∏È¿˚</th>";
										
										html += "</tr>";
										html += "</thead>";
										html += "<tbody>";
										
										
										for(var i in data) {
											html += "<tr>";
											html += "<td>" + data[i].data['DONG_NM'] + "</td>";
											html += "<td>" + data[i].data['ICR_EXT'] + "</td>";
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
									id: 'grid12',
									store: 'storeType12',
									border: false,
									width: 598,
									height: 193,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'DONG_NM', header: '¿æ∏Èµø', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'ICR_EXT', header: '∏È¿˚(km<sup>2</sup>)', flex: 1, align: 'right', renderer: function(val, p, record) {
											return setComma(val.toFixed(2));
										}}
									],
									listeners: {
										render: {
											fn: function(me) {
												var store = me.getStore();
												var proxy = store.getProxy();
												
												var request = new Request();
												
												proxy.extraParams = {
													year: request.getParameter('year'),
													mw: request.getParameter('mw'),
													sw: request.getParameter('sw')
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