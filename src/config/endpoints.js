const host = process.env.REACT_APP_API_HOST;

const endpoints = {
  aicrafts: `${host}/aircrafts`,
  flights: `${host}/flights`,
  getAircraft: (id) =>`${host}/aircraft/${id}`,
  getFlight: (id) =>`${host}/flights/${id}`,
}

export default endpoints;
