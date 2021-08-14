import style from "../Users.module.css";
import React, {useState} from "react";
import nextPages from '../next.png'
import prevPages from '../prev.png'

type PaginatorPropsType = {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  //
  let portionSize = 10

  let portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize


  return <div className={style.pagination}>
    {
      portionNumber >= 1 && <img src={prevPages} alt=''
                                 onClick={() => setPortionNumber(portionNumber - 1)}/>
    }

    {
      pages
          .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map(page => {
            return <span
                className={props.currentPage === page ? style.selectedPage : ''}
                onClick={(event) => {
                  props.onPageChanged(page)
                }}>
            {page}</span>
          })
    }

    {
      portionCount > portionNumber && <img src={nextPages} alt=''
                                           onClick={() => setPortionNumber(portionNumber + 1)}/>
    }
  </div>
}
