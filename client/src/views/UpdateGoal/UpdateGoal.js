import React, { useState } from 'react'
import "./UpdateGoal.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
// import { Link } from 'react-router-dom'

function UpdateGoal() {
    const { id } = useParams()

    const [goal, setGoal] = useState("")
    const [description, setDescription] = useState("")

    const updateGoal = async () => {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/goal/${id}`, {
            goal: goal,
            description: description
        })

        toast.success(response.data.message)
        setGoal("")
        setDescription("")

        setTimeout(() => {
            window.location.href = '/'
        }, 2000)
    }

  
    return (
        <div className='login-main-div'>
            <div className="login-container">
                <h2 >Update Goal</h2>

                <form >
                    <input
                        type='text'
                        placeholder='Goal'
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button
                        type='button'
                        onClick={updateGoal}
                        className='login-button'
                    >
                        Update
                    </button>
                </form>

                <Toaster />
            </div>
        </div>
    )
}

export default UpdateGoal