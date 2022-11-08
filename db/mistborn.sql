-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-10-2022 a las 01:46:46
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mistborn`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `abilities`
--

CREATE TABLE `abilities` (
  `id` int(11) NOT NULL,
  `ability` varchar(40) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `abilities`
--

INSERT INTO `abilities` (`id`, `ability`, `description`) VALUES
(1, 'Mistborn', 'Can burn all the Allomantic Metals'),
(2, 'Coinshot', 'Pushes on Nearby Metals'),
(3, 'Thug', 'Increases Physical Abilities'),
(4, 'Duralumin Gnat', 'Enhances Current Metal Burned'),
(5, 'Nicroburst', 'Enhances Allomantic Burn of Target'),
(6, 'Lurcher', 'Pulls on Nearby Metals'),
(7, 'Tineye', 'Increases Senses'),
(8, 'Aluminum Gnat', 'Wipes Internal Allomantic Reserves'),
(9, 'Leecher', 'Wipes Allomantic Reserves of Target'),
(10, 'Rioter', 'Enflames (riots) Emotions'),
(11, 'Smoker', 'Hide Allomantic Pulses'),
(12, 'Augur', 'Reveals Your Past Self'),
(13, 'Pulser', 'Slows Down Time'),
(14, 'Soother', 'Dampens (soothes) Emotions'),
(15, 'Seeker', 'Can Hear Allomantic Pulses'),
(16, 'Oracle', 'Reveals Your Future'),
(17, 'Slider', 'Speeds Up Time'),
(18, 'Skimmer', 'Stores Physical Weight'),
(19, 'Windwhisper', 'Stores Senses'),
(20, 'Spinner', 'Stores Fortune'),
(21, 'Trueself', 'Stores Identity'),
(22, 'Steelrunner', 'Stores Physical Speed'),
(23, 'Brute', 'Stores Physical Strength'),
(24, 'Soulbearer', 'Stores Investiture'),
(25, 'Connector', 'Stores Connection'),
(26, 'Sparker', 'Stores Mental Speed'),
(27, 'Archivist', 'Stores Memories'),
(28, 'Gasper', 'Stores Breath'),
(29, 'Bloodmaker', 'Stores Health'),
(30, 'Firesoul', 'Stores Warmth'),
(31, 'Sentry', 'Stores Wakefulness'),
(32, 'Subsumer', 'Stores Energy'),
(33, 'Pinnacle', 'Stores Determination'),
(34, 'Iron(Hemalurgy)', 'Steals strength'),
(36, 'Tin(Hemalurgy)', 'Steals Senses'),
(37, 'Chromium(Hemalurgy)', 'Might steal destiny'),
(38, 'Aluminum(Hemalurgy)', 'Removes all powers'),
(39, 'Steel(Hemalurgy)', 'Steals Physical Allomantic powers'),
(40, 'Pewter(Hemalurgy)', 'Steals Physical Feruchemical powers'),
(41, 'Nicrosil(Hemalurgy)', 'Steals Investiture'),
(42, 'Duralumin(Hemalurgy)', 'Steals Connection/Identity'),
(43, 'Zinc(Hemalurgy)', 'Steals emotional fortitude'),
(44, 'Copper(Hemalurgy)', 'Steals mental fortitude, memory, and intelligence'),
(45, 'Cadmium(Hemalurgy)', 'Steals Temporal Allomantic powers'),
(46, 'Gold(Hemalurgy)', 'Steals Hybrid Feruchemical powers'),
(47, 'Brass(Hemalurgy)', 'Steals Cognitive Feruchemical powers'),
(48, 'Bronze(Hemalurgy)', 'Steals Mental Allomantic powers'),
(49, 'Bendalloy(Hemalurgy)', 'Steals Spiritual Feruchemical powers'),
(50, 'Electrum(Hemalurgy)', 'Steals Enhancement Allomantic powers'),
(51, 'Feruchemist', 'Can use all the Feruchemic metals.'),
(52, 'Hemalurgy', 'Steal other powers.'),
(53, 'Seer', 'Can see the future'),
(71, 'asdfasd', 'Habilidad modificada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  `description` text NOT NULL,
  `state` enum('alive','dead','unknown') NOT NULL,
  `id_ethnicity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `characters`
--

