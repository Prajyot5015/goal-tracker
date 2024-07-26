import React, { useState, useEffect } from 'react'
import "./Home.css"

function Home() {
  const [user, setUser] = useState('')

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if (currentUser) {
      setUser(currentUser)
    }

    if (!currentUser) {
      window.location.href = '/login'
    }
  }, [])

  return (
    <div>
      <h1> Hello {user.fullName} </h1>
    </div>
  )
}

export default Home