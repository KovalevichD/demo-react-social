import React, { useState } from 'react';
import style from './Paginator.module.css'

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const arrOfPages = [];

    for (let page = 1; page <= pagesCount; page++) {
        arrOfPages.push(page);
    }
    const [portionNumber, setPortionNumber] = useState(1)
    const portionsCount = Math.ceil(pagesCount / props.portionSize);
    const leftBorderPortion = (portionNumber - 1) * props.portionSize + 1;
    const rightBorderPortion = portionNumber * props.portionSize;

    return (
        <div className={style.container}>
            {portionNumber <= 1 ? null : <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

            {arrOfPages.filter(p => p >= leftBorderPortion && p <= rightBorderPortion).map(p => {
                return <span className={p === props.currentPage ? style.activePage : style.numberPage} onClick={(e) => { props.onPageChenged(p) }}>{p}</span>
            })}

            {portionNumber >= portionsCount ? null : <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
        </div>
    )
}

export default Paginator;