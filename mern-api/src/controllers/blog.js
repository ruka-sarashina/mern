exports.createBlogPost = (req, res, next) => {
    const title = req.body.title
    // const iamge = req.body.image
    const body = req.body.body

    const result = {
        message: "Create blog succes",
        data: {
            post_id: 1,
            title: title,
            // image: "imagefile.png",
            body: body,
            created_at: "09/09/09",
            author: {
                uid: 1,
                name: "testing"
            }
        }
    }
    res.status(201).json(result);
}