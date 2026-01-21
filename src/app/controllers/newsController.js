class NewsController {
    // [GET] /news
    index(req, res) {
        res.render("news");
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send("Biết bố mày là ai không?");
    }
}

export default new NewsController();
