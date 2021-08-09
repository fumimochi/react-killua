import React  from 'react';
import FriendItem from './FriendItem/FriendItem';

const Friends = (props) => {

    let friendsElements = props.state.friendsData
    .map( f => <FriendItem name={props.state.name}/>)

    return (
        <div>

        </div>
    )
}

export default Friends;
