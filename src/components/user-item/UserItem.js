import React from 'react';
import { Card, Name, Description } from '../../shared/styles/styles';


const UserItem = ({ item }) => {

    return (
        <Card>
            <Name>{item.name}</Name>
            <Name>{item.surname}</Name>
            <Description>{item.desc}</Description>
        </Card>
    );
}

export default UserItem;