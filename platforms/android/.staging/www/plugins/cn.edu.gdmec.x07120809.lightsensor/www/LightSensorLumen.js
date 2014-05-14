cordova.define("cn.edu.gdmec.x07120809.lightsensor.LightSensorLumen", function(require, exports, module) {var LightSensorLumen = function(lumen, timestamp) {
  this.value = lumen;
  this.timestamp = timestamp || new Date().getTime();
};

module.exports = LightSensorLumen;
});
