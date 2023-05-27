import {LineWobble} from '@uiball/loaders'

export default function UserInfoSkeleton() {
  return (
    <div className='flex flex-col gap-4'>
      <LineWobble size={50} lineWeight={5} speed={1.75} color='white' />
      <LineWobble size={120} lineWeight={5} speed={1.75} color='white' />
    </div>
  );
}
