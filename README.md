# knowFootball API

knowFootball API, built on the top of nodeJS and ExpressJS, is a fun JSON API for Football(soccer) related quiz and facts

# Deployed on Heroku
The API is deployed on Heroku.
Here is the root route: knowFootball.Herokuapp.com

Currently available features are:
  - Quiz
  - Facts
# Usage

- /quiz
- /facts

Calling these routes return random facts and Q/A related to football.

> Append "/num=<quantity>" for more than one result. 
> Example knowFootball.Herokuapp.com/facts/num=5

# Contribute
### Tech Stack Used

Dillinger uses a number of open source projects to work properly:

* NodeJS
* ExpressJS
* EJS
* Heroku (for deployment)

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ cd knowFootball-API
$ npm install
$ node app.js
```

Now open `localhost:5000/` on browser

### DataBase

JSON files store the data. Description as follows.

| Route | File name | Structure |
| ------ | ------ | --- |
| Quiz | quiz.json | Array of strings |
| Facts | facts.json | Array of Objects |

### Development

Want to contribute? Great!
Checkout the Todos section below or Give some creative suggestion :)

### Todos

 - Add more data
 - Add more routes
 - Add License

License
----

No Till Now xD

**Free Software, Hell Yeah!**

