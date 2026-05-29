import React, { Component } from 'react'
//import PropTypes, { element } from 'prop-types'
import Newsitems from './newsitems'
import Loading from './loading';


let allkeys = JSON.parse(process.env.REACT_APP_ALLKEYS || '[]')
//console.log(allkeys)
//const fallbackkey = '1d22514f296c9930fccac4e4babb6b03';

//let apikey = allkeys[this.props.key]
//let fallbackapikey=`dsadaaads`
// test variable
//let apike=`adsdsadsadsa`
//let newurl = 'https://gnews.io/api/v4/search?q=news&lang=en&max=10&apikey=' + apikey;
//let epicurl=`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apikey}`



// og articles is fallback data must be updated periodically
 let articles= [
    {
        "id": "d4e59390dd0f3f23e984af12faaa4d71",
        "title": "Byju’s founder Byju Raveendran gets six-month jail term in Singapore",
        "description": "Byju Raveendran sentenced to six months in jail for contempt by a Singapore court over disobeyed orders regarding his assets. | Business News",
        "content": "The Singapore court ruled that Raveendran had disobeyed multiple court orders related to his assets dating back to April 2024, according to the report. The court directed him to surrender to authorities, pay legal costs of S$90,000 (around $70,500), ... [1344 chars]",
        "url": "https://www.hindustantimes.com/business/byjus-founder-byju-raveendran-gets-six-month-jail-term-in-singapore-101779855110738.html",
        "image": "https://www.hindustantimes.com/ht-img/img/2026/05/27/550x309/Byju_Ravindran-1712209437254_1715244407240_1779855145304_dd91de3e-9fc6-4a20-bcb9-62799fdd8d8a.jpg",
        "publishedAt": "2026-05-27T04:14:37Z",
        "lang": "en",
        "source": {
            "id": "21468bec836de1ebb209ff6f78fbfe3e",
            "name": "Hindustan Times",
            "url": "https://www.hindustantimes.com",
            "country": "in"
        }
    },
    {
        "id": "7da00c13256638fac9b7283f3dc8fb95",
        "title": "Treasurer hoses down calls to carve up his tax revamp",
        "description": "Business groups are urging the federal government to have a major rethink over its capital gains tax measures...",
        "content": "The government and Treasurer Jim Chalmers are under pressure to make changes to planned tax reforms. Photo: HANDOUT/ATO\nChanges to capital gains taxes should still be broad to ensure one issue with the housing market isn't replaced by another, Treasu... [5583 chars]",
        "url": "https://www.canberratimes.com.au/story/9254540/treasurer-hoses-down-calls-to-carve-up-his-tax-revamp/",
        "image": "https://www.canberratimes.com.au/images/transform/v1/crop/frm/silverstone-feed-data/eba7ace8-55f4-4b31-aa4d-038e40b816d7.jpg/r0_90_800_510_w1200_h630_fmax.jpg",
        "publishedAt": "2026-05-27T04:11:03Z",
        "lang": "en",
        "source": {
            "id": "92021aca7322dc2b29226023c35d9a4a",
            "name": "The Canberra Times",
            "url": "https://www.canberratimes.com.au",
            "country": "au"
        }
    },
    {
        "id": "25ddf83da95da371cc7d7f42275c0f15",
        "title": "'People Can Move Freely'… Until 10pm: Inside Pune's 'Curfew' That's Costing Restaurateurs Half Their Business",
        "description": "Rumours of curfew swirled after Pune police intensified late-night checks, but officials insist the city remains open even as hawkers and eateries face tighter scrutiny after 10 pm",
        "content": "Rumours of curfew swirled after Pune police intensified late-night checks, but officials insist the city remains open even as hawkers and eateries face tighter scrutiny after 10 pm\nPune police have intensified action against unauthorised hawkers, lic... [4471 chars]",
        "url": "https://www.news18.com/cities/pune/pune-14-day-curfew-fact-checked-move-freely-restaurateurs-cry-50-percent-losses-ws-l-10114491.html",
        "image": "https://images.news18.com/ibnlive/uploads/2025/11/street-food-1-2025-11-4e0be39d9280667e5e1a1f2d8078e3d4-16x9.jpg",
        "publishedAt": "2026-05-27T04:09:27Z",
        "lang": "en",
        "source": {
            "id": "ca84296ef941bfa461f4239a2290cb99",
            "name": "News18",
            "url": "https://www.news18.com",
            "country": "in"
        }
    },
    {
        "id": "38426964a51abf630cf8ce4f52bcab2e",
        "title": "Buzzing Stock: Auto component maker surges 9% after Q4 results but remains below IPO price",
        "description": "Carraro India said its domestic agriculture business remained strong, led by rising 4WD tractor penetration. Its construction equipment exports continued to witness healthy traction as well.",
        "content": "Carraro India's engineering services and e-transmission business is also gaining traction. It said its higher HP tractor export market is gradually recovering.\nShares of Carraro India Ltd. gained 9% in early trade on Wednesday, May 27, after the comp... [1499 chars]",
        "url": "https://www.cnbctv18.com/market/carraro-india-share-price-q4-result-reaction-surge-domestic-biz-exports-growth-ipo-returns-ws-l-19914092.htm",
        "image": "https://images.cnbctv18.com/uploads/2026/05/market-chatgpt-23may1600x900-2026-05-ec3e90d37dd690b301aa619badfee7a2.jpg?im=FitAndFill,width=500,height=300",
        "publishedAt": "2026-05-27T04:06:57Z",
        "lang": "en",
        "source": {
            "id": "4bf882bd9fc07a7fc3ab723f04e4f261",
            "name": "CNBC TV18",
            "url": "https://www.cnbctv18.com",
            "country": "in"
        }
    },
    {
        "id": "57ac444152afa12c1394f5b35e4bc578",
        "title": "Unionised workers of Samsung vote to accept wage deal",
        "description": "Unionised workers of Samsung vote to accept wage deal - Seoul, May 27 Unionised workers at Samsung Electronics voted to approve a wage agreement, the union said on ... Get Latest News on Business only on lokmattimes.com",
        "content": "Seoul, May 27 Unionised workers at Samsung Electronics voted to approve a wage agreement, the union said on Wednesday, easing concerns about potential disruptions to the global supply chain.\nIn the six-day vote, 73.7 percent of the 62,616 members of ... [2242 chars]",
        "url": "https://www.lokmattimes.com/business/unionised-workers-of-samsung-vote-to-accept-wage-deal/",
        "image": "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/1200x900/c8f06c3425b9163714d76b41c05f2bc2_202605.jpg",
        "publishedAt": "2026-05-27T04:01:05Z",
        "lang": "en",
        "source": {
            "id": "f2ddccedc9e60d844e7a1045928cad48",
            "name": "Lokmat Times",
            "url": "https://www.lokmattimes.com",
            "country": "in"
        }
    },
    {
        "id": "501293807bb18db9555b0358b3858cfb",
        "title": "I'm a College Senior Who Built Vintage Marketplace With Claude",
        "description": "Hana Elster vibe-coded a business during her last college term, and she hopes it will be a successful side hustle as she moves into a corporate role.",
        "content": "This as-told-to essay is based on a conversation with Hana Elster, a 22-year-old senior at Boston University who founded VYA, an online vintage marketplace. It has been edited for length and clarity.\nI'm a senior at college studying business law at B... [4552 chars]",
        "url": "https://www.businessinsider.com/college-senior-built-vintage-marketplace-claude-2026-5",
        "image": "https://i.insider.com/69fc4f47c9dd4cb81cda7fa5?width=1200&format=jpeg",
        "publishedAt": "2026-05-27T04:01:02Z",
        "lang": "en",
        "source": {
            "id": "458ddf355ab77631d3eb3dd84a0351b4",
            "name": "Business Insider",
            "url": "https://www.businessinsider.com",
            "country": "us"
        }
    },
    {
        "id": "a0f0203d83760b39397e77d0a42d2943",
        "title": "Paris Jackson says bond with father Michael Jackson is no one's business",
        "description": "Paris Jackson says bond with father Michael Jackson is \"no one's business\"",
        "content": "Washington DC [US], May 27 (ANI): Paris Jackson has opened up about her evolving relationship with her late father, pop icon Michael Jackson, saying she now prefers to keep those memories private, according to E! News.\nSpeaking recent episode of the ... [2001 chars]",
        "url": "https://www.news18.com/agency-feeds/paris-jackson-says-bond-with-father-michael-jackson-is-no-ones-business-10114562.html",
        "image": "https://images.news18.com/ibnlive/uploads/2025/05/News18_India_Section_Default_Image_1600x900-2025-05-b4faf46d67a95708181b01e36cf20c4b.jpg",
        "publishedAt": "2026-05-27T04:00:03Z",
        "lang": "en",
        "source": {
            "id": "ca84296ef941bfa461f4239a2290cb99",
            "name": "News18",
            "url": "https://www.news18.com",
            "country": "in"
        }
    },
    {
        "id": "56bc35de23903856360cadce4856710f",
        "title": "Wife granted 33% of matrimonial assets in divorce; homemaker role allowed husband to grow business",
        "description": "The couple were married for around 15 years and have three children, aged nine to 16, together. Read more at straitstimes.com.",
        "content": "SINGAPORE - A woman who assumed greater responsibilities on the homemaking front so her husband could build his business has been granted a third of the couple’s matrimonial assets, which amounts to $2.2 million .\nIn judgment published on May 20, Hig... [3639 chars]",
        "url": "https://www.straitstimes.com/singapore/courts-crime/wife-granted-33-of-matrimonial-assets-in-divorce-homemaker-role-allowed-husband-to-grow-business",
        "image": "https://cassette.sphdigital.com.sg/image/straitstimes/0250a041567fd74969ac02f3c97c2e2d8d5d69a434654ddce3706f27ac4ac789",
        "publishedAt": "2026-05-27T04:00:00Z",
        "lang": "en",
        "source": {
            "id": "72bbcd9c095a3d51c97cdda7a97dba31",
            "name": "The Straits Times",
            "url": "https://www.straitstimes.com",
            "country": "sg"
        }
    },
    {
        "id": "d3b51313c84d68473e1453a4b260cf48",
        "title": "Failure to attract data centres ‘a threat to corporation tax revenues’",
        "description": "Multinationals looking elsewhere for data storage locations may transfer other key business out of Ireland, lobby group says",
        "content": "The Republic’s corporation tax revenues could slump if multinationals continue favouring other countries over the Republic for new data centre construction, a leading tech lobby group has warned.\nBusinesses paid €33 billion in corporation tax on thei... [2876 chars]",
        "url": "https://www.irishtimes.com/business/economy/2026/05/27/failure-to-attract-data-centres-a-threat-to-corporation-tax-revenues/",
        "image": "https://www.irishtimes.com/resizer/v2/A5FVR7TTNWTL7SZKHKSTG4LIDQ.jpg?smart=true&auth=4a3464fbf77d438c98738fcb87fecb6ea8b88d8e03bc970a9e2d6cfc3b30c354&width=1200&height=630",
        "publishedAt": "2026-05-27T04:00:00Z",
        "lang": "en",
        "source": {
            "id": "dd1d806725f45e4403e75c1bb23b447a",
            "name": "The Irish Times",
            "url": "https://www.irishtimes.com",
            "country": "ie"
        }
    },
    {
        "id": "4272cdd553034a451d8f6cb30d7b5268",
        "title": "Liverpool now have three clear transfer targets and Jarrod Bowen can be the answer",
        "description": "In his final column of the season, John Aldridge looks at the business Liverpool should be doing in the transfer window and a warning for Arne Slot",
        "content": "In his final column of the season, John Aldridge looks at the business Liverpool should be doing in the transfer window and a warning for Arne Slot\nThey may not end up spending anywhere near as much as last summer. But it promises to be another big t... [3840 chars]",
        "url": "https://www.liverpoolecho.co.uk/sport/football/football-news/liverpool-now-three-clear-transfer-34012624",
        "image": "https://i2-prod.liverpoolecho.co.uk/article34012835.ece/ALTERNATES/s1200d/0_GettyImages-2277549558.jpg",
        "publishedAt": "2026-05-27T04:00:00Z",
        "lang": "en",
        "source": {
            "id": "36974e61b15eebfe76ce1a593d2ff278",
            "name": "Liverpool Echo",
            "url": "https://www.liverpoolecho.co.uk",
            "country": "gb"
        }
    }
]
  
