//Actions

//Add new contact
export const addContact = (contact) => ({
        type: "CREATE_CONTACT",
        payload: contact
})

//get an existing contact
export const getContact = (id) => ({
    type: "GET_CONTACT",
    payload: id
})

//update a contact
export const updateContact = (updateCont) => ({
    type: "UPDATE_CONTACT",
    payload: updateCont
})

//Deleting a contact
export const deleteContact = (id) => ({
    type: "DELETE_CONTACT",
    payload: id
})
