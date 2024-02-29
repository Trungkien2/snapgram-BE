import {
  Table,
  Column,
  Model,
  DataType,
  Default,
  AllowNull,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'tbl_user',
})
export class User extends Model<User> {
  @PrimaryKey
  @AllowNull
  @Default(DataType.UUIDV4)
  @Column({
    field: 'id',
    type: DataType.UUID,
  })
  id: string;
  @Column({
    field: 'name',
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM,
    values: ['male', 'female'],
    allowNull: false,
  })
  gender: string;
}
