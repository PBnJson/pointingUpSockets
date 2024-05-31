const express = require('express');
const { createServer } = require("node:http");
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://pointing-up-test.com"
    }
});

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: "ok" })
});

app.post("/points/receive", async (req, res) => {
    console.log("Received points: ", req.body);

    1
    2
    3
    4
    5
    io.emit("points_received", {
        students: req.body.awarded_to_students
    })

    res.json({ success: true })
})

app.post("/store/item/purchase", async (req, res) => {
    console.log("Received purchased item: ", req.body);
    io.emit("purchase_item", {
        student: {
            id: "123"
        },
        shop: {
            id: "999"
        },
        item: {
            id: "456"
        }
    })

    1
    res.json({ success: true })
})

io.on('connection', (socket) => {
    console.log('a user connected');
});

server.listen(5003, () => {
    console.log('server running at http://localhost:5003');
});