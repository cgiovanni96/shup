import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { Field, ObjectType } from 'type-graphql'

@Entity()
@ObjectType()
export default class Comment extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	@Field()
	id: string

	@Column()
	@Field()
	name: string

	@Column()
	@Field()
	category: string

	@Column('text')
	@Field()
	note: string

	@Column()
	@Field()
	image: string

	@CreateDateColumn()
	@Field()
	createdAt: Date

	@UpdateDateColumn()
	@Field()
	updatedAt: Date
}
