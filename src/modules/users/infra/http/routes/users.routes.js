"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer")); //upload files
var upload_1 = __importDefault(require("@config/upload"));
var celebrate_1 = require("celebrate");
var UsersController_1 = __importDefault(require("../controllers/UsersController"));
var UserAvatarController_1 = __importDefault(require("../controllers/UserAvatarController"));
//verify if user are authenticated
var ensureAuthenticated_1 = __importDefault(require("../middlewares/ensureAuthenticated"));
var usersRouter = express_1.Router();
var usersController = new UsersController_1.default();
var userAvatarController = new UserAvatarController_1.default();
var upload = multer_1.default(upload_1.default.multer);
usersRouter.post('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().email().required(),
        password: celebrate_1.Joi.string().required(),
    },
    _a)), usersController.create);
// using ensureauthenticated
usersRouter.patch('/avatar', ensureAuthenticated_1.default, upload.single('avatar'), userAvatarController.update);
exports.default = usersRouter;
