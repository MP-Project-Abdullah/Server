# Server

# Packages

- express
- dotenv
- bcrypt
- cors
- jsonwebtoken
- mongoose
- nodemailer
- passport
- passport-google-oauth20
- popup-tools

# Links

[Trello](https://trello.com/b/I4xUaGQ9/mp-project-abdullah)
[Server](https://github.com/MP-Project-Abdullah/Server)
[clinte](https://github.com/MP-Project-Abdullah/Client/blob/main/README.md)

## Schema User

| Key          | Type     | Options           | REF  | default value |
| ------------ | -------- | ----------------- | ---- | ------------- |
| role         | objectId |                   | Role |               |
| username     | String   | requrired, unique |      |               |
| name         | String   | requrired         |      |               |
| email        | String   | requrired, unique |      |               |
| password     | String   | requrired         |      |               |
| activate     | Boolean  |                   |      | false         |
| activateCode | String   |                   |      |               |
| resetPass    | Boolean  |                   |      | false         |
| resetCode    | String   |                   |      |               |
| isDel        | Boolean  |                   |      | false         |
| spam         | String   |                   |      |               |

## Schema Project

| Key      | Type     | Options   | REF     | default value |
| -------- | -------- | --------- | ------- | ------------- |
| comment  | objectId |           | Comment |               |
| user     | objectId |           | User    |               |
| package  | objectId |           | Package |               |
| describe | String   | requrired |         |               |
| title    | String   | requrired |         |               |
| kind     | String   | requrired |         |               |
| deadline | String   | requrired |         |               |
| time     | Date     |           |         |               |
| location | String   |           |         |               |
| goal     | Number   | requrired |         |               |
| pledged  | Number   |           |         |               |
| isDel    | Boolean  |           |         | false         |
| img      | String   | requrired |         |               |
| desc     | String   | requrired |         |               |
| img1     | String   |           |         |               |
| img2     | String   |           |         |               |
| img3     | String   |           |         |               |
| img4     | String   |           |         |               |
| img5     | String   |           |         |               |
| img6     | String   |           |         |               |
| desc1    | String   |           |         |               |
| desc2    | String   |           |         |               |
| desc3    | String   |           |         |               |
| desc4    | String   |           |         |               |
| desc5    | String   |           |         |               |
| desc6    | String   |           |         |               |

## Schema Role

| Key        | Type   | Options | REF | default value |
| ---------- | ------ | ------- | --- | ------------- |
| role       | String |         |     |               |
| permission | Array  |         |     |               |

## Schema Comment

| Key     | Type     | Options   | REF     | default value |
| ------- | -------- | --------- | ------- | ------------- |
| project | objectId |           | Project |               |
| user    | objectId |           | User    |               |
| title   | String   | requrired |         |               |
| amount  | Number   | requrired |         |               |
| desc    | String   | requrired |         |               |
| arrive  | String   | requrired |         |               |

## Schema Package

| Key     | Type     | Options   | REF     | default value |
| ------- | -------- | --------- | ------- | ------------- |
| project | objectId |           | Project |               |
| user    | objectId |           | User    |               |
| title   | String   | requrired |         |               |
| time    | Date     |           |         |               |

## Schema SuccessStory

| Key   | Type     | Options   | REF  | default value |
| ----- | -------- | --------- | ---- | ------------- |
| user  | objectId |           | User |               |
| title | String   | requrired |      |               |
| desc  | String   | requrired |      |               |
| img   | String   | requrired |      |               |
| desc1 | String   |           |      |               |
| desc2 | String   |           |      |               |
| desc3 | String   |           |      |               |
| img1  | String   |           |      |               |
| img2  | String   |           |      |               |
| img3  | String   |           |      |               |

# ERD

![Screenshot (144)](https://user-images.githubusercontent.com/92247941/146668505-b35da740-6c0c-4996-a4d1-b698900dc42b.png)

## User routers

| HTTP METHOD | URL             | Permissions | Behavior               | Auth                          | Success status | Error Status     |
| ----------- | --------------- | ----------- | ---------------------- | ----------------------------- | -------------- | ---------------- |
| GET         | /alluser        | admin       | Get all users          | Authentication, Authorization | RES 200        | RES 400          |
| GET         | /userById/:\_id | user        | Get user by id         | Authentication                | RES 200        | RES 400, RES 404 |
| POST        | /register       | geust       | Create new user        | Authentication                | RES 200        | RES 400          |
| POST        | /login          | geust       | Login                  |                               | RES 200        | RES 400, RES 404 |
| PUT         | /updateName     | user        | Update name the user   | Authentication                | RES 200        | RES 400          |
| PUT         | /updateAvatar   | user        | Update avatar the user | Authentication                | RES 200        | RES 400          |
| PUT         | /deleteUser     | admin       | Soft delete the user   | Authentication, Authorization | RES 200        | RES 404, RES 403 |

## Project routers

| HTTP METHOD | URL                | Permissions | Behavior                | Auth           | Success status | Error Status     |
| ----------- | ------------------ | ----------- | ----------------------- | -------------- | -------------- | ---------------- |
| GET         | /allproject        | geust       | Get all project         |                | RES 200        | RES 400          |
| GET         | /projectById/:\_id | geust       | Get project by id       |                | RES 200        | RES 400,RES 404  |
| POST        | /newProject        | user        | Create new project      | Authentication | RES 200        | RES 400          |
| PUT         | /updateProject     | user        | Update project the user | Authentication | RES 200        | RES 400          |
| PUT         | /deleteProject     | user        | Soft delete the project | Authentication | RES 200        | RES 400, RES 403 |

## Comment routers

| HTTP METHOD | URL                | Permissions | Behavior                    | ِAuth          | Success status | Error Status |
| ----------- | ------------------ | ----------- | --------------------------- | -------------- | -------------- | ------------ |
| GET         | /allComment/:id    | geust       | Get all comments by post id |                | RES 200        | RES 400      |
| DELETE      | /deleteComment/:id | user        | Delete comment              | Authentication | RES 200        | RES 400      |
| POST        | /newComment        | user        | Create new comment          | Authentication | RES 200        | RES 400      |

## Role routers

| HTTP METHOD | URL      | Permissions | Behavior        | Auth                          | Success status | Error Status    |
| ----------- | -------- | ----------- | --------------- | ----------------------------- | -------------- | --------------- |
| GET         | /allrole | admin       | Get all role    | Authentication, Authorization | RES 200        | RES 400,RES 403 |
| POST        | /newRole | admin       | Create new role | Authentication, Authorization | RES 200        | RES 400,RES 403 |

## Package routers

| HTTP METHOD | URL          | Permissions | Behavior          | Auth           | Success status | Error Status      |
| ----------- | ------------ | ----------- | ----------------- | -------------- | -------------- | ----------------- |
| GET         | /package/:id | user        | Get package by id | Authentication | RES 200        | RES 400 , RES 404 |
| POST        | /newPackage  | user        | Create new role   | Authentication | RES 200        | RES 400           |

# UML

![Screenshot (134)](https://user-images.githubusercontent.com/92247941/146356877-fca77ef3-452f-48de-9d7b-fcc1d3b48e5f.png)

[here](https://drive.google.com/file/d/1CzUcRdSd1-91CtpPpF_AEq5frq5_CaT2/view?usp=sharing)
