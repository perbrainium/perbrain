
export type PerType = "FOLDER" | "TEXT" | "IMAGE" | "VIDEO" | "AUDIO"

export interface Per {
    id: string;
    type: PerType;
    data: File | Blob | string | undefined; 
}

export interface Pers {
    [key: string]: Per | undefined;
}