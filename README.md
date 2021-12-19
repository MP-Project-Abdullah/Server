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

[Trello](https://trello.com/b/I4xUaGQ9/mp-project-abdullah)

# UML

![Screenshot (134)](https://user-images.githubusercontent.com/92247941/146356877-fca77ef3-452f-48de-9d7b-fcc1d3b48e5f.png)

[here](https://drive.google.com/file/d/1CzUcRdSd1-91CtpPpF_AEq5frq5_CaT2/view?usp=sharing)

# ERD

![Screenshot (144)](https://user-images.githubusercontent.com/92247941/146668505-b35da740-6c0c-4996-a4d1-b698900dc42b.png)

## User routers

| HTTP METHOD | URL             | Permissions | Behavior               |
| ----------- | --------------- | ----------- | ---------------------- |
| GET         | /alluser        | admin       | Get all users          |
| GET         | /userById/:\_id | user        | Get user by id         |
| POST        | /register       | geust       | Create new user        |
| POST        | /login          | geust       | Login                  |
| PUT         | /updateName     | user        | Update name the user   |
| PUT         | /updateAvatar   | user        | Update avatar the user |
| PUT         | /deleteUser     | admin       | Soft delete the user   |

## Project routers

| HTTP METHOD | URL                | Permissions | Behavior                |
| ----------- | ------------------ | ----------- | ----------------------- |
| GET         | /allproject        | geust       | Get all project         |
| GET         | /projectById/:\_id | geust       | Get project by id       |
| POST        | /newProject        | user        | Create new project      |
| PUT         | /updateProject     | user        | Update project the user |
| PUT         | /deleteProject     | user        | Soft delete the project |

## Comment routers

| HTTP METHOD | URL                | Permissions | Behavior                    |
| ----------- | ------------------ | ----------- | --------------------------- |
| GET         | /allComment/:id    | geust       | Get all comments by post id |
| DELETE      | /deleteComment/:id | user        | Delete comment              |
| POST        | /newComment        | user        | Create new comment          |

## Role routers

| HTTP METHOD | URL      | Permissions | Behavior        |
| ----------- | -------- | ----------- | --------------- |
| GET         | /allrole | admin       | Get all role    |
| POST        | /newRole | admin       | Create new role |

## Package routers

| HTTP METHOD | URL          | Permissions | Behavior          |
| ----------- | ------------ | ----------- | ----------------- |
| GET         | /package/:id | user        | Get package by id |
| POST        | /newPackage  | user        | Create new role   |
