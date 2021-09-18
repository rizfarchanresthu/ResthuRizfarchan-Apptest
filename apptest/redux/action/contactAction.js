export const getContactList = (data) => {
    return {
        type: "GET_CONTACT_LIST",
        payload: data
    }
}

export const getContactDetail = (data) => {
    return {
        type: "GET_CONTACT_DETAIL",
        payload: data
    }
}

export const editContact = (data) => {
    return {
        type: "EDIT_CONTACT",
        payload: data
    }
}

export const addContact = (data) => {
    return {
        type: "ADD_CONTACT",
        payload: data
    }
}

export const deleteContact = (data) => {
    return {
        type: "DELETE_CONTACT",
        payload: data
    }
}