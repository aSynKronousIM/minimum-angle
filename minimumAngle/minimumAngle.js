var minimumAngle = function(time) {

  // split the argument and assign numbers value for hours and minutes
  var h = Number(time.split(":")[0]);
  var m = Number(time.split(":")[1]);

  // position of the hour hand including minutes (i.e. 2hrs 30mins = 150mins)
  var timeInMins = h * 60 + m;

  // calculate the angle of each hand from 0 deg position clockwise
  var hDegs = timeInMins * 0.25;          // 0.25 deg / min <-- (360 deg / 24 hours / 60 mins)
  var mDegs = m * 6;                      // 6 deg / min <-- (360 deg / 60 mins)

  // difference between two angles
  var diff = Math.abs(hDegs - mDegs);

  // return minimum angle
  return diff < 180 ? diff : 360 - diff;

};
