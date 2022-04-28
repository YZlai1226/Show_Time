// import { Controller, Request, Post, UseGuards } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { Users } from './schemas/users.schema';
// import { AuthService } from './auth/auth.service';

// @Controller()
// export class AppController {
//   constructor(private authService: AuthService) { }

//     @UseGuards(AuthGuard('local'))
//     @Post('auth/login')
//     async login(@Request() req): Promise<Users> {
//       // console.log(req.user._doc)
//       return req.user._doc;
//     }
//   }


import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
