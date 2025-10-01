import { I_SectionItem } from "./section";

export interface SectionMediaCardProps {
    id: number;
    thumbnail: string;
    title: string;
    link: string;
    views?: number;
}

// MEDIA TYPES
export interface SectionMediaItem extends I_SectionItem {
    thumbnail: string;
    title: string;
    link: string;
    views?: number;
}