import { Injectable } from '@nestjs/common';

@Injectable()
export class Service2Service {
  function1(): string {
    return 'Function 1 from Service 2';
  }

  function2(): number {
    return 24;
  }

  function3(): boolean {
    return false;
  }
}
