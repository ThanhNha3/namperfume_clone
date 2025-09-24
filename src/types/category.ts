export type HeaderCategory = {
    key: string;
    title: string;
    type?: "highlight" | "bold";
    link: string;
    mega?: {
        categories: {
            key: string;
            label: string;
        }[];
        brands?: string[];
        banners?: string[];
    };
}