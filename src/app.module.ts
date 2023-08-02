import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Place } from './typeorm/entities/Place';
import { PlacesModule } from './places/places.module';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'projet_hdm',
      entities: [Place,User],
      synchronize: true,
    }),
    PlacesModule,
    UsersModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
