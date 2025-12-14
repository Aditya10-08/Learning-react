const SkeletonCard = () => {
  return (
    <div className="animate-pulse">
      
      {/* image box skeleton */}
      <div className="h-65 w-70 bg-zinc-700 rounded-xl"></div>

      {/* text skeleton */}
      <div className="h-6 w-40 bg-zinc-700 rounded mt-2 mb-2"></div>
    </div>
  );
};

export default SkeletonCard;
