import { Controller, Get } from '@nestjs/common';
import { Dogs } from './dogs.entity';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {

  constructor(private readonly service: DogsService) {}
  

  @Get()
  public async getDogs(): Promise<Dogs[]> {
    return await this.service.getList();
  }
}
