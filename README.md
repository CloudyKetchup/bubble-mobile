# Bubble app

<div style="display: grid; grid-template-columns: 250px 250px 250px; grid-gap: 20px; margin-bottom: 20px;">
  <img src="./docs/login.png" width="250" />
  <img src="./docs/main.png" width="250" />
  <img src="./docs/sitters.png" width="250" />
  <img src="./docs/sitter.png" width="250" />
  <img src="./docs/bookings.png" width="250" />
</div>

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