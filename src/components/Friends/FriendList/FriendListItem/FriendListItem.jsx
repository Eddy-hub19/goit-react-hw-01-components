import PropTypes from 'prop-types';

import css from './friendListItem.module.css';

function FriendListItem({ avatar, name, status }) {
  return (
    <li className={css.item}>
      <span className={status ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default FriendListItem;
