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

# Trello

[Trello](https://trello.com/b/I4xUaGQ9/mp-project-abdullah)

# UML

![Screenshot (134)](https://user-images.githubusercontent.com/92247941/146356877-fca77ef3-452f-48de-9d7b-fcc1d3b48e5f.png)

[here](https://drive.google.com/file/d/1CzUcRdSd1-91CtpPpF_AEq5frq5_CaT2/view?usp=sharing)

# ERD

![Screenshot (144)](https://user-images.githubusercontent.com/92247941/146668505-b35da740-6c0c-4996-a4d1-b698900dc42b.png)

## Schema user

```bash
{
  username: { type: String, required: true, unique: true },
  name:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  activate: { type:Boolean , defalt: false },
  activateCode: { type: String },
  resetPass: { type:Boolean, default: false } ,
  resetCode: { type:String },
  isDel: { type:Boolean, default: false },
  spam:{ type: String }
}
```

## Schema Project

```bash
{
  describe: { type: String, required: true },
  title: { type: String, required: true },
  kind: { type: String, required: true },
  time: { type: Date },
  deadline: { type: Number, required: true },
  location: { type: String },
  goal: { type: Number, required: true },
  pledged: { type: Number },
  isDel: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  package: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
  img: { type:String, required: true },
  img1: { type:String },
  im2: { type:String },
  im3: { type:String },
  im4: { type:String },
  im5: { type:String },
  im6: { type:String },
  desc: { type:String },
  desc1: { type:String },
  desc2: { type:String },
  desc3: { type:String },
  desc4: { type:String },
  desc5: { type:String },
  desc6: { type:String }
}
```

## Schema Role

```bash
{
role: { type: String },
permission:  {type:Array }
}
```

## Schema Comment

```bash
{
title: { type: String, required: true },
amount: { type: Number, required: true },
desc: { type: String, required: true },
arrive: { type: String, required: true },
user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
}
```

## Schema Package

```bash
{
title: { type: String },
time: { type: Date },
user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
}
```

## Schema SuccessStory

```bash
{
title: { type: String, required: true },
desc: { type: String, required: true },
desc1: { type: String },
desc2: { type: String },
desc3: { type: String },
img: {type:String , required: true },
img1: { type: String },
img2: { type: String }
img3: { type: String }
user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}
```



## User routers

| HTTP METHOD | URL             | Permissions | Behavior               | Auth                          |
| ----------- | --------------- | ----------- | ---------------------- | ----------------------------- |
| GET         | /alluser        | admin       | Get all users          | Authentication, Authorization |
| GET         | /userById/:\_id | user        | Get user by id         | Authentication                |
| POST        | /register       | geust       | Create new user        | Authentication                |
| POST        | /login          | geust       | Login                  |                               |
| PUT         | /updateName     | user        | Update name the user   | Authentication                |
| PUT         | /updateAvatar   | user        | Update avatar the user | Authentication                |
| PUT         | /deleteUser     | admin       | Soft delete the user   | Authentication, Authorization |

## Project routers

| HTTP METHOD | URL                | Permissions | Behavior                | Auth           |
| ----------- | ------------------ | ----------- | ----------------------- | -------------- |
| GET         | /allproject        | geust       | Get all project         |                |
| GET         | /projectById/:\_id | geust       | Get project by id       |                |
| POST        | /newProject        | user        | Create new project      | Authentication |
| PUT         | /updateProject     | user        | Update project the user | Authentication |
| PUT         | /deleteProject     | user        | Soft delete the project | Authentication |

## Comment routers

| HTTP METHOD | URL                | Permissions | Behavior                    | ِAuth          |
| ----------- | ------------------ | ----------- | --------------------------- | -------------- |
| GET         | /allComment/:id    | geust       | Get all comments by post id |                |
| DELETE      | /deleteComment/:id | user        | Delete comment              | Authentication |
| POST        | /newComment        | user        | Create new comment          | Authentication |

## Role routers

| HTTP METHOD | URL      | Permissions | Behavior        | Auth                          |
| ----------- | -------- | ----------- | --------------- | ----------------------------- |
| GET         | /allrole | admin       | Get all role    | Authentication, Authorization |
| POST        | /newRole | admin       | Create new role | Authentication, Authorization |

## Package routers

| HTTP METHOD | URL          | Permissions | Behavior          | Auth           |
| ----------- | ------------ | ----------- | ----------------- | -------------- |
| GET         | /package/:id | user        | Get package by id | Authentication |
| POST        | /newPackage  | user        | Create new role   | Authentication |
