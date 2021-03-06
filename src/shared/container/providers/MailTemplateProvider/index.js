"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var HandlebarsMailTemplateProvider_1 = __importDefault(require("./implementations/HandlebarsMailTemplateProvider"));
var providers = {
    handlebars: HandlebarsMailTemplateProvider_1.default,
};
//a kind of singleton
tsyringe_1.container.registerSingleton('MailTemplateProvider', providers.handlebars);
