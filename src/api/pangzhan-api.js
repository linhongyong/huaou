import axios from '@/libs/api.request';
import httpClient from './httpClient';


let obj = new Object();

obj.getOperationLogListByIdType = (data) => httpClient.get({ url: '/pangzhan/getLogByPzIdAndType', data });
obj.exportWords = (data) => httpClient.post({ url: '/pangzhan/exportWords', data });

export default obj