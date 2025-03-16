import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

import { Category } from "./entities/category.entity";
import { Repository } from "typeorm";

@Injectable()
export class CategoriesService {
	constructor(
		@InjectRepository(Category)
		private readonly categoryRepository: Repository<Category>
	) {}

	async createCategory(createCategoryDto: CreateCategoryDto) {
		return await this.categoryRepository.save(createCategoryDto);
	}

	async getCategories() {
		return await this.categoryRepository.find({
			relations: ["articles"],
		});
	}

	async getCategory(id: number) {
		return await this.categoryRepository.findOne({
			where: { id },
			relations: ["articles"],
		});
	}

	async updateCategory(id: number, updateCategoryDto: UpdateCategoryDto) {
		await this.categoryRepository.update(id, updateCategoryDto);

		return await this.categoryRepository.findOne({
			where: { id },
			relations: ["articles"],
		});
	}

	async removeCategory(id: number) {
		return await this.categoryRepository.delete(id);
	}
}
