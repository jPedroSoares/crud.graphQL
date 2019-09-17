function listUsers ( root, args, context, info ) {
    return context.prisma.users()
}
module.exports = {
    listUsers
}