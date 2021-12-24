/* Chat methods */
let socket = io("http://localhost:3030");

  socket.on('disconnect', () => {
    console.log('disconnected!');
  });

  socket.on('showMessage', data => {
    let user = localStorage.getItem('username');
    let messageBackground = data.username === user ? 'my-msg' : 'another-msg';

    let chat = document.getElementById("chat");
    let message = document.getElementById("chat").innerHTML;
    message += `<div class="${messageBackground} animate__animated animate__headShake">
    <h5>${data.username}</h5>
    <p>${data.msg}</p>
    </div>`;

    chat.innerHTML = message;
    chat.scrollTo(0, document.body.scrollHeight);
  });

  function sendMessage(){
    let username = localStorage.getItem('username');
    let message = document.getElementById("message").value;
    socket.emit("message", {msg: message, username});

    document.getElementById('message').value = '';
  }



