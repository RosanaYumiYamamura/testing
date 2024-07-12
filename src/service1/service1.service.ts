import { Injectable } from '@nestjs/common';

@Injectable()
export class Service1Service {
  function1(): string {
    return 'Function 1 from Service 1';
  }

  function2(): number {
    return 42;
  }

  function3(): boolean {
    return true;
  }
}
