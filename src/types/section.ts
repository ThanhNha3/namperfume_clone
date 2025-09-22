// types/section.ts

export interface SectionItem {
    id: number | string;
    name: string;
    image?: string;
    link?: string;
}

// PRODUCT TYPES

export interface SectionProductItem extends SectionItem {
    title: string;
    subtitle: string;
    price: string;
    badges?: string[];
    sizes?: string[];
}

export interface SectionMediaCardProps {
    id: number;
    thumbnail: string;
    title: string;
    link: string;
    views?: number;
}

// MEDIA TYPES
export interface SectionVideoItem extends SectionItem {
    thumbnail: string;
    title: string;
    link: string;
    views?: number;
}

// SECTION LIST PROPS
export interface SectionListProps {
    title: string;
    items: SectionItem[] | SectionProductItem[] | SectionVideoItem[];
    viewMoreLink?: string;
}

export interface SectionListDataProps<T> extends SectionListProps {
    SkeletonComponentUI: React.ComponentType;
    ItemComponentUI: React.ComponentType<{ item: T }>;
}
