var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_11617Polygon1_1617_polygon_1 = new ol.format.GeoJSON();
var features_11617Polygon1_1617_polygon_1 = format_11617Polygon1_1617_polygon_1.readFeatures(json_11617Polygon1_1617_polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_11617Polygon1_1617_polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_11617Polygon1_1617_polygon_1.addFeatures(features_11617Polygon1_1617_polygon_1);
var lyr_11617Polygon1_1617_polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_11617Polygon1_1617_polygon_1, 
                style: style_11617Polygon1_1617_polygon_1,
                popuplayertitle: '#1, #16-17 Polygon — 1_1617_polygon',
                interactive: true,
                title: '<img src="styles/legend/11617Polygon1_1617_polygon_1.png" /> #1, #16-17 Polygon — 1_1617_polygon'
            });
var format_5Polygon5_polygon_2 = new ol.format.GeoJSON();
var features_5Polygon5_polygon_2 = format_5Polygon5_polygon_2.readFeatures(json_5Polygon5_polygon_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5Polygon5_polygon_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5Polygon5_polygon_2.addFeatures(features_5Polygon5_polygon_2);
var lyr_5Polygon5_polygon_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5Polygon5_polygon_2, 
                style: style_5Polygon5_polygon_2,
                popuplayertitle: '#5 Polygon — 5_polygon',
                interactive: true,
                title: '<img src="styles/legend/5Polygon5_polygon_2.png" /> #5 Polygon — 5_polygon'
            });
var format_6Polygon6_polygon_3 = new ol.format.GeoJSON();
var features_6Polygon6_polygon_3 = format_6Polygon6_polygon_3.readFeatures(json_6Polygon6_polygon_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6Polygon6_polygon_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6Polygon6_polygon_3.addFeatures(features_6Polygon6_polygon_3);
var lyr_6Polygon6_polygon_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6Polygon6_polygon_3, 
                style: style_6Polygon6_polygon_3,
                popuplayertitle: '#6 Polygon — 6_polygon',
                interactive: true,
                title: '<img src="styles/legend/6Polygon6_polygon_3.png" /> #6 Polygon — 6_polygon'
            });
var format_7Polygon7_polygon_4 = new ol.format.GeoJSON();
var features_7Polygon7_polygon_4 = format_7Polygon7_polygon_4.readFeatures(json_7Polygon7_polygon_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7Polygon7_polygon_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7Polygon7_polygon_4.addFeatures(features_7Polygon7_polygon_4);
var lyr_7Polygon7_polygon_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7Polygon7_polygon_4, 
                style: style_7Polygon7_polygon_4,
                popuplayertitle: '#7 Polygon — 7_polygon',
                interactive: true,
                title: '<img src="styles/legend/7Polygon7_polygon_4.png" /> #7 Polygon — 7_polygon'
            });
var format_910Polygon910_polygon_5 = new ol.format.GeoJSON();
var features_910Polygon910_polygon_5 = format_910Polygon910_polygon_5.readFeatures(json_910Polygon910_polygon_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_910Polygon910_polygon_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_910Polygon910_polygon_5.addFeatures(features_910Polygon910_polygon_5);
var lyr_910Polygon910_polygon_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_910Polygon910_polygon_5, 
                style: style_910Polygon910_polygon_5,
                popuplayertitle: '#9-10 Polygon — 910_polygon',
                interactive: true,
                title: '<img src="styles/legend/910Polygon910_polygon_5.png" /> #9-10 Polygon — 910_polygon'
            });
var format_1115Polygon1114_polygon_6 = new ol.format.GeoJSON();
var features_1115Polygon1114_polygon_6 = format_1115Polygon1114_polygon_6.readFeatures(json_1115Polygon1114_polygon_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1115Polygon1114_polygon_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1115Polygon1114_polygon_6.addFeatures(features_1115Polygon1114_polygon_6);
var lyr_1115Polygon1114_polygon_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1115Polygon1114_polygon_6, 
                style: style_1115Polygon1114_polygon_6,
                popuplayertitle: '#11-15 Polygon — 1114_polygon',
                interactive: true,
                title: '<img src="styles/legend/1115Polygon1114_polygon_6.png" /> #11-15 Polygon — 1114_polygon'
            });
