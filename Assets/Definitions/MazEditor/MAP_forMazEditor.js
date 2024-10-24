/*jshint browser: true */
/*jshint -W097 */
/*jshint -W117 */
/*jshint -W061 */

"use strict";

/** Decals */
const DECAL_PAINTINGS = [
    "1942_200", "1942_201", "1943_200", "AA100", "AMC2", "AMC3", "ActecChallenge2", "AirWolf200", "AirWolf201", "AirWolf31", "AlienKong", "AlleyKat", "AmberMoon200", "AmberStar200", "AmberStar201", "AmberStar202", "AmberStar203", "Amiga", "AntAttack2",
    "AntAttack200", "AntAttack4", "AppleLisa", "Apshai10", "ArabianNights1", "Arena2", "Arena200", "Arena201", "Arnie200", "Arnie201", "Arnie202", "ArticShipwreck2", "ArticShipwreck7", "AtariFalcon", "AtariST", "Athanor200", "Athanor201", "AticAtac110",
    "AticAtac111", "AticAtac112", "AticAtac113", "AticAtac114", "AticAtac115", "AticAtac116", "AticAtac117", "AticAtac130", "AticAtac131", "AticAtac140", "AticAtac200", "AticAtac201", "AticAtac202", "AticAtac203", "AticAtac204", "AticAtac205",
    "AticAtac206", "AztecChallenge100", "AztecChallenge101", "AztecChallenge110", "AztecChallenge111", "AztecChallenge112", "AztecChallenge130", "BC10", "BC103", "BC11", "BC90", "BackToFuture200", "BackToFuture201", "BackToNature1", "Bagitman11",
    "Bagitman90", "Barbarian100", "Barbarian110", "Barbarian111", "Barbarian112", "Barbarian13", "Barbarian130", "Barbarian131", "Barbarian3", "BattleChopper", "BattleThroughTime2", "BeachHead100", "BeachHeadReplace", "Belwothe",
    "BeyondForbiddenForest110", "BeyondForbiddenForest111", "BeyondForbiddenForest2", "Biggles2", "Blackwyche110", "Blackwyche2", "BladeRunner", "BladeRunner7", "BlueMax11", "BlueMax20", "BoogaBoo11", "BoogaBoo4", "BoogaBoo41", "BoogaBoo90",
    "Breakout200", "BrianBloodaxe11", "BrianBloodaxe20", "BrianBloodaxe70", "BrianBloodaxe71", "BrideOfFrankenstein", "BrideOfFrankenstein200", "BruceLee200", "C64", "C64_hard", "CBM_VIC20", "CCC1", "CamelotWarriors", "Captive199", "Captive200",
    "Captive201", "CastleHaunt", "CastleHaunt200", "CastleOFTerror11", "CastleOfTerror3", "CastleOfTerror4", "CastleOfTerror91", "CastleWolfenstein21", "Cauldron10", "Cauldron8", "Cavelon11", "Cavelon13", "Cavelon4", "Choplifter11", "Choplifter12",
    "ChuckieEgg1", "ChuckieEgg2", "CodenameIceman2", "CodenameIceman3", "CodenameIceman98", "Commando200", "Commando201", "CongoBongo2", "CrawlMaster110", "CrawlMaster111", "CrawlMaster112", "CrawlMaster113", "CrawlMaster114", "CrawlMaster115",
    "CrawlMaster130", "CrawlMaster131", "CrawlMaster132", "CrawlMaster133", "CrawlMaster2", "CrystalCastles2", "CrystalCastles200", "CrystalCastles90", "CrystalsOfZong10", "Cuthbert20", "Cuthbert70", "Cuthbert90", "CyberPunk200", "CyberPunk201",
    "DM100", "DM103", "DM104", "DM105", "DM106", "DM107", "DM90", "Daggerfall3", "Daggerfall4", "Decathlon200", "Defender110", "DefenderOfTheCrown", "DefenderOfTheCrown100", "DefenderOfTheCrown110", "DigDug2", "DonkeyKong100", "DonkeyKong200",
    "DonkeyKong99", "DotHunter", "DragonSkulle110", "Drelbs2", "Drelbs3", "DungeonMaster100", "DungeonMaster200", "DungeonMaster201", "DungeonMaster202", "DungeonMaster203", "DungeonMaster204", "DungeonMaster205", "DungeonMaster206",
    "DungeonMaster70", "DungeonMaster91", "DungeonMaster92", "DungeonMaster96", "DungeonMaster97", "DynaBlaster60", "EOB11", "ESB", "Elite", "Elite201", "ElvenWarrior1", "Elvira1", "Elvira2", "Elvira3", "EnigmaForce2", "EricTheViking10",
    "EveryoneIsAWally2", "EveryoneIsAWally70", "EveryoneIsAWally71", "EyeOfTheBeholder100", "EyeOfTheBeholder101", "EyeOfTheBeholder110", "EyeOfTheBeholder111", "EyeOfTheBeholder112", "EyeOfTheBeholder130", "EyeOfTheBeholder140",
    "EyeOfTheBeholder70", "EyeOfTheBeholder90", "F1-1", "F2", "F50", "FF100", "FF101", "FF5", "FalconPatrol7", "FalconPatrol70", "FalconPatrol71", "FalconPatrol72", "FalconPatrol8", "FalconPatrol9", "FalconPatrol99", "FireAnt2", "FireAnt21",
    "FireAnt60", "FireAnt70", "ForbiddenForest110", "ForbiddenForest90", "ForbiddenForest91", "ForbiddenForest99", "ForgottenForest1", "FortApocalypse", "FortApocalypse41", "FranticFreddie3", "Fred100", "Fred101", "Fred102", "Fred110", "Fred111",
    "Fred112", "Fred113", "Fred130", "Fred21", "Friday70", "Frogger110", "Frogger111", "Frogger112", "Frogger2", "GIJoe70", "GIJoe71", "GI_Joe2", "Galaga70", "Galaga71", "Galaxians10", "GatewayToApshai11", "GatewayToApshai110",
    "GatewayToApshai130", "GatewayToApshai140", "Gauntlet", "Geos", "Ghostbusters200", "Ghostbusters201", "Gods2", "Gods60", "Gods70", "Gods99", "GoldenAxe2", "Goonies5", "Goonies70", "Goonies88", "Goonies90", "Grog1", "HalfLife 89",
    "HalfLife11", "HalfLife12", "HalfLife13", "HalfLife14", "HalfLife50", "HalfLife60", "HalfLife70", "HalfLife71", "HalfLife72", "HalfLife88", "HalfLife91", "HeadOverHeels3", "HeavyOnTheMagick60", "Hero100", "Hero103", "Hero104", "Hero50",
    "Hero51", "Hero52", "Hero60", "Hero70", "Hero71", "Hero72", "Hero80", "Hero81", "Hero82", "HeroQuest50", "HeroesOfKarn80", "Hobbit101", "HoraceSki2", "HunchBack10", "HunchBack70", "HunchBack71", "HungryHorace11", "HungryHorace12",
    "IK2", "IK200", "IM13", "Iceman70", "Imhotep2", "Imhotep60", "ImpossibleMission11", "ImpossibleMission130", "ImpossibleMission140", "ImpossibleMission90", "ImpossibleMsission110", "ImpossibleMsission111", "ImpossibleMsission112",
    "ImpossibleMsission113", "Infiltrator60", "Infiltrator70", "Infiltrator71", "Invaders2", "Invasion", "Ishar11", "Ishar13", "Ishar14", "Ishar15", "Ishar70", "Ishar71", "Ishar72", "Ishar80", "Ishar98", "Ishar99", "JSW10", "JSW110",
    "JSW111", "JSW112", "JSW113", "Jawbreaker", "JetPac50", "JetPac70", "JetSetWilly11", "JetSetWilly60", "JetSetWilly88", "JetSetWilly89", "Jetpac3", "Jumpman3", "Jumpman70", "JungleHunt12", "JungleHunt2", "JungleHunt50", "JungleHunt89",
    "JungleStory60", "JupiterLander70", "JupiterLander99", "KL10", "KL102", "KQ100", "KQ101", "KQ102", "Kangaroo50", "Kangaroo60", "Karateka200", "Karn1", "Killerwat50", "Killerwat51", "Killerwat60", "KingsQuest50", "KingsQuest51",
    "KingsQuest52", "KingsQuest53", "KingsQuest60", "KnightLore110", "KnightLore111", "KnightLore31", "KokotoniWilf2", "KokotoniWilf60", "KokotoniWilf70", "LCP", "LSL100", "LSL101", "LSL102", "LSL103", "LSL31", "LSL_Eve2", "LadyTut10",
    "LadyTut102", "LadyTut60", "LaraCroft1", "LaraCroft102", "LaraCroft123", "LaraCroft2", "LaraCroft21", "LastNinja10", "LastNinja110", "LastNinja111", "LastNinja130", "LastNinja131", "LastNinja140", "LeisureSuitLarry200",
    "LeisureSuitLarry201", "LeisureSuitLarry50", "LeisureSuitLarry60", "LeisureSuitLarry61", "LeisureSuitLarry70", "LeisureSuitLarry71", "LeisureSuitLarry72", "LeisureSuitLarry73", "LeisureSuitLarry74", "LeisureSuitLarry75",
    "LeisureSuitLarry76", "LeisureSuitLarry77", "LeisureSuitLarry88", "LeisureSuitLarry89", "LeisureSuitLarry90", "LeisureSuitLarry91", "LeisureSuitLarry93", "LeisureSuitLarry94", "LodeRunner10", "LodeRunner11", "ManiacMansion11",
    "ManicMiner11", "ManicMiner12", "ManicMiner14", "ManicMiner50", "ManicMiner51", "ManicMiner52", "ManicMiner60", "ManicMiner61", "ManicMiner62", "ManicMiner63", "ManicMiner64", "MassEffect1", "MassEffect2", "MatchPoint2",
    "Maze", "Miner2049_1", "Miner3", "Miner70", "Miranda1", "MissileCommand", "MonkeyIsland100", "MonkeyIsland101", "MonkeyIsland102", "MonkeyIsland110", "MonkeyIsland111", "MonkeyIsland112", "MonkeyIsland140", "MonkeyIsland141",
    "MonkeyIsland142", "MonkeyIsland143", "Montezuma200", "Montezumas revenge2", "MontezumasRevenge90", "MontyMole100", "MontyMole110", "MontyMole111", "MontyMole112", "MontyMole50", "MontyMole51", "MontyMole52", "MontyMole99",
    "MoonBuggy", "MoonZX", "Morrowind100", "Morrowind130", "Morrowind140", "MrRobot11", "MrRobot60", "MrRobot70", "Nebulus2", "Nebulus50", "Nebulus90", "Neptunes daughters", "OReillyMine50", "ORileysMine2", "ORileysMine60",
    "Oblivion100", "Oblivion110", "Oblivion140", "Oblivion141", "OilWell50", "OilWell51", "OlympicSkier", "OlympicSkier6", "OperationWolf50", "PQ3", "PWE", "Pacman200", "Pacman201", "Paperboy2", "Paperboy50", "Paratroopers2",
    "Paratroopers3", "PharaohCurse11", "PharaohCurse110", "PharaohCurse111", "PharaohCurse112", "PharaohCurse130", "PharaohCurse140", "Pipeline50", "Pipeline51", "Pipeline88", "Pirates200", "Pitfall100", "Pitfall2-100", "Pitfall23",
    "Pitfall27", "Pitfall50", "Pitfall60", "Pitfall70", "Pitfall71", "Pitfall72", "Pitfall73", "Pitfall88", "Pitfall89", "Pitfall90", "Pitfall91", "Pitfall96", "Pitstop200", "Pitstop3", "Platoon50", "Pooyan3", "Popeye2", "Portal130",
    "Portal131", "Portal132", "Portal140", "Predator50", "Prince4", "Prince41", "Prince50", "Prince51", "PrinceMac", "Pssst", "PurpleHeart", "Pyjamarama11", "Pyjamarama50", "Pyjamarama70", "RMC50", "RadarRatRace10", "RadarRatRace20",
    "Rambo11", "Rambo3", "RedWarrior1", "ReturnToCastleWolfenstein11", "ReturnToCastleWolfenstein12", "ReturnToCastleWolfenstein13", "ReturnToCastleWolfenstein14", "RickDangerous11", "RickDangerous50", "RickDangerous51",
    "RickDangerous60", "RickDangerous70", "RiverRaid2", "RiverRaid70", "RobinHood3", "RobinOfTheWood4", "RobinOfTheWood50", "RobinOfTheWood88", "RobinToTheRescue1", "RobinToTheRescue89", "RobinsonsRequiem1", "SP111", "SP4", "SP60",
    "SP62", "SP63", "SP64", "SP65", "SP66", "SP67", "SP68", "SP69", "SP70", "SP71", "ST2", "SVS100", "SVS1001", "SVS101", "SVS1011", "SVS102", "SVS103", "SVS110", "SVS111", "SVS112", "SVS130", "SVS131", "SVS132", "SabreWulf11",
    "SabreWulf50", "SabreWulf87", "SabreWulf89", "SabreWulf99", "SammyLightfoot2", "SammyLightfoot4", "SasbreWulf60", "Scarab200", "Scramble10", "Scramble23", "Scramble60", "Scramble7", "ScubaDive60", "SeaWolf60", "SeaWolf88",
    "Sentinel2", "Sentinel50", "Serpentine50", "SexOlympics1", "SexOlympics2", "Shamus4", "Shamus60", "Shamus91", "Silkworm200", "SirFred4", "SirFred60", "SirFred61", "SirFred62", "SirFred70", "SirFred88", "Ski23", "Ski64",
    "SkoolDaze50", "SkoolDaze60", "SkoolDaze61", "Skullkeep", "Skyrim3", "Skyrim9", "SkyrimElf", "Soccer3", "Soccer99", "Sorcery31", "Sorcery70", "Sorcery88", "Sp61", "SpaceQuest10", "SpaceQuest103", "SpaceQuest200",
    "SpectrumGame1", "Spelunker70", "SpiderGreen", "SpikesPeak1", "SpyVsSpy41", "SumerGames60", "SuperDogfight3", "SwordOfFargoal200", "SwordOfFargoal201", "TempleOfApshai70", "TempleOfApshai89", "TheHobbit13", "TheHobbit14",
    "TheHobbit15", "TheHobbit16", "TheHobbit70", "TheHobbit71", "TheHobbit72", "TheHobbit73", "TheHobbit88", "TheHobbit89", "TheHobbit99", "TimeTunnel50", "TimeTunnel60", "TimeTunnel70", "TombRaider100", "TombRaider101",
    "TombRaider102", "TombRaider103", "TombRaider104", "TombRaider105", "TombRaider106", "TombRaider107", "TombRaider108", "TombRaider109", "TombRaider110", "TombRaider111", "TombRaider112", "TombRaider113", "TombRaider130",
    "TombRaider95", "TombRaider96", "TombRaider97", "TombRaider98", "TombRaider99", "Tombraider140", "Tombraider141", "Tornado1", "Tornado88", "Trashman2", "Triss", "TurboEsprit200", "Tutamkham50", "Tutanham11",
    "Tutanham12", "Tutankham102", "Tutankham104", "Tutankham105", "Tutankhamun88", "UW10", "UW27", "Ultima11", "Ultima50", "Ultima70", "Ultima89", "Underwurlde100", "Underwurlde110", "Underwurlde111", "Underwurlde130",
    "Underwurlde131", "Underwurlde140", "Underwurlde141", "Unknown3", "Unknown30", "Uridium2", "VIC20", "Valhalla2", "Valhalla88", "Vixen3", "Vixen50", "Vixen51", "Vixen70", "Vixen79", "Vixen89", "WOW10", "WOW104",
    "Wadca", "Wally88", "Wally99", "WhoDaresWins1", "WhoDaresWins10", "WhoDaresWins50", "WhoDaresWins70", "WhoDaresWins71", "WhoDaresWins88", "WinterGames10", "WinterGames11", "WinterGames79", "Witcher100", "Witcher101",
    "Witcher102", "Witcher103", "Witcher110", "Witcher111", "Witcher112", "Witcher113", "Witcher130", "Witcher47", "WizardOfWor89", "Wolf10", "Wolfenstein31", "Wolfenstein50", "Wolfenstein70", "Yennefer", "Yennefer21",
    "Yeppelin70", "ZX Spectrum", "ZX81-89", "Zak50", "Zak51", "ZakMcKraken89", "Zaxxon3", "Zaxxon70", "Zaxxon89", "Zeppelin4", "Zeppelin50", "Zeppelin88", "Zeppelin89", "ZimSalaBim2", "ZimSalaBim200", "ZimSalaBim201",
    "BetrayedAlliance", "Commando100", "Elite100", "F4", "GhostFace1", "GhostFace2", "GhostFace3", "GhostFace4", "Movie", "SpyHunter200", "LeisureSuitLarry300",
    "BookShelf16", "BookShelf17", "BookShelf18", "BookShelf19", "BookShelf20", "BookShelf21", "BookShelf22", "BookShelf23", "BookShelf24", "BookShelf25", "BookShelf26",
    "BookShelf27",
    "AI_Pic_102", "AI_Pic_103", "AI_Pic_104", "AI_Pic_105", "AI_Pic_106", "AI_Pic_107", "AI_Pic_108", "AI_Pic_109", "AI_Pic_110", "AI_Pic_111", "AI_Pic_112",
    "AI_Pic_113", "AI_Pic_114", "AI_Pic_115", "AI_Pic_116", "AI_Pic_117", "AI_Pic_118", "AI_Pic_119", "AI_Pic_120", "AI_Pic_121", "AI_Pic_122", "AI_Pic_123",
    "AI_Pic_124", "AI_Pic_125", "AI_Pic_126", "AI_Pic_127", "AI_Pic_128", "AI_Pic_129", "AI_Pic_130", "AI_Pic_131", "AI_Pic_132", "AI_Pic_133", "AI_Pic_134",
    "AI_Pic_135", "AI_Pic_136", "AI_Pic_137", "AI_Pic_138", "AI_Pic_139", "AI_Pic_140", "AI_Pic_141", "AI_Pic_142", "AI_Pic_143", "AI_Pic_144", "AI_Pic_145",
    "AI_Pic_146", "AI_Pic_147", "AI_Pic_148", "AI_Pic_149", "AI_pic201", "AI_pic202", "AI_pic203", "AI_pic204", "AI_pic205", "AI_pic206", "AI_pic207", "AI_pic208",
    "AI_pic209", "AI_pic210", "AI_pic211", "AI_pic212", "AI_pic213", "AI_pic214", "AI_pic215", "AI_pic216", "AI_pic217", "AI_pic218", "AI_pic219", "AI_pic220", "AI_pic221",
    "AI_pic222", "AI_pic223", "AI_pic224", "AI_pic225", "AI_pic226", "AI_pic227", "AI_pic228", "AI_pic229", "AI_pic230", "AI_pic231", "AI_pic232", "AI_pic233", "AI_pic234",
    "AI_pic235", "AI_pic236", "AI_pic237", "AI_pic238", "AI_pic239", "AI_pic240", "AI_pic241", "AI_pic242", "AI_pic243", "AI_pic244", "AI_pic245", "AI_pic246", "AI_pic247",
    "AI_pic248", "AI_pic249", "AI_pic250", "AI_pic251", "AI_pic252", "AI_pic253", "AI_pic254", "AI_pic255", "AI_pic256", "AI_pic257", "AI_pic258", "AI_pic259", "AI_pic260",
    "AI_pic261", "AI_pic262", "AI_pic263",
    "AI_PIC_301", "AI_PIC_302", "AI_PIC_303", "AI_PIC_304", "AI_PIC_305", "AI_PIC_306", "AI_PIC_307", "AI_PIC_308", "AI_PIC_309", "AI_PIC_310", "AI_PIC_311", "AI_PIC_312", "AI_PIC_313", "AI_PIC_314", "AI_PIC_315",
    "AI_PIC_316", "AI_PIC_317", "AticAtacAI", "AztecChallenge_AI", "BCAI2", "BC_AI1", "Civilization", "DM_AI_2", "DM_AI_3", "FF_AI_1", "FF_AI_3", "Fred_AI_2", "Fred_AI_3", "Galaxians_AI_1", "Iceman400", "Invaders_AI_1",
    "LSL400", "LSL401", "Pacman400", "PitfallII_AI_1", "PrincessAI_01", "PrincessAI_02", "PrincessAI_03", "PrincessAI_04", "PrincessAI_05", "PrincessAI_06", "PrincessAI_07", "PrincessAI_08", "PrincessAI_09", "PrincessAI_10",
    "PrincessAI_11", "PrincessAI_12", "PrincessAI_13", "PrincessAI_14", "PrincessAI_15", "PrincessAI_16", "Unknown400",
    "AI_PIC_435", "AI_PIC_436", "AI_PIC_437", "AI_PIC_438", "AI_PIC_439", "AI_PIC_440", "AI_PIC_441", "AI_PIC_442", "AI_PIC_443", "AI_PIC_444", "AI_PIC_445", "AI_PIC_446", "AI_PIC_447", "AI_PIC_448", "AI_PIC_449", "AI_PIC_450",
    "AI_PIC_451", "AI_PIC_452", "AI_PIC_453", "AI_PIC_454", "AI_PIC_455", "AI_PIC_456", "AI_PIC_457", "AI_PIC_458", "AI_PIC_459", "AI_PIC_460", "AI_PIC_461", "Dominatrix01", "Dominatrix02", "Dominatrix03", "Dominatrix04", "Dominatrix05",
    "Dominatrix06", "Dominatrix07", "Dominatrix08", "Dominatrix09", "Dominatrix10", "Dominatrix100", "Dominatrix101", "Dominatrix102", "Dominatrix11", "GirlSwims02", "GirlSwims03", "GirlSwims04", "GirlSwims05", "GirlSwims06", "GirlSwims07",
    "GirlSwims08", "GirlSwims09", "GirlSwims10", "GirlSwims11", "GirlSwims12", "GirlSwims13", "GirlSwims14", "GirlSwims15", "GirlSwims16", "GirlSwims17", "GirlSwims18", "GirlSwims19", "GirlSwims20", "GirlSwims21", "GirlSwims22",
    "GreenBerret501", "ManiacMansion501", "Princess1", "Princess10", "Princess11", "Princess12", "Princess13", "Princess14", "Princess15", "Princess16", "Princess17", "Princess2", "Princess3", "Princess4", "Princess5",
    "Princess6", "Princess7", "Princess8", "Princess9", "Unknown501", "Unknown502", "Unknown503", "UnknownHelicopterGame501",
    "CastleLady08", "CastleLady09", "CastleLady10", "CastleLady11", "CastleLady12", "CastleLady13", "CastleLady14", "CastleLady15", "CastleLady16", "CastleLady17", "CastleLady18", "CastleLady19", "CastleLady20", "CastleLady21", "CastleLady22",
    "CastleLady23", "CastleLady24", "CastleLady25", "CastleLady26", "CastleLady27", "CastleLady28", "CastleLady29", "CastleLady30", "CastleLady31", "CastleLady32", "CastleLady33", "CastleLady34", "CastleLady35", "CastleLady36", "CastleLady37",
    "CastleLady38", "CastleLady39", "CastleLady40", "CastleLady41", "CastleLady42", "CastleLady43", "CastleLady44", "CastleLady45", "CastleLady46", "CastleLady47", "CastleLady48", "CastleLady49", "CastleLady50", "CastleLady51", "CastleLady52",
    "CastleLady53", "CastleLady54", "CastleLady55", "CastleLady56", "CastleLady57", "CastleLady58", "CastleLady59", "CastleLady60", "CastleLady61", "CastleLady62", "CastleLady63", "CastleLady64", "CastleLady65", "CastleLady66", "CastleLady67",
    "CastleLady68", "CastleLady69", "CastleLady70", "CastleLady71", "CastleLady72", "CastleLady73", "CastleLady74", "CastleLady75", "CastleLady76", "CastleLady77", "CastleLady78", "CastleLady79", "CastleLady80", "Nature01", "Nature02",
    "Nature03", "Nature04", "Nature05", "Nature06", "Nature07",
    "LatexGirl1", "CastleLady100", "CastleLady101", "CastleLady102", "CastleLady103", "CastleLady104", "CastleLady105", "CastleLady106", "CastleLady107", "CastleLady108", "CastleLady109", "CastleLady110", "CastleLady111", "CastleLady112",
    "CastleLady113", "CastleLady114", "CastleLady115", "CastleLady116", "CastleLady117",
    "LargePicLadies01", "LargePicLadies02", "LargePicLadies03", "LargePicLadies04", "LargePicLadies05", "LargePicLadies06", "LargePicLadies07", "LargePicLadies08", "LargePicLadies09", "LargePicLadies10", "LargePicLadies11", "LargePicLadies12",
    "LargePicLadies13", "LargePicLadies14", "LargePicLadies15", "LargePicLadies16", "LargePicLadies17", "LargePicLadies18", "LargePicLadies19", "LargePicLadies20", "LargePicLadies21", "LargePicLadies22", "LargePicLadies23", "LargePicLadies24",
    "MoonPatrol500", "BetrayedAlliance",
    "BeachHead500", "CastleBabes01", "CastleBabes02", "CastleBabes03", "CastleBabes04", "CastleBabes05", "CastleBabes06", "CastleBabes07", "CastleBabes08", "CastleBabes09", "CastleBabes10", "CastleBabes11", "CastleBabes12", "CastleBabes13",
    "CastleBabes14", "CastleBabes15", "CastleBabes16", "CastleBabes17", "CastleBabes18", "CastleBabes19", "CastleBabes20", "CastleBabes21", "CastleBabes22", "CastleBabes23", "CastleBabes24", "CastleBabes25", "CastleBabes26", "CastleBabes27",
    "CastleBabes28", "CastleBabes29", "CastleBabes30", "CastleBabes31", "CastleBabes32", "CastleBabes33", "CastleBabes34", "CastleBabes35", "CastleBabes36", "CastleBabes37", "CastleBabes38", "CastleBabes39", "CastleBabes40", "CastleBabes41",
    "CastleBabes42", "CastleBabes43", "CastleBabes44", "CastleBabes45", "CastleBabes46", "CastleBabes47", "CastleBabes48", "CastleBabes49", "CastleBabes50", "CastleBabes51", "CastleBabes52", "DommeInGrass1", "ForbiddenForest501",
    "ForbiddenForest502", "Leggy1", "Leggy2", "PrincessOnThrone", "RedBum1", "Scramble501", "SpyVsSpy501", "SummerGames501", "WizardOfWor500",
    "Babes401", "Babes402", "Babes403", "Babes404", "Babes405", "Babes406", "Babes407", "Domme401", "Princess201", "Princess401", "Princess402", "Princess403", "Princess404", "Princess405", "Princess406", "Princess407", "Princess408", "Princess409",
    "Princess410", "Princess411", "Princess412", "Princess413", "Princess414", "Princess415", "Princess416", "Princess417", "Princess418",
    "Domme101", "Domme102", "Domme103", "Domme104", "Domme105", "Domme106", "Domme107", "Domme108", "Domme109", "Domme110", "Domme111", "Domme112", "Domme113", "Domme114", "Domme115", "Domme116", "Domme117", "Domme118", "Domme119",
    "Domme120", "Domme121", "Domme122", "Domme123", "Domme124", "Domme125", "Domme126", "Domme127", "Domme128", "Domme129", "Domme130", "Domme131", "Domme132", "Domme133", "Domme134", "Domme135", "Domme136", "Domme201", "Domme202",
    "Domme203", "Domme204", "Domme205", "Domme206", "Domme207", "Domme208", "Domme209", "Domme210", "Domme211", "Domme212", "Domme213", "Domme214", "Domme215", "Domme216", "Domme217", "Domme218", "Domme219", "Domme220", "Domme221",
    "Domme222", "Domme223", "Domme224", "Domme225", "Domme226", "Domme227", "Domme228", "Domme229", "Domme230", "Domme231", "Domme232", "Domme233", "Domme234", "Domme235", "Domme236", "Domme237", "Domme238", "Domme239", "Domme240",
    "Domme241", "Domme242", "Domme243", "GirlOnStairs", "GirlOnStairs101", "GirlOnStairs102", "GirlOnStairs103", "GirlOnStairs104", "GirlOnStairs105", "GirlOnStairs106", "GirlOnStairs107", "SabreWulfAI_101", "SabreWulfAI_102",
    "SabreWulfAI_103", "ShinyBlackRuberella01", "ShinyBlackRuberella02", "ShinyBlackRuberella03", "ShinyBlackRuberella04", "ShinyBlackRuberella05", "ShinyBlackRuberella06", "ShinyBlackRuberella07", "ShinyBlackRuberella08",
    "ShinyBlackRuberella09", "ShinyBlackRuberella10", "ShinyBlackRuberella101", "ShinyBlackRuberella102", "ShinyBlackRuberella103", "ShinyBlackRuberella104", "ShinyBlackRuberella105", "ShinyBlackRuberella11", "ShinyBlackRuberella12",
    "ShinyBlackRuberella13", "ShinyBlackRuberella14", "ShinyBlackRuberella15", "ShinyBlackRuberella16", "ShinyBlackRuberella17", "ShinyBlackRuberella18",
    "Domme301", "Domme302", "Domme303", "Domme304", "Domme305", "Domme306", "Domme307", "Domme308", "Domme309", "Domme310", "Domme311", "Domme312", "Domme313", "Domme314", "Domme315", "Domme316", "Domme317", "Domme318", "Domme319",
    "Domme320", "Domme321", "Domme322", "Domme323", "Domme324", "Domme325", "Domme326", "Domme327", "Domme328", "Domme329", "Domme330", "Domme331", "Domme332", "Domme333", "Domme334", "Domme335", "Domme336", "Domme337", "Domme338",
    "Domme339", "Domme340", "Domme341", "Domme342", "Domme343", "Domme344", "Domme345", "Domme346", "Domme347", "Domme348", "Domme349", "Domme350", "Domme351", "Domme352", "Domme353", "Domme354", "Domme355", "Domme356", "Domme357",
    "Domme358", "Domme359", "Domme360", "Domme361", "Domme362", "Domme363", "Domme364", "Domme365", "Domme366", "Domme367", "Domme368", "Domme369", "Domme370", "Domme371", "Domme372", "Domme373", "Domme374", "Domme375",
    "ApparitiaFrame135", "ApparitiaFrame136", "ApparitiaFrame137", "ApparitiaFrame138", "ApparitiaFrame139", "ApparitiaFrame235", "ApparitiaFrame236", "ApparitiaFrame237", "ApparitiaFrame238", "ApparitiaFrame239",
    "ApparitiaFrame240", "Domme401", "Domme402", "Domme403", "Domme404", "Domme405", "Domme406", "Domme407", "Domme408", "Domme409", "Domme410", "Domme411", "Domme412", "Domme413", "FemaleWarrior101",
    "FemaleWarrior102", "FemaleWarrior103", "FemaleWarrior104", "FemaleWarrior105", "FemaleWarrior106", "FemaleWarrior107", "FemaleWarrior108", "FemaleWarrior109", "FemaleWarrior201", "FemaleWarrior202",
    "FemaleWarrior203", "FemaleWarrior204", "FemaleWarrior205", "FemaleWarrior206", "FemaleWarrior207", "FemaleWarrior208", "FemaleWarrior209", "FemaleWarrior210", "FemaleWarrior211", "FemaleWarrior212",
    "Morana035", "Morana036", "Morana037", "Morana038", "Morana039", "Morana040", "Morana041", "Morana042", "Morana043", "Morana044", "Morana045", "Morana046", "Morana047", "Morana135", "Morana136",
    "Morana137", "Morana138", "Morana139", "Princess601", "Princess602", "Princess603", "Princess604", "Princess605", "Princess606", "Princess607", "Princess608", "Princess609", "Princess610", "Princess611"
].sort();

