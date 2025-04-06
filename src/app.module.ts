import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'qwerty',
      database: 'database',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
