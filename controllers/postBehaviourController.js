exports.postBehaviour = async(req, res) => {
    const {user_id} = req.body;

    const postBehaviour = new postBehaviour({user_id});

    await postBehaviour.save()

    res.json({
        message: "Your respective [" + res.conversation_id + "] ",
    })

}