INSERT INTO `characters` (`id`, `name`, `description`, `state`, `id_ethnicity`) VALUES
(1, 'Vin Venture', 'Vin Venture is a half-skaa Mistborn from the Final Empire on Scadrial. She later becomes known as Heir to the Survivor, the Ascendant \r\nWarrior and the Lady Mistborn, as well as taking on the alias Valette Renoux. She was born to Tevidian Tekiel\'s skaa mistress in year \r\n1005 FE in Luthadel, and was raised by her half brother Reen after he discovered that their sister had been murdered by their mother. The two \r\nlived on the streets and worked in the underground, until eventually coming to work in Camon\'s crew.\r\nVin trains in and works with Kelsier\'s crew after he prevents Camon from beating her to death, and infiltrates the nobility under the guise of \r\nValette Renoux, eventually helping to save the survivors of the skaa rebellion\'s army and killing Shan Elariel before fighting the Lord Ruler \r\nand killing him. After the Collapse, she marries Elend Venture and sets herself and Elend up as the empress and emperor of the New Empire, \r\nrespectively, during the Siege of Luthadel, wherein she kills Zane and Straff Venture, saves the city from rampaging koloss and forces Lord \r\nCett to swear his allegiance to them. In the aftermath of the siege, she inadvertently frees Ruin from its prison at the Well of Ascension.\r\nFollowing Ruin\'s release, Vin helps to secure her and Elend\'s empire; locating the Lord Ruler\'s storage caverns, participating in the Siege of \r\nFadrex City, and takes up the Shard Preservation shortly prior to the Battle of Hathsin, wherein she gives her life to kill Ruin. In the years \r\nfollowing the Final Ascension, she becomes a mythical figure to the descendants of the survivors, known as the Ascendant Warrior. In the Words \r\nof Founding, it is said that she became the guardian of the mists and now watches over people in the night.', 'dead', 1),
(2, 'Kelsier', 'Kelsier is a half-skaa Mistborn from Scadrial.He is stern and intense, but always smiling; another act of rebellion against the Lord \r\nRuler\'s oppression. He hates injustice and takes this hatred to the extreme, which originally resulted in him being unable to see good in any \r\nof the nobility. This was changed by Vin who fell in love with Elend Venture. Kelsier went on to save Elend\'s life from an inquisitor. His late \r\nwife Mare collected pre-Ascension memorabilia, and he keeps one piece, a drawing of a flower, to inspire his crew. Kelsier is the younger \r\nbrother of Marsh, who is disappointed at Kelsier\'s apparent lack of direction or purpose until Kelsier leads the skaa rebellion. He always \r\nkeeps a smile on his face, because that is the one thing the Lord Ruler can\'t take from him.', 'dead', 1),
(3, 'Sazed', 'Sazed is a Terrisman steward from Scadrial.He is part of Kelsier\'s crew. He is a Keeper, considered something of a rebel by the others of \r\nhis kind. He is the current Vessel of the Shard Harmony.\r\nTall and long-limbed, Sazed has the build of a scholar.His arms and legs are a bit too long for his body because of a medical condition \r\ncaused by his being castrated as a boy.He has a shaven head, his earlobes have been stretched out, and the ears themselves contain studs \r\nthat run around their perimeter. He wears the lavish, colorful robes of a Terris steward—the garments are made of embroidered, overlapping V \r\nshapes, alternating among the three colors of his master’s house. He is soft spoken, with a higher pitch and an almost melodic accent.', 'dead', 3),
(4, 'Elend Venture', 'Elend Venture is a noble in Scadrial. After the Collapse, he becomes King of the Central Dominance, and later, High Emperor of the New Empire. \r\nAfter swallowing a bead of lerasium, he becomes Mistborn. He is married to Vin.\r\nIn his early life, Elend was an idealist. He was curious about the conditions of the skaa and their intelligence and believed in \r\ncreating a coalition of houses to exert pressure on the Lord Ruler.However, he struggled to be forceful and to impose his will in \r\nothers.He saw himself as a friendly and a comfortable man, but also a bit of a fool.He considered running an empire mostly as an \r\nacademic exercise.However, he had a buried desire to lead, and the skills to become a king, if he learned to use them.After Tindwyl\'s \r\ncoaching, Elend became more forceful and realistic.', 'dead', 2),
(5, 'Spook', 'Spook, or Lestibournes, is a skaa Misting on Scadrial. He was a member of Kelsier\'s crew and worked for Elend Venture after the Collapse. After \r\nthe Catacendre, he became known as the Lord Mistborn and ruled the Elendel Basin for a hundred years before stepping down.\r\nIn early 1021 FE, as Kelsier\'s plan to overthrow the Final Empire was getting started, he was fifteen.Spook was initially very shy after \r\njoining Kelsier\'s crew, as he still spoke in Eastern street slang, which made it hard for the rest of the crew to fully understand him.\r\nAfter the Collapse, he was much more confident. He stopped using his street cant and grew to over six feet tall, barely resembling the gangly \r\nboy he was before. On at least one occasion, he wore a beard as a disguise.Around this time he started to show his like for women, almost \r\nany type. He didn\'t get much response, but he liked to flirt a lot.', 'dead', 1),
(6, 'Edgard Ladrian', 'Edgard Ladrian, better known as Breeze, is a member of Kelsier\'s crew on Scadrial.\r\nHe is commonly described as \'portly\', though he has lost weight at various points.He wears extremely colorful clothes, and has black hair \r\nand a mustache.Breeze is often lazy, and delights in getting people to do things he doesn’t want to do, such as fetching him drinks.\r\nHe is a Soother, who subtly Soothes everyone he comes across. This leads him to be mistrusted by many people. They are reluctant to do anything \r\nfor him, as they are worried he might be Soothing them.He is believed by Kelsier and many of his crew to be one of the most skilled \r\nSoothers on Scadrial. He helps to teach Vin some of the more in-depth aspects of Soothing. He has a refined and intricate control over his \r\nSoothing, and is skilled at Soothing people without them noticing. He does this to Vin on a few occasions.He could influence several \r\nhundred people at once.', 'dead', 2),
(7, 'Hammond', 'Hammond is a skaa Misting on Scadrial. He is a member of Kelsier\'s crew who helped organize the rebellion\'s army of skaa.\r\nHam is humble, long-winded, and kindly.He argues about the rightness of the fight they are in. He also shows attachment towards his crew \r\nand soldiers and wants to make sure there are greater plans for them.\r\nHam usually appears content.He works to give his family a better life and dreams of moving with them to a city where they can live like \r\nnoblemen. He wants a life without fear or division.\r\nHe has very short hair, and always wears a loose shirt and vest, both sleeveless; however, when acting as General Hammond for Kelsier\'s \r\narmy, he wears a uniform which he dislikes.He conditioned his support as General to Elend to stop using a uniform, so, he went back to his \r\ncustomary sleeveless vests.\r\nHam likes philosophical debates. He questions if going against the Lord Ruler was good or bad, as overthrowing God is not in itself something \r\ngood.He also likes to talk about atium economics.\r\nIt is due to his philosophy that he figures out that skaa are made different from noble men, with factors such as the number of children to \r\nbirth or to physical differences like height.', 'dead', 1),
(8, 'Cladent', 'Cladent is a skaa Misting from the Final Empire on Scadrial.He is a member of Kelsier\'s thieving crew and goes by the nickname Clubs.\r\nClubs is described as having a gnarled face with an unhappy expression, similar to a piece of knotted wood. Although he appears to be much \r\nolder than Breeze, he still seems to be physically fit. He usually displays a grim and pessimistic demeanor, regarding those around him with \r\ndisapproval.He walks with a limp due to a past injury that he got in battle, and has a large scar from it.\r\nClubs is a Smoker. Burning copper allows him to form an invisible \'coppercloud\' around him that blocks the bronze senses of Seekers and \r\nMistborn, allowing people nearby to use Allomancy without being discovered. It also makes him immune to emotional Allomancy while burning copper.', 'dead', 1),
(9, 'Dockson', 'Dockson is a member of Kelsier\'s crew on Scadrial. He performs as Kelsier\'s right-hand man and the two have been friends for a long time, \r\nworking together to topple The Lord Ruler. Dockson is the only non-Allomancer amongst the crew.\r\nDockson has a squarish face, which Kelsier observes is well-suited to his moderately stocky build. He has black hair and sports a short \r\nhalf-beard, the Scadrian term for a goatee.Since he \'first put forth whiskers some twenty years before\', we can assume Dockson is \r\nmiddle-aged by the events of Mistborn. He often wears clothing of noble origin. Both Sazed and Vin feel noble suits fit him better than the \r\nothers in the crew.\r\nDockson is responsible for keeping the crew operational, demonstrating aptitude for organization and administration.Most often he tries to \r\ndirect Kelsier and the others but allows himself to joke with the other members from time to time. He is quite diligent in his duties to ensure \r\nthe crew has everything they need to remain functioning and is sometimes quite stern.\r\nAfter Kelsier\'s death, however, his mirth vanishes.He regrets the way he\'s become. He feels he is a man who has gotten what he wanted, but \r\nrealizes he shouldn\'t have desired it so badly.Despite this, his role as administrator never falters.\r\nAt least prior to Kelsier being sent to the Pits of Hathsin, Dockson was into brawling.', 'dead', 1),
(10, 'Straff Venture', 'Straff Venture is a noble on Scadrial during the Final Empire. He is the head of the House Venture, the most powerful great house of the the \r\nhigh nobility. He is the father of Elend and Zane.\r\nStraff is a manipulative and sadistic monster. He is extremely fond of posturing and demonstrating his superiority, and is terrified of anyone \r\nhaving power over him. He enjoys going to brothels knowing that the skaa will be executed, as it gives him a sense of power.\r\nStraff is a very skilled and experienced Tineye, able to smell even an almost odorless poison in a aromatic tea. He is able to replicate \r\nAmaranta\'s drug cocktail based on the smell of the ingredients. Unlike most other Allomancers, Straff doesn’t keep his abilities secret, in \r\norder to show off his superiority and fearlessness.', 'dead', 2),
(11, 'Zane Venture', 'Zane Venture was a Mistborn on the planet of Scadrial. He was the illegitimate son of Straff Venture and the half-brother to Elend Venture.\r\nZane shares certain phenotypic characteristics with his family such as brown curly hair, which he tends to keep shorter than his brother. He \r\nhas a wiry build with a narrow face and is of medium height. He often wears all black and, despite being a Mistborn, does not wear a \r\nmistcloak.Zane had a difficult childhood, as Straff kept his existence secret due to his skaa lineage. Because of a combination of his \r\nharsh upbringing and Ruin\'s influence upon him, Zane has an unstable personality, and engages in dysregulated behavior such as self-harm.\r\nZane has a Hemalurgic spike he placed himself, presumably under Ruin\'s influence;however, a consequence of this spike is that Ruin can \r\nspeak with Zane, and often tells him to kill everyone around him, leading Zane to believe he is insane. Zane refuses to let his insanity \r\ncontrol him and he resists following Ruin\'s orders, calling him God when thinking about the voice in his head, but otherwise ignoring it.\r\nWithout Ruin\'s influence, Zane would have been less crazy but more ruthless, much like his father, and would have been more similar to \r\nKelsier.', 'dead', 2),
(12, 'Ashweather Cett', 'Ashweather Cett is a nobleman from Fadrex City during the Final Empire.\r\nCett is abrasive and takes delight in being purposefully rude. He also tends to use this to throw guests off balance, allowing him to have more \r\ncontrol over the situation; when he meets with Elend Venture, Cett deliberately serves messy food to make Elend uncomfortable.', 'dead', 2),
(13, 'Tindwyl', 'Tindwyl is a Keeper of Terris and a member of the Synod. She is well-known and respected among the Terris people. She spent much of her life in \r\nthe Lord Ruler\'s breeding program, and had over twenty children, around fifteen of which were girls.[1] A year after the Collapse, she traveled \r\nto Luthadel at Sazed\'s wish in order to train Elend Venture in leadership. She quickly became a member of Elend\'s inner circle. After this, she \r\nand Sazed studied the rubbing he made of Kwaan\'s inscription, and during that time they became romantically involved. She died during the Siege \r\nof Luthadel, slain by Koloss.', 'dead', 3),
(14, 'Allrianne Cett', 'Allrianne Cett is a noblewoman from the Western Dominance and Rioter on Scadrial during the Final Empire and subsequent Collapse. She is the \r\ndaughter of Ashweather Cett and is in a relationship with Breeze.\r\nAllrianne is described as youthful and cute. She has golden hair that is long and bouncy, owing to both her Western roots and her continued use \r\nof Final Empire styles. She is graceful like most noblewomen, but she also drops her dignified air to express high energy. She is first seen in \r\na red dress after the current styles popular with the nobility, and is rarely seen out of such clothing.While in Urteau, she is forced to \r\nwear plain brown skaa dresses, but continues to wear fancy ones within the safety of the city\'s storage cavern. She is disgruntled about the \r\nrestriction but follows the law.', 'dead', 2),
(15, 'TenSoon', 'TenSoon is a kandra of the Third Generation. He was one of the most experienced kandra due to the length of his field service. He held two \r\nBlessings during the Final Empire, the Blessing of Potency and the Blessing of Presence. He raised MeLaan.He is known as the Guardian of \r\nthe Ascendant Warrior after the Catacendre.\r\nTenSoon is a kandra of the Third Generation. As such, he has no fixed body and can take on the form of someone as long as he has their bones. \r\nTenSoon has worked as a spy and imposter for a whole millennium and is able to impersonate sombody so perfectly that even their closest friends \r\nare unable to tell the difference. His ability to change forms is unmatched among all kandra. TenSoon was created with the Blessing of \r\nPresence. Later he gained the Blessing of Potency from OreSeur. It’s unknown if he still has the Blessing of Potency after the Final Ascension.', 'alive', 6),
(16, 'Aradan Yomen', 'Aradan Yomen is an obligator of the Final Empire on Scadrial.\r\nHe was youthful looking, round-faced with serious eyes, and shaved bald with obligator tattoos around his eyes.He had a fondness for \r\nphilosophic literature and believed that the Lord Ruler was the one and only god. He did not believe in the Lord Ruler\'s death and held the \r\nview that he would return someday to reign again.\r\nYomen is a Seer - a Misting who can burn atium - which allows him to see an attacker\'s movements in advance.The existence of this type of \r\nMisting is a secret the Lord Ruler worked very hard to guard, and gives him an edge over his enemies as they expect him to be either a \r\nMistborn or not an Allomancer at all. However, even with this power he is not a great combatant, as he lacks battle training and the \r\nenhanced abilities and strength provided by pewter.\r\nThe drop of atium he always wears at his forehead is more than just a display of power and authority.', 'dead', 2),
(17, 'Quellion', 'Quellion is a skaa from Urteau on Scadrial.\r\nAlso known as the Citizen, Quellion is in charge of Urteau after the death of the Lord Ruler. Spook is sent by Elend and Vin to gain \r\nintelligence on Quellion.As a government officer in the city of Urteau, he wears red-dyed skaa trousers and work shirts.\r\nQuellion has a bronze Hemalurgic spike in his upper arm until Spook removes it.Via this piercing, Ruin appears to Quellion in the image \r\nof Kelsier. Although not originally an Allomancer, the spike gave him the powers of a Seeker, which then allowed him to easily find the \r\nAllomancers in the population of Urteau and force them into working for him.', 'dead', 1),
(18, 'Rashek', 'Rashek is a Terrisman from Scadrial. Known as the Lord Ruler, the Sliver of Infinity and the Father, he has access to the full range of \r\nabilities of both a Feruchemist and an Allomancer, and has Hemalurgic spikes in his body. As a result, he is an extremely powerful Compounder, \r\nand he was able to unify much of the world into an empire that lasted for one thousand years.\r\nRashek is incredibly tall and handsome. He has pale skin and has black hair. He wears black and white clothing that resembles an exaggerated \r\nnobleman\'s suit, with a coat that runs down to his feet and trails behind him and a black vest accented with white markings. He also wears \r\nseveral rings, both as show of his strength and as Feruchemical storage.\r\nHe is charismatic.\r\nHe enjoys playing and listening to music and keeps a small wooden flute among his Terris relics.\r\nPrior to his Ascension, he disliked the people of Khlennium, and was hostile and angry towards them, despite never having been to the state, \r\nbecause of their oppression of the Terris people.Though he hated them, he also envied several aspects of their culture, later \r\nincorporating them into the culture of the Final Empire.', 'dead', 3),
(19, 'Alendi', 'Alendi is a Seeker, the last ruler of Khlennium on Scadrial, and author of Alendi\'s journal.\r\nLittle of Alendi\'s appearance is known, however Kwaan\'s inscription does mention a few of his features. Kwaan says that he towers over most \r\nothers and has a bearing that demands respect.He also has a birthmark on his arm and his hair turned grey when he was barely twenty five, \r\nminor details which served to further convince Kwaan that he was the Hero of Ages.\r\nAlendi is a Seeker, snapping in Preservation\'s Mist.This allows him to detect the use of Allomancy and hear the The Well of Ascension. \r\nHowever, due to the fact that Allomancy is close to unknown before the Lord Ruler’s Ascension, Alendi probably only uses his abilities \r\nunconsciously.\r\nHe is a skilled general with the nickname \'the Conqueror\', able to defeat and conquer several countries.', 'dead', 9),
(20, 'Kwaan', 'Kwaan was a Worldbringer of Terris prior to the Final Empire on Scadrial.\r\nLike other Worldbringers, Kwaan was a full Feruchemist. Although he used his abilities mainly to aid him in his studies, he had an eidetic \r\nmemory and so didn\'t need to use a coppermind.\r\nHe was the first among them to proclaim Alendi as the Hero of Ages, a figure foretold in Terris prophecy. However, his eidetic memory allowed \r\nhim to remember the prophecy without resorting to his copperminds, which could be manipulated by Ruin. He began to notice discrepancies between \r\nthe two versions caused by the meddling hand of Ruin. He realized that releasing the power at the Well of Ascension would allow Ruin to be free \r\nonce more so he sent his nephew Rashek to prevent this from occurring.\r\nHe left a metal inscription in the Conventical of Seran describing his discoveries which were later found and copied by Sazed.', 'dead', 3),
(21, 'Marsh', 'Marsh is a half-skaa Seeker from the Final Empire on Scadrial.\r\nBefore becoming an Inquisitor, Marsh is stern and determined, earning him the name \'Ironeyes\' as a result of his piercing gaze.Marsh looks \r\nvery similar to his brother Kelsier, even after becoming an Inquisitor. Steel Ministry tattoos and spikes through his eyes are a prominent \r\nfeature of his face after being made an Inquisitor.\r\nAfter the Catacendre, Marsh is happier and in a better state mentally than he was previously. Although he won\'t admit it, there\'s a part of \r\nhim—a part that\'s similar to Kelsier—that enjoys being seen as a god of death.', 'alive', 1),
(22, 'Vin\'s mother', 'Vin\'s mother is a skaa prostitute in Luthadel. She uses Vin\'s sister to Hemalurgically charge a bronze spike. She then spikes Vin with this \r\nbronze \'earring\', which later gives her the power to pierce copperclouds.She was found by Reen while covered in her nameless daughter\'s \r\nblood and proclaiming Vin a queen.She was later assassinated by Tevidian.\r\nShe was under the influence of Ruin, and he was able to influence her due to her own insanity.', 'dead', 1),
(23, 'Tevidian Tekiel', 'Tevidian Tekiel was the Lord Prelan of the Steel Ministry on Scadrial shortly during the Final Empire, and Vin\'s father. He was a Tekiel, a \r\nnoble of a very pure line, but had to renounce his surname to join the Steel Ministry.\r\nTevidian bedded many skaa women.Ultimately, he illegitimately sired Vin and her younger sister, providing them both Allomancy, Vin being \r\nMistborn and her younger sister being a Seeker. He claimed he killed every skaa he slept with, but Vin\'s mother deceived Tevidian into thinking \r\nshe was noble, and so he was lax with her. Tevidian eventually found her and killed her, but did not manage to kill Vin or her sister.\r\nTevidian did not recognize Vin, and Vin suspected Tevidian never knew he was a father.', 'dead', 2),
(24, 'Reen', 'Reen is a skaa orphan from Luthadel on Scadrial. He lived with his half sister Vin, his mother and Vin\'s sister until he discovered that Vin\'s \r\nsister had been murdered by their mother. The two lived on the streets and worked in the underground, until eventually coming to work in Camon\'s \r\ncrew.', 'dead', 1),
(25, 'Salmen Tekiel', 'Salmen Tekiel was a nobleman on Scadrial during the Final Empire, who may or may not have existed.\r\nKelsier spread a rumor to Hoid of a covert relationship between him and Shan Elariel to try and create controversy.Kelsier may have \r\ninvented the name.', 'dead', 2),
(26, 'Kale Tekiel', 'Kale Tekiel is a noble in the Final Empire on Scadrial, shortly before the Collapse.\r\nAfter House Tekiel\'s reputation and finances were destroyed in the house war, Tekiel tried to leave Luthadel, but the show of weakness was too \r\nmuch for other Luthadel nobility. Some of Tekiel\'s leadership was assassinated, and the rest had been killed on their canal boats, which were \r\nset on fire. This was the work of House Hasting.\r\nKale was implied to be one of the Tekiel nobles who were murdered. Telden Hasting said to Elend Venture that the house war would be no big \r\ndeal, and that soon everyone would look back and wonder what the fuss was about, but Elend knew the stakes were higher, and Kale certainly \r\nwouldn\'t be able look back, since he was killed with the other Tekiels.', 'dead', 2),
(27, 'Mare', 'Mare is a Tineye on Scadrial. She is Kelsier\'s wife and a member of his crew. She is fascinated by pre-Ascension times, following the \r\npre-Ascension religion of Larstaism and collecting artifacts from that era, including a picture of a flower. She is also active in the skaa \r\nrebellion. She and Kelsier are captured by the Lord Ruler when they try to infiltrate Kredik Shaw, and sent to the Pits of Hathsin. She is later \r\nkilled there. After her death, Kelsier dedicates his life toward making a world where flowers grow again, the world she had always dreamed of.', 'dead', 1),
(28, 'Kelsier\'s mother', 'Kelsier\'s mother is a skaa on Scadrial. She is a resourceful mistress to a high-ranking noble lord.\r\nShe deceived her lover about her skaa heritage, successfully hiding it for many years. Although her children Marsh and Kelsier were \r\nillegitimate, they grew up privileged until their father discovered the truth, at which point she was taken by obligators and presumably \r\nexecuted. Marsh and Kelsier were very young at the time; the loss of their mother caused Marsh to Snap.Their father did not report the \r\nmixed heritage of the boys to the Steel Ministry, but they lived out their childhoods in constant fear of being discovered and killed.', 'dead', 1),
(29, 'Elend\'s mother', 'Elend\'s mother is a noblewoman in Luthadel on Scadrial.\r\nBy the time Elend met Vin, his mother had presumably died; he spoke of her in the past tense.The circumstances of her death are not known. \r\nShe had significant influence on Elend, and he took after her more than Straff.\r\nElend told Vin that his mother was fond of telling him that \'it does gentlemen good to wait upon a lady\'s whims\'.Vin said that she sounded \r\nlike a wise woman, although Elend countered that she was not wise enough to avoid marrying Straff.', 'dead', 2),
(30, 'Jedal', 'Jedal is a skaa miner from the Eastern Dominance of the Final Empire on Scadrial. He is the father of Spook.', 'dead', 1),
(31, 'Margel', 'Margel is a skaa woman from the Eastern Dominance of the Final Empire on Scadrial. She is the mother of Spook and the sister of Clubs.', 'dead', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters_abilities`
--

CREATE TABLE `characters_abilities` (
  `id_character` int(11) NOT NULL,
  `id_ability` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `characters_abilities`
--

INSERT INTO `characters_abilities` (`id_character`, `id_ability`) VALUES
(1, 1),
(2, 1),
(3, 51),
(4, 1),
(5, 7),
(6, 14),
(7, 3),
(8, 11),
(10, 7),
(11, 1),
(11, 52),
(13, 51),
(14, 10),
(15, 52),
(16, 53),
(17, 52),
(18, 1),
(18, 51),
(18, 52),
(19, 15),
(20, 51),
(21, 15),
(21, 52),
(22, 52),
(27, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters_characters`
--

CREATE TABLE `characters_characters` (
  `id_character1` int(11) NOT NULL,
  `id_character2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `characters_characters`
--

INSERT INTO `characters_characters` (`id_character1`, `id_character2`) VALUES
(1, 22),
(1, 23),
(1, 24),
(1, 25),
(1, 26),
(2, 27),
(2, 28),
(2, 21),
(4, 1),
(4, 10),
(4, 29),
(4, 11),
(21, 28),
(21, 2),
(5, 30),
(5, 31),
(5, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters_groups`
--

CREATE TABLE `characters_groups` (
  `id_character` int(11) NOT NULL,
  `id_group` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `characters_groups`
--

INSERT INTO `characters_groups` (`id_character`, `id_group`) VALUES
(1, 5),
(1, 9),
(2, 5),
(2, 10),
(3, 5),
(3, 9),
(3, 3),
(4, 5),
(4, 9),
(5, 5),
(5, 9),
(6, 5),
(6, 9),
(7, 5),
(7, 9),
(8, 5),
(8, 9),
(9, 5),
(9, 9),
(12, 5),
(13, 5),
(13, 3),
(14, 9),
(15, 5),
(16, 8),
(20, 4),
(21, 5),
(21, 7),
(23, 8),
(24, 11),
(27, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ethnicity`
--

CREATE TABLE `ethnicity` (
  `id` int(11) NOT NULL,
  `ethnicity` varchar(40) DEFAULT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ethnicity`
--

INSERT INTO `ethnicity` (`id`, `ethnicity`, `description`) VALUES
(1, 'Skaa', 'The skaa are a race of humans on Scadrial.\r\nThe skaa were effectively created by the Lord Ruler when he forcibly divided the people of the world. Skaa were believed to be descendants of \r\nthe people who did not support the Lord Ruler during his rise to power, unlike the nobles.However, it is later revealed that skaa were \r\ncreated during the Lord Ruler\'s Ascension, when he altered the physiology of people. The majority of the people he changed became skaa; built \r\nto be shorter, hardier, and more fertile.These physical differences were small, and have mostly been erased by noble and skaa interbreeding \r\nover the thousand years of the Final Empire\'s history. All skaa Allomancers are the result of noble and skaa blood mixing during some point in \r\nthe person\'s heritage.\''),
(2, 'Noble', 'When Rashek held the power of the Well of Ascension, he altered the biology of all humans so that they would be able to survive in a world of \r\nash. At the same time, he also divided the population into two groups—the nobles and the skaa—with different physiological traits. As a result, \r\nin the times shortly after the Ascension of the Lord Ruler, the nobles were less fertile than the skaa, but were also generally taller, \r\nstronger, and more intelligent. These changes were slight, however, and had mostly disappeared as a result of interbreeding by the time of the \r\nCollapse.After his Ascension, Rashek also gave beads of lerasium to the original nobles, which is why only those with a noble ancestor \r\ncould become Allomancers.\r\nSince the nine original Allomancers were already kings in Classical Scadrial, it appears that the people Rashek turned into nobles were \r\nprimarily of high social status even before his Ascension.'),
(3, 'Terris', 'Terris was a state of Scadrial populated by Feruchemists before the Ascension of the Lord Ruler.\r\nWhen Alendi came to Terris to stop the Deepness from consuming the world, they took him up into the mountainous regions to seek the Well of \r\nAscension.When they arrived, Rashek betrayed and killed Alendi and took the power of the Well for himself.After realising that his \r\nAscension had ruined the world, he set himself up as the protector of humanity, beginning the time of the Final Empire.\r\nRealmatic theory was part of the ancient Terris religion.\r\nThe Terris term for Preservation was \"Terr\" as it meant \"to preserve\" in their language.'),
(4, 'Steel Inquisitor', 'The Steel Inquisitors were a type of Hemalurgic construct on Scadrial created from humans. Steel Inquisitors were created and controlled by the \r\nLord Ruler as the policing force for his ministries. The Steel Inquisitors made up the Canton of Inquisition whose job it was to control the \r\nuse and spread of Allomancy.\r\nThe most notable feature is the large steel spikes where their eyes should be. These spikes fill the eye socket and protrude out the back of \r\nthe head by several inches. Steel Inquisitors, like the obligators from which they were created, are bald with a large number of tattoos \r\nspreading from their eye sockets across their heads. These tattoos indicate many things, including rank and what kind of Allomancer the \r\nobligator was before recruitment. The Lord Ruler\'s Steel Inquisitors have eleven spikes in all: two through the eye sockets, one in the middle \r\nof the spine on the back, and eight--one for each known Allomantic power in the torso.'),
(5, 'Koloss', 'The koloss are physically very large and very powerful. Koloss have blue skin and red eyes.A full-sized koloss could grow to be as tall as \r\ntwelve feet. Koloss have a fixed amount of skin that does not change over their lifetime. Because of this, the younger a koloss is, the fatter \r\nit appears, due to having so much baggy skin covering itself. The skin itself doesn\'t hold terribly well to the koloss\' body.As the koloss \r\ngrow taller, their skin tears and fits tightly to them. An ancient koloss will have little to no skin at all, being covered instead in leather \r\nwrappings.A koloss continuously grows until its death. When it reaches about twelve feet, its heart can no longer sustain its body, and it \r\ndies shortly thereafter.\r\nSimilar to Steel Inquisitors, the creation of a koloss is very brutal. To create a koloss, four humans are stabbed with individual iron spikes \r\nthrough their heart, and these spikes are then placed strategically on to a fifth person. Once placed, the spikes turn the recipient into a \r\nkoloss \'very quickly\'.It is possible to create Hemalurgic constructs similar to koloss using animals instead of humans as a base.It is \r\npossible to create sapient creatures similar to koloss from primates.'),
(6, 'Kandra', 'The kandra are a species on Scadrial first created by the Lord Ruler during his Ascension. They have the ability to reshape their bodies and \nmost are well-practiced at imitation, making them extremely sought-after as spies.\nPhysically, the kandra resemble mistwraiths in their natural form. Unlike the mistwraiths, they are sentient, courtesy of two Hemalurgic spikes \nimplanted in them. While mistwraiths are simply gelatinous conglomerates of various creatures, kandra can actually absorb a body and take on \nall of its characteristics.\nWhen impersonating a specific person, a kandra will use that person\'s bones and reshape their body to look exactly like that person\'s. When in \nthe Homeland, most kandra use a True Body, which is a set of false bones that are crafted by a kandra artisan. Some True Body forms are quartz, \nand kandra show off their True Bodies by creating translucent skin that allows the stone to sparkle faintly in the light.A True Body does \nnot have to be human-shaped, but most are. Some kandra build bodies for combat purposes, these bodies can be made of metal to be stronger and \nheavier and can have sharp bones to use as knives.Combined with the ability to heal and create stronger muscles, kandra can be extremely \npowerful warriors though not all of them want to be one.\nThe members of the First Generation do not wear True Bodies, as the kandra did not originally know how to make them. Instead, they wear their \nown bones from before they became kandra.\nKandra form an organ which functions as a brain to think. It doesn\'t need to be inside the head, and can be placed at a safer location in the \nkandra\'s body.'),
(7, 'Mistwraith', 'Mistwraiths are a species of creature on Scadrial. They were created by the Lord Ruler from the Terris Feruchemists after he took the power at \r\nthe Well of Ascension.It is unclear if mistwraiths survived the Catacendre.\r\nLike kandra, mistwraiths appear to be amorphous blobs capable of absorbing bones and tissue of other creatures to gain shape. However, unlike \r\nkandra, since they do not possess sentience, their shapes are random and mix many different species into one. Contradictory to their typically \r\nhuge and unnerving appearance, they are actually quite harmless and only eat dead bodies.\r\nMistwraiths are people who have a blockage between the Physical Realm and the Cognitive Realm, which impairs their ability to think.They \r\nhave a lifespan of roughly fifty years and are able to breed.\r\nA single Hemalurgic spike is enough to staple a Cognitive Shadow to a mistwraith, though whether this has happened in the past is unknown.'),
(8, 'Southern Scadrians', 'The Southern Scadrians are a culture on Scadrial. They were placed at the south pole by The Lord Ruler during his Ascension. When he moved the \r\nplanet closer to the sun, he altered the physiology of the skaa to enable them to survive the ash and the warmer temperatures. However, he also \r\nplaced an unaltered group of Scadrians at the south pole to act as a control group for his genetic experiments.The Southern Scadrians \r\nlived there without any interaction with the Final Empire for over a thousand years until the Catacendre. When Harmony moved the planet back to \r\nits original orbit and orientation, it caused a change in climate that the Southern Scadrians failed to adapt to. The Southern Scadrians were \r\nat the brink of extinction until they were rescued by the Sovereign.'),
(9, 'Khlenni', 'The Khlenni were a people of the pre-Final Empire times on Scadrial.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `group_name` varchar(40) DEFAULT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `groups`
--

INSERT INTO `groups` (`id`, `group_name`, `description`) VALUES
(1, 'Skaa rebellion', 'The skaa rebellion is the name given to the group of skaa opposing the Final Empire on Scadrial.\r\nBefore Yeden hired Kelsier\'s crew to raise an army for the rebellion, Marsh was their leader.During that time the rebels hid runaways, \r\nplanned burglaries, organized raids, and kidnapped minor nobles.These rebels never expected to be able to overthrow the Final Empire, \r\nthey just wanted to achieve something grand to give the skaa hope.\r\nDuring the thousand years of the Final Empire\'s existence, there had always been skaa rebels.Around the year 700 FE they managed to gather \r\nseven thousand skaa and the end result was the Massacre of Tougier.There has never been a successful massive revolt.\r\nMarsh gave up leadership of the skaa rebellion when Kelsier was sent to the Pits of Hathsin.At that time there were about three hundred \r\nrebels in and around Luthadel and the Arguois caverns, including women and children.\r\nTowards the end of the Final Empire the rebellion was led by a skaa man named Yeden. Yeden hired Kelsier\'s crew to help overthrow the Lord \r\nRuler and his empire, and the crew played a vital role in the formation and running of the rebellion\'s armies during this time.\r\nBreeze led a team of Soothers and Rioters to help recruit soldiers from the skaa workers.\r\nHam, who had previous military experience, was in charge of training the new recruits and was the military commander of the rebellion until \r\nYeden replaced him.\r\nThe soldiers in the rebellion\'s army were hidden and trained in the Arguois caverns, near the Pits of Hathsin and the Homeland of the kandra.\r\nOnce Yeden replaced Ham, he led the rebellion on a premature strike against the empire\'s garrison at the city of Holstep. As they were \r\nreturning from their victory there, the garrison from Valtroux City caught up with them and ambushed the skaa soldiers, slaughtering everyone.\r\nDemoux and a small group of about 2,000 soldiers stayed behind in the caverns because they thought Yeden was \'acting rashly\'. Even though this \r\neffectively removed the rebellion from Kelsier\'s plan, they were eventually smuggled into Luthadel to help overthrow the Luthadel Garrison.'),
(2, 'Steel Ministry', 'The Steel Ministry is the religion and the government bureaucracy of the Final Empire. It is made up of various divisions, named Cantons, and \r\nthe members of the Ministry are called obligators. The Inquisitors are also part of the Steel Ministry.\r\nOne of the main functions of the Ministry is to witness a myriad of contracts and agreements, even something as simple as promise to come to a \r\ngame of shelldry.The nobility pay the Lord Ruler for their services in a manner similar to that of renting skaa.As the authority in \r\nbureaucratic matters, any mercantile contracts, divorces, weddings, land purchases, inheritances, or any other important dealings could only be \r\nauthorized by obligators. If one of the Ministry hasn\'t witnessed an event or sealed a document, it might as well not have happened or have \r\nbeen written.However, obligators are also used to witness less formal agreements, such as bets between friends.\r\nThe Steel Ministry is organized into subsections named Cantons. The priests are called obligators and the Steel Inquisitors are obligators who \r\nhave been Hemalurgically granted all the powers of a Mistborn. Each Canton of the Ministry runs a specific part of the Empire\'s government.'),
(3, 'Keeper', 'The Keepers of Terris are the major branch of Feruchemists on Scadrial during the Final Empire.Ruled over by the Synod, they copied the \r\npractices of the Worldbringers of old in collecting as much information as possible in their metalminds. They tried to stay secret from the \r\nworld, and the Lord Ruler, who would have them killed for their Feruchemical abilities.\r\nThe Keepers amassed knowledge of Scadrial from before the Lord Ruler and the advent of the Final Empire, in the hope of restoring to the people \r\nthe knowledge and heritage they had lost after Rashek took over the world.\r\nEach Keeper has access to all the stored knowledge of their order, and periodically returns to Tathingdwen, the capital of Terris Dominance, to \r\nupdate their copperminds. Also, each Keeper has a particular area of expertise, such as religions or ancient kings and leaders.'),
(4, 'Worldbringers', 'Worldbringers are Feruchemists who mainly used their Feruchemical abilities creating copperminds to become philosophers and scholars of \r\nreligion. Some studied other subjects, including Kwaan, who studied nature.Kwaan originally proclaimed that Alendi was the Hero of Ages.\r\nAfter the Worldbringers were wiped out by the actions of the Lord Ruler during his Ascension, the Order of the Keepers in the Final Empire was \r\ninspired by their memory, dedicated to preserving pre-Ascension knowledge of religion and other studies.'),
(5, 'Kelsier\'s crew', 'Kelsier\'s crew was a band of skaa on Scadrial that acted against the Final Empire.\r\nThey are initially hired by the skaa rebellion, and orchestrate the house war between the nobility of Luthadel, as well as raising an army and \r\ninciting mass skaa riots in Luthadel before killing the Lord Ruler and bringing down the Final Empire.'),
(6, 'Luthadel Assembly', 'The Luthadel Assembly is the ruling council of Luthadel that is established as part of King Elend Venture\'s new government after the Collapse.\r\nThe Assembly consists of eight nobles, eight skaa workers, and eight merchants. Elend set up this structure so that the common people would be \r\nable to outvote the nobles. In practice, however, the merchants held themselves separate from and above the other skaa. The King of the Central \r\nDominance presides over the Assembly and exercises a casting vote when the Assembly is evenly divided on a matter. If the throne is vacant, the \r\nAssembly elects a chancellor by majority vote to carry out these responsibilities instead.\r\nElend intended the Assembly to be an advisory council, whose members could voice concerns to the king and make sure the peoples\' voices were \r\nheard.He also, however, wanted the Assembly to be able to keep the king from becoming a tyrant, and gave it a fair measure of \r\ncounterbalancing power.'),
(7, 'Steel Inquisitors', 'Steel Inquisitors were a Hemalurgic construct on Scadrial.'),
(8, 'Obligators', 'Obligators are one Lord Ruler\'s religious leaders.'),
(9, 'Venture army', 'The Venture army is an armed force operated by Elend Venture.'),
(10, 'Ghostbloods', 'The Ghostbloods are a secret organization on Roshar, though they are not Rosharan in origin.Members are required to get a tattoo of three overlapping diamonds somewhere on their bodies.'),
(11, 'Camon\'s crew', 'Camon\'s crew is a group of petty thieves operating in Luthadel during the Final Empire. Camon is a harsh leader. He is perfectly willing to \r\nabandon any crew member who does not prove themselves useful. Camon\'s safehouse is their hideout.\r\nThe crew was formed and lead by Camon. Later Milev takes control of the crew after Kelsier removes Camon.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `abilities`
--
ALTER TABLE `abilities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ability` (`ability`);

--
-- Indices de la tabla `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `id_ethnicity` (`id_ethnicity`);

--
-- Indices de la tabla `characters_abilities`
--
ALTER TABLE `characters_abilities`
  ADD KEY `id_character` (`id_character`),
  ADD KEY `id_ability` (`id_ability`);

--
-- Indices de la tabla `characters_characters`
--
ALTER TABLE `characters_characters`
  ADD KEY `id_character1` (`id_character1`),
  ADD KEY `id_character2` (`id_character2`);

--
-- Indices de la tabla `characters_groups`
--
ALTER TABLE `characters_groups`
  ADD KEY `id_character` (`id_character`),
  ADD KEY `id_group` (`id_group`);

--
-- Indices de la tabla `ethnicity`
--
ALTER TABLE `ethnicity`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `abilities`
--
ALTER TABLE `abilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT de la tabla `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `ethnicity`
--
ALTER TABLE `ethnicity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `characters`
--
ALTER TABLE `characters`
  ADD CONSTRAINT `characters_ibfk_1` FOREIGN KEY (`id_ethnicity`) REFERENCES `ethnicity` (`id`);

--
-- Filtros para la tabla `characters_abilities`
--
ALTER TABLE `characters_abilities`
  ADD CONSTRAINT `characters_abilities_ibfk_1` FOREIGN KEY (`id_character`) REFERENCES `characters` (`id`),
  ADD CONSTRAINT `characters_abilities_ibfk_2` FOREIGN KEY (`id_ability`) REFERENCES `abilities` (`id`);

--
-- Filtros para la tabla `characters_characters`
--
ALTER TABLE `characters_characters`
  ADD CONSTRAINT `characters_characters_ibfk_1` FOREIGN KEY (`id_character1`) REFERENCES `characters` (`id`),
  ADD CONSTRAINT `characters_characters_ibfk_2` FOREIGN KEY (`id_character2`) REFERENCES `characters` (`id`);

--
-- Filtros para la tabla `characters_groups`
--
ALTER TABLE `characters_groups`
  ADD CONSTRAINT `characters_groups_ibfk_1` FOREIGN KEY (`id_character`) REFERENCES `characters` (`id`),
  ADD CONSTRAINT `characters_groups_ibfk_2` FOREIGN KEY (`id_group`) REFERENCES `groups` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
