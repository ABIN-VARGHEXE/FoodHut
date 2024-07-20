import React from 'react'
import './Menu.css'
import Cards from '../Cards/Cards'
import { daily_list } from '../../utils'
const Menu = () => {
  return (
    <div className='menu' id='menu'>
      <h1>Today <span className='word-colour-1'>special</span> offers</h1>
      <p className='descripation'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <div className="menu-list">
        {daily_list.map((daily_list) => {
          return (
            <Cards
              key={daily_list.id}
              name={daily_list.name}
              price={daily_list.price}
              description={daily_list.description}
              image={daily_list.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu

