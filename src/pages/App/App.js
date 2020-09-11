import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import BensThings from '../BensThings/BensThings'
import StavonsThings from '../StavonsThings/StavonsThings'
import CorysThings from '../CorysThings/CorysThings'

class App extends Component {
  state = { 
    bensThings: [
      { 
        name: 'banana',
        image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        attributes: ['potassium-rich', 'yellow when good', 'not a taco', 'ring ring ring ring ring ring ring']
      },
      {
        name: 'turkey',
        image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        attributes: ['such gobbles', 'good when stuffed', 'not a taco', 'why gravy exists']
      },
      {
        name: 'taco',
        image: 'https://images.unsplash.com/photo-1545093149-618ce3bcf49d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80',
        attributes: ['yummy in my tummy', 'salsas may vary', 'definitely a taco', 'very edible']
      },
      {
        name: 'linux',
        image: 'https://i.imgur.com/3BmfSOA.png',
        attributes: ["not a taco", "not Windows", "not macOS", "Penguins?"] 
      },

    ],
    davidsThings: [
      {
        name: "waffle",
        image: "https://i.imgur.com/C3PmdhO.jpg",  
        attributes: ["tasty", "fluffy", "breakfast", "yummy"],
      },
      {
        name: "giraffe",
        image: "https://i.imgur.com/qIIVePm.jpg",  
        attributes: ["tall", "cool", "fun", "animal", "(David doesn't acually own a giraffe)"], 
      },
      {
        name: "Rugby",
        image: "https://i.imgur.com/X4VC4nm.jpg",  
        attributes: ["scruffy", "happy", "sleepy", "wise"], 
      },
      {
        name: "Poptart®",
        image: "https://i.imgur.com/q9zgcaP.jpg",  
        attributes: ["pastry?", "food?", "edible?", "Horrible when toasted!"], 
      },
    ],
    shahzadsThings: [
      {
        name: "functional programming",
        image: "https://imgs.xkcd.com/comics/functional.png",  
        attributes: ["efficient", "reusability", "not a taco", "beautiful"],
      },
      {
        name: "React hooks",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        attributes: ["useEffect", "useState", "not a taco", "state's best friend"], 
      },
      {
        name: "BluBlockers",
        image: "https://susanmaryetta.files.wordpress.com/2011/06/blublocker-the-hangover.png?w=584",
        attributes: ["very attractive", "useful probably!", "good for viewing tacos", "such hip", "worn by all the cool kids"],
      },
      { 
        name: "Healthy food", 
        image: "https://i.imgur.com/gRxOxsA.jpg", 
        attributes: ["makes you live a long time", "consistent poops", "probably tacos sometimes!", "farm to market"], 
      },
    ],
    stavonsThings: [
      {
        name: "Pumpkin Spice Latte",
        image: "https://www.zliving.com/wp-content/uploads/2018/08/pumpkinspicelatte.jpg",
        attributes: ["delicious", "nectar of life", "much pumpkin", "PSL is life"]
      },
      {
        name: "Corgis",
        image: "https://www.sadanduseless.com/wp-content/uploads/2019/05/funny-corgi-butts1.jpg",
        attributes: ["corgi butts", "sploots", "good cuddles", "tiny legs"]
      },
      {
        name: "Pokemon",
        image: "https://cdn.vox-cdn.com/thumbor/e4KRzS--UsuixA2G8TOCwJ-O024=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png",
        attributes: ["cute", "tiny monsters", "evolutions are cool", "poor ditto"]
      },
      {
        name: "My Kids",
        image: "https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/118678841_10157755713046492_9194228053365344161_o.jpg?_nc_cat=111&_nc_sid=84a396&_nc_ohc=XFHvyu1MUEYAX-VXkic&_nc_ht=scontent-bos3-1.xx&oh=f0f99c18307ac8853668b56df968c44f&oe=5F7FDF71",
        attributes: ["cute", "tiny monsters", "can be trained", "mini copies of me"]
      }
    ],
    corysThings: [
      { 
        name: 'survivor',
        image: 'https://u.cubeupload.com/cagayangifs/oBWfZT.gif',
        attributes: ['strategy', 'camping not glamping', 'the social game', '#blindside']
      },
      {
        name: 'superman',
        image: 'https://media0.giphy.com/media/10bKPDUM5H7m7u/giphy.gif',
        attributes: ['faster than a speeding bullet', 'stronger than a locamotive', 'immigrants get the job done', 'underwear outside']
      },
      {
        name: 'JT',
        image: 'https://imgur.com/zlFVW4w',
        attributes: ['loyal', 'brave', 'true', 'scared of water']
      },
      {
        name: 'riesling',
        image: 'https://media.winefolly.com/Riesling-wine-tasting-WineFolly.jpg',
        attributes: ["Prädikat homey", "ever been to alscace?", "enjoy with carrots", "such tipsy"] 
      },
  
    ] 
  } 
  render() {
    return (
      <>
        <Route 
          exact path='/'
          render={() => 
            <>
              {/* All the <a> tags should live here */}
              <h2>All-The-Things</h2>
              <a href="/themanliestthings">Ben's Things</a> 
              <br></br>
              <a href="/corysthings">Cory's Things</a>
              <br></br>
              <a href="/stavonsthings">Stavon's Things</a> 
            </>
          }
        />
        {/* All the <Route> components should live here */}
        <Route 
          exact path='/themanliestthings'
          render={() => 
            <BensThings 
              bensThings={this.state.bensThings}
            />
        }/>
        <Route 
          exact path='/corysthings'
          render={() => 
            <CorysThings 
              corysThings={this.state.corysThings}
            />
        }/>
        <Route 
          exact path='/stavonsthings'
          render={() => 
            <StavonsThings 
              stavonsThings={this.state.stavonsThings}
            />
        }/>
        </>
        );
  }
}
 
export default App;

