import { UserService } from './users.service';
import { BadRequestException, Controller, Get, Logger, Query } from '@nestjs/common';
import { UsersResponseDto } from './users.response.dto';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private userService: UserService) {}

  // @Get()
  // async getPage(@Query('_page') page, @Query('_limit') limit) {
  //   if (isNaN(Number(page)) || isNaN(Number(limit))) throw new BadRequestException('page or limit isNaN');
  //   return this.userService.getPage(+page, +limit);
  // }

  @Get()
  async getAllUsers() {
    this.logger.log('Get all users');
    const users = await this.userService.findAll();
    return users.map((user) => UsersResponseDto.fromUsersEntity(user));
  }
}
