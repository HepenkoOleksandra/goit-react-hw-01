import FriendListItem from "../FriendListItem/FriendListItem"


const FriendList = ({friends}) => {
    console.log('friends: ', friends);

  return (
      <ul>
        {friends.map((friend) => {
        return <FriendListItem key={friend.id} friend={friend} />
    })}	
</ul>
  )
}

export default FriendList;