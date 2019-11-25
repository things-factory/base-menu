import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { MenuButton } from './menu-button'
import { MenuColumn } from './menu-column'

@Entity('menus')
@Index('ix_menu_0', (menu: Menu) => [menu.domain, menu.name], { unique: true })
@Index('ix_menu_1', (menu: Menu) => [menu.domain, menu.parent])
@Index('ix_menu_2', (menu: Menu) => [menu.domain, menu.category, menu.menuType, menu.rank])
export class Menu {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @ManyToOne(
    type => Menu,
    parent => parent.childrens,
    { nullable: true }
  )
  parent: Menu

  @OneToMany(
    type => Menu,
    child => child.parent
  )
  childrens: Menu[]

  @Column({
    nullable: true
  })
  template: string

  @Column({
    nullable: true
  })
  menuType: string

  @Column({
    nullable: true
  })
  category: string

  @Column('int', {
    nullable: true
  })
  rank: number

  @Column({
    nullable: true
  })
  iconPath: string

  @Column({
    nullable: true,
    default: false
  })
  hiddenFlag: boolean

  @Column({
    nullable: true
  })
  routing: string

  @Column({
    nullable: true
  })
  routingType: string

  @Column({
    nullable: true
  })
  detailFormId: string

  @Column({
    nullable: true
  })
  detailLayout: string

  @Column({
    nullable: true
  })
  resourceType: string

  @Column({
    nullable: true
  })
  resourceName: string

  @Column({
    nullable: true
  })
  resourceUrl: string

  @Column({
    nullable: true
  })
  gridSaveUrl: string

  @Column({
    nullable: true
  })
  idField: string

  @Column({
    nullable: true
  })
  titleField: string

  @Column({
    nullable: true
  })
  pagination: boolean

  @Column({
    nullable: true
  })
  itemsProp: string

  @Column({
    nullable: true
  })
  totalProp: string

  @Column('int', {
    nullable: true
  })
  fixedColumns: number

  @OneToMany(
    type => MenuButton,
    menuButton => menuButton.menu
  )
  buttons: MenuButton[]

  @OneToMany(
    type => MenuColumn,
    menuColumn => menuColumn.menu
  )
  columns: MenuColumn[]

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
