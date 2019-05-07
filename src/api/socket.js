import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3001");

function receiveMsg(cb) {
    socket.on("receive-msg", msg => {
        cb(msg);
    });
}

function sendMsg(msg) {
    socket.emit("send-msg", msg);
}

export { receiveMsg, sendMsg };
