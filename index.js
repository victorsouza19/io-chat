const express = require('express'),
app = express(),
http = require('http').createServer(app),
io = require('socket.io')(http),
UserAuth = require('./middleware/UserAuth');

io.on('connection', (socket) => {

  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected.`);
  });

  socket.on("message", data => {
    io.emit("showMessage", data);
    // console.log(data);
  });

});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req,res) => {
  res.render("login");
});

app.get("/chat", UserAuth, (req,res) => {
  res.render("index");
});


http.listen(3030, () => {
  console.log("App running.");
});