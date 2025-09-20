import { SectionItem } from "./section";

export interface SectionProductItem extends SectionItem {
    title: string;
    subtitle: string;
    price: string;
    badges?: string[];
    sizes?: string[];
}