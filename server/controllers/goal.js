import Goal from './../models/Goal.js'
import User from '../models/User.js';


const postGoal = async (req, res) => {
    const { goal, description } = req.body;

    const addGoal = new Goal({
        goal,
        description
    })

    try {
        const savedGoal = await addGoal.save();

        res.json({
            success: true,
            message: `Goal Added  Successfully`,
            data: savedGoal
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
}


const getGoal = async (req, res) => {
    // const { userId } = req.query

    // const user = await User.findById(userId)

    // if(!user){
    //     return  res.json({
    //         success: false,
    //         message: `User Not Found`,
    //         data: null
    //     })
    // }

    // const goals = await Goal.find({ user: userId }).sort({createdAt: -1})

    const goals = await Goal.find().sort({ createdAt: -1 })

    res.json({
        success: true,
        message: `Goals Fetched Successfully`,
        data: goals
    })
}


const putGoal = async (req, res) => {
    const {
        goal,
        description } = req.body

    const { id } = req.params

    await Goal.updateOne({ _id: id },
        {
            $set: {
                goal: goal,
                description: description
            }
        })

    const updatedGoal = await Goal.findById(id)

    res.json({
        success: true,
        message: "Goal Updated Successfully",
        data: updatedGoal
    })
}

const deleteGoal = async (req, res) => {
    const { id } = req.params;

    await Goal.deleteOne({ _id: id })

    return res.json({
        success: true,
        message: `Goal Deleted Successfully`,
        data: null
    })
}

export { postGoal, deleteGoal, getGoal,putGoal }