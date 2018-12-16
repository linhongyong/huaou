import {axios, exportFile} from '@/libs/api.request';
import httpClient from './httpClient';

let obj = new Object();

//-------------------------------------旁站共用----------------------------------
obj.getOperationLogListByIdType = (data) => httpClient.get({ url: '/pangzhan/getLogByPzIdAndType', data });//获得操作记录（旁站Id,旁站类型)
obj.exportWordsBatchPZ = (data) => exportFile(data, '/pangzhan/exportWords');//批量导出word
obj.exportImagesByPzIdAndType = (data) => httpClient.post({ url: '/pangzhan/exportImages', data });//导出旁站图片
obj.exportImagesForPZ = (data) => exportFile(data, '/pangzhan/exportImages');//导出旁站图片
obj.exportImagesBatchPZ = (data) => exportFile(data, '/pangzhan/batchExportImages');//批量导出旁站图片
obj.exportExcelForJXGZPZ = (data) => exportFile(data, '/jxZkGzzPzjl/exprotExcel');//导出旁站excel

obj.getListByCondition = (data) => httpClient.post({ url: '/pangzhan/getListByCondition', data });

obj.pangzhanStatistics = (data) => httpClient.post({ url: '/pangzhan/statistics', data });
//-------------------------------------机械关注----------------------------------
obj.exportJXGZWord = (data) => exportFile(data, `/jxZkGzzPzjl/download?id=${data.id}`);
obj.exportSNJBWord = (data) => exportFile(data, `/snJbjPzjl/download?id=${data.id}`);
obj.exportYYLGZWord = (data) => exportFile(data, `/yylgzpz/download?id=${data.id}`);














export default obj