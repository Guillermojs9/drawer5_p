declare module 'react-native-html-to-pdf' {
    export interface PDFOptions {
        html: string;
        fileName?: string;
        directory?: string;
        base64?: boolean;
        height?: number;
        width?: number;
    }

    export interface PDFResponse {
        filePath?: string;
        base64?: string;
    }

    export function convert(options: PDFOptions): Promise<PDFResponse>;
}