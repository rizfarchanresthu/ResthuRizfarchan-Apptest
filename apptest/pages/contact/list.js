import React, {useEffect, useState} from 'react'
import { getContactList } from '../../redux/action/contactAction';


const ContactList = (props) => {
    this.props.getContactList();

    return(
        <div>
            ASD
        </div>
    )
}

const mapStateToProps = state => ({
    contactList: state.contactReducer.contactList
});

const mapDispatchToProps = {
    getContactList: getContactList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);