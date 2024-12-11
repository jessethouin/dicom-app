export type DICOMTag = {
    "Tag": string,
    "Name": string,
    "Keyword": string,
    "VR": string,
    "VM": string,
    "Retired": "RET" | "DICONDE" | "DICOS" | ""
}

export type TagResponse = {
    success: boolean,
    tag: string[] | string,
    error?: string
}