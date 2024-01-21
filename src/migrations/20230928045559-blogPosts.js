'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('blog_posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            content: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                field: 'user_id',
                references: {
                    model: 'users',
                    key: 'id',
                },
                onDelete: 'Cascade',
                onUpdate: 'Cascade',
            },
            published: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated: {
                type: Sequelize.DATE,
                allowNull: false,
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('blog_posts');
    }
};