var format_18Polygon18_polygon_7 = new ol.format.GeoJSON();
var features_18Polygon18_polygon_7 = format_18Polygon18_polygon_7.readFeatures(json_18Polygon18_polygon_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18Polygon18_polygon_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18Polygon18_polygon_7.addFeatures(features_18Polygon18_polygon_7);
var lyr_18Polygon18_polygon_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18Polygon18_polygon_7, 
                style: style_18Polygon18_polygon_7,
                popuplayertitle: '#18 Polygon — 18_polygon',
                interactive: true,
                title: '<img src="styles/legend/18Polygon18_polygon_7.png" /> #18 Polygon — 18_polygon'
            });
var format_1920Polygon1920_polygon_8 = new ol.format.GeoJSON();
var features_1920Polygon1920_polygon_8 = format_1920Polygon1920_polygon_8.readFeatures(json_1920Polygon1920_polygon_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1920Polygon1920_polygon_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1920Polygon1920_polygon_8.addFeatures(features_1920Polygon1920_polygon_8);
var lyr_1920Polygon1920_polygon_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1920Polygon1920_polygon_8, 
                style: style_1920Polygon1920_polygon_8,
                popuplayertitle: '#19-20 Polygon — 1920_polygon',
                interactive: true,
                title: '<img src="styles/legend/1920Polygon1920_polygon_8.png" /> #19-20 Polygon — 1920_polygon'
            });
var format_2024Polygon2024_polygon_9 = new ol.format.GeoJSON();
var features_2024Polygon2024_polygon_9 = format_2024Polygon2024_polygon_9.readFeatures(json_2024Polygon2024_polygon_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024Polygon2024_polygon_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024Polygon2024_polygon_9.addFeatures(features_2024Polygon2024_polygon_9);
var lyr_2024Polygon2024_polygon_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024Polygon2024_polygon_9, 
                style: style_2024Polygon2024_polygon_9,
                popuplayertitle: '#20-24 Polygon — 2024_polygon',
                interactive: true,
                title: '<img src="styles/legend/2024Polygon2024_polygon_9.png" /> #20-24 Polygon — 2024_polygon'
            });
var format_2527Polygon2527_polygon_10 = new ol.format.GeoJSON();
var features_2527Polygon2527_polygon_10 = format_2527Polygon2527_polygon_10.readFeatures(json_2527Polygon2527_polygon_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2527Polygon2527_polygon_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2527Polygon2527_polygon_10.addFeatures(features_2527Polygon2527_polygon_10);
var lyr_2527Polygon2527_polygon_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2527Polygon2527_polygon_10, 
                style: style_2527Polygon2527_polygon_10,
                popuplayertitle: '#25-27 Polygon — 2527_polygon',
                interactive: true,
                title: '<img src="styles/legend/2527Polygon2527_polygon_10.png" /> #25-27 Polygon — 2527_polygon'
            });
var format_2830Polygon2830_polygon_11 = new ol.format.GeoJSON();
var features_2830Polygon2830_polygon_11 = format_2830Polygon2830_polygon_11.readFeatures(json_2830Polygon2830_polygon_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2830Polygon2830_polygon_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2830Polygon2830_polygon_11.addFeatures(features_2830Polygon2830_polygon_11);
var lyr_2830Polygon2830_polygon_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2830Polygon2830_polygon_11, 
                style: style_2830Polygon2830_polygon_11,
                popuplayertitle: '#28-30 Polygon — 2830_polygon',
                interactive: true,
                title: '<img src="styles/legend/2830Polygon2830_polygon_11.png" /> #28-30 Polygon — 2830_polygon'
            });
var format_3233Polygon3940_polygon_12 = new ol.format.GeoJSON();
var features_3233Polygon3940_polygon_12 = format_3233Polygon3940_polygon_12.readFeatures(json_3233Polygon3940_polygon_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3233Polygon3940_polygon_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3233Polygon3940_polygon_12.addFeatures(features_3233Polygon3940_polygon_12);
var lyr_3233Polygon3940_polygon_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3233Polygon3940_polygon_12, 
                style: style_3233Polygon3940_polygon_12,
                popuplayertitle: '#32-33 Polygon — 3940_polygon',
                interactive: true,
                title: '<img src="styles/legend/3233Polygon3940_polygon_12.png" /> #32-33 Polygon — 3940_polygon'
            });
