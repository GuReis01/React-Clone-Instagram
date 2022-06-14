import React, { useState } from "react";
import Post from "./components/posts/Post";
import './App.css';
import Header from "./components/header/Header";
import Stories from "./components/stories/Stories";

function App() {
  const [posts, setPosts] = useState([
    {
      userpicture: "https://media-exp1.licdn.com/dms/image/C560BAQG1QEQ426NXTw/company-logo_200_200/0/1634297700659?e=1660176000&v=beta&t=k21wCR5TAYvR_HvSLQ4hC6DwcCLHhtZ8SYnTi1-UmC0",
      curtidas: "562.110 curtidas",
      username: "oracle",
      caption: "Congratulazioni to Sergio Pérez on P2 at the #ImolaGP 🇮🇹 🥳 Way to #ChargeOn team Red Bull Racing & Red Bull Technology! #F1",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5622AQGaF-LIeeEhSA/feedshare-shrink_2048_1536/0/1650817301410?e=1655337600&v=beta&t=SJyVKctzidYGnrwUms7jU_rGpggeaLk7ngZq49lT4Rc",
    },
    {
      userpicture: "https://media-exp1.licdn.com/dms/image/C4D0BAQFD15RCaLy7tA/company-logo_200_200/0/1591018493674?e=1660176000&v=beta&t=RucxRfnnPoTT_1jjsfdf4yxR_Lu17K6p6gU-jjIUJ7A",
      curtidas: "222.430 curtidas",
      username: "Proa",
      caption: "Parabéns a todos os PROANES, parceiros e financiadores que jogam junto com a gente! 💙 ",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4E22AQH57_vrHmOuGQ/feedshare-shrink_800/0/1630255185708?e=1655337600&v=beta&t=l5BqZdnaWFTzgDtoV-L1t9pO1_0e9Glj1mKc686NtiM",
    },
    {
      userpicture: "https://media-exp1.licdn.com/dms/image/C4D0BAQFGUHRJ26bFDw/company-logo_200_200/0/1519856619408?e=1660176000&v=beta&t=SWVJghLZ5YYx45d7ndKHJPrZim7G3mza-9qvTmoPIgk",
      curtidas: "329.110 curtidas",
      username: "FIAP",
      caption: "Sorte de todos os dias!",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D22AQETFFSeYDdqyQ/feedshare-shrink_800/0/1645794371887?e=1655337600&v=beta&t=hSbO07zzsBQKope-2ZudneNlksdog9ck1r-HzELwwqg",
    },
    {
      userpicture: "https://pps.whatsapp.net/v/t61.24694-24/157362748_702160691009649_1471007475349768870_n.jpg?ccb=11-4&oh=821d2cbfde9c3f3b4548e4b2f8f73167&oe=628A3ACB",
      curtidas: "2.110 curtidas",
      username: "apadrinhe-me",
      caption: "Venha fazer parte da missão!",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C4D22AQEiCtfBxD3djg/feedshare-shrink_800/0/1651167442522?e=1655337600&v=beta&t=wFemktlaJ0q4Gcr4Zg0DHk1cObzgZlaMG3Oro26HJlQ",
    },
  ]);

  return (
    <div className="App">
      <Header />
      <Stories />



      <div className="home"><div className="feed">
        <div className="home__body"><div className="timeline">
          {posts.map((post) => (
            <Post
              curtidas={post.curtidas}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
              userpicture={post.userpicture}

            />
          ))}
          <Post />
        </div><div className="sidebar">
            <div className="conteudo__sidebar">
              <div className="user_profile"><img className="userpic_sidebar" width={56} height={56} src="https://pps.whatsapp.net/v/t61.24694-24/256662760_535238717957355_6956401720699033881_n.jpg?ccb=11-4&oh=01_AVxPmTSPI2De4kiNxXmXh8y6nPx3ShFcTWBDgYyDWP3VPA&oe=628D542A" /><div className="sidebar__abc"><p>gu.reiis</p> <p>𝕲𝖚𝖘𝖙𝖆𝖛𝖔 𝕽𝖊𝖎𝖘 †</p></div> <strong className="mudar">Mudar</strong></div>
              <div className="sugestoes__sidebar"><div className="sugestoes__sidebar__a"><div className="text1"><strong>Sugestões para você</strong></div><p className="vertudo">Ver tudo</p></div>
                <div className="sugestoes__profile"></div>
              </div>


            </div>
          </div>

        </div>
      </div></div></div>



  );
}

export default App;
