import React from 'react';

const UserContext = React.createContext({
  avatarImgSrc : '',
  nickName: 'Guest',
  type: 'user',
  setUser: () => {}
});

export default UserContext;
