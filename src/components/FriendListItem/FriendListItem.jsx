
const FriendListItem = ({friend}) => {
  return (
    <li>
  <img src={friend.avatar} alt="Avatar" width="48" />
  <p>{friend.name}</p>
  {friend.isOnline ? (<p>Online</p>) : (<p>Offline</p>)}
</li>
  )
}

export default FriendListItem;