import { Style } from 'geostyler-style';

const rasterStyle: Style = {
  'name': 'raster_resampling_bilinear',
  'rules': [{
    'name': '',
    'symbolizers': [{
      'kind': 'Raster',
      'opacity': 1.0,
      'resampling': 'linear'
    }]
  }]
};

export default rasterStyle;
