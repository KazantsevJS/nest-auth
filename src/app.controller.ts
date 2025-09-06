import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('time')
  getTime(): { time: string } {
    return { time: new Date().toISOString() };
  }
}
