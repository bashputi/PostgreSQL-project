"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_routes_1 = require("../modules/book/book.routes");
const express_1 = __importDefault(require("express"));
const member_routes_1 = require("../modules/member/member.routes");
const borrow_route_1 = require("../modules/borrow/borrow.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/books',
        route: book_routes_1.bookRoutes
    },
    {
        path: '/members',
        route: member_routes_1.memberRoutes
    },
    {
        path: '/',
        route: borrow_route_1.borrowRoutes
    }
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
