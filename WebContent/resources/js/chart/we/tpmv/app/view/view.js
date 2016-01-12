Ext.define('chart.view.view', {
    extend: 'Ext.panel.Panel',

    width: 500,
    height: 500,
	id: 'view1',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
				{
					xtype: 'panel',
					border: false,
					layout: 'vbox',
					tbar: [{
						text: '�μ�',
						iconCls: 'print',
						handler: function(){
							$("#chart1").print();
						}
					}, {
						text: '����',
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
							width: 480,
							height: 300,
							margin: '10px 10px 10px 10px',
							store: 'storeType1',
							legend: {
								position: 'bottom'
							},
							axes: [{
								type: 'Category',
								fields: ['YYYY'],
								position: 'bottom'
							}, {
								type: 'Numeric',
								fields: ['TYPE1', 'TYPE2', 'TYPE3', 'TYPE4', 'TYPE5'],
								position: 'left',
				                minimum: 0,
				                maximum: 4,
				                majorTickSteps: 1,
				                minorTickSteps: 1,
								grid: true,
								label: {
									renderer: function(val){
				                		if(val == 4) return '����';
				                		else if(val == 3) return '��ȣ';
				                		else if(val == 2) return '����';
										else if(val == 1) return '�ҷ�';
										else if(val == 0) return '';
									}
								}
							}],
							series: [
	                        	{
		                            type: 'column',
		                            xField: 'YYYY',
		                            yField: ['TYPE1', 'TYPE2', 'TYPE3', 'TYPE4', 'TYPE5'],
									title: ['��������', '������������ô�ߵ���', '���', '�Ļ�', '���Ĺ׼���ȯ��'],
		                            fill: false,
		                            smooth: 3,
		                            tips: {
		                            	trackMouse: true,
		                            	width: 300,
		                            	height: 22,
		                            	titleAlign: 'center',
		                            	renderer: function(storeItem, item) {
		                            		var year = storeItem.get('YYYY') + ' �� ';
		                            		
		                            		var type = '';
		                            		
		                            		if(item.yField == 'TYPE1') type = '��������: ';
		                            		else if(item.yField == 'TYPE2') type = '������������ô�ߵ���: ';
		                            		else if(item.yField == 'TYPE3') type = '���: ';
		                            		else if(item.yField == 'TYPE4') type = '�Ļ�: ';
		                            		else if(item.yField == 'TYPE5') type = '���Ĺ׼���ȯ��: ';
		                            		
		                            		var data = item.value[1];
											
		                            		if(data == '4') data = '����';
		                            		else if(data == '3') data = '��ȣ';
		                            		else if(data == '2') data = '����';
		                            		else if(data == '1') data = '�ҷ�';
		                            			
		                            		this.setTitle(year + type + data);
		                            	}
		                            },
		                            highlight: {
		                                size: 7
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
											tpmvcode: request.getParameter('tpmvcode')
										};
										
										store.load();
									}
								}
							}
						}]
					}, {
						xtype: 'panel',
						width: 500,
						border: false,
						height: 150,
						tbar: [{
							text: '����',
							iconCls: 'excel', 
							handler: function() {
								var data = Ext.getCmp("grid1").getStore().data.items;
								
								var html = "<div><table border='1'><thead><tr>";
								
								html += "<th>�⵵</th>";
								html += "<th>��������</th>";
								html += "<th>������������ô�ߵ���</th>";
								html += "<th>���</th>";
								html += "<th>�Ļ�</th>";
								html += "<th>���Ĺ׼���ȯ��</th>";
								
								html += "</tr>";
								html += "</thead>";
								html += "<tbody>";
								
								
								for(var i in data) {
									html += "<tr>";
									
									var type1 = data[i].data['TYPE1'];
									var type2 = data[i].data['TYPE2'];
									var type3 = data[i].data['TYPE3'];
									var type4 = data[i].data['TYPE4'];
									var type5 = data[i].data['TYPE5'];
									
									function getTypeString(val) {
				                		if(val == 4) return '����';
				                		else if(val == 3) return '��ȣ';
				                		else if(val == 2) return '����';
										else if(val == 1) return '�ҷ�';
										else if(val == 0) return '';
										else return '';
									}
									
									type1 = getTypeString(type1);
									type2 = getTypeString(type2);
									type3 = getTypeString(type3);
									type4 = getTypeString(type4);
									type5 = getTypeString(type5);
									
									html += "<td>" + data[i].data['YYYY'] + "</td>";
									html += "<td>" + type1 + "</td>";
									html += "<td>" + type2 + "</td>";
									html += "<td>" + type3 + "</td>";
									html += "<td>" + type4 + "</td>";
									html += "<td>" + type5 + "</td>";
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
							height: 125,
							columns: [{
								xtype: 'gridcolumn',
								dataIndex: 'YYYY',
								header: '�⵵',
								flex: 1
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE1',
								header: '��������',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '����';
			                		else if(val == 3) return '��ȣ';
			                		else if(val == 2) return '����';
									else if(val == 1) return '�ҷ�';
									else if(val == 0) return '';
									else return '-';
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE2',
								header: '������������ô�ߵ���',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '����';
			                		else if(val == 3) return '��ȣ';
			                		else if(val == 2) return '����';
									else if(val == 1) return '�ҷ�';
									else if(val == 0) return '';
									else return '-';
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE3',
								header: '���',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '����';
			                		else if(val == 3) return '��ȣ';
			                		else if(val == 2) return '����';
									else if(val == 1) return '�ҷ�';
									else if(val == 0) return '';
									else return '-';
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE4',
								header: '�Ļ�',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '����';
			                		else if(val == 3) return '��ȣ';
			                		else if(val == 2) return '����';
									else if(val == 1) return '�ҷ�';
									else if(val == 0) return '';
									else return '-';
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE5',
								header: '���Ĺ׼���ȯ��',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '����';
			                		else if(val == 3) return '��ȣ';
			                		else if(val == 2) return '����';
									else if(val == 1) return '�ҷ�';
									else if(val == 0) return '';
									else return '-';
								}
							}],
							listeners: {
								render: {
									fn: function(me){
										var store = me.getStore();
										var proxy = store.getProxy();
										
										var request = new Request();
										
										proxy.extraParams = {
											tpmvcode: request.getParameter('tpmvcode')
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