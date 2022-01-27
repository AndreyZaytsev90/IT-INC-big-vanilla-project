import React, {ChangeEvent, MouseEvent} from 'react'


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        //event.currentTarget.name
        alert(event.currentTarget.name)
    }

   /* const saveUser = () => {
        alert("user should be saved")
    }*/

    const onNameChanged = () => {
        console.log("name changed")
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }


    return <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Andrey</textarea>
        <input onChange={onAgeChanged} type={"number"}/>
        <button name="delete" tabIndex={3} onClick={deleteUser}>delete</button>
    </div>

}

