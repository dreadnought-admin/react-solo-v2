import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {

    
  return (
            <div className="main">
                <div>
                    <h1><em>Yōkoso</em><strong>ようこそ!</strong></h1>
                    <h2>Welcome to Weeb Trash™, an evolving anime database</h2>
                    <h3>Search through our vast collection of anime & manga</h3>
                    <p>Discover new things or revisit classic favourites</p>
                </div>
                <span>
                    <div>
                        <Link className="button" to="/database">
                            View the Database!
                        </Link>
                    </div>
               
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Anime">
                        <button className="icon">㊙️</button>
                    </a>
                    <a target="_blank" href="https://www.japan.travel/en/us/">
                        <button className="icon">🗾</button>
                    </a>
                    <a target="_blank" href="https://animerecipes.tumblr.com/">
                        <button className="icon">🍥</button>
                    </a>
               
                </span>
                <div>
                    <h3><em>"Anime was a mistake. It's nothing but trash."</em></h3>
                    <p> — Hayao Miyazaki</p>
                </div>
            </div>
  )
}

export default About;
