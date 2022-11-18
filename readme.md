# MCR Codes Music Library Project

## ABOUT

As part of the MCR Codes back-end module, this project is designed to showcase RESTful API routes and CRUD operations.
Users can access this data using a MySQL database

### Concepts

+ [CRUD](https://www.codecademy.com/article/what-is-crud)
+ [REST](https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f)

### Installation

+ install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
+ Once you have docker installed, you can pull and run a MySQL image with: 

```console
 docker run -d -p 3307:3306 --name music_library_mysql -e MYSQL_ROOT_PASSWORD=password mysql
 ```
 
+ In your terminal run:
```console
npm i
```