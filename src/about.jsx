import { useState } from "react";

export default function About({ showAbout, showAboutFunction }) {
  return (
    showAbout && (
      <div id="aboutWrapper">
        <button
          id="aboutCloseButton"
          onClick={() => {
            setTimeout(() => {
              showAboutFunction(!showAbout);
            }, 1000);
            document.getElementById("aboutWrapper").classList.add("close");
          }}
        ><img src="./info.svg" />
        </button>
        <section id="aboutSection">
          <h1>Welcome to the Dragon Quest Index</h1>
          <p>
            It's a website that lists all of the monsters from the game, Dragon
            Quest Monster: Joker
          </p>
          <p>
            I made this website as a tribute to this game and it's collective
            series. I love the world that Yuji Horii has created alongside
            esteemed artist: Akira Toriyama (famous for Dragon Ball).
          </p>
          <p>
            The general idea and inspiration came from the Pokemon Index and
            other Pokedex websites. I was inspired to make my own because I
            thought why not kill two birds with one stone. I wanted to improve
            on web development, and I liked games so why not combine these two
            joys together and so it was born. This project is purely react,
            all the animations and styles are purely css.
          </p>
          <br></br>
          <h2>Concept</h2>
          <p>Below is the original wireframe / mock up for the website</p>
          <img src="./mockup.png" className="aboutAsset" />
          <p>Even though its not neat, it got the job done.</p>
          <h2>Gathering the Info</h2>
          <p>
            After assembling the mock up I need to figure out how to get the
            data to use in the website. I had two options, rip the DS game card
            data, which is hard but also illegal or scrape an already existing
            website like fandom wiki that had a Dragon Quest Monster Joker page.
            I went with option two because it was already on the internet.
          </p>
          <p>
            To do this, I wrote a simple python script that used a module called
            "Beautiful Soup". This module allowed me to download a website,
            scrape the necessary data I wanted, and perform different actions.
            After scraping, I obtained the monster name, id, sprite, rank,
            skills, traits, and resistances. I got all this info, then used a
            json module to put all of that data into a json file.
          </p>
          <p>
            Fandom wiki{" "}
            <a href="https://dqmj.fandom.com/wiki/Monster_list" target="_blank">
              https://dqmj.fandom.com/wiki/Monster_list
            </a>
          </p>
          <p>Key design themes:</p>
          <ul>
            <li>it had to be a game wiki</li>
            <li>it had to fit the cards aesthetic</li>
            <li>it had to have a search feature</li>
            <li>it had to have a full catalog button</li>
            <li>the UI had to make sense and could be easily understood</li>
          </ul>
          <br />
          <img src="./mockup_2.png" className="aboutAsset"/>
          <p>
            I had a hard time figuring out where to place the catalog button at
            first, but I eventually settled on an area next to the search bar.
            It was originally in the top left of the screen in fixed position so
            that it remained there as you scrolled, but I changed it to the
            center so that it is grouped together with the search bar. Making it
            easier to quickly view the entire catalog if you chose to not use
            the search functionality. I wanted to give people options.
          </p>
          <h2>Competitor Research</h2>
          <p>
            For how I wanted the monster information to be laid out, I did a bit
            of competitor research on the Pokemon Index website.
          </p>
          <section id="explain-pokedex" className="flexcol">
            <img src="./pokedexMobile1.png" className="pokeMobileView"/>
            <p>
              At the top, they have navigational buttons to explore other
              pokemon at the top, left and right buttons. Below that, they have
              the monster's name and ID.
            </p>
            <img src="./pokedexMobile2.png" className="pokeMobileView"/>
            <p>
              Below that, there is a 2 colum grid to house: a Pokemon
              illustration, description, associated game version (red or blue),
              biometric data: height, weight, category, abilities, and
              gender.{" "}
            </p>
            <img src="./pokedexMobile3.png" className="pokeMobileView"/>
            <p>
              Below the illustration there is a stat table with attributes
              indicating the Pokemon's overall effectiveness compared to other
              Pokemon.{" "}
            </p>
            <img src="./pokedexMobile4.png" className="pokeMobileView"/>
            <p>
              Right of the table, there is a type and weakness list showing what
              elemental family Pokemon belong to, as well as its associated
              weaknesses.
            </p>
            <img src="./pokedexMobile5.png" className="pokeMobileView"/>
            <p>
              Below the 2 column grid, a evolution table is present showing what
              this Charmander eventually evolves into. It has arrows denoting
              the path, preview illustrations, name and id, and type.
            </p>
            <img src="./pokedex_example.png" id="pokedex-scr"/>
          </section>
          <p>
            After evaluating a competitor, and determined a MVP layout, I started
            designing on the assets.
          </p>
          <h2>Design Phase</h2>
          <p>
            I began the design phase by creating the logo, because you can't
            have a website without a logo. The general idea or theme centers
            around Dragon Quest as a whole: I thought of what makes Dragon
            Quest, what represent the series. I thought of the slime monster,
            it's iconic to the series, the way its drawn by Akira, and the
            "water drop" silhouette it has. I used those ideas and created this
            logo:
          </p>
          <br></br>
          <div className="flex">
            <img src="./slime.svg" id="slimeExplain" />
            <p>
              Doing the best I could, I took a reference image into illustrator,
              crafted the iconic water drop shape for the slime, then I filled
              it with a blue color hex: #1c75bc. When I got to making the smile,
              I hit a fork in the design road. I wanted the eyes, but it looked
              weird when viewed from afar. So to keep the silhouette idea, I
              kept the smile thinking that the smile alongside the water drop
              shape will communicate the slime monster.
            </p>
          </div>
          <h2>Development</h2>
          <p>
            This was my second ever React project, so I did not know of the
            motion library, or React 3JS. All I had was my knowledge of base
            css, html, and js. The first few days was me adding the basic
            structure. The top banner with the title and slime logo. I added the
            monster json file I created using Python. Then began tweaking the
            content display.
          </p>
          <p>
            Everything was so foreign, I had api pages on top of api pages, I
            opened stacked overflow forms as well as other sites. Researching
            all I could to bring my vision to life. Not once did I feel
            discouraged, I felt the opposite quite frankly. I was riding behind
            a goal: the goal to get better at web development.
          </p>
          <p>
            The more I did in this project, the more I gained. While
            implementing modal functionality, I learned about states,
            references, and conditional rendering. While working on the
            monster's card display, I learned about the map function, and call
            backs. When I was plugging in my json file, I learned about file
            paths, how to access json data, and ways to format such data. When I
            eventually got to the navigation, I learned how to do cyclic
            incrementing, and gained some understanding to its logic. Finally
            when I got to the search functionality: It taught me how to do
            filtered results, form input onChange call backs, and input parsing.
          </p>

          <h2>Releasing the MVP</h2>
          <p>
            Once I had version 1 of the project done, I wanted to get some
            feedback: to do this, I submitted this to a UX/UI Discord server, I
            tried Reddit, and Meta's threads. I got a few opinions from the
            Discord server, but the other platforms did not push out my project
            to viewers unfortunately.
          </p>
          <p>
            The main concern I got back was that the font choice could be better
            to reflect the game theme, so I tried out a pixelated font. I
            personally did not like how some parts were too hard to read, so I
            changed it to a font called "Germania". Another concern was that the
            card flipping animation was too distracting, so I changed the card
            transform animations to ease it a bit.
          </p>

          <h2>Today</h2>
          <p>
            After I resolved the concerns people had, I considered the project
            finished, so it was left dormant for a couple months. Recently, I
            came back to add and update some logic and styling. Using my
            knowledge of the other projects I did, I updated the navigational
            logic, search function, and overall styling. I added a animated
            video background to replace the static background to add a bit of
            atmosphere. I added the slime image inside the card to also make the
            background not bland. I moved the navigational buttons to the center
            so you did not have to scroll down to access the controls. Also when
            you opened the full list of monsters, you couldn't click a monster
            and it brought you to that monster card, so I added that
            functionality. There's accessibility changes to help screen readers,
            color tweaks and other small details.
          </p>

          <h2>The End</h2>
          <p>
            That's the entire summary of what this project is about. I hoped you
            enjoyed it. I loved working on it. If you have any concerns, ideas
            or are curious about my other projects, visit my portfolio at
            netrahun.com
          </p>
        </section>
      </div>
    )
  );
}
