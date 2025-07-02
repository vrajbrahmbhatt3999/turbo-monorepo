import React, { useEffect, useState } from 'react';
import eventBus from '@my-monorepo/core/eventBus';

export const SyncStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    eventBus.on('network-status', setIsOnline);
  }, []);

  return (
    <div className={`fixed bottom-2 right-2 px-3 py-1 rounded-full text-xs ${isOnline ? 'bg-green-500' : 'bg-red-500'} text-white`}>
      {isOnline ? 'Online' : 'Offline'}
    </div>
  );
};
