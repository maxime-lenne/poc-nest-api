import { Test, TestingModule } from '@nestjs/testing';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { Category } from './category.entity';

describe('AppController', () => {
  let categoryController: CategoryController;
  let categoryService: CategoryService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [CategoryService],
    }).compile();

    categoryController = app.get<CategoryController>(CategoryController);
    categoryService = app.get<CategoryService>(CategoryService);
  });

  describe('root', () => {
    it('should return a list of categoies', () => {
      const result = ['test'];
      jest.spyOn(categoryService, 'findAll').mockImplementation(() => result);

      expect(categoryController.findAll()).toBe(result);
    });
  });
});
