import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { Field, ObjectType } from 'type-graphql'
import Image from './Image'

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
