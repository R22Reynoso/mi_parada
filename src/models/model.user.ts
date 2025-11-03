import {DataType, Model} from 'sequelize';


export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  
}

export class UserModel extends Model<User> implements User {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
}