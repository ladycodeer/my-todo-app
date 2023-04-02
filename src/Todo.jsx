import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 capitalize`,
    row: `flex`,
    text: `ml-2 cursor-pointer `,
    textComplete: ` ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
}

function Todo({ todo }) {
    return (
        <li className={style.li}>
            <div className='style.row'>
                <input type="checkbox" />
                <p className='style.text' >{todo}</p>
            </div>
            <button className={style.button}>{<FaRegTrashAlt />}</button>
            <button className='style.textComplete'></button>
            <h1 ></h1>
        </li>
    )
}

export default Todo