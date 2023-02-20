<p align="center"><a href="https://beeproger.com" target="_blank"><img src="https://media.licdn.com/dms/image/C4E0BAQFtygilGPMZ3Q/company-logo_200_200/0/1661769361303?e=2147483647&v=beta&t=jZGOUjxkqiGFr3OpfD40J31zr4Fxvhni9fdsUFXn9p4" width="150" alt="beep roger"></a></p>

## Beep roger interview Solution | Todo list application

To-do list consisting of Laravel backend and frontend reactjs.

### Features

-   Shows a list of items
-   Edit an item
-   A photo uploaded with the item
-   View the details of an item
-   Mark an item as complete
-   Remove an item from the list

### Setup ( Docker )

Make sure docker engine is running on your machine.

Clone the git repository using the command below.

```
git clone git@github.com:williamjingo/beeproger.git
```

The next steps assume that you running this project using docker, However you can still run this project without using docker following the [laravel docs](https://laravel.com/docs/9.x/installation)

Make sures docker engine is running on your machine.

Navigate to the newly created folder `beeproger` and install project dependencies by executing the command below.

```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer install --ignore-platform-reqs
```

Create the .env file using the command below

```
cp .env.example .env
```

Run project using

```
./vendor/bin/sail up -d
```

Configure a shell alias that allows you to execute Sail's commands more easily

```
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

Generate application key using

```
sail artisan key:generate
```

To make files in the `storage/app/public` accessible to the web. create a symbolic link using the command below

```
sail artisan storage:link
```

For sample Todos seed the database with command below

```
sail artisan migrate --seed
```

Run the command below to stop the application docker containers

```
sail down
```

### Author

<a href="https://beeproger.com" target="_blank">George Jingo</a>
