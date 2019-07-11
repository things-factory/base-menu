import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Menu } from './menu'

@Entity()
@Index('ix_menu_button_0', (menuButton: MenuButton) => [menuButton.menu, menuButton.text], { unique: true })
@Index('ix_menu_button_1', (menuButton: MenuButton) => [menuButton.menu])
export class MenuButton {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(Type => Menu, menu => menu.buttons)
  menu: Menu

  @Column('int', {
    nullable: true
  })
  rank: number

  @Column({
    nullable: true
  })
  style: string

  @Column({
    nullable: true
  })
  icon: string

  @Column()
  text: string

  @Column({
    nullable: true
  })
  auth: string

  @Column({
    nullable: true
  })
  logic: string

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
