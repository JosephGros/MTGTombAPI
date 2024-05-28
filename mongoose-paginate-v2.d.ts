declare module 'mongoose-paginate-v2' {
    import mongoose from 'mongoose';

    interface PaginateOptions {
        select?: object | string;
        sort?: object | string;
        populate?: object | string | Array<object | string>;
        lean?: boolean;
        leanWithId?: boolean;
        offset?: number;
        page?: number;
        limit?: number;
        customLabels?: {
            totalDocs?: string;
            docs?: string;
            limit?: string;
            page?: string;
            totalPages?: string;
            nextPage?: string;
            prevPage?: string;
            pagingCounter?: string;
            meta?: string;
        };
        [customLabel: string]: any;
    }

    interface PaginateResult<T> {
        docs: T[];
        totalDocs: number;
        limit: number;
        page?: number;
        totalPages: number;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        prevPage?: number;
        nextPage?: number;
    }

    interface PaginateModel<T extends mongoose.Document> extends mongoose.Model<T> {
        paginate(query?: object, options?: PaginateOptions, callback?: (err: any, result: PaginateResult<T>) => void): Promise<PaginateResult<T>>;
    }

    function model(name: string, schema?: mongoose.Schema, collection?: string, skipInit?: boolean): PaginateModel<any>;
    function plugin(schema: mongoose.Schema): void;
}