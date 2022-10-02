const express = require("express");
const app = express();
require("dotenv").config();

const path = require("path");

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
	socket.on("sendMessage", (msg) => {
		io.emit("sendMessage", msg);
	});
});

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

app.use(express.static(path.resolve(__dirname, "../styles")));

const PORT = process.env.PORT || 4000;

server.listen(PORT, "0.0.0.0", () => {
	console.log("listening on port " + PORT);
});
