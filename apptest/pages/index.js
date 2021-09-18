import Styles from '../styles/styles';
import React, {useEffect, useState} from 'react'
import { getContactList } from '../redux/action/contactAction';
import {connect} from 'react-redux';
import Link from 'next/link'
import * as Header from '../component/Header'

const ContactList = (props) => {

    useEffect(async () => {
      let res = await fetch("https://simple-contact-crud.herokuapp.com/contact")
      if(res.status === 200){
        const result = await res.json()
        props.getContactList(result.data)
      }else{
        console.log(res)
      }
    }, [])

    const contacts = props.contactList.length > 0 ? props.contactList.map((con, i) => (
      <div className={Styles.List.ContainerContact}>
        <div className={Styles.List.ContainerName}>
          <p className={Styles.List.Name}>{con.firstName} {con.lastName}</p>
        </div>
        <div className={Styles.List.ContainerPhoto}>
          <img className={Styles.List.Photo} src={con.photo} onError={(e)=>{e.target.onerror = null; e.target.src="/no-image.jpeg"}} alt={`${con.firstName}`} ></img>
        </div>
        <div className={Styles.Button.ButtonDetail}><Link href={`/contact/${con.id}`}>Detail &gt;&gt;</Link></div>
      </div>
    )) : <div className={Styles.List.ContainerContact}>
      No contact
    </div>

    return(
        <div className={Styles.Container}>
          <div className={Styles.List.Title}>
            <h1>Contact List</h1>
          </div>
          <div className={Styles.List.Container}>
          {contacts}
          </div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    contactList: state.contact.contactList
});

const mapDispatchToProps = {
    getContactList: getContactList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);