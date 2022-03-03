import CustomAPIError from "./custom-apiError.js";
import { StatusCodes } from "http-status-codes";


class NotFoundError extends CustomAPIError {
    constructor (message){
        super(message);
        this.statusCode= StatusCodes.NOT_FOUND;
    }
}

export default NotFoundError;