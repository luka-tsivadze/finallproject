import { Component, } from '@angular/core';
import { trigger,  style, animate, transition } from '@angular/animations';
import { Conditional } from '@angular/compiler';
@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
   animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ height: '0px' }),
        animate('300ms', style({ height: '430px' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ height: '0px' }))
      ])
    ]),
    
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('300ms', style({ opacity: '1' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity:'0' }))
      ])
    ]),

  ]
})


export class ToursComponent {

season=false
type
classList
detail
head
cardclicked=false

springtours=[
  {
    price:450,
   place:'Cairo & El Minya',
   duration:5,
   img:'https://www.cleopatraegypttours.com/wp-content/uploads/2018/08/Minya.jpg',
   includes:['4-night hotel accommodation in Cairo on BB basis.','Full day visit to the Great Pyramids of Giza,the Egyptian Museum and Khan El Khalili.','Day trip to El Minya including the visit of Beni Hassan Tombs and Tel Al Amarna.','Airport transfers as per itinerary.','Local English speaking guides.','Present taxes and entrance fees for the included sightseeing.'],
  details:[`Day 1 - Arrival Day  Arrival at Cairo Airport. Spring Tours representative will meet you at the airport and will escort you during the transfer to your hotel in Cairo for check-in. Rest of day, free for leisure. Overnight at the hotel in Cairo. Meals (-)`,`Day 2 - Cairo  Sightseeing  Breakfast at the hotel. With Spring Tours guide, you will visit the only surviving wonder of the Ancient World: the Great Pyramids of Giza. Beside the Pyramids, you will have the chance to see the famous Sphinx and visit the Valley Temple in Giza Necropolis. The next stop will be at the Egyptian Museum where you will find -without doubt- the greatest collection of Egyptian antiquities. It has more than 120,000 items on display, with many more hundreds of thousands in its basement storerooms. One of the most famous collections housed by the Egyptian Museum is Tut Ankh Amun Treasures. The tour will end at Khan El Khalili Bazaar, which is for many, the most entertaining part of Cairo! Overnight at the hotel in Cairo. Meals (B)`,`Day 3 - El Minya   Transfer to El Minya. Visit the tombs of Beni Hassan and enjoy a magnificent view over the Nile. Proceed to Tal El Amarna to visit the tombs on the East Bank of the Nile. Back to Cairo. Overnight at the hotel. Meals (B)`,`Day 4 - Free for leisure
  Breakfast at the hotel. Day free for leisure, the city self exploration or you can book optional tours. Overnight at the hotel in Cairo. Meals (B)`,` Day 5 - Departure Day   Breakfast at the hotel. Transfer to Cairo Airport for international departure escorted by Spring Tours representative. Meals (B)`]
  },
   {
    price:1500,
   place:'Shanghai',
   duration:11, 
   img:'https://www.spring-tour.com/wp-content/uploads/2016/12/%E5%BC%A0%E5%AE%B6%E7%95%8C1.jpg',
   includes:['Domestic airfares & taxes','Hotel accommodation with breakfast','Lunches and dinners as itinerary specifies','Professional English-speaking guides','Sightseeing per itinerary in modern air-conditioned motor coach','Entrance fees per itinerary'],
 details:[`Day 1: Arrival in ShanghaiArrived in Shanghai.  you will be met by your guide outside customs. You will then be transferred to the hotel.`,`Day 2: Shanghai — Zhangjiajie Today’s trip will start at 【Shanghai Museum】 which specializes in ancient art works of China Later, take a trip to the classical Yuyuan Garden.`,`Day 3: Zhangjiajie National Forest Park Today after breakfast, let’s ascend to the top of 【Yuanjiajie Mountain】,  Yuanjiajie is a naturally formed platform mountain surrounded by peaks which are divided by deep valleys.`,`Day 4: Zhangjiajie National Forest Park After breakfast, starting your visit on 【Yellow Stone Mountain】, taking the cable to the top of the mountain, there are numerous lookout points for stunning views, from which you can see nearly half the peaks of Zhangjiajie.`,`Day 5: Zhangjiajie National Forest Park – Fenghuang County  After breakfast, going to the【Yellow Dragon Cave】to see the abundant stalagmites and stalactites, then visiting 【Bao Feng Lake】, taking boat while enjoying the folk songs singing. Then driving to Phoenix town (approximately 3.5 hours).`,`Day 6: Fenghuang County – Kaili After breakfast, go on visiting【Phoenix town】 and transfer to Kaili by coach in the afternoon. `,`Day 7: Kaili – Guiyang Visiting the 【Xijiang Miao village】. It is known as the 1,000-household village.  `,`Day 8: Guiyang — Anshun This morning you will be transfer to Huangguoshu Waterfall area. Visit 【Tianxing Park】, this scenic spot is distinguished with its sights of various types, its natural stone formations of fabulous shapes, high cacti extending far and wide forming a dense forest.`,`Day 9: Anshun — Guiyang Today, on the way back to Guiyang, you will visit 【Yunfeng Old Han village】. Yunfeng villagers wear clothes in the style of the Ming Dynasty (1368-1644) and speak the language used during that period.`,`Day 10: Guiyang — Shanghai
 After breakfast, you will be transferred to Guiyang airport and fly to Shanghai, the last stop of your 10 days guided tour of Ethnic Culture Discovery.`,`Day 11: Shanghai
 Today is the day of farewell to your 11 days China trip. We will transfer you to the PVG Airport for the flight back to your hometown or next destination.`]
  }
]
summertours=[
  {
  price:'4200',
   place:'The Greek Islands',
   duration:14,
   img:'https://a.storyblok.com/f/53624/1600x900/648cc8b985/tgi-5c3aa373791026053.jpg/m/0x350',
   includes:['12 nights in handpicked hotels','12 breakfasts','5 dinners with beer or wine','3 sightseeing tours',`Expert Tour Director & local guides`,`Private deluxe motor coach`,`3 ferry transfers`,`1 on-tour flight`],
   details:[`Day 1: Travel day
   Board your overnight flight to Athens today.`,`Day 2: Arrival in Athens  Meet your Tour Director and fellow travelers at a welcome dinner tonight.`,`Day 3: Sightseeing tour of Athens A local guide introduces you to the highlights of this bustling ancient capital, home to the world’s first democracy.`,`Day 4: Free day in Athens`,`Day 5: Ferry to Mykonos & sightseeing tour Travel by ferry to Mykonos and join your Tour Director on a walk through Mykonos Town.`,`Day 6: Free day in Mykonos`,`Day 7: Free day in Mykonos`,`Day 8: Ferry to Santorini Take a ferry to Santorini, then enjoy free time to discover the island’s volcanic black sand beaches, cliff-lined shores, and stunning whitewashed architecture.`,`Day 9: Sightseeing tour of Santorini Today, take in the local sights on a guided tour of Santorini.`,`Day 10: Free day in Santorini`,`Day 11: Ferry to Crete Take a ferry to Crete, the largest of the Greek islands, this afternoon.`,`Day 12: Free day in Crete`,`Day 13: Sightseeing tour of Heraklion & transfer to Athens`]

  },
  {
    price:'3600',
    place:'Jewels of Alpine Europe',
    duration:13,
    img:'https://a.storyblok.com/f/53624/1600x900/6058ecb8c4/dae-5c3aa34aed2045299.jpg/m/0x350',
    includes:['11 nights in handpicked hotels','11 breakfasts','5 dinners with beer or wine','8 sightseeing tours','Expert Tour Director & local guides'] ,
    details:[`Day 1: Travel day  Board your overnight flight to Zurich today.`,`Day 2: Arrival in Zurich & transfer to Lucerne Region Welcome to Switzerland! Transfer to the Lucerne region and get settled in to your hotel.`,`Day 3: Sightseeing tour of Lucerne Get an up-close look at the lakeside city of Lucerne, Switzerland’s idyllic Alpine town, on a guided sightseeing tour.`,`Day 4: French Alps via Bern Travel through the Alps today, taking in stunning scenery as you pass Alpine lakes, mountains, and charming villages.`,`Day 5: Sightseeing tour of Annecy Travel north and get to know the lakeside town of Annecy today.`,`Day 6: Sightseeing tour of Chamonix On your way to Italy, stop to explore and learn about Chamonix, a picture-perfect village at the base of Mont Blanc.`,`Day 7: Como & Villa Carlotta Head out on a morning trip to explore Como, a city known for its mix of cultural and natural attractions.`,`Day 8: Train ride to St. Moritz Travel to Tirano, where you’ll board the Bernina Express. `,
  `Day 9: Austrian Alps via Liechtenstein & Innsbruck Cross into Liechtenstein, a tiny Alpine principality dating back to the Holy Roman Empire.`,`Day 10: Free day in the Austrian Alps Region`,`Day 11: Sightseeing tour of Munich Cross into Germany and get to know the Bavarian capital of Munich on a guided tour this afternoon.`,`Day 12: Free day in Munich`,`Day 13: Transfer to Salzburg & sightseeing tour Head to Salzburg, where a local guide leads you on a walking tour of the Old Town.`]
  }
]
outumntours=[
  {
    price:' $3500 (plus Utah sales tax, 6.5%)',
   place:'Bryce, Zion and Grand Canyon Lodge Tour',
   duration:6,
   img:'https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/0d/da/39.jpg',
   includes:['A professional, licensed and medically trained guide','All lodging (double occupancy) for the duration of the trip','All meals from lunch on the first day through lunch on the last day + trail snacks.',`Use of day pack and trekking poles`,`Roundtrip transportation from your hotel in St. George, UT`,`All backcountry permits & park entrance fees`],
   details:[`eet your guide for breakfast and a brief orientation at 6am. Depart St. George for the short drive to Zion National Park’s Kolob Canyons on the seldom-visited western side of the park.`,`Today we explore beneath the rim of Bryce Canyon. The Fairyland Loop offers all that Bryce is famous for: unique rock towers (hoodoos), natural arches and windows and spectacular views.`,`After breakfast, we depart for Grand Canyon’s North Rim. Our scenic drive takes us down through the multi-colored hues of the Grand Staircase, across the Arizona Strip, and up to the cool, forested heights of the Kaibab Plateau.`,`Today’s journey will bring us incredible views from the rim as we explore one of the lesser-traveled trails in the park.`,`Our final destination on this spectacular tour is Zion National Park. Entering through the east side of the park, we are greeted by a pine and juniper studded landscape of the white sandstone domes of Checkerboard Mesa. `,`Our final day in Zion offers us the opportunity to hike the steep and exciting trail to Angel’s Landing, offering one of the best views in the park. `]

  },
  {
    price:'',
    place:'The Golden Route Japan Tour Autumn',
    duration:7,
    img:'https://alljapantours.com/acp15/tour15/img15/ph162604861.jpg',
    includes:['5 nights Western style and 1 night Japanese style accommodation','Meet and greet upon arrival at Osaka Kansai Airport','Airport transfers on arrival and departure','Private coach transfers between destinations in Japan','Comprehensive escorted with AJT professional English speaking tour guide'],
    details:[`
    Osaka Kansai Airport   Welcome to Osaka! You will be met at the arrival gate by an AJT representative holding an "All Japan Tours" sign.`,`day 2 Nara (Todaiji Temple / Deer Park), Kyoto (Fushimi Inari Shrine)    Today, we will travel to the ancient city of Nara, where we will visit one of Japan’s most famous temples and an icon of the city: Todaiji Temple, which is home to the Great Buddha of Nara – a massive, seated image of Rushana-butsu, known as the “Cosmic Buddha”.`,`Day 3 In the morning, we explore Nijo Castle, a UNESCO World Heritage Site from Japan’s feudal era, and former residence of the Tokugawa shogun`,`Day 4    Kyoto (Kiyomizu Temple), Koka (Miho Museum), Shinkansen Bullet Train Ride This morning we will visit the famous Kiyomizu Temple, best known for its wooden stage that juts out from its main hall, 13 meters above the hillside below`, `Day 5
    Hakone (Hakone Ropeway / Owakudani), Mt Fuji, Tokyo (Shibuya - Shibuya Crossing - Hachiko Statue)
    After enjoying Japanese breakfast at the hotel, we will travel to Hakone and take a 20 minute ropeway from Togendai to Owakundani.`,`Day 6
    Tokyo (Tsukiji Outer Market / Drive by Imperial Palace / Sushi Making Experience / Asakusa Sensoji Temple / Tokyo Skytree)
    Today, you will visit Tsukiji Outer Market – a bustling outdoor street market known for its fresh and delicious seafood, produce, and kitchenware.`,`
    Tour Ends
    After breakfast, our tour officially ends. Checkout time is 11 am and Narita Airport can be reached by hotel shuttle bus.`]
 
  }

]
wintertours=[
  {
    price:'3080',
   place:'Finnish Lapland in Winter',
   duration:6,
   img:'https://www.intrepidtravel.com/sites/intrepid/files/styles/800w/public/elements/product/hero/finland_northern-lights-night-village.jpg',
   includes:[`  Meals  6 breakfasts`,`
   Transport
   Overnight Train, Public bus, Private vehicle, Tram`,`  Accommodation Hotel (2 nights), Guesthouse (4 nights), Overnight Sleeper Train (1 night)`,`  Included activities   Helsinki to Rovaniemi - Santa Claus Express Overnight Train   Yllästunturi - Dog Sledding   Yllästunturi - Reindeer Farm Visit  Yllästunturi - Finnish Bath`,`Roundtrip transportation from your hotel in St. George, UT`,`All backcountry permits & park entrance fees`],
   details:[`Welcome to Helsinki, Finland. If you’re in the city early, head out and discover a wealth of historical sights and gastronomic wonders in Helsinki.`,`Join your leader on an orientation walk around Helsinki in the morning. Once you get the lay of the land, the rest of the day is completely free for you to explore Helsinki in your own time.`,`The train arrives in Rovaniemi early this morning. Continue by private vehicle to a family-run guesthouse deep in the Finnish forest (approximately 3 hours). This location will be your base for the next four nights, situated near Yllästunturi, a popular cross-country and downhill skiing destination.`,`Make sure you rug up for today’s adventures, as you’ll be pulled across the landscape at high speed on the back of a dog sled.`,`Your next adventure in Yllästunturi takes you on a visit to a traditional local family, who will guide you through their world and lifestyle. Their reindeer farm has been operating since 1861 and you may have the opportunity to feed and watch these cute animals go about their daily routine. `,`Yllästunturi is home to the largest skiing resort in all Finland, boasting some of the longest downhill skiing runs through its rolling snow parks. Today you’ll have a free day to explore this winter wonderland with plenty of optional activities that your leader or the accommodation owners can help organise for you.`,`Yllästunturi is home to the largest skiing resort in all Finland, boasting some of the longest downhill skiing runs through its rolling snow parks. Today you’ll have a free day to explore this winter wonderland with plenty of optional activities that your leader or the accommodation owners can help organise for you. `,`Yllästunturi is home to the largest skiing resort in all Finland, boasting some of the longest downhill skiing runs through its rolling snow parks. Today you’ll have a free day to explore this winter wonderland with plenty of optional activities that your leader or the accommodation owners can help organise for you. `,`Your adventures through Lapland come to an end today after breakfast. If you would like to extend your stay in the region we are happy to book additional nights for you`,
   ]
  },
  {
    price:'1800',
    place:'Travel to Iceland',
    img:'https://www.intrepidtravel.com/sites/intrepid/files/styles/480w/public/elements/product/hero/Intrepid%20Travel-iceland_reykjavik_city-skyline-winter_ss-640338985-2.jpg',
    duration:6,
    includes:[`  Meals  5 breakfasts`,`    Transport    Private minibus with free Wi-Fi`,`
    Accommodation
    Guesthouse (3 nights), Hotel (2 nights)`,`
    Included activities
    Golden Circle - Thingvellir National Park
    Golden Circle - Strokkur Geysir
    Golden Circle - Gullfoss Waterfall
    Jokulsarlon - Glacier Lagoon
    South Coast - Skogafoss Waterfall
    South Coast - Dyrholaey Viewpoint
    Vatnajokull - Glacier Hike
    Reykjavik - Walking Tour`],
    details:[`Hallo! Welcome to Iceland. The world's northernmost capital of Reykjavik lies just below the Arctic Circle. The city sees around four hours of sunlight a day in winter and 22 hours or more in summer. Surrounded by volcanic peaks and crystalline ocean, and boasting a vibrant arts and nightlife scene, Reykjavik's contrasts are utterly beguiling. `,`day-2 Depart Reykjavik early this morning and follow the route of the 'Golden Circle'. Visit Þingvellir National Park, the site of Iceland's first parliament, founded in AD930, and a geological wonder where the American and Eurasian tectonic plates are pulling apart. `,`day-3 Start the day with a trip to the eerily beautiful Skógafoss waterfall, one of the biggest waterfalls in Iceland. Skógafoss is a giant of a waterfall, 25 metres wide and also dropping down 60 metres. You can get up close and feel its power, and also climb a (long) windy set of stairs up to a stunning viewpoint. On a sunny day you should be able to spot a rainbow or two in the spray.`,`day-4 Today you'll take a walk on Europe's biggest ice cap – Vatnajokull – which has around 30 glaciers flowing out from it. No experience is necessary to partake in the hike. It’s sobering to think that the glacier is retreating due to rising world temperatures, and in some years the glacier may be gone.`,`day-5 This morning we make our way to the beautiful waterfall of Seljalandsfoss, and then back to Reykjavik. Upon arrival take a short guided walk of Reykjavik to get an enhanced appreciation of the city around its landmark attractions and points of interest. Visit the old harbour, the city center and the famous Hallgrimskirkja church. Iceland's capital has an eclectic arts and music scene, an abundance of quirky cafes and a laid-back vibe.`,`day-6 Today is departure day and time to say 'sjaumst'. As there are no activities planned, you are able to depart the hotel at any time. Check out time is at midday. If you are departing later, you can arrange to store your luggage at the hotel.`]
  }
]
condition=false;
constructor(){
  trigger('fadeInOut', [
    transition(':enter', [
      style({ height: '100px' }),
      animate('3000ms', style({ height: '400px' }))
    ]),
    transition(':leave', [
      animate('3000ms', style({height: '100px' }))
    ])
  ])
}



clicked(event: MouseEvent) {
  this.season = true;

  let element = event.target as HTMLElement;
  
   this.classList = element.classList.value;
  console.log(this.classList);
  switch (true) {
    case this.classList.includes('spring'):
      this.type = this.springtours;
      this.head='spring'
      break;
    case this.classList.includes('summer'):
      this.type = this.summertours;
      this.head='summer'
      break;
    case this.classList.includes('outumn'):
      this.type = this.outumntours;
      this.head='outumn'

      break;
    case this.classList.includes('winter'):
      this.type = this.wintertours;
      this.head='winter'
      break;
      default: 
  
      break;
  }
  console.log(this.type)

}

details(info){
 

  this.cardclicked=!this.cardclicked
this.detail=info.details

console.log(this.cardclicked) 



}
unclick(){
  if(this.cardclicked){
  this.cardclicked=false
  }
}
back(){
  this.season=false
  this.cardclicked=false

}

}
