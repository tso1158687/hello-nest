import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('經過pipe囉');
    console.log(value);
    // 可以用pipe做資料驗證
    if (value === 'jaja') {
      return new BadRequestException;
    }
    return value;
  }
}
