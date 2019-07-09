import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
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

  @Column('text', {
    unique: true
  })
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @ManyToOne(type => Menu, parent => parent.childrens, { nullable: true })
  parent: Menu

  @OneToMany(type => Menu, child => child.parent)
  childrens: Menu[]

  @Column('text', {
    nullable: true
  })
  template: string

  @Column('text', {
    nullable: true
  })
  menuType: string

  @Column('text', {
    nullable: true
  })
  category: string

  @Column('int', {
    nullable: true
  })
  rank: number

  @Column('text', {
    nullable: true
  })
  iconPath: string

  @Column('boolean', {
    nullable: true
  })
  hiddenFlag: boolean

  @Column('text', {
    nullable: true
  })
  routing: string

  @Column('text', {
    nullable: true
  })
  routingType: string

  @Column('text', {
    nullable: true
  })
  detailFormId: string

  @Column('text', {
    nullable: true
  })
  detailLayout: string

  @Column('text', {
    nullable: true
  })
  resourceType: string

  @Column('text', {
    nullable: true
  })
  resourceName: string

  @Column('text', {
    nullable: true
  })
  resourceUrl: string

  @Column('text', {
    nullable: true
  })
  gridSaveUrl: string

  @Column('text', {
    nullable: true
  })
  idField: string

  @Column('text', {
    nullable: true
  })
  titleField: string

  @Column('boolean', {
    nullable: true
  })
  pagination: boolean

  @Column('text', {
    nullable: true
  })
  itemsProp: string

  @Column('text', {
    nullable: true
  })
  totalProp: string

  @Column('int', {
    nullable: true
  })
  fixedColumns: number

  @OneToMany(type => MenuButton, menuButton => menuButton.menu)
  buttons: MenuButton[]

  @OneToMany(type => MenuColumn, menuColumn => menuColumn.menu)
  columns: MenuColumn[]

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User)
  creator: User

  @ManyToOne(type => User)
  updater: User
}
