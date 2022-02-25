import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';

const jwtSecret: Secret = process.env.JWT_SECRET || 'SecretDefault';

const generateToken = (id: number, username: string) => {
  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const data: JwtPayload = { id, username };

  const token: string = jwt.sign({ data }, jwtSecret, jwtConfig);

  return token;
};

export default generateToken;