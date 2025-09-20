import "@/styles/components/_videoCard.scss"
import Link from "next/link";

type VideoCardProps = {
    video: {
        id: number | string;
        thumbnail: string;
        title: string;
        link: string;
        views?: number;
    }
}

export const VideoCard = ({ video }: VideoCardProps) => {
    const { id, thumbnail, title, views = null } = video
    return (
        <Link
            href={video.link}
            target="_blank" rel="noopener noreferrer"
            key={`${video.id}_${video.title}`}
            className="min-w-3/4 lg:w-1/4"
        >
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Info */}
            <div className="video-info mt-2 pt-2 px-4 w-full flex flex-col justify-between">
                <h4 className="video-title text-xs uppercase">{title}</h4>
                <span className="text-xs text-[var(--color-bg-muted)]">{views && `${views} Views`}</span>
            </div>
        </Link>
    );
}