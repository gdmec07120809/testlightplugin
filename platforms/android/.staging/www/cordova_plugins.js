cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cn.edu.gdmec.x07120809.lightsensor/www/LightSensorError.js",
        "id": "cn.edu.gdmec.x07120809.lightsensor.LightSensorError",
        "clobbers": [
            "LightSenorError"
        ]
    },
    {
        "file": "plugins/cn.edu.gdmec.x07120809.lightsensor/www/LightSensorLumen.js",
        "id": "cn.edu.gdmec.x07120809.lightsensor.LightSensorLumen",
        "clobbers": [
            "LightSensorLumen"
        ]
    },
    {
        "file": "plugins/cn.edu.gdmec.x07120809.lightsensor/www/LightSensor.js",
        "id": "cn.edu.gdmec.x07120809.lightsensor.LightSensor",
        "clobbers": [
            "navigator.LightSensor"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cn.edu.gdmec.x07120809.lightsensor": "0.0.1"
}
// BOTTOM OF METADATA
});