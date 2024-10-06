var vg_1 = "map.vg.json";
vegaEmbed("#map_chart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
var vg_2 = "bar.vg.json";
vegaEmbed("#area_chart", vg_2).then(function(result) {
}).catch(console.error);