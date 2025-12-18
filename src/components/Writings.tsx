import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// Type for a blog post or poem
interface Post {
  id: number;
  title: string;
  date: string;
  type: "writing" | "poem" | "raps" | "song";
  content: string;
}

const BlogPage: React.FC = () => {
  // HIDE NAVBAR & FOOTER ON THIS PAGE
  useEffect(() => {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (nav) nav.style.display = 'none';
    if (header) header.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Show them again when leaving page
    return () => {
      if (nav) nav.style.display = '';
      if (header) header.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  // Example posts IN YOUR SPECIFIED ORDER
  const [posts] = useState<Post[]>([
    {
      id: 5,
      title: "Life",
      date: "2025-09-23",
      type: 'poem',
      content: `Life is a dance stage
you dance and dance on stage until 
you get tired and eventually things stop
like on the stage there's people watching you
analyzing your every step
calculating your inertia
their eyes moving as you legs play around with gravity
they all gravitate towards the left then the right
we here again and they still watching
time goes by, they still watching
that's it feels like being in a room filled with snakes
do I belong in such a room?
How long until the rain stop humming?
It sounds like a church choir
the church bells ring while everyone is watching the 
performance on stage
everything feels staged, even the walk to the cementery
there's gold on the stage, that's what the observer
sees, everyone else has a blindfold on
the sky seems to be opaque-- there's no hope for the those
whose hearts have turnt black due to watching the dance
it goes on and on and one for about a month
no one to ring to not even a tissue in sight
smiles are bright and there's a tide on the side
of the road
outside there's a child abandoned
the outside seems to be a whole new world
it's dark and gloomy, the wind is old
and the sky is red
death lurks in the shadows
the watchers of the dance remain glued to their seats
the dance is never ending but they aren't aware of this
the observer opens the door only to find the child 
laying dead on the street
the child has died of hunger
observer ponders how this happened
since there was a mountain of food inside 
the observer sits next to the child sobbing
like a mother who's lost her child
the observer turns to look behind her
all the observer sees is trees, all of them
silenced by the wind, no stories being told by the red sky
the grass is not greener if anything it's thinner and dead
there's no life around the observer
the observer feels stranded and alone with the dead child
everyone else is still inside watching the ongoing performance, 
the observer tries to go inside to ask for help, everyone else seems 
aloof and unperturbed, perhaps even unconscious of their surrounding
their only focus is the dance on the stage
the observer gets the door shut on her face, 
the observer runs into the deep jungle holding the dead child in their hands
then to the observer's suprise appears a black cat with horns
afraid the observer runs until the observer gets trapped into a muddy ground, only to be pulled down by the force of these muddy waters
the observer drowns alongside the child and everyone is still watching the performer perform
the performer is still just like the ocean
the performers movements are regressive as if the performer is aware of the mist 
the performer continues with the dance only to collapse on stage and die of a mysterious cause
the audience is taken aback but they still remain glued to their chairs watching as the performer decays
this continues for generations
and the sun never steps out of it's shell causing the place to be filled with darkness that eventually engulfs the audience-- everyone dead
not even a sign of life in anyone..... `
    },
    {
      id: 2,
      title: "4:44",
      date: "2025-12-12",
      type: "raps",
      content: `
Time in a capsule 
insulin striking again
people cheatin cause they feel inadequate
lack of self love leading people to chasin validation
such a lack of direction for the youth
guns being used to ease down emotions
cause our boys taught they can't be human
hiding the very thing that makes them human
father telling him to be tough and mother treating him like a soldier
but good soldiers hate war
no one wants to see people die
somehow we live in a society that's race obsessed
some people fighting to be deemed superior cause they have nothing else to be proud of
swear it gets tiring watch all this hypocrisy in the world
when god said "let there be light"
was this the light that was intended
sad to see my people lacking self-love 
trying to find it in the wrong places
cycle never seems to end feel like a reincarnation

hope we all come across the ubermensch 
since we all super, man
only way we can heal is to acknowledge our own faults
lack of empathy has been weaponized by broken people
hurt people disguised as sages preaching bad written eulogies
community died and everything is for the cheeze
but many of us lactose intolerant
before we judge it's important we put ourselves in people's shoes
what's the point of living a life in the spotlight when half of your people ain't got no lightin?
kids starving to death while someone else cruisin' the sea
yet preachers run around speakin of sin
whie driving a benz, congregation starvin'

so hard to not question religion when 
only my people the one's suffering the most
hurt people hurting each other
dear mother, when will it end?
`
    },
    {
      id: 6,
      title: "Chamber of Reflection",
      date: "2025-04-12",
      type: 'song',
      content: ` 

Chase your dream my friend
chase your dream my friend
don't run away, again, 

Sometimes we go over board just to hide
make excuses with our protruding jawlines
hide behind screens watch others create as we deviate
it hurts to feel like a loser
what is a dream to a person who gave up?
As time goes by we learn to let go of our doubts then tell me how come I still hold mine so close?
Chasing all this validation has me in chains
used to pray for better days hope they come sooner
cause this road has been filled with snakes
might call Simon and Suzie to come to the rescue
Miss the time when I used to jam in space crying "I'm Strong"
Now I feel so weak for wanting to give up
Barely have any food for supper 
I just scroll the pain away

Tell me will It ever end?
will it ever end Nana?

chase your dreams my friend (my friend)
chase your dreams my friend

Hurts looking in the mirror and feeling like a failure
comparison stealing all the joy
rejections from applications
and bridges that has failed 
cause the `
    },
    {
      id: 7,
      title: "I WONDER",
      date: "2025-12-16",
      type: "raps",
      content: `I WONDER:

Hello World, this is my first program 
I'm on my periods again, look again
there's blood been spiled like this a war'
How can I chase rainbows when I'm in bed rotting
scrolling the pain away, cause i know I'm so afraid
damn I can't stop, my pain is far superior
my heart is full of fear, your face is on my mind
swear I can't bear this pain no more
Tell me Mr.God, Mr.God can you spare me some time (huuh?)
How come a woman has to sacrifice all the time
all these brothers crying over someone wanting freedom
(bro's a lame)
how can you blame me I watched Naruto and Luffy
they said nothing was impossible, 
so it's improbable that I won't be like them
what does it mean to live if I ain't like Luffy?
A stress free life going on a spree, 
visitin' Switzerland listenin' to the breeze in the Alps

I Wonder if life is worth it
I wonder if life is worth it
I wonder if life is worth it

I fell in love with art and never looked back since
Everybody all around gave up on their dreams
cause they had to pay the bills
everyone wanted to wear grills
but not everyone could afford to chase those dreams
I wonder if dreams are worth it if some people fall short
yeah I can't complain cause I'm blessed
but my people still stressed
been tested for generations
look at the desertations
I'm saying "congratulations"
you really graduated 
Mama and Papa are proud
been told since disney dayz that You'll be loved 
once you win the race
but life was never a race so you stay racing
hoping someone sees your effort
limitations in the mind, 
binding you to a pathetic state of mind
but my friend you really wonder
what it would mean if you chose yourself.
 I wonder if life is worth it'
 if it is will i die being proud of myself?`
    },
    {
      id: 3,
      title: "Dear Nana",
      date: "2025-11-14",
      type: "poem",
      content: `I failed again in school, 
you know they gon judge me by my books
I tried to look for ways just to feel useless again
mom's working hard, barely getting rest
Everyday feels like a test 
just want that money,
so desperate, I wanna change the situation
seeing everyone win 
I swear it just hurts so deep
I hope you can hear my voice all the way from heaven
Daily i pray for a change
but I'm stuck in my ways
same thing everyday
fear keeping me stuck
but can i blame it when I'm the one who gives it power?
I have big dreams,
dreams of going beyond the stars
playing in the pond with Pappi
wherever he went,
i know he left without a sign
I swear i just wanna win
everytime i feel closer
another setback sets me back
how many times will i fail til 
i become even with the travelers 
long life battle with myself
been exiled since the age six
staying hidden in the mountains
not knowing fountains are being built inside
nana was all i had
til she hit the fan
Mother Earth swallowed her whole
with no hesitation
so i ran across the nation
looking for some jubilation
still i found nothing
so much misery in my soul`
    },
    {
      id: 1,
      title: "Pressure",
      date: "2025-12-10",
      type: "writing", 
      content: `Everything that came through you came through me
there was daffodils and evils over lost seas
your heart was often shamed for it's openness
the world ran from vulnerability
in attempts to sneer God away
Everyone's trying to be something they not
cause being yourself gets you crucified'
yet they cry "be different"
make or break situations, 
i seen many get broken by sand
we would have hoped to land'
with some inquisition
i laid my life for you
yet you chose to stand still
and not take action
because your words are louder
your smile hides misery buried deep
for a 100 lifetimes
you never dared to question anything 
yet you go around preaching something
you heard from the mail man
Running into this ark cloud chasing validation
just to be seen for an inch of a mile
they saw you
"so what now"
do we continue to sit in this empty house
or run into the world
and listen to the trees?
There was diseases spread from willingness
your own fears staring at you directly in the mirror
hoping you learn from them
but all we could take was judgement
not lesson from a wise teacher
everyday you hide yourself
a life is lost
Only person who can ever leave you dying
is yourself
a lily-livered lover staring into the sky
seeing reflections of the only thing that ever made sense
somehow you still run,
running from this wild cooperate chase
All you needed was some space to grow
so you dreamt of jamming in space like Armstrong
The fear crept it, life feels miserable 
so you keep telling yourself "I'm strong"
after all that; a bullet went straight to the head
it was all in the mind`
    },
    {
      id: 4,
      title: "Thaba",
      date: "2025-12-09",
      type: "writing",
      content: `
I fell into the mud
it rained and watered on me
the gods had sent rain to clean the mud
this was back when granny lived in a hut
all we had was our hut and prayers
momma played her part when she bought a bed
we had a place we could sleep on
a comfortable rest that had us coughing differently
neighbors watched as we strolled through the gate -
with nothing but one slice of bread
one for the five of us
mother vowed to change the dynamic
like Curry did when he came into the league
We read books and played with hooks
knowing if we took it serious the world -
will dance to our rhythms written in poverty.
she wanted to be a physician
all her sisters got married in that poverty
it was a way to survive
she had no funds to further her studies
so she worked in the fields and put her nose on the grindstone
till one day she stumbled upon a blue gemstone\
She didn't know she found a gem cause she was a gem herself
so she took it home but no one cared to pay attention
cause poverty was the discussion
the only thing worth making an impression for was money
so everything else was suppressed
they all lived like oppressed people --
who could have been suprised in an economy that works on the backs on the colourful but hate their guts?
she knew that the system cared not
so she went on a walk into the mountains with that blue gemstone
came across a man dressed in all white
had a white beard and a black skin
she wasn't aware that they were akin
and he were soon to become her next of kin
she told him about the gemstone
he seemed to be aware of it
he let her know that he was a genie
and he had come to help her win
She was in disbelief so the man made a few magic tricks
See he was what we called a "Sage"
He lived in those rocky mountains
flew her back home without people noticing
no one battered an eye on how she came home from the mountains in perfect condition
usually you'd have some bird faeces on you and some greenery signifying your involvement
with the trees 
she sat for long hours looking into the clear night sky
so she wished upon a star and headed to their one bed
she only shared it with her mother because all her sisters had gotten married and she had no brother
so she sat all night thinking about what the universe could be plotting for her
she dared to not tell her mother for she would think she was bewitched
So the next day came and the sun was as bright as the life of a traveler
she woke up to seeing messages delivered on their gate by a mysterious man
he had news of a new job offer..
she was bewildered and frenetic 
evocative as ever she rushed to show her mother who could not believe it 
the job would pay her 60 pounds per hour 
something they could only dream off
she quickly put on her clothing without even showering and headed to the mountains so she could find her next of kin
All that was visible in those mountains was her glowing skin
the mysterious Sage was nowhere to be found
she felt like waging a war with the world for taking the one person who blessed her 
See everyone in the village cursed the poor 
So she left the mountains as bitter as lemon
and found herself sobbing alone near a trees
little did she know that the sage was with her all along
..... to be continued`
    },
    {
      id: 8,
      title: "Mother",
      date: "2025-12-16",
      type: "poem",
      content: `Mother
My mother is my mother 
My mother is divine 
My mother is a villain 
Pain made my mother 
And my mother made the pain rain on me 
My mother smells of springs, 
My mother sounds like a siren, 
My mother's touch is like sunshine. 
My mother was hurt; 
The hurt turned to be me instead. 
My mother was shunned by the world, 
So she shunned me too. 
My mother was left without love, 
So she left me without love. 
My mother is divine 
And so am I. 
We healed when pain knocked on our doors—
Both of us could not take the heat. 
Together, like matching bands, we walked. 
I resent my mother and I love my mother. 
In our healing did we find a mother, 
The mother loved us and showed us love, 
My mother is my mother, 
And I will always choose her. 
I forgive myself for not seeing the pain she had to succumb to, 
And I forgive her for giving in to that pain. 
Mother, Mother, I love you.`
    },
    {
      id: 9,
      title: "Silly Billy",
      date: "2025-12-18",
      type: "raps",
      content: `I like em regular guys
Playing fortnite all night
We can have fun all night
tell your mom she could trust me right,
I know ama treat your tight
Reese-pect is what i got

remember i was fat, man
Fell in love with a frat boy
Felt so flam boy and- niggas 
tried to step on me
ain't no ant but shout out to ant, man
Two Ronaldo's like I'm sixteen
High teen spirit like Kurt Cobain
If you ain't ride with me since day one 
can't let you inside the house hun
Feeling good i might shoot the public
(Naah naah)
Niggas tryna act too cool
"He gon freeze to death"
selling coke, he gon see the bars
Tell Elon to send him to Mars(tell him)
you ain't the Pope so act right (haha)
(That's right)

I like em regular guys
Playing fortnite all night
just about right my son
We can have fun all night
tell your mom she could trust me right,
I know ama treat your tight 
Reeese-pect is what i got

Shot my shot but he plays in snow
Never seen no snow in my life 
from the south, I Come from  heat 
So high might jump like Bron
Know the south gon stress you foo'
Had enough so let me open up
Watch out he gon' gaslight you
He on a budget but he got some Louis
Sold out he ain't no family guy
Somebody coal train him 
So he can work in them coal mines
Learn to appreciate life mane
This ain't no joke but he Jim Carrey 
Stay laughing sent a spear to his heart
He an Aries so i ain't feel no pain 
(That's rough)

Never mind, he's just an incel
Like Tate? (Oh  yeah)
Ooh ooh`

    }
  ]);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <>
      <div className="min-h-screen text-white p-6" style={{ background: 'transparent' }}>
        {/* Back Button */}
        <motion.a
          href="/portal"
          className="fixed top-6 left-6 z-50 group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-medium">Back to Portal</span>
        </motion.a>

        <div className="max-w-4xl mx-auto pt-20">
          <motion.header 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              My Writings & Poems
            </h1>
            <p className="text-gray-300">
              A collection of thoughts, stories, and verses
            </p>
          </motion.header>

          {/* If a post is selected, show detail view */}
          {selectedPost ? (
            <motion.div 
              className="backdrop-blur-sm border border-gray-300 shadow-xl rounded-2xl p-8"
              style={{ backgroundColor: 'white' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="text-blue-600 hover:text-blue-700 mb-6 flex items-center gap-2 transition-colors font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to all posts
              </button>
              <h2 className="text-3xl font-bold mb-3" style={{ color: '#000' }}>
                {selectedPost.title}
              </h2>
              <p className="text-sm mb-6" style={{ color: '#666' }}>
                {selectedPost.type.toUpperCase()} • {selectedPost.date}
              </p>
              <pre className="whitespace-pre-wrap text-lg leading-relaxed font-sans" style={{ color: '#000' }}>
                {selectedPost.content}
              </pre>
            </motion.div>
          ) : (
            // List view
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="min-w-[300px] flex-shrink-0 group bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg rounded-2xl p-6 hover:bg-white/10 hover:shadow-2xl hover:border-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                  <p className="text-sm text-gray-400 mb-3">
                    {post.type.toUpperCase()} • {post.date}
                  </p>
                  <p className="text-gray-300 line-clamp-2">
                    {post.content}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        /* HIDE PARTICLES ON BLOG PAGE */
        canvas.particles-js-canvas-el,
        canvas[class*="particles"],
        canvas[id*="particles"] {
          display: none !important;
        }
        
        /* Clean black background */
        body, #root, #root > div {
          background: #000 !important;
        }
        
        .min-h-screen {
          position: relative;
          z-index: 1;
          background: #000 !important;
        }

        /* Better text truncation */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default BlogPage;