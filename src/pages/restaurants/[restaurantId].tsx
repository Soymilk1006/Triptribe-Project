import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const RestaurantDetailPage = () => {
  const router = useRouter();
  const { restaurantId } = router.query;
  const [restaurantData, setRestaurantData] = useState<string>('');

  useEffect(() => {
    if (restaurantId) {
      setTimeout(() => {
        setRestaurantData(restaurantId as string);
      }, 1000);
    }
  }, [restaurantId]);

  return (
    <div>
      <h1>Restaurant Detail Page</h1>
      {restaurantData ? <h1>Restaurant: {restaurantData}</h1> : <p>Loading...</p>}
    </div>
  );
};

export default RestaurantDetailPage;
