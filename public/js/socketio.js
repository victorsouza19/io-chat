/* Chat methods */
let socket = io("http://localhost:3030");

  socket.on('disconnect', () => {
    console.log('disconnected!');
  });

  socket.on('showMessage', data => {
    console.log(data);
    let chat = document.getElementById("chat");
    let p = document.createElement('p');
    p.innerHTML = `${data.username}: ${data.msg}`;
    chat.append(p);
  });

  function sendMessage(){
    let username = document.getElementById("username").value;
    let message = document.getElementById("message").value;
    socket.emit("message", {msg: message, username});
  }



