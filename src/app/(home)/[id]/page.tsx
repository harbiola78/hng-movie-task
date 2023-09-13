'use client';
import { useState } from 'react';
import Content from './components/content';
import SideBar from './components/sidebar';
import { useRouter } from 'next/navigation';

const DetailPage = () => {
  const [current, setCurrent] = useState(1);
  const router = useRouter();
  if (current == 0) {
    current == 0 && router.push('/');
  }
  function handleCurrent(current: number) {
    setCurrent(current);
  }
  return (
    <main className='w-full bg-white sm:min-h-screen max-w-[1440px] mx-auto'>
      <div className='flex w-full'>
        <SideBar current={current} action={handleCurrent} />

        {current == 1 ? <Content /> : null}
        {current > 1 ? (
          <div className='flex w-full items-center justify-center text-4xl font-semibold text-pink-500'>
            Feature is coming soon!
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default DetailPage;
