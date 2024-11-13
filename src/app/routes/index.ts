import { bookRoutes } from "../modules/book/book.routes";
import express from "express";
import { memberRoutes } from "../modules/member/member.routes";


const router = express.Router();
const moduleRoutes = [
    {
        path: '/books',
        route: bookRoutes
    },
    {
        path: '/members',
        route: memberRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;