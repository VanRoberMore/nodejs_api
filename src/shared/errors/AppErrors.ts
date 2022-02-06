export default class AppErrors {

    public readonly message: string;
    public readonly statusCode: number;

    constructor (message: string, statusCode: 400 | 401 | 404 | 409 | 422 |500) {
        this.message = message;
        this.statusCode = statusCode;
    }
   

    public static readonly INTERNAL_SERVER_ERROR: string = "Internal Server Error";
    public static readonly NOT_FOUND: string = "Not Found";
    public static readonly BAD_REQUEST: string = "Bad Request";
    public static readonly UNAUTHORIZED: string = "Unauthorized";
    public static readonly FORBIDDEN: string = "Forbidden";
    public static readonly CONFLICT: string = "Conflict";
    public static readonly UNPROCESSABLE_ENTITY: string = "Unprocessable Entity";
    public static readonly UNSUPPORTED_MEDIA_TYPE: string = "Unsupported Media Type";
    public static readonly TOO_MANY_REQUESTS: string = "Too Many Requests";
    public static readonly TOO_MANY_REQUESTS_MSG: string = "Too many requests";
    public static readonly TOO_MANY_REQUESTS_MSG_2: string = "Too many requests, please try again later";
    public static readonly TOO_MANY_REQUESTS_MSG_3: string = "Too many requests, please try again in a few minutes";
    public static readonly TOO_MANY_REQUESTS_MSG_4: string = "Too many requests, please try again in an hour";
    public static readonly TOO_MANY_REQUESTS_MSG_5: string = "Too many requests, please try again in a day";
    public static readonly TOO_MANY_REQUESTS_MSG_6: string = "Too many requests, please try again in a week";
    public static readonly TOO_MANY_REQUESTS_MSG_7: string = "Too many requests, please try again in a month";
    public static readonly TOO_MANY_REQUESTS_MSG_8: string = "Too many requests, please try again in a year";
    public static readonly TOO_MANY_REQUESTS_MSG_9: string = "Too many requests, please try again in a decade";
    public static readonly TOO_MANY_REQUESTS_MSG_10: string = "Too many requests, please try again in a century";
    public static readonly TOO_MANY_REQUESTS_MSG_11: string = "Too many requests, please try again in a millenium";
    public static readonly TOO_MANY_REQUESTS_MSG_12: string = "Too many requests, please try again in a thousand years";
    public static readonly TOO_MANY_REQUESTS_MSG_13: string = "Too many requests, please try again in a million years";
    public static readonly TOO_MANY_REQUESTS_MSG_14: string = "Too many requests, please try again in a billion years";
    public static readonly TOO_MANY_REQUESTS_MSG_15: string = "Too many requests, please try again in a trillion years";

}
    
