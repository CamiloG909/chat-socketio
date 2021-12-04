const express = require("express");
const app = express();

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

server.listen(4000, () => {
	console.log("listening on port 4000");
});
