import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller("categories")
export class CategoriesController {
	constructor(private readonly categoriesService: CategoriesService) {}

	@Post()
	async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
		return await this.categoriesService.createCategory(createCategoryDto);
	}

	@Get()
	async getCategories() {
		return await this.categoriesService.getCategories();
	}

	@Get(":id")
	async getCategory(@Param("id") id: string) {
		return await this.categoriesService.getCategory(+id);
	}

	@Patch(":id")
	async update(
		@Param("id") id: string,
		@Body() updateCategoryDto: UpdateCategoryDto
	) {
		return await this.categoriesService.updateCategory(+id, updateCategoryDto);
	}

	@Delete(":id")
	async removeCategory(@Param("id") id: string) {
		return await this.categoriesService.removeCategory(+id);
	}
}
