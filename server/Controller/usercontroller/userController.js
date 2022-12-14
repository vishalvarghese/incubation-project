const app = require("../../app");
const User = require("../../modal/userschema")
const application = require("../../modal/applicationSchema")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

//storing the data from signup form
const postSignup = async (req, res) => {
    try {
        console.log({ ...req.body });
        let { name, email, password } = req.body
        password = await bcrypt.hash(password, 10)

        const user = await new User({
            name,
            email,
            password
        })
        await user.save()
        res.status(200).json({ res: user })
    } catch (error) {
        console.log(error.message);
    }

}

//login and jwt token generated
const login = async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.json({ error: "User not found" })
    }
    else {
        const auth = await bcrypt.compare(password, user.password);
        console.log(auth, "klklk");
        if (auth) {
            console.log("entered");
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET)
            console.log(token);
            if (res.status(201)) {
                console.log('hai');
                return res.json({ state: "ok", data: token })
            } else {
                console.log('hello');
                return res.json({ error: "error" });
            }
        }
        else {
            return res.json({ status: "error", error: "Invalid Password" })
        }
    }
}

const applicationsave = async (req, res) => {
    // let data= req.body
    console.log(req.body);
    try {
        let { name, Address, City, Phonenumber, Email, businessDetail } = req.body
        const Application = await new application({
            name,
            Address,
            City,
            Phonenumber,
            Email,
            businessDetail
        })
        console.log(Application);
        await Application.save()
        res.json({ msg: "Application submited" })
    } catch (error) {
        console.log(error.message);
    }
}

const homepage = (req, res) => {
    res.json({ status: 'ok' })
}
module.exports = { postSignup, applicationsave, login, homepage }