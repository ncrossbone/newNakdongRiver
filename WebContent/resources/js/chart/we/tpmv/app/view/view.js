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
				                		if(val == 4) return '최적';
				                		else if(val == 3) return '양호';
				                		else if(val == 2) return '보통';
										else if(val == 1) return '불량';
										else if(val == 0) return '';
									}
								}
							}],
							series: [
	                        	{
		                            type: 'column',
		                            xField: 'YYYY',
		                            yField: ['TYPE1', 'TYPE2', 'TYPE3', 'TYPE4', 'TYPE5'],
									title: ['부착조류', '저서성대형무척추동물', '어류', '식생', '서식및수변환경'],
		                            fill: false,
		                            smooth: 3,
		                            tips: {
		                            	trackMouse: true,
		                            	width: 300,
		                            	height: 22,
		                            	titleAlign: 'center',
		                            	renderer: function(storeItem, item) {
		                            		var year = storeItem.get('YYYY') + ' 년 ';
		                            		
		                            		var type = '';
		                            		
		                            		if(item.yField == 'TYPE1') type = '부착조류: ';
		                            		else if(item.yField == 'TYPE2') type = '저서성대형무척추동물: ';
		                            		else if(item.yField == 'TYPE3') type = '어류: ';
		                            		else if(item.yField == 'TYPE4') type = '식생: ';
		                            		else if(item.yField == 'TYPE5') type = '서식및수변환경: ';
		                            		
		                            		var data = item.value[1];
											
		                            		if(data == '4') data = '최적';
		                            		else if(data == '3') data = '양호';
		                            		else if(data == '2') data = '보통';
		                            		else if(data == '1') data = '불량';
		                            			
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
							text: '엑셀',
							iconCls: 'excel', 
							handler: function() {
								var data = Ext.getCmp("grid1").getStore().data.items;
								
								var html = "<div><table border='1'><thead><tr>";
								
								html += "<th>년도</th>";
								html += "<th>부착조류</th>";
								html += "<th>저서성대형무척추동물</th>";
								html += "<th>어류</th>";
								html += "<th>식생</th>";
								html += "<th>서식및수변환경</th>";
								
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
				                		if(val == 4) return '최적';
				                		else if(val == 3) return '양호';
				                		else if(val == 2) return '보통';
										else if(val == 1) return '불량';
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
								header: '년도',
								flex: 1
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE1',
								header: '부착조류',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '최적';
			                		else if(val == 3) return '양호';
			                		else if(val == 2) return '보통';
									else if(val == 1) return '불량';
									else if(val == 0) return '';
									else return '-';
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE2',
								header: '저서성대형무척추동물',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '최적';
			                		else if(val == 3) return '양호';
			                		else if(val == 2) return '보통';
									else if(val == 1) return '불량';
									else if(val == 0) return '';
									else return '-';
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE3',
								header: '어류',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '최적';
			                		else if(val == 3) return '양호';
			                		else if(val == 2) return '보통';
									else if(val == 1) return '불량';
									else if(val == 0) return '';
									else return '-';
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE4',
								header: '식생',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '최적';
			                		else if(val == 3) return '양호';
			                		else if(val == 2) return '보통';
									else if(val == 1) return '불량';
									else if(val == 0) return '';
									else return '-';
								}
							}, {
								xtype: 'gridcolumn',
								dataIndex: 'TYPE5',
								header: '서식및수변환경',
								flex: 2,
								align: 'right',
								renderer: function(val, p, record){
			                		if(val == 4) return '최적';
			                		else if(val == 3) return '양호';
			                		else if(val == 2) return '보통';
									else if(val == 1) return '불량';
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