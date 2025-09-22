export type HeaderCategory = {
    key: string;
    title: string;
    type?: "highlight";
    mega?: {
        categories: {
            key: string;
            label: string;
        }[];
        brands?: string[];
        banners?: string[];
    };
}