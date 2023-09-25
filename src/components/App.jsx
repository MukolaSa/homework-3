import React from 'react';
import Statistics from './Statistics/Statistics';
import data from '../data.json';

// Список друзів
import { FriendList } from './FriendList/FriendList';
import friendsData from '../friends.json';

export const App = () => {
  return (
    <div className="centered-container">
      <Statistics title="Upload status" stats={data} />
      <FriendList friends={friendsData} />
    </div>
  );
};
