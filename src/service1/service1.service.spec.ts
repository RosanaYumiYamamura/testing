import { Test, TestingModule } from '@nestjs/testing';
import { Service1Service } from './service1.service';

describe('Service1Service', () => {
  let service: Service1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service1Service],
    }).compile();

    service = module.get<Service1Service>(Service1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return correct value from function1', () => {
    expect(service.function1()).toBe('Function 1 from Service 1');
  });

  it('should return correct value from function2', () => {
    expect(service.function2()).toBe(42);
  });

  it('should return correct value from function3', () => {
    expect(service.function3()).toBe(true);
  });
});
