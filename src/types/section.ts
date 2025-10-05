// types/section.ts

import { SectionMediaItem } from "./media";
import { I_Product } from "./product";

export interface I_SectionItem {
    id: number | string;
    name: string;
    image?: string;
    link?: string;
}

// SECTION LIST PROPS
export interface SectionListProps<T = I_SectionItem | I_Product | SectionMediaItem> {
    title: string;
    items: T[];
    viewMoreLink?: string;
}

export interface SectionListDataProps<T> extends SectionListProps {
    SkeletonComponentUI: React.ComponentType;
    ItemComponentUI: React.ComponentType<{ item: T }>;
}
