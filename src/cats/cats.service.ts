import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
      @InjectRepository(Cat)
      private catrepo: Repository<Cat>
    ){}

  async create(createCatDto: CreateCatDto) {
    return await this.catrepo.save(createCatDto);
  }

  async findAll() {
    return await this.catrepo.find();
  }

  async findOne(id: number) {
    return await this.catrepo.findOne({where: {id}});
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    const cat = await this.findOne(id);
    if (!cat) {
      throw new Error('고양이 없음')
    }
    Object.assign(cat, updateCatDto);
    return await this.catrepo.save(cat);
  }

  async remove(id: number) {
    const cat = await this.findOne(id);
    if (!cat) {
      throw new Error('고양이 없음')
    }
    return await this.catrepo.remove(cat);
  }
}
