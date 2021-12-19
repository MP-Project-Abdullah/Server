# Server

# UML

![Screenshot (134)](https://user-images.githubusercontent.com/92247941/146356877-fca77ef3-452f-48de-9d7b-fcc1d3b48e5f.png)

[here](https://drive.google.com/file/d/1CzUcRdSd1-91CtpPpF_AEq5frq5_CaT2/view?usp=sharing)

# ERD

![Screenshot (144)](https://user-images.githubusercontent.com/92247941/146668505-b35da740-6c0c-4996-a4d1-b698900dc42b.png)

## User routers

| HTTP METHOD | URL             | Permissions | Behavior               |
| ----------- | --------------- | ----------- | ---------------------- |
| GET         | /alluser        | Private     | Get all users          |
| GET         | /userById/:\_id | Private     | Get user by id         |
| POST        | /register       | Private     | Create new user        |
| POST        | /login          | Public      | Login                  |
| PUT         | /updateName     | Private     | Update name the user   |
| PUT         | /updateAvatar   | Private     | Update avatar the user |
| PUT         | /deleteUser     | Private     | Soft delete the user   |

## Project routers

| HTTP METHOD | URL                | Permissions | Behavior                |
| ----------- | ------------------ | ----------- | ----------------------- |
| GET         | /allproject        | Public      | Get all project         |
| GET         | /projectById/:\_id | Public      | Get project by id       |
| POST        | /newProject        | Private     | Create new project      |
| PUT         | /updateProject     | Private     | Update project the user |
| PUT         | /deleteProject     | Private     | Soft delete the project |

## Comment routers

| HTTP METHOD | URL                | Permissions | Behavior                    |
| ----------- | ------------------ | ----------- | --------------------------- |
| GET         | /allComment/:id    | Public      | Get all comments by post id |
| DELETE      | /deleteComment/:id | Private     | Delete comment              |
| POST        | /newComment        | Private     | Create new comment          |

## Role routers

| HTTP METHOD | URL      | Permissions | Behavior        |
| ----------- | -------- | ----------- | --------------- |
| GET         | /allrole | Private     | Get all role    |
| POST        | /newRole | Private     | Create new role |

## Package routers

| HTTP METHOD | URL          | Permissions | Behavior          |
| ----------- | ------------ | ----------- | ----------------- |
| GET         | /package/:id | Private     | Get package by id |
| POST        | /newPackage  | Private     | Create new role   |
