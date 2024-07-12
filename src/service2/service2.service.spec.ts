import { Test, TestingModule } from '@nestjs/testing';
import { Service2Service } from './service2.service';

describe('Service2Service', () => {
  let service: Service2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service2Service],
    }).compile();

    service = module.get<Service2Service>(Service2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return correct value from function1', () => {
    expect(service.function1()).toBe('Function 1 from Service 2');
  });

  it('should return correct value from function2', () => {
    expect(service.function2()).toBe(24);
  });

  it('should return correct value from function3', () => {
    expect(service.function3()).toBe(false);
  });
});
