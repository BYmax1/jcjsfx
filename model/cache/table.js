//定义post表结构
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cache', {
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
    },
        email: {
      field: 'email',
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  } , {
    tableName: 'cache',
    timestamps: false,
    freezeTableName: true
  });
};