# express-react-boilerplate
A very basic boilerplate for an isomorphic Node app using Express and React with multiple DB support.

Different databases boilerplates are found in branches.

## Contents
* [Install, build and run](https://github.com/engvik/express-react-boilerplate#install-build-and-run)
* [Database support](https://github.com/engvik/express-react-boilerplate#database-support)
* [Environment variables](https://github.com/engvik/express-react-boilerplate#environment-variables)
* [Database specific environment variables](https://github.com/engvik/express-react-boilerplate#database-specific-environment-variables)
  * [RethinkDB](https://github.com/engvik/express-react-boilerplate#rethinkdb)
  * [MongoDB](https://github.com/engvik/express-react-boilerplate#mongodb)
  * [MySQL](https://github.com/engvik/express-react-boilerplate#mysql)

## Install, build and run

    git clone git@github.com:engvik/express-react-boilerplate.git
    cd express-react-boilerplate
    git checkout db/<database> // example: git checkout db/mongo
    npm install
    npm start
    
## Database support
* RethinkDB ([db/rethink](https://github.com/engvik/express-react-boilerplate/tree/db/rethink)) ([Environment vars](https://github.com/engvik/express-react-boilerplate#rethinkdb))
* MongoDB ([db/mongo](https://github.com/engvik/express-react-boilerplate/tree/db/mongo)) ([Environment vars](https://github.com/engvik/express-react-boilerplate#mongodb))
* MySQL ([db/mysql](https://github.com/engvik/express-react-boilerplate/tree/db/mysql)) ([Environment vars](https://github.com/engvik/express-react-boilerplate#mysql))

## Environment variables
* `PORT`
* `NODE_ENV`

## Database specific environment variables

### RethinkDB
* `RETHINK_URL`
* `RETHINK_PORT`

### MongoDB
* `MONGO_URL`
* `MONGO_PORT`

### MySQL
* `MYSQL_HOST`
* `MONGO_USERNAME`
* `MONGO_PASSWORD`
* `MONGO_DATABASE`
