import apiClient from './client';
import {
  // Requests
  XTSSignInRequest,
  XTSSignOutRequest,
  XTSUpdateUserConnectionRequest,
  XTSConnectUserRequest,
  XTSGetObjectListRequest,
  XTSGetObjectsRequest,
  XTSCreateObjectRequest,
  XTSUpdateObjectsRequest,
  XTSDeleteObjectsRequest,
  XTSDownloadObjectListRequest,
  XTSGetRecordSetRequest,
  XTSUpdateRecordSetRequest,
  XTSGetFilesRequest,
  XTSUploadFileRequest,
  XTSDeleteFilesRequest,
  XTSGetReportDataRequest,
  XTSGetRelatedDocumentsRequest,
  XTSGetPrintFormRequest,
  XTSGetReportRequest,
  // Responses
  XTSSignInResponse,
  XTSSignOutResponse,
  XTSUpdateUserConnectionResponse,
  XTSConnectUserResponse,
  XTSGetObjectListResponse,
  XTSGetObjectsResponse,
  XTSCreateObjectResponse,
  XTSUpdateObjectsResponse,
  XTSDeleteObjectsResponse,
  XTSDownloadObjectListResponse,
  XTSGetRecordSetResponse,
  XTSUpdateRecordSetResponse,
  XTSGetFilesResponse,
  XTSUploadFileResponse,
  XTSDeleteFilesResponse,
  XTSGetReportDataResponse,
  XTSGetRelatedDocumentsResponse,
  XTSGetPrintFormResponse,
  XTSGetReportResponse,
  // Error
  XTSServiceError,
} from './types';

// Hàm tiện ích để ném lỗi
const throwError = (status: number, message: string, details?: any): never => {
  const error: XTSServiceError = { status, message, details };
  throw error;
};

// Đăng nhập / Đăng xuất / Kết nối người dùng

export const signIn = async (request: XTSSignInRequest): Promise<XTSSignInResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Sign in failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Sign in error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during sign in', error.message);
  }
  throw new Error('This line should never be reached');
};

export const signOut = async (request: XTSSignOutRequest): Promise<XTSSignOutResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Sign out failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Sign out error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during sign out', error.message);
  }
  throw new Error('This line should never be reached');
};

export const updateUserConnection = async (
  request: XTSUpdateUserConnectionRequest
): Promise<XTSUpdateUserConnectionResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Update user connection failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Update user connection error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during update user connection', error.message);
  }
  throw new Error('This line should never be reached');
};

export const connectUser = async (
  request: XTSConnectUserRequest
): Promise<XTSConnectUserResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Connect user failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Connect user error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during connect user', error.message);
  }
  throw new Error('This line should never be reached');
};

// Quản lý danh sách đối tượng

export const getObjectList = async (
  request: XTSGetObjectListRequest
): Promise<XTSGetObjectListResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Get object list failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Get object list error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during get object list', error.message);
  }
  throw new Error('This line should never be reached');
};

export const getObjects = async (
  request: XTSGetObjectsRequest
): Promise<XTSGetObjectsResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Get objects failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Get objects error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during get objects', error.message);
  }
  throw new Error('This line should never be reached');
};

export const createObject = async (
  request: XTSCreateObjectRequest
): Promise<XTSCreateObjectResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Create object failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Create object error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during create object', error.message);
  }
  throw new Error('This line should never be reached');
};

export const updateObjects = async (
  request: XTSUpdateObjectsRequest
): Promise<XTSUpdateObjectsResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Update objects failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Update objects error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during update objects', error.message);
  }
  throw new Error('This line should never be reached');
};

export const deleteObjects = async (
  request: XTSDeleteObjectsRequest
): Promise<XTSDeleteObjectsResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Delete objects failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Delete objects error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during delete objects', error.message);
  }
  throw new Error('This line should never be reached');
};

export const downloadObjectList = async (
  request: XTSDownloadObjectListRequest
): Promise<XTSDownloadObjectListResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Download object list failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Download object list error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during download object list', error.message);
  }
  throw new Error('This line should never be reached');
};

// Quản lý bản ghi

export const getRecordSet = async (
  request: XTSGetRecordSetRequest
): Promise<XTSGetRecordSetResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Get record set failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Get record set error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during get record set', error.message);
  }
  throw new Error('This line should never be reached');
};

export const updateRecordSet = async (
  request: XTSUpdateRecordSetRequest
): Promise<XTSUpdateRecordSetResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Update record set failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Update record set error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during update record set', error.message);
  }
  throw new Error('This line should never be reached');
};

// Quản lý file đính kèm

export const getFiles = async (request: XTSGetFilesRequest): Promise<XTSGetFilesResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Get files failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Get files error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during get files', error.message);
  }
  throw new Error('This line should never be reached');
};

export const uploadFile = async (
  request: XTSUploadFileRequest
): Promise<XTSUploadFileResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Upload file failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Upload file error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during upload file', error.message);
  }
  throw new Error('This line should never be reached');
};

export const deleteFiles = async (
  request: XTSDeleteFilesRequest
): Promise<XTSDeleteFilesResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Delete files failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Delete files error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during delete files', error.message);
  }
  throw new Error('This line should never be reached');
};

// Báo cáo và chứng từ

export const getReportData = async (
  request: XTSGetReportDataRequest
): Promise<XTSGetReportDataResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Get report data failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Get report data error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during get report data', error.message);
  }
  throw new Error('This line should never be reached');
};

export const getRelatedDocuments = async (
  request: XTSGetRelatedDocumentsRequest
): Promise<XTSGetRelatedDocumentsResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Get related documents failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Get related documents error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during get related documents', error.message);
  }
  throw new Error('This line should never be reached');
};

export const getPrintForm = async (
  request: XTSGetPrintFormRequest
): Promise<XTSGetPrintFormResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Get print form failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Get print form error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during get print form', error.message);
  }
  throw new Error('This line should never be reached');
};

export const getReport = async (
  request: XTSGetReportRequest
): Promise<XTSGetReportResponse> => {
  try {
    const response = await apiClient.post('', request);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
    throwError(response.status, 'Get report failed');
  } catch (error: any) {
    if (error.response) {
      throwError(
        error.response.status,
        error.response.data?.message || 'Get report error',
        error.response.data
      );
    }
    throwError(500, 'Network or unexpected error during get report', error.message);
  }
  throw new Error('This line should never be reached');
};