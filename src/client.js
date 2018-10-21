import axios from 'axios';

const CancelToken = axios.CancelToken;
const server = "192.168.1.58";
const schema = "http://";
const port = ":8080";
const base_url = `${schema}${server}${port}`;

  // TODO post lan log deg
export function submit_image({lon, lat, deg}) {
  let source = CancelToken.source();
  return axios.post(`${base_url}/images/new`, {
    lon: lon,
    lat: lat,
    deg: deg
  });
};

export function get_image(job_id ) {
  let source = CancelToken.source();
  return axios.get(`${base_url}/images/${job_id}`, {
    cancelToken: source.token
  });
};
