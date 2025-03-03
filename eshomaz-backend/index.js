"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./config/db");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const user_routes_1 = __importDefault(require("./routes/user-routes"));
const post_routes_1 = __importDefault(require("./routes/post-routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
//Routes
app.use('/users', user_routes_1.default);
app.use('/posts', post_routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello eShomaz');
});
(0, db_1.connectDB)().then(() => {
    app.listen(PORT, () => {
        console.log(`node server running on port ${PORT}`);
    });
});
