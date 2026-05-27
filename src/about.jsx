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
        >
          <img src="./assets/info.svg"/>
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
            joys together and so it was born.
          </p>
          <br></br>
          <h2>Concept</h2>
          <p>Below is the original wireframe / mock up for the website</p>
          <img src="./assets/mockup.png" className="aboutAsset" />
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

          <img
            src="./assets/mockup_2.png"
            className="aboutAsset"
          />
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
            <img
              src="./assets/pokedexMobile1.png"
              className="pokeMobileView"
            ></img>
            <p>
              At the top, they have navigational buttons to explore other
              pokemon at the top, left and right buttons. Below that, they have
              the monster's name and ID.
            </p>
            <img
              src="./assets/pokedexMobile2.png"
              className="pokeMobileView"
            ></img>
            <p>
              Below that, there is a 2 colum grid to house: a Pokemon
              illustration, description, associated game version (red or blue),
              biometric data: height, weight, category, abilities, and
              gender.{" "}
            </p>
            <img
              src="./assets/pokedexMobile3.png"
              className="pokeMobileView"
            ></img>
            <p>
              Below the illustration there is a stat table with attributes
              indicating the Pokemon's overall effectiveness compared to other
              Pokemon.{" "}
            </p>
            <img
              src="./assets/pokedexMobile4.png"
              className="pokeMobileView"
            ></img>
            <p>
              Right of the table, there is a type and weakness list showing what
              elemental family Pokemon belong to, as well as its associated
              weaknesses.
            </p>
            <img
              src="./assets/pokedexMobile5.png"
              className="pokeMobileView"
            ></img>
            <p>
              Below the 2 column grid, a evolution table is present showing what
              this Charmander eventually evolves into. It has arrows denoting
              the path, preview illustrations, name and id, and type.
            </p>
            <img
              src="./assets/pokedex_example.png"
              id="pokedex-scr"
            />
          </section>

          <h2>Designing the logo</h2>
          <p>Once I was completed on the research, I wanted to work on creating the brand, for this I thought of </p>
        </section>
      </div>
    )
  );
}
