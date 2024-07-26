import Goal from './../models/Goal.js'


const postGoal = async (req,res)=>{
    const {goal, description} = req.body;

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


export {postGoal}