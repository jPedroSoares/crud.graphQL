function newUserSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.user({ mutation_in: ['CREATED'] }).node()
}
  
const newUser = {
  subscribe: newUserSubscribe,
  resolve: payload => {
    return payload
  },
}

function updateUserSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.user({ mutation_in: ['UPDATED'] }).node()
}
  
const updateUser = {
  subscribe: updateUserSubscribe,
  resolve: payload => {
    return payload
  },
}

function deleteUserSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.user({ mutation_in: ['DELETED'] }).node()
}
  
const deleteUser = {
  subscribe: deleteUserSubscribe,
  resolve: () => {
    return "Successfully deleted"
  },
}

module.exports = {
  newUser,
  updateUser,
  deleteUser
}