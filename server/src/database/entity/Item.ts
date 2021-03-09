import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { Field, ObjectType } from 'type-graphql'
import Image from './Image'
import Category from './Category'
import CategoryResolver from '../../resolver/category'

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
	categoryId: string

	@ManyToOne(() => Category)
	@Field(() => CategoryResolver)
	category: Category

	@Column('text', { nullable: true })
	@Field()
	note: string

	@OneToOne(() => Image, { nullable: true })
	@JoinColumn()
	@Field(() => Image)
	image?: Image

	@CreateDateColumn()
	@Field()
	createdAt: Date

	@UpdateDateColumn()
	@Field()
	updatedAt: Date
}
