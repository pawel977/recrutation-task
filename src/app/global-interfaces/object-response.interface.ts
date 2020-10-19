export interface ObjectResponse<T> {
    type: string;
    id: number;
    attributes: T;
}