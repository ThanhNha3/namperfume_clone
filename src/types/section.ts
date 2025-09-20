export interface SectionItem {
    id: number | string;
    image: string;
    title: string;
    subtitle?: string;
    price?: string;
    badges: string[];
}

export interface SectionListProps {
    title: string;
    items: SectionItem[];
    viewMoreLink?: string;
    renderItem?: (item: SectionItem) => React.ReactNode; // cho custom render
}