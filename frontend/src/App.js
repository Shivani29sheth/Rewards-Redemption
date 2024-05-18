import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RewardsApp from './components/RewardsApp';

function App() {
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [points, setPoints] = useState(0);
  const [rewards, setRewards] = useState([]);
  const [redemptionHistory, setRedemptionHistory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(res => {
        setUsers(res.data);
        if (res.data.length > 0) {
          setUserId(res.data[0].id);
        }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (userId === null) return;

    const fetchData = async () => {
      try {
        const pointsRes = await axios.get(`http://localhost:3001/api/users/${userId}/points`);
        setPoints(pointsRes.data.points);

        const rewardsRes = await axios.get('http://localhost:3001/api/rewards');
        setRewards(rewardsRes.data);

        const historyRes = await axios.get(`http://localhost:3001/api/users/${userId}/redemptions`);
        setRedemptionHistory(historyRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [userId]);

  const redeemReward = async (rewardId) => {
    try {
      await axios.post('http://localhost:3001/api/redeem', { userId, rewardId });
      const pointsRes = await axios.get(`http://localhost:3001/api/users/${userId}/points`);
      setPoints(pointsRes.data.points);

      const historyRes = await axios.get(`http://localhost:3001/api/users/${userId}/redemptions`);
      setRedemptionHistory(historyRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <RewardsApp
      userId={userId}
      users={users}
      points={points}
      rewards={rewards}
      redemptionHistory={redemptionHistory}
      setUserId={setUserId}
      redeemReward={redeemReward}
    />
  );
}

export default App;
