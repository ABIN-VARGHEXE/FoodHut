import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Services from '../../Components/Services/Services'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'

const Home = () => {
        const [category, SetCategory] = React.useState("All")
  return (
    <div>
        <Header />
        <Menu />
        <Services />
        <ExploreMenu category={category} SetCategory={SetCategory}  />
    </div>
  )
}

export default Home