const UserModelExport = (sequelize, DataTypes) => {
    const UserModel = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        displayName: DataTypes.STRING,
        email: { type: DataTypes.STRING, unique: true },
        password: DataTypes.INTEGER,
        image: DataTypes.INTEGER
    },
        {
            timestamps: false,
            tableName: 'users',
            underscored: true,
        });

    UserModel.associate = ({ BlogPost }) => {
        UserModel.hasMany(BlogPost, { foreignKey: 'userId' });
    }

    return UserModel;
};

module.exports = UserModelExport;