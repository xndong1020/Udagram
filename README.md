### Note:

1. I have added a basic auth middleware to authenticate user. To test the API, please add basic auth header `username: admin, password: password`. Alternatively, please use the postman script provided in this project `./cloud-cdnd-c2-final.postman_collection.json`. I have added the basic auth header for route `/filteredimage`

2. The image url provided (`https://timedotcom.files.wordpress.com/2019/03/kitten-report.jpg`) is **DEAD**. Please test with other valid image urls, for example the one I am using `http://placekitten.com/g/200/3000.`

3. The url to the elasticbeanstalk is **http://udagram-dev22.us-west-2.elasticbeanstalk.com/**. Hence the full url for testing will be **http://udagram-dev22.us-west-2.elasticbeanstalk.com/filteredimage?image_url=http://placekitten.com/g/200/300**

#### To test locally:

install

```js
npm i -D
```

local dev

```js
npm run dev
```

build (make sure you have dev dependencies installed, for example `typescript`)

```js
npm run build
```

#### Deployment to eb

init eb config file

```sh
eb init
```

then change the config file generated in `.elasticbeanstalk/config.yml`, add below line

```yml
deploy:
  artifact: ./www/Archive.zip
```

Then create the project

```
eb create
```

To update file, make sure you run `npm run build` again, then run `eb deploy`
