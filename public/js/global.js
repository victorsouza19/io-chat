/* login method */
function login(){
  username = document.getElementById('username').value;

  localStorage.setItem('username', username);
  return window.location.href="/chat";
}

function logout(){
  localStorage.removeItem('username');
  return window.location.href="/";
}




