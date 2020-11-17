-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mar. 17 nov. 2020 à 12:48
-- Version du serveur :  5.7.26
-- Version de PHP :  7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `electricFeel`
--

-- --------------------------------------------------------

--
-- Structure de la table `auto`
--

CREATE TABLE `auto` (
  `id` int(11) NOT NULL,
  `id_brand` int(11) NOT NULL,
  `id_type` int(11) NOT NULL,
  `auto` varchar(200) NOT NULL,
  `power` smallint(6) NOT NULL,
  `autonomy` smallint(6) NOT NULL,
  `id_seat` int(4) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `color` varchar(50) NOT NULL,
  `price` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `auto`
--

INSERT INTO `auto` (`id`, `id_brand`, `id_type`, `auto`, `power`, `autonomy`, `id_seat`, `description`, `date`, `color`, `price`) VALUES
(1, 1, 1, '208', 100, 340, 3, 'La nouvelle PEUGEOT 208 affirme sa jeunesse avec sa silhouette distinctive évoquant la sportivité. Son intérieur dévoile l’inédit PEUGEOT i-Cockpit® 3D. Enfin, cette citadine vous offre la liberté de choisir entre un moteur essence, Diesel ou électrique.', '2020-01-06', 'Bleu Vertigo', 31003),
(2, 2, 1, 'Zoé', 52, 395, 3, 'Un design moderne et dynamique, des lignes au caractère affirmé et ce qu\'il faut d\'impertinence... Nouvelle ZOE affirme sa personnalité et stimule votre quotidien. Portez haut les couleurs de l\'électrique !', '2019-09-03', 'Blanc Quartz', 24200),
(3, 3, 2, 'Taycan S', 560, 463, 2, 'Le Taycan est paré pour le futur avec son concept novateur. Il est profondément marqué par les éléments qui ont toujours caractérisé chaque Porsche : des émotions à l’état brut et un plaisir de conduite maximal.', '2020-09-08', 'Marron Mahogany', 109414),
(4, 6, 4, 'E-tron', 370, 417, 1, 'Audi ouvre un nouveau chapitre de son histoire avec la nouvelle Audi e-tron. Plus qu’un véhicule 100% électrique, la nouvelle Audi e-tron incarne une vision avant-gardiste de la mobilité : plus performante, plus connectée, plus agile, plus intelligente. Première dans l’histoire automobile, l’Audi e-tron se dote de rétroviseurs virtuels (en option). Conçu pour répondre à tous vos besoins, le SUV électrique Audi est équipé d’une transmission intégrale permanente quattro entièrement électrique offrant sportivité et motricité en toutes conditions', '2020-05-05', 'Beige Siam', 71900),
(5, 7, 1, 'I3', 125, 190, 3, 'Embarquez vers l’avenir. La BMW i3 est dotée d’une multitude de technologies innovantes pour dompter le quotidien. Elle vous connecte au monde extérieur, vous informe, organise et vous conduit aussi loin que vos objectifs vous mènent. Toujours parée pour la route et les nouveaux itinéraires, elle parle aussi à vos sens avec un design empli de style et novateur pour un plaisir de conduire électrisant.', '2013-09-10', 'Blanc Capparis', 39950),
(6, 7, 4, 'iX3', 210, 459, 3, 'La BMW iX3 ouvre une nouvelle ère du plaisir de conduire sans émission. Découvrez le premier SUV BMW 100 % électrique réunissant le meilleur de deux mondes : le dynamisme et la qualité supérieure de la BMW X3 avec les performances et l’efficience accrues de la technologie BMW eDrive de cinquième génération. Avec une autonomie de 460 km* et une consommation électrique à partir de 18,5 kWh/100 km*, la BMW iX3 établit de nouvelles références. Grâce à des produits intelligents et aux services sur mesure de BMW Charging, la recharge est plus simple, plus rapide et plus efficace que jamais. La BMW iX3, c’est un concentré d’audace. Au volant de ce SUV électrique vous profiterez du confort de la sécurité tout en réduisant votre empreinte environnementale. Vous n’oublierez pas votre premier trajet en BMW iX3.', '2020-12-15', 'Blanc Capparis', 72950),
(7, 8, 3, 'ID.3', 150, 550, 3, 'La Nouvelle ID.3 réconcilie performance électrisante, design novateur et autonomie adaptée au quotidien. Vous êtes en quête de changement ? L\'avenir démarre ici : montez à bord !', '2020-09-01', 'Turquoise Maui Noir', 37990),
(8, 9, 2, 'Model 3', 360, 409, 3, 'La Model 3 est disponible avec une transmission intégrale Dual Motor, des freins et des jantes 20” Performance ainsi que des suspensions abaissées pour un contrôle total, quelles que soient les conditions météorologiques. Un aileron arrière en fibre de carbone améliore également la stabilité à grande vitesse. La Model 3 accélère de 0 à 100 km/h en seulement 3,3 secondes.', '2016-03-09', ' Perle blanche', 49600),
(9, 2, 1, 'TWIZY', 13, 100, 1, 'Rien de ce que vous connaissez ne ressemble à TWIZY.\r\nL’électron libre ultramobile vous accompagne au quotidien\r\ngrâce à son autonomie de 100 km* et 120 km* en version\r\n45km/h. Pour le recharger, rien de plus facile ! Branchez-le \r\nchez vous ou sur n‘importe quelle prise domestique de 220 V.\r\nEn 3 h 30** maximum, la batterie est entièrement chargée !\r\n100 % fun à conduire, TWIZY vous offre des sensations…\r\nréservées aux twizystes !', '2012-03-07', 'Blanc intense ', 10000),
(10, 4, 3, 'Leaf', 62, 378, 3, 'Découvrez l’icône de la vision Nissan Intelligent Mobility et les toutes dernières technologies e-Pedal et ProPILOT(2) pour toujours plus de plaisir de conduite.', '2017-09-06', 'Blanc crème', 33900),
(11, 10, 4, 'UX 300e', 150, 300, 3, 'Créé pour incarner le plaisir authentique de la conduite en milieu urbain, l\'UX 300e est le premier véhicule tout électrique de Lexus. Disponible fin 2020.', '2020-12-23', 'Bleu Azur', 49990),
(12, 11, 3, 'e', 100, 222, 2, 'Premiere voiture électrique de la marque, la Honda e est un rêve devenu réalité avec sa combinaison unique entre performances dynamiques, confort raffiné et technologie futuriste. Conçue pour offrir une expérience de conduite exceptionnelle.', '2020-11-25', 'Jaune électrique', 38060),
(13, 12, 4, 'KONA', 100, 289, 3, 'Roulez à l’électrique.\r\nAvec style.Son design extérieur audacieux séduit par ses formes sculptées musculeuses, ses superbes\r\nblocs-feux à LED et ses détails uniques révélant son ADN propre aux SUV de Hyundai.', '2020-03-13', 'Noir Profond', 34900),
(14, 13, 1, 'Ami', 9, 75, 1, 'Respectueuse de l’environnement grâce à son mode de conduite 100% électrique, AMI accède facilement et sans restriction aux centres-villes. une nouvelle mobilité qui répond aux problématiques urbaines d’aujourd’hui et de demain', '2020-05-11', 'Bleu Ami', 6900),
(15, 13, 1, 'C-ZERO', 49, 150, 3, 'Cette citadine a été pensée pour faciliter la mobilité urbaine : petit gabarit, recharge rapide et autonomie suffisante pour couvrir tous les trajets quotidiens, le tout dans un silence qui fait oublier les bruits de la ville. Un vrai concentré de technologie et de créativité pour répondre dès aujourd’hui aux enjeux de demain !', '2010-04-07', 'Noir Profond', 16300),
(16, 14, 2, 'I-PACE', 294, 545, 3, 'Le couple instantané et la transmission 4 roues motrices permettent à la I-PACE d’accélérer comme une voiture de sport. Le groupe motopropulseur de 400ch CEE atteint 100 km/h en 4,8 secondes ; celui de 320ch CEE atteint 100 km/h en 6,4 secondes.', '2020-07-06', 'Rouge flambant', 70350),
(17, 15, 5, 'EQC', 300, 475, 3, 'L\'EQC, premier SUV 100% électrique signé Mercedes-Benz.\r\nNous revoilà. Là où, il y a plus de 130 ans, nous nous trouvions lorsque nous avons inventé l\'automobile. Au début d\'une aventure fantastique. Voici à quoi ressemble le EQC. Fonctionnant uniquement à l\'électricité, et donc, sans émissions locales, sans aucun effort, ce véhicule est une véritable innovation.', '2020-11-18', 'Gris montagne', 79250);

-- --------------------------------------------------------

--
-- Structure de la table `auto_optionCar`
--

CREATE TABLE `auto_optionCar` (
  `id_auto` int(11) NOT NULL,
  `id_optionCar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `auto_terminal`
--

CREATE TABLE `auto_terminal` (
  `id_auto` int(11) NOT NULL,
  `id_electricTerminals` int(11) NOT NULL,
  `reloadTime` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `auto_terminal`
--

INSERT INTO `auto_terminal` (`id_auto`, `id_electricTerminals`, `reloadTime`) VALUES
(1, 1, 6),
(2, 5, 12),
(3, 7, 12),
(4, 2, 2),
(12, 6, 1),
(14, 3, 3),
(15, 4, 7);

-- --------------------------------------------------------

--
-- Structure de la table `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `brand` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `brand`
--

INSERT INTO `brand` (`id`, `brand`) VALUES
(1, 'Peugeot'),
(2, 'Renault'),
(3, 'Porsche'),
(4, 'Nissan'),
(5, 'Toyota'),
(6, 'Audi'),
(7, 'BMW'),
(8, 'Volkswagen'),
(9, 'Tesla'),
(10, 'Lexus'),
(11, 'Honda'),
(12, 'Hyundai'),
(13, 'Citroën'),
(14, 'Jaguar'),
(15, 'Mercedes');

-- --------------------------------------------------------

--
-- Structure de la table `electricTerminals`
--

CREATE TABLE `electricTerminals` (
  `id` int(11) NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `free` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `electricTerminals`
--

INSERT INTO `electricTerminals` (`id`, `longitude`, `latitude`, `free`) VALUES
(1, 5.37006, 43.2862, 1),
(2, 5.59897, 43.5554, 0),
(3, 5.38731, 43.2954, 0),
(4, 5.36197, 43.3798, 1),
(5, 5.34099, 43.3936, 0),
(6, 5.19356, 43.356, 1),
(7, 4.9899, 43.513, 0);

-- --------------------------------------------------------

--
-- Structure de la table `favorite`
--

CREATE TABLE `favorite` (
  `id_auto` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `optionCar`
--

CREATE TABLE `optionCar` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `optionCar`
--

INSERT INTO `optionCar` (`id`, `name`) VALUES
(1, 'GPS'),
(2, 'Ciel de toit anthracite');

-- --------------------------------------------------------

--
-- Structure de la table `photo`
--

CREATE TABLE `photo` (
  `id` int(11) NOT NULL,
  `id_auto` int(11) NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `photo`
--

INSERT INTO `photo` (`id`, `id_auto`, `url`) VALUES
(1, 3, 'https://i.postimg.cc/d3vV8z1Y/porsche-Model.png'),
(2, 2, 'https://i.postimg.cc/QdBhWXb7/zoe.png'),
(3, 1, 'https://i.postimg.cc/LsB7J7rf/peugeot-208.png'),
(4, 4, 'https://i.postimg.cc/8CfKPqH1/audi-e-Tron.png'),
(5, 5, 'https://i.postimg.cc/mrYNtR0y/bmwI3.png'),
(6, 6, 'https://i.postimg.cc/pX080vhq/bmwIx3.png'),
(7, 7, 'https://i.postimg.cc/4dSkLmGX/VW-id3.png'),
(8, 8, 'https://i.postimg.cc/PJJZHV0m/Tesla-Model-3.png'),
(9, 9, 'https://i.postimg.cc/htSqXsGp/renault-Twizy.png'),
(10, 10, 'https://i.postimg.cc/cCHn1wnH/nissan-Leaf.png'),
(11, 11, 'https://i.postimg.cc/8z3YpGqC/lexus-Ux300e.png'),
(12, 12, 'https://i.postimg.cc/QtMfGxbC/hondaE.png'),
(13, 13, 'https://i.postimg.cc/TwD17nDc/hyundai-Kona.png'),
(14, 14, 'https://i.postimg.cc/pT6Q8QtY/citroen-Ami.png'),
(15, 15, 'https://i.postimg.cc/4N9CYBTP/citroen-Czero.png'),
(16, 16, 'https://i.postimg.cc/L84j5Qcg/jaguar-Ipace.png'),
(17, 17, 'https://i.postimg.cc/BZx5mBqT/Mercedes-EQ.png');

-- --------------------------------------------------------

--
-- Structure de la table `seat`
--

CREATE TABLE `seat` (
  `id` int(11) NOT NULL,
  `seat` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `seat`
--

INSERT INTO `seat` (`id`, `seat`) VALUES
(1, '2'),
(2, '4'),
(3, '5');

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `type`) VALUES
(1, 'Citadine'),
(2, 'Sportive'),
(3, 'Routière'),
(4, 'SUV'),
(5, '4X4');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(1, 'tim@email.com', '$2a$10$VpEp8vkEIXpgUhDxm3sMauWtNvTQj5drtUFg3wfyV4vTUhuAq3c/2'),
(2, 'tim@tim.fr', '$2a$10$XbWfQsVRVLYU8rDQ2jZ4cu.P/7NmaR97S3W2tnomC1eFih9ExZiNK'),
(3, 'tim@tim.fr', '$2a$10$aHWyyNSUNu90ohqaCNxnQOrzVZVwQvD/YjQnYc1LIpLkIBF1tbO5C'),
(4, 'tim@tim.fr', '$2a$10$XhJz5CPyFWT22C7pmlCgL.gq8jl113XBBd001LNWgJVw8Q67BfqPK'),
(5, 'tim@tim.fr', '$2a$10$Mg07hxLQpi7gkgMQ5lwS.ugNM5ihPI2gA94nvwepzc.2Fo7WuLxP.'),
(6, 'tim@tim.fr', '$2a$10$F.TqvmPR37l4qtaF0fc/Gu46sjQ3WxwbonACMryKcHQaf4qcoV6Pe'),
(7, 'tim@tim.fr', '$2a$10$R2rbd310EnsoJ7Bi0OR1ieBCGEGo.ONKM4IsiQ8UYqXUxCCh6Gz8O'),
(8, 'zizi@tim.fr', '$2a$10$kZgmge0iiRi1zUxgrNefO.y.7Xt6WEWQMYvW1Qz8/QhiDCTVUC.PW'),
(9, 'zizi@tim.fr', '$2a$10$6nEJqfgrTb3Xzm6hHoXb8.GolGlC9fmOP9/W91lEqB1iBg8NxEReq'),
(10, 'zizi@tim.fr', '$2a$10$.x5O66OSNX/zDxoiboXjP.1YXAfxQgzLx9NP2bOp.aaL4HcoT40.2'),
(11, 'zizi@tim.fr', '$2a$10$5iwLUWwa/eqFS8pH2kpI1uZa2NEXRgUjk7KldlQMb6C3Al76kg8c.'),
(12, 'zizi@tim.fr', '$2a$10$HXRdl7xy5BzCQ/ldIHIi4OVWkjiImGbqPD4/mJDY.osNWvUBmNqlC'),
(13, 'zizi@tim.fr', '$2a$10$5NXv5mzIC.PqTUzUsHv4uOGDiaHfqF10XhaoLc.eceLY20DHj1pJC'),
(14, '', '$2a$10$yBsPz7JmnE9whC2KDy5pL.9bPYbu9spuenFr8/X9L/yQVu8zM65/C'),
(15, '', '$2a$10$CeDwuZIWwKLQKk/PqxO.TuBLUZ1yDcAXMXiFYyIjQ/nGpzXb.5COu'),
(16, '', '$2a$10$1snIDDMvuk6CmmzHNvbaOerlGoQ.zfyGm39sYNgjbusWGl7PxyGX6'),
(17, '', '$2a$10$HlhKqqu82pCij0/6nvZWReRgg8gbZdt9bp3uut7heLA.6TGhTrabO'),
(18, '', '$2a$10$jCBcoDZxsSoC9loaX05XKuzozL8xE7.KU/k8n9AYNIeC1j///KO9m'),
(19, '', '$2a$10$l/DQLLTqbWKp/.HNTK2BV.O00CZm32EntHz/9zlOZs7icn80dIbdm'),
(20, '', '$2a$10$v.oUWHjcEvIkY81SQnN7WuJxjuy84M970rBBMVhIKVrSjM3twvY02'),
(21, '', '$2a$10$dNcKiOwDIgPkHOr1ex5RtOPgwtk3r4UvKKdHVrjsPdzjbhDGRkWZG'),
(22, '', '$2a$10$Wz0mw/zy/XQ3.D1F/loKCeBv3xTYgEo.MaX8dACdiGNqtbkOR/BxW'),
(23, '', '$2a$10$hb4TbrPZK5Qh2TVOzans0e3GTjsEraSLCwyanyvuZpGCvoXMyY9r.'),
(24, '', '$2a$10$Lzx/vUVK1FLXwPGl7sy.sOSo/8r59/HoNGaf0mEv4YiUqHR43gkVm'),
(25, '', '$2a$10$OdFSPLL6kG0rM/g1hw6VB.hXAsgFZQwx3tlsnTZTYGv4IPxsaC7KS'),
(26, '', '$2a$10$xB5zcIq37M9t.NNYeOxWNeZvYkqKfMJ5uoAe6ESsJWAMH0QRQd5aa'),
(27, '', '$2a$10$6wG4v5NuZ3Zkq2PWhIjqeeDv9O/9p6ztgMc8YAu7aAwFJIlZ7svzm'),
(28, '', '$2a$10$qoctP4veuXCldt/sTDqdfONam3XMe9U935yFOgMBMc0kR2nKOx5qS'),
(29, '', '$2a$10$PO677vVkuSrj400092IxZ.AmZeuk0UJp4jrWqTrkrjIHRCHE9UuO2'),
(30, '', '$2a$10$77/pljZ/RJf/2GNbrGFSIO9xb9dmmpiBcXKkFWJkzyu.WQwd1eNom'),
(31, '', '$2a$10$xJkfwCQUghbPD2keSmHRcumhZea.5MvL8wueJd07ayyj4P5vhdZ92'),
(32, '', '$2a$10$yl7qCAbC7.i17OA313lOheCRwWLBBvfv/C33KTL0hSEp/vOOqgVe2'),
(33, '', '$2a$10$0sKCP8FTugtYxEHcguxYXuAynO7Jsle4isSbxTW/64jrmNTA8MJq2'),
(34, '', '$2a$10$DFH84UGsF68Ld/O.kth1JOENjTb35Hi0geCXOYEZ7vmA4jQxinv92'),
(35, '', '$2a$10$zysSWEuXa0biOQnKuBUpqOqsYCIEPltkUYwV2palFrH5xGzrYDHEu'),
(36, '', '$2a$10$rQYYI8eqHdWk1agXOw21G.vAVZ1tL1WYBk2MXbt4aqVi1k.Z7s8c.'),
(37, '', '$2a$10$N0Uz1IDspZ8Zqes4Nkwph.4gw/LzeOU1Efs0/HXdi7P01tEQFTfbW'),
(38, '', '$2a$10$aEHfivdXgzXOVW4f2rtJK.yj6.379d6gn8SoccpbfOAvfLse7xumW'),
(39, '', '$2a$10$xmRMbkJArH0rSsHedelCc.Nb/uDie4sOJqSehAn7NH8ZtI0mj1Y42'),
(40, '', '$2a$10$LKfRlcOJ3FshGfRp0PnJ7.I3.zAHRrVwfOnqF13ceK63pj8j/2P1e'),
(41, '', '$2a$10$pSHX9LQ1LlG6gYQNM4Ynie0jvq35PkaZ3vIWh1rmHoiHSCwNqLqOi'),
(42, '', '$2a$10$7xkFu/RTb45cYM9z3r4TYuk6e0.pt/UsuYcASoCEe.L0/eSnlf05u'),
(43, '', '$2a$10$u/9mb8/LCGuR84QYqnd8VunOB2kLkRr8LJ7zdOgjJL8gnoDWC2Vvu'),
(44, '', '$2a$10$q6QZuidu9z0r4f07vh8xluo47WQ9RNgCM7IziIDtxZNE.9bgBhPlK'),
(45, '', '$2a$10$1b.EYAwwN8maWYna70cc9.dp6P2JWWVhBwh9H6Dp8LEHkiBu9jJCm'),
(46, '', '$2a$10$mUpqrfr0mtPB3V6kHzMof.JyF4iNc0PJS9lqeClfEVoGl9Su2nuTO'),
(47, '', '$2a$10$PQygRN/EJv4THIVqhl3MxOYEw9t3rDD7dn5.YwqPN3Ap.49NFnhVu'),
(48, '', '$2a$10$cUdBPRbN6lsoSGYw/UO2d.MwRahLSxBkWeDQzs.pWikyyduJTlPFe'),
(49, '', '$2a$10$rHwTIr.MPmKpSTOcJYJTEe8XdXxbMh4/Om0coREOasQIXlcNO0nRC'),
(50, '', '$2a$10$mD68h87o5aNnWI.mimfCi.g3tLVkOXHBYgwz1qlEPUeqzm8JZF5Me'),
(51, '', '$2a$10$yA8TSXg8rckrgdAg5CGDVOsV/ZrOT7dUsokkYNUURhEmJIyjralpG'),
(52, '', '$2a$10$/vCc18U2Vjyq.sDjSxR5vOJzGUauGZQmEnCPJRDgeFLO0wZLuHMPW'),
(53, '', '$2a$10$5xSFywv/qisUdUQFoNBWtOOXA1ABwi4/tDfuPPz4IlxgkkzBpl3nO'),
(54, '', '$2a$10$VpcUzdWhrpJCUzkL4G9K9.lbjvR5HAlIrGz.O6Zx7/W9wliF1Qh.m'),
(55, '', '$2a$10$LG5qy.iZWRgYLW/jayEZguPdYcq9ngAuolaqp5sk4TMPPaiBhauiG'),
(56, '', '$2a$10$2.dB7TyxW8zowJWJirei9eDl.AammQhaqwbNP9/BbZy19D6qKQg4u'),
(57, '', '$2a$10$axZQa1RaNRfaxvBqDctAiuiULJDVdELSShYFQnelgO62Zhmd3MCnm'),
(58, '', '$2a$10$P2cyDj8JI896F3VsyUCMXucGQTvskVCfmCAW1kfGdzq8fr.nhmW4e'),
(59, '', '$2a$10$qHi4dQm8VlFIt5EOw2qRgO4xQTKNapShsIzYLaRmrBRz5GPrX3KH6'),
(60, '', '$2a$10$GS6VsX.BSbzs19hJAU4nieavFNzi4/HLeFu7.TUthKnz0J/SPNSYi'),
(61, '', '$2a$10$KVEl6MaIw8sMa46XXtWuDePepRomfSPb.AQEdxoXX9X4OXnb9RTk6'),
(62, '', '$2a$10$z4kGJCFv5AOhU8j9hTRXAOnzV2X6Txg/VHB26kqz7LjHJfiStLmD2'),
(63, '', '$2a$10$m9mh9UAC33NkIrWiePy...QYtHnNwMb6AOZuf9hRbqVjgu4im3p3S'),
(64, '', '$2a$10$inQQPa9RXUkfbG0TRbzGguCOxlv5yDXxgG0FVMILYWUkW7uRazKzi'),
(65, '', '$2a$10$/SjlmsXvXHxneDSQ6iBtIeu4/iNS4CtmRBC1v.VszwmGcJ.UhGZJW'),
(66, '', '$2a$10$ubqOAIrtR2N99sG.i3.OfeefklftDI9hmialLlcyKQSYsxZ3QzvMa'),
(67, '', '$2a$10$b4KuaR1emg6Yv7o1c8jPuuNYYPe7WNyFgx7/kSu6voOhGMlcV8uI.'),
(68, '', '$2a$10$6oCFnqTSpkmhCw/VsOBa0er9lnAM1lugAg/Rg5QiD.qMDLIP.cfau'),
(69, '', '$2a$10$N7.U1Pc0QfTu6FtoIFmgpOtxYElYZGwniny84XDhbc.MIj6O9iI/G'),
(70, '', '$2a$10$3Xo37vOJ5jPPTnYzx3HY9ejvShI5nq6JQ0G1FXiDvcOZBKJH/7XtG'),
(71, '', '$2a$10$wN5hksMBQgJy.jAXApUInuKOZRGLWJlXAIaH4uUqOXNMyMhp6Vhaa'),
(72, '', '$2a$10$KZHsFkh4W8YuAQlbmM6PbOatAxhGSLBReLzPNd4WDe8SsldGdVuRG'),
(73, '', '$2a$10$rk3Y0KGLefzBFcrD491WYe5z3z/C0lAsqltHhm.RSFOi3Hc8IVJR.'),
(74, '', '$2a$10$OMPVu5AMge5sr4IHbIXKHOia1Onvn7WqU7Ulner.mXWp8.LfDYFhy'),
(75, '', '$2a$10$THUOHxYECjKJ.C51xyLn.O9iKqOARSIcsycAipnui2ff3I8tnIf2i'),
(76, '', '$2a$10$3fm6sfogMek14dCdUsEKvOnAnMX5CJ4OR5qLZTKHnrwh4hT7KqnoW'),
(77, '', '$2a$10$hHIFoKU.mcKFiQtni2Cz7.LeS5dsqcahv8CCoigcPMCEue8YybYcu'),
(78, '', '$2a$10$efuvHwohIYlC5R8YsupBmuzj8rSTSD3osHGsd1a7RMfxcLUvnHaKm'),
(79, '', '$2a$10$0VySywuumfe6mu.09Q3ZF.OJ83LBrYzbveLUJAOeP329w5Dbw16zy'),
(80, '', '$2a$10$nTcW33LgU5IMz/rjyOS5M.9QMzqg5AXKLu/b/2/w901OCv9LPgHb2'),
(81, '', '$2a$10$aI/z1r8Uxz81npSA4/Ztyeaubm1lW9V2VDwDEm8rVVnT.14wK6vN2'),
(82, '', '$2a$10$tFlK4PV0MNkyECFxiz/sMeCyHbHrl/A41yWeqkOm7jZ5f6Bp5JSWu'),
(83, '', '$2a$10$6dWVYhFi8jIE.kbQQwub/uQo9C.XplyNUPWhp4fMlqqgGE0Belepm'),
(84, '', '$2a$10$cHywHZOorJcGAePu4fJMKOSmKq9bXQVfZk01NNsPiRCTzUJ9614ZS'),
(85, '', '$2a$10$/nmMasusrLxEnfNWqfynyeq0CjF409LLWZaGwp8JZLSnWut7Fk3zG'),
(86, '', '$2a$10$omEykc1iEOJdC2O0IM7Zx.Fib1hoCfnh4dzzW4.OsSLPPmvopQfPe'),
(87, '', '$2a$10$3qEOYPrDIOFlllL7olRlPO1z.EWnbak08txOo5peODODL8c3qdWWO'),
(88, '', '$2a$10$kgYe9SEtzVtFbqi65bzIOueNnSVrcP0jPKMmg0.qQdBSEKxoIio/u'),
(89, '', '$2a$10$KbPUHqfQFZUjCZdrWD/DxeSTKpBbjIYO8ZEFXX/Wf.MGaTC3qab32'),
(90, '', '$2a$10$ST3e5hY2OQmWlavCZR4.COYGyY5Mir1s/EwUVwLyBJVFTeNIzH1YG'),
(91, '', '$2a$10$8Wng9qJsMLHJTa8SPGlnNOvY6chcHV2NXtVSdKIIWZxo/L8p5cqeG'),
(92, '', '$2a$10$Bz0TX9iM.DKMPxOyujIE8OaJwn6KjZ6WmKj7IEXubb6NtUe0iJkHO'),
(93, '', '$2a$10$BgDOFStqhSJcTbAQguXJwefQUJnB5fJIJpfNM7RUgi3meDCyrQ.Ma'),
(94, '', '$2a$10$G1tav/enJrq.O5oP00GuPeFK4e.qid8o2HlmGD3DqhomHG9JzbTRu'),
(95, '', '$2a$10$LRfhgiN2gAG8WHy9OXP1z.BEgp9JETipdPsjl4j4yDZ9ChRZpwmsy'),
(96, '', '$2a$10$H7AZV732pW4x2x8bh18gBe6uNvrhn.UIzSTuYtyvgLA.MLKU/D7t6'),
(97, '', '$2a$10$fbkgo1sGOyYdCH7wDS6wWOYXcVYMj5EnU9CeP8fW5TZQGWjZTqDx.'),
(98, '', '$2a$10$I/YidIxCrZeiUA4Naz.6hewSCPpXCAIly42R1wUWGjMWqItq66q7C'),
(99, '', '$2a$10$j3w9jajwV9fox5SSNrz9/e4pSaa0PzdBedAQTt1FiRM3W1s3i.1ve'),
(100, '', '$2a$10$bA4ncpSQ5ZBVtp4xz2OUTenj1P55ZKhaDux7zxMzImY.JXMWrLYES'),
(101, '', '$2a$10$k5I9WC3XPrnpo0b8AWneJukPCV6sBvDljTH9BK.MVVyBpo78VmBuC'),
(102, '', '$2a$10$qPDvie2Fppi6vNO.pUjqs.18W9eAnoHdvsI7zeRTDKxSuVXRnBnKW'),
(103, '', '$2a$10$s457TQ7bui0H2dNLHV0dcuyHsTTIR7x5tLJ/3/JkKl1GozvYjt6Oi'),
(104, '', '$2a$10$dEWxSlWLuWZJSmc7.PZ6/O6/M1AqnlJuJ.hYJ/fTF8b4rzvBjFLlS'),
(105, '', '$2a$10$34OukZrKHz21o9BEtXsnueZVo9B.nvplZHs4PWGCcgpLlerjOc03O'),
(106, '', '$2a$10$cD6jzq4bkcm0qoAyISc7K.ucSf.4pf8sldQ0pMZxMibBEzQAT1PWW'),
(107, '', '$2a$10$A8I1knJaqeICWaQeNnZRuu9O7.0Pv9z6Vdh6QoKjasm.gTFr.sHXm'),
(108, '', '$2a$10$fece4DjB2jr1eAfu2Bwej.6TvNsCl1YKIdku5ntlGRQxVcvBf23qe'),
(109, '', '$2a$10$mOBnHHjO/7avdYftf4a1cOVd.swakNt2pTgdIM/ffU4ABKjVlyPuW'),
(110, '', '$2a$10$S7iQO1777j20saTNi/qb/ulwkteBDnIFnGPMJeZ.nBQQMHquVibYO'),
(111, '', '$2a$10$vmppCAdLXLAp2zYEGQ8h6Ogd19NQMVEyaZFtVUOD.Bf0b7dYn1Im2'),
(112, '', '$2a$10$d3mP5poEc9JlTMROyIvvT.OHCPx/ptPkJ9oCRUfsE1eygoOpViuNW'),
(113, '', '$2a$10$YmB8.GiUNBTl65IRqJZ4PODeZdN3C147WNFeu7S25YMUfWIrIUJDK'),
(114, '', '$2a$10$xIK07LbjsWi7LYfIV5iZU.6oilM.6ppX4GzI/AoKt1w.y6Rlx8yW.'),
(115, '', '$2a$10$wGJnCBqvB2p2AZ54mh6J.udMV8MY5LWkdfIf7IBb9MWYeBlH1AmWO'),
(116, '', '$2a$10$G7uiBfcaW4BxZdWmXPOHWu8ZIfFiTeXZbcu3z4xLNGkLFeK23utU.'),
(117, '', '$2a$10$R8mLLzCkOr0rERfZHeWxte229kKkr5UfKpTSP4srdb4Ab2Tyc0FMC'),
(118, '', '$2a$10$J1o.5nHI.Qy57eiNjQZzfuFHqAIO.KNYUuiy0Ii5OJDoZC.QobR5m'),
(119, '', '$2a$10$j1i57gpz.ahc7aspBKabwetdMDnnxKX9m1DDuEH9mHc.rdTAGFxyy'),
(120, '', '$2a$10$nb4FoJQIG0uA3dsjpyU9GurVq96sCBW30MCwtVMldnjhOvmNeEyPq'),
(121, '', '$2a$10$aPfcLQPNaN/OOCy1ItlgUeZ.Qyf18bCE2aAW4Eugsp6vIiHE.Gr2a'),
(122, '', '$2a$10$Hv/32jjDv2C21HGgUpwEVeZfUpke/zA.OdPFP5Zl5aK6xVAdbUBBu'),
(123, '', '$2a$10$MPyYQTQfOOYiz.3VIUrTAeRPItM9xt0XRhaUyjr.PkZOm/JCzoP/i'),
(124, '', '$2a$10$NIbWuE4ty6yZI4mVYMhQ3ODTwgmMHke3Zl3G.5qMgU/NoncPZ/QKm'),
(125, '', '$2a$10$qNJ6qWU.bwSzT1zOLQOW6O0MpLsb.q/i8jSHtCxc4dP1IqbfSNMiG'),
(126, '', '$2a$10$3TWZmPRKrLE6kzUd/hvHJ.Eeg5vS26UtFzdIYzXC1PxZP/aRZL8eG'),
(127, '', '$2a$10$7XLu7SIPbTB1nE7arW9LouZb6/PijZ7jnAn0Emgd0iOXBr3cQ5CZC'),
(128, '', '$2a$10$kEMmGJcDM6IXkgfWc5z.DOmbmrH1e/27U0D3I3oTGDEeAVFOkELru'),
(129, '', '$2a$10$/DrJWJ0bcfY/PmTZQw2vPeb0BhMzo499jS/wPvviRHOqh2fGcrw5S'),
(130, '', '$2a$10$UMGgw9hseU.IKXhvwrzX.e6Y/6ynDGCM0eMJDgxdJQ9w.318o4MMy'),
(131, '', '$2a$10$8F57tkE8TwxlpB.0w9TOqONtKnA89HZw6irFTn3NbgMczwlMwKILu'),
(132, '', '$2a$10$4de0DOLwOtY92pyVEzJYzu6Vl5YM.xpVfcp2YKLjV1f4JGgOFxOF.'),
(133, '', '$2a$10$A/G99Y3k0fHDKlNJeZL8fOQ7IS9YbH0mhPd3QyNqM5SK/MbrHVhCC'),
(134, '', '$2a$10$cLOJmh/7pvwbSPOsUxind.5JgqNny93ub8SYG2vRu/33.tzeKu97q'),
(135, '', '$2a$10$fUNA5o.fQ/5pQPi6NqK4hOULhbVUlUTV1rKU9yPyS24zM6r4xHAna'),
(136, '', '$2a$10$Z9lwHzC5kcE.KS8/IgHFZuCO1CQYYuwiWneWMggKX3Iej5VndfvGi'),
(137, '', '$2a$10$CCNefpzhMJ33dM4OxTMxUuYiJcuY2Qw8vPeTZOrJabOv/tXmyDgoq'),
(138, '', '$2a$10$Ix9a9zHnwss4fvojwMQxi.bP4r7SU7fQ/V4mB402Ig3yacEXjeY/C'),
(139, '', '$2a$10$WzJNQBObFeyV.qBOKy8Vgeg50wMa9chTpAiugOP/yXm4LZVkXU.B.'),
(140, '', '$2a$10$727kwWeAKg41ifPtEwgJxOSknfA8fUwhsjaVOHaTdFnKAjOp6nmj2'),
(141, '', '$2a$10$WJvMdHWOhlD884sEt/W/uOE1yi13dj1iLPz4/wgDtB71QfsR3297G'),
(142, '', '$2a$10$zHAMY4U47nDbuT6tv.3cvOSjlcklIn6QO6BTYSxKQOTyicDapONra'),
(143, '', '$2a$10$70sizygF0ptBWnFw6FxGouDUxXoxav4DTopA8Yyqg4vLWkT.ONlq.'),
(144, '', '$2a$10$qI48zkriDmXkbI9loKY96u7CGCQEgmOw7YqLfaN4pw5jVjPZ.0DKm'),
(145, '', '$2a$10$z7MN9xLQeRwSG/pwFAnYqOkFnTgnxa4lFt3jZlRgzuO0r1XQWV8.2'),
(146, '', '$2a$10$orEVYBsDyL6hVtNi9aE.4OfO1XG860bVx/E0J1T4GOZdT0yjdlrLS'),
(147, '', '$2a$10$yx39c4c.QmbWZHzCNCxbCuk.qPbSKRKGCaB34u7rgtgMm.YeBkvtq'),
(148, '', '$2a$10$atSGVcNYJ8O.vXmJFFOwdeqDTqQOwJIN9QFWJU3r78ODDePiGJhr6'),
(149, '', '$2a$10$pV/kX5QIHu6x3T/CVX7Yp.eznJ2t1bSOhxT0j5kAqQesWixJc8u6e'),
(150, '', '$2a$10$EPOP4K75.lTIvpWoXjT1s.foKrOiYAtISPFx5TtB/ZS5XDsTwSD46'),
(151, '', '$2a$10$128u1HtWzoxuz4xJZazS0eaTSU0msSJM1GbJpqSUnVHv5ZGi1dIsK'),
(152, '', '$2a$10$RXKMiU.qYf2tSm2j2xg/9.lGtzpO7HbdRj/p3sfHfqduV4838GmGW'),
(153, '', '$2a$10$ojwV9sk5HULeyVriRzN5d.3ZqR3tcIx8oID4gtNZv03Irp92k5Od2'),
(154, '', '$2a$10$xuU/uwQyormv6Z36R.uIeOCw0H.U60gKHisCBSLPzST4KSeXik1ay'),
(155, '', '$2a$10$tTYFOdhY6LsJnFOMqae9luBHcNlF5XGOciWX7zm7FxQBzHg2hxo.u'),
(156, '', '$2a$10$6iZN8VDV8XFZ0owXYJSV8e9PYRUEiTntHwwsMMrIL81X2cEP.JNBm'),
(157, '', '$2a$10$QZETJUTBNT5tnbuEznXmROQSnSRt6aSeYqwlsoymW5bvd52oF85l6'),
(158, '', '$2a$10$.OqiOCVSpUg8HSTV/Yl3oeFvN4PZgGf19K0p/zTgQmMx7Vz4n4OMW'),
(159, '', '$2a$10$SU0fgPuBKswdUde8aPap5OoSnOEt/JNQKT/tNXIRL/HdrdB7MPVxG'),
(160, '', '$2a$10$CaaE0Zk8mlpfn56LYMx1eeNBzQwDZfL5gXvkznkVWXSHBh.yVX7da'),
(161, '', '$2a$10$NUJ47NWbpzmyYYx0Qf3XtOBlz8GZLMtldK4XySGn1fYOiXglWG12K');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `auto`
--
ALTER TABLE `auto`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `id_type` (`id_type`) USING BTREE,
  ADD KEY `id_brand` (`id_brand`) USING BTREE,
  ADD KEY `id_seat` (`id_seat`);

--
-- Index pour la table `auto_optionCar`
--
ALTER TABLE `auto_optionCar`
  ADD UNIQUE KEY `optionCar_id` (`id_optionCar`),
  ADD KEY `auto_id` (`id_auto`) USING BTREE;

--
-- Index pour la table `auto_terminal`
--
ALTER TABLE `auto_terminal`
  ADD UNIQUE KEY `auto_id` (`id_auto`),
  ADD UNIQUE KEY `electricTerminal_id` (`id_electricTerminals`);

--
-- Index pour la table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `electricTerminals`
--
ALTER TABLE `electricTerminals`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `favorite`
--
ALTER TABLE `favorite`
  ADD UNIQUE KEY `user_id` (`id_user`),
  ADD UNIQUE KEY `auto_id` (`id_auto`);

--
-- Index pour la table `optionCar`
--
ALTER TABLE `optionCar`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `photo`
--
ALTER TABLE `photo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `auto_id` (`id_auto`) USING BTREE;

--
-- Index pour la table `seat`
--
ALTER TABLE `seat`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `auto`
--
ALTER TABLE `auto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `electricTerminals`
--
ALTER TABLE `electricTerminals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `optionCar`
--
ALTER TABLE `optionCar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `photo`
--
ALTER TABLE `photo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `seat`
--
ALTER TABLE `seat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `auto`
--
ALTER TABLE `auto`
  ADD CONSTRAINT `auto_ibfk_1` FOREIGN KEY (`id_type`) REFERENCES `type` (`id`),
  ADD CONSTRAINT `auto_ibfk_4` FOREIGN KEY (`id_brand`) REFERENCES `brand` (`id`),
  ADD CONSTRAINT `auto_ibfk_5` FOREIGN KEY (`id_seat`) REFERENCES `seat` (`id`);

--
-- Contraintes pour la table `auto_optionCar`
--
ALTER TABLE `auto_optionCar`
  ADD CONSTRAINT `auto_optioncar_ibfk_1` FOREIGN KEY (`id_auto`) REFERENCES `auto` (`id`),
  ADD CONSTRAINT `auto_optioncar_ibfk_2` FOREIGN KEY (`id_optionCar`) REFERENCES `optionCar` (`id`);

--
-- Contraintes pour la table `auto_terminal`
--
ALTER TABLE `auto_terminal`
  ADD CONSTRAINT `auto_terminal_ibfk_1` FOREIGN KEY (`id_auto`) REFERENCES `auto` (`id`),
  ADD CONSTRAINT `auto_terminal_ibfk_2` FOREIGN KEY (`id_electricTerminals`) REFERENCES `electricTerminals` (`id`);

--
-- Contraintes pour la table `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`id_auto`) REFERENCES `auto` (`id`);

--
-- Contraintes pour la table `photo`
--
ALTER TABLE `photo`
  ADD CONSTRAINT `photo_ibfk_1` FOREIGN KEY (`id_auto`) REFERENCES `auto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
