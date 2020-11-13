import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { displayAlert, loadItems } from '../../thunks/thunks';

import UserItem from '../user-item/UserItem';
import Preloader from '../../shared/preloader/Preloader';
import UserName from '../user-name/UserName';
import { CardWrapper, PageWrapper, Page, Refer, PreloaderWrapper } from '../../shared/styles/styles';


const UserList = ({ list = [], isLoading, startLoadingItems }) => {

    let [index, setIndex] = useState(0);
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
        const showItemOninterval = setInterval(() => {
            setIndex(index++)
            currentItems.forEach((_, i) => {
                if (index <= i) {
                    return index;
                }
            })
        }, 8000);
        return () => clearInterval(showItemOninterval);
      }, [currentItems, index]);

    useEffect(() => {
        startLoadingItems();
    }, [startLoadingItems])

    const content = (
        <div>
            <CardWrapper>
                {currentItems.map((item, i) => <UserItem 
                    key={i} 
                    item={item} 
                />)}
            </CardWrapper>

            <nav>
                <PageWrapper>
                    {pageNumbers.map(page => {
                        return (<Page key={page}>
                            <Refer onClick={() => paginate(page)} href="!#">
                                {page}
                            </Refer>
                        </Page>)
                    })}
                </PageWrapper>
            </nav>

            <div>
                {currentItems.map((item, i) => {
                    return (
                        <UserName 
                            key={i} 
                            item={item}   
                        />
                    );
                })[index]}
            </div>

        </div>
    );
    return isLoading ? <PreloaderWrapper><Preloader /></PreloaderWrapper> : content;
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