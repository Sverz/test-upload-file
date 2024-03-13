import {
  Controller,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@Req() req, @UploadedFile() file: Express.Multer.File) {
    const accessToken = req.headers.authorization.split(' ')[1];
    if (accessToken != 'Tuck-Tuck') return 'Unauthorized';
    return this.fileService.saveFile(file);
  }
}