export class News extends Component {
  static propTypes = {
    
  }
constructor(props){
      super(props)
      this.state={
       articles:articles,
        loading:true
      }
    this.props.prfn(10);  // call it directly
    }
    // component did mount checks if everything was rendered properly
    
  async componentDidMount(){
       document.title=`News App`;
                    this.props.prfn(10); 
    try{
let apikey = allkeys[this.props.keyindex]
             this.props.prfn(30);  
   let newurl = `https://gnews.io/api/v4/search?q=${this.props.category}&lang=en&max=10&apikey=` + apikey;
   //let customurl=`https://gnews.io/api/v4/top-headlines?category=${this.props.category}&apikey=${apikey}`
   //t.log(newurl)
   let response=await fetch(newurl)  
   this.props.prfn(60); 
    let data=await response.json()
    if (!data.articles) {
  throw new Error('Data corrupted')
}
this.props.prfn(90); 
    console.log(data)
    articles=data.articles
   // console.log("articles")
  this.setState({ articles: data.articles, loading: false });
    }
    catch(error){
  console.log('lil problem')
 this.props.prfn(90); 
    }
this.props.prfn(100); 
  }
  async componentDidUpdate(prevProps) {
  if (prevProps.category !== this.props.category) {
    this.setState({ loading: true });
                 this.props.prfn(30);  

    try {
      const apikey = allkeys[this.props.keyindex];
         this.props.prfn(60); 
      const newurl = `https://gnews.io/api/v4/search?q=${this.props.category}&lang=en&max=10&apikey=${apikey}`;
      const response = await fetch(newurl);
      const data = await response.json();
this.props.prfn(90); 
      if (!data.articles) throw new Error('Data corrupted');

      this.setState({ articles: data.articles, loading: false });
    } catch (error) {
    //  console.log(error);
    }
    this.props.prfn(100); 

  }
}
  render() {
        let {mode}=this.props;
        let darkmode=mode.darkmode
        document.title=this.props.category+"- News App"
    return (
      
      <div>
      <center>  <h1  style={{marginTop:'70px',backgroundColor: darkmode ? 'rgb(0, 82, 170)' : 'white' ,color:darkmode?'white':'black', marginBottom: 0 }}>Todays Headlines -{this.props.category}</h1>{this.state.loading && <Loading/>}</center>
          

       <div className='row' style={{ backgroundColor: darkmode ? 'rgb(4, 6, 69)' : 'white' }}>
             {this.state.articles
  .filter((element, index, self) => index === self.findIndex((t) => t.id === element.id))
  .map((element) => {
    return (
      <div className='col-md-4' key={element.id}>       
        <Newsitems 
          caption={element.title} 
          description={element.content} 
          imgurl={element.image} 
          url={element.url} 
          mode={mode} 
          publishedAt={element.publishedAt}
        />
      </div>
    );
  })
}
      </div>
      </div>

    )
  }
}

export default News
