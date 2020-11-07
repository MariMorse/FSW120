import React from 'react';
import Info from './Info.js';

function App() {
  return (
    <div className="App">

      <Info 
        text = {{title: 'Gone with the Wind', subtitle: 'Historical Fiction', information: 'A novel by Margaret Mitchell, first published in 1936. The story is about  the struggles of young Scarlett OHara, the spoiled daughter of a well-to-do plantation owner, who must use every means at her disposal to claw her way out of poverty following Shermans destructive March to the Sea.', color: 'lightBlue' }}
      />

      <Info 
        text = {{title: 'To Kill a Mockingbird', subtitle: 'Racial injustice and the destruction of innocence', information: `The stroy, told by the six-year-old Jean Louise Finch, takes place during three years (1933-35). The childrens father 'Atticus' is appointed to represent Tom Robinson, a black man who has been accused of raping a young white woman, Mayella Ewell. This story also addresses issues of class, courage, compassion and gender roles in the Deep South. `, color:'gray' }}
      /> 

      <Info 
        text = {{title: 'The Diary of a Young Girl (Anne Frank),', subtitle: 'Autobiography World War II- Nazi Ocuppation of the Netherlands', information: `During the Nazi Occupation of the Netherlands, Anne Frank recieved a blank diary as one of her presents on her 13th birthday. The family soon went into hiding before they were found after 2 years and taken to concentration camps. Anne died at the age of 15 a few weeks before the prisoners were liberated by British troops on 15 April 1945`, color:'beige' }}
      />

      <Info 
        text = {{title: 'Dark Prince', subtitle: 'Paranormal Romance Fantasy', information: `A book written by Christine Feehan, Mikhail Dubrinsky, Prince of the Carpathians, has worked tirelessly for centuries to discover why so many of their children die in the first years. When he is on the brink of despair and self-destruction that he meets a beutiful human psychic, Raven Whitney. When Mikhail meets Raven he realizes that she is his lifemate. But no human woman has ever been a lifemate to a Carpathian. All human females who have been converted become evil vile creatures....`, color:'lightGreen' }}
      />

      <Info 
        text = {{title: 'Alices Adventures in Wonderland ', subtitle: 'A tale of fantasy and adventure', information: 'It tells a story of a young girl named Alice wh falls through a rabbit hole into a subterranean fantasy world populated by peculiar.', color:'orange' }}
      />

      <Info 
        text = {{title: 'Things Fall Apart', subtitle: 'African postcolinal literature', information: 'published in 1958, this novel follows an Igbo man named Okonkwo, describing his family, the village in Nigeria where he lives, and the effects of British colonialism on his native country. ', color:'purple' }}
      />

      <Info 
        text = {{title: 'Adventures of Huckleberry Finn', subtitle: 'A boy and his adventures', information: 'A straightforward story about a boy and a runaway slave floating down the Mississippi River, published in 1885, this novel is a submersive confrontation of slavery and racisim.', color:'yellow' }}
      />

      <Info 
        text = {{title: 'Watchmen', subtitle: 'Superheros Comic', information: `A comic set in an alternate reality that closely mirrors the contemporary world of the 1980s. The primary difference is the prescence of superheros. This occurs in the year 1983. `, color:'lightGray' }}
      />

      <Info 
        text = {{title: `Catch-22`, subtitle: 'A satirical War Novel', information: `Written by Joseph Heller, This novel is set during World War II, from 1942 to 1944. It mainly follows the life of antihero Captain John Yossarian. It examines the absurdity of war and military life through the experiences of Yossarian and his cohorts, who attepmt to maintain their sanity while fulfilling their service requirements so that they may return home. `, color:'#800020' }}
      />  

      <Info 
        text = {{title: 'Moby-Dick', subtitle: 'The white sperm whale', information: 'This novel was written by Herman Melville in 1851, a story about a captainof the whaling ship Pequod, who was obsessed with getting revenge on the white sperm whale that on the last ships voyage bit Ahabs leg off at the knee. Moby-Dick attacks the whaleboat killing all but one man on the boat who is later rescued.', color:'#A67B5B' }}
      />
      
    </div>
  );
}

export default App;