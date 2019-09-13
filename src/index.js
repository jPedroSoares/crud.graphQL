const { GraphQLServer } = require('graphql-yoga')

//Criando uma lista de usuários
let users = [{
    id: `Usuario-1`,
    nome: `João Pedro`,
    idade: `19`,
    altura: `1.78`
}]
let atual
let idCount = users.length+1

//Defininido uma constante com as funções resolvers
const resolvers = {
    Query: {
        id: () => `001`,
        listUsers(parent, args) { 
            args.id ?
            atual = users.filter((user) => user.id == args.id)
            : atual = users
            ;
            return atual
        }
    },
    Mutation: {
        post: (parent, args) => {
            const user = {
                id: `Usuario-${idCount++}`,
                nome: args.nome,
                idade: args.idade,
                altura: args.altura
            }
            users.push(user)
            return user
        },
        update: (parent, args) => {
            const newUser = {
                id: args.id,
                nome: args.nome,
                idade: args.idade,
                altura: args.altura
            }
            users.map((user, index ) => {
                if(user.id == args.id) users[index] = newUser
            })
            return newUser
        },
        delete: (parent, args) => {
            users = users.filter(user => user.id != args.id)
            return "Deletado com sucesso!"
        }
    }
}

const server = new GraphQLServer({
    //retornando arquivo com os Schemas do GraphQL
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))