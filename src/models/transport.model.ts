import { DataTypes, Model } from "sequelize";
import { sequelize } from '../config/db'
import {Syndicate} from './syndicate.model'

export class Transport extends Model{
    public id!: string;
    public name!: string;
    public type!: string;
}

Transport.init({
    id:{type: DataTypes.INTEGER,autoIncrement:true, primaryKey:true},
    name:{type: DataTypes.STRING, allowNull: false},
    type:{type: DataTypes.STRING, allowNull: false},

},
{
    sequelize, modelName: 'Transport'
});

Syndicate.hasMany(Transport, {foreignKey:'id_Syndicate', onDelete: 'CASCADE'});
Transport.belongsTo(Syndicate, {foreignKey:'id_Syndicate'})