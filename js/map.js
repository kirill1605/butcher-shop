function init() {
  let map = new ymaps.Map('map', {
    center: [50.60938774218226,36.58048801906652],
    zoom: [16],
  });

  let placemark = new ymaps.Placemark([50.60938774218226,36.58048801906652], {
    iconCaption: 'Halal мясо',
    balloonContent: 'Наш магазин',
  }, {
    preset: 'islands#darkgreenDotIconWithCaption',
  })

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  // map.controls.remove('zoomControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable(['scrollZoom']);

  map.geoObjects.add(placemark);
}

ymaps.ready(init);