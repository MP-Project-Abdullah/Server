# Server

# UML

![Screenshot (134)](https://user-images.githubusercontent.com/92247941/146356877-fca77ef3-452f-48de-9d7b-fcc1d3b48e5f.png)

[here](https://drive.google.com/file/d/1CzUcRdSd1-91CtpPpF_AEq5frq5_CaT2/view?usp=sharing)

# ERD

![Screenshot (144)](https://user-images.githubusercontent.com/92247941/146668505-b35da740-6c0c-4996-a4d1-b698900dc42b.png)

## User routers

| HTTP METHOD | URL             | Permissions | Behavior               |
| ----------- | --------------- | ----------- | ---------------------- |
| GET         | /alluser        | Public      | Get all users          |
| GET         | /userById/:\_id | Public      | Get user by id         |
| POST        | /register       | Public      | Create new user        |
| POST        | /login          | Public      | Login                  |
| PUT         | /updateName     | Public      | Update name the user   |
| PUT         | /updateAvatar   | Public      | Update avatar the user |
| PUT         | /deleteUser     | Private     | Soft delete the user   |

## Project routers

| HTTP METHOD | URL                | Permissions | Behavior                |
| ----------- | ------------------ | ----------- | ----------------------- |
| GET         | /allproject        | Public      | Get all project         |
| GET         | /projectById/:\_id | Public      | Get project by id       |
| POST        | /newProject        | Public      | Create new project      |
| PUT         | /updateProject     | Public      | Update project the user |
| PUT         | /deleteProject     | Private     | Soft delete the project |

## Commment routers

| HTTP METHOD | URL                | Permissions | Behavior                    |
| ----------- | ------------------ | ----------- | --------------------------- |
| GET         | /allComment/:id    | Public      | Get all comments by post id |
| DELETE      | /deleteComment/:id | Public      | Delete comment              |
| POST        | /newComment        | Public      | Create new comment          |
