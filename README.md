
# Incubation Project (web App)

Incubation is Web Application with the functionalities
like accepting application from Start up, Jwt authentication with Login,
accept or reject appplication,review application,Approve application,
allocate slot for incubation based on approved list,display the progress 
bar on the different stages of application processing.

Features list,
1.Sign up and Login Authentication
2.JWT authentication and route verification
3.User Application Submission
4.Admin side Application management
5.Booking of slot for Incubation

Technologies used:
React js | JWT| Node js | Express js | Tailwind CSS|
Mongo DB| JSX

## API Reference



#### Get HomePage

```http
  GET /locahost:3000
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Login/Register

```http
  GET /admin

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |




#### Get all applications list

```http
  GET /admindashboard
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |


#### Get the list of approved applications

```http
  GET /approvelist
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Your API key |

#### Approve an application

```http
  GET /approvelist
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get the status of applications

```http
  GET /progressbar
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.|Your API key


## Run Locally

Clone the project

```bash
  git clone https://github.com/vishalvarghese/incubation-project.git
```

Go to the project directory

```bash
  cd client
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  client:npm start
  server:npm start
```


## 🚀 About Me
I'm Vishal varghese jans, full stack developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://vishalvarghese.github.io/portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vishalvjans/)


