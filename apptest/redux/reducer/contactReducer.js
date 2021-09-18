const INITIAL_STATE = {
    contactList: [],
    contactDetail: null
}

export default (state, action) => {
    if (typeof state === 'undefined') {
      return INITIAL_STATE
    }
    switch (action.type) {
        case "GET_CONTACT_LIST": 
            return { ...state, contactList: action.payload}
        case "GET_CONTACT_DETAIL": 
            return { ...state, contactDetail: action.payload}
        case "EDIT_CONTACT": 
            return { ...state, contactDetail: action.payload}
        case "ADD_CONTACT": 
            return { ...state, contactDetail: action.payload}
        case "DELETE_CONTACT": 
            return { ...state, contactDetail: action.payload}
    }
}