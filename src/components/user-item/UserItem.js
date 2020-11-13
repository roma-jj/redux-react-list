import React from 'react';


const UserItem = ({ item }) => {

    return (
        <div>
            <p>{item.name}</p>
            <p>{item.surname}</p>
            <p>{item.desc}</p>
        </div>
    );
}

export default UserItem;