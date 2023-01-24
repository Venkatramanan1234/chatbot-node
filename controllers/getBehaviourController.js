exports.getBehaviour = async(req, res) => {
    const {user_id} = req.body;

    const getBehaviour = new getBehaviour({user_id});

    await getBehaviour.get()

    res.json({
        message: "Your respective [" + res.conversation_id + "] ",
    })

}