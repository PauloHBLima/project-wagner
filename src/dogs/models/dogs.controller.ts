import { Body, Controller, Get, Post } from '@nestjs/common';
import { Dogs } from './dogs.entity';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly service: DogsService) { }

  @Get()
  public async getDogs(): Promise<Dogs[]> {
    return await this.service.getList();
  }

  @Post()
  public async creatDog(@Body() body: Dogs): Promise<Dogs> {
    return await this.service.create(body);
  }
}
