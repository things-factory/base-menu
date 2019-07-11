import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Menu } from './menu'
import { MenuDetailButton } from './menu-detail-button'
import { MenuDetailColumn } from './menu-detail-column'

@Entity()
@Index('ix_menu_detail_0', (menuDetail: MenuDetail) => [menuDetail.menu, menuDetail.name], { unique: true })
@Index('ix_menu_detail_1', (menuDetail: MenuDetail) => [menuDetail.menu])
export class MenuDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @OneToOne(type => Menu)
  @JoinColumn()
  menu: Menu

  @Column()
  name: string

  @Column()
  viewSection: string

  @Column({
    nullable: true
  })
  entityId: string

  @Column({
    nullable: true
  })
  dataProp: string

  @Column({
    nullable: true
  })
  association: string

  @Column({
    nullable: true
  })
  searchUrl: string

  @Column({
    nullable: true
  })
  saveUrl: string

  @Column({
    nullable: true
  })
  masterField: string

  @Column({
    nullable: true
  })
  customView: string

  @OneToMany(type => MenuDetailColumn, menuDetailColumn => menuDetailColumn.menuDetail)
  columns: MenuDetailColumn[]

  @OneToMany(type => MenuDetailButton, menuDetailButton => menuDetailButton.menuDetail)
  buttons: MenuDetailButton[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User
}
