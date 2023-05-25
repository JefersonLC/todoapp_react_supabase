import TextSkeleton from "./TextSkeleton";

export default function TaskCardSkeleton() {
  return (
    <div className='mb-7'>
      <TextSkeleton length='50' />
      <div className='mt-4'>
        <TextSkeleton length='60' />
      </div>
      <div className='mt-4'>
        <TextSkeleton length='60' />
      </div>
      <div className='mt-4'>
        <TextSkeleton length='60' />
      </div>
    </div>
  );
}
