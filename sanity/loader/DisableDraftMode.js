'use client';

import { useRouter } from 'next/navigation';

export function DisableDraftMode() {
  const router = useRouter();

  const disable = async () => {
    await fetch('/api/draft-mode/disable');
    router.push('/');
    router.refresh();
  };

  return (
    <button
      onClick={disable}
      style={{
        position: 'fixed',
        bottom: '10px',
        left: '10px',
        zIndex: 1000,
        backgroundColor: 'rgba(251,207,225,0.77)',
        color: '#613146',
        padding: '2px 10px',
        borderRadius: '10px',
        fontSize: '12px',
        fontWeight: 'semi-bold',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: '5px',
          height: '5px',
          backgroundColor: '#613146',
          borderRadius: '50%',
          marginRight: '5px',
          position: 'relative',
          top: '-1px',
        }}
      ></span>
      Disable draft mode
    </button>
  );
}