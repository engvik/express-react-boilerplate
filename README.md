# express-react-boilerplate
A very basic boilerplate for an isomorphic Node app using Express and React with multiple DB support.

Different databases boilerplates are found in branches.

## Install, build and run

    git clone git@github.com:engvik/express-react-boilerplate.git
    cd express-react-boilerplate
    git merge origin/db/<database>
    npm install
    npm start
    
## Database support
* RethinkDB ([db/rethink](https://github.com/engvik/express-react-boilerplate/tree/db/rethink)) ([Environment vars](https://github.com/engvik/express-react-boilerplate#rethinkdb-environment-variables))

## Environment variables
* `PORT`
* `NODE_ENV`

### RethinkDB environment variables
* `RETHINK_URL`
* `REHINK_PORT`
