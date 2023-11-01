# Unlock Reviews
While applying for jobs I realized how irritating it is trying to look at reviews for different companies on indeed and glassdoor. They force you to create an account and then review your past companies to see reviews. That being said, as a developer thats not what I was going to do. So I instead decided to make a browswer extension that would allow me to see all of the reviews without having to be logged in and without reviewing my previous employers. Once you have set up the browser extension you are free to look at whatever you would like free of hassle... mostly.

## How to Install
I don't currenlty have this packaged as an official extension. I may or may not do that at some later time. I have tested this on chrome and firefox and it works on both. That being said I would recommend using chrome as you will have load the extension everytime you open firefox. The first thing you will need to do is clone this repo to your local machine in whatever directory you would like. 
```sh
git clone https://github.com/briant1312/unlock-reviews
```
### Installing for Chrome
1. To start, you will need to open your browser and navigate to chrome://extensions/
2. Once you are there in the upper right corner you will need to check the radio button for developer mode
3. Once in developer mode hit the button in the upper left corner that says "load unpacked"
4. From there simply chose the directory that you cloned down and you should be good to go

### Installing for Firefox
1. The first thing you will need to do is update the manifest.json file and change manifest_version from 3 to 2. I believe that version 3 will be available later on in November
2. Next you will need to open your browser and navigate to about:debugging#/runtime/this-firefox
3. Click on the "load temporary add on" button
4. Select the manifest.json file that is in the cloned directory and you should be good to go
5. You will unfortunately have to do this everytime you launch firefox

### Issues with installing
FreeCodeCamp has a really good tutorial for creating your own browswer extension at the following url
```
https://www.freecodecamp.org/news/write-your-own-browser-extensions/
```

## Caveats with the extension
- The implementation for Glassdoor is a little odd. Since it is built in react the browser doesn't actually "navigate" when you click on another page. That being said I wasn't able to find a clean approach for getting this to run everytime you switched pages. How this works is it checks for the login overlay and any collapsed text every second for 5 minutes. If you ever navigate to a new page and the login overlay doesn't go away after 1 second simply refresh the page and everything should be good. I just didn't want it running indefinitely in the background. If you would like this to run for a shorter or longer amount of time you can change the number at the end of the setTimeout call at the bottom of the file. This is the amount of time the script will run in milliseconds.

- Also with glassdoor, I didn't feel it was necessary to remove the "Show More" button underneath some of the longer reviews and responses. All of the text for the review and the employer response are shown on the page. The show more button is just leftover from when the text was initially hidden.

- If you don't have an account with indeed, you will notice a small window start to popup and immediately go away a few seconds after you load each page. This is just the login prompt being removed from the page. Aide from that everything else should function as normal with no interruptions.