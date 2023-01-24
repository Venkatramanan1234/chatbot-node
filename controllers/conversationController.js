exports.conversation = async(req, res) => {
    const {user_id} = req.body;

    const conversation = new coversation({user_id});

    await conversation.save()

    res.json({
        message: "Your respective [" + res.conversation_id + "] ",
    })

}