# Mobile Task Manager

engines: <br />
node: ">=18.17", <br />
npm: ">=9"

## Backup and restore DB

```bash
$ mongodump --db=todo --uri="mongodb://127.0.0.1:27017"
$ mongorestore --drop dump/

windows
.\mongodump --db=todo --uri="mongodb://127.0.0.1:27017"
.\mongorestore --drop dump/
```
