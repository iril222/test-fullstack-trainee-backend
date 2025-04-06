import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(page: number = 1, limit: number = 10) {
    return this.usersRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  create(user: User) {
    return this.usersRepository.save(user);
  }

  update(id: number, user: User) {
    return this.usersRepository.update(id, user);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
