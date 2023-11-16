import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StudentsService {

  constructor(
    @InjectRepository(Student)
    private StudentRepository: Repository<Student>
    ){}

  findAll() {
    return this.StudentRepository.find();
  }

  findOne(id: number) {
    return this.StudentRepository.findOneBy({id});
  }
  
  create(createStudentDto: CreateStudentDto) {
    const addedStudent = this.StudentRepository.create(createStudentDto);
    this.StudentRepository.save(addedStudent);
    return addedStudent;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const updatedStudent = await this.StudentRepository.update({id},updateStudentDto);
    return updatedStudent;
  }

  remove(id: number) {
    return this.StudentRepository.delete(id);
  }
}
