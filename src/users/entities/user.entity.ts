import { Roles } from "src/utils/common/user_role.enum";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class UserEntity {
@PrimaryGeneratedColumn()
id: number;
@Column()
name : string;
@Column()
email : string;
@Column()
password : string;
@Column({type:'enum', enum: Roles, array: true, default: [Roles.USER] })
roles : Roles[]
}

