import { Component } from '@angular/core';
import { trigger,  style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ height: '0px' }),
        animate('300ms', style({ height: '430px' }))
      ]),
      transition(':leave', [
        animate('300ms', style({ height: '0px' }))
      ])
    ])
  ]
})


export class ActivitiesComponent {
activity=[{
  name:'Sailing',
  imglink:'../../../assets/img for home/imgrow4.png',
  id:0,
},
{
  name:'Climbing',
  imglink:'../../../assets/img for home/imgrow4-2.png',
  id:1,

},
{
  name:'Skiing',
  imglink:'../../../assets/img for home/imgrow4-3.png',
  id:2,

},
{
  name:'Hiking',
  imglink:'../../../assets/img for home/imgrow4-4.png',
  id:3,
}
,
{
  name:' swimming',
  imglink:'https://hips.hearstapps.com/hmg-prod/images/female-swimmer-at-the-swimming-pool-royalty-free-image-1568376387.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*',
  id:4
}
,
{
  name:'cycling',
  imglink:'https://www.visitruapehu.com/media/A%20Man%20Cycling%20Through%20The%20Forest%20On%20The%20Marton%20Sash%20&%20Door%20Tramway%20Trail%20-%20Visit%20Ruapehu.jpg?width=480&height=600&rmode=crop&token=Az%2FKNIcHoTS5jPEh7CtCV4HLBWaeU%2F2K0y%2BrO0SpAns%3D',
  id:5,
}
,
{
  name:'yoga',
  imglink:'https://hips.hearstapps.com/hmg-prod/images/cheerful-pretty-woman-with-hair-bun-in-tight-royalty-free-image-1672861623.jpg?crop=0.524xw:0.786xh;0.231xw,0.151xh&resize=1200:*',
  id:6,
}
]
info=[{
  header:'sailing',
  text:`Sailing employs the wind—acting on sails, wingsails or kites—to propel a craft on the surface of the water (sailing ship, sailboat, raft, windsurfer, or kitesurfer), on ice (iceboat) or on land (land yacht) over a chosen course, which is often part of a larger plan of navigation.
  From prehistory until the second half of the 19th century, sailing craft were the primary means of maritime trade and transportation; exploration across the seas and oceans was reliant on sail for anything other than the shortest distances. Naval power in this period used sail to varying degrees depending on the current technology, culminating in the gun-armed sailing warships of the Age of Sail`,
  placelist:['prescott-Experience unique sailing cruises  ','st.Joseph-Learn the fundamentals of sailing including vocabulary, safety, and how sailboats work.','Saint Martin, The Caribbean-Hvar, Croatia-One of the best yachting destinations is Hvar, Croatia',' Sailing out of Saint Martin allows you to explore other nearby Caribbean Islands,'],
  id:0
},
{
  header:'climbing',
  text:`Climbing is the activity of using one's hands, feet, or other parts of the body to ascend a steep topographical object that can range from the world's tallest mountains (e.g. the eight thousanders) to small boulders. Climbing is done for locomotion, for sporting recreation, for competition, and is also done in trades that rely on ascension; such as rescue and military operations. Climbing is done indoors and outdoors, on natural surfaces (e.g. rock climbing and ice climbing), and on artificial surfaces`,
  placelist:['Yosemite Valley,-Considered the epicenter of the United States climbing by many, Yosemite is truly a climber’s paradise. ','Red Rocks, Nevada-A gorgeous desert landscape, warm weather, and hundreds of bolted anchors make climbing in Red Rocks Canyon National Park both fast and fun','tucson-Mount Lemmon: Located in the Santa Catalina Mountains, Mount Lemmon offers numerous climbing routes of varying difficulty levels'],
  id:1
},
{
  header:'skiing',
  text:`Admiring the dramatic mountain landscape from atop the ski lift, feeling the cold air nipping at your cheeks, experiencing the rush of adrenaline as you carve the snow – there's nothing quite like a day on the slopes. And while the mountain conditions are a top priority, these ski vacation spots also boast charming towns and lively après-ski scenes to explore. Considering factors like resort variety, natural beauty, annual snowfall and overall atmosphere, U.S. News ranked the world's best ski vacations`,
  placelist:['Whistler-Open to skiers and boarders nearly half the year, Whistler, British Columbia, provides seemingly endless terrain for winter enthusiasts of all skill levels.',`Zermatt-With the jaw-dropping Matterhorn mountain and other stunning peaks towering over this Swiss town, it's no wonder why visitors can't stop gawking at the scenery surrounding Zermatt.`,`Jackson Hole-There are three ski resorts in this photogenic area of the Teton Mountains, but Jackson Hole Mountain Resort is the largest, receiving about 450 inches of snowfall each year on its 2,500 acres of in-bounds skiable terrain`],
  id:2
},
{ 
   header:'hiking',
text:'There are many amazing places to go hiking, so we would say there isn’t really one best place. But there are some locations that spectacularly lend themselves to exploration on foot versus others that are more easily or enjoyably explored by boat, bicycle, or car. A great trekking destination has specific characteristics that make it so good for hiking.',
placelist:['GRAND CANYON NATIONAL PARK-There’s nowhere else on earth like the Grand Canyon, and Grand Canyon National Park is the heart of this 277-mile long geological phenomenon',' THE ALPS-The Alps are hard to beat in terms of scenery, space and walkability. It feels like they were created specifically for trekking',`COLORADO ROCKIES-OVERVIEWThe state of Colorado offers world class hiking and backpacking, and an almost endless supply of it. With Rocky Mountain National Park and other wilderness areas covering more than 3.5 million acres (approximately the size of Connecticut), Colorado is a true hiking gem`],
id:3
},
{
  header:'swimming',
  text:`Two-thirds of the globe is covered by the ocean, so you’re never too far from a great place to get into the water. But where are the best places to swim in the world?Needless to say, this is a matter of personal choice, partly because of the incredibly wide variety of such places. It’s also a matter of whether you prefer freshwater or seawater, and temperate, tropical, or even cold waters.
  Most people like the idea of a beautiful tropical beach, of course.  But you’ll also find a few famous spots that offer an alternative experience.`,
  placelist:['Silfra Fissure, Iceland-Who can resist the chance to swim between two continents? Sifra is the crack between the North American and Eurasian tectonic plates, which widens by about three-quarters of an inch per year','Buck Island, St. Croix-Turtle Beach on Buck Island is among the best beaches in St. Croix, if not the Caribbean. The island is a protected area, reached only by boat, adding to the beach’s exclusive appeal.','Navagio Beach, Zakynthos, Greece-Greece is a place where beautiful beaches are almost countless, although this cove on Zakynthos stands out for its picturesque setting.'],
  id:4
},
{
  header:'cycling',
  text:`Cycling has been the must-do adventure lately. Cycling enthusiasts from all over the world are always looking for new trails to explore. Be it a novice cyclist or a professional, there are plenty of stunning cycling routes in this world splendid enough to satiate any cyclists’ desire.
  If you are a passionate traveler who is also an avid cyclist you might want to combine both of your passions into one memorable adventure.`,
  placelist:['Girona, Spain-There’s a good reason why Girona is a favorite for professional cyclists. Located 60 miles north-east of Barcelona, it boasts a wonderful climate, good roads and country lanes, technical climbs and mountain scenery. Girona is a hidden treasure being so close to Barcelona yet so far away with an added advantage of diverse cuisines, rich history and culture, Girona, really is cycling heaven.',` Dolomites, Italy-Cycling in the shadows of the surrounding jagged mountains and the dreamy meadows, The Dolomites, a UNESCO site, is a must have for every cyclist at some point in their life.`,` Morzine, French Alps-Morzine is an excellent place for mountain biking or road biking. Located in the Rhone-Alpes region of France and nestled close to Switzerland, the resort towns of Morzone and Avoriaz boast idyllic chalets and hotels who cater to outdoor sports. `],
  id:5
}
,
{
  header:'yoga',
  text:'As yoga continues to grow in popularity around the world, more and more yoga destinations are emerging with an abundance of yoga retreats being created not only for the seasoned yogi but for all levels. Many sprinkle in other activities too for yoga holidays that encompass nature, surfing, meditation, detoxes and much more.',
  placelist:['Costa Rica-Costa Rica has become a popular destination not only for travellers but also for yogis. This welcoming country is an ideal place to practice yoga, attend a retreat and get in touch with yourself not only because of its nature but also because of how the country as a whole approaches life','Bali (Indonesia)-Bali is wildly popular for yoga retreats and beckons yogis from around the world with its enticing nature, culture and low costs.',`Sri Lanka-Sri Lanka is yet another country that draws in visitors for its picturesque beauty from the jungles to the beaches. It’s a country rich in history and while it may not seem like the first choice for yoga, it is only a hop, skip and a jump away from India, the birthplace of yoga.`],
  id:6
}


]
id

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
click(Id){

this.id=this.info[Id];
console.log(this.id)
}
dissapear(){
if(this.id){
  this.id=null
}

}

}
