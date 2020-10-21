# Backend Test

Develop the workflow's REST API following the specification bellow and document it.

## Delivery instructions

Clone this project and push a private repository in the [GitHub](https://github.com/), [Gitlab](https://about.gitlab.com/) or [Bitbucket](https://bitbucket.org/). When you want to our review, write any information that you think important in the README.md and send an email to talentos@nuveo.ai. We'll follow your instructions to run your code and look the outcome.

## Defining a workflow

| Name   | Type                     | Description                |
| ------ | ------------------------ | -------------------------- |
| UUID   | UUID                     | workflow unique identifier |
| status | Enum(inserted, consumed) | workflow status            |
| data   | JSONB                    | workflow input             |
| steps  | Array                    | name of workflow steps     |

## Endpoints

| Verb  | URL               | Description                                                                               |
| ----- | ----------------- | ----------------------------------------------------------------------------------------- |
| POST  | /workflow         | insert a workflow on database and on queue and respond request with the inserted workflow |
| PATCH | /workflow/{UUID}  | update status from specific workflow                                                      |
| GET   | /workflow         | list all workflows                                                                        |
| GET   | /workflow/consume | consume a workflow from queue and generate a CSV file with workflow.Data                  |

## Technologies

- Go, C, C++, Python, Java or any other that you know
- PostgreSQL
- A message queue that you choose, but describe why you choose.

# Instalation

To run this API, you need to have node, npm and PostgreSQL installed on your computer.

At first, you need to create a database with the name the following name in the default port of your connection with PostgreSQL:

```bash
testdb
```

> You can change the name of the database in the file `./src/config/database.js`

After the creation of the database, input the connect string in the .env in your root folder.

```bash
DEV_DATABASE_URL=<your-database-connection-string>
```

> You can change the default port of the API by adding a variable `PORT`, the default is 1337

Now, you have to change the postgresql user credentials in the file `./src/config/database.js`

Then, in the root of your project, run the command:

```bash
npm install
```

This will install all the dependencies needed.

# Usage

Run the following command:

```bash
npm run migrate
```

This will create the Wokflow table on our database. Then, run:

```bash
npm start
```

The api will be available at port 1337.