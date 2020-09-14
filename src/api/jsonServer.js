import axios from 'axios';

// ngrok temporary url
export default axios.create({
  baseURL: 'http://dd2c6a269cae.ngrok.io'
});
