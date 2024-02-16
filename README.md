# WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name**: Varun Reddy Patel

**Email**: patel2vy@mail.uc.edu

![Varun's headshot](images/Patel's_pic.jpg)

## Repository Information

Respository's URL: [https://github.com/patel2vy/patel2vy.github.io](https://github.com/patel2vy/patel2vy.github.io)

This is a public repository for Varun Reddy to store all code from the course. The organization of this repository is as follows.

# Individual Project 1 – Front-end Web Development with a Professional Profile Website on github.io cloud service

## Overview and Requirements 

For Individual Project 1, I created a professional profile webpage and hosted it on GitHub. The website showcases my resume, about, skills, and projects,as well as many technological functions such as integrating a joke API, digital clock, analogue clock, displaying my email address, XKCD comic, Hacker News articles, weather API, and flag counter. The primary goals of this project were to improve my front-end web programming abilities and get actual experience deploying websites with GitHub Sites.

The link to access my website is: [https://patel2vy.github.io/index.html](https://patel2vy.github.io/index.html).

The link to access Individual Project-1 is: [https://github.com/patel2vy/patel2vy.github.io](https://github.com/patel2vy/patel2vy.github.io).

## General Requirements

### Personal Website on Github.io

I have open-sourced a new repository called `patel2vy.github.io`. I used GitHub Pages to create a personal website including my resume, contact details, education, certifications, projects, and skills.

The link to access my website is: [https://patel2vy.github.io/index.html](https://patel2vy.github.io/index.html).

![Resume Website](images/resumepage.png)

### "Web Application Programming and Hacking" course on waph.html file

I made a stand-alone page on my repository called waph.html to introduce the "Web Application Programming and Hacking" course and the practical projects that go along with it. A summary of Lab0, Lab1, Lab2, Hackathon 1, and Individual Project 1 are included in this. 

The link to access waph.html is: [https://patel2vy.github.io/waph.html](https://patel2vy.github.io/waph.html).

This page URL is available via the personal website, as shown in the picture below.

![waph.html page link on mywebsite](images/htmlink.png)

![waph.html page](images/waphhtml.png)

## Non-technical requirements

I have created my own template taking references from we schools


### Page Tracker

In order to track website visits and interaction, I included Flag Counter as a page tracker. 

Based on the two provided websites. `https://flagcounter.com/` is my choice. I used the website to produce a key, which I then included into my code. The integrated flag counter is accessible on the homepage of my website.

Code for integrating Flag Counter:

```html
div style="text-align:left;">
    <a href="https://info.flagcounter.com/szVl"><img
        src="https://s11.flagcounter.com/count2/szVl/bg_FFFFFF/txt_000000/border_000000/columns_2/maxflags_10/viewers_0/labels_1/pageviews_1/flags_0/percent_0/"
        alt="Flag Counter" border="0"></a>
  </div>
```

![Flag Counter](images/Flagcounter.png)

## Technical requirements

### show/hide your email; A digital clock; An analog clock:

Similar to lab 2, we implemented an analogue and digital clock that displays the current time using JavaScript. We also included code that allows us to reveal or conceal the email address based on user input.

Source Code for show/hide your email:

```JS
function showhideEmail() {
      if (shown) {
        document.getElementById('email').innerHTML = "Click here to show my email";
        shown = false;
      }
      else {
        var myemail = "<a href='mailto:sheelada" + "@" + "mail.uc.edu'>sheelada" + "@" + "mail.uc.edu</a>";
        document.getElementById('email').innerHTML = myemail;
        shown = true;
```

Source Code for digital clock:
```JS
function displayTime() {
          document.getElementById('digital-clock').innerHTML = "current time:" + new Date();
        }
        setInterval(displayTime, 500);
```

Source Code for Analog clock:
```JS
var canvas = document.getElementById("analog-clock");
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;
        ctx.translate(radius, radius);
        radius = radius * 0.90
        setInterval(drawClock, 1000);

        function drawClock() {
          drawFace(ctx, radius);
          drawNumbers(ctx, radius);
          drawTime(ctx, radius);
        }
```

Screenshot Showing hide your email, Digital clock, Analog Clock:

![Show/hide your email, Digital clock, Analog Clock,](images/sda.png)

### Two more Functionality of my choice

I have used the `VUE.JS` Framework to integrate Hacker News Api. Five Hacker News Articles are shown using this API. 

Source code for Haacker Api:
```JS
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```
 ```JS
<script>
          new Vue({
            el: '#app',
            data: {
              articles: []
            },
            mounted() {
              this.fetchArticles();
            },
            methods: {
              fetchArticles() {
                fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
                  .then(response => response.json())
                  .then(ids => {
                    // Take only the first 10 article IDs
                    ids = ids.slice(0, 5);
                    // Fetch details of each article
                    Promise.all(ids.map(id =>
                      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                        .then(response => response.json())
                    ))
                      .then(articles => {
                        // Update articles data
                        this.articles = articles;
                      });
                  })
                  .catch(error => console.error('Error fetching articles:', error));
              }
            }
          });
        </script>
 ```
![5 Hacker news articles](images/Hackernews.png)

### Joke API

Incorporated the jokeAPI to retrieve a fresh joke every 60 seconds and post it online.

Source code for Joke API:

```JS
function fetchJoke() {
          $.get("https://v2.jokeapi.dev/joke/Any?type=single", function (result) {
            console.log("From jokeAPI: " + JSON.stringify(result));
            if (result && result.joke) {
              $("#joke").text("Here's a joke for you: " + result.joke);
            } else {
              $("#joke").text("Could not retrieve a joke at the moment.");
            }
          });
        }

fetchJoke();
setInterval(fetchJoke, 60000);
```

### XKCD Comic API

Incorporated the XKCD Comic API using the api `https://xkcd.com/info.0.json`

Source code for Joke API:

```JS
function fetchComic() {
                const proxyUrl = "https://api.allorigins.win/raw?url=";
                const apiUrl = "https://xkcd.com/info.0.json";

                fetch(proxyUrl + apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById("comic-title").textContent = "Title: " + data.title;
                        document.getElementById("comic-img").src = data.img;
                        document.getElementById("comic-alt").textContent = data.alt;
                    })
                    .catch(error => {
                        console.error("Error fetching XKCD comic:", error);
                    });
            }
            fetchComic();
```
![Joke API and XKCD Comic API](images/jokexkcd.png)
