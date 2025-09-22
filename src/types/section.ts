// types/section.ts

import { SectionMediaItem } from "./media";
import { SectionProductItem } from "./product";

export interface SectionItem {
    id: number | string;
    name: string;
    image?: string;
    link?: string;
}

// SECTION LIST PROPS
export interface SectionListProps {
    title: string;
    items: SectionItem[] | SectionProductItem[] | SectionMediaItem[];
    viewMoreLink?: string;
}

export interface SectionListDataProps<T> extends SectionListProps {
    SkeletonComponentUI: React.ComponentType;
    ItemComponentUI: React.ComponentType<{ item: T }>;
}
