function UserAuth(req, res, next){
  console.log('inside middleware');
  next();
}

module.exports = UserAuth;