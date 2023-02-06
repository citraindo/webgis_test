var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_areal_tanam_div5_arc_1 = new ol.format.GeoJSON();
var features_areal_tanam_div5_arc_1 = format_areal_tanam_div5_arc_1.readFeatures(json_areal_tanam_div5_arc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areal_tanam_div5_arc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areal_tanam_div5_arc_1.addFeatures(features_areal_tanam_div5_arc_1);
var lyr_areal_tanam_div5_arc_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_areal_tanam_div5_arc_1, 
                style: style_areal_tanam_div5_arc_1,
                interactive: true,
    title: 'areal_tanam_div5_arc<br />\
    <img src="styles/legend/areal_tanam_div5_arc_1_0.png" /> JALAN<br />\
    <img src="styles/legend/areal_tanam_div5_arc_1_1.png" /> LC_BELUM_TANAM<br />\
    <img src="styles/legend/areal_tanam_div5_arc_1_2.png" /> PLANTED<br />\
    <img src="styles/legend/areal_tanam_div5_arc_1_3.png" /> PLANTED_NA<br />'
        });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_areal_tanam_div5_arc_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_areal_tanam_div5_arc_1];
lyr_areal_tanam_div5_arc_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'BLOK': 'BLOK', 'TT': 'TT', 'DIVISI': 'DIVISI', 'ID': 'ID', 'LANDCOVER': 'LANDCOVER', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'HECTARES': 'HECTARES', 'POINTCOUNT': 'POINTCOUNT', });
lyr_areal_tanam_div5_arc_1.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'BLOK': 'TextEdit', 'TT': 'TextEdit', 'DIVISI': 'TextEdit', 'ID': 'TextEdit', 'LANDCOVER': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'HECTARES': 'TextEdit', 'POINTCOUNT': 'TextEdit', });
lyr_areal_tanam_div5_arc_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'BLOK': 'inline label', 'TT': 'inline label', 'DIVISI': 'no label', 'ID': 'no label', 'LANDCOVER': 'inline label', 'AREA': 'no label', 'PERIMETER': 'no label', 'HECTARES': 'inline label', 'POINTCOUNT': 'inline label', });
lyr_areal_tanam_div5_arc_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});