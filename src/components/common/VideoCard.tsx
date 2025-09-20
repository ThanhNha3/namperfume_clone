import { Heart } from "lucide-react";

type VideoCardProps = {
    video: {
        id: number | string;
        thumbnail: string;
        title: string;
        link?: string;
    }
}

export const VideoCard = ({ video }: VideoCardProps) => {
    return (
        <div
            key={`${video.id}-${Math.random()}`}
            className="min-w-[160px] max-w-[200px] flex-shrink-0 relative px-2"
        >
            {/* Icon Heart */}
            <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                <Heart size={16} className="text-gray-600" />
            </button>

            {/* Product image */}
            <div className="w-full h-48 flex items-center justify-center">
                <img src={video.thumbnail} alt={video.title} className="max-h-full object-contain" />
            </div>

            {/* Info */}
            <div className="mt-2 text-center">
                <h4 className="font-bold text-xs uppercase truncate">{video.title}</h4>
            </div>
        </div>
    );
}