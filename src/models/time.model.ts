import { DataTypes, Model } from "sequelize";
import { sequelize } from '../config/db'


export class Time extends Model {
    public id!: number;
    public hou!: number;
}

Time.init({
    id:{type: DataTypes.INTEGER,autoIncrement:true, primaryKey:true},
    hour:{type: DataTypes.DATE, allowNull: false},
},{
    sequelize, modelName: 'Time'
})