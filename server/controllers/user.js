import User from "../models/User.js";

const postSignup = async (req, res) => {
    const { fullName, email, password} = req.body;

    const user = new User({
        fullName,
        email,
        password
    });

    try {
        const savedUser = await user.save();

        res.json({
            success: true,
            message: `Signup Successfully`,
            data: savedUser
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

const postLogin = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email: email,
        password: password
    });

    if (user) {
        return res.json({
            success: true,
            message: "Login Successfully",
            data: user
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid credentials",
            data: null
        })
    }
}

export { postSignup, postLogin }