import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ArticlesModule } from "./articles/articles.module";
import { CategoriesModule } from "./categories/categories.module";

import { Article } from "./articles/entities/article.entity";
import { Category } from "./categories/entities/category.entity";

@Module({
	imports: [
		ConfigModule.forRoot(),

		TypeOrmModule.forRoot({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
			database: process.env.DATABASE_NAME,
			synchronize: process.env.MODE === "development",
			entities: [Article, Category],
		}),

		ArticlesModule,
		CategoriesModule,
	],
})
export class AppModule {}
