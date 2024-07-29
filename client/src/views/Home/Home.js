import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ImgAdd from "./add.png"
import toast, { Toaster } from 'react-hot-toast'
import "./Home.css"
import GoalCard from './../../components/GoalCard/GoalCard'

function Home() {
  const [user, setUser] = useState('')
  const [goals, setGoal] = useState([])

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if (currentUser) {
      setUser(currentUser)
    }

    if (!currentUser) {
      window.location.href = '/login'
    }
  }, [])

  const loadGoals = async () => {
    if (!user._id) {
      return
    }
    toast.loading('Loading transactions...')

    const response = await axios.get(`${process.env.REACT_APP_API_URL}/goals`)

    const allgoals = response.data.data
    toast.dismiss()

    setGoal(allgoals)
  }

  useEffect(() => {
    loadGoals()
  }, [user])


  return (
    <div>
      <h1 className='user-name-title'> Hello {user.fullName} </h1>
      <h2 className='home-heading'>Welcome to the Goal Tracker</h2>

      <span className='logout-btn' onClick={() => {
        localStorage.clear()
        toast.success('Logged out successfully')

        setTimeout(() => {
          window.location.href = '/login'
        }, 3000)
      }}>
        Logout
      </span>

      <div className='goal-container'>
        {
          goals.map((transaction) => {
            const { _id,goal, description, createdAt } = transaction

            return (<GoalCard
              key={_id}
              _id={_id}
              goal={goal}
              description={description}
              createdAt={createdAt}
              loadGoals={loadGoals}
            />)
          })
        }
        <Link to='/add-goal'>
          <img src={ImgAdd} alt='Add Transaction' className='add-btn' />
        </Link>
      </div>

      <Toaster />
    </div>
  )
}

export default Home