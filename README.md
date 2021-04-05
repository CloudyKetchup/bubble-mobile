# Bubble app

## Home page
![Main page](./docs/main.png)

#
## Discover sitters
![](./docs/sitters.png)

#
## Sitter profile
![](./docs/sitter.png)

#
## Bookings
![](./docs/bookings.png)

# Setup

Before everything you should setup the project.

Run `yarn install` to install all the dependencies. <br/>
Modify [config.json](./src/config.json) file, and update the api endpoint

``` json
{
  "api": {
    "url": "http://your-api-url-here.com/"
  }
}
```

# Running the application

``` bash
yarn install
```

### Running on IOS
``` bash
yarn ios
```

### Running on Android
``` bash
yarn android
```

# Todo

- [ ] Theme switch button
- [ ] Write tests
- [ ] Profile page
- [ ] Improve UI layout
- [ ] Registration page