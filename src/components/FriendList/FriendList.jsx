import PropTypes from 'prop-types';
import { FriendsList } from './FriendList-styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';


export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};