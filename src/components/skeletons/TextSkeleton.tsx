export default function TextSkeleton({ length }: { length: string }) {
  const skeletonStyle = `w-[${length}px]`;

  return (
    <span
      className={`block mx-2 my-1 bg-gray-300 rounded-md h-2 animate-pulse ${skeletonStyle}`}
    />
  );
}
