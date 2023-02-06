var size = 0;
var placement = 'point';
function categories_areal_tanam_div5_arc_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'JALAN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'LC_BELUM_TANAM':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,26,28,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PLANTED':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,175,74,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PLANTED_NA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,176,104,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_areal_tanam_div5_arc_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("LANDCOVER");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("BLOK") !== null) {
        labelText = String(feature.get("BLOK"));
    }
    
var style = categories_areal_tanam_div5_arc_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
