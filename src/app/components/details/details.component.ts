import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
k=0;
  information=[
    {
      id:0,
      destination:'big sour',
      place:'california usa',
      rate:4,
      describtion:'Big Sur is renowned worldwide for its natural features and relatively pristine scenery. It is rated among the top 35 tourist destinations in the world.[5] The Big Sur coast has been called the "longest and most scenic stretch of undeveloped coastline in the [contiguous] United States."[1] The region has been described as a "national treasure that demands extraordinary procedures to protect it from development."[2] The New York Times wrote that it is "one of the most stunning meetings of land and sea in the world."[34] The Washington Times stated that it is "one of the most beautiful coastlines anywhere in the world, an isolated stretch of road, mythic in reputation."[3] Condé Nast Traveler named State Route 1 through Big Sur one of the top 10 world-famous streets, comparable to Broadway in New York City and the Champs-Élysées in Paris.[35] Realtor Mark Peterson commented, "Big Sur’s popularity has erupted with the growth of social media. It has become a year-round destination."',
      hotelinfo:["Even when you're inside, you'll always be connected to the outdoors at Ventana Big Sur  our luxurious, rustic and inviting guestrooms are tucked among the meadows and redwoods. Ventana's 59 rooms and suites are arranged around our 160-acre property in secluded groupings, offering the utmost in privacy and serenity. Constructed of sun-bleached cedar, the buildings blend harmoniously into the natural surroundings, with interiors featuring rich leathers and woods that provide a soothing, sophisticated retreat.","Located in the heart of Pfeiffer State Park, Big Sur Lodge offers single, double, and family size rooms with fireplaces and kitchenettes and a myriad of wonderful outdoor activities for all travelers' needs including hiking and swimming. Located inside the lodge is The Homestead Restaurant, an outdoor patio, gift store, and deli. Wedding and corporate group events/dining facilities are available.",
      `Welcome to Post Ranch Inn, your Big Sur “home away from home.” Post Ranch Inn aims to make your visit as relaxing and enjoyable as possible, which is why so many guests continue to come back year after year.
      Given the close proximity to Seal Beach Scenic Overlook (2.7 mi), guests of Post Ranch Hotel can easily experience one of Big Sur's most popular landmarks.
      Rooms at Post Ranch Hotel provide air conditioning, a refrigerator, and a minibar, and guests can stay connected with free wifi.`
    ],
      hotelNames:['Alila Resort','Big Sur Lodge','Post Ranch Inn'],
      hotelimg:['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/e3/5d/6f/exterior.jpg?w=1100&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/f9/d6/a4/comfortable-bed-in-main.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/d4/4a/99/post-ranch-coastal-exterior.jpg?w=1100&h=-1&s=1'],
      destinationimg:['https://wp-cdn.indiecampers.com/blog/wp-content/uploads/2022/07/14145452/shutterstock_127554866-2-scaled.jpg','../../../assets/img for home/imgfirstrow1.png',`https://localadventurer.com/wp-content/uploads/2018/11/mcway-falls-big-sur-ca.jpg`],

    }
    ,
    {
      id:1,
      destination:'Prescott',
      place:' Arizona, USA',
      rate:5,
      describtion:`Prescott has many Victorian style homes. Prescott has 809 buildings on the National Register of Historic Places. The tallest house in North America, Falcon Nest is in Prescott, on the slope of Thumb Butte.
      Prescott is home to the downtown historical area known as Whiskey Row. Adjacent to Whiskey Row was the red-light district which operated until 1917, at which point prostitution was outlawed in the state of Arizona.[20] In 1900, a great fire destroyed almost all of the buildings on Whiskey Row, including the 1891 Hotel Burke, advertised as "the only absolutely fireproof building in Prescott".[58] By legend, the patrons of the various bars simply took their drinks across the street to the Courthouse square and watched it burn. At the time of the fire, patrons removed the entire bar and back-bar of the Palace Restaurant & Saloon to the square by the patrons as the fire approached, re-installing it after the gutted brick structure was rebuilt. Whiskey Row runs north and south on Montezuma St. between Gurley and Goodwin St., directly west of the county courthouse.[citation needed] This single city block has been the home of the St. Michael's Hotel (formerly the Hotel Burke) and the Palace Hotel since the late 19th century, along with other colorful purveyors of nightlife. Originally built in 1877, The Palace Restaurant and Saloon was rebuilt after the fire, and is now the state's oldest continuous business. Merchant Sam Hill's large hardware store was near Whiskey Row.`,
      hotelNames:['Hassayampa Inn','Hilton Garden Inn','Prescott Pines'],
      hotelimg:['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/4c/d3/c7/hassayampa-inn.jpg?w=900&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/64/01/ab/exterior.jpg?w=1100&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/92/02/b1/main-inn.jpg?w=1200&h=-1&s=1'],
      hotelinfo:['The Hassayampa Inn offers vintage luxury rooms with modern amenities in this historic boutique hotel in the center of Prescott, Arizona. Fine dining, events, weddings and romantic getaways offered.',`The Hilton Garden Inn Prescott Downtown is in the heart of beautiful Downtown Prescott. Within walking distance of Whiskey Row our neighborhood is filled with great restaurants, shops, and entertainment. While staying with us enjoy a bite at our on-site restaurant and bar, Triple Creek Kitchen & Spirits, or begin a hike on Prescott's great trail system located just outside our doorstep. Stroll through the local farmer's market and then relax in our outdoor pool and spa. Plan an event at the historic Event Center at Sam Hill Warehouse or relax by the fireplace on our spacious patio. Our hotel combines a historic setting with upscale amenities`,`Eleven rooms in three guesthouses nestled on an acre graced by majestic pines and cedars. The perfect destination for a romantic getaway, a comfortable business stay, or an escape to rejuvenate body and soul. Located in the pines just a mile from historic Courthouse Plaza and Whiskey Row. Three bedroom vacation rental Lodge also on property.`],
      destinationimg:[`https://talkingrockaz.com/wp-content/uploads/sites/3/2018/06/122217_GurlyStreet_Sunrise_2957-1.jpg`,'../../../assets/img for home/imgfirstrow2.png',`https://www.meganstarr.com/wp-content/uploads/2021/02/Fall-Day-In-Prescott-Things-to-do-in-Prescott-Arizona.jpg`],

    }
    ,
    {
    
  id:2,
  destination:'Fort Mayers',
  place:' Florida, USA',
  rate:4,
  describtion:`Fort Myers (or Ft. Myers) is a city in and the county seat[6] and commercial center of Lee County, Florida, United States. The Census Bureau's Population Estimates Program calculated that the city's population was 92,245 in 2021, ranking the city the 370th-most-populous in the country.[4] Together with the larger and more residential city of Cape Coral, the smaller cities of Fort Myers Beach, Sanibel, and Bonita Springs, the village of Estero, and the unincorporated districts of Lehigh Acres and North Fort Myers, it anchors a metropolitan statistical area (MSA) which comprises Lee County and has a population of 787,976 as of 2021.`,
      hotelNames:['Marriott Sanibel Harbour','Crowne Plaza Fort Myers','La Quinta Inn & Suites'],
      hotelimg:['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/10/38/fb/exterior.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0f/0f/9a/swimming-pool.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/6a/74/e3/exterior-day.jpg?w=1100&h=-1&s=1'],
      hotelinfo:[`Ft. Myers Hotel Near JetBlue Park & Downtown Crowne Plaza® Fort Myers At Bell Tower Shops offers an energizing lifestyle experience for business and leisure travelers on the Florida Gulf Coast. Our Fort Myers hotel lets you flow between work and play, from our outdoor pool to meetings. Plan inspiring meetings and your dream wedding in our elegant event spaces. Enjoy American fare and brews at Shoeless Joe's Sports Café and relax in our stylish guest rooms.​Discover Fort Myers. Walk to the boutiques and delectable restaurants at Bell Tower Shops. Head to downtown Fort Myers River District for great shopping and dining options, or spend a fun day at`,`Ft. Myers Hotel Near JetBlue Park & Downtown​Crowne Plaza® Fort Myers At Bell Tower Shops offers an energizing lifestyle experience for business and leisure travelers on the Florida Gulf Coast. Our Fort Myers hotel lets you flow between work and play, from our outdoor pool to meetings. Plan inspiring meetings and your dream wedding in our elegant event spaces. Enjoy American fare and brews at Shoeless Joe's Sports Café and relax in our stylish guest rooms.​Discover Fort Myers. Walk to the boutiques and delectable restaurants at Bell Tower Shops. Head to downtown Fort Myers River District for great shopping and dining options, or spend a fun day at`,'The Newly Renovated La Quinta Inn & Suites Sanibel-Gateway offers spacious rooms, quality accommodations and friendly service all in a casual relaxed atmosphere. We are located minutes away from John Morris Beach, Sanibel and Captiva islands, Fort Myers Beach and Lovers Key Park. There are lots of activities to keep you busy, from deep sea fishing, boat and jet ski rentals, kayaking, dining, mini-golf and more. There is plenty of shopping nearby, including Tanger outlet mall just a couple blocks away for those moments you want to get away from the beach.'],
      destinationimg:['https://imageio.forbes.com/specials-images/imageserve/6089efc64036bf513ef583aa/Ft-Myers---Caloosahatchee-River-Aerial--FL/0x0.jpg?format=jpg&crop=941,529,x56,y0,safe&width=960','../../../assets/img for home/imgfirstrow3.png','https://media.timeout.com/images/105256372/750/422/image.jpg'],
     }
   ,
   {
    
   
  id:3,
  destination:'Tucson',
  place:' Arizona, USA',
  rate:3,
  describtion:`Tucson (tusɒn, tusɒn/; TOO-saun; Spanish: Tucson, O'odham: Cuk-Ṣon) is a city in and the county seat of Pima County, Arizona, United States,[5] and is home to the University of Arizona. It is the second-largest city in Arizona behind Phoenix, with a population of 542,629 in the 2020 United States census,[6] while the population of the entire Tucson metropolitan statistical area (MSA) is 1,043,433.[7] The Tucson MSA forms part of the larger Tucson-Nogales combined statistical area. Both Tucson and Phoenix anchor the Arizona Sun Corridor. The city is 108 miles (174 km) southeast of Phoenix and 60 mi (97 km) north of the United States–Mexico border.[5] Tucson is the 34th-largest city and the 53rd-largest metropolitan area in the United States (2014).`,
        hotelNames:['McCoy','Loews Ventana Canyon Resort','Hacienda Del Sol Guest'],
        hotelimg:['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ba/a8/fa/hotel-mccoy.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/26/2f/80/loews-ventana-canyon.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/74/28/27/exterior-view.jpg?w=1100&h=-1&s=1'],
        hotelinfo:[`Forget surprise hidden fees, complicated parking maps & lugging your stuff around never-ending hallways. At Hotel McCoy, the living is easy. Drive right up to your boldly numbered front door. Wood ceilings, exposed beams & brick are original, walls finished in hand-skimmed plaster, & the aluminum backed art is licensed from prominent Tucson mid-century artist, Andrew Burgess. Retro inspired rooms include a fridge, the McCoy Must See Guidebook, & time period reading material. When you’re taking a break from exploring the city, we offer a ton of channels on 55-inch Smart Roku HDTV’s, hard-wired with FAST internet to stream your content. Relax outside in front of your room, or fall asleep on a green tea memory foam mattress, organic sheets & an assortment of pillows both fluffy and firm. And, since we’re in the desert, of course we have amazing A/C.
        Read more`,`Tucson's spectacular 'Ventana' - or 'Window' - to the Soul of the Sonoran desert is Loews Ventana Canyon Resort. Situated on 100 acres in the lush Sonoran Desert, indulge in our nature lover’s paradise. Discover a magical perspective nestled into Tucson's Catalina Mountains, where this stunning natural retreat offers a variety of activities and signature services to relax, energize and inspire guests. Our playground of visitor delights includes: two Tom Fazio designed PGA golf courses, the luxurious Lakeside Spa & Tennis Center, two swimming pools, canyon hiking; an 80-foot natural waterfall, nearby riding & cycling trails, and more.`,`Experience resort luxury with authentic, southwestern ambiance in Tucson, Arizona. Discover the romantic and vintage style of Hacienda Del Sol Guest Ranch Resort. Rich in Tucson history, the resort resides in the foothills of the Santa Catalina Mountains on 34 acres of natural desert landscape. Botanical gardens envelop the resort's private casitas, guest rooms and suites. Authentic adobe structures and hand-carved, wood-beamed ceilings circa 1929 are just a few of the preserved details amidst modern day amenities.`],
        destinationimg:['https://cdn.britannica.com/35/191335-050-8306459F/Tucson-Arizona.jpg','https://i.natgeofe.com/n/1f0cb1d7-fb92-4264-a097-5e14d4375df4/st-augustine-cathedral-tucson-arizona.jpg','../../../assets/img for home/imgfirstrow4.png'],
    }
     ,
    {
      id:4,
      destination:'St. Joseph',
      place:' Michigan, USA',
      rate:3,
      describtion:`St. Joseph, colloquially known as St. Joe, is a city and the county seat of Berrien County, Michigan. It was incorporated as a village in 1834 and as a city in 1891.[4] As of the 2010 census, the city population was 8,365. It lies on the shore of Lake Michigan, at the mouth of the St. Joseph River, about 90 miles (140 km) east-northeast of Chicago.[5] It is home of the American Society of Agricultural and Biological Engineers.`,
          hotelNames:['Boulevard Inn','South Cliff Inn','Harbor Shores Resort'],
          hotelimg:['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/b8/90/28/boulevard-inn.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/9d/43/d7/south-cliff-inn.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/95/2f/97/docks-hotel.jpg?w=1100&h=-1&s=1'],
          hotelinfo:[`We invite you to relax in our newly remodeled all-suite accommodations at The Boulevard Inn, ideally nestled atop the bluff overlooking Lake Michigan. Allow our courteous staff to anticipate your needs and exceed your expectations! Quaint shops, gorgeous beaches, and an abundance of dining options are located just a short walk from our hotel in St. Joseph, Michigan. While you're here, delight in lunch, dinner or cocktails served in the area’s most highly regarded restaurant. Our signature style takes advantage of local, fresh, seasonal ingredients simply and elegantly prepared.`,'Escape to the shores of Lake Michigan in the quaint beach resort town of Saint Joseph, Michigan. Be our guest in the newly renovated South Cliff Inn with a coastal vibe ready for relaxation. A seven unit Bed & Breakfast with a huge perennial garden situated on the cliffs overlooking Lake Michigan with sweeping views and breathtaking sunsets. This award-winning inn offers homemade breakfast and celebratory happy hours daily for their guest enjoyment. Come see us soon for top-notch hospitality with a tropical flair!',`The Inn at Harbor Shores opened in May 2014 and is Southwest Michigan's only AAA 4 Diamond Resort and most exciting venue to stay, play, retreat, and eat. Situated on a harbor just 1/4 mile to Lake Michigan, The Inn at Harbor Shores features a marina, waterfront restaurant called Plank's Tavern, dockside bar, full service spa, Rise & Vine- a coffee shop & wine bar, area shuttle, meeting & special event space, a line up of entertainment and events, 12 miles of walking trails, water sports rentals with launch, bicycle rental, beaches and shops within a 5 minute drive, and championship `],
          destinationimg:['https://mymichiganbeach.com/wp-content/uploads/2022/02/st-joseph-michigan-pier.jpg','https://mediaim.expedia.com/destination/1/de70da9ad9557d5fea2cde73db84feb0.jpg','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/f8/53/0c/st-joseph-lighthouses.jpg?w=500&h=300&s=1'],
    }
       ,
      
       {
        id:5,
        destination:'madrid',
        place:'spain',
        rate:5,
        describtion:`Madrid (/mədrid/ mə-DRID, Spanish: [maðɾið])[n. 1] is the capital and most populous city of Spain. The city has almost 3.6 million[7] inhabitants and a metropolitan area population of approximately 6.7 million. It is the second-largest city in the European Union (EU), and its monocentric metropolitan area is the second-largest in the EU.[8][9][10] The municipality covers 604.3 km2 (233.3 sq mi) geographical area.`,
        hotelNames:['Palacio de los Duques Gran Melia','Only YOU Boutique','Dear Hotel '],
        hotelimg:['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/d8/52/aa/palacio-de-los-duques.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/52/54/83/only-you-boutique-hotel.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/95/36/dear-hotel.jpg?w=1200&h=-1&s=1'],
        hotelinfo:['Located in the privileged Habsburg district next to The Royal Palace, The Opera House and The Cathedral, Palacio de los Duques Gran Meliá - The Leading hotel of the World is a luxury urban resort offering 160 spacious rooms, many of them specially designed for families and 20 luxurious suites. This beautiful hotel, completely inspired on Velazquez’s master piece "Las Meninas", combines two historic buildings updated to an avant-garde style ( a 13th century convent and a 19th century Palace of Dukes of Granada de Ega ). The magnificent outdoor Patio of over 1000sqm is a lush green scenery with a peaceful atmosphere, the perfect spot to','Expansive plazas, local and foreign crowds, street performers, colorful lights, window shopping, restaurant signs promising the best paella, ham, and churros con chocolate- this is downtown Madrid, a collection of plazas interconnected by a network of side streets.',`Welcome to Dear hotel,the new design boutique hotel in Madrid’s downtown,with astonishing views over Gran Via and Plaza de Espana.At floor 14th,Nice to meet you Restaurant&Lounge features a panoramic terrace,360º views and a sky pool.Contemporary cuisine in a cosmopolitan and relaxed ambience,cocktails and DJ music.
        Located in Gran Via 80, 10 min walk to Palacio Real and 15 to Plaza Mayor or Puerta del Sol`],
        destinationimg:['https://c.ndtvimg.com/2022-05/arm6bfv_madrid_625x300_30_May_22.jpg?im=Resize=(1200,757)','https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/vistas-madrid-s354842273.jpg_1224728085.jpg','https://handluggageonly.co.uk/wp-content/uploads/2016/04/HandLuggageOnly-12.jpg'],
  
      }
      ,
      {
        id:6,
  destination:'paris',
  place:'france',
  rate:3,
  describtion:`France (French: [fʁs] Listen), officially the French Republic (French: République française [ʁepyblik fʁɑ̃sɛz]),[14] is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans,[XII] giving it one of the largest discontiguous exclusive economic zones in the world. Its metropolitan area extends from the Rhine to the Atlantic Ocean and from the Mediterranean Sea to the English Channel and the North Sea; overseas territories include French Guiana in South America, Saint Pierre and Miquelon in the North Atlantic, the French West Indies, and many islands in Oceania and the Indian Ocean. Its eighteen integral regions (five of which are overseas) span a combined area of 643,801 km2 (248,573 sq mi) and had a total population of over 68 million as of January 2023.[5][8] France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre; other major urban areas include Marseille, Lyon, Toulouse, Lille, Bordeaux, Strasbourg and Nice.`,
  hotelNames:['Astoria','Malte - Astotel','Odessa Montparnasse'],
  hotelimg:['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/35/41/ad/hotel-astoria-opera-astotel.jpg?w=1100&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/6d/cb/9c/facade.jpg?w=1200&h=-1&s=1','https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/3a/63/0d/chambre-classique.jpg?w=1200&h=-1&s=1'],
  hotelinfo:['At the heart of a quiet street between Opera and major department stores , a short walk from the Gare Saint Lazare, close to Rome station, the Astoria Opera Hotel sits in a central location with direct access to the Champs Elysees - within 10 minutes via Metro, or to the picturesque neighborhood of Montmartre. Our professional and caring staff will welcome you in our cozy lobby, fitted with comfortable leather sofas. Our 86 rooms are decorated with warm colours and contemporary furnishings. They are all carpeted, equipped with satellite TV and feature a private bathroom with hairdryer.','Located in the 2nd district next to the Stock Exchange, the Louvre and Place des Victoires, Hotel Malta provides a superb location for a memorable stay. Whether you want to shop in the heart of the department store neighbourhood or visit one of the main business centres of Paris, Malta Hotel is the place to be. Elegantly concealed behind a facade dating from the seventeenth century, let yourself be seduced by our garden patio, a pleasurable experience on sunny days, our cozy breakfast room, and the relaxing atmosphere of our lobby. After the warm welcome by our professional team, always at your disposal, you will appreciate the comfort of','The Hotel Odessa Montparnasse is an independent family-owned establishment. Our warm team will be glad to welcome you with a smile. The hotel is located in the very center of Paris, in the Montparnasse area, widely known for its typical Parisian atmosphere.'],  
  destinationimg:['https://i.guim.co.uk/img/media/b10ad0643db2bd4848dcac37cb9f7a19971c47a9/0_29_4560_2736/master/4560.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d368155f5688f58f0cea6ca3ca5d851b','https://i.natgeofe.com/k/04665f4a-3f8d-4b62-8ca3-09ce7dfc5a20/france-eiffel-tower_4x3.jpg','https://freedomhouse.org/sites/default/files/2019-10/France_notre_dame_shutterstock_113889787.jpg']
  
      }
      ,
      {
        id:7,
        destination:'london',
        place:'Great Britan',
        rate:4,
        describtion:`London (/ˈlʌndən/) is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.[1][note 1] It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.[9] The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries.[note 2][10] The City of Westminster, to the west of the City of London, has for centuries hosted the national government and parliament. Since the 19th century,[11] the name "London" has also referred to the metropolis around this core, historically split between the counties of Middlesex, Essex, Surrey, Kent, and Hertfordshire,[12] which since 1965 has largely comprised Greater London,[13] which is governed by 33 local authorities and the Greater London Authority`,
        hotelNames:['The Chesterfield Mayfair','Radisson Blu Edwardian ','Park Plaza Westminster'],
        hotelimg:['https://cf.bstatic.com/xdata/images/hotel/max1280x900/149243357.jpg?k=3ccbb4ebb3913485706ee293d786825aa45550421d631c919d372c306129f0e3&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/362535382.jpg?k=ba0fcfeaa5294fce10b7d020b40434292c8211b01cffbcde4a0af1ae50281615&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/329065860.jpg?k=3f1ece75b2b3e5f3199ef79e4786dc55ab2a9cc2e3ee444f9d5b9806551dc464&o=&hp=1'],
        hotelinfo:[`You're eligible for a Genius discount at The Chesterfield Mayfair! To save at this property, all you have to do is sign in.
        This 4-star luxury hotel is in London's Mayfair, just off Berkeley Square. Oxford Street is half a kilometer away. The hotel has complimentary Wi-Fi, air-conditioned rooms and an award-winning restaurant.
        The Chesterfield Mayfair is between Hyde Park and Green Park. Buckingham Palace is half a kilometer away. Green Park London Underground (subway) Station and the shops of Bond Street are just 293 m from the hotel.
        The Chesterfield mixes traditional British charm with modern comforts. The rooms have cable TV, complimentary bottled mineral water and a choice of bed linens and pillows for extra comfort.
        Guests can choose business-friendly rooms with more desk space, luxury office chairs and business extras. The leisure rooms have more storage space and seating areas.
        Butler's Restaurant has an AA Rosette award. Traditional Afternoon Tea is served daily and has won the Tea Guild Award of Excellence for the last three years. The Terrace Bar has a large whiskey selection and there is also 24-hour room service.`,`You're eligible for a Genius discount at Radisson Blu Edwardian Vanderbilt Hotel, London! To save at this property, all you have to do is sign in.
        The Radisson Blu Edwardian, Vanderbilt is a 19th century Grade II listed building combining historical features and modern style. It is located less than five minutes’ walk from the Natural History Museum and the Science Museum. Free high-speed WiFi is available throughout.
        All rooms offer 350 thread count Egyptian cotton bedding, Vi-Spring beds, down pillows, Italian marble bathrooms, in-room movie library, complimentary bottled water, fridge and online concierge. `,`You're eligible for a Genius discount at Park Plaza Westminster Bridge London! To save at this property, all you have to do is sign in
        Located on the South Bank of the Thames, Park Plaza Westminster Bridge London is set opposite the Houses of Parliament and Big Ben, on the South Bank. It is less than a 5-minute walk from the London Eye, the Aquarium, restaurants and theaters.
        There is a fully equipped 24-hour gym, a 14 m swimming pool with a sauna and steam room.
        The large, contemporary air-conditioned rooms have modern amenities, including a flat-screen TV, large desk, mini-bar and safe.
        The hotel features the modern, award-winning Brasserie Joël and Ichi Sushi & Sashimi, which specializes in sushi and sashimi. The 1WB Lounge & Patisserie serves traditional afternoon tea and all-day tapas. The illy Caffè serves Italian coffee and pastries. Primo Bar offers live evening entertainment every night.
        The hotel is within a short walk from Westminster and Waterloo tube stations.`],
        destinationimg:['https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/London_Big_Ben_Phone_box.jpg/640px-London_Big_Ben_Phone_box.jpg','https://i2-prod.mirror.co.uk/incoming/article28871029.ece/ALTERNATES/s615b/1_An-elevated-view-of-the-London-skyline-looking-east-to-westjpgLondon-at-sunrise.jpg','https://www.travelandleisure.com/thmb/9PKMMxIL9W7tzjJiyIrFJY5rwNI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/london-uk-townhomes-lead-LONDONTG0521-81fb4f991a1e4d0d9153d89444838094.jpg'],
}
  

        ,
      {
        id:8,
        destination:'batumi',
        place:'Georgia',
        rate:5,
         describtion:`Planning a vacation in the Georgian town, which is often compared to the sun because of its brightness and reigning around the mood, you initially need to assess the breadth of available opportunities. These are:

         The cleanest beaches, fully landscaped for a comfortable pastime. Here you can not only sunbathe, but also engage in diving, windsurfing and other water sports. 
         cozy restaurants and cafes, where they will gladly offer a wide variety of local and other variants of cuisine. 
         Numerous entertainment for all tastes in the form of entertainment centers, parks, attractions and other exciting activities. discos, nightclubs and bars, where young people happily spend their free time;
         Batumi has a lot to see and the sights, so it will be interesting for the lovers of history, culture and religion.`,
        hotelNames:['Sheraton Batumi ','Wyndham Batumi','ORBI CITY '],
        hotelimg:['https://cf.bstatic.com/xdata/images/hotel/max1280x900/112609555.jpg?k=cc044711d7c47211c663074eea20f1cf898283b5a9e3213591867f8e29116647&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/96225136.jpg?k=d610d13891585983c6973c60fb1657646468d31c202c2f732a64f143e422e12d&o=&hp=1','https://cf.bstatic.com/xdata/images/hotel/max1280x900/361571068.jpg?k=91a2d34371076690fd303a59923c4af5e8583db0d5446534b82e11533a8bcc3a&o=&hp=1'],
        hotelinfo:[`This 5-star hotel is located in Batumi city Center, 200 m from the Black Sea Coast. Sheraton Batumi Hotel offers a spa area with saunas, Turkish Hamam, Sheraton Fitness Center, and indoor and seasonal outdoor swimming pools.
        Free WiFi and a flat-screen TV are included in all rooms at the Sheraton Batumi Hotel. The spacious rooms also feature a private bathroom with a bathtub or shower.
        On the 20th floor of the hotel guests await breathtaking views from 360 Sky Bar and Restaurant - the only Hotel Bar and Restaurant in Batumi with 360-degree panoramas. The restaurant offers perfectly crafted Cocktails, Premium Georgian Wines, and exquisite bites from the lounge or extensive grill menu. During the summer season, guests can enjoy fresh juices, refreshing drinks, and a variety of dishes from the poolside menu in Jasmine Lounge Bar located in the middle of Batumi Boulevard adjacent to the outdoor swimming pool of the Sheraton Batumi Hotel.
        Sheraton Batumi is 300 m from historical Batumi Boulevard, within walking distance to the old city and the principal city attractions including Ali and Nino status, Batumi Dolphinarium, Europe Square, and Batumi State Theater.
        The 24-hour reception can arrange a transportation service to Batumi Harbor.
        `,`You're eligible for a Genius discount at Wyndham Batumi! To save at this property, all you have to do is sign in.
        Featuring luxurious interiors, Wyndham Batumi is a few minutes' walk from Iveria Beach. Offering a swimming pool and spa, this property has a sea view as well as an on-site casino. Free WiFi and private parking are available.
        Classically decorated with glittering furnishings, sound-proofed rooms come with hardwood floors and city view. Along with air conditioning, rooms are fitted with a flat-screen TV with satellite channels and mini-bar. There is an electric kettle with tea and coffee setup in each room. Rooms feature private bathroom with complimentary toiletries, bathrobe and slippers. Certain units include a seating area.
        Guests can enjoy a drink at the bar. There is an à la carte restaurant where special diet menus are available on request.`,`You're eligible for a Genius discount at ORBI CITY Hotel Sea View! To save at this property, all you have to do is sign in.

        Set 601 m from Batumi Beach and 2 mi from Ali and Nino Monument, Бутик-отель Loveaparto in Batumi offers air-conditioned accommodations with views of the city and free WiFi.
        The apartment provides guests with a balcony, sea views, a seating area, satellite flat-screen TV, a fully equipped kitchen with a fridge and a stovetop, and a private bathroom with shower and a hairdryer.
        
        If you would like to discover the area, hiking and cycling are possible in the surroundings.
        
        Petra Fortress is 16 mi from Бутик-отель Loveaparto, while Batumi Archaeological Museum is 1.1 mi away. The nearest airport is Batumi International, 2.5 mi from the accommodations, and the property offers a paid airport shuttle service.`],
        destinationimg:['https://cdn.georgiantravelguide.com/storage/thumbnails/dji-0470-2.jpg',`https://mbg.ge/uploads/locblogs/large/dd791631849916123edc5e7bf31ed4fe.jpg`,`https://gobatumi.com/file-manager/files/shares/NEWS/batumi4.jpg`],

      }
  ]
  index:number=0;
  id=-1;
  active: string
  ratemas='<img src="../../../assets/icons/Vectorstar.png" alt="star">'
  constructor(private route: ActivatedRoute){
    route.url.forEach((value)=>{
    this.id=Number(value[1].path);

    })
    this.active=this.information[this.id].destinationimg[0]
    this.RATE()
  }
count=document.querySelector('.raterow')

RATE(){
for (let i = 0; i < this.information[this.id].rate-1; i++) {
  this.ratemas+='<img src="../../../assets/icons/Vectorstar.png" alt="star">'
}

}

click(j: number){
 this.active=this.information[this.id].hotelimg[j]
this.index=j
}
clickp(j: string | number){
  this.active=this.information[this.id].destinationimg[j]

}  
}
