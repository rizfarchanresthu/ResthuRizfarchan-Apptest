
import Styles from '../../../styles/styles';
import React, {useEffect, useState} from 'react'
import { getContactDetail } from '../../../redux/action/contactAction';
import {connect} from 'react-redux';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';

const ContactDetail = (props) => {
    const router = useRouter();
    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async() => {
      let res = await fetch(`https://simple-contact-crud.herokuapp.com/contact/${props.id}`)
      if(res.status === 200){
        const result = await res.json()
        props.getContactDetail(result.data)
      }else{
        const result = await res.json()
      }
    }

    const handleDelete = async() => {
        let res = await fetch(`https://simple-contact-crud.herokuapp.com/contact/${props.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).catch(e => console.log("error: ",e))
        if(res.status === 200){
            const result = await res.json()
            console.log(result)
            alert(result.message)
            router.push('/')
          }else{
            const result = await res.json()
            console.log(result)
            alert("Error deleting contact")
          }
    }

    const contact = props.contactDetail ? (
      <div className={Styles.List.ContainerContact}>
        <div className={Styles.List.ContainerPhoto}>
          <img className={Styles.List.Photo} src={props.contactDetail .photo} onError={(e)=>{e.target.onerror = null; e.target.src="/no-image.jpeg"}} alt={`${props.contactDetail .firstName}`} ></img>
        </div>
        <div className={Styles.List.ContainerName}>
          <p className={Styles.List.Name}>Name:  {props.contactDetail.firstName} {props.contactDetail.lastName}</p>
        </div>
        <div className={Styles.List.ContainerName}>
          <p className={Styles.List.Name}>Age: {props.contactDetail.age}</p>
        </div>
        <div className={Styles.List.ContainerName}>
            <Link href={`/contact/${props.id}/edit`}><a className={Styles.Button.ButtonDetail}>Edit &gt;&gt;</a></Link>
            <div onClick={handleDelete} className={Styles.Button.ButtonDelete}>Delete</div>
        </div>
      </div>
    ) : <div className={Styles.List.ContainerContact}>
      No Detail
    </div>

    return(
        <div className={Styles.Container}>
          <div className={Styles.List.Title}>
            <h1>Contact Detail</h1>
          </div>
          <div className={Styles.List.Container}>
          {contact}
          </div>
            
        </div>
    )
}
export const getServerSideProps = (context) => {
    return {
        props: {
            id: context.query.id
        }
    }
}
const mapStateToProps = (state) => ({
    contactDetail: state.contact.contactDetail
});

const mapDispatchToProps = {
    getContactDetail: getContactDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetail);