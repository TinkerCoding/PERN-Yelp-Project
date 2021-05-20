import React from 'react'
import Header from '../components/Header'
import AddRestaurants from '../components/AddRestaurants'
import RestaurantsList from '../components/RestaurantsList'

const Home = () => {
    return (
        <div>
            <Header/>
            <AddRestaurants/>
            <RestaurantsList/>
        </div>
    )
}

export default Home
