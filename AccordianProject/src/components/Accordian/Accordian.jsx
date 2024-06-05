import React from 'react'
import { useState } from 'react'
import './Accordian.scss'
// single selection 
const Accordian = ({ data }) => {

const [selected, setSelected] = useState(null);

const handleSingleSelection = (e) => {

  // neat way to apply an show/unshow functionality to a button/onclick !!!!
    setSelected( e === selected ? null : e )
}


  return (

    <div className="wrapper">
        <div className='accordian'>
          {
            data && data.length > 0 ? 
            data.map(dataItem => {

              return (
                <div className='accordian__item' key={ dataItem.id }>
                  <div>
                  <h3 className='title'onClick={ () => handleSingleSelection(dataItem.id) } > { dataItem.question } </h3>
                  <span>+</span>
                  {
                    selected === dataItem.id ? 
                    <div className='content'>{ dataItem.answer }</div> 
                    : null
                  }
                  </div>
                </div>
              )}) : 
            <div>GoodBye</div>
          }
        

        </div>


    </div>
  )
}

export default Accordian