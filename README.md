# Le bon coin

Remake du bon coin, site de petites annonces de particuliers.

## Getting Started

Install dependencies

```
npm install

```

### Structures

    - app
        ----- controllers/
        ---------- articles.js  <!-- the article controller to set up CRUD -->
        ---------- users.js     <!-- the user controller to set up CRUD -->
        ----- helpers/
        ---------- token.js     <!-- the token helpers for check token -->
        ---------- validator.js <!-- the validator helper to validate datas to handle CRUD -->
        ---------- view.js      <!-- the view helper -->
        ----- models/
        ---------- Articles.js  <!-- the nerd model to handle CRUD -->
        ---------- Users.js     <!-- the nerd model to handle CRUD -->
        ----- routes/
        ---------- index.js     <!-- the router for seperate article's to user's path -->
        ---------- Articles.js  <!-- the article route -->
        ---------- Users.js     <!-- the user route -->
    - config
        ----- config.js   
    - node_modules              <!-- created by npm install -->
    - public                    <!-- all frontend and angular stuff -->
    ----- css
    ----- js
    ---------- controllers      <!-- angular controllers -->
    ---------- services         <!-- angular services -->
    ---------- app.js           <!-- angular application -->
    ---------- appRoutes.js     <!-- angular routes -->
    ----- img
    ----- libs                  <!-- created by bower install -->
    ----- views
    ---------- home.html
    ---------- nerd.html
    ---------- geek.html
    ----- index.html
    - .gitignore                <!-- ignored files by git -->
    - mongod                    <!-- shortcut to setup database -->
    - mongodRepair              <!-- shortcut to repair database -->
    - .bowerrc                  <!-- tells bower where to put files (public/libs) -->
    - bower.json                <!-- tells bower which files we need -->
    - package.json              <!-- tells npm which packages we need -->
    - server.js                 <!-- set up our node application -->
    
### Prerequisites

Run mongodb-server

```
sudo mongod --storageEngine wiredTiger --dbpath data/db
```

or exec mongod file
````
sudo ./mongod
````

 
### Run server

A simple command to set DEV-env & run server.

```
npm start
```


## Demo

For demo, you can visit this [link](5.196.66.106/leboncoin).

## Versioning

We use [Git](https://git-scm.com/) for versioning. For the versions available, see the [this repository](https://github.com/kiloumap/Le-bon-coin). 

## Authors

* **Laurent Martinez** - *Kiloumap* - [laurent.martinez06@gmail.com](laurent.martinez06@gmail.com)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
