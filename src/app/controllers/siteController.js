import Course from "../models/Course.js";

class SiteController {
    // [GET] /
    async index(req, res, next) {
        try {
            const courses = await Course.find({}).lean();

            if (courses.length) {
                res.render("home", { courses });
            } else {
                res.json({ message: "Empty!!!" });
            }
        } catch (error) {
            next(error);
        }
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }
}

export default new SiteController();
