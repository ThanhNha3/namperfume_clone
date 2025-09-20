export const VideoCardSkeleton: React.FC = () => {
    return (
        <div className="w-[200px] relative px-2 flex-shrink-0 animate-pulse">
            <div className="w-full h-48 bg-gray-200 rounded-md mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
    );
};
