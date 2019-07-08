import { User } from '@things-factory/auth-base'
import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { MenuDetail } from './menu-detail'

@Entity('menu-detail-buttons')
@Index(
  'ix_menu_detail_btn_0',
  (menuDetailButton: MenuDetailButton) => [menuDetailButton.menuDetail, menuDetailButton.text],
  { unique: true }
)
@Index('ix_menu_detail_btn_1', (menuDetailButton: MenuDetailButton) => [menuDetailButton.menuDetail])
export class MenuDetailButton extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => MenuDetail, menuDetail => menuDetail.columns)
  menuDetail: MenuDetail

  @Column('text')
  text: string

  @Column('int', {
    nullable: true
  })
  rank: number

  @Column('text', {
    nullable: true
  })
  icon: string

  @Column('text', {
    nullable: true
  })
  style: string

  @Column('text', {
    nullable: true
  })
  logic: string

  @ManyToOne(type => User)
  creator: User

  @ManyToOne(type => User)
  updater: User
}
