function conversor() {
	let zoom;
	let screenHeight;
	let cLon;
	let cLat;
  function degreesToRadians(x) {
    return 2 * Math.PI * x / 360;
  }
  function radiansToDegrees(x) {
    return 360 * x / (2 * Math.PI);
  }
	function solveLonToX(ln) {
		ln = degreesToRadians(ln);
		let w = screenHeight / 2;
		let a = (w / Math.PI) * Math.pow(2, zoom);
		let b = (ln + Math.PI);
		let x = a * b;
		return x;
	}
	function solvelLatToY(lt) {
		lt = degreesToRadians(lt);
		let w = screenHeight / 2;
		let a = (w / Math.PI) * Math.pow(2, zoom);
		let c = Math.tan(Math.PI / 4 + lt / 2);
		let b = Math.PI - Math.log(c);
		let y = a * b;
		return y;
	}
  return {
    setupConversor:function(h,z,cln,clt) {//sets reference tile size (height), zoom level and center point for conversions
      zoom = z;
    	screenHeight = h;
    	cLon = cln;
    	cLat = clt;},
    lonToX: function(lon,altCl) {//converts longitude to x, an alternative center can be provided in lon units
			let cl = altCl != undefined ? altCl : cLon;
      return solveLonToX(lon) - solveLonToX(cl);
    },
    latToY: function(lat,altCl) {//converts latitude to y, an alternative center can be provided in lat units
			let cl = altCl != undefined ? altCl : cLat;
      return solvelLatToY(lat) - solvelLatToY(cl);
    },
    xToLon: function(x,altCl) {//converts x to longitude, an alternative center can be provided in lon units
			function solve(x1) {
				let w = screenHeight / 2;
	      let a = (w / Math.PI) * Math.pow(2, zoom);
	      let b = x1/a;
	      let lon = b-Math.PI;
	      lon = radiansToDegrees(lon);
	      return lon;
			}
			let cl = altCl != undefined ? altCl : cLon;
      return solve(x+solveLonToX(cl));
    },
    yToLat: function(y,altCl) {//converts y to latitude, an alternative center can be provided in lat units
			function solve(y1) {
	      let w = screenHeight / 2;
	      let a = (w / Math.PI) * Math.pow(2, zoom);
	      let b = (y1/a);
	      let c = Math.exp(Math.PI-b);
	      let lat = (Math.atan(c) - (Math.PI / 4))*2;
	      lat = radiansToDegrees(lat);
	      return lat;
			}
			let cl = altCl != undefined ? altCl : cLat;
			return solve(y+solvelLatToY(cl));
    }
  }
}

module.exports = conversor();
