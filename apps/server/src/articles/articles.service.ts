import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

import { CreateArticleDto } from "./dto/create-article.dto";
import { Article } from "./entities/article.entity";
import { Category } from "./../categories/entities/category.entity";

@Injectable()
export class ArticlesService {
	constructor(
		@InjectRepository(Article)
		private readonly articleRepository: Repository<Article>,

		@InjectRepository(Category)
		private readonly categoryRepository: Repository<Category>
	) {}

	async createArticle(createArticleDto: CreateArticleDto) {
		const { categoryId, ...articleData } = createArticleDto;

		const category = await this.categoryRepository.findOne({
			where: { id: categoryId },
		});

		if (!category) {
			throw new BadRequestException(
				`Category with id ${categoryId} not found`
			);
		}

		const article = this.articleRepository.create({
			...articleData,
			category,
		});
		return await this.articleRepository.save(article);
	}

	async getArticles() {
		return await this.articleRepository.find({
			relations: ["category"],
		});
	}

	async getArticle(id: number) {
		const article = await this.articleRepository.findOne({
			where: { id },
			relations: ["category"],
		});

		if (!article) throw new NotFoundException("Article not found");

		return article;
	}

	async removeArticle(id: number) {
		const article = await this.articleRepository.findOneBy({ id });

		if (!article) throw new NotFoundException("Article not found");

		return await this.articleRepository.delete(id);
	}
}