var format_3940Polygon3233_polygon_13 = new ol.format.GeoJSON();
var features_3940Polygon3233_polygon_13 = format_3940Polygon3233_polygon_13.readFeatures(json_3940Polygon3233_polygon_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3940Polygon3233_polygon_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3940Polygon3233_polygon_13.addFeatures(features_3940Polygon3233_polygon_13);
var lyr_3940Polygon3233_polygon_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3940Polygon3233_polygon_13, 
                style: style_3940Polygon3233_polygon_13,
                popuplayertitle: '#39-40 Polygon — 3233_polygon',
                interactive: true,
                title: '<img src="styles/legend/3940Polygon3233_polygon_13.png" /> #39-40 Polygon — 3233_polygon'
            });
var format_22_14 = new ol.format.GeoJSON();
var features_22_14 = format_22_14.readFeatures(json_22_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22_14.addFeatures(features_22_14);
var lyr_22_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22_14, 
                style: style_22_14,
                popuplayertitle: '#2 — 2',
                interactive: true,
                title: '<img src="styles/legend/22_14.png" /> #2 — 2'
            });
var format_33_15 = new ol.format.GeoJSON();
var features_33_15 = format_33_15.readFeatures(json_33_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_33_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_33_15.addFeatures(features_33_15);
var lyr_33_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_33_15, 
                style: style_33_15,
                popuplayertitle: '#3 — 3',
                interactive: true,
                title: '<img src="styles/legend/33_15.png" /> #3 — 3'
            });
var format_44_16 = new ol.format.GeoJSON();
var features_44_16 = format_44_16.readFeatures(json_44_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_44_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_44_16.addFeatures(features_44_16);
var lyr_44_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_44_16, 
                style: style_44_16,
                popuplayertitle: '#4 — 4',
                interactive: true,
                title: '<img src="styles/legend/44_16.png" /> #4 — 4'
            });
var format_88_17 = new ol.format.GeoJSON();
var features_88_17 = format_88_17.readFeatures(json_88_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_88_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_88_17.addFeatures(features_88_17);
var lyr_88_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_88_17, 
                style: style_88_17,
                popuplayertitle: '#8 — 8',
                interactive: true,
                title: '<img src="styles/legend/88_17.png" /> #8 — 8'
            });
var format_31_18 = new ol.format.GeoJSON();
var features_31_18 = format_31_18.readFeatures(json_31_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_31_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_31_18.addFeatures(features_31_18);
var lyr_31_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_31_18, 
                style: style_31_18,
                popuplayertitle: '#31 ',
                interactive: true,
                title: '<img src="styles/legend/31_18.png" /> #31 '
            });
var format_3434_19 = new ol.format.GeoJSON();
var features_3434_19 = format_3434_19.readFeatures(json_3434_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3434_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3434_19.addFeatures(features_3434_19);
var lyr_3434_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3434_19, 
                style: style_3434_19,
                popuplayertitle: '#34 — 34',
                interactive: true,
                title: '<img src="styles/legend/3434_19.png" /> #34 — 34'
            });
var format_35_20 = new ol.format.GeoJSON();
var features_35_20 = format_35_20.readFeatures(json_35_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_35_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_35_20.addFeatures(features_35_20);
var lyr_35_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_35_20, 
                style: style_35_20,
                popuplayertitle: '#35',
                interactive: true,
                title: '<img src="styles/legend/35_20.png" /> #35'
            });
var format_3636_21 = new ol.format.GeoJSON();
var features_3636_21 = format_3636_21.readFeatures(json_3636_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3636_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3636_21.addFeatures(features_3636_21);
var lyr_3636_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3636_21, 
                style: style_3636_21,
                popuplayertitle: '#36 — 36',
                interactive: true,
                title: '<img src="styles/legend/3636_21.png" /> #36 — 36'
            });
