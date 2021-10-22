"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessEditPage = exports.DisplayEditPage = exports.DisplayContactListPage = exports.ProcessAddPage = exports.DisplayAddPage = void 0;
const contact_1 = __importDefault(require("../models/contact"));
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add Contact', page: 'contact/contact-add', item: '' });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessAddPage(req, res, next) {
    let newItem = new contact_1.default({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });
    contact_1.default.create(newItem, function (err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        res.redirect('/contact/list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function DisplayContactListPage(req, res, next) {
    contact_1.default.find(function (err, contactCollection) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        res.render('index', { title: 'Contact List', page: '/contact/contact-list', collection: contactCollection });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, {}, {}, function (err, contactItemToEdit) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        console.log(contactItemToEdit);
        res.render('index', { title: 'Contact Edit', page: '/contact/contact-edit', item: contactItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedItem = new contact_1.default({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "emailAddress": req.body.emailAddress
    });
    contact_1.default.updateOne({ _id: id }, updatedItem, {}, function (err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        res.redirect('/contact/list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        res.redirect('/contact/list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact.js.map