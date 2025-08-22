import { RequestError } from "../http-errors";
import logger from "../logger";
import handleError from "./error";


interface FetchOptions extends RequestInit {
    timeout?: number;
}

// isError function checks if a given value is an instance of Error
function isError(error: unknown): error is Error {
    return error instanceof Error;
}

// defines a fetchHandler that wraps the native fetch API to provide additional features
// such as timeout handling, custom headers, and error logging

// takes in a URL, which we want to make a request to, and an options object
export async function fetchHandler<T>(url: string, options: FetchOptions = {}): Promise<ActionResponse<T>> {
    // Destructure the options object to get the timeout and headers
    const {
        timeout = 10000, 
        headers: customHeaders = {},
        ...restOptions 
    } = options;

    // Create an AbortController to handle request timeouts
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    // Merge the default headers, with the custom headers, which we might want to pass into the function
    const defaultHeaders: HeadersInit = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };
    const headers: HeadersInit = {...defaultHeaders, ...customHeaders};

    // configures the fetch request with the merged headers and the abort signal
    const config: RequestInit = {
        ...restOptions,
        headers,
        signal: controller.signal,
    };

    // try to fetch the request URL by passing the URL and the configuration
    try {
        const response = await fetch(url, config);
        clearTimeout(id);

        // if the response is not okay it throws a request error
        if (!response.ok) {
            throw new RequestError(response.status, `HTTP error! status: ${response.status}`);
        }

        // If the response is okay, return the JSON data
        return await response.json();
    } catch (err) {
        // check if the error is an instance of Error, if not set to be an unknown error
        const error = isError(err) ? err : new Error("Unknown error occurred");
        // log the error based on its type
        if (error.name === "AbortError") {
            logger.warn(`Request to ${url} timed out`);
        // if it's not an abort error (due to timeout) then log an error for other types
        } else {
            logger.error(`Error fetching ${url}: ${error.message}`);
        }

        // handle the error using the handleError function, which returns an ActionResponse
        // this function ensures that fetch requests are handled with proper error management and logging
        return handleError(error) as ActionResponse<T>;
    }

}