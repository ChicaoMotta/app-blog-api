'use strict';

/** @type { import('sequelize-cli').Migration }} */
module.exports = {
    up: async (queryInterface, Sequelize) => {

        return queryInterface.createTable('posts_categories', {
            postId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: 'post_id',
                references: {
                    model: 'users',
                    key: 'id',
                },
                onDelete: 'Cascade',
                onUpdate: 'Cascade',
            },
            categoryId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                primaryKey: true,
                field: 'category_id',
                references: {
                    model: 'categories',
                    key: 'id',
                },
                onDelete: 'Cascade',
                onUpdate: 'Cascade',
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('post_category');
    }
};
