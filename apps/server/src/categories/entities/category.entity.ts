import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";

import { Article } from "./../../articles/entities/article.entity";

@Entity()
export class Category {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "varchar", length: 255, unique: true })
	name: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToMany(() => Article, (article) => article.category)
	articles: Article[];
}
