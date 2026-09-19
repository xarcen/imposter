// Wortlisten für das Imposter-Spiel
const CATEGORIES = [
  { id: "essen", name: "Essen & Trinken", emoji: "🍕",
    hints: ["man kann es kaufen","es hat einen Geschmack","nicht jeder mag es","kommt in einer Küche vor","man gibt Geld dafür aus","es verschwindet wieder"], words: [
    "Pizza","Spaghetti","Döner","Sushi","Raclette","Fondue","Hamburger","Pommes","Schokolade","Glace",
    "Popcorn","Kaugummi","Brot","Käse","Butter","Spiegelei","Rührei","Müesli","Joghurt","Apfel",
    "Banane","Wassermelone","Erdbeere","Zitrone","Karotte","Kartoffel","Zwiebel","Knoblauch","Chili","Salat",
    "Suppe","Lasagne","Kebab","Croissant","Donut","Cupcake","Kuchen","Guetzli","Chips","Salzstangen",
    "Kaffee","Tee","Cola","Energydrink","Milchshake","Bier","Wein","Mineralwasser","Smoothie","Honig"
  ]},
  { id: "tiere", name: "Tiere", emoji: "🐘",
    hints: ["es lebt","es kann sich bewegen","es gab das schon vor uns","manche haben Angst davor","man kann es anschauen","es braucht Platz"], words: [
    "Hund","Katze","Pferd","Kuh","Schaf","Ziege","Schwein","Huhn","Ente","Gans",
    "Elefant","Giraffe","Löwe","Tiger","Bär","Wolf","Fuchs","Hase","Igel","Eichhörnchen",
    "Maus","Ratte","Hamster","Meerschweinchen","Papagei","Pinguin","Adler","Eule","Storch","Flamingo",
    "Hai","Delfin","Wal","Krake","Qualle","Schildkröte","Krokodil","Schlange","Frosch","Spinne",
    "Biene","Ameise","Schmetterling","Marienkäfer","Mücke","Fledermaus","Kamel","Faultier","Koala","Panda"
  ]},
  { id: "sport", name: "Sport", emoji: "⚽",
    hints: ["man kommt dabei ins Schwitzen","es braucht Übung","manche machen es am Wochenende","man kann darin besser werden","es gibt Regeln dafür","hat mit Bewegung zu tun"], words: [
    "Fussball","Basketball","Handball","Volleyball","Tennis","Tischtennis","Badminton","Golf","Unihockey","Eishockey",
    "Schwimmen","Tauchen","Surfen","Segeln","Rudern","Klettern","Bouldern","Wandern","Joggen","Marathon",
    "Velofahren","Mountainbike","Skifahren","Snowboarden","Schlittschuhlaufen","Langlauf","Turnen","Kunstturnen","Ballett","Tanzen",
    "Boxen","Judo","Karate","Ringen","Fechten","Bogenschiessen","Reiten","Formel 1","Motocross","Skateboard",
    "Yoga","Fitnessstudio","Liegestütze","Hochsprung","Weitsprung","Speerwurf","Kugelstossen","Darts","Bowling","Billard"
  ]},
  { id: "filme", name: "Filme & Serien", emoji: "🎬",
    hints: ["man kennt es vom Bildschirm","viele kennen es","darüber redet man mit Kollegen","es gibt Fans davon","hat mit Unterhaltung zu tun","irgendwo läuft es gerade"], words: [
    "Harry Potter","Herr der Ringe","Star Wars","Avatar","Titanic","Jurassic Park","Der Pate","Matrix","Inception","Interstellar",
    "Fluch der Karibik","Findet Nemo","König der Löwen","Shrek","Die Eiskönigin","Toy Story","Minions","Spider-Man","Batman","Iron Man",
    "Avengers","Deadpool","Joker","James Bond","Fast and Furious","Mission Impossible","Rocky","Terminator","Alien","Ghostbusters",
    "Breaking Bad","Stranger Things","Game of Thrones","The Office","Friends","How I Met Your Mother","Squid Game","Wednesday","Haus des Geldes","Dark",
    "Netflix","Kino","Popcorn","Filmmusik","Regisseur","Oscar","Trailer","Untertitel","Serienfinale","Cliffhanger"
  ]},
  { id: "orte", name: "Länder & Städte", emoji: "🌍",
    hints: ["es steht auf einer Landkarte","dort sind Menschen","es hat ein Wetter","man braucht eine Reise dahin","manche waren schon dort","man kann es googeln"], words: [
    "Schweiz","Deutschland","Österreich","Frankreich","Italien","Spanien","Portugal","England","Irland","Norwegen",
    "Schweden","Island","Polen","Griechenland","Türkei","Ägypten","Marokko","Südafrika","Brasilien","Argentinien",
    "USA","Kanada","Mexiko","Japan","China","Indien","Thailand","Australien","Neuseeland","Russland",
    "Zürich","Bern","Basel","Genf","Luzern","St. Gallen","Lugano","Berlin","München","Wien",
    "Paris","London","Rom","Madrid","Barcelona","Amsterdam","Prag","New York","Tokio","Dubai"
  ]},
  { id: "berufe", name: "Berufe", emoji: "👷",
    hints: ["man verdient damit Geld","es braucht eine Ausbildung","es hat mit Menschen zu tun","es kommt in Stelleninseraten vor","manche träumen davon","es füllt einen Arbeitstag"], words: [
    "Informatiker","Lehrerin","Arzt","Zahnarzt","Pflegefachfrau","Apotheker","Polizist","Feuerwehrmann","Sanitäter","Anwältin",
    "Richter","Bankangestellter","Buchhalter","Verkäuferin","Kassierer","Koch","Bäcker","Metzger","Kellnerin","Barkeeper",
    "Landwirt","Gärtner","Förster","Schreiner","Maurer","Elektriker","Sanitärinstallateur","Maler","Mechaniker","Ingenieurin",
    "Architekt","Pilot","Flight Attendant","Lokführer","Buschauffeur","Taxifahrer","Pöstler","Kurier","Journalistin","Fotograf",
    "Grafikerin","Musiker","Schauspielerin","Influencer","Youtuber","Coiffeuse","Kosmetikerin","Fitnesstrainer","Tierärztin","Astronaut"
  ]},
  { id: "schule", name: "Schule & Büro", emoji: "🏫",
    hints: ["es hat mit Lernen oder Arbeiten zu tun","nicht alle finden es toll","es gehört zum Alltag von vielen","man kennt es von früher","es kommt in einem Gebäude vor","es gehört zu einem Schultag"], words: [
    "Hausaufgaben","Prüfung","Note","Zeugnis","Pause","Stundenplan","Schulbus","Turnhalle","Mensa","Bibliothek",
    "Klassenzimmer","Wandtafel","Beamer","Pult","Etui","Bleistift","Kugelschreiber","Leuchtstift","Radiergummi","Lineal",
    "Taschenrechner","Zirkel","Heft","Ordner","Schulbuch","Thek","Spickzettel","Gruppenarbeit","Referat","Präsentation",
    "Mathematik","Deutsch","Englisch","Geschichte","Geografie","Physik","Chemie","Biologie","Informatik","Sportunterricht",
    "Lehrling","Berufsschule","Praktikum","Meeting","Deadline","Drucker","Kaffeemaschine","Grossraumbüro","Homeoffice","Lohnabrechnung"
  ]},
  { id: "zuhause", name: "Zuhause & Dinge", emoji: "🏠",
    hints: ["man findet es in einer Wohnung","man benutzt es regelmässig","es steht irgendwo herum","man vermisst es, wenn es fehlt","es gibt das in verschiedenen Grössen","man kann es kaufen"], words: [
    "Sofa","Bett","Kissen","Decke","Tisch","Stuhl","Schrank","Spiegel","Teppich","Vorhang",
    "Lampe","Kerze","Fernseher","Fernbedienung","Kühlschrank","Backofen","Mikrowelle","Geschirrspüler","Waschmaschine","Staubsauger",
    "Bügeleisen","Toaster","Wasserkocher","Bratpfanne","Kochtopf","Messer","Gabel","Löffel","Teller","Tasse",
    "Zahnbürste","Zahnpasta","Shampoo","Seife","Handtuch","Badewanne","Dusche","WC","WC-Papier","Lavabo",
    "Schlüssel","Portemonnaie","Regenschirm","Brille","Armbanduhr","Rucksack","Schere","Klebeband","Schraubenzieher","Leiter"
  ]},
  { id: "musik", name: "Musik", emoji: "🎵",
    hints: ["es hat mit Tönen zu tun","man kann es hören","es hat mit Gefühl zu tun","es hat mit Auftritten zu tun","manche können es, andere nicht","es gibt das laut und leise"], words: [
    "Gitarre","E-Gitarre","Bass","Schlagzeug","Klavier","Flügel","Geige","Cello","Querflöte","Klarinette",
    "Saxofon","Trompete","Posaune","Harfe","Akkordeon","Mundharmonika","Ukulele","Keyboard","Mikrofon","Kopfhörer",
    "Lautsprecher","Plattenspieler","Schallplatte","Playlist","Spotify","Konzert","Festival","Tournee","Bühne","Backstage",
    "Refrain","Strophe","Melodie","Rhythmus","Takt","Notenblatt","Akkord","Chor","Orchester","Dirigent",
    "Rap","Hip-Hop","Pop","Rock","Metal","Jazz","Blues","Techno","Klassik","Volksmusik"
  ]},
  { id: "games", name: "Games & Internet", emoji: "🎮",
    hints: ["es braucht Strom","Jugendliche kennen es","es hat mit einem Bildschirm zu tun","das gibt es noch nicht so lange","es kann süchtig machen","man verliert Zeit damit"], words: [
    "Minecraft","Fortnite","Roblox","Among Us","GTA","FIFA","Call of Duty","Valorant","League of Legends","Counter-Strike",
    "Mario Kart","Zelda","Pokémon","Tetris","Candy Crush","Clash of Clans","Subway Surfers","Die Sims","Animal Crossing","Super Mario",
    "Playstation","Xbox","Nintendo Switch","Gaming-PC","Controller","Joystick","Headset","Grafikkarte","Lag","Respawn",
    "Speicherstand","Achievement","Boss-Kampf","Multiplayer","Streaming","Twitch","Youtube","TikTok","Instagram","Snapchat",
    "WhatsApp","Discord","Meme","Emoji","Hashtag","Passwort","WLAN","Akku leer","Update","Werbung überspringen"
  ]},
  { id: "schweiz", name: "Schweiz", emoji: "🇨🇭",
    hints: ["Touristen mögen es","es passt auf eine Postkarte","Leute aus dem Ausland finden es speziell","es hat mit Heimat zu tun","man sieht es hier oft","darauf sind manche stolz"], words: [
    "Matterhorn","Jungfraujoch","Rigi","Pilatus","Säntis","Rheinfall","Bodensee","Vierwaldstättersee","Genfersee","Aare",
    "Zürich HB","SBB","Postauto","Seilbahn","Skilift","Alp","Sennerei","Kuhglocke","Edelweiss","Alphorn",
    "Schwingen","Hornussen","Jassen","Fasnacht","Sechseläuten","1. August","Höhenfeuer","Bundesrat","Kanton","Gemeinde",
    "Raclette","Fondue","Rösti","Cervelat","Zopf","Birchermüesli","Rivella","Ovomaltine","Toblerone","Schoggi",
    "Sackmesser","Schweizer Uhr","Banktresor","Militärdienst","Lehrstelle","Berufsschule","Migros","Coop","Roger Federer","Wilhelm Tell"
  ]},
  { id: "fahrzeuge", name: "Fahrzeuge & Reisen", emoji: "🚗",
    hints: ["es bringt einen von A nach B","es hat mit unterwegs sein zu tun","es kostet Geld","man braucht es für längere Wege","es braucht einen Weg","manche haben es zuhause"], words: [
    "Auto","Velo","E-Bike","Motorrad","Roller","Trottinett","Skateboard","Bus","Tram","Zug",
    "S-Bahn","Metro","Taxi","Lastwagen","Traktor","Bagger","Kranwagen","Feuerwehrauto","Ambulanz","Polizeiauto",
    "Flugzeug","Helikopter","Heissluftballon","Rakete","Schiff","Fähre","Segelboot","Kanu","U-Boot","Jetski",
    "Koffer","Rucksack","Reisepass","Boardingpass","Flughafen","Bahnhof","Hotel","Camping","Zelt","Wohnwagen",
    "Strand","Ferien","Sonnencreme","Souvenir","Stadtführung","Landkarte","Navi","Stau","Tankstelle","Parkhaus"
  ]},
  { id: "promis", name: "Berühmte Personen", emoji: "⭐",
    hints: ["es geht um einen Menschen","viele kennen den Namen","es steht in Wikipedia","die Person war in den Medien","jemand hat etwas geleistet","es wurde darüber geredet"], words: [
    "Albert Einstein","Isaac Newton","Marie Curie","Leonardo da Vinci","Mozart","Beethoven","Vincent van Gogh","Pablo Picasso","William Shakespeare","Anne Frank",
    "Napoleon","Julius Caesar","Kleopatra","Christoph Kolumbus","Neil Armstrong","Nelson Mandela","Mahatma Gandhi","Martin Luther King","Mutter Teresa","Greta Thunberg",
    "Elon Musk","Bill Gates","Steve Jobs","Mark Zuckerberg","Jeff Bezos","Roger Federer","Lionel Messi","Cristiano Ronaldo","LeBron James","Usain Bolt",
    "Michael Jackson","Elvis Presley","Freddie Mercury","Taylor Swift","Beyoncé","Rihanna","Adele","Ed Sheeran","Eminem","Billie Eilish",
    "Leonardo DiCaprio","Brad Pitt","Angelina Jolie","Tom Cruise","Dwayne Johnson","Will Smith","Emma Watson","Charlie Chaplin","Mr. Bean","Der Papst"
  ]},
  { id: "marken", name: "Marken", emoji: "🏷️",
    hints: ["dahinter steckt eine Firma","man sieht es in der Werbung","es gibt ein Logo dazu","viele besitzen etwas davon","man kann etwas davon kaufen","der Name ist bekannt"], words: [
    "Apple","Samsung","Google","Microsoft","Sony","Nintendo","Tesla","BMW","Mercedes","Audi",
    "VW","Ferrari","Porsche","Toyota","Nike","Adidas","Puma","Zara","H&M","Uniqlo",
    "Gucci","Louis Vuitton","Rolex","Swatch","Victorinox","Lego","Playmobil","Barbie","Ikea","Amazon",
    "Netflix","Spotify","Youtube","TikTok","Instagram","WhatsApp","Coca-Cola","Pepsi","Red Bull","Nestlé",
    "Lindt","Toblerone","McDonald's","Burger King","Starbucks","Migros","Coop","Lidl","Aldi","Denner"
  ]}
];
