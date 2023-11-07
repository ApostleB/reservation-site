import { Sequelize, DataTypes, Model } from 'sequelize';

import { sequelize } from './index';		//방금 만들어주었던 sequelize객체 임포트

interface UsersAttributes {
    id:number | null;
    name:string | null;
    username:string | null;
}

export class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: { 
            type: DataTypes.DATE, 
            defaultValue: DataTypes.NOW 
        },
    }, 
    {
        sequelize, // We need to pass the connection instance
        modelName: 'User', // We need to choose the model name
        tableName: 'users'
    }
);