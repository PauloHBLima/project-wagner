import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DogsEntity } from './dogs/models/dogs.entity';
import { DogsModule } from './dogs/models/dogs.module';

const modules = [
  DogsModule
]

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ':memory:',
      port: 3306,
      username: 'root',
      password: '',
      database: 'project_dogs',
      autoLoadModels: true,
      models: [DogsEntity],
    }),
    ...modules
  ],
})
export class AppModule { }
