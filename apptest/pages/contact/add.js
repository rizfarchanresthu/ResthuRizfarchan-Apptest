import React, {useEffect, useState} from 'react'
import { addContact } from '../../redux/action/contactAction';
import {connect} from 'react-redux';
import Styles from '../../styles/styles';
import { useRouter } from 'next/dist/client/router';

function validate(firstName, lastName, age) {
    return {
        firstName: !firstName.match(new RegExp(/^[a-zA-Z\s.,]{3,}$/)),
        lastName: !lastName.match(new RegExp(/^[a-zA-Z\s.,]{3,}$/)),
        age: !age.match(new RegExp(/^[0-9]*$/))
    };
}

const ContactAdd = (props) => {
    
    useEffect(() => {

    }, [])
    const router = useRouter()
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        age: '',
        photo: ''
    });
    const [isLoading, setIsLoading] = useState(false)
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    let validated = validate(state.firstName, state.lastName, state.age)
    let isDisabled = Object.keys(validated).some((x) => validated[x])

    const submitForm = async () => {
        setIsLoading(true)
        let res = await fetch('https://simple-contact-crud.herokuapp.com/contact',{
            method: "POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json"
            }
        }).catch(e => console.log("error: ",e))

        if(res.status === 201){
            const result = await res.json()
            alert(result.message)
            router.push('/')
          }else{
            const result = await res.json()
            alert('Error adding contact. Redirected to home')
            router.push('/')
          }
        setIsLoading(false)
    }
    
    return(
        <div className={Styles.Container}>
            <div className={Styles.List.Title}>
            <h1>Add New Contact</h1>
          </div>
            <div className={Styles.Add.ContainerForm}>
                <form className={Styles.Add.Form} onSubmit={submitForm}>
                    <div className={Styles.Add.InputContainer}>
                        <label className={Styles.Add.Label} htmlFor="firstName">First Name</label>
                        <input className={Styles.Add.Input} id="firstName" name="firstName" value={state.firstName} type="text" placeholder="Minimum 3 characters" onChange={handleChange}></input>
                    </div>
                    <div className={Styles.Add.InputContainer}>
                        <label className={Styles.Add.Label} htmlFor="lastName">Last Name</label>
                        <input className={Styles.Add.Input} name="lastName" value={state.lastName} type="text" placeholder="Minimum 3 characters" onChange={handleChange}></input>
                    </div>
                    <div className={Styles.Add.InputContainer}>
                        <label className={Styles.Add.Label} htmlFor="age">Age</label>
                        <input className={Styles.Add.Input} name="age" value={state.age} type="text" placeholder="Between 1 and 100" onChange={handleChange}></input>
                    </div>
                    <div className={Styles.Add.InputContainer}>
                        <label className={Styles.Add.Label} htmlFor="photo">Photo URL</label>
                        <input className={Styles.Add.Input} name="photo" value={state.photo} type="text" placeholder="Minimum 1 characters" onChange={handleChange}></input>
                    </div>
                    <button disabled={isDisabled} className={isDisabled ? Styles.Button.ButtonAddDisabled : Styles.Button.ButtonAdd} type="button" onClick={submitForm}>{isLoading ? 'Loading' : "Submit"}</button>
                    {isDisabled ? <div style={{color: 'red', fontSize: 12}}>Input contains invalid arguments</div> : null}
                </form>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    contactList: state.contact.contactList,
    contactDetail: state.contact.contactDetail
});

const mapDispatchToProps = {
    addContact: addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactAdd);