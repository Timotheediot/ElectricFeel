-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mer. 11 nov. 2020 à 14:19
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
  `seat` tinyint(4) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `color` varchar(50) NOT NULL,
  `price` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `auto`
--

INSERT INTO `auto` (`id`, `id_brand`, `id_type`, `auto`, `power`, `autonomy`, `seat`, `description`, `date`, `color`, `price`) VALUES
(1, 1, 1, '208', 100, 340, 5, 'La nouvelle PEUGEOT 208 affirme sa jeunesse avec sa silhouette distinctive évoquant la sportivité. Son intérieur dévoile l’inédit PEUGEOT i-Cockpit® 3D. Enfin, cette citadine vous offre la liberté de choisir entre un moteur essence, Diesel ou électrique.', '2020-01-06', 'Bleu Vertigo', 31003),
(2, 2, 1, 'Zoé', 52, 395, 5, 'Un design moderne et dynamique, des lignes au caractère affirmé et ce qu\'il faut d\'impertinence... Nouvelle ZOE affirme sa personnalité et stimule votre quotidien. Portez haut les couleurs de l\'électrique !', '2019-09-03', 'Blanc Quartz', 24200),
(3, 3, 2, 'Taycan S', 560, 463, 4, 'Le Taycan est paré pour le futur avec son concept novateur. Il est profondément marqué par les éléments qui ont toujours caractérisé chaque Porsche : des émotions à l’état brut et un plaisir de conduite maximal.', '2020-09-08', 'Marron Mahogany', 109414),
(4, 6, 4, 'E-tron', 370, 417, 5, 'Audi ouvre un nouveau chapitre de son histoire avec la nouvelle Audi e-tron. Plus qu’un véhicule 100% électrique, la nouvelle Audi e-tron incarne une vision avant-gardiste de la mobilité : plus performante, plus connectée, plus agile, plus intelligente. Première dans l’histoire automobile, l’Audi e-tron se dote de rétroviseurs virtuels (en option). Conçu pour répondre à tous vos besoins, le SUV électrique Audi est équipé d’une transmission intégrale permanente quattro entièrement électrique offrant sportivité et motricité en toutes conditions', '2020-05-05', 'Beige Siam', 71900),
(5, 7, 1, 'I3', 125, 190, 4, 'Embarquez vers l’avenir. La BMW i3 est dotée d’une multitude de technologies innovantes pour dompter le quotidien. Elle vous connecte au monde extérieur, vous informe, organise et vous conduit aussi loin que vos objectifs vous mènent. Toujours parée pour la route et les nouveaux itinéraires, elle parle aussi à vos sens avec un design empli de style et novateur pour un plaisir de conduire électrisant.', '2013-09-10', 'Blanc Capparis', 39950),
(6, 7, 4, 'iX3', 210, 459, 5, 'La BMW iX3 ouvre une nouvelle ère du plaisir de conduire sans émission. Découvrez le premier SUV BMW 100 % électrique réunissant le meilleur de deux mondes : le dynamisme et la qualité supérieure de la BMW X3 avec les performances et l’efficience accrues de la technologie BMW eDrive de cinquième génération. Avec une autonomie de 460 km* et une consommation électrique à partir de 18,5 kWh/100 km*, la BMW iX3 établit de nouvelles références. Grâce à des produits intelligents et aux services sur mesure de BMW Charging, la recharge est plus simple, plus rapide et plus efficace que jamais. La BMW iX3, c’est un concentré d’audace. Au volant de ce SUV électrique vous profiterez du confort de la sécurité tout en réduisant votre empreinte environnementale. Vous n’oublierez pas votre premier trajet en BMW iX3.', '2020-12-15', 'Blanc Capparis', 72950),
(7, 8, 3, 'ID.3', 150, 550, 5, 'La Nouvelle ID.3 réconcilie performance électrisante, design novateur et autonomie adaptée au quotidien. Vous êtes en quête de changement ? L\'avenir démarre ici : montez à bord !', '2020-09-01', 'Turquoise Maui Noir', 37990),
(8, 9, 2, 'Model 3', 360, 409, 5, 'La Model 3 est disponible avec une transmission intégrale Dual Motor, des freins et des jantes 20” Performance ainsi que des suspensions abaissées pour un contrôle total, quelles que soient les conditions météorologiques. Un aileron arrière en fibre de carbone améliore également la stabilité à grande vitesse. La Model 3 accélère de 0 à 100 km/h en seulement 3,3 secondes.', '2016-03-09', ' Perle blanche', 49600),
(9, 2, 1, 'TWIZY', 13, 100, 2, 'Rien de ce que vous connaissez ne ressemble à TWIZY.\r\nL’électron libre ultramobile vous accompagne au quotidien\r\ngrâce à son autonomie de 100 km* et 120 km* en version\r\n45km/h. Pour le recharger, rien de plus facile ! Branchez-le \r\nchez vous ou sur n‘importe quelle prise domestique de 220 V.\r\nEn 3 h 30** maximum, la batterie est entièrement chargée !\r\n100 % fun à conduire, TWIZY vous offre des sensations…\r\nréservées aux twizystes !', '2012-03-07', 'Blanc intense ', 10000),
(10, 4, 3, 'Leaf', 62, 378, 5, 'Découvrez l’icône de la vision Nissan Intelligent Mobility et les toutes dernières technologies e-Pedal et ProPILOT(2) pour toujours plus de plaisir de conduite.', '2017-09-06', 'Blanc crème', 33900),
(11, 10, 4, 'UX 300e', 150, 300, 5, 'Créé pour incarner le plaisir authentique de la conduite en milieu urbain, l\'UX 300e est le premier véhicule tout électrique de Lexus. Disponible fin 2020.', '2020-12-23', 'Bleu Azur', 49990),
(12, 11, 3, 'e', 100, 222, 5, 'Premiere voiture électrique de la marque, la Honda e est un rêve devenu réalité avec sa combinaison unique entre performances dynamiques, confort raffiné et technologie futuriste. Conçue pour offrir une expérience de conduite exceptionnelle.', '2020-11-25', 'Jaune électrique', 38060),
(13, 12, 4, 'KONA', 100, 289, 5, 'Roulez à l’électrique.\r\nAvec style.Son design extérieur audacieux séduit par ses formes sculptées musculeuses, ses superbes\r\nblocs-feux à LED et ses détails uniques révélant son ADN propre aux SUV de Hyundai.', '2020-03-13', 'Noir Profond', 34900),
(14, 13, 1, 'Ami', 9, 75, 2, 'Respectueuse de l’environnement grâce à son mode de conduite 100% électrique, AMI accède facilement et sans restriction aux centres-villes. une nouvelle mobilité qui répond aux problématiques urbaines d’aujourd’hui et de demain', '2020-05-11', 'Bleu Ami', 6900),
(15, 13, 1, 'C-ZERO', 49, 150, 4, 'Cette citadine a été pensée pour faciliter la mobilité urbaine : petit gabarit, recharge rapide et autonomie suffisante pour couvrir tous les trajets quotidiens, le tout dans un silence qui fait oublier les bruits de la ville. Un vrai concentré de technologie et de créativité pour répondre dès aujourd’hui aux enjeux de demain !', '2010-04-07', 'Noir Profond', 16300),
(16, 14, 2, 'I-PACE', 294, 545, 5, 'Le couple instantané et la transmission 4 roues motrices permettent à la I-PACE d’accélérer comme une voiture de sport. Le groupe motopropulseur de 400ch CEE atteint 100 km/h en 4,8 secondes ; celui de 320ch CEE atteint 100 km/h en 6,4 secondes.', '2020-07-06', 'Rouge flambant', 70350);

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
(14, 'Jaguar');

