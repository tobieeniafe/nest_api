import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../config/keys';

@Module({
  imports: [
  	PassportModule.register({ defaultStrategy: 'jwt' }),
  	JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
  	}),
    UserModule
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
