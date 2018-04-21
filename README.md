Category (Title, )

SubCategory

Articles

Users

Shop

Chat


# Le bon coin

One Paragraph of project description goes here

## Getting Started

Run npm to install dependencies

```
npm install
```

### Structures

    - app
        ----- models/
        ---------- nerd.js <!-- the nerd model to handle CRUD -->
    ----- routes.js
    - config
        ----- db.js
    - node_modules <!-- created by npm install -->
    - public <!-- all frontend and angular stuff -->
    ----- css
    ----- js
    ---------- controllers <!-- angular controllers -->
    ---------- services <!-- angular services -->
    ---------- app.js <!-- angular application -->
    ---------- appRoutes.js <!-- angular routes -->
    ----- img
    ----- libs <!-- created by bower install -->
    ----- views
    ---------- home.html
    ---------- nerd.html
    ---------- geek.html
    ----- index.html
    - .bowerrc <!-- tells bower where to put files (public/libs) -->
    - bower.json <!-- tells bower which files we need -->
    - package.json <!-- tells npm which packages we need -->
    - server.js <!-- set up our node application -->

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


## Running the tests

As starting command, for test.

````
npm test
````


## Demo

For demo, you can visit this [link](5.196.66.106/leboncoin).

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Laurent Martinez** - *Kiloumap* - [laurent.martinez06@gmail.com](laurent.martinez06@gmail.com)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
