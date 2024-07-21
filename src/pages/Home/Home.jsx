import React from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import Services from '../../Components/Services/Services'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import Banner from '../../Components/Banner/Banner'

const Home = () => {
        const [category, SetCategory] = React.useState("All")
  return (
    <div>
        <Header />
        <Menu />
        <Services />
        <ExploreMenu category={category} SetCategory={SetCategory}  />
        <Banner />
    </div>
  )
}

export default Home