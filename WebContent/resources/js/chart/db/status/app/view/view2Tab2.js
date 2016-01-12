Ext.define('chart.view.view2Tab2', {
    extend: 'Ext.panel.Panel',

	id: 'view2Tab2',
	xtype: 'view2Tab2',
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
								$("#chart22").print();
							}	
						},
						{
							text: '¿˙¿Â',
							iconCls: 'save', 
							handler: function() {
								Ext.getCmp('chart22').save({type: 'image/png'});
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
									id: 'chart22',
									draggable: false,
									animate: true,
									shadow: true,
									width: 600,
									height: 300,
									store: 'storeType22',
				                    series: [
				                        {
				                            type: 'pie',
				                            field: 'EXT_RAT',
				                        	showInLegend: true,
				                            tips: {
							                  trackMouse: true,
							                  width: 250,
							                  height: 25,
							                  titleAlign: 'center',
							                  renderer: function(storeItem, item) {
											  	var chart = Ext.getCmp('chart22');
												var store = chart.getStore();
												var data = store.data.items;
												
												var all = 0;
												
												for(var i in data) {
													all += parseFloat(data[i].data['EXT_RAT']);
												}
																								
											  	var item = storeItem.get('DONG_NM');
												var val = storeItem.get('EXT_RAT');
												
												val = parseFloat(val);
												
							                    this.setTitle(item + " ∏È¿˚ ∫Ò¿≤: " + (val / all * 100).toFixed(2) + "%");
							                  }
							                },
				                            highlight: {
							                  segment: {
							                    margin: 20
							                  }
							                }
//											,
//				                            label: {
//							                    field: 'DONG_NM',
//							                    display: 'rotate',
//							                    contrast: true,
//							                    font: '16px µ∏øÚ√º'
//							                }
				                        }
									],
									listeners: {
										render: {
											fn: function(me) {
												var store = me.getStore();
												var proxy = store.getProxy();
												
												var request = new Request();
												
												proxy.extraParams = {
													sgg: request.getParameter('sgg')
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
										var data = Ext.getCmp("grid22").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>¿æ∏Èµø</th>";
										html += "<th>∏È¿˚ ∫Ò¿≤</th>";
										
										html += "</tr>";
										html += "</thead>";
										html += "<tbody>";
										
										
										for(var i in data) {
											html += "<tr>";
											html += "<td>" + data[i].data['DONG_NM'] + "</td>";
											html += "<td>" + data[i].data['EXT_RAT'] + "</td>";
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
									id: 'grid22',
									store: 'storeType22',
									border: false,
									width: 598,
									height: 193,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'DONG_NM', header: '¿æ∏Èµø', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'EXT_RAT', header: '∏È¿˚ ∫Ò¿≤(%)', flex: 1, align: 'right', renderer: function(val, p, record) {
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
													sgg: request.getParameter('sgg')
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