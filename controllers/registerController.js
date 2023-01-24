
exports.register = async(req, res) => {
    const {name, email} = req.body;

    const emailRegex = /[@gmail.com|@hotmail.com|@yahoo.com|@live.com]$/;

    if(!emailRegex.test(email)) throw "Invalid Email Address";

    const registerUser = new RegisterUser({name, email});

    await registerUser.save()

    res.json({
        message: "USER [" + name + "] registered successfully!",
        user_id: "Your user id is["+ res.user_id + "]"
    })

}