import React from 'react'
import axios from "axios"
import "./AddGoal.css"
import { useState, useEffect } from 'react'
import toast, {Toaster} from "react-hot-toast"


function AddGoal() {
    const [user, setUser] = useState('')
    const [goal, setGoal] = useState('')
    const [description, setDescription] = useState('')

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
        <div className='login-main-div'>
            <div className="login-container">
                <h2 >Add Goal {user.fullName}</h2>

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
                       
                        className='login-button'
                    >
                        Add
                    </button>
                </form>

                <Toaster />
            </div>
        </div>
    )
}

export default AddGoal