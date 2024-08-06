const axios = require('axios')

const getGeoData = async (endereco) => {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        q: endereco,
        format: 'json',
        limit: 1
      }
    })

    if (response.data.length > 0) {
      const { latitude, longitude } = response.data[0]
      return {
        latitude: latitude,
        longitude: longitude
      }
    } else {
      return {
        latitude: null,
        longitude: null
      }
    }
  } catch (error) {
    console.error('Erro ao obter dados de geolocalização:', error)
    return {
      latitude: null,
      longitude: null
    }
  }
}

module.exports = { getGeoData }