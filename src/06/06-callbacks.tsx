import React, {ChangeEvent, MouseEvent} from "react";
import cs from './06.module.css'
/*const callback=(): number=>{
    alert('hi')
    return 12;
}

window.setTimeout(callback, 1000)*/
//при передаче callback () круглые
// скобки не ставим иначе функция вызывается по умолчанию

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('name changed')
    }

    const focusLostHandler = () => {
        console.log('focus lost')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('ageChanged: ' + event.currentTarget.value)
    }

    return <div><textarea onBlur={focusLostHandler}>User</textarea>
        <input type={"number"} onChange={onAgeChanged}/>
        <button name='delete' className={cs.btn} onClick={deleteUser}>SEARCH</button>
        <button name='save' className={cs.btn} onClick={deleteUser}>S</button>
        {/*<div className={cs.divBtn} onClick={deleteUser}>DEL</div>
        <div className={cs.divBtn} onClick={saveUsers}>SAVE</div>*/}
    </div>
}