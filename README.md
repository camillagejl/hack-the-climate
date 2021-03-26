# buyfoodwithplastic

1. Resources
2. Project description
3. Project setup

## 1. Resources
- Presentation video [can be found here]().
- Live view of the project in this repository (manual receipt input) [can be viewed here](http://camilladilling.com/buyfoodwithplastic/).
- Design prototype can be found in the "resources" folder in this repository, or [view it online here](https://xd.adobe.com/view/1cbe811e-b20e-4b2a-9615-dc2af535b940-49ed/?fullscreen).
- OCR demo repository [can be found here](https://github.com/Thesourcer1/Cognitive-Vision-Windows).

## 2. Project description

### Inspiration
Buy Food With Plastic is an NGO that helps the world in two ways at once: collecting plastic, and handing out meals. Their work is important, and all time spent on administration is time they could have spent on their good work. We have decided to prototype a back office app for the company and volunteers.

### What it does
We have focused on reducing the administration time, with:

- everything available in one app;
- quick and easy ways to register bottles collected and meals served;
- text recognition for handwritten receipts;
- a form with proper suggestions for manually inputting receipts.

### How we built it

#### Design prototype
Our prototype is developed in Adobe XD, which makes it easy to reuse components, share the design with others and for developers to find/know the proper scales in the design.

#### Text recognition
For text recognition, we have used OCR API to detect the handwritten text in the photo and return it as a JSON format. Through visual studio, we have managed to create a startup idea for getting the handwritten data, but it’s not able to automatically convert it into data in a form yet.

We would like to take this idea further and implement a camera option as well, so the user faster can get the data uploaded to azure storage. We would also like to use machine learning to make the api recognize the text better and differentiate the different fields so it all doesn’t get mixed together.

#### Receipt form
We have developed our quick prototype in VueJS. We mainly decided on this library because it is working well with editing and updating, making sure that the number of bottles collected etc. is always up to date everywhere in the app.

We have used the Vuex Store as a "mock database" to demonstrate, how new items would be added to the database, how the app will find the most frequently used price of an item etc. The app then gets the data from this Store, which contains all items ever bought, so the volunteers don't have to write the whole name and price for a product every time they add a new receipt.

### Challenges we ran into
Doing this next to our studies, we have generally been under great time pressure. The text recognition area is very new to us, so it has been difficult for us to figure out what technologies to use, and how exactly they can do what we need for our app.

### Accomplishments that we're proud of
We're very proud of our final concept and prototypes, and feel that this app could definitely be useful for the NGO.

### What we learned
We have learned a lot about OCR, and how to build a concept and find the necessary technologies from the bottom. The frame of the project has been very wide, so it's been a great experience to create the concept.

### What's next for Team Platypus
We have had some great team work, and as this has been the first hackathon for all of us, we have all learned that it is a great experience, and great to work on something that might help the world - it will not be the last time we do it!

## 3. Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
