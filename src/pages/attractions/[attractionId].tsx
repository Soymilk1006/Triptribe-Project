import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const AttractionDetailPage = () => {
  const router = useRouter();
  const { attractionId } = router.query;
  const [attractionData, setAttractionData] = useState(0);

  useEffect(() => {
    if (attractionId) {
      setTimeout(() => {
        setAttractionData(999);
      }, 1000);
    }
  }, [attractionId]);

  return (
    <div>
      <h1>Attraction Detail Page</h1>
      {attractionData ? (
        <>
          <h1>Attraction: {attractionData}</h1>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AttractionDetailPage;
