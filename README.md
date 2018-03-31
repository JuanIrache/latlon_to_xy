# latlon_to_xy
Converts Web Mercator coordinates to screen pixels and back

- Used for creating this SRT log viewer: http://tailorandwayne.com/dji-srt-viewer/

## Installation

Using npm:
```shell
$ npm install --save latlon_to_xy
```

## Usage
```js
//Load module
let conversions = require('latlon_to_xy');

//set values
conversions.setupConversor(tile_height,zoom,center_longitude,center_latitude);

//once the values are set, only one value is required for all calculations, and an alternative center value is optional
conversions.lonToX(lon,altC);//converts longitude to x, an alternative center can be provided in lon units
conversions.latToY(lat,altC);//converts latitude to y, an alternative center can be provided in lat units
conversions.xToLon(x,altC);//converts x to longitude, an alternative center can be provided in lon units
conversions.yToLat(y,altC);//converts y to latitude, an alternative center can be provided in lat units
```

## TODO
- Provide method for calculating necessary zoom for a location to be inside the screen
