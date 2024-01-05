import { Spinner } from 'flowbite-react';

export default function Component() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Spinner color="purple" className='text-white text-xl fill-teal' size="xl" aria-label="Center-aligned spinner" />
      </div>
    </div>
  );
}
