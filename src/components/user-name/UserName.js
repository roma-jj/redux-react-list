import React from 'react';


const UserName = ({ item }) => {

    // let naming = setTimeout(function showName() {
    //     naming = setTimeout(naming, 8000);
    // }, 8000);

        const name = (
            <div>
                RRR
                <p>{item.name}</p>
                <p>{item.surname}</p>
            </div>
        )

      return name
}

export default UserName;