import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from "@nestjs/common";

import { ArticlesService } from "./articles.service";

import { CreateArticleDto } from "./dto/create-article.dto";

@Controller("articles")
export class ArticlesController {
	constructor(private readonly articlesService: ArticlesService) {}

	@Post()
	async createArticle(@Body() createArticleDto: CreateArticleDto) {
		return await this.articlesService.createArticle(createArticleDto);
	}

	@Get()
	async getArticles() {
		return await this.articlesService.getArticles();
	}

	@Get(":id")
	async getArticle(@Param("id") id: string) {
		return await this.articlesService.getArticle(+id);
	}

	@Delete(":id")
	async removeArticle(@Param("id") id: string) {
		return await this.articlesService.removeArticle(+id);
	}
}
