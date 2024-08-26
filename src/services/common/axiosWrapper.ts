import axios from 'axios';
import { HttpVerb } from '../../common/constants/httpVerb';
import { IApiResponse } from '../../common/types';

interface AxiosResponse<T> {
    status: number;
    statusText: string;
    data: T;
}

const axiosConfig = (
    authToken: string,
    customHeaders: Record<string, string> = {},
    customConfig: Record<string, string> = {},
) => ({
    baseURL: process.env.REACT_APP_SERVER_API,
    timeout: 600_000,
    headers: {
        ...{
            Authorization: `Bearer ${authToken}`,
        },
        ...customHeaders,
    },
    ...customConfig,
});

const mapAxiosResponseToLocalResponseType = <T>(
    axiosRespnose: AxiosResponse<T>,
): IApiResponse<T> => {
    return {
        code: axiosRespnose.status,
        message: axiosRespnose.statusText,
        data: axiosRespnose.data,
    };
};

const errorResponse = (
    errorCode: number,
    errorMessage: string,
    messageCode: string,
) => ({
    code: errorCode,
    message: errorMessage,
    messageCode: messageCode || '',
});

export const makeApiCallForImage = async (
    requestVerb: HttpVerb,
    endpoint: string,
) => {
    return makeApiCall<Blob, undefined>(
        requestVerb,
        endpoint,
        undefined,
        {},
        { responseType: 'blob' },
    );
};

// T -> response data type
// D -> request data type
export const makeApiCall = async <T, D>(
    requestVerb: HttpVerb,
    endpoint: string,
    requestData?: D,
    customHeaders?: Record<string, string>,
    customConfig?: Record<string, string>,
): Promise<IApiResponse<T>> => {
    let finalResponse: AxiosResponse<T>;

    const authToken = 'abc';

    try {
        switch (requestVerb) {
            case HttpVerb.GET:
                finalResponse = await axios.get(
                    endpoint,
                    axiosConfig(authToken, customHeaders, customConfig),
                );
                break;

            case HttpVerb.PUT:
                finalResponse = await axios.put(
                    endpoint,
                    requestData,
                    axiosConfig(authToken, customHeaders, customConfig),
                );
                break;

            case HttpVerb.POST:
                finalResponse = await axios.post(
                    endpoint,
                    requestData,
                    axiosConfig(authToken, customHeaders, customConfig),
                );
                break;

            case HttpVerb.DELETE:
                finalResponse = await axios.delete(
                    endpoint,
                    axiosConfig(authToken, customHeaders, customConfig),
                );
                break;
        }

        if (finalResponse?.status) {
            return mapAxiosResponseToLocalResponseType(finalResponse);
        }

        return errorResponse(500, 'Could not get a response from API', '');
    } catch (error: any) {
        // TODO: refactor the error message to return the specific error msg
        return errorResponse(
            error?.response?.status,
            'An error occured while calling the API',
            error?.response?.data?.messageCode,
        );
    }
};
