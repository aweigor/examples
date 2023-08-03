import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserModel } from './user.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'Auth',
        }
      }
    ])
  ],
  providers: [AuthService]
})
export class AuthModule {}
