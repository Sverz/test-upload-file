import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { readFile } from 'fs/promises';

@Injectable()
export class FileService {
  public async saveFile(file: Express.Multer.File) {
    const filePath = `uploads/${file.originalname}`;
    const fileContents = await readFile(file.path);
    fs.writeFileSync(filePath, fileContents);
    return filePath;
  }
}
