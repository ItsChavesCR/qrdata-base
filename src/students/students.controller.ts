import { Controller, Post, Body,} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}
  
  @Post()
  async createStudent(@Body() createStudentDto: CreateStudentDto) {
    try {
      const createdStudent = await this.studentsService.create(createStudentDto);
      return { message: 'Datos insertados correctamente en la base de datos.', data: createdStudent };
    } catch (error) {
      return { error: 'Error al insertar los datos en la base de datos.' };
    }
  }
}
