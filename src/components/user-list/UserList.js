import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { displayAlert, loadItems } from '../../thunks/thunks';

import UserItem from '../user-item/UserItem';
import Preloader from '../../shared/preloader/Preloader';


const UserList = ({ list = [], isLoading, startLoadingItems }) => {

    useEffect(() => {
        startLoadingItems();
    }, [startLoadingItems])
 
    const content = (
        <div>
            <div>
                {list.map((item, i) => <UserItem 
                    key={i} 
                    item={item} 
                />)}
            </div>

        </div>
    );
    return isLoading ? <div><Preloader /></div> : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    onDisplayAlert: item => dispatch(displayAlert(item)),
    startLoadingItems: () => dispatch(loadItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);