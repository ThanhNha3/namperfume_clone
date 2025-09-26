import { SectionItem } from "./section";

export interface SectionProductItem extends SectionItem {
    title: string;
    brand?: string;
    price: string;
    badges?: string[];
    sizes?: string[];
}