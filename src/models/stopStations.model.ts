import { DataTypes, Model } from "sequelize";
import { sequelize } from '../config/db'
import { Time } from "./times.model";
import {Transport} from "./transport.model"


export class StopStation extends Model {
    public id!: number;
    public name!: string;
}

StopStation.init({
    id:{type: DataTypes.INTEGER,autoIncrement:true, primaryKey:true},
    name:{type: DataTypes.STRING, allowNull: false},
},
{
    sequelize, modelName: 'StopStation'
});

Time.hasMany(StopStation, {foreignKey: 'id_Times', onDelete:'CASCADE'});
StopStation.belongsTo(Time, {foreignKey: 'id_Times'});

Transport.hasMany(StopStation, {foreignKey: 'id_Transport', onDelete:'CASCADE'});
StopStation.belongsTo(Transport, {foreignKey: 'id_Transport'});