/** Crests */

const DECAL_CRESTS = ["LS", "Skull4", "Skull3", "Skull2", "Skull1", "Crack4", "Crack3", "Skeleton11", "Skeleton12", "Crack20", "Crack21", "DancingSkeletons2",
    "PrayingSkeleton10", "SittingSkeleton2", "Skeleton21", "Skull10", "Skull11", "WOWc1", "WOWc2", "Reaper", "AticAtacCrest1", "DungeonWall", "DungeonDoor_Blocked2", "DungeonDoor_Blocked3", "DungeonDoor_Blocked4",
    "Skeleton20", "Skeleton121", "Skeleton23", "Skull20", "Skull21", "CrownDecal",
    "KnightStatue101", "KnightStatue102", "KnightStatue103", "KnightStatue104", "KnightStatue105", "KnightStatue106", "KnightStatue107", "KnightStatue108", "KnightStatue109", "KnightStatue110",
    "ShieldDecal01", "ShieldDecal02", "ShieldDecal03", "ShieldDecal04", "ShieldDecal05", "ShieldDecal06", "ShieldDecal07", "ShieldDecal08",
    "BearRug02", "BearRug03", "BearRug04", "LeopardRug02", "LeopardRug03", "LeopardRug04", "LeopardRug05", "LeopardRug06", "PersianRug02", "PersianRug03", "PersianRug04", "PersianRug05", "PersianRug06",
    "TigerRug02", "TigerRug03", "TigerRug04",
    "BookShelf02", "BookShelf03", "BookShelf04", "BookShelf05", "BookShelf06", "BookShelf07", "BookShelf08", "BookShelf09", "BookShelf10", "BookShelf11", "BookShelf12", "BookShelf13", "BookShelf14", "BookShelf15",
    "PuddleDecal01", "PuddleDecal02", "PuddleDecal03", "PuddleDecal04", "PuddleDecal05", "PuddleDecal06", "PuddleDecal07", "PuddleDecal08", "PuddleDecal09", "PuddleDecal10", "PuddleDecal11", "PuddleDecal12", "PuddleDecal13", "PuddleDecal14",
    "WallSkelly101", "WallSkelly102", "WallSkelly103", "WallSkelly104",
    "SatanRam1", "SatanRam10", "SatanRam2", "SatanRam3", "SatanRam4", "SatanRam5", "SatanRam6", "SatanRam7", "SatanRam8", "SatanRam9",
    "DemonSkull1", "DemonSkull2", "DemonSkull3", "FloorGrille101", "FloorGrille102", "FloorGrille103", "FloorGrille104", "FloorGrille105", "FloorGrille106", "FloorGrille107", "FloorGrille108", "FloorGrille109", "FloorGrille110", "FloorGrille111",
    "FloorGrille112", "FloorGrille113",
    "Ivy11", "Ivy12",
    "AA_CREST_AI", "CrawlingSkelly1", "CrawlingSkelly2", "DancingSkelies1", "DancingSkelies2", "DancingSkelies3", "LaughingSkeleton1", "LaughingSkeleton2", "LaughingSkeleton3", "LaughingSkeleton4", "LaughingSkeleton5", "LaughingSkeleton6", "SittingSkelly1",
    "SittingSkelly11", "SittingSkelly12", "SittingSkelly13", "SittingSkelly14", "SittingSkelly2", "SittingSkelly21", "SittingSkelly23"
].sort();
const BOTTOM_CRESTS = ["Grate1_128"];
const TOP_CRESTS = ["Drain2_96", "Drain64", "Grate1_128", "RoundGrille96", "FlatPond", "FlatPond2", "FlatPond3", "FlatPond4", "FlatPond5", "FlatPond6", "FlatPond7"].sort();
const LIGHT_DECALS = ["WallLamp", "WallLamp2", "WallLamp3", "WallTorch", "Lamp4", "WallLamp10", "WallLamp11", "WallLamp12", "WallLamp13", "WallLamp14", "WallLamp15",
    "WallLamp16", "WallLamp17", "WallLamp18", "WallLamp19", "WallLamp20", "WallLamp9",
    "WallLamp31", "WallLamp32", "WallLamp33", "WallLamp34", "WallLamp35",
    "Lamp40", "Lamp41", "Lamp42", "Lamp43", "Lamp44", "Lamp45", "Lamp46", "Lamp47", "Lamp48", "Lamp49", "Lamp50", "Lamp51", "Lamp52", "Lamp53",
    "Fireplace01", "Fireplace02", "Fireplace03", "Fireplace04", "Fireplace05", "Fireplace06", "Fireplace07", "Fireplace08", "Fireplace09", "Fireplace10", "Fireplace11", "Fireplace12", "Fireplace13",
    "Fireplace14", "Fireplace15",
    "Lights102", "Lights103", "Lights104", "Lights105", "Lights106", "Lights107", "Lights108", "Lights109", "Lights110", "Lights111", "Lights112", "Lights113", "Lights114", "Lights115",
    "Candelabra01", "Candelabra02", "Candelabra03", "Candelabra04", "Candelabra05", "Candelabra06", "Candelabra07", "Candelabra08", "Candelabra09", "Candelabra10", "Candelabra11", "Candelabra12",
    "Candelabra14", "Candelabra15", "Candelabra16", "Candelabra17", "Candelabra18",
    "Fireplace101", "Fireplace102", "Fireplace103", "Fireplace104", "Fireplace105", "Fireplace106", "Fireplace107"
].sort();;
const TRIGGER_DECALS = ["SmoothWallButton", "RockTriggerButton", "MarbleTriggerButton", "PurpleTriggerButton"];

const LAIR_DECALS = [];
/** hardcoded maxlair! */
const MAX_LAIR_COUNT = 49;
for (let i = 1; i <= MAX_LAIR_COUNT; i++) {
    LAIR_DECALS.push(`Lair${i.toString().padStart(2, "0")}`);
}
console.info("LAIR_DECALS", LAIR_DECALS);
console.log("%cMAP for MazEditor loaded.", "color: #888");