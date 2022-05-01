import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // usernameField: 'email',
      // userIDField: 'password',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    // console.log("++++password+++++")
    // console.log(payload.sub)
    // console.log("++++password+++++")

    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
    // console.log(payload);
    // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
    // console.log("++++email+++++")
    // console.log(payload.email)
    // console.log("++++eami+++++")
    return {
      password: payload.sub,
      email: payload.email,
      userId: payload.userId,
      isAdmin: payload.isAdmin,
    };
  }
}
