dojo.require("dijit.layout.BorderContainer");
dojo.require("dijit.layout.ContentPane");

dojo.require("esri.map");

dojo.require("esri.layers.DynamicMapServiceLayer");
dojo.require("esri.layers.FeatureLayer");
dojo.require("esri.layers.LayerMapSource");
dojo.require("esri.layers.TableDataSource");
dojo.require("esri.layers.JoinDataSource");
dojo.require("esri.layers.LayerDataSource");
dojo.require("esri.layers.QueryDataSource");
dojo.require("esri.layers.DynamicLayerInfo");
dojo.require("esri.layers.LayerDrawingOptions");
//dojo.require("esri.layers.LabelLayer");

dojo.require("esri.dijit.OverviewMap");
dojo.require("esri.dijit.Print");
dojo.require("esri.dijit.Scalebar");
dojo.require("esri.dijit.Measurement");

dojo.require("esri.toolbars.navigation");
	
dojo.require("esri.renderer");

dojo.require("esri.symbols.SimpleFillSymbol");
dojo.require("esri.symbols.SimpleLineSymbol");
dojo.require("esri.symbols.PictureMarkerSymbol");
dojo.require("esri.symbols.TextSymbol");
dojo.require("esri.symbols.Font");
dojo.require("esri.renderers.SimpleRenderer");

dojo.require("esri.request");

dojo.require("esri.tasks.find");
dojo.require("esri.tasks.query");
dojo.require("esri.tasks.QueryTask");


esri.config.defaults.io.proxyUrl = "/proxy.do";