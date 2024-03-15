import FriendListItem from "../FriendListItem/FriendListItem";
import css from './FriendList.module.css';


const FriendList = ({friends}) => {
    console.log('friends: ', friends);

  return (
      <ul className={css.friendList}>
        {friends.map((friend) => {
        return <FriendListItem key={friend.id} friend={friend} />
    })}	
</ul>
  )
}

export default FriendList;