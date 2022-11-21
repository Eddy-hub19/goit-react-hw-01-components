import './index.css';
import Profile from 'components/Profile/Profile.js';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/Friends/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
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
      <section>
        <FriendList friends={friends} />
      </section>
      <section>
        <TransactionHistory items={transactions} />
      </section>
    </div>
  );
};