var format_38_22 = new ol.format.GeoJSON();
var features_38_22 = format_38_22.readFeatures(json_38_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_38_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_38_22.addFeatures(features_38_22);
var lyr_38_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_38_22, 
                style: style_38_22,
                popuplayertitle: '#38 ',
                interactive: true,
                title: '<img src="styles/legend/38_22.png" /> #38 '
            });
var group_GeoshapePunkte = new ol.layer.Group({
                                layers: [lyr_22_14,lyr_33_15,lyr_44_16,lyr_88_17,lyr_31_18,lyr_3434_19,lyr_35_20,lyr_3636_21,lyr_38_22,],
                                fold: "open",
                                title: 'Geoshape Punkte'});
var group_Polygons = new ol.layer.Group({
                                layers: [lyr_11617Polygon1_1617_polygon_1,lyr_5Polygon5_polygon_2,lyr_6Polygon6_polygon_3,lyr_7Polygon7_polygon_4,lyr_910Polygon910_polygon_5,lyr_1115Polygon1114_polygon_6,lyr_18Polygon18_polygon_7,lyr_1920Polygon1920_polygon_8,lyr_2024Polygon2024_polygon_9,lyr_2527Polygon2527_polygon_10,lyr_2830Polygon2830_polygon_11,lyr_3233Polygon3940_polygon_12,lyr_3940Polygon3233_polygon_13,],
                                fold: "open",
                                title: 'Polygons'});
var group_CSVPunkte = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'CSV Punkte'});

