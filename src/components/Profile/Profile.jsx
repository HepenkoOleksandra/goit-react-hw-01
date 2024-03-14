import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
  <div className={css.userData}>
    <img className={css.image}
    src={image}
      alt="User avatar"
    />
    <p className={css.userName}>{name}</p>
    <p className={css.userTag}>{tag}</p>
    <p className={css.userLocation}>{location}</p>
  </div>

  <ul className={css.statsList}>
    <li className={css.statsItem}>
      <span className={css.statsTitle}>Followers</span>
      <span className={css.statsRating}>{stats.followers}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsTitle}>Views</span>
      <span className={css.statsRating}>{stats.views}</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.statsTitle}>Likes</span>
      <span className={css.statsRating}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile