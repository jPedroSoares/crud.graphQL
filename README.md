# Crud GraphQL
### Install packages
```
$ yarn install
```
###### OR
```
$ npm install
```

### Install the Prisma CLI
```
$ yarn global add prisma
```
You can see more about how to do this [here](https://www.prisma.io/docs/quickstart/).

### Deploy Prisma and Database
```
$ prisma deploy
```

### Selected the Database
```
> Demo server + MySQL database  Free development environment hosted in Prisma Cloud 
```
When the browser opens, register with Prisma Cloud and go back to your terminal.

In this project, a free database (AWS Aurora) hosted on Prisma Cloud is being used. If you would like to learn more about setting up Prisma locally or with your own database, see the documentation [here](https://www.prisma.io/docs/1.34/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/).

### Selected the region of your demo server 
Select the region for your Demo server. This done, simply press Enter twice to use the suggested values ​​for service and stage.


In prisma/prisma.yml you find your endpoint, something similar to this https://us1.prisma.sh/john-lester/CRUD-GraphQl/dev

### Start Application
```
$ node src/index.js
```

### References
https://www.prisma.io/docs/
<br>
https://www.howtographql.com/


### Requirements
Node
<br>
Npm/Yarn
