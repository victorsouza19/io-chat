const express = require('express'),
app = express(),
http = require('http').createServer(app),
io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log(`${socket.id} disconnected.`);
  });

  socket.on('connected', () => {
    console.log(`${socket.id} connected.`);
  });

  socket.on('word', data => {
    console.log(data);
    socket.emit('result', data.message + ' - Thank you!')
  });
});


app.set('view engine', 'ejs');

app.get("/", (req,res) => {
  res.render("index");
});


http.listen(3030, () => {
  console.log("App running.");
});