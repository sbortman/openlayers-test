var Foo = (function(){
    function init(params) {

      console.log(params);

      var layers = params.baseMaps.map(function(i) {
        return new ol.layer.Tile({
          source: new ol.source.TileWMS({
            url:  i.url,
            params: i.params,
            options: i.options
          })
        })
      } );

      console.log(layers);
/*
      var layers = [
        new ol.layer.Tile({
          source: new ol.source.TileWMS({
            url: 'https://ahocevar.com/geoserver/wms',
            params: {
              'LAYERS': 'ne:NE1_HR_LC_SR_W_DR',
              'TILED': true
            }
          })
        })
      ];
*/
      var map = new ol.Map({
        controls: ol.control.defaults().extend([
          new ol.control.ScaleLine({
            units: 'degrees'
          })
        ]),
        layers: layers,
        target: 'map',
        view: new ol.View({
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 2
        })
      });
    }
    return {
        init: init
    };
})();