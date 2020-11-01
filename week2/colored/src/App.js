import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './Info.js';

function App() {
  return (
    <div className="App">

      <Info 
        text = {{title: 'Bonnie and Clyde', subtitle: 'The Gangster Pair', information: 'Bonnie Parker and Clyde Barrow, robbery team that became notorious in the United States through their flamboyant encounters with police and the sensationalization of their exploits by the country newspapers.', color:'red' }}
      />

      <Info 
        text = {{title: 'Braveheart', subtitle: 'William Wallace Midieval Scottish patriot', information: `A late 13th century Scottish warrior leading the Scot's in the First War of the Scottish Independance against King Edward I of England.`, color:'gray' }}
      /> 

      <Info 
        text = {{title: 'Gone with the Wind', subtitle: 'Epic Historical Romance', information: `A 1939 American Romance film that ells a story of Scarlett O'Hara, the strong-wlled daughter of a Gergia plantation owner.`, color:'blue' }}
      />

      <Info 
        text = {{title: 'Pride and Prejudice', subtitle: 'Philosophy, history, wit, and the most passionate love story.', information: `When Elizabeth Bennet first meets eligible bachelor Fitzwilliam Darcy, she thinks him arrogant and conceited; he is indifferent to her good looks and lively mind. When she later discovers that Darcy has involved himself in the troubled relationship between his friend Bingley and her beloved sister Jane, she is determined to dislike him more than ever. In the sparkling comedy of manners that follows, Jane Austen shows the folly of judging by first impressions and superbly evokes the friendships, gossip and snobberies of provincial middle-class life.`, color:'lightGreen' }}
      />

      <Info 
        text = {{title: 'To Kill a Mockingbird', subtitle: 'A Southern Gothic and Bildungsroman', information: 'Vanity Fair may be set during the Napoleonic wars, but Vanity Fair, Thackeray tells us, is where we all live, all the time. It is indeed an unheroic place. The subtitle lets us know in advance that no one will ride in on a charger to rescue the virtuous or punish the vicious.', color:'orange' }}
      />

      <Info 
        text = {{title: 'The Wanderer', subtitle: 'Female Diffculties', information: 'When she gave this subtitle to The Wanderer, it was almost as if Fanny Burney foresaw all those academics writing feminist articles on her oeuvre. Juliet, a mysterious and penniless émigrée from revolutionary France, tries to make her way in London and encounters every kind of "diffculty" - but the subtitle indicates that this is a lengthy parable of the female condition', color:'purple' }}
      />

      <Info 
        text = {{title: 'The Secret Agent', subtitle: 'A Simple Tale', information: 'Joseph Conrad insisted on this mordant subtitle for The Secret Agent, in which nothing is simple and the police are almost as sinister as the terrorists. By a bleak irony, the unwitting "agent" who carries the bomb to its destination - and gets blown to smithereens - is the simple-minded Stevie.', color:'yellow' }}
      />

      <Info 
        text = {{title: 'Twelfth Night', subtitle: 'What You Will', information: `A romantic comedy by William Shakespeare, believed to have been written around 1601–1602 as a Twelfth Night's entertainment for the close of the Christmas season. The play centres on the twins Viola and Sebastian, who are separated in a shipwreck. Viola (who is disguised as Cesario) falls in love with Duke Orsino, who in turn is in love with Countess Olivia. Upon meeting Viola, Countess Olivia falls in love with her thinking she is a man.`, color:'lightGray' }}
      />

      <Info 
        text = {{title: `Tess of the d'Urbervilles`, subtitle: 'A Pure Woman', information: `A novel by Thomas Hardy. It initially appeared in a censored and serialised version, published by the British illustrated newspaper The Graphic in 1891, then in book form in three volumes in 1891, and as a single volume in 1892. Though now considered a major 19th-century English novel, even Hardy's fictional masterpiece, Tess of the d'Urbervilles received mixed reviews when it first appeared, in part because it challenged the sexual morals of late Victorian England.`, color:'#800020' }}
      />  

      <Info 
        text = {{title: 'Peter Pan', subtitle: 'The Boy Who Wouldn’t Grow Up', information: 'A fictional character created by Scottish novelist and playwright J. M. Barrie. A free-spirited and mischievous young boy who can fly and never grows up, Peter Pan spends his never-ending childhood having adventures on the mythical island of Neverland as the leader of the Lost Boys, interacting with fairies, pirates, mermaids, Native Americans, and occasionally ordinary children from the world outside Neverland.', color:'#A67B5B' }}
      />
      
    </div>
  );
}

export default App;