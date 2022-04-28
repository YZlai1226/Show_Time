// import { Controller, Request, Post, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { LocalAuthGuard } from './auth/local-auth.guard';
// @Controller()
// export class AppController {
//   @UseGuards(LocalAuthGuard)
//   @Post('auth/login')
//   async login(@Request() req) {
//     return req.user;
//   }
// }
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Users } from './schemas/users.schema';

@Controller()
export class AppController {
  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req): Promise<Users> {
    // console.log(req.user._doc)
    return req.user._doc;
  }
}
