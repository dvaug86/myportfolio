// //custom error handling
// import * as passport from 'passport';
// import { Request, Response, NextFunction } from 'express';



// //express middleware
// export function tokenCheck (req: Request, res: Response, next: NextFunction){
//     passport.authenticate('jwt',  (err, user, info) => {
//         if(err){
//             return next(err)
//         }
//         if(info){
//             return res.status(401).json({message: info.message});            
//         }
//         if(!user) {
//             return res.status(401). json({message: 'redirect to login'});
//         }
//         req.user = user; 
//         next();
//     })(req, res, next);
// }