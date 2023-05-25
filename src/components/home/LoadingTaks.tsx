import TaskCardSkeleton from "../skeletons/TaskCardSkeleton";

export default function LoadingTaks() {
  return (
    <div className="mt-8">
      <TaskCardSkeleton />
      <TaskCardSkeleton />
      <TaskCardSkeleton />
      <TaskCardSkeleton />
      <TaskCardSkeleton />
      <TaskCardSkeleton />
      <TaskCardSkeleton />
    </div>
  )
}
