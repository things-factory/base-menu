import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Menu } from './menu'
import { MenuDetailColumn } from './menu-detail-column'
import { MenuDetailButton } from './menu-detail-button'

@Entity('menu-details')
@Index('ix_menu_detail_0', (menuDetail: MenuDetail) => [menuDetail.menu, menuDetail.name], { unique: true })
@Index('ix_menu_detail_1', (menuDetail: MenuDetail) => [menuDetail.menu])
export class MenuDetail extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @OneToOne(type => Menu)
  @JoinColumn()
  menu: Menu

  @Column('text')
  name: string

  @Column('text')
  viewSection: string

  @Column('text', {
    nullable: true
  })
  entityId: string

  @Column('text', {
    nullable: true
  })
  dataProp: string

  @Column('text', {
    nullable: true
  })
  association: string

  @Column('text', {
    nullable: true
  })
  searchUrl: string

  @Column('text', {
    nullable: true
  })
  saveUrl: string

  @Column('text', {
    nullable: true
  })
  masterField: string

  @Column('text', {
    nullable: true
  })
  customView: string

  @OneToMany(type => MenuDetailColumn, menuDetailColumn => menuDetailColumn.menuDetail)
  columns: MenuDetailColumn[]

  @OneToMany(type => MenuDetailButton, menuDetailButton => menuDetailButton.menuDetail)
  buttons: MenuDetailButton[]
}
