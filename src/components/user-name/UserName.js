import React from 'react';
import { ShowNameWrapper, ShowName } from '../../shared/styles/styles';


const UserName = ({ item }) => {

        const name = (
            <ShowNameWrapper>
                <ShowName>{item.name}</ShowName>
                <ShowName>{item.surname}</ShowName>
            </ShowNameWrapper>
        );

      return name;
}

export default UserName;