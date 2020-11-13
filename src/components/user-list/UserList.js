import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { displayAlert, loadItems } from '../../thunks/thunks';

import UserItem from '../user-item/UserItem';
import Preloader from '../../shared/preloader/Preloader';


const UserList = ({ list = [], isLoading, startLoadingItems }) => {

    let [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 5;
    let indexOfLastItem = currentPage * itemsPerPage;
    let indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(list.length/itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    useEffect(() => {
        startLoadingItems();
    }, [startLoadingItems])
    
 
    const content = (
        <div>
            <div>
                {currentItems.map((item, i) => <UserItem 
                    key={i} 
                    item={item} 
                />)}
            </div>

            <nav>
                <ul>
                    {pageNumbers.map(page => {
                        return (<li key={page}>
                            <a onClick={() => paginate(page)} href="!#">
                                {page}
                            </a>
                        </li>)
                    })}
                </ul>
            </nav>
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