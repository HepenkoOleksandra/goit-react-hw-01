import css from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({friend}) => {
  return (
    <li className={css.friendListItem}>
  <img className={css.friendImg} src={friend.avatar} alt="Avatar" width="48" />
  <p className={css.friendName}>{friend.name}</p>
      <p className={clsx(css.friendStatus, {
        [css.online]: friend.isOnline,
        })}>{friend.isOnline ? 'Online' : 'Offline'}</p>
</li>
  )
}

export default FriendListItem;