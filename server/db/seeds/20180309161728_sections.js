exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sections').del()
    .then(function() {
      // Inserts seed entries
      return knex('sections').insert([{
          "article_id": 1,
          "content": `Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.`
        }, {
          "article_id": 1,
          "content": `There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.`
        }, {
          "article_id": 1,
          "content": `Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. What do you see?—Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Some leaning against the spiles; some seated upon the pier-heads; some looking over the bulwarks of ships from China; some high aloft in the rigging, as if striving to get a still better seaward peep. But these are all landsmen; of week days pent up in lath and plaster—tied to counters, nailed to benches, clinched to desks. How then is this? Are the green fields gone? What do they here?`
        }, {
          "article_id": 1,
          "content": `But look! here come more crowds, pacing straight for the water, and seemingly bound for a dive. Strange! Nothing will content them but the extremest limit of the land; loitering under the shady lee of yonder warehouses will not suffice. No. They must get just as nigh the water as they possibly can without falling in. And there they stand—miles of them—leagues. Inlanders all, they come from lanes and alleys, streets and avenues—north, east, south, and west. Yet here they all unite. Tell me, does the magnetic virtue of the needles of the compasses of all those ships attract them thither?`
        }, {
          "article_id": 2,
          "content": `The Old Sea-dog at the Admiral Benbow


SQUIRE TRELAWNEY, Dr. Livesey, and the rest of these gentlemen having
asked me to write down the whole particulars about Treasure Island, from
the beginning to the end, keeping nothing back but the bearings of the
island, and that only because there is still treasure not yet lifted, I
take up my pen in the year of grace 17__ and go back to the time when
my father kept the Admiral Benbow inn and the brown old seaman with the
sabre cut first took up his lodging under our roof.`
        }, {
          "article_id": 2,
          "content": `I remember him as if it were yesterday, as he came plodding to the
inn door, his sea-chest following behind him in a hand-barrow--a
tall, strong, heavy, nut-brown man, his tarry pigtail falling over the
shoulder of his soiled blue coat, his hands ragged and scarred, with
black, broken nails, and the sabre cut across one cheek, a dirty, livid
white. I remember him looking round the cover and whistling to himself
as he did so, and then breaking out in that old sea-song that he sang so
often afterwards:`
        }, {
          "article_id": 2,
          "content": `“Fifteen men on the dead man's chest--
             Yo-ho-ho, and a bottle of rum!”`
        }, {
          "article_id": 2,
          "content": `in the high, old tottering voice that seemed to have been tuned and
broken at the capstan bars. Then he rapped on the door with a bit of
stick like a handspike that he carried, and when my father appeared,
called roughly for a glass of rum. This, when it was brought to him,
he drank slowly, like a connoisseur, lingering on the taste and still
looking about him at the cliffs and up at our signboard.`
        }, {
          "article_id": 3,
          "content": `_To Mrs. Saville, England._

St. Petersburgh, Dec. 11th, 17—.

You will rejoice to hear that no disaster has accompanied the
commencement of an enterprise which you have regarded with such evil
forebodings.  I arrived here yesterday, and my first task is to assure
my dear sister of my welfare and increasing confidence in the success
of my undertaking.`
        }, {
          "article_id": 3,
          "content": `I am already far north of London, and as I walk in the streets of
Petersburgh, I feel a cold northern breeze play upon my cheeks, which
braces my nerves and fills me with delight.  Do you understand this
feeling?  This breeze, which has travelled from the regions towards
which I am advancing, gives me a foretaste of those icy climes.
Inspirited by this wind of promise, my daydreams become more fervent
and vivid.  I try in vain to be persuaded that the pole is the seat of
frost and desolation; it ever presents itself to my imagination as the
region of beauty and delight.  There, Margaret, the sun is for ever
visible, its broad disk just skirting the horizon and diffusing a
perpetual splendour.  There—for with your leave, my sister, I will put
some trust in preceding navigators—there snow and frost are banished;
and, sailing over a calm sea, we may be wafted to a land surpassing in
wonders and in beauty every region hitherto discovered on the habitable
globe.  Its productions and features may be without example, as the
phenomena of the heavenly bodies undoubtedly are in those undiscovered
solitudes.  What may not be expected in a country of eternal light?  I
may there discover the wondrous power which attracts the needle and may
regulate a thousand celestial observations that require only this
voyage to render their seeming eccentricities consistent for ever.  I
shall satiate my ardent curiosity with the sight of a part of the world
never before visited, and may tread a land never before imprinted by
the foot of man. These are my enticements, and they are sufficient to
conquer all fear of danger or death and to induce me to commence this
laborious voyage with the joy a child feels when he embarks in a little
boat, with his holiday mates, on an expedition of discovery up his
native river. But supposing all these conjectures to be false, you
cannot contest the inestimable benefit which I shall confer on all
mankind, to the last generation, by discovering a passage near the pole
to those countries, to reach which at present so many months are
requisite; or by ascertaining the secret of the magnet, which, if at
all possible, can only be effected by an undertaking such as mine.`
        }, {
          "article_id": 3,
          "content": `These reflections have dispelled the agitation with which I began my
letter, and I feel my heart glow with an enthusiasm which elevates me
to heaven, for nothing contributes so much to tranquillise the mind as
a steady purpose—a point on which the soul may fix its intellectual
eye.  This expedition has been the favourite dream of my early years. I
have read with ardour the accounts of the various voyages which have
been made in the prospect of arriving at the North Pacific Ocean
through the seas which surround the pole.  You may remember that a
history of all the voyages made for purposes of discovery composed the
whole of our good Uncle Thomas’ library.  My education was neglected,
yet I was passionately fond of reading.  These volumes were my study
day and night, and my familiarity with them increased that regret which
I had felt, as a child, on learning that my father’s dying injunction
had forbidden my uncle to allow me to embark in a seafaring life.`
        }, {
          "article_id": 3,
          "content": `These visions faded when I perused, for the first time, those poets
whose effusions entranced my soul and lifted it to heaven.  I also
became a poet and for one year lived in a paradise of my own creation;
I imagined that I also might obtain a niche in the temple where the
names of Homer and Shakespeare are consecrated.  You are well
acquainted with my failure and how heavily I bore the disappointment.
But just at that time I inherited the fortune of my cousin, and my
thoughts were turned into the channel of their earlier bent.`
        }, {
          "article_id": 5,
          "content": `CHAPTER I: HEAT AND POWER`
        }, {
          "article_id": 5,
          "content": `Heat engines, of which the steam engine and gas engine are the most
prominent examples, are devices by which heat energy is transformed into
mechanical power or motion. In all heat engines, this transformation of
energy is accomplished by that property of heat known as “expansion,” by
which an increase or decrease of temperature causes a corresponding
increase or decrease in volume of the material subjected to the varying
temperatures. The substance whose expansion and contraction actuates the
heat engine is known as the “working medium,” and may be either a solid,
liquid, or a gas. The extent to which the working medium is expanded
depends not only upon the change of temperature but also on its
composition.`
        }, {
          "article_id": 5,
          "content": `In all practical heat engines, the heat energy is developed by the
process of combustion, which is a chemical combination of the oxygen of
the air with certain substances, such as coal or gasoline, known as
“fuels.” The heat producing elements of the fuels are generally
compounds of carbon and hydrogen, which when oxydized or burnt by the
oxygen form products that are unlike either of the original components.
It is due to this chemical change that heat energy is evolved, for the
heat represents the energy expended by the sun in building up the fuel
in its original form, and as energy can neither be created nor
destroyed, heat energy is liberated when the fuel is decomposed. The
heat energy thus liberated is applied to the expansion of the working
medium to obtain its equivalent in the form of mechanical power.`
        }, {
          "article_id": 5,
          "content": `During the period of expansion, the heat obtained by the combustion is
absorbed by the working medium in proportion to its increase in volume,
and as this increase is proportional to the mechanical effort exerted by
the engine, it will be seen that the output of the engine in work is a
measure of the heat applied to the medium. The quantity of heat absorbed
by the medium represents the energy required to set the molecules of the
medium into their new positions in the greater volume, or to increase
their paths of travel. In the conversion of heat, each heat unit applied
to the medium results in the production of 778 foot pounds of energy,
providing that there are no heat or frictional losses.`
        }, {
          "article_id": 5,
          "content": `In explanation of these terms or units, we wish to say, that the unit of
heat quantity, called the =BRITISH THERMAL UNIT= is the quantity of heat
required to raise one pound of water, one degree Fahrenheit, and the
=FOOT POUND= is the work required to raise one pound through the
vertical distance of one foot. As the British Thermal Unit = 778 foot
pounds it is equivalent to the work required to raise 778 pounds one
foot or one pound 778 feet, or any other product of feet and pounds
equal to the figure 778.`
        }, {
          "article_id": 4,
          "content": `It is a truth universally acknowledged, that a single man in possession
of a good fortune, must be in want of a wife.`
        }, {
          "article_id": 4,
          "content": `However little known the feelings or views of such a man may be on his
first entering a neighbourhood, this truth is so well fixed in the minds
of the surrounding families, that he is considered the rightful property
of some one or other of their daughters.`
        }, {
          "article_id": 4,
          "content": `“My dear Mr. Bennet,” said his lady to him one day, “have you heard that
Netherfield Park is let at last?”`
        }, {
          "article_id": 6,
          "content": `Alice was beginning to get very tired of sitting by her sister on the
bank, and of having nothing to do: once or twice she had peeped into the
book her sister was reading, but it had no pictures or conversations in
it, ‘and what is the use of a book,’ thought Alice ‘without pictures or
conversations?’`
        }, {
          "article_id": 6,
          "content": `So she was considering in her own mind (as well as she could, for the
hot day made her feel very sleepy and stupid), whether the pleasure
of making a daisy-chain would be worth the trouble of getting up and
picking the daisies, when suddenly a White Rabbit with pink eyes ran
close by her.`
        }, {
          "article_id": 6,
          "content": `There was nothing so VERY remarkable in that; nor did Alice think it so
VERY much out of the way to hear the Rabbit say to itself, ‘Oh dear!
Oh dear! I shall be late!’ (when she thought it over afterwards, it
occurred to her that she ought to have wondered at this, but at the time
it all seemed quite natural); but when the Rabbit actually TOOK A WATCH
OUT OF ITS WAISTCOAT-POCKET, and looked at it, and then hurried on,
Alice started to her feet, for it flashed across her mind that she had
never before seen a rabbit with either a waistcoat-pocket, or a watch
to take out of it, and burning with curiosity, she ran across the field
after it, and fortunately was just in time to see it pop down a large
rabbit-hole under the hedge.`
        }, {
          "article_id": 7,
          "content": `_3 May. Bistritz._--Left Munich at 8:35 P. M., on 1st May, arriving at
Vienna early next morning; should have arrived at 6:46, but train was an
hour late. Buda-Pesth seems a wonderful place, from the glimpse which I
got of it from the train and the little I could walk through the
streets. I feared to go very far from the station, as we had arrived
late and would start as near the correct time as possible. The
impression I had was that we were leaving the West and entering the
East; the most western of splendid bridges over the Danube, which is
here of noble width and depth, took us among the traditions of Turkish
rule.`
        }, {
          "article_id": 7,
          "content": `We left in pretty good time, and came after nightfall to Klausenburgh.
Here I stopped for the night at the Hotel Royale. I had for dinner, or
rather supper, a chicken done up some way with red pepper, which was
very good but thirsty. (_Mem._, get recipe for Mina.) I asked the
waiter, and he said it was called "paprika hendl," and that, as it was a
national dish, I should be able to get it anywhere along the
Carpathians. I found my smattering of German very useful here; indeed, I
don't know how I should be able to get on without it.`
        }, {
          "article_id": 7,
          "content": `Having had some time at my disposal when in London, I had visited the
British Museum, and made search among the books and maps in the library
regarding Transylvania; it had struck me that some foreknowledge of the
country could hardly fail to have some importance in dealing with a
nobleman of that country. I find that the district he named is in the
extreme east of the country, just on the borders of three states,
Transylvania, Moldavia and Bukovina, in the midst of the Carpathian
mountains; one of the wildest and least known portions of Europe. I was
not able to light on any map or work giving the exact locality of the
Castle Dracula, as there are no maps of this country as yet to compare
with our own Ordnance Survey maps; but I found that Bistritz, the post
town named by Count Dracula, is a fairly well-known place. I shall enter
here some of my notes, as they may refresh my memory when I talk over my
travels with Mina.`
        }, {
          "article_id": 7,
          "content": `In the population of Transylvania there are four distinct nationalities:
Saxons in the South, and mixed with them the Wallachs, who are the
descendants of the Dacians; Magyars in the West, and Szekelys in the
East and North. I am going among the latter, who claim to be descended
from Attila and the Huns. This may be so, for when the Magyars conquered
the country in the eleventh century they found the Huns settled in it. I
read that every known superstition in the world is gathered into the
horseshoe of the Carpathians, as if it were the centre of some sort of
imaginative whirlpool; if so my stay may be very interesting. (_Mem._, I
must ask the Count all about them.)`
        }, {
          "article_id": 8,
          "content": `YOU don't know about me without you have read a book by the name of The
Adventures of Tom Sawyer; but that ain't no matter.  That book was made
by Mr. Mark Twain, and he told the truth, mainly.  There was things
which he stretched, but mainly he told the truth.  That is nothing.  I
never seen anybody but lied one time or another, without it was Aunt
Polly, or the widow, or maybe Mary.  Aunt Polly--Tom's Aunt Polly, she
is--and Mary, and the Widow Douglas is all told about in that book, which
is mostly a true book, with some stretchers, as I said before.`
        }, {
          "article_id": 8,
          "content": `Now the way that the book winds up is this:  Tom and me found the money
that the robbers hid in the cave, and it made us rich.  We got six
thousand dollars apiece--all gold.  It was an awful sight of money when
it was piled up.  Well, Judge Thatcher he took it and put it out
at interest, and it fetched us a dollar a day apiece all the year
round--more than a body could tell what to do with.  The Widow Douglas
she took me for her son, and allowed she would sivilize me; but it was
rough living in the house all the time, considering how dismal regular
and decent the widow was in all her ways; and so when I couldn't stand
it no longer I lit out.  I got into my old rags and my sugar-hogshead
again, and was free and satisfied.  But Tom Sawyer he hunted me up and
said he was going to start a band of robbers, and I might join if I
would go back to the widow and be respectable.  So I went back.`
        }, {
          "article_id": 8,
          "content": `The widow she cried over me, and called me a poor lost lamb, and she
called me a lot of other names, too, but she never meant no harm by
it. She put me in them new clothes again, and I couldn't do nothing but
sweat and sweat, and feel all cramped up.  Well, then, the old thing
commenced again.  The widow rung a bell for supper, and you had to come
to time. When you got to the table you couldn't go right to eating, but
you had to wait for the widow to tuck down her head and grumble a little
over the victuals, though there warn't really anything the matter with
them,--that is, nothing only everything was cooked by itself.  In a
barrel of odds and ends it is different; things get mixed up, and the
juice kind of swaps around, and the things go better.`
        }, {
          "article_id": 8,
          "content": `After supper she got out her book and learned me about Moses and the
Bulrushers, and I was in a sweat to find out all about him; but by and
by she let it out that Moses had been dead a considerable long time; so
then I didn't care no more about him, because I don't take no stock in
dead people.`
        }, {
          "article_id": 8,
          "content": `Pretty soon I wanted to smoke, and asked the widow to let me.  But she
wouldn't.  She said it was a mean practice and wasn't clean, and I must
try to not do it any more.  That is just the way with some people.  They
get down on a thing when they don't know nothing about it.  Here she was
a-bothering about Moses, which was no kin to her, and no use to anybody,
being gone, you see, yet finding a power of fault with me for doing a
thing that had some good in it.  And she took snuff, too; of course that
was all right, because she done it herself.`
        }]);
    });
};
