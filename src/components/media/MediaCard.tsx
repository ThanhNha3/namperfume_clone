import "@/styles/components/_videoCard.scss"
import Link from "next/link";
import { SectionMediaCardProps } from "@/types/section";

export const MediaCard = ({ item }: { item: SectionMediaCardProps }) => {
    return (
        <Link
            href={item.link}
            target="_blank" rel="noopener noreferrer"
            key={`${item.id}_${item.title}`}
            className="min-w-3/4 md:min-w-1/4"
        >
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Info */}
            <div className="video-info mt-2 pt-2 px-4 w-full flex flex-col justify-between">
                <h4 className="video-title text-xs uppercase">{item.title}</h4>
                <span className="text-xs text-[var(--color-bg-muted)]">{item.views && `${item.views} Views`}</span>
            </div>
        </Link>
    );
}