"use client"
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicUpdate = dynamic(() => import('../(component)/update/Update'), {
  ssr: false // Ensure the component is not rendered on the server side
});

const Upload = ({ id }) => {
  useEffect(() => {
    // Check if id is available
    if (id) {
      // Use id as needed
      console.log(id);
    }
  }, [id]);

  return (
    <div>
      <DynamicUpdate />
    </div>
  );
};

export default Upload;
