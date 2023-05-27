import { DotWave } from '@uiball/loaders';

export default function LoadingTaks() {
  return (
    <div className='mt-8 flex justify-center py-60'>
      <DotWave size={60} speed={1} color='white' />
    </div>
  );
}
