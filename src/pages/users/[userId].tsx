import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserDetailPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [userData, setUserData] = useState(0);

   useEffect(() => {
    if (userId) {
      setTimeout(() => {
        setUserData(666);
      }, 1000); 
    }
  }, [userId]);

  return (
    <div>
      <h1>User Detail Page</h1>
      {userData ? (
        <>
          <h1>user: {userData}</h1> 
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDetailPage;
