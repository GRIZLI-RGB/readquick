import {
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { ArticleContent } from "@readquick/types";

import { Category } from "./../../categories/entities/category.entity";

@Entity()
export class Article {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "int", default: 0 })
	views: number;

	@Column({ type: "varchar", length: 255 })
	title: string;

	@Column({ type: "jsonb" })
	content: ArticleContent;

	@Column({ type: "varchar", length: 255, unique: true })
	slug: string;

	@Column({ type: "boolean", default: false })
	isPublished: boolean;

	@Column({ type: "varchar", length: 255 })
	imageUrl: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@ManyToOne(() => Category, (category) => category.articles)
	category: Category;
}
