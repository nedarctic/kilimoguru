const { RESTDataSource } = require('@apollo/datasource-rest');

class WaziupAPI extends RESTDataSource {
  baseURL = `https://api.waziup.io/api/v2/`;

  async getDevice(deviceId) {
    return this.get(`devices/${deviceId}`);
  }

  async getSensorsForDevice(deviceId) {
    return this.get(`devices/${deviceId}/sensors`);
  }

  async getActuatorsForDevice(deviceId) {
    return this.get(`devices/${deviceId}/actuators`);
  }
}

module.exports =  WaziupAPI;
