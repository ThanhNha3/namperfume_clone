import "@/styles/components/_videoCard.scss"

type VideoCardProps = {
    video: {
        id: number | string;
        thumbnail: string;
        title: string;
        link?: string;
        views: number;
    }
}

export const VideoCard = ({ video }: VideoCardProps) => {
    return (
        <div
            key={`${video.id}-${Math.random()}`}
            className="min-w-1/4"
        >
            <div className="w-full h-48">
                <img src={video.thumbnail} alt={video.title} width={"100%"} className="max-h-full" />
            </div>

            {/* Info */}
            <div className="video-info mt-2 pt-2 px-4 w-full flex flex-col justify-between">
                <h4 className="video-title text-xs uppercase">{video.title}</h4>
                <span className="text-xs text-[var(--color-bg-muted)]">{video.views} Views</span>
            </div>
        </div>
    );
}