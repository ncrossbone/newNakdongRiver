Ext.define('chart.view.view1Tab1', {
    extend: 'Ext.panel.Panel',

	id: 'view1Tab1',
	xtype: 'view1Tab1',
    layout: 'fit',

    initComponent: function() {
        var me = this;
        
        Ext.applyIf(me, {
        	requires : ['chart.store.storeType11'],
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
								$("#chart11").print();
							}	
						},
						{
							text: '����',
							iconCls: 'save', 
							handler: function() {
								var chart = Ext.getCmp('chart11');
								saveCharToImage(chart);
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
									id: 'chart11',
									draggable: false,
									animate: true,
									shadow: true,
									width: 600,
									height: 300,
//									store: 'storeType11',
									store: Ext.create('chart.store.storeType11'),
									axes: [
										{
				                            type: 'Category',
				                            fields: ['SBAS_NM'],
				                            position: 'bottom',
											label: {
									            rotate: {
									                degrees: 270
									            }
									        }
										},
										{
											type: 'Numeric',
				                            fields: ['WAREA_EXT'],
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
				                            xField: 'SBAS_NM',
				                            yField: ['WAREA_EXT'],
											title: ['����'],
                            				fill: false,
				                            tips: {
				                            	trackMouse: true,
				                            	width: 250,
				                            	height: 25,
				                            	titleAlign: 'center',
				                            	renderer: function(storeItem, item) {
				                            		var name = storeItem.get('SBAS_NM');
				                            		var value = storeItem.get('WAREA_EXT');
				                            		
					                    			value = setComma(value);
													
													this.setTitle(name + " ����: " + value);
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
							id: 'gridDiv',
							tbar: [
								{
									text: '����',
									iconCls: 'excel', 
									handler: function() {
										var data = Ext.getCmp("grid11").getStore().data.items;
										
										var html = "<div><table border='1'><thead><tr>";
										
										html += "<th>�߱ǿ���</th>";
										html += "<th>�ұǿ���</th>";
										html += "<th>����</th>";
										
										html += "</tr>";
										html += "</thead>";
										html += "<tbody>";
										
										
										for(var i in data) {
											html += "<tr>";
											html += "<td>" + data[i].data['MBAS_NM'] + "</td>";
											html += "<td>" + data[i].data['SBAS_NM'] + "</td>";
											html += "<td>" + data[i].data['WAREA_EXT'] + "</td>";
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
									id: 'grid11',
//									store: 'storeType11',
									store: Ext.create('chart.store.storeType11'),
									border: false,
									width: 598,
									height: 193,
									columns: [
										{xtype: 'gridcolumn', dataIndex: 'MBAS_NM', header: '�߱ǿ���', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'SBAS_NM', header: '�ұǿ���', flex: 1},
										{xtype: 'gridcolumn', dataIndex: 'WAREA_EXT', header: '����(km<sup>2</sup>)', flex: 1, align: 'right', renderer: function(val, p, record) {
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