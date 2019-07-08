import { Domain, DomainBaseEntity } from '@things-factory/shell'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Index } from 'typeorm'
import { MenuDetail } from './menu-detail'
import { User } from '@things-factory/auth-base'

@Entity('menu-detail-columns')
@Index(
  'ix_menu_detail_col_0',
  (menuDetailColumn: MenuDetailColumn) => [menuDetailColumn.menuDetail, menuDetailColumn.name],
  { unique: true }
)
@Index('ix_menu_detail_col_1', (menuDetailColumn: MenuDetailColumn) => [
  menuDetailColumn.menuDetail,
  menuDetailColumn.rank
])
export class MenuDetailColumn extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => MenuDetail, menuDetail => menuDetail.columns)
  menuDetail: MenuDetail

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @Column('int', {
    nullable: true
  })
  rank: number

  @Column('text', {
    nullable: true
  })
  term: string

  @Column('text')
  colType: string

  @Column('int', {
    nullable: true
  })
  colSize: number

  @Column('boolean', {
    nullable: true
  })
  nullable: boolean

  @Column('text', {
    nullable: true
  })
  refType: string

  @Column('text', {
    nullable: true
  })
  refName: string

  @Column('text', {
    nullable: true
  })
  refUrl: string

  @Column('text', {
    nullable: true
  })
  refParams: string

  @Column('text', {
    nullable: true
  })
  refRelated: string

  @Column('int', {
    nullable: true
  })
  searchRank: number

  @Column('int', {
    nullable: true
  })
  sortRank: number

  @Column('boolean', {
    nullable: true
  })
  reverseSort: boolean

  @Column('boolean', {
    nullable: true
  })
  virtualField: boolean

  @Column('text', {
    nullable: true
  })
  searchName: string

  @Column('text', {
    nullable: true
  })
  searchEditor: string

  @Column('text', {
    nullable: true
  })
  searchOper: string

  @Column('text', {
    nullable: true
  })
  searchInitVal: string

  @Column('int', {
    nullable: true
  })
  gridRank: number

  @Column('text', {
    nullable: true
  })
  gridEditor: string

  @Column('text', {
    nullable: true
  })
  gridFormat: string

  @Column('text', {
    nullable: true
  })
  gridValidator: string

  @Column('int', {
    nullable: true
  })
  gridWidth: number

  @Column('text', {
    nullable: true
  })
  gridAlign: string

  @Column('int', {
    nullable: true
  })
  uniqRank: number

  @Column('text', {
    nullable: true
  })
  formEditor: string

  @Column('text', {
    nullable: true
  })
  formValidator: string

  @Column('text', {
    nullable: true
  })
  formFormat: string

  @Column('text', {
    nullable: true
  })
  defVal: string

  @Column('text', {
    nullable: true
  })
  rangeVal: string

  @Column('boolean', {
    nullable: true
  })
  ignoreOnSave: boolean

  @Column('boolean', {
    nullable: true
  })
  extField: boolean

  @ManyToOne(type => User)
  creator: User

  @ManyToOne(type => User)
  updater: User
}