-- --------------------------------------------------------

--
-- Structure de la table `electricTerminals`
--

CREATE TABLE `electricTerminals` (
  `id` int(11) NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `electricTerminals`
--

INSERT INTO `electricTerminals` (`id`, `longitude`, `latitude`) VALUES
(1, 5.37006, 43.2862),
(2, 5.59897, 43.5554),
(3, 5.38731, 43.2954);

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
(9, 9, 'https://i.postimg.cc/fy5p79kz/renault-Twizy.jpg'),
(10, 10, 'https://i.postimg.cc/nh5zYsQG/nissan-Leaf.jpg'),
(11, 11, 'https://i.postimg.cc/8z3YpGqC/lexus-Ux300e.png'),
(12, 12, 'https://i.postimg.cc/QtMfGxbC/hondaE.png'),
(13, 13, 'https://i.postimg.cc/TwD17nDc/hyundai-Kona.png'),
(14, 14, 'https://i.postimg.cc/pT6Q8QtY/citroen-Ami.png'),
(15, 15, 'https://i.postimg.cc/4N9CYBTP/citroen-Czero.png'),
(16, 16, 'https://i.postimg.cc/L84j5Qcg/jaguar-Ipace.png');

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
(1, 'citadine'),
(2, 'sportive'),
(3, 'routière'),
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
(1, 'tim@email.com', '$2a$10$VpEp8vkEIXpgUhDxm3sMauWtNvTQj5drtUFg3wfyV4vTUhuAq3c/2');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `auto`
--
ALTER TABLE `auto`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD KEY `id_type` (`id_type`) USING BTREE,
  ADD KEY `id_brand` (`id_brand`) USING BTREE;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `electricTerminals`
--
ALTER TABLE `electricTerminals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `optionCar`
--
ALTER TABLE `optionCar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `photo`
--
ALTER TABLE `photo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `type`
--
ALTER TABLE `type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `auto`
--
ALTER TABLE `auto`
  ADD CONSTRAINT `auto_ibfk_1` FOREIGN KEY (`id_type`) REFERENCES `type` (`id`),
  ADD CONSTRAINT `auto_ibfk_4` FOREIGN KEY (`id_brand`) REFERENCES `brand` (`id`);

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
