import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 500 })
  label: string;

  @Column('int')
  minimumPrice: number;

  @Column('int')
  maximumPrice: number;

  @Column({ length: 500 })
  unit: string;

  @Column({ length: 500 })
  placeholder: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

}
