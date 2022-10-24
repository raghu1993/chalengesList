# Scripbox Hack Ideas

### Introduction

Scripbox Hack Ideas is a web application which lets employees of an organization to add/manage challenges for internal hackathons which they organize every month. Some of the key features of the application are :
- Login to application using Employee Id (for demo purpose enter any string)
- List of all **challenges** in the Home page 
- Challenge contains No of votes, My challenge label (if the same user created it), No of Views, Title,Description , Tags , Employee Initials,Created time and Date
- User can post a **New Challenge / Ideas**
- User can **Upvote / DownVote  Challenges** 
- On home page user can even **Sort Challenges** based on Recent Challenge , Oldest Challenge and Most Voted
- User can manage his Challenges with Edit or Delete options under **Your Challenge** 
- User can logout from the application

## Build Setup for docker 
- Download the application zip file and extract the folder
- Open the extracted folder in IDE
- In terminal just execute the startapp.sh file to build the application through Docker container

```bash
# build for docker
$ sudo sh startapp.sh

```


## Build Setup for localhost serving
- Download the application zip file and extract the folder
- Open the extracted folder in IDE

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

