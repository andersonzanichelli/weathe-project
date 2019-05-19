Needs a installed mongodb on localhost

Enter in the database and run the following commands:

```
use weatherDB

db.createUser({ "user": "weather_user", "pwd": "weather_pass", "roles": [{ "role": "readWrite", "db": "weatherDB" }]})

db.city.createIndex( { "name": 1, "country": 1 }, { unique: true } )
```

To build the project you need have the jdk 1.8 and the JAVA_HOME variable configured.
run the command below to build

```
mvn package
```

The application will be built on the target folder and to run use the command

```
java -jar target/weather-information-0.1-SNAPSHOT.jar
```

To access the application, open the web browser and go to the

http://localhost:8080/index.html
