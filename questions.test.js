const testSet = {
    /*
    "set name":{
        originalText: "",
        expectedOutput: []
    }
    */
    "MassJCL Intermediate 2019 Round 1": {
        originalText: `1:\nTU: Quid Anglicē significat: exercitus? ARMY\nB1: Quid Anglicē significat: dīvus? DIVINE, GOD, GODLY\nB2: Quid Anglicē significat: opēs? WEALTH, MONEY, RESOURCE\n\n2:\nTU: In the Odyssey, who made Odysseus cry with his songs about the Trojan War? DEMODOCUS\nB1: On what island did this occur? SCHERIA / CORFU\nB2: What did the Muse take away from Demodocus in return for his musical talent? HIS EYESIGHT\n3:\nTU: Complete the following analogy: portō : portāret :: audiō : __________ AUDĪRET\nB1: …: portō : portāvīssēmus :: audiō : ________ AUDĪVISSĒMUS\nB2: ...: audiō : audīvissētis :: sum : __________ FUISSĒTIS`,
        expectedOutput: [["Quid Anglicē significat: exercitus?", "ARMY"], ["In the Odyssey, who made Odysseus cry with his songs about the Trojan War?", "DEMODOCUS"], ["Complete the following analogy: portō : portāret :: audiō : __________", "AUDĪRET"]]
    },
    "TSJCL Novice 2017 Round 1": {
        originalText: `TU 1\nWhat mythological group was made up of Thalia, Terpsichore, and seven others?\nTHE MUSES\nB1\nWho was the mother of the Muses?\nMNEMOSYNE\nB2\nIn one story, the Muses were said to have been born when what creature touched the Helicon\nspring?\nPEGASUS\nTU 2\nFrom what Latin verb with what meaning do we get the English words overt and aperture?\nAPERIO = TO OPEN, UNCOVER, DISCLOSE\nB1\nFrom what Latin verb with what meaning do we get the English words augment and auction?\nAUGEO = TO INCREASE\nB2\nFrom what Latin verb with what meaning do we get the English word obedience?\nAUDIO = TO HEAR, LISTEN TO\nTU 3\nFor the verb capio, capere give the 3rd person, plural, future, active, indicative\nCAPIENT\nB1\nChange capient to the future perfect\nCEPERINT\nB2\nChange ceperint to the passive voice\nCAPTI ERUNT\nTU 4\nWhat structure located between the Palatine and Aventine Hills was known for its chariot racing?\nCIRCUS MAXIMUS\nB1&B2\nThe emperor Domitian added two colored factions to the original four. For five points each,\nname these colors\nPURPLE & GOLD\n2017 TSJCL CERTAMEN\nNOVICE DIVISION ROUND 1\n2\nTU 5\nSay in Latin: Do you like learning the Latin language?\nAMASNE / AMATISNE / DILIGISNE / DILIGITISNE DISCERE LINGUAM\nLATINAM?\nB1\nSay in Latin: You are not going to school tomorrow, are you?\nNUM CRAS AD SCHOLAM IS / ITIS?\n// NUM ES ITURUS / ESTIS ITURI AD SCHOLAM CRAS?\nB2\nSay in Latin: You want to win this contest don’t you?\nNONNE HOC CERTAMEN VIS / VULTIS / CUPIS / CUPITIS VINCERE?\n[SCORE CHECK]\nTU 6\nWhat state has the motto “ad astra per aspera”?\nKANSAS\nB1\nWhat state has the motto “dum spiro, spero”?\nSOUTH CAROLINA\nB2\nWhat is the Latin motto of the state of Missouri?\nSALUS POPULI SUPREMA LEX (ESTO)\nTU 7\nGive the accusative singular for the phrase solum animal.\nSOLUM ANIMAL\nB1\nMake solum animal genitive\nSOLIUS ANIMALIS\nB2\nMake solius animalis plural\nSOLORUM ANIMALIUM\nTU 8\nWho preceded and succeeded Caligula?\nTIBERIUS (FORMER); CLAUDIUS (LATTER)\nB1\nWho preceded and succeeded Titus?\nVESPASIAN (FORMER); DOMITIAN (LATTER)\nB2\nWho preceded and succeeded Marcus Aurelius?\nANTONINUS PIUS (FORMER); COMMODUS (LATTER)\n2017 TSJCL CERTAMEN\nNOVICE DIVISION ROUND 1\n3\nTU 9\nWho attempted to delay choosing a new husband by unraveling the shroud she wove for her\nfather-in-law?\nPENELOPE\nB1\nName her father-in-law.\n LAERTES\nB2\nFor how long was Penelope able to keep up this ruse?\nTHREE YEARS\nTU 10\nListen carefully to the following passage about this adapted Shakespeare scene which I will read\ntwice and answer the questions that follow in English.\nRex cum suo fratre ivit ut nuptiās suae filiae videret. Post nuptiās, dum domum navigant, subito,\nmagna tempestas accidit. Viri timent et deos evocant, sed dei eos non audiunt. Nave pervertā,\nviri ad insulam ignotam pervenerunt.\nThe question: With whom did the king travel?\nHIS BROTHER\nB1\nWhat was the purpose of the king’s trip?\nTO SEE HIS DAUGHTER’S WEDDING/MARRIAGE\nB2\nWhen the storm occurred, what did the men do?\nTHEY CALL OUT TO THE GODS/ASK THE GODS FOR HELP\n(FOR MODERATOR REFERENCE FOR PASSAGE: A king went with his brother to see his\ndaughter’s wedding. After the wedding, while, they were sailing home, suddenly, a great storm\noccurred. The men are scared and call out to the gods, but the gods do not hear them. After their\nship was overturned, the men arrived on an unknown island.)\n[SCORE CHECK]\nTU 11\nAccording to Hesiod, what primordial being was the mother of Ourea, Pontus, and Uranus?\n GAIA\nB1\nWhat physical feature of the earth does Ourea personify?\nMOUNTAINS\nB2\nHow many Titans and Titanesses did Gaia bear with Uranus?\nTWELVE\n2017 TSJCL CERTAMEN\nNOVICE DIVISION ROUND 1\n4\nTU 12\nWhere in Rome would you go to see venationes and naumachiae?\n COLOSSEUM / AMPHITHEATER\nB1\nWhich emperor was credited with the construction of the Colosseum?\nTITUS\nB2\nWho built the first permanent amphitheater in Rome?\nSTATILIUS TAURUS\nTU 13\nIdentify the case and use of the word for friend in the following sentence: Hic equus carissimus\nmeo amico est.\nDATIVE WITH (SPECIAL) ADJECTIVES\nB1\n… Nescivi meum amicum mortuum esse.\nACCUSATIVE SUBJECT (OF AN INDIRECT STATEMENT)\nB2\n… Ille altior meo amico est.\nABLATIVE COMPARISON\nTU 14\nWho agreed to betray her father and aid Jason on the condition that he would take her with\nhim?\nMEDEA\nB1\nAmong the tasks that Jason was assigned, one was to plough a field with fire-breathing oxen that\nhe had to yoke himself. How did Medea aid him in this seemingly impossible task?\nSHE GAVE HIM A POTION THAT WOULD PROTECT HIM\nB2\nWhom did Medea butcher to ensure her and Jason’s flight from Colchis?\nABSYRTUS (PROMPT ON HER BROTHER)\nTU 15\nTranslate the following sentence into English: Militēs hostem magnā cum vi oppugnaverant.\nTHE SOLDIERS HAD ATTACKED THE ENEMY WITH GREAT FORCE\nB1\n… Hoste victō, militēs regī suam victoriam nuntiaverunt.\nWHEN THE ENEMY WAS DEFEATED (AFTER/WITH THE ENEMY HAVING BEEN\nDEFEATED), THE SOLDIERS ANNOUNCED THEIR VICTORY TO THE KING\nB2\n… Rex dicet suos milites celerrimōs et potentissimōs omnium esse.\nTHE KING WILL SAY THAT HIS SOLDIERS ARE THE SWIFTEST AND MOST\nPOWERFUL OF ALL.\n2017 TSJCL CERTAMEN\nNOVICE DIVISION ROUND 1\n5\n[SCORE CHECK]\nTU 16\nWhat new institution did Diocletian establish consisting of Caesares and Augusti?\nTETRARCHY\nB1\nWhat man did Diocletian defeat at the Margus River in 285 AD to become emperor of Rome?\nCARINUS\nB2\nWho was Diocletian’s Caesar in the East?\nGALERIUS\nTU 17\nQuid anglice significat tum?\nTHEN, AT THAT TIME\nB1\nQuid anglice significat tam?\nSO, SO FAR, TO SUCH A DEGREE\nB2\nQuid anglice significat tamen?\nHOWEVER, YET, NEVERTHELESS\nTU 18\nWhat Titan offered to take the immortality of the centaur Chiron, thereby allowing Chiron to die\nin peace?\nPROMETHEUS\nB1\nWhy did Chiron wish to die?\nHE HAD BEEN POISONED BY THE BLOOD OF THE HYDRA\nB2\nWho would ironically meet a similar fate as Chiron, as he was the one who accidentally shot him\nwith a poisoned arrow?\nHERACLES\nTU 19\nGive a Latin synonym for the word teneo.\nHABEO\nB1\nGive a Latin synonym for the word interficio.\nNECO / CAEDO / OCCIDO\nB2\nGive a Latin synonym for the word porto.\nFERO / GERO\n2017 TSJCL CERTAMEN\nNOVICE DIVISION ROUND 1\n6\n[SCORE CHECK]\nTU 20\nWhat emperor saw the words “in hoc signo vinces” in a dream and believed that this signified\nthat he would be the victor of Milvian Bridge?\nCONSTANTINE\nB1\nAgainst whom did Constantine face at this battle?\nMAXENTIUS\nB2\nConstantine set up a new capital at Byzantium, which he renamed after himself. Give the modern\nday name of this city.\nISTANBUL`,
        expectedOutput: [["What mythological group was made up of Thalia, Terpsichore, and seven others?", "THE MUSES"], ["From what Latin verb with what meaning do we get the English words overt and aperture?", "APERIO = TO OPEN, UNCOVER, DISCLOSE"], ["For the verb capio, capere give the 3rd person, plural, future, active, indicative", "CAPIENT"], ["What structure located between the Palatine and Aventine Hills was known for its chariot racing?", "CIRCUS MAXIMUS"], ["Say in Latin: Do you like learning the Latin language?", "AMASNE / AMATISNE / DILIGISNE / DILIGITISNE DISCERE LINGUAM\nLATINAM?"], ["What state has the motto “ad astra per aspera”?", "KANSAS"], ["Give the accusative singular for the phrase solum animal.", "SOLUM ANIMAL"], ["Who preceded and succeeded Caligula?", "TIBERIUS (FORMER); CLAUDIUS (LATTER)"], ["Who attempted to delay choosing a new husband by unraveling the shroud she wove for her\nfather-in-law?", "PENELOPE"], ["Listen carefully to the following passage about this adapted Shakespeare scene which I will read\ntwice and answer the questions that follow in English.\nRex cum suo fratre ivit ut nuptiās suae filiae videret. Post nuptiās, dum domum navigant, subito,\nmagna tempestas accidit. Viri timent et deos evocant, sed dei eos non audiunt. Nave pervertā,\nviri ad insulam ignotam pervenerunt.\nThe question: With whom did the king travel?", "HIS BROTHER"], ["According to Hesiod, what primordial being was the mother of Ourea, Pontus, and Uranus?", "GAIA"], ["Where in Rome would you go to see venationes and naumachiae?", "COLOSSEUM / AMPHITHEATER"], ["Identify the case and use of the word for friend in the following sentence: Hic equus carissimus\nmeo amico est.", "DATIVE WITH (SPECIAL) ADJECTIVES"], ["Who agreed to betray her father and aid Jason on the condition that he would take her with\nhim?", "MEDEA"], ["Translate the following sentence into English: Militēs hostem magnā cum vi oppugnaverant.", "THE SOLDIERS HAD ATTACKED THE ENEMY WITH GREAT FORCE"], ["What new institution did Diocletian establish consisting of Caesares and Augusti?", "TETRARCHY"], ["Quid anglice significat tum?", "THEN, AT THAT TIME"], ["What Titan offered to take the immortality of the centaur Chiron, thereby allowing Chiron to die\nin peace?", "PROMETHEUS"], ["Give a Latin synonym for the word teneo.", "HABEO"], ["What emperor saw the words “in hoc signo vinces” in a dream and believed that this signified\nthat he would be the victor of Milvian Bridge?", "CONSTANTINE"]]
    },
    "Melius 1 Round 1": {
        originalText: `TU 1: Which spartan king, whose namesake oath was created by Odysseus, had a wife who slept with Zeus while Zeus took the form of a swan\nFor 10 points, name the father of Clytemenestra and stepfather of Helen.\nTyndareus\nB1. Who was the wife of Tyndareus?\nLeda\nB2. Give the latin name for the twin sons of Leda who had different fathers.\nGemini (Accept Dioscuri/Castor and Pollux)\n\nTU 2: After the death of Gratian, which Empire ruled over both halves of the emperor in 383 AD, the last emperor to do so, as after his death the empire was again split and given to his sons Arcadius and Honorius?\nFor 10 points: Which emperor made Christianity the state religion of the Roman Empire?\nTHEODOSIUS I/THE GREAT\nB1. Which edict, known as cunctos populos, did Theodosius pass to make Christianity the state religion of Rome?\nEDICT OF THESSALONICA\nB2. Which pagan order did Theodosius dissolve that was first created by Numa Pompilius and expanded by Servius Tullius?\nVESTAL VIRGINS\n\nTU 3: For the verb miror, mirari, what is the third person, singular, imperfect, active, subjunctive? \nMīrārētur\nB1. Make Mīrārētur indicative\nMīrābātur\nB2. Make Mīrābātur future perfect \nMiratus erit\nTU 4: Which late author, who was considered a Berber by most historians, converted to Christianity in 386 AD and wrote many famous works such as Confessions, an autobiographical work detailing his search for God?\nFor 10 points: Which author was the bishop of Hippo Regius?\nST AUGUSTINE (OF HIPPO)\nB1. What work of St. Augustine in 22 books states that the earthly city is destined to die but the heavenly city will live on forever? \nDE CIVITATE DEI/(ABOUT) THE CITY OF GOD\nB2. What work of St. Augustine consists of 4 books describing how one should interpret and teach the Christian scriptures?\nDE DOCTRINA CHRISTIANA/(ABOUT) THE CHRISTIAN DOCTRINE\n\nTU 5: Which man became king by the sun rising from the west, fed Thyestes’ sons to his brother, and was the son of Pelops? \nFor 10 points, name this father of Agamemnon and Menelaus. \nAtreus\nB1. Which brother of Thyestes and Atreus did they both kill, cursing them both?\nChryssipus\nB2. Which daughter of Thyestes did Atreus later marry?\nPelopia\n\nTU 6: What son of Orestes was spared by his usurper and took up residence in Campania in 476 AD when he was around 16 years old?\nFor 10 points: Who is considered to be the last ruler of the Western Roman Empire?\nROMULUS AUGUSTULUS\nB1. Although much about the life of Augustulus is unknown, historians do know who usurped the throne from him and ended the Western Roman Empire. Who was this man?\nODOACER\nB2. Who was the ruler of the Eastern Roman Empire in 476 AD when Odoacer took the west and shared his name with a Greek philosopher who came up with numerous paradoxes including Achilles and the Tortoise and the Arrow Paradox? \nZENO\n\nTU 7: What english adjective, derived from pleo, means "conforming to requirements, submissive"?\nCompliant\nB1. What other english verb, derived from the same Latin word, means "to bring about as a result by effort, to bring to fruition"?\nAccomplish\nB2. What other english noun, derived from the same word, means the quantity or amount needed or available\nSupply\n\nTU 8: Who, in their 16th poem, which has been censored for most of history, vulgarly addresses Furius and Aurelius by saying “pedicabo ego vos et irrumabo” and also travelled to Bithynia to serve on the staff of Gaius Memmius?\nFor 10 points: Who wrote in hendecasyllabic, was born in Verona, and addressed poems to Lesbia? \n(GAIUS VALERIUS) CATULLUS\nB1. What accomplished author, military leader, and consul did Catullus insult in Carmina 29, 57, and 93 but later apologize to, and according to Suetonius, had dinner with the same night?\n(GAIUS IULIUS) CAESAR\nB2. Name one of the two Greeks that Catullus drew inspiration from. One of these was born on Lesbos and was a prolific female lyric poet and the other was a scholar at the Library of Alexandria who wrote many epigrams.\nSAPPHO/CALLIMACHUS\n\nTU 9: What woman had a maid-servant named Eurymedusa, was the daughter of Arete, and a princess of the Phaeacians, and was sent by Athena to wash her clothes when she met Odysseus?\nFor 10 points, name this daughter of Alcinous.\nNausicaa\nB1. When Odysseus first meets Nausicaa, how does he appear?\nNaked (accept leaf, don’t accept illusion)\nB2. Which deity does Odysseus compare Nasicaa to?\nArtemis\n\nTU 10: What battle, described by historians as the Varian Disaster, or Clares Variana, which resulted in a loss of three Roman legions, caused Augustus to say, according to Suetonius, “Quintili Vare, legiones redde!”.\nFor 10 points: Name the German forest in which the Romans suffered a massive defeat in 9 AD.\n(BATTLE OF) TEUTOBURG FOREST\nB1. What leader of the Germans, who was sent to Rome as tribute by his father Segimer, handed Varus this defeat at Teutoburg Forest?\nARMINIUS/HERMAN\nB2. What Germanic Tribe did Arminius lead?\nCHERUSCI\n\nTU 11: Translate the following sentence into English, assuming Texia, Texiae means Texas\nDiscipulus ad Texiam ivit ut nivem effugeret\nTHE STUDENT WENT TO TEXAS TO ESCAPE THE SNOW\nB1. Timet ne nix in Texia cadat\nHE/SHE/IT IS AFRAID THAT SNOW IS FALLING IN TEXAS\nB2. Si nix non caderet, ex villa ambularem\nIF SNOW WAS NOT FALLING, I WOULD WALK OUT OF MY HOUSE \n\n\nTU 12: In 65 AD, the Pisonian Conspiracy was unearthed and numerous well-known authors were implicated. Name the author who was accused for their involvement in this conspiracy who wrote the Epistula Morales\nFor 10 points, name this famous stoicist born in Corbuda.\nSENECA THE YOUNGER\nB1. What is the familial relation between Seneca and Lucan?\nUNCLE / NEPHEW\nB2. Although Seneca the Younger was exiled to Corsica in 41 AD by Claudius, he was allowed to come back in 49 AD to do this.\nTO TUTOR NERO\n\nTU 13: Which sea nymph, whose name means 'falcon', was sought by Glaucus, loved Picus and lived on the island Aeaea? \nFor 10 points, name this daughter of Sol and Perse who spent a year with Ulysses.\nCirce\nB1. What did Mercury give Odysseus, protecting him from Circe’s magic?\nMoly\nB2. Who is changed by Circe’s potions with a circle of dogs around her waist before finally turning into a rock?\nScylla\n\nTU 14: In 271 AD, what did Aurelian construct in Rome in response to Vandal invasions of northern Italy?\nFor 10 points: What did both Hadrian and Antoninus Pius build in Britannia and is called murus in Latin?\nAURELIAN WALLS/WALL\nB1.  In the same year, which queen of Palmyra did Aurelian set out to defeat because she was restricting shipments of grain to Rome?\nZENOBIA\nB2. Interestingly enough, the city of Orleans in France and New Orleans in Louisiana is named after Aurelian. After his Gallic conquest, what honorific title, previously held by both Valerian and Gallienus did the Senate grant to Aurelian?\nRESTITUTOR ORBIS/RESTORER OF THE WORLD\n\nTU 15: Listen to this latin passage, which I will read twice, and answer the question that follows in English\nUsque gaudens viros coctos Lesbia spectat\nEt populus fervetur dum oculos epulatur \nTanta dolorem fecit ut strigam alia sit\nEtiam Lesbia populous coctos laetare tuetur\nSed tertio die “Cur ego turpis fio” cruda venefica inquit\n\nWhat was happening while people were boiling?\nShe (Lesbia) was feasting on eyes/rejoicing\nB1. When did Lesbia ask the reason for her transformation?\nOn the third day\nB2. Why did she transform?\nShe caused so much pain\n\nTU 16: Catalepton’s final poem is an elegiac epigram for a poet's tombstone signed by Varius, who along with Tucca, prepared what work, meant to solidify Augustus’ relation to Venus, for publication after Virgil’s death?\nFor 10 points: Which work of Virgil details the journey of a Trojan after the war and starts with the phrase “arma virumque cano”?\nTHE AENEID\nB1. Although Virgil died in Brundisium, where was his body later buried?\nNAPLES/PARTHENOPE\n\nB2. Which didactic 4-book work of Virgil, which is dedicated to Maecaenas, wavers in tone between optimism and pessimism and draws inspiration from Hesiod’s Works and Days?\nGEORGICS\n\nTU 17: Which king, referred to as the scion of Cecrops, fought at the battle of the Lapiths and Centaurs with an oak club, participated in the hunt for the Calydonian boar, and is the father of Hippolytus?\nFor 10 points, name the king of Athens who slayed the Minotaur.\nTheseus\nB1. Name both the divine, Olympian father and the mortal father of Theseus\nPoseidon and Aegeus\nB2. Which king of Larissa helped Theseus to abduct Helen?\nPirithous\n\nTU 18: Rome had many powerful women, one of which was Faustina the Younger. Faustina was the daughter of which Emperor?\nFor 10 points: Who was the 4th Good Emperor?\nANTONINUS PIUS\nB1. Antoninus Pius adopted which man as his son to be married to Faustina the Younger, who later wrote a book on Stoic philosophy called Meditations.\nMARCUS AURELIUS\nB2. Why did Faustina the Younger convince Avidius Cassius to rise up and declare himself emperor against the current emperor and her own husband, Marcus Aurelius?\nSHE THOUGHT AURELIUS WAS DEAD/ABOUT TO DIE/SUCCUMBED TO ILLNESS/SHE DIDN’T WANT TO LEAVE THE EMPIRE TO COMMODUS\n\nTU 19: What use of the dative is shown in this sentence?\nVinum magno auxilio mihi est vivendi causa\nDOUBLE DATIVE\nB1. What use of the genitive is shown in the sentence from the tossup (repeat sentence)?\nGENITIVE OF PURPOSE/WITH CAUSA\nB2. What use of the ablative is shown in this sentence?\nDidius Julianus regnum emit magna pecunia\nABLATIVE OF PRICE\n\nTU 20: Suetonius’ De Vita Caesarum details the lives of 11 emperors and what other man?\nFor 10 points: Who was consul in 59 BC, conquered Gaul, and was part of the First Triumvirate?\n(GAIUS) IULIUS CAESAR\nB1. Suetonius also was the first author to mention what famous medical condition of Julius Caesar?\nEPILEPSY/SEIZURES\nB2. Suetonius was close friends with Pliny the Younger and may have even served on his staff when Pliny was proconsul of what province between 110 - 112 AD?\nBITHYNIA AND PONTUS (DO NOT ACCEPT ONLY ONE)\n\n\n`,
        expectedOutput: [["Which spartan king, whose namesake oath was created by Odysseus, had a wife who slept with Zeus while Zeus took the form of a swan\nFor 10 points, name the father of Clytemenestra and stepfather of Helen.", "Tyndareus"], ["After the death of Gratian, which Empire ruled over both halves of the emperor in 383 AD, the last emperor to do so, as after his death the empire was again split and given to his sons Arcadius and Honorius?\nFor 10 points: Which emperor made Christianity the state religion of the Roman Empire?", "THEODOSIUS I/THE GREAT"], ["For the verb miror, mirari, what is the third person, singular, imperfect, active, subjunctive?", "Mīrārētur"], ["Which late author, who was considered a Berber by most historians, converted to Christianity in 386 AD and wrote many famous works such as Confessions, an autobiographical work detailing his search for God?\nFor 10 points: Which author was the bishop of Hippo Regius?", "ST AUGUSTINE (OF HIPPO)"], ["Which man became king by the sun rising from the west, fed Thyestes’ sons to his brother, and was the son of Pelops? \nFor 10 points, name this father of Agamemnon and Menelaus.", "Atreus"], ["What son of Orestes was spared by his usurper and took up residence in Campania in 476 AD when he was around 16 years old?\nFor 10 points: Who is considered to be the last ruler of the Western Roman Empire?", "ROMULUS AUGUSTULUS"], ["What english adjective, derived from pleo, means \"conforming to requirements, submissive\"?", "Compliant"], ["Who, in their 16th poem, which has been censored for most of history, vulgarly addresses Furius and Aurelius by saying “pedicabo ego vos et irrumabo” and also travelled to Bithynia to serve on the staff of Gaius Memmius?\nFor 10 points: Who wrote in hendecasyllabic, was born in Verona, and addressed poems to Lesbia?", "(GAIUS VALERIUS) CATULLUS"], ["What woman had a maid-servant named Eurymedusa, was the daughter of Arete, and a princess of the Phaeacians, and was sent by Athena to wash her clothes when she met Odysseus?\nFor 10 points, name this daughter of Alcinous.", "Nausicaa"], ["What battle, described by historians as the Varian Disaster, or Clares Variana, which resulted in a loss of three Roman legions, caused Augustus to say, according to Suetonius, “Quintili Vare, legiones redde!”.\nFor 10 points: Name the German forest in which the Romans suffered a massive defeat in", "9 AD.\n(BATTLE OF) TEUTOBURG FOREST"], ["Translate the following sentence into English, assuming Texia, Texiae means Texas\nDiscipulus ad Texiam ivit ut nivem effugeret", "THE STUDENT WENT TO TEXAS TO ESCAPE THE SNOW"], ["In 65 AD, the Pisonian Conspiracy was unearthed and numerous well-known authors were implicated. Name the author who was accused for their involvement in this conspiracy who wrote the Epistula Morales\nFor 10 points, name this famous stoicist born in Corbuda.", "SENECA THE YOUNGER"], ["Which sea nymph, whose name means 'falcon', was sought by Glaucus, loved Picus and lived on the island Aeaea? \nFor 10 points, name this daughter of Sol and Perse who spent a year with Ulysses.", "Circe"], ["In 271 AD, what did Aurelian construct in Rome in response to Vandal invasions of northern Italy?\nFor 10 points: What did both Hadrian and Antoninus Pius build in Britannia and is called murus in Latin?", "AURELIAN WALLS/WALL"], ["Listen to this latin passage, which I will read twice, and answer the question that follows in English\nUsque gaudens viros coctos Lesbia spectat\nEt populus fervetur dum oculos epulatur \nTanta dolorem fecit ut strigam alia sit\nEtiam Lesbia populous coctos laetare tuetur\nSed tertio die “Cur ego turpis fio” cruda venefica inquit\n\nWhat was happening while people were boiling?", "She (Lesbia) was feasting on eyes/rejoicing"], ["Catalepton’s final poem is an elegiac epigram for a poet's tombstone signed by Varius, who along with Tucca, prepared what work, meant to solidify Augustus’ relation to Venus, for publication after Virgil’s death?\nFor 10 points: Which work of Virgil details the journey of a Trojan after the war and starts with the phrase “arma virumque cano”?", "THE AENEID"], ["Which king, referred to as the scion of Cecrops, fought at the battle of the Lapiths and Centaurs with an oak club, participated in the hunt for the Calydonian boar, and is the father of Hippolytus?\nFor 10 points, name the king of Athens who slayed the Minotaur.", "Theseus"], ["Rome had many powerful women, one of which was Faustina the Younger. Faustina was the daughter of which Emperor?\nFor 10 points: Who was the 4th Good Emperor?", "ANTONINUS PIUS"], ["What use of the dative is shown in this sentence?\nVinum magno auxilio mihi est vivendi causa", "DOUBLE DATIVE"], ["Suetonius’ De Vita Caesarum details the lives of 11 emperors and what other man?\nFor 10 points: Who was consul in 59 BC, conquered Gaul, and was part of the First Triumvirate?", "(GAIUS) IULIUS CAESAR"]]
    }
}

//Future improvement: build an array of results, then print at the end including number of failures in the header and coloring failed tests
function test() {
    console.group("Tests")
    for (const key in testSet) {
        let str = key + " - "
        console.log(str + (JSON.stringify(splitQuestions(testSet[key].originalText)) == JSON.stringify(testSet[key].expectedOutput)))
    }
    console.groupEnd()
}

test()