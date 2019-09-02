import React, {useState} from 'react';
import HomePage from './homePage';
import './styles.scss';

const HomePageWrapper = () => {
    const [displayModal, setDisplayModal] = useState(false)

    return (
        <HomePage
            displayModal={displayModal}
            setDisplayModal={(displayModal: boolean) => setDisplayModal(displayModal)}
        />
    )
}

export default HomePageWrapper;