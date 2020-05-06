import React, { useState, useEffect } from 'react'
import {
  CtPaginationWrapper
} from './style'
function CtPagination(props) {
  const [current, setCurrent] = useState(1)
  const { total = 1, pageSize = 1, pageChange={} } = props;
  let totalPage = Math.ceil(total / pageSize)

  useEffect(() => {
    pageChange(current)
  }, [current]);

  function handlePrevious() {
    if (current > 1) {
      setCurrent(current - 1)
    }
  }
  function handleNext() {
    if (current < totalPage) {
      setCurrent(current + 1)
    }
  }
  return (
    <CtPaginationWrapper>
      <div className={`page-btn-active ${current <= 1 ? 'page-btn-inactive' : ''}`} onClick={handlePrevious}>Previous</div>
      {
        [...Array(totalPage).keys()].length ? [...Array(totalPage).keys()].map((item) => {
          return <div
                  className={`page-num ${current === item + 1 ? 'page-num-active' : ''}`}
                  onClick={() => setCurrent(item + 1)}
                  key={item}
                >
                  {item + 1}
                </div>
        }) :
        <div
          className={`page-num page-num-active`}
          key={1}
        >
          {1}
        </div>
      }
      <div className={`page-btn-active ${current >= totalPage ? 'page-btn-inactive' : ''}`} onClick={handleNext}>Next</div>
    </CtPaginationWrapper>
  )
}
export default CtPagination;