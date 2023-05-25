import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAll(){
    return this.users;
  }

  getOne(uid: number){
    
  }

}
