import React, { useState } from 'react';
import LikedItemsContext from './LikedItemsContext';

const LikedItemsProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  const addToLikedItems = (item) => {
    setLikedItems((likedItems) => [...likedItems, item]);
  };

  return (
    <LikedItemsContext.Provider value={{ likedItems, addToLikedItems }}>
      {children}
    </LikedItemsContext.Provider>
  );
};

export default LikedItemsProvider;
