// const helloMiddleware = (req, res, next) => {
//   if (req.session) {
//     res.locals.user_id = req.session.user_id; // если в сессии есть name то его записываем в res.locals.username чтобы все hbs его видели
//     res.locals.name = req.session.name;
//   }
//   next();
//   // console.log(res.locals.name, req.session.name);
// };

const helloMiddleware = (req, res, next) => {
  res.locals.name = req.session?.name;
  res.locals.user_id = req.session?.user_id;
  // res.locals.roleId =
  next();
};

// const checkAdmin = (res, req, next) => {
//   // res.locals.role_id = 1
//   // console.log(res.locals.role_id);
//   if (res.session.role_id === 1) {
//     next();
//   } else {
//     // res.redirect('/')
//     alert('pain');
//   }
// };
// const admin
module.exports = {
  helloMiddleware,
  // checkAdmin,
};

// const welcomeUser = (req, res, next) => {
//   res.locals.userId = req.session?.userId
//   if(req.session){
//       res.locals.userName = req.session.userName
//   }
//   next()
// }
