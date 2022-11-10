import Profile from './Profile';
import Statistics from './Statistics/Statistics';
import user from './user.json';

console.log(user);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column",
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

      <Statistics />
    </div>
  );
};
