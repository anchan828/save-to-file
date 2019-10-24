"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
function save(text, file, encoding) {
    return __awaiter(this, void 0, void 0, function* () {
        const dir = path_1.dirname(file);
        if (!fs_1.existsSync(dir)) {
            fs_1.mkdirSync(dir, { recursive: true });
        }
        fs_1.writeFileSync(file, text, encoding);
    });
}
exports.save = save;
