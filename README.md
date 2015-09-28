# express-react-boilerplate
A very basic boilerplate for an isomorphic Node app using Express and React with multiple DB support.

Different databases boilerplates are found in branches.

## Contents
* [Install, build and run](https://github.com/engvik/express-react-boilerplate#install-build-and-run)
* [Database support](https://github.com/engvik/express-react-boilerplate#database-support)
* [Environment variables](https://github.com/engvik/express-react-boilerplate#environment-variables)
  * [RethinkDB](https://github.com/engvik/express-react-boilerplate#rethinkdb-environment-variables)
  * [MongoDB](https://github.com/engvik/express-react-boilerplate#mongodb-environment-variables)

## Install, build and run

    git clone git@github.com:engvik/express-react-boilerplate.git
    cd express-react-boilerplate
    git merge origin/db/<database> // example: git merge origin/db/mongo
    npm install
    npm start
    
## Database support
* RethinkDB ([db/rethink](https://github.com/engvik/express-react-boilerplate/tree/db/rethink)) ([Environment vars](https://github.com/engvik/express-react-boilerplate#rethinkdb-environment-variables))
* MongoDB ([db/mongo](https://github.com/engvik/express-react-boilerplate/tree/db/mongo)) ([Environment vars](https://github.com/engvik/express-react-boilerplate#mongodb-environment-variables))

## Environment variables
* `PORT`
* `NODE_ENV`

### RethinkDB environment variables
* `RETHINK_URL`
* `RETHINK_PORT`

### MongoDB environment variables
* `MONGO_URL`
* `MONGO_PORT`
