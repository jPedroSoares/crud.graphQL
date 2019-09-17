function post( parent, args, context, info) {

    return context.prisma.createUser({
        name: args.name,
        age: args.age,
        height: args.height
    })
}

function update( parent, args, context, info) {
    return context.prisma.updateUser({ 
        data : {
                name: args.name,
                age: args.age,
                height: args.height
            }, 
        where: {
                id:args.id
            }
    })
}

function deleted(parent, args, context, info) {
    return context.prisma.deleteUser({ 
        id:args.id
    })
}

module.exports = {
    post,
    update,
    deleted
}