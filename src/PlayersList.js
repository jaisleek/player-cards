// src/PlayersList.js
import React from 'react';
import PlayerCard from './PlayerCard'; // Updated import
import player from './player';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {player.map((player, index) => (
        <PlayerCard key={index} {...player} /> // Updated component
      ))}
    </div>
  );
};

export default PlayersList;
