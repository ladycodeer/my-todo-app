import React from 'react'
const style = {

}

function Todo() {
    return (
        <li className={style.li}>
            <div className='style.row'>
                <input type="checkbox" />
                <p className='style.text' >{todo}</p>
            </div>
        </li>
    )
}

export default Todo