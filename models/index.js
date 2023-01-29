const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Blog, {
    foreignKey: 'user_id'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Blog.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {User, Blog, Comment}