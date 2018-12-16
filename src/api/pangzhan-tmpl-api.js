
import httpClient from './httpClient';

/**

 */
let obj = new Object();

obj.setTmplusedRange = (data) => httpClient.post({ url: `/template/analyzeTemplateRange`, data });

/**
 *根据projectId、buildingId、type获得楼栋旁站的模板使用情况 
 */
obj.getPangzhanTmplInfo = (data) => httpClient.post({ url: `/template/getTemplateRange`, data });

export default obj