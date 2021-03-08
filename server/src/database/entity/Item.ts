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
export default class Item extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	@Field()
	id: string

	@Column()
	@Field()
	name: string

	@Column()
	@Field()
	category: string

	@Column('text', { nullable: true })
	@Field()
	note: string

	@Column({ nullable: true })
	@Field()
	image: string

	@CreateDateColumn()
	@Field()
	createdAt: Date

	@UpdateDateColumn()
	@Field()
	updatedAt: Date
}
