import React from 'react'


export const User = () => {

    const deleteUser = () => {
        alert("user should be deleted")
    }

    const saveUser = () => {
        alert("user should be saved")
    }


    return <div>Andrey
        <div onClick={deleteUser}>delete</div>
        <button onClick={saveUser}>save</button>
    </div>

}

