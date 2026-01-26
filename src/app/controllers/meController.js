import Course from "../models/Course.js";

class MeController {
    // [GET] /me/stored-courses
    async index(req, res, next) {
        try {
            const courses = await Course.find({}).lean();
            res.render("me/stored-courses", { courses });
        } catch (error) {
            next(error);
        }
    }

    // [GET] /me/restored-courses
    async restore(req, res, next) {
        try {
            const courses = await Course.findDeleted({}).lean();
            res.render("me/restored-courses", { courses });
        } catch (error) {
            next(error);
        }
    }
}

export default new MeController();
