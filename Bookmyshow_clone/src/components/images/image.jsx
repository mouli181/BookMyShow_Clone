import b1 from "../../assests/b1.avif";
import b2 from "../../assests/b2.avif";
import b3 from "../../assests/b3.avif";

import R1 from "../../assests/Recommended/R1.avif";
import R2 from "../../assests/Recommended/R2.avif";
import R3 from "../../assests/Recommended/R3.avif";
import R4 from "../../assests/Recommended/R4.avif";
import R5 from "../../assests/Recommended/R5.avif";

import m1 from "../../assests/Music/m1.avif";
import m2 from "../../assests/Music/m2.avif";
import m3 from "../../assests/Music/m3.avif";
import m4 from "../../assests/Music/m4.avif";
import m5 from "../../assests/Music/m5.avif";

import eve1 from "../../assests/Events/eve1.avif";
import eve2 from "../../assests/Events/eve2.avif";
import eve3 from "../../assests/Events/eve3.avif";
import eve4 from "../../assests/Events/eve4.avif";
import eve5 from "../../assests/Events/eve5.avif";

import p1 from "../../assests/Premieres/p1.avif";
import p2 from "../../assests/Premieres/p2.avif";
import p3 from "../../assests/Premieres/p3.avif";
import p4 from "../../assests/Premieres/p4.avif";
import p5 from "../../assests/Premieres/p5.avif";

import cast1 from "../../assests/cast/cast1.avif";
import cast2 from "../../assests/cast/cast2.avif";
import cast3 from "../../assests/cast/cast3.avif";
import cast4 from "../../assests/cast/cast4.avif";
import cast5 from "../../assests/cast/cast5.avif";
import cast6 from "../../assests/cast/cast6.avif";

import crew1 from "../../assests/crew/crew1.avif";
import crew2 from "../../assests/crew/crew2.avif";
import crew3 from "../../assests/crew/crew3.avif";
import crew4 from "../../assests/crew/crew4.avif";
import crew5 from "../../assests/crew/crew5.avif";
import crew6 from "../../assests/crew/crew6.avif";

import u1 from "../../assests/you/u1.avif";
import u2 from "../../assests/you/u2.avif";
import u3 from "../../assests/you/u3.avif";
import u4 from "../../assests/you/u4.avif";

import D1 from "../../assests/D1.avif"


const cast_images = [
  
  {
    image: cast2,
    name: "Kokila Bohan",
    genera: "Actor"
  },
  {
    image: cast3,
    name: "Yogi Babu",
    genera: "Actor"
  },
  {
    image: cast4,
    name: "Prashanth Thiagarajan",
    genera: "Actor"
  },
  {
    image: cast5,
    name: "Prabhu Deva",
    genera: "Actor"
  },
  {
    image: cast6,
    name: "Vijay",
    genera: "Actor"
  },
  {
    image: cast1,
    name: "Jayaram Subramaniam",
    genera: "Actor"
  },
];

const crew_images = [
  
  {
    image: crew1,
    name: "Venkat Prabhu",
    genera: "Director,Writer,Screenplay"
  },
  {
    image: crew2,
    name: "Kalpathi S Aghoram",
    genera: "Producer"
  },
  {
    image: crew3,
    name: "Kalpathi S Ganesh",
    genera: "Producer"
  },
  {
    image: crew4,
    name: "Kalpathi S Suresh",
    genera: "Producer"
  },
  {
    image: crew5,
    name: "Yuvan Shanker Raja",
    genera: "Musician"
  },
  {
    image: crew6,
    name: "Raju Sundaram",
    genera: "Choreographer"
  },
];




const book_images = [b1, b2, b3];
const recommended_images = [
  {
    image: R1,
    name: "The Greatest of All Time",
    genera: "Action/Drama/Thriller",
  },
  {
    image: R2,
    name: "Vaazhai",
    genera: "Action/Drama/Thriller",
  },
  {
    image: R3,
    name: "Joker",
    genera: "Action/Drama/Thriller",
  },
  {
    image: R4,
    name: "Surya's Saturday",
    genera: "Action/Drama/Thriller",
  },
  {
    image: R5,
    name: "Demonty Colony 2",
    genera: "Action/Drama/Thriller",
  },
];

const music_images = [
  {
    image: m1,
    name: "Yuvan Shankar Raaja - The Goat Live In Concert",
    genera: "Venue To Be Announced : Coimbatore Concerts",
  },
  {
    image: m2,
    name: "Lollapalooza India 2025",
    genera: "Mumbai Concerts",
  },
  {
    image: m3,
    name: "King Of Kings 2024",
    genera: "Hindusthan College Of Arts And Science Auditorium concerts",
  },
  {
    image: m4,
    name: "Bandland 2024",
    genera: "Nice Grounds,BIEC:Bengaluru Concerts",
  },
  {
    image: m5,
    name: "Shillong Cherry Blossom Festival 2024",
    genera: "RBDSA Sports Complex:Shillong Concerts",
  },
];

const trends =[
  {
    name: "Lubber Pandhu",
    genera: "Movies"
  },
  {
    name: "Meiyazhagan",
    genera: "Movies"
  },
  {
    name: "The Greatest of All Time",
    genera: "Movies"
  },
  {
    name: "Thalapathy is the G.O.A.T",
    genera: "Movies"
  },
  {
    name: "Devara-Part 1",
    genera: "Movies"
  },
  {
    name: "Vettaiyan",
    genera: "Movies"
  },
  {
    name: "A.R.M",
    genera: "Movies"
  },
  {
    name: "Amaran",
    genera: "Movies"
  },
  {
    name: "Nandhan",
    genera: "Movies"
  },
  {
    name: "Vaazhai",
    genera: "Movies"
  },
]

const events_images = [eve1, eve2, eve3, eve4, eve5];
const entertainment = [D1];
const premieres_images = [p1,p2,p3,p4,p5]
const you_images = [u1,u2,u3,u4]

export { book_images,crew_images, events_images, recommended_images,music_images,premieres_images,trends,entertainment,cast_images,you_images };