lyr_OpenStreetMap_0.setVisible(true);lyr_11617Polygon1_1617_polygon_1.setVisible(true);lyr_5Polygon5_polygon_2.setVisible(true);lyr_6Polygon6_polygon_3.setVisible(true);lyr_7Polygon7_polygon_4.setVisible(true);lyr_910Polygon910_polygon_5.setVisible(true);lyr_1115Polygon1114_polygon_6.setVisible(true);lyr_18Polygon18_polygon_7.setVisible(true);lyr_1920Polygon1920_polygon_8.setVisible(true);lyr_2024Polygon2024_polygon_9.setVisible(true);lyr_2527Polygon2527_polygon_10.setVisible(true);lyr_2830Polygon2830_polygon_11.setVisible(true);lyr_3233Polygon3940_polygon_12.setVisible(true);lyr_3940Polygon3233_polygon_13.setVisible(true);lyr_22_14.setVisible(true);lyr_33_15.setVisible(true);lyr_44_16.setVisible(true);lyr_88_17.setVisible(true);lyr_31_18.setVisible(true);lyr_3434_19.setVisible(true);lyr_35_20.setVisible(true);lyr_3636_21.setVisible(true);lyr_38_22.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Polygons,group_GeoshapePunkte];
lyr_11617Polygon1_1617_polygon_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'sport': 'sport', 'source:geometry': 'source:geometry', 'name': 'name', 'leisure': 'leisure', 'wheelchair': 'wheelchair', 'roof:shape': 'roof:shape', 'roof:levels': 'roof:levels', 'building:roof': 'building:roof', 'building:levels': 'building:levels', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Floor': 'Vending_maschine:Floor', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_5Polygon5_polygon_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'source:geometry': 'source:geometry', 'source:addr': 'source:addr', 'roof:shape': 'roof:shape', 'roof:orientation': 'roof:orientation', 'building:levels': 'building:levels', 'building:colour': 'building:colour', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_6Polygon6_polygon_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wheelchair': 'wheelchair', 'website': 'website', 'surveillance': 'surveillance', 'supervised': 'supervised', 'start_date': 'start_date', 'ref': 'ref', 'parking': 'parking', 'park_ride': 'park_ride', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name': 'name', 'maxheight': 'maxheight', 'fuel:lpg': 'fuel:lpg', 'fee': 'fee', 'capacity:women': 'capacity:women', 'capacity:disabled': 'capacity:disabled', 'capacity': 'capacity', 'amenity': 'amenity', 'access': 'access', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_7Polygon7_polygon_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'roof:shape': 'roof:shape', 'roof:orientation': 'roof:orientation', 'roof:colour': 'roof:colour', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_910Polygon910_polygon_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'wheelchair:description': 'wheelchair:description', 'wheelchair': 'wheelchair', 'website': 'website', 'type': 'type', 'tourism': 'tourism', 'toilets:wheelchair': 'toilets:wheelchair', 'phone': 'phone', 'opening_hours': 'opening_hours', 'name': 'name', 'building:roof:colour': 'building:roof:colour', 'building:roof': 'building:roof', 'building:obm': 'building:obm', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_1115Polygon1114_polygon_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'wheelchair:description': 'wheelchair:description', 'wheelchair': 'wheelchair', 'website': 'website', 'type': 'type', 'tourism': 'tourism', 'toilets:wheelchair': 'toilets:wheelchair', 'phone': 'phone', 'opening_hours': 'opening_hours', 'name': 'name', 'building:roof:colour': 'building:roof:colour', 'building:roof': 'building:roof', 'building:obm': 'building:obm', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_18Polygon18_polygon_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'wheelchair': 'wheelchair', 'website': 'website', 'supervised': 'supervised', 'ref': 'ref', 'parking': 'parking', 'park_ride': 'park_ride', 'operator': 'operator', 'opening_hours': 'opening_hours', 'old_name': 'old_name', 'name': 'name', 'maxheight': 'maxheight', 'layer': 'layer', 'fee': 'fee', 'capacity:women': 'capacity:women', 'capacity:disabled': 'capacity:disabled', 'capacity': 'capacity', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'access': 'access', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_1920Polygon1920_polygon_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building:waterproof_bulk': 'building:waterproof_bulk', 'building:levels': 'building:levels', 'building:first_level_height': 'building:first_level_height', 'building:basement_opening': 'building:basement_opening', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_2024Polygon2024_polygon_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'historic': 'historic', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_2527Polygon2527_polygon_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'ref': 'ref', 'name': 'name', 'building:roof:colour': 'building:roof:colour', 'building:levels': 'building:levels', 'architect': 'architect', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_2830Polygon2830_polygon_11.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wikipedia': 'wikipedia', 'wikimedia_commons': 'wikimedia_commons', 'wikidata': 'wikidata', 'wheelchair': 'wheelchair', 'tourism': 'tourism', 'start_date': 'start_date', 'name:etymology:wikidata': 'name:etymology:wikidata', 'name': 'name', 'historic': 'historic', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_3233Polygon3940_polygon_12.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'wheelchair': 'wheelchair', 'old_name': 'old_name', 'name': 'name', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'roof:shape': 'roof:shape', 'roof:orientation': 'roof:orientation', 'roof:height': 'roof:height', 'roof:colour': 'roof:colour', 'historic': 'historic', 'height': 'height', 'building:waterproof_bulk': 'building:waterproof_bulk', 'building:use': 'building:use', 'building:first_level_height': 'building:first_level_height', 'building:colour': 'building:colour', 'building:basement_opening': 'building:basement_opening', 'building:apartments': 'building:apartments', 'building:roof:colour': 'building:roof:colour', 'building:roof': 'building:roof', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_3940Polygon3233_polygon_13.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'source:geometry': 'source:geometry', 'roof:colour': 'roof:colour', 'building:roof': 'building:roof', 'building:levels': 'building:levels', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_22_14.set('fieldAliases', {'fid': 'fid', 'Time (s)': 'Time (s)', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Height (m)': 'Height (m)', 'Velocity (m/s)': 'Velocity (m/s)', 'Direction (°)': 'Direction (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_33_15.set('fieldAliases', {'fid': 'fid', 'Time (s)': 'Time (s)', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Height (m)': 'Height (m)', 'Velocity (m/s)': 'Velocity (m/s)', 'Direction (°)': 'Direction (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_44_16.set('fieldAliases', {'fid': 'fid', 'Time (s)': 'Time (s)', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Height (m)': 'Height (m)', 'Velocity (m/s)': 'Velocity (m/s)', 'Direction (°)': 'Direction (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_88_17.set('fieldAliases', {'fid': 'fid', 'Time (s)': 'Time (s)', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Height (m)': 'Height (m)', 'Velocity (m/s)': 'Velocity (m/s)', 'Direction (°)': 'Direction (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_31_18.set('fieldAliases', {'fid': 'fid', 'Time (s)': 'Time (s)', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Height (m)': 'Height (m)', 'Velocity (m/s)': 'Velocity (m/s)', 'Direction (°)': 'Direction (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_3434_19.set('fieldAliases', {'fid': 'fid', 'Time (s)': 'Time (s)', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Height (m)': 'Height (m)', 'Velocity (m/s)': 'Velocity (m/s)', 'Direction (°)': 'Direction (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:number': 'Vending_maschine:number', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_35_20.set('fieldAliases', {'fid': 'fid', 'Time (s)': 'Time (s)', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Height (m)': 'Height (m)', 'Velocity (m/s)': 'Velocity (m/s)', 'Direction (°)': 'Direction (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_3636_21.set('fieldAliases', {'fid': 'fid', 'Time (s)': 'Time (s)', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Altitude (m)': 'Altitude (m)', 'Altitude WGS84 (m)': 'Altitude WGS84 (m)', 'Speed (m/s)': 'Speed (m/s)', 'Direction (°)': 'Direction (°)', 'Distance (km)': 'Distance (km)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (m)': 'Vertical Accuracy (m)', 'Satellites': 'Satellites', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_38_22.set('fieldAliases', {'fid': 'fid', 'Time (s)': 'Time (s)', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Height (m)': 'Height (m)', 'Velocity (m/s)': 'Velocity (m/s)', 'Direction (°)': 'Direction (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_11617Polygon1_1617_polygon_1.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'sport': '', 'source:geometry': '', 'name': '', 'leisure': '', 'wheelchair': '', 'roof:shape': '', 'roof:levels': '', 'building:roof': '', 'building:levels': '', 'Vending_maschine:type': '', 'Vending_maschine:Floor': '', 'Vending_maschine: location': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_5Polygon5_polygon_2.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'source:geometry': '', 'source:addr': '', 'roof:shape': '', 'roof:orientation': '', 'building:levels': '', 'building:colour': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_6Polygon6_polygon_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wheelchair': '', 'website': '', 'surveillance': '', 'supervised': '', 'start_date': '', 'ref': '', 'parking': '', 'park_ride': '', 'operator': '', 'opening_hours': '', 'name': '', 'maxheight': '', 'fuel:lpg': '', 'fee': '', 'capacity:women': '', 'capacity:disabled': '', 'capacity': '', 'amenity': '', 'access': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_7Polygon7_polygon_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'roof:shape': '', 'roof:orientation': '', 'roof:colour': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_910Polygon910_polygon_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wikipedia': '', 'wikidata': '', 'wheelchair:description': '', 'wheelchair': '', 'website': '', 'type': '', 'tourism': '', 'toilets:wheelchair': '', 'phone': '', 'opening_hours': '', 'name': '', 'building:roof:colour': '', 'building:roof': '', 'building:obm': '', 'amenity': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_1115Polygon1114_polygon_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wikipedia': '', 'wikidata': '', 'wheelchair:description': '', 'wheelchair': '', 'website': '', 'type': '', 'tourism': '', 'toilets:wheelchair': '', 'phone': '', 'opening_hours': '', 'name': '', 'building:roof:colour': '', 'building:roof': '', 'building:obm': '', 'amenity': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_18Polygon18_polygon_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'wheelchair': '', 'website': '', 'supervised': '', 'ref': '', 'parking': '', 'park_ride': '', 'operator': '', 'opening_hours': '', 'old_name': '', 'name': '', 'maxheight': '', 'layer': '', 'fee': '', 'capacity:women': '', 'capacity:disabled': '', 'capacity': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'access': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_1920Polygon1920_polygon_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'building:waterproof_bulk': '', 'building:levels': '', 'building:first_level_height': '', 'building:basement_opening': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_2024Polygon2024_polygon_9.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wikipedia': '', 'wikidata': '', 'historic': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_2527Polygon2527_polygon_10.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wikidata': '', 'wheelchair': '', 'ref': '', 'name': '', 'building:roof:colour': '', 'building:levels': '', 'architect': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_2830Polygon2830_polygon_11.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wikipedia': '', 'wikimedia_commons': '', 'wikidata': '', 'wheelchair': '', 'tourism': '', 'start_date': '', 'name:etymology:wikidata': '', 'name': '', 'historic': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_3233Polygon3940_polygon_12.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'wheelchair': '', 'old_name': '', 'name': '', 'wikipedia': '', 'wikidata': '', 'roof:shape': '', 'roof:orientation': '', 'roof:height': '', 'roof:colour': '', 'historic': '', 'height': '', 'building:waterproof_bulk': '', 'building:use': '', 'building:first_level_height': '', 'building:colour': '', 'building:basement_opening': '', 'building:apartments': '', 'building:roof:colour': '', 'building:roof': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_3940Polygon3233_polygon_13.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'source:geometry': '', 'roof:colour': '', 'building:roof': '', 'building:levels': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_22_14.set('fieldImages', {'fid': '', 'Time (s)': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Height (m)': '', 'Velocity (m/s)': '', 'Direction (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_33_15.set('fieldImages', {'fid': '', 'Time (s)': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Height (m)': '', 'Velocity (m/s)': '', 'Direction (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_44_16.set('fieldImages', {'fid': '', 'Time (s)': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Height (m)': '', 'Velocity (m/s)': '', 'Direction (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_88_17.set('fieldImages', {'fid': '', 'Time (s)': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Height (m)': '', 'Velocity (m/s)': '', 'Direction (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_31_18.set('fieldImages', {'fid': '', 'Time (s)': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Height (m)': '', 'Velocity (m/s)': '', 'Direction (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_3434_19.set('fieldImages', {'fid': '', 'Time (s)': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Height (m)': '', 'Velocity (m/s)': '', 'Direction (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:number': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_35_20.set('fieldImages', {'fid': '', 'Time (s)': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Height (m)': '', 'Velocity (m/s)': '', 'Direction (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_3636_21.set('fieldImages', {'fid': '', 'Time (s)': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Altitude (m)': '', 'Altitude WGS84 (m)': '', 'Speed (m/s)': '', 'Direction (°)': '', 'Distance (km)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (m)': '', 'Satellites': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_38_22.set('fieldImages', {'fid': 'TextEdit', 'Time (s)': 'TextEdit', 'Latitude (°)': 'TextEdit', 'Longitude (°)': 'TextEdit', 'Height (m)': 'TextEdit', 'Velocity (m/s)': 'TextEdit', 'Direction (°)': 'TextEdit', 'Horizontal Accuracy (m)': 'TextEdit', 'Vertical Accuracy (°)': 'TextEdit', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_11617Polygon1_1617_polygon_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:street': 'header label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'no label', 'addr:city': 'inline label - visible with data', 'sport': 'no label', 'source:geometry': 'no label', 'name': 'no label', 'leisure': 'no label', 'wheelchair': 'no label', 'roof:shape': 'no label', 'roof:levels': 'no label', 'building:roof': 'no label', 'building:levels': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Floor': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_5Polygon5_polygon_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'source:geometry': 'no label', 'source:addr': 'no label', 'roof:shape': 'no label', 'roof:orientation': 'no label', 'building:levels': 'no label', 'building:colour': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_6Polygon6_polygon_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wheelchair': 'no label', 'website': 'no label', 'surveillance': 'no label', 'supervised': 'no label', 'start_date': 'no label', 'ref': 'no label', 'parking': 'no label', 'park_ride': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'maxheight': 'no label', 'fuel:lpg': 'no label', 'fee': 'no label', 'capacity:women': 'no label', 'capacity:disabled': 'no label', 'capacity': 'no label', 'amenity': 'no label', 'access': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'no label', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_7Polygon7_polygon_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'roof:shape': 'no label', 'roof:orientation': 'no label', 'roof:colour': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'no label', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_910Polygon910_polygon_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'wheelchair:description': 'no label', 'wheelchair': 'no label', 'website': 'no label', 'type': 'no label', 'tourism': 'no label', 'toilets:wheelchair': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'building:roof:colour': 'no label', 'building:roof': 'no label', 'building:obm': 'no label', 'amenity': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'no label', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_1115Polygon1114_polygon_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'wheelchair:description': 'no label', 'wheelchair': 'no label', 'website': 'no label', 'type': 'no label', 'tourism': 'no label', 'toilets:wheelchair': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'building:roof:colour': 'no label', 'building:roof': 'no label', 'building:obm': 'no label', 'amenity': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'no label', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_18Polygon18_polygon_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'wheelchair': 'no label', 'website': 'no label', 'supervised': 'no label', 'ref': 'no label', 'parking': 'no label', 'park_ride': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'old_name': 'no label', 'name': 'no label', 'maxheight': 'no label', 'layer': 'no label', 'fee': 'no label', 'capacity:women': 'no label', 'capacity:disabled': 'no label', 'capacity': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'access': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_1920Polygon1920_polygon_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building:waterproof_bulk': 'no label', 'building:levels': 'no label', 'building:first_level_height': 'no label', 'building:basement_opening': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'no label', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_2024Polygon2024_polygon_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'historic': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_2527Polygon2527_polygon_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wikidata': 'no label', 'wheelchair': 'no label', 'ref': 'no label', 'name': 'no label', 'building:roof:colour': 'no label', 'building:levels': 'no label', 'architect': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_2830Polygon2830_polygon_11.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wikipedia': 'no label', 'wikimedia_commons': 'no label', 'wikidata': 'no label', 'wheelchair': 'no label', 'tourism': 'no label', 'start_date': 'no label', 'name:etymology:wikidata': 'no label', 'name': 'no label', 'historic': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_3233Polygon3940_polygon_12.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'wheelchair': 'no label', 'old_name': 'no label', 'name': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'roof:shape': 'no label', 'roof:orientation': 'no label', 'roof:height': 'no label', 'roof:colour': 'no label', 'historic': 'no label', 'height': 'no label', 'building:waterproof_bulk': 'no label', 'building:use': 'no label', 'building:first_level_height': 'no label', 'building:colour': 'no label', 'building:basement_opening': 'no label', 'building:apartments': 'no label', 'building:roof:colour': 'no label', 'building:roof': 'no label', 'building:levels': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_3940Polygon3233_polygon_13.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'source:geometry': 'no label', 'roof:colour': 'no label', 'building:roof': 'no label', 'building:levels': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'no label', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_22_14.set('fieldLabels', {'fid': 'no label', 'Time (s)': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Height (m)': 'no label', 'Velocity (m/s)': 'no label', 'Direction (°)': 'no label', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_33_15.set('fieldLabels', {'fid': 'no label', 'Time (s)': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Height (m)': 'no label', 'Velocity (m/s)': 'no label', 'Direction (°)': 'no label', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_44_16.set('fieldLabels', {'fid': 'no label', 'Time (s)': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Height (m)': 'no label', 'Velocity (m/s)': 'no label', 'Direction (°)': 'no label', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_88_17.set('fieldLabels', {'fid': 'no label', 'Time (s)': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Height (m)': 'no label', 'Velocity (m/s)': 'no label', 'Direction (°)': 'no label', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'no label', 'Vending_maschine:type': 'no label', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_31_18.set('fieldLabels', {'fid': 'no label', 'Time (s)': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Height (m)': 'no label', 'Velocity (m/s)': 'no label', 'Direction (°)': 'no label', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_3434_19.set('fieldLabels', {'fid': 'no label', 'Time (s)': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Height (m)': 'no label', 'Velocity (m/s)': 'no label', 'Direction (°)': 'no label', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_35_20.set('fieldLabels', {'fid': 'no label', 'Time (s)': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Height (m)': 'no label', 'Velocity (m/s)': 'no label', 'Direction (°)': 'no label', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_3636_21.set('fieldLabels', {'fid': 'no label', 'Time (s)': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Altitude (m)': 'no label', 'Altitude WGS84 (m)': 'no label', 'Speed (m/s)': 'no label', 'Direction (°)': 'no label', 'Distance (km)': 'no label', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (m)': 'no label', 'Satellites': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_38_22.set('fieldLabels', {'fid': 'no label', 'Time (s)': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Height (m)': 'no label', 'Velocity (m/s)': 'no label', 'Direction (°)': 'no label', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_38_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});