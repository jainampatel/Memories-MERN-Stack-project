const HttpError = require("../models/http-error");
const axios = require("axios");

const accesToken =
  "pk.eyJ1IjoiamFpbmFtcGF0ZWwzOTcxIiwiYSI6ImNrbXZveGFzdTA3MW8ybnFuZHF2OWNvNWEifQ.P_QhOxS9K1sg3W14qcuW4Q";
async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${accesToken}`
  );

  const geoData = response.data;

  if (!geoData || geoData.features.length === 0) {
    throw new HttpError("Could not find location for specified address.", 422);
  }

  const coordinates = {
    lng: geoData.features[0].center[0],
    lat: geoData.features[0].center[1],
  };
  return coordinates;
}

module.exports = getCoordsForAddress;
