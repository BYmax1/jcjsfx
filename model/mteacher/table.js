//定义post表结构
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mteacher', {
   teachername: {
      field: 'name',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      unique: 'compositeIndex'
    },
    schoolname: {
      field: 'schoolname',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      unique: 'compositeIndex'
    },
    course: {
      field: 'course',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
        number: {
      field: 'number',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  } , {
    tableName: 'mteacher',
    timestamps: false,
    freezeTableName: true
  });
};