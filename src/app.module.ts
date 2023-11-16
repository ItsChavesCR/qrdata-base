
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [StudentsModule,
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Aaron2003#%',
        database: 'students',
        entities: [Student],
        autoLoadEntities: true,
        synchronize: true
      }),
      StudentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}