export interface SectionItem {
    id: number | string;
    image: string;
    name: string;
    link?: string;
}

export interface SectionProductItem extends SectionItem {
    title: string;
    subtitle: string;
    price: string;
}

export interface SectionListProps {
    title: string;
    items: SectionItem[];
    viewMoreLink?: string;
}