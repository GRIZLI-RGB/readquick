import { ArticleContent } from "@readquick/types";
import { Type } from "class-transformer";
import {
	IsBoolean,
	IsInt,
	IsObject,
	IsOptional,
	IsString,
	IsUrl,
	ValidateNested,
} from "class-validator";

export class CreateArticleDto {
	@IsString()
	title: string;

	@IsObject()
	content: ArticleContent;

	@IsString()
	slug: string;

	@IsOptional()
	@IsBoolean()
	isPublished?: boolean = false;

	@IsUrl()
	imageUrl: string;

	@IsOptional()
	@IsInt()
	views?: number = 0;

	@IsInt()
	categoryId: number;
}
