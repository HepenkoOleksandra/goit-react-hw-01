import Profile from './Profile/Profile';
import userData from '../userData.json';
import friends from '../friends.json';
import FriendList from './FriendList/FriendList';
import { Alert } from './books';

const App = () => {
  return (<>
    <Profile
      name={userData.username}
      tag={userData.tag}
      location={userData.location}
      image={userData.avatar}
      stats={userData.stats}
    />
    <FriendList friends={friends} /> 
      <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
    </>
  )
}

export default App
