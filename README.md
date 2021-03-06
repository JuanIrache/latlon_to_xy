# latlon_to_xy

Converts Web Mercator coordinates to screen pixels and back

- Used for creating the SRT log viewer in https://djitelemetryoverlay.com/

## Installation

Using npm:

```shell
$ npm install latlon_to_xy
```

## Usage

```js
//Load module
let conversions = require('latlon_to_xy');

//set values
conversions.setupConversor(
  tile_height,
  zoom,
  center_longitude,
  center_latitude
);

//once the values are set, only one value is required for all calculations, and an alternative center value is optional
let x = conversions.lonToX(lon, altC); //converts longitude to x, an alternative center can be provided in lon units
let y = conversions.latToY(lat, altC); //converts latitude to y, an alternative center can be provided in lat units
let lon = conversions.xToLon(x, altC); //converts x to longitude, an alternative center can be provided in lon units
let lat = conversions.yToLat(y, altC); //converts y to latitude, an alternative center can be provided in lat units
```

## TODO

- Provide method for calculating necessary zoom for a location to be inside the screen
