import { Injectable } from '@nestjs/common';
import { Dogs, DogsEntity } from './dogs.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DogsService { 
  constructor(
    @InjectModel(DogsEntity) private readonly repository: typeof DogsEntity,
   
  ) {}

  public async getList(): Promise<Dogs[]> {
    const result = await this.repository.findAll();
    return result;
  }

  public async create(value: Dogs): Promise<Dogs> {
    const result = await this.repository.create(value);
    return result?.toJSON();
  }
}
