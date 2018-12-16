import {axios, exportFile} from '@/libs/api.request';
import defaultData from "./mock/default";
const client = (method) => ({ url, data, defaultValue }) =>
  new Promise((resolve, reject) => {
    const config = { url, method };
    if (method == 'post') {
      Object.assign(config, { data });
    } else {
      Object.assign(config, { params: data });
    }
    axios
      .request(config)
      .then((res) => {
        if (res.data.code == 'Success'){
					console.log(url,res.data.result,"**********")
					// console.log(res.data.result)	
					resolve(res.data.result);
				}
        else reject(res.data);
      })
      .catch((err) => {
        reject(defaultValue ? defaultData[defaultValue] : err);
      });
  });
export default {
  post: client('post'),
  get: client('get')
};
