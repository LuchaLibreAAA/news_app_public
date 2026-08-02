import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Newsitems from './newsitems';
// custom key
let allkeys = JSON.parse(process.env.REACT_APP_ALLKEYS || '[]')
const apikey=allkeys[allkeys.length-1]
const CustomPage = ({ mode }) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const [articles, setArticles] = useState([
        {
            "id": "d1919dab9c9087cb492a291a7a904e14",
            "title": "Vikings Fans Sound Off on Latest Jauan Jennings Rumors",
            "description": "Minnesota Vikings fans have shared plenty of reactions to the latest news about free agent receiver Jauan Jennings.",
            "content": "@SKOLPopLife: “That’s why I said he would cost too much from the beginning.”\nWhat Would Jauan Jennings Bring to Minnesota?\nThere is no telling whether or not a team would be willing to give Jennings that kind of money. Some of his bargaining power is... [824 chars]",
            "url": "https://heavy.com/sports/nfl/minnesota-vikings/fans-sound-off-latest-jauan-jennings-rumors/",
            "image": "https://heavy.com/wp-content/uploads/2026/05/Jauan-Jennings-1.jpg?quality=65&strip=all&w=1200",
            "publishedAt": "2026-05-06T06:09:17Z",
            "lang": "en",
            "source": {
                "id": "cfda09234da4b4ff42f8876ac13e4be2",
                "name": "Heavy.",
                "url": "https://heavy.com",
                "country": "us"
            }
        },
        {
            "id": "179929fa0f0d35978c790a516e2752f4",
            "title": "Best vehicle numbers based on your date of birth: What numerology says",
            "description": "Numerology & Tarot News: In India, buying a car is not just a practical consideration but often tied to rituals, beliefs and personal choices. Numerology and astrology are pop.",
            "content": "In India, buying a car is not just a practical consideration but often tied to rituals, beliefs and personal choices. Numerology and astrology are popular with many buyers looking for guidance, and one of the most popular options is to choose a ‘luck... [2674 chars]",
            "url": "https://timesofindia.indiatimes.com/astrology/numerology-tarot/best-vehicle-numbers-based-on-your-date-of-birth-what-numerology-says/articleshow/130845733.cms",
            "image": "https://static.toiimg.com/thumb/msid-130845733,width-1280,height-720,imgsize-96342,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
            "publishedAt": "2026-05-06T06:09:00Z",
            "lang": "en",
            "source": {
                "id": "9a9a0fb79c70bbf499d39baca94921ae",
                "name": "Times of India",
                "url": "https://timesofindia.indiatimes.com",
                "country": "in"
            }
        },
        {
            "id": "3e6e1bcfbb0a49f86dd7be3c0562bce7",
            "title": "Trump pauses operation to open Strait of Hormuz and pushes for Iran deal",
            "description": "In addition to pausing 'Project Freedom', the US also says 'Operation Epic Fury' is now over, potentially signalling an end to the conflict. | ITV National News",
            "content": "Donald Trump said he has paused efforts to guide stranded commercial vessels from the Strait of Hormuz in order to finalise a deal with Iran to end the war.\nThe US president made the announcement on his Truth Social platform on Tuesday evening and di... [3223 chars]",
            "url": "https://www.itv.com/news/2026-05-06/trump-pauses-operation-to-open-strait-of-hormuz-and-pushes-for-iran-deal",
            "image": "https://images.ctfassets.net/pjshm78m9jt4/2q2BlfLspxVtIbHg0pPFci/2603a7a5de955e583d9fe28f79576c38/AP26125550286989.jpg?fm=jpg&fit=fill&w=1600&h=900&q=80",
            "publishedAt": "2026-05-06T06:08:40Z",
            "lang": "en",
            "source": {
                "id": "8058567c977e70457c45c65529cb9946",
                "name": "ITV News",
                "url": "https://www.itv.com",
                "country": "gb"
            }
        },
        {
            "id": "ef68dd30a4502af1dbfe003ee5e5309d",
            "title": "bang entry in satcom space; LEO satellites in focus",
            "description": "India Business News: Mukesh Ambani-led Reliance Industries is exploring a major foray into satellite communications space, looking to invest billions in low earth orbit (L.",
            "content": "Reliance Industries has begun discussions with the Department of Telecommunications (DoT) to support the process of securing orbital slots. (AI image)\nMukesh Ambani-led Reliance Industries is exploring a major foray into satellite communications spac... [4044 chars]",
            "url": "https://timesofindia.indiatimes.com/business/india-business/desi-rival-to-musks-starlink-mukesh-ambani-led-reliance-eyes-big-bang-entry-in-satcom-space-leo-satellites-in-focus/articleshow/130845732.cms",
            "image": "https://static.toiimg.com/thumb/msid-130845933,width-1280,height-720,imgsize-77114,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
            "publishedAt": "2026-05-06T06:08:00Z",
            "lang": "en",
            "source": {
                "id": "9a9a0fb79c70bbf499d39baca94921ae",
                "name": "Times of India",
                "url": "https://timesofindia.indiatimes.com",
                "country": "in"
            }
        },
        {
            "id": "d404437ad13d9622b7ae5769c1d5d64a",
            "title": "Four farmers killed as iron shed collapses due to heavy winds in Telangana",
            "description": "Four farmers killed as iron shed collapses due to heavy winds in Telangana - Hyderabad, May 6 Four farmers were killed, and four others were injured when an iron shed collapsed due ... Get Latest News on National only on lokmattimes.com",
            "content": "Hyderabad, May 6 Four farmers were killed, and four others were injured when an iron shed collapsed due to heavy winds in Telangana’s Mancherial district, said officials on Wednesday.\nThe incident occurred at Luxettipet on Tuesday night, where gusty ... [2537 chars]",
            "url": "https://www.lokmattimes.com/national/four-farmers-killed-as-iron-shed-collapses-due-to-heavy-winds-in-telangana/",
            "image": "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/1200x900/202605063777682_202605.jpg",
            "publishedAt": "2026-05-06T06:07:16Z",
            "lang": "en",
            "source": {
                "id": "f2ddccedc9e60d844e7a1045928cad48",
                "name": "Lokmat Times",
                "url": "https://www.lokmattimes.com",
                "country": "in"
            }
        },
        {
            "id": "f5649de1bb939f34ea8fce52bcb37f43",
            "title": "US-Iran War & Israel Conflict Live Updates: US Declares Operation Epic Fury Over; Trump Pauses Hormuz Mission",
            "description": "Iran War Live Updates: Follow real-time developments as the United States and Iran navigate a fragile and uncertain pause in direct confrontation, even as military tensions continue across the Gulf and the wider Middle East. Track the latest naval operations, diplomatic negotiations, regional attacks and global economic impact linked to the crisis centred around the Strait of Hormuz.Trump Pauses ‘Project Freedom’ Amid Diplomacy Push: US President Donald Trump has temporarily paused the military’s “Project Freedom” operation, which was launched to reopen the Strait of Hormuz to commercial shipping. Trump said the pause comes because of “great progress” towards a “complete and final agreement” with Iran and described the suspension as a short-term step to test whether negotiations can succeed.Iran Rejects US Pressure Campaign: Iranian President Masoud Pezeshkian accused Washington of continuing a policy of “maximum pressure” while expecting Tehran to surrender to unilateral demands. He said such expectations were “impossible” for Iran to accept, highlighting the continued mistrust between both sides despite ongoing mediation efforts.Fresh Attacks Reported In UAE: The United Arab Emirates reported a second consecutive day of missile and drone attacks allegedly linked to Iran, including incidents affecting infrastructure and maritime activity. Iran’s Islamic Revolutionary Guard Corps has denied responsibility for the strikes.Disputed Incident In Strait Of Hormuz: Iran has accused US forces of killing five civilians after passenger boats were reportedly attacked in the Strait of Hormuz. Tehran claims the vessels were civilian boats, while the US has maintained that operations in the area are focused on countering security threats and protecting maritime routes.Hormuz Crisis Remains Central To Conflict: The Strait of Hormuz continues to be the main flashpoint in the crisis, with both Iran and the United States seeking to shape control and access around one of the world’s most strategically important oil transit corridors. Shipping companies remain cautious, while insurance costs and energy market volatility continue to rise.US-Iran Naval Standoff Intensifies: The escalation follows the launch of “Project Freedom”, under which US forces sought to escort commercial vessels and counter perceived threats in the Gulf. Washington claims to have neutralised multiple Iranian boats, while Tehran has warned against any foreign military presence near its waters.Diplomatic Channels Still Active: Despite continued hostilities, diplomatic engagement remains underway through intermediaries including Pakistan. Iranian officials have reiterated that there is no viable military solution to the crisis and signalled willingness to continue indirect talks.Israel Continues Operations In Lebanon: Israeli forces have continued strikes in southern Lebanon and issued new evacuation warnings to residents ahead of further military action. The expanding Lebanon front remains one of the most volatile dimensions of the wider regional conflict.Global Energy Markets Under Pressure: Continued uncertainty around the Strait of Hormuz and Gulf shipping lanes has pushed oil prices higher and increased pressure on global energy markets. Disruptions in the region continue to raise concerns over inflation, supply chains and broader economic stability.Ceasefire Faces Growing Strain: Although direct confrontation between the US and Iran has slowed compared to previous weeks, repeated regional attacks, conflicting narratives and military posturing indicate that the ceasefire remains highly fragile and vulnerable to collapse.Conflict Enters Complex Strategic Phase: With diplomacy, naval pressure, regional proxy conflicts and economic warfare now unfolding simultaneously, the crisis has evolved into a prolonged geopolitical confrontation with implications far beyond the Middle East., Middle East News, Times Now",
            "content": "Iran War Live Updates: Follow real-time developments as the United States and Iran navigate a fragile and uncertain pause in direct confrontation, even as military tensions continue across the Gulf and the wider Middle East. Track the latest naval op... [3664 chars]",
            "url": "https://www.timesnownews.com/world/middle-east/usisraeliran-war-live-updates-trump-on-strait-of-hormuz-ceasefire-talks-un-resolution-and-west-asia-conflict-6th-may-update-liveblog-154257643",
            "image": "https://images.timesnownews.com/thumb/msid-154257643,thumbsize-1224655,width-1280,height-720,resizemode-75/154257643.jpg",
            "publishedAt": "2026-05-06T06:06:56Z",
            "lang": "en",
            "source": {
                "id": "d708b971b2f5b1049778dcf0e6f9ef3e",
                "name": "Times Now",
                "url": "https://www.timesnownews.com",
                "country": "in"
            }
        },
        {
            "id": "4b9da95343310529ec3db3122059c70c",
            "title": "Mike Newhouse, SD-24 candidate, 2026 primary election questionnaire",
            "description": "Ahead of the election, the Southern California News Group compiled a list of questions to pose to the candidates vying to represent you.",
            "content": "Ahead of the June primary election, the Southern California News Group compiled a list of questions to pose to the candidates who wish to represent you. You can find the full questionnaire below. Questionnaires may have been edited for spelling, gram... [16228 chars]",
            "url": "https://www.ocregister.com/2026/05/05/mike-newhouse-sd-24-candidate-2026-primary-election-questionnaire/",
            "image": "https://www.ocregister.com/wp-content/uploads/2026/05/TDB-L-STATE-SENATE-0427-06.jpeg?w=1024&h=683",
            "publishedAt": "2026-05-06T06:06:20Z",
            "lang": "en",
            "source": {
                "id": "840efb5642a2fd3ae6da920bb4981626",
                "name": "Santa Ana Orange County Register",
                "url": "https://www.ocregister.com",
                "country": "us"
            }
        },
        {
            "id": "3d907e1d76f15253b42af84d51a0f613",
            "title": "Mini Cooper S GP Inspired Edition bookings open: Limited to just 30 units!",
            "description": "Cars News: Mini India has announced the pre-bookings for the new Mini Cooper S GP-inspired edition. Interested customers can book the car exclusively at their ne.",
            "content": "Mini India has announced the pre-bookings for the new Mini Cooper S GP-inspired edition. Interested customers can book the car exclusively at their nearest Mini dealership. The new Mini Cooper S GP-inspired edition will be limited to just 30 units. T... [1942 chars]",
            "url": "https://timesofindia.indiatimes.com/auto/cars/mini-cooper-s-gp-inspired-edition-bookings-open-limited-to-just-30-units/articleshow/130843864.cms",
            "image": "https://static.toiimg.com/thumb/msid-130843855,width-1280,height-720,imgsize-1075996,resizemode-6,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
            "publishedAt": "2026-05-06T06:04:00Z",
            "lang": "en",
            "source": {
                "id": "9a9a0fb79c70bbf499d39baca94921ae",
                "name": "Times of India",
                "url": "https://timesofindia.indiatimes.com",
                "country": "in"
            }
        },
        {
            "id": "3f14e13b6e8111af4d531d4cdfba10e7",
            "title": "Crystal Palace vs Shakhtar Donetsk: Prediction, kick-off time, TV, live stream, team news, h2h results, odds",
            "description": "Eagles on brink of first ever European final",
            "content": "The Eagles hold a 3-1 aggregate lead after their first-leg victory in Poland last week.\nIsmaila Sarr, Daichi Kamada and Jorgen Strand Larsen were all on target for Oliver Glasner’s side, who are one game away from a major European final.\nThe south Lo... [1570 chars]",
            "url": "https://www.standard.co.uk/sport/football/crystal-palace-vs-shakhtar-donetsk-prediction-kick-off-time-tv-live-stream-team-news-latest-h2h-results-odds-conference-league-2026-preview-b1281171.html",
            "image": "https://static.standard.co.uk/2026/05/05/19/2273983131.jpg?width=1200&auto=webp&quality=75",
            "publishedAt": "2026-05-06T06:00:33Z",
            "lang": "en",
            "source": {
                "id": "e98e9648a83f865332ab00d9eab8cf1f",
                "name": "Evening Standard",
                "url": "https://www.standard.co.uk",
                "country": "gb"
            }
        },
        {
            "id": "edbf269898ebfffb922bdb8ea8d89df4",
            "title": "NIA teams to reach Jalandhar for investigating blast near BSF HQ: Sources",
            "description": "NIA teams to reach Jalandhar for investigating blast near BSF HQ: Sources - Jalandhar, May 6 Several specialised teams of the National Investigation Agency (NIA) have been dispatched to the Jalandhar ... Get Latest News on National only on lokmattimes.com",
            "content": "Jalandhar, May 6 Several specialised teams of the National Investigation Agency (NIA) have been dispatched to the Jalandhar blast site to conduct an independent investigation of the explosion, sources said on Wednesday.\nThe teams will conduct an inve... [1935 chars]",
            "url": "https://www.lokmattimes.com/national/nia-teams-to-reach-jalandhar-for-investigating-blast-near-bsf-hq-sources/",
            "image": "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/1200x900/20260506012_202605.jpg",
            "publishedAt": "2026-05-06T05:59:55Z",
            "lang": "en",
            "source": {
                "id": "f2ddccedc9e60d844e7a1045928cad48",
                "name": "Lokmat Times",
                "url": "https://www.lokmattimes.com",
                "country": "in"
            }
        }
    ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return ;

    const fetchResults = async () => {
      setLoading(false);
      setError(null);
                 document.title=`News App-${query}`;
      try {
        const url = `/.netlify/functions/news?q=${encodeURIComponent(query)}&lang=en&max=12&apikey=${apikey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data.articles) throw new Error('No results found');
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
        //setArticles([]);
      } finally {
        //setLoading(false);
      }
    };

    fetchResults();
  }, [query]); // re-runs every time the search query changes

  const darkmode = mode.darkmode;

  return (
    <div style={{ backgroundColor: darkmode ? 'rgb(4, 6, 69)' : 'white', minHeight: '100vh' }}>
      <center>
        <h1 style={{ color: darkmode ? 'white' : 'black', padding: '1rem' }}>
          {loading ? 'Searching...' : `Results for "${query}"`}
        </h1>
      </center>

      {!loading && !error && articles.length === 0 && (
        <center>
          <p style={{ color: darkmode ? 'white' : 'black' }}>No articles found for "{query}"</p>
        </center>
      )}

      <div className="row mx-2">
        {articles.map((element) => (
          <div className="col-md-4" key={element.id}>
            <Newsitems
              caption={element.title}
              description={element.content}
              imgurl={element.image}
              url={element.url}
              mode={mode}
              publishedAt={element.publishedAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomPage;
