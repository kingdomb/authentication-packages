import { User } from "../models/userModel";
import { createSecretToken } from '../utils/secretToken';
import bcrypt from 'bcryptjs';

export signupUser = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body
    const checkUser = await User.findOne({ email })
    
    if(checkUser) {
      return res.json({ message: 'This email is registered exist'})
    }

    const user = await User.create({ email, password, username, createdAt })
    const token = createSecretToken(user._id)
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false
    })
    res
      .status(201)
      .json({ message: `Welcome ${{ username }}, you are now signed in.  Thanks!`, success: true, user })
    next()
  } catch (err) {
    console.log(`signupUser Route Error: ${err}`);
  }
}

// export homepage = async (req, res, next) => {
//   try {
//     // TODO return homepage as public route
//     res.status(200).json({ message: 'API is running' });
//   } catch (err) {
//     console.log(`homepage Route Error: ${err}`);
//   }
// }

// export authenticateUser = async (req, res, next) => {
//   try {
//     // TODO AFTER await db check --  redirect to /welcome with Attribution and AuthDiagram components
//     res.status(200).json({ message: 'User is authorized' })
//   } catch (err) {
//     console.log(`authenticateUser Route Error: ${err}`);
//   }
// }

