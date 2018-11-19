import axios from '@/libs/api.request';
import httpClient from './httpClient';


let obj = new Object();

obj.getOperationLogListByIdType = (data) => httpClient.get({ url: '/pangzhan/getLogByPzIdAndType', data });

export default obj