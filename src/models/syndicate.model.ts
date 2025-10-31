import { DataTypes, Model } from "sequelize";
import { sequelize } from '../config/db'


export class Syndicate extends Model {
    public id!: number;
    public name!: string;
    public member!: number;
    public vehicule!: string;

}

Syndicate.init({
    id:{type: DataTypes.INTEGER,autoIncrement:true, primaryKey:true},
    name:{type: DataTypes.STRING, allowNull: false},
    member:{type: DataTypes.INTEGER,allowNull:false},
    vehicule:{type: DataTypes.STRING, allowNull: false},
},
{
    sequelize, modelName:'Syndicate'
})