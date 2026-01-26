import { log } from "console";
import Course from "../models/Course.js";

class CoursesController {
    // [GET] /courses
    async index(req, res, next) {
        try {
            const courses = await Course.find({}).lean();

            if (courses.length) {
                res.render("courses/courses", { courses });
            } else {
                res.json({ message: "Empty!!!" });
            }
        } catch (error) {
            next(error);
        }
    }

    // [GET] /courses/:slug
    async show(req, res, next) {
        try {
            const { slug } = req.params;
            const course = await Course.findOne({ slug }).lean();

            res.render("courses/course-detail", { course });
        } catch (error) {
            next(error);
        }
    }

    // [GET] /courses/create
    create(req, res) {
        res.render("courses/create");
    }

    // [POST] /courses/store
    async store(req, res, next) {
        try {
            const payload = req.body;
            const course = new Course(payload);
            await course.save();
            res.redirect("/courses");
        } catch (error) {
            console.log("Thất bại!!!");
            next(error);
        }
    }

    // [GET] /courses/:id/edit
    async edit(req, res, next) {
        try {
            const id = req.params.id;
            const currentCourse = await Course.findById(id).lean();
            res.render("courses/edit", { course: currentCourse });
        } catch (error) {
            next(error);
        }
    }

    // [PUT] /courses/:id
    async update(req, res, next) {
        try {
            const payload = req.body;
            const id = req.params.id;

            const course = await Course.findById(id);
            course.set(payload);
            await course.save();
            res.redirect("/me/stored-courses");
        } catch (error) {
            next(error);
        }
    }

    // [PATCH] /courses/:id/restore
    async restore(req, res, next) {
        try {
            const id = req.params.id;
            await Course.restore({_id: id});
            res.redirect("/me/stored-courses");
        } catch (error) {
            next(error);
        }
    }

    // [DELETE] /courses/:id
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            await Course.delete({_id: id});
            res.redirect("/me/stored-courses");
        } catch (error) {
            next(error);
        }
    }

     // [DELETE] /courses/:id/force
    async deleteForce(req, res, next) {
        try {
            const id = req.params.id;
            await Course.deleteOne({_id: id});
            res.redirect("/me/restored-courses");
        } catch (error) {
            next(error);
        }
    }
}

export default new CoursesController();
