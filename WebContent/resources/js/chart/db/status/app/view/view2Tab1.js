Ext.define('chart.view.view2Tab1', {
    extend: 'Ext.panel.Panel',

	id: 'view2Tab1',
	xtype: 'view2Tab1',
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
								$("#chart21").print();
							}	
						},
						{
							text: '저장',
							iconCls: 'save', 
							handler: function() {
								Ext.getCmp('chart21').save({type: 'image/png'});
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
									id: 'chart21',
									draggable: false,
									animate: true,
									shadow: true,
									width: 1500,
									height: 300,
									store: 'storeType21',
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
											title: ['면적'],
                            				fill: false,
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('DONG_NM');
				                            		var value = storeItem.get('ICR_EXT');
				                            		
					                    			value = setComma(value);
													
													this.setTitle(name + " 면적: " + value);
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
									text: '엑셀',
									iconCls: 'excel', 
									handler: function() {
										var data = Ext.getCmp("grid21").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>시군구</th>";
										html += "<th>면적</th>";
										
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
									id: 'grid21',
									store: 'storeType21',
									border: false,
									width: 598,
									height: 193,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'DONG_NM', header: '시군구', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'ICR_EXT', header: '면적(km<sup>2</sup>)', flex: 1, align: 'right', renderer: function(val, p, record) {
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