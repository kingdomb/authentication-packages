import { keyloader } from '../../keys';
import jwt from 'jsonwebtoken';

export const createSecretToken = (id) => {
  return jwt.sign({ id }, keyloader.token_key, {
    expiresIn: 3 * 60 * 60
    // 21600 seconds or 3 hours
  })
}