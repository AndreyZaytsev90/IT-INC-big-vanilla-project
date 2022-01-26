import React from 'react'


export const User = () => {

    const deleteUser = () => {
        alert("user should be deleted")
    }

    const saveUser = () => {
        alert("user should be saved")
    }


    return <div>Andrey
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>

}

