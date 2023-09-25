import React from 'react';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  const statusClassName = isOnline ? 'friend-online' : 'friend-offline';

  return (
    <li className="friend-list-item">
      <span className={`friend-status ${statusClassName}`} />
      <img className="friend-avatar" src={avatar} alt={name} width="48" />
      <p className="friend-name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
