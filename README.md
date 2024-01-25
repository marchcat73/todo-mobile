# Mobile Task Manager

engines: <br />
node: ">=18.17", <br />
npm: ">=9"

## Backend

```bash
cd backend
npm i
npm run dev
```

<p>в файле /todo-mobile/constants/baseUrl.js поменять ip 192.168.1.141 на ip бекенда в своей сети</p>
## Backup and restore DB

```bash
$ mongodump --db=todo --uri="mongodb://127.0.0.1:27017"
$ mongorestore --drop dump/

windows
.\mongodump --db=todo --uri="mongodb://127.0.0.1:27017"
.\mongorestore --drop dump/
```

## Front

```bash
cd todo-mobile
npm i
npm run start
```
