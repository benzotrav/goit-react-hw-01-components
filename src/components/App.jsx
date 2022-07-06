import { Profile } from './Profile/Profile';
import  user  from '../path/user';
import { Statistics } from './Statistics/Statistics';
import data from "../path/data";
import getRandomHexColor from 'utils/randomColor';
import { FriendList } from './FriendList/FriendList';
import friends from "../path/friends";
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from "../path/transactions";



export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#7b8c9256',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

        <Statistics title={'title'} stats={data} colorFn={getRandomHexColor} />      
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
    </div>
  );
};