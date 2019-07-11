import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { MenuDetail } from './menu-detail'

@Entity()
@Index(
  'ix_menu_detail_col_0',
  (menuDetailColumn: MenuDetailColumn) => [menuDetailColumn.menuDetail, menuDetailColumn.name],
  { unique: true }
)
@Index('ix_menu_detail_col_1', (menuDetailColumn: MenuDetailColumn) => [
  menuDetailColumn.menuDetail,
  menuDetailColumn.rank
])
export class MenuDetailColumn {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => MenuDetail, menuDetail => menuDetail.columns)
  menuDetail: MenuDetail

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @Column('int', {
    nullable: true
  })
  rank: number

  @Column({
    nullable: true
  })
  term: string

  @Column()
  colType: string

  @Column('int', {
    nullable: true
  })
  colSize: number

  @Column({
    nullable: true
  })
  nullable: boolean

  @Column({
    nullable: true
  })
  refType: string

  @Column({
    nullable: true
  })
  refName: string

  @Column({
    nullable: true
  })
  refUrl: string

  @Column({
    nullable: true
  })
  refParams: string

  @Column({
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

  @Column({
    nullable: true
  })
  reverseSort: boolean

  @Column({
    nullable: true
  })
  virtualField: boolean

  @Column({
    nullable: true
  })
  searchName: string

  @Column({
    nullable: true
  })
  searchEditor: string

  @Column({
    nullable: true
  })
  searchOper: string

  @Column({
    nullable: true
  })
  searchInitVal: string

  @Column('int', {
    nullable: true
  })
  gridRank: number

  @Column({
    nullable: true
  })
  gridEditor: string

  @Column({
    nullable: true
  })
  gridFormat: string

  @Column({
    nullable: true
  })
  gridValidator: string

  @Column('int', {
    nullable: true
  })
  gridWidth: number

  @Column({
    nullable: true
  })
  gridAlign: string

  @Column('int', {
    nullable: true
  })
  uniqRank: number

  @Column({
    nullable: true
  })
  formEditor: string

  @Column({
    nullable: true
  })
  formValidator: string

  @Column({
    nullable: true
  })
  formFormat: string

  @Column({
    nullable: true
  })
  defVal: string

  @Column({
    nullable: true
  })
  rangeVal: string

  @Column({
    nullable: true
  })
  ignoreOnSave: boolean

  @Column({
    nullable: true
  })
  extField: boolean

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
