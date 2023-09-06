import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { DogsEntity } from './dogs.entity';

const models = SequelizeModule.forFeature([DogsEntity]);

@Module({
  imports: [models],
  controllers: [DogsController],
  providers: [DogsService],
  exports: [DogsService],
})
export class DogsModule { }
