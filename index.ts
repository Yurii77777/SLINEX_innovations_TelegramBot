/**
 * Made by Yurets in UA!
 * Copyright (c) GPL License <2021-2023> <Yurii Andriiko>
 * Telegram @Yurets7777 E-mail: yuretshome@gmail.com
 * "Роби добре, та тільки добре! А можеш? - Роби краще!"
 */
import express, { Express, Request, Response } from "express";
import bodyParser = require("body-parser");
import cors = require("cors");

import { connect } from "./config/db.config";
import { handleEvents } from "./app";

import { getProducts } from "./routes/getProducts.routes";

const app: Express = express();
const PORT: number = Number(process.env["PORT"]) || 5000;

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(
    "/api/get-products",
    async (req: Request, res: Response): Promise<any> => {
        getProducts(req, res);
    }
);

const start = async (): Promise<any> => {
    try {
        // Connect to MongoDB
        connect();

        // Start Epxress
        app.listen(PORT, () =>
            console.log(`App has been started on port ${PORT} `)
        );

        // Start Telegram Bot
        await handleEvents();
    } catch (error) {
        console.log("The Slinex Bot has not been launched :::", error.message);
    }
};

start();
