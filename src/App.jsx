import './index.css'
import Profile from 'components/Profile/Profile.js';
import Statistics from 'components/Statistics/Statistics';
import user from 'json/user.json';
import data from 'json/data.json';
// import friends from 'json/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </section>
      <section>
        <Statistics title={'Upload stats'} stats={data} />
      </section>
    </div>
  );
};
