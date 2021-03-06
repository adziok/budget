export type Result<T> = OkResult<T> | ErrorResult;
export type AsyncResult<T> = Promise<Result<T>>;

export class OkResult<T> {
    constructor(public value: T) {}

    isOk(): this is OkResult<T> {
        return true;
    }

    isError(): this is ErrorResult {
        return false;
    }
}

export class ErrorResult<T = any> {
    constructor(public error: Error) {}

    isOk(): this is OkResult<any> {
        return false;
    }

    isError(): this is ErrorResult {
        return true;
    }
}

export const ok = <T>(value: T) => new OkResult(value);
export const err = (error: Error) => new ErrorResult(error);
