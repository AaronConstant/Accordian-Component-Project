import React from 'react'
import { useState } from 'react'
import './Accordian.scss'
// single selection 
const Accordian = ({ data }) => {

const [selected, setSelected] = useState(null);


  return (

    <div className="wrapper">
        <div className='accordian'>
          {
            data && data.length > 0 ? 
            data.map(dataItem => {

              return (
                <div className='accordian__item'>
                  <h3 className='title'> { dataItem.question } </h3>
                  <span>+</span>
                </div>
              )}) : 
            <div>GoodBye</div>
          }
        

        </div>


    </div>
  )
}

export default Accordian