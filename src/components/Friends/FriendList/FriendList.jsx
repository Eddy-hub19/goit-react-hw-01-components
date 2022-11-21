import FriendListItem from './FriendListItem/FriendListItem';
import css from './friendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
