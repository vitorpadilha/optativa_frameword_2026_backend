import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'inovafrihub',
      autoLoadEntities: true,
      synchronize: true,
    }),
  UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
