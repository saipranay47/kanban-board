import React from 'react'

const Avatar = ({userid}) => {
  return <img src="https://i.pravatar.cc/300" alt={userid} style={{width : "24px", height : "24px", borderRadius : "50%"}} />;
}

export default Avatar