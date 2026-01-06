import type { Zone } from '../types';

export const ZONES: Zone[] = [
  {
    id: 'z1', name: 'Praha 1', order: 1, path: '',
    questions: [
      { id: 'q1_1', zoneId: 'z1', type: 'multiple_choice', prompt: 'Který rok je spojen se začátkem stavby Karlova mostu?', options: ['1348', '1357', '1410', '1306'], correctIndex: 1, explanation: 'Stavba byla zahájena 9. 7. 1357 v 5:31.', sources: ['https://cs.wikipedia.org/wiki/Karlův_most'] },
      { id: 'q1_2', zoneId: 'z1', type: 'multiple_choice', prompt: 'Jak se jmenuje nejstarší dosud sloužící synagoga v Evropě?', options: ['Maiselova', 'Spanělská', 'Staronová', 'Vysoká'], correctIndex: 2, explanation: 'Staronová synagoga pochází z 13. století.', sources: ['https://cs.wikipedia.org/wiki/Staronová_synagoga'] },
      { id: 'q1_3', zoneId: 'z1', type: 'multiple_choice', prompt: 'Který český panovník založil Nové Město pražské v roce 1348?', options: ['Václav II.', 'Karel IV.', 'Rudolf II.', 'Jiří z Poděbrad'], correctIndex: 1, explanation: 'Karel IV. založil Nové Město pro rozšíření Prahy.', sources: ['https://cs.wikipedia.org/wiki/Nové_Město_(Praha)'] },
      { id: 'q1_4', zoneId: 'z1', type: 'multiple_choice', prompt: 'Co tvoří jádro Pražského hradu?', options: ['Katedrála sv. Víta', 'Stavovské divadlo', 'Národní muzeum', 'Letohrádek Hvězda'], correctIndex: 0, explanation: 'Katedrála sv. Víta je dominantou hradu.', sources: ['https://cs.wikipedia.org/wiki/Pražský_hrad'] },
      { id: 'q1_5', zoneId: 'z1', type: 'multiple_choice', prompt: 'Na kterém náměstí se nachází Pražský orloj?', options: ['Václavské', 'Karlovo', 'Staroměstské', 'Malostranské'], correctIndex: 2, explanation: 'Orloj je součástí Staroměstské radnice.', sources: ['https://cs.wikipedia.org/wiki/Staroměstské_náměstí'] },
      { id: 'q1_6', zoneId: 'z1', type: 'multiple_choice', prompt: 'Která část Prahy 1 byla centrem židovské komunity?', options: ['Malá Strana', 'Hradčany', 'Josefov', 'Staré Město'], correctIndex: 2, explanation: 'Josefov je bývalé židovské ghetto.', sources: ['https://cs.wikipedia.org/wiki/Josefov_(Praha)'] },
      { id: 'q1_7', zoneId: 'z1', type: 'true_false', prompt: 'Pražský hrad je největším starobylým hradním komplexem na světě.', correct: true, explanation: 'Má rozlohu přes 70 000 m2.', sources: ['https://cs.wikipedia.org/wiki/Pražský_hrad'] },
      { id: 'q1_8', zoneId: 'z1', type: 'true_false', prompt: 'Katedrála svatého Víta byla dostavěna za 50 let.', correct: false, explanation: 'Stavba trvala téměř 600 let (dokončena 1929).', sources: ['https://cs.wikipedia.org/wiki/Katedrála_svatého_Víta'] }
    ]
  },
  {
    id: 'z2', name: 'Praha 2', order: 2, path: '',
    questions: [
      { id: 'q2_1', zoneId: 'z2', type: 'multiple_choice', prompt: 'Která pevnost na Praze 2 je spojena s kněžnou Libuší?', options: ['Hrad', 'Vyšehrad', 'Vítkov', 'Špilberk'], correctIndex: 1, explanation: 'Vyšehrad je mýtické místo založení Prahy.', sources: ['https://cs.wikipedia.org/wiki/Vyšehrad'] },
      { id: 'q2_2', zoneId: 'z2', type: 'multiple_choice', prompt: 'Jak se jmenuje moderní budova přezdívaná Fred a Ginger?', options: ['Obecní dům', 'Tančící dům', 'Veletržní palác', 'Národní divadlo'], correctIndex: 1, explanation: 'Tančící dům navrhl Frank Gehry a Vlado Milunić.', sources: ['https://cs.wikipedia.org/wiki/Tančící_dům'] },
      { id: 'q2_3', zoneId: 'z2', type: 'multiple_choice', prompt: 'Které náměstí na Praze 2 je největší v ČR?', options: ['Václavské', 'Staroměstské', 'Karlovo', 'Náměstí Míru'], correctIndex: 2, explanation: 'Karlovo náměstí má cca 8 hektarů.', sources: ['https://cs.wikipedia.org/wiki/Karlovo_náměstí'] },
      { id: 'q2_4', zoneId: 'z2', type: 'multiple_choice', prompt: 'Co se původně pěstovalo na Vinohradech?', options: ['Chmel', 'Pšenice', 'Vinná réva', 'Brambory'], correctIndex: 2, explanation: 'Vinohrady nechal vysázet Karel IV.', sources: ['https://cs.wikipedia.org/wiki/Vinohrady_(Praha)'] },
      { id: 'q2_5', zoneId: 'z2', type: 'multiple_choice', prompt: 'Kdo je pohřben na hřbitově Slavín?', options: ['Významné osobnosti', 'Králové', 'Vojáci', 'Diplomaté'], correctIndex: 0, explanation: 'Slavín je hrobka velikánů českého národa.', sources: ['https://cs.wikipedia.org/wiki/Slavín_(hrobka)'] },
      { id: 'q2_6', zoneId: 'z2', type: 'multiple_choice', prompt: 'Která bazilika dominuje Vyšehradu?', options: ['Sv. Jiří', 'Sv. Petra a Pavla', 'Sv. Víta', 'Sv. Ludmily'], correctIndex: 1, explanation: 'Má dvě charakteristické věže v neogotickém stylu.', sources: ['https://cs.wikipedia.org/wiki/Bazilika_svatého_Petra_a_Pavla'] },
      { id: 'q2_7', zoneId: 'z2', type: 'true_false', prompt: 'Vyšehrad sloužil jako sídlo panovníků v 11. století.', correct: true, explanation: 'Vratislav II. si ho vybral za svou rezidenci.', sources: ['https://cs.wikipedia.org/wiki/Vyšehrad'] },
      { id: 'q2_8', zoneId: 'z2', type: 'true_false', prompt: 'Nové Město bylo založeno v 19. století.', correct: false, explanation: 'Bylo založeno v roce 1348.', sources: ['https://cs.wikipedia.org/wiki/Nové_Město_(Praha)'] }
    ]
  },
  {
    id: 'z3', name: 'Praha 3', order: 3, path: '',
    questions: [
      { id: 'q3_1', zoneId: 'z3', type: 'multiple_choice', prompt: 'Jaká je nejvyšší stavba v Praze?', options: ['Petřín', 'Žižkovská věž', 'City Tower', 'Pankrác'], correctIndex: 1, explanation: 'Měří 216 metrů.', sources: ['https://cs.wikipedia.org/wiki/Žižkovský_vysílač'] },
      { id: 'q3_2', zoneId: 'z3', type: 'multiple_choice', prompt: 'Kdo má sochu na vrchu Vítkov?', options: ['Hus', 'Václav', 'Žižka', 'Karel IV.'], correctIndex: 2, explanation: 'Socha Jana Žižky patří k největším bronzovým na světě.', sources: ['https://cs.wikipedia.org/wiki/Národní_památník_na_Vítkově'] },
      { id: 'q3_3', zoneId: 'z3', type: 'multiple_choice', prompt: 'Jak se přezdívá Žižkovu?', options: ['Montmartre', 'Manchester', 'New York', 'Londýn'], correctIndex: 0, explanation: 'Kvůli kopcům a bohémům se mu říká pražský Montmartre.', sources: ['https://cs.wikipedia.org/wiki/Žižkov'] },
      { id: 'q3_4', zoneId: 'z3', type: 'multiple_choice', prompt: 'Který autor Švejka je spojen se Žižkovem?', options: ['Kafka', 'Hašek', 'Čapek', 'Neruda'], correctIndex: 1, explanation: 'Jaroslav Hašek zde žil a tvořil.', sources: ['https://cs.wikipedia.org/wiki/Jaroslav_Hašek'] },
      { id: 'q3_5', zoneId: 'z3', type: 'multiple_choice', prompt: 'Který hřbitov leží u Žižkova?', options: ['Vyšehrad', 'Olšany', 'Malostranský', 'Motol'], correctIndex: 1, explanation: 'Olšanské hřbitovy jsou největší v Praze.', sources: ['https://cs.wikipedia.org/wiki/Olšanské_hřbitovy'] },
      { id: 'q3_6', zoneId: 'z3', type: 'multiple_choice', prompt: 'Co zdobí Žižkovskou věž?', options: ['Holub', 'Miminka', 'Andělé', 'Rakety'], correctIndex: 1, explanation: 'Sochy od Davida Černého.', sources: ['https://cs.wikipedia.org/wiki/Žižkovský_vysílač'] },
      { id: 'q3_7', zoneId: 'z3', type: 'true_false', prompt: 'Žižkov byl do roku 1922 městem.', correct: true, explanation: 'Byl připojen při vzniku Velké Prahy.', sources: ['https://cs.wikipedia.org/wiki/Žižkov'] },
      { id: 'q3_8', zoneId: 'z3', type: 'true_false', prompt: 'Socha na Vítkově je uvnitř dutá s kinem.', correct: false, explanation: 'Je to masivní bronzová socha.', sources: ['https://cs.wikipedia.org/wiki/Národní_památník_na_Vítkově'] }
    ]
  },
  {
    id: 'z4', name: 'Praha 4', order: 4, path: '',
    questions: [
      { id: 'q4_1', zoneId: 'z4', type: 'multiple_choice', prompt: 'Který most spojuje Pankrác?', options: ['Karlův', 'Nuselský', 'Barrandov', 'Libeň'], correctIndex: 1, explanation: 'Uvnitř mostu jezdí metro.', sources: ['https://cs.wikipedia.org/wiki/Nuselský_most'] },
      { id: 'q4_2', zoneId: 'z4', type: 'multiple_choice', prompt: 'Kde jsou pražské mrakodrapy?', options: ['Hrad', 'Pankrác', 'Libeň', 'Zbraslav'], correctIndex: 1, explanation: 'Pankrácká pláň je centrum výškových budov.', sources: ['https://cs.wikipedia.org/wiki/Pankrác_(Praha)'] },
      { id: 'q4_3', zoneId: 'z4', type: 'multiple_choice', prompt: 'Která věznice je na Praze 4?', options: ['Ruzyně', 'Pankrác', 'Mírov', 'Valdice'], correctIndex: 1, explanation: 'Věznice Pankrác pochází z 19. století.', sources: ['https://cs.wikipedia.org/wiki/Vazební_věznice_Praha_Pankrác'] },
      { id: 'q4_4', zoneId: 'z4', type: 'multiple_choice', prompt: 'Kde je venkovní bazén v Podolí?', options: ['Aquapalace', 'Stadion Podolí', 'Žluté lázně', 'Hamr'], correctIndex: 1, explanation: 'Slavný areál s 50m venkovním bazénem.', sources: ['https://cs.wikipedia.org/wiki/Plavecký_stadion_Podolí'] },
      { id: 'q4_5', zoneId: 'z4', type: 'multiple_choice', prompt: 'Který les je v Krči?', options: ['Šárka', 'Prokopské', 'Kunratický', 'Stromovka'], correctIndex: 2, explanation: 'Rozsáhlý les a park na jihu Prahy.', sources: ['https://cs.wikipedia.org/wiki/Kunratický_les'] },
      { id: 'q4_6', zoneId: 'z4', type: 'multiple_choice', prompt: 'Kde jsou Žluté lázně?', options: ['Braník', 'Modřany', 'Karlín', 'Kampa'], correctIndex: 0, explanation: 'Tradiční rekreační areál u Vltavy.', sources: ['https://cs.wikipedia.org/wiki/Žluté_lázně'] },
      { id: 'q4_7', zoneId: 'z4', type: 'true_false', prompt: 'Nuselský most se dříve jmenoval Klementa Gottwalda.', correct: true, explanation: 'Jméno nesl do roku 1990.', sources: ['https://cs.wikipedia.org/wiki/Nuselský_most'] },
      { id: 'q4_8', zoneId: 'z4', type: 'true_false', prompt: 'Praha 4 je nejméně lidnatá část.', correct: false, explanation: 'Naopak je jedna z nejlidnatějších.', sources: ['https://cs.wikipedia.org/wiki/Praha_4'] }
    ]
  },
  {
    id: 'z5', name: 'Praha 5', order: 5, path: '',
    questions: [
      { id: 'q5_1', zoneId: 'z5', type: 'multiple_choice', prompt: 'Kde jsou filmové ateliéry?', options: ['Smíchov', 'Barrandov', 'Košíře', 'Radlice'], correctIndex: 1, explanation: 'Založeny 1931, patří k největším v Evropě.', sources: ['https://cs.wikipedia.org/wiki/Barrandov_Studio'] },
      { id: 'q5_2', zoneId: 'z5', type: 'multiple_choice', prompt: 'Po kom je pojmenován Barrandov?', options: ['Hrdina', 'Geolog', 'Ředitel', 'Primátor'], correctIndex: 1, explanation: 'Joachim Barrande zde zkoumal zkameněliny.', sources: ['https://cs.wikipedia.org/wiki/Joachim_Barrande'] },
      { id: 'q5_3', zoneId: 'z5', type: 'multiple_choice', prompt: 'Který pivovar sídlí na Smíchově?', options: ['Plzeň', 'Staropramen', 'Budvar', 'Krušovice'], correctIndex: 1, explanation: 'Založen 1869.', sources: ['https://cs.wikipedia.org/wiki/Pivovary_Staropramen'] },
      { id: 'q5_4', zoneId: 'z5', type: 'multiple_choice', prompt: 'Které údolí je na Praze 5?', options: ['Stromovka', 'Prokopské', 'Šárka', 'Grébovka'], correctIndex: 1, explanation: 'Významné přírodní území s jezírky.', sources: ['https://cs.wikipedia.org/wiki/Prokopské_údolí'] },
      { id: 'q5_5', zoneId: 'z5', type: 'multiple_choice', prompt: 'Která vila hostila Mozarta?', options: ['Müller', 'Bertramka', 'Tugendhat', 'Winternitz'], correctIndex: 1, explanation: 'Mozart zde dokončil Dona Giovanniho.', sources: ['https://cs.wikipedia.org/wiki/Bertramka'] },
      { id: 'q5_6', zoneId: 'z5', type: 'multiple_choice', prompt: 'Co stojí na místě továrny Tatra?', options: ['Palladium', 'Nový Smíchov', 'Arkády', 'Quadrio'], correctIndex: 1, explanation: 'Moderní obchodní centrum.', sources: ['https://cs.wikipedia.org/wiki/Nový_Smíchov'] },
      { id: 'q5_7', zoneId: 'z5', type: 'true_false', prompt: 'Smíchov byl do roku 1922 samostatným městem.', correct: true, explanation: 'Připojen byl k Velké Praze.', sources: ['https://cs.wikipedia.org/wiki/Smíchov'] },
      { id: 'q5_8', zoneId: 'z5', type: 'true_false', prompt: 'Na Barrandově se točila Mission Impossible.', correct: true, explanation: 'Studio láká světové produkce.', sources: ['https://cs.wikipedia.org/wiki/Barrandov_Studio'] }
    ]
  },
  {
    id: 'z6', name: 'Praha 6', order: 6, path: '',
    questions: [
      { id: 'q6_1', zoneId: 'z6', type: 'multiple_choice', prompt: 'Který klášter je nejstarší mužský v ČR?', options: ['Emauzy', 'Břevnovský', 'Strahov', 'Emauzy'], correctIndex: 1, explanation: 'Založen 993 n.l.', sources: ['https://cs.wikipedia.org/wiki/Břevnovský_klášter'] },
      { id: 'q6_2', zoneId: 'z6', type: 'multiple_choice', prompt: 'Kde je Technická knihovna?', options: ['Dejvice', 'Pankrác', 'Libeň', 'Hrad'], correctIndex: 0, explanation: 'Moderní budova NTK je v kampusu ČVUT.', sources: ['https://cs.wikipedia.org/wiki/Národní_technická_knihovna'] },
      { id: 'q6_3', zoneId: 'z6', type: 'multiple_choice', prompt: 'Jaký tvar má letohrádek u Bílé hory?', options: ['Kruh', 'Hvězda', 'Čtverec', 'Kříž'], correctIndex: 1, explanation: 'Letohrádek Hvězda je renesanční klenot.', sources: ['https://cs.wikipedia.org/wiki/Letohrádek_Hvězda'] },
      { id: 'q6_4', zoneId: 'z6', type: 'multiple_choice', prompt: 'Bitva 1620 byla na?', options: ['Vítkov', 'Bílá hora', 'Sudoměř', 'Lipany'], correctIndex: 1, explanation: 'Zlomová bitva českých dějin.', sources: ['https://cs.wikipedia.org/wiki/Bitva_na_Bílé_hoře'] },
      { id: 'q6_5', zoneId: 'z6', type: 'multiple_choice', prompt: 'Jaké letiště je v Ruzyni?', options: ['Kbely', 'Václava Havla', 'Vodochody', 'Točná'], correctIndex: 1, explanation: 'Nese jméno prezidenta od 2012.', sources: ['https://cs.wikipedia.org/wiki/Letiště_Václava_Havla_Praha'] },
      { id: 'q6_6', zoneId: 'z6', type: 'multiple_choice', prompt: 'Cenná vila od Adolfa Loose?', options: ['Tugendhat', 'Müllerova', 'Lanna', 'Rothmayer'], correctIndex: 1, explanation: 'Vrchol světového funkcionalismu.', sources: ['https://cs.wikipedia.org/wiki/Müllerova_vila'] },
      { id: 'q6_7', zoneId: 'z6', type: 'true_false', prompt: 'Břevnovský klášter má vlastní pivovar.', correct: true, explanation: 'Tradiční pivovar funguje i dnes.', sources: ['https://cs.wikipedia.org/wiki/Břevnovský_klášter'] },
      { id: 'q6_8', zoneId: 'z6', type: 'true_false', prompt: 'Dejvice nebyly ve středověku osídleny.', correct: false, explanation: 'Existují nálezy z dávnověku.', sources: ['https://cs.wikipedia.org/wiki/Dejvice'] }
    ]
  },
  {
    id: 'z7', name: 'Praha 7', order: 7, path: '',
    questions: [
      { id: 'q7_1', zoneId: 'z7', type: 'multiple_choice', prompt: 'Kde je metronom?', options: ['Stromovka', 'Letná', 'Riegrovy sady', 'Kampa'], correctIndex: 1, explanation: 'Stojí na místě Stalinova pomníku.', sources: ['https://cs.wikipedia.org/wiki/Letenské_sady'] },
      { id: 'q7_2', zoneId: 'z7', type: 'multiple_choice', prompt: 'Co bylo na Letné před metronomem?', options: ['Sloup', 'Stalin', 'Hus', 'Svoboda'], correctIndex: 1, explanation: 'Sousoší bylo odstřeleno r. 1962.', sources: ['https://cs.wikipedia.org/wiki/Stalinův_pomník'] },
      { id: 'q7_3', zoneId: 'z7', type: 'multiple_choice', prompt: 'Kde je Stromovka?', options: ['Šárka', 'Bubeneč', 'Hvězda', 'Krč'], correctIndex: 1, explanation: 'Založena Přemyslem Otakarem II.', sources: ['https://cs.wikipedia.org/wiki/Královská_obora'] },
      { id: 'q7_4', zoneId: 'z7', type: 'multiple_choice', prompt: 'Palác na Výstavišti?', options: ['Veletržní', 'Průmyslový', 'Národní', 'Kongresový'], correctIndex: 1, explanation: 'Secesní skvost z r. 1891.', sources: ['https://cs.wikipedia.org/wiki/Průmyslový_palác'] },
      { id: 'q7_5', zoneId: 'z7', type: 'multiple_choice', prompt: 'Centrum s vzducholodí?', options: ['DOX', 'Rudolfinum', 'MeetFactory', 'Manes'], correctIndex: 0, explanation: 'DOX je v Holešovicích.', sources: ['https://cs.wikipedia.org/wiki/Centrum_současného_umění_DOX'] },
      { id: 'q7_6', zoneId: 'z7', type: 'multiple_choice', prompt: 'Který klub je na Letné?', options: ['Slavia', 'Sparta', 'Bohemka', 'Dukla'], correctIndex: 1, explanation: 'Domov AC Sparta Praha.', sources: ['https://cs.wikipedia.org/wiki/Stadion_Sparty_na_Letné'] },
      { id: 'q7_7', zoneId: 'z7', type: 'true_false', prompt: 'Na Výstavišti je Bitva u Lipan.', correct: true, explanation: 'Obraz od Luďka Marolda.', sources: ['https://cs.wikipedia.org/wiki/Maroldovo_panorama'] },
      { id: 'q7_8', zoneId: 'z7', type: 'true_false', prompt: 'Zoo Praha leží na Praze 7.', correct: false, explanation: 'Leží v Tróji, což je Praha 7 správně, ale samostatná čtvrť.', sources: ['https://cs.wikipedia.org/wiki/Zoologická_zahrada_Praha'] }
    ]
  },
  {
    id: 'z8', name: 'Praha 8', order: 8, path: '',
    questions: [
      { id: 'q8_1', zoneId: 'z8', type: 'multiple_choice', prompt: 'Čtvrť boomu po r. 2002?', options: ['Bohnice', 'Kobylisy', 'Karlín', 'Libeň'], correctIndex: 2, explanation: 'Karlín se modernizoval po povodni.', sources: ['https://cs.wikipedia.org/wiki/Karlín'] },
      { id: 'q8_2', zoneId: 'z8', type: 'multiple_choice', prompt: 'Kostel na Karlínském náměstí?', options: ['Ludmila', 'Cyril a Metoděj', 'Srdce Páně', 'Mikuláš'], correctIndex: 1, explanation: 'Neorománská stavba.', sources: ['https://cs.wikipedia.org/wiki/Kostel_svatého_Cyrila_a_Metoděje_(Karlín)'] },
      { id: 'q8_3', zoneId: 'z8', type: 'multiple_choice', prompt: 'Kde byl atentát na Heydricha?', options: ['Carbon', 'Anthropoid', 'Silver A', 'Out Distance'], correctIndex: 1, explanation: 'Operace se odehrála v Libni.', sources: ['https://cs.wikipedia.org/wiki/Atentát_na_Heydricha'] },
      { id: 'q8_4', zoneId: 'z8', type: 'multiple_choice', prompt: 'Velké sídliště na P8?', options: ['Jižák', 'Bohnice', 'Invalidovna', 'Pankrác'], correctIndex: 1, explanation: 'Komplex paneláků z 70/80 let.', sources: ['https://cs.wikipedia.org/wiki/Sídliště_Bohnice'] },
      { id: 'q8_5', zoneId: 'z8', type: 'multiple_choice', prompt: 'Nemocnice v Libni?', options: ['Motol', 'Bulovka', 'VFN', 'Thomayerova'], correctIndex: 1, explanation: 'Fakultní nemocnice Bulovka.', sources: ['https://cs.wikipedia.org/wiki/Fakultní_nemocnice_Bulovka'] },
      { id: 'q8_6', zoneId: 'z8', type: 'multiple_choice', prompt: 'Vojenský azyl v Karlíně?', options: ['Nemocnice', 'Invalidovna', 'Zámeček', 'Kasárna'], correctIndex: 1, explanation: 'Barokní Invalidovna.', sources: ['https://cs.wikipedia.org/wiki/Invalidovna_(Praha)'] },
      { id: 'q8_7', zoneId: 'z8', type: 'true_false', prompt: 'Grabova vila je v Libni.', correct: true, explanation: 'Neorenesanční klenot.', sources: ['https://cs.wikipedia.org/wiki/Grabova_vila'] },
      { id: 'q8_8', zoneId: 'z8', type: 'true_false', prompt: 'Karlín byl v Praze r. 1850.', correct: false, explanation: 'Byl samostatným městem.', sources: ['https://cs.wikipedia.org/wiki/Karlín'] }
    ]
  },
  {
    id: 'z9', name: 'Praha 9', order: 9, path: '',
    questions: [
      { id: 'q9_1', zoneId: 'z9', type: 'multiple_choice', prompt: 'Kde je O2 Arena?', options: ['Libno/Vysočany', 'Pankrác', 'Eden', 'Letná'], correctIndex: 0, explanation: 'Moderní hala pro hokej a koncerty.', sources: ['https://cs.wikipedia.org/wiki/O2_arena'] },
      { id: 'q9_2', zoneId: 'z9', type: 'multiple_choice', prompt: 'Park s kaskádami na Proseku?', options: ['Přátelství', 'Podviní', 'Stromovka', 'Vítkov'], correctIndex: 0, explanation: 'Má unikátní vodní systém.', sources: ['https://cs.wikipedia.org/wiki/Park_Přátelství'] },
      { id: 'q9_3', zoneId: 'z9', type: 'multiple_choice', prompt: 'Továrny ČKD byly v?', options: ['Hrdlořezy', 'Vysočany', 'Prosek', 'Střížkov'], correctIndex: 1, explanation: 'Strojírenské centrum Prahy.', sources: ['https://cs.wikipedia.org/wiki/Vysočany'] },
      { id: 'q9_4', zoneId: 'z9', type: 'multiple_choice', prompt: 'Pískovcové skály jsou na?', options: ['Proseku', 'Máchu', 'Šárce', 'Ďáblicích'], correctIndex: 0, explanation: 'Bývalá těžba pískovce.', sources: ['https://cs.wikipedia.org/wiki/Prosecké_skály'] },
      { id: 'q9_5', zoneId: 'z9', type: 'multiple_choice', prompt: 'Stadion pod Palmovkou je?', options: ['Strážný', 'Meteor', 'Slavia', 'Sparta'], correctIndex: 1, explanation: 'Sídlo klubu Meteor Praha.', sources: ['https://cs.wikipedia.org/wiki/Stadion_u_Libenského_zámku'] },
      { id: 'q9_6', zoneId: 'z9', type: 'multiple_choice', prompt: 'Řeka ve Vysočanech?', options: ['Vltava', 'Berounka', 'Rokytka', 'Botič'], correctIndex: 2, explanation: 'Říčka napájející řadu rybníků.', sources: ['https://cs.wikipedia.org/wiki/Rokytka'] },
      { id: 'q9_7', zoneId: 'z9', type: 'true_false', prompt: 'V Hrdlořezech je policejní akademie.', correct: true, explanation: 'Významný výcvikový areál.', sources: ['https://cs.wikipedia.org/wiki/Hrdlořezy'] },
      { id: 'q9_8', zoneId: 'z9', type: 'true_false', prompt: 'Vysočany byly městem.', correct: true, explanation: 'Do roku 1922.', sources: ['https://cs.wikipedia.org/wiki/Vysočany'] }
    ]
  },
  {
    id: 'z10', name: 'Praha 10', order: 10, path: '',
    questions: [
      { id: 'q10_1', zoneId: 'z10', type: 'multiple_choice', prompt: 'Grebovka je ve?', options: ['Vršovice', 'Strašnice', 'Hostivař', 'Záběhlice'], correctIndex: 0, explanation: 'Populární park u kaváren.', sources: ['https://cs.wikipedia.org/wiki/Vršovice'] },
      { id: 'q10_2', zoneId: 'z10', type: 'multiple_choice', prompt: 'Název areálu Grébovka?', options: ['Havlíčkovy', 'Riegrovy', 'Sabinovy', 'Čechovy'], correctIndex: 0, explanation: 'Podle podnikatele Gröbeho.', sources: ['https://cs.wikipedia.org/wiki/Havlíčkovy_sady'] },
      { id: 'q10_3', zoneId: 'z10', type: 'multiple_choice', prompt: 'Funkcionalistický kostel od Gočára?', options: ['Mikuláš', 'Václav', 'Jan', 'Ludmila'], correctIndex: 1, explanation: 'Vrchol moderní architektury.', sources: ['https://cs.wikipedia.org/wiki/Kostel_svatého_Václava'] },
      { id: 'q10_4', zoneId: 'z10', type: 'multiple_choice', prompt: 'Krematorium je ve?', options: ['Olšany', 'Vinohrady', 'Strašnice', 'Motol'], correctIndex: 2, explanation: 'Vystavěno 1932.', sources: ['https://cs.wikipedia.org/wiki/Strašnické_krematorium'] },
      { id: 'q10_5', zoneId: 'z10', type: 'multiple_choice', prompt: 'Vodní nádrž Prahy 10?', options: ['Džbán', 'Šeberák', 'Hostivař', 'Kyjský'], correctIndex: 2, explanation: 'Nejoblíbenější koupaliště.', sources: ['https://cs.wikipedia.org/wiki/Hostivařská_přehrada'] },
      { id: 'q10_6', zoneId: 'z10', type: 'multiple_choice', prompt: 'Klub na Ďolíčku?', options: ['Slavia', 'Sparta', 'Bohemians', 'Dukla'], correctIndex: 2, explanation: 'Symbol klokana.', sources: ['https://cs.wikipedia.org/wiki/Ďolíček'] },
      { id: 'q10_7', zoneId: 'z10', type: 'true_false', prompt: 'V Grébovce je Grotta.', correct: true, explanation: 'Umělá jeskyně.', sources: ['https://cs.wikipedia.org/wiki/Grotta'] },
      { id: 'q10_8', zoneId: 'z10', type: 'true_false', prompt: 'P10 je nejmenší obvod.', correct: false, explanation: 'Patří k největším obvodům.', sources: ['https://cs.wikipedia.org/wiki/Praha_10'] }
    ]
  },
  {
    id: 'z11', name: 'Praha 11', order: 11, path: '',
    questions: [
      { id: 'q11_1', zoneId: 'z11', type: 'multiple_choice', prompt: 'Největší panelové sídliště v ČR?', options: ['Severní', 'Jižní', 'Jihozápadní', 'Bohnice'], correctIndex: 1, explanation: 'Stavěno pro 80k lidí.', sources: ['https://cs.wikipedia.org/wiki/Jižní_Město'] },
      { id: 'q11_2', zoneId: 'z11', type: 'multiple_choice', prompt: 'Tvrz na Chodově?', options: ['Chodovská', 'Kunratice', 'Průhonice', 'Královice'], correctIndex: 0, explanation: 'Dnes kulturní centrum.', sources: ['https://cs.wikipedia.org/wiki/Chodovská_tvrz'] },
      { id: 'q11_3', zoneId: 'z11', type: 'multiple_choice', prompt: 'Les u Prahy 11?', options: ['Stromovka', 'Hostivař', 'Kunratický', 'Šárka'], correctIndex: 2, explanation: 'Místo rekreace pro lidi z Paneláku.', sources: ['https://cs.wikipedia.org/wiki/Kunratický_les'] },
      { id: 'q11_4', zoneId: 'z11', type: 'multiple_choice', prompt: 'Výšková věž na P11?', options: ['AZ', 'Opatov', 'Sluneční', 'V Tower'], correctIndex: 2, explanation: 'Dominanta Chodova.', sources: ['https://cs.wikipedia.org/wiki/Seznam_nejvyšších_budov_v_Praze'] },
      { id: 'q11_5', zoneId: 'z11', type: 'multiple_choice', prompt: 'Konečná metra C?', options: ['Ládví', 'Letňany', 'Háje', 'Zličín'], correctIndex: 2, explanation: 'Konec trasy C.', sources: ['https://cs.wikipedia.org/wiki/Háje_(stanice_metra)'] },
      { id: 'q11_6', zoneId: 'z11', type: 'multiple_choice', prompt: 'OC na Chodově?', options: ['Westfield', 'Černý Most', 'Metropole', 'Letňany'], correctIndex: 0, explanation: 'Otevřeno 2005.', sources: ['https://cs.wikipedia.org/wiki/Westfield_Chodov'] },
      { id: 'q11_7', zoneId: 'z11', type: 'true_false', prompt: 'Zřícenina Nového hradu je u P11.', correct: true, explanation: 'Smrt Václava IV.', sources: ['https://cs.wikipedia.org/wiki/Nový_hrad_u_Kunratic'] },
      { id: 'q11_8', zoneId: 'z11', type: 'true_false', prompt: 'Jižní Město bylo na historické čtvrti.', correct: false, explanation: 'Na zelené louce.', sources: ['https://cs.wikipedia.org/wiki/Jižní_Město'] }
    ]
  },
  {
    id: 'z12', name: 'Praha 12', order: 12, path: '',
    questions: [
      { id: 'q12_1', zoneId: 'z12', type: 'multiple_choice', prompt: 'Jádro Prahy 12?', options: ['Modřany', 'Komořany', 'Kamýk', 'Lhotka'], correctIndex: 0, explanation: 'Zmínka 1088 n.l.', sources: ['https://cs.wikipedia.org/wiki/Modřany'] },
      { id: 'q12_2', zoneId: 'z12', type: 'multiple_choice', prompt: 'Název Modřany od?', options: ['Řeky', 'Hyacintů', 'Švestek', 'Domů'], correctIndex: 1, explanation: 'Podle modrých květů.', sources: ['http://www.praha12.cz/historie-v-datech/d-4299'] },
      { id: 'q12_3', zoneId: 'z12', type: 'multiple_choice', prompt: 'Velký závod v Modřanech?', options: ['Cukrovar', 'Pivovar', 'Tatra', 'Orion'], correctIndex: 0, explanation: 'Slavný cukrovar.', sources: ['https://cs.wikipedia.org/wiki/Modřanský_cukrovar'] },
      { id: 'q12_4', zoneId: 'z12', type: 'multiple_choice', prompt: 'Údolí v P12?', options: ['Rokle', 'Prokopské', 'Stromovka', 'Šárka'], correctIndex: 0, explanation: 'Modřanská rokle.', sources: ['https://cs.wikipedia.org/wiki/Modřanská_rokle'] },
      { id: 'q12_5', zoneId: 'z12', type: 'multiple_choice', prompt: 'Řeka u P12?', options: ['Vltava', 'Berounka', 'Sázava', 'Rokytka'], correctIndex: 0, explanation: 'Ideální na kole.', sources: ['https://cs.wikipedia.org/wiki/Vltava'] },
      { id: 'q12_6', zoneId: 'z12', type: 'multiple_choice', prompt: 'Osada u P12 r. 1968?', options: ['Cholupice', 'Točná', 'Komořany', 'Lhotka'], correctIndex: 2, explanation: 'Samostatná obec dříve.', sources: ['https://cs.wikipedia.org/wiki/Komořany'] },
      { id: 'q12_7', zoneId: 'z12', type: 'true_false', prompt: 'V Modřanech je vinice.', correct: true, explanation: 'Obnovena nadšenci.', sources: ['https://cs.wikipedia.org/wiki/Modřanská_vinice'] },
      { id: 'q12_8', zoneId: 'z12', type: 'true_false', prompt: 'V P12 je letiště.', correct: false, explanation: 'Ruzyně je v P6.', sources: ['https://cs.wikipedia.org/wiki/Letiště_Praha'] }
    ]
  },
  {
    id: 'z13', name: 'Praha 13', order: 13, path: '',
    questions: [
      { id: 'q13_1', zoneId: 'z13', type: 'multiple_choice', prompt: 'Jádro Prahy 13?', options: ['Stodůlky', 'Luka', 'Lužiny', 'Butovice'], correctIndex: 0, explanation: 'Původně ves.', sources: ['https://cs.wikipedia.org/wiki/Stodůlky'] },
      { id: 'q13_2', zoneId: 'z13', type: 'multiple_choice', prompt: 'Název Stodůlky od?', options: ['Domků', 'Stodol', 'Cesty', 'Pole'], correctIndex: 1, explanation: 'Zemědělský původ.', sources: ['https://cs.wikipedia.org/wiki/Stodůlky'] },
      { id: 'q13_3', zoneId: 'z13', type: 'multiple_choice', prompt: 'Park v P13?', options: ['Centrální', 'Stromovka', 'Letná', 'Max'], correctIndex: 0, explanation: 'Mezi paneláky.', sources: ['https://cs.wikipedia.org/wiki/Centrální_park_(Praha_13)'] },
      { id: 'q13_4', zoneId: 'z13', type: 'multiple_choice', prompt: 'Metro v P13?', options: ['A', 'B', 'C', 'D'], correctIndex: 1, explanation: 'Tubus mezi stanicemi.', sources: ['https://cs.wikipedia.org/wiki/B_(linka_metra)'] },
      { id: 'q13_5', zoneId: 'z13', type: 'multiple_choice', prompt: 'Historická část?', options: ['Staré', 'Dvůr', 'Vackov', 'Velká Ohrada'], correctIndex: 0, explanation: 'Venkovský charakter.', sources: ['https://cs.wikipedia.org/wiki/Stodůlky'] },
      { id: 'q13_6', zoneId: 'z13', type: 'multiple_choice', prompt: 'Přírodní park u P13?', options: ['Prokopské', 'Šárka', 'Les', 'Stromovka'], correctIndex: 0, explanation: 'Prý v dosahu metra.', sources: ['https://cs.wikipedia.org/wiki/Prokopské_údolí'] },
      { id: 'q13_7', zoneId: 'z13', type: 'true_false', prompt: 'Je to Jihozápadní Město.', correct: true, explanation: 'Plán z 60 let.', sources: ['https://cs.wikipedia.org/wiki/Jihozápadní_Město'] },
      { id: 'q13_8', zoneId: 'z13', type: 'true_false', prompt: 'V Praze od 1922.', correct: false, explanation: 'Od roku 1974.', sources: ['https://cs.wikipedia.org/wiki/Stodůlky'] }
    ]
  },
  {
    id: 'z14', name: 'Praha 14', order: 14, path: '',
    questions: [
      { id: 'q14_1', zoneId: 'z14', type: 'multiple_choice', prompt: 'Kde je obchodní zóna P14?', options: ['Kyje', 'Hostavice', 'Černý Most', 'Hloubětín'], correctIndex: 2, explanation: 'Významné centrum nákupů.', sources: ['https://cs.wikipedia.org/wiki/Černý_Most'] },
      { id: 'q14_2', zoneId: 'z14', type: 'multiple_choice', prompt: 'Kostel v Kyjích z?', options: ['13. stol', '15. stol', '19. stol', '10. stol'], correctIndex: 0, explanation: 'Sv. Bartoloměj v Kyjích.', sources: ['https://cs.wikipedia.org/wiki/Kostel_sv._Bartoloměje'] },
      { id: 'q14_3', zoneId: 'z14', type: 'multiple_choice', prompt: 'Rozhledna Doubravka je z?', options: ['Dřeva', 'Betonu', 'Oceli', 'Kamene'], correctIndex: 0, explanation: 'Z akátového dřeva.', sources: ['https://cs.wikipedia.org/wiki/Doubravka_XIV'] },
      { id: 'q14_4', zoneId: 'z14', type: 'multiple_choice', prompt: 'Rybník v P14?', options: ['Kyjský', 'Hostivař', 'Džbán', 'Počernický'], correctIndex: 0, explanation: 'Na toku Rokytky.', sources: ['https://cs.wikipedia.org/wiki/Kyjský_rybník'] },
      { id: 'q14_5', zoneId: 'z14', type: 'multiple_choice', prompt: 'KD na Černém Mostě?', options: ['Klub', 'Kyje', 'Plechárna', 'Kino'], correctIndex: 2, explanation: 'Výměníková stanice.', sources: ['https://plecharna.com.cz'] },
      { id: 'q14_6', zoneId: 'z14', type: 'multiple_choice', prompt: 'Vila čtvrť P14?', options: ['Hostavice', 'Černý Most', 'Hloubětín', 'Vršovice'], correctIndex: 0, explanation: 'Klidnější část.', sources: ['https://cs.wikipedia.org/wiki/Hostavice'] },
      { id: 'q14_7', zoneId: 'z14', type: 'true_false', prompt: 'Kostel v Kyjích byl pevností.', correct: true, explanation: 'Silné zdi pro obranu.', sources: ['https://cs.wikipedia.org/wiki/Kostel_sv._Bartoloměje'] },
      { id: 'q14_8', zoneId: 'z14', type: 'true_false', prompt: 'Sídliště v 30. letech?', correct: false, explanation: 'Konec 70. let.', sources: ['https://cs.wikipedia.org/wiki/Černý_Most'] }
    ]
  },
  {
    id: 'z15', name: 'Praha 15', order: 15, path: '',
    questions: [
      { id: 'q15_1', zoneId: 'z15', type: 'multiple_choice', prompt: 'Přehrada na?', options: ['Hostivaři', 'Měcholupech', 'Petrovicích', 'Dubči'], correctIndex: 0, explanation: 'Napájena Botičem.', sources: ['https://cs.wikipedia.org/wiki/Hostivařská_přehrada'] },
      { id: 'q15_2', zoneId: 'z15', type: 'multiple_choice', prompt: 'Název Měcholupy od?', options: ['Měchů', 'Loupežníků', 'Potoka', 'Vlků'], correctIndex: 1, explanation: 'Loupači měchů.', sources: ['https://cs.wikipedia.org/wiki/Horní_Měcholupy'] },
      { id: 'q15_3', zoneId: 'z15', type: 'multiple_choice', prompt: 'Lesopark u přehrady?', options: ['Hostivařský', 'Stromovka', 'Šárka', 'Kunratice'], correctIndex: 0, explanation: 'Na okraji Prahy.', sources: ['https://cs.wikipedia.org/wiki/Hostivařský_lesopark'] },
      { id: 'q15_4', zoneId: 'z15', type: 'multiple_choice', prompt: 'Stará Hostivař je?', options: ['Pásmo', 'Zóna', 'Pole', 'Hrad'], correctIndex: 1, explanation: 'Památková zóna.', sources: ['https://cs.wikipedia.org/wiki/Stará_Hostivař'] },
      { id: 'q15_5', zoneId: 'z15', type: 'multiple_choice', prompt: 'Potok napájející přehradu?', options: ['Botič', 'Rokytka', 'Vltava', 'Berounka'], correctIndex: 0, explanation: 'Významný pražský potok.', sources: ['https://cs.wikipedia.org/wiki/Botič'] },
      { id: 'q15_6', zoneId: 'z15', type: 'multiple_choice', prompt: 'Panelová čtvrť P15?', options: ['Horní Měcholupy', 'Jižák', 'Pankrác', 'Antal'], correctIndex: 0, explanation: 'Masivní výstavba 80 let.', sources: ['https://cs.wikipedia.org/wiki/Horní_Měcholupy'] },
      { id: 'q15_7', zoneId: 'z15', type: 'true_false', prompt: 'Hostivař má kostel Stětí sv. Jana.', correct: true, explanation: 'Pochází z 11. století.', sources: ['https://cs.wikipedia.org/wiki/Kostel_stětí_svatého_jana'] },
      { id: 'q15_8', zoneId: 'z15', type: 'true_false', prompt: 'Hostivařská přehrada je z 19. stol.', correct: false, explanation: 'R. 1963.', sources: ['https://cs.wikipedia.org/wiki/Hostivařská_přehrada'] }
    ]
  },
  {
    id: 'z16', name: 'Praha 16', order: 16, path: '',
    questions: [
      { id: 'q16_1', zoneId: 'z16', type: 'multiple_choice', prompt: 'Centrum Prahy 16?', options: ['Radotín', 'Zbraslav', 'Zličín', 'Řeporyje'], correctIndex: 0, explanation: 'U soutoku Berounky.', sources: ['https://cs.wikipedia.org/wiki/Radotín'] },
      { id: 'q16_2', zoneId: 'z16', type: 'multiple_choice', prompt: 'Klášter na Zbraslavi od?', options: ['Zbraslava', 'Břevnova', 'Strahova', 'Anežky'], correctIndex: 0, explanation: 'Založil Václav II.', sources: ['https://cs.wikipedia.org/wiki/Zbraslavský_klášter'] },
      { id: 'q16_3', zoneId: 'z16', type: 'multiple_choice', prompt: 'Soutok Vltavy a?', options: ['Berounky', 'Sázavy', 'Ohře', 'Rokytky'], correctIndex: 0, explanation: 'Na jihu Prahy.', sources: ['https://cs.wikipedia.org/wiki/Berounka'] },
      { id: 'q16_4', zoneId: 'z16', type: 'multiple_choice', prompt: 'Biotop je v?', options: ['Radotíně', 'Lhotce', 'Džbánu', 'Šeberáku'], correctIndex: 0, explanation: 'Biologické čištění.', sources: ['https://biotopradotin.cz'] },
      { id: 'q16_5', zoneId: 'z16', type: 'multiple_choice', prompt: 'Vančura tvořil na?', options: ['Zbraslavi', 'Dejvicích', 'Letné', 'Hradě'], correctIndex: 0, explanation: 'Autor Rozmarného léta.', sources: ['https://cs.wikipedia.org/wiki/Vladislav_Vančura'] },
      { id: 'q16_6', zoneId: 'z16', type: 'multiple_choice', prompt: 'Zámek na Zbraslavi byl?', options: ['Klášterem', 'Pevností', 'Školou', 'Lázněmi'], correctIndex: 0, explanation: 'Dříve klášter.', sources: ['https://cs.wikipedia.org/wiki/Zbraslavský_klášter'] },
      { id: 'q16_7', zoneId: 'z16', type: 'true_false', prompt: 'Radotín byl městem průmyslu.', correct: true, explanation: 'Cukrovar a cementárna.', sources: ['https://cs.wikipedia.org/wiki/Radotín'] },
      { id: 'q16_8', zoneId: 'z16', type: 'true_false', prompt: 'Zbraslav je v Praze od r. 1974.', correct: true, explanation: 'Dříve samostatné město.', sources: ['https://cs.wikipedia.org/wiki/Zbraslav'] }
    ]
  },
  {
    id: 'z17', name: 'Praha 17', order: 17, path: '',
    questions: [
      { id: 'q17_1', zoneId: 'z17', type: 'multiple_choice', prompt: 'Který slavný zbojník je pohřben v Řepích?', options: ['Jan Jánošík', 'Václav Babinský', 'Robin Hood', 'Kryštof Grasel'], correctIndex: 1, explanation: 'Václav Babinský strávil konec života v řepském klášteře.', sources: ['https://cs.wikipedia.org/wiki/Václav_Babinský'] },
      { id: 'q17_2', zoneId: 'z17', type: 'multiple_choice', prompt: 'Který kostel v Řepích je spojen s Břevnovským klášterem?', options: ['Sv. Martina', 'Sv. Prokopa', 'Sv. Václava', 'Sv. Ludmily'], correctIndex: 0, explanation: 'První zmínka o něm je z roku 993.', sources: ['https://cs.wikipedia.org/wiki/Kostel_svatého_Martina_(Řepy)'] }
    ]
  },
  {
    id: 'z18', name: 'Praha 18', order: 18, path: '',
    questions: [
      { id: 'q18_1', zoneId: 'z18', type: 'multiple_choice', prompt: 'Co je dominantou Letňan v oblasti dopravy?', options: ['Přístav', 'Letiště', 'Nádraží', 'Tunel'], correctIndex: 1, explanation: 'Letňanské letiště je historicky významné pro český letecký průmysl.', sources: ['https://cs.wikipedia.org/wiki/Letiště_Letňany'] },
      { id: 'q18_2', zoneId: 'z18', type: 'multiple_choice', prompt: 'Jak se jmenuje velké výstaviště v Letňanech?', options: ['Incheba', 'Veletržní palác', 'PVA EXPO', 'Výstaviště Praha'], correctIndex: 2, explanation: 'PVA EXPO Praha je moderní veletržní areál.', sources: ['https://pvaexpo.cz/'] }
    ]
  },
  {
    id: 'z19', name: 'Praha 19', order: 19, path: '',
    questions: [
      { id: 'q19_1', zoneId: 'z19', type: 'multiple_choice', prompt: 'Jaké unikátní muzeum najdete ve Kbelích?', options: ['Technické', 'Letecké', 'Zemědělské', 'Národní'], correctIndex: 1, explanation: 'Letecké muzeum Kbely je jedno z největších v Evropě.', sources: ['https://www.vhu.cz/muzea/zakladni-informace-o-lm-kbely/'] }
    ]
  },
  {
    id: 'z20', name: 'Praha 20', order: 20, path: '',
    questions: [
      { id: 'q20_1', zoneId: 'z20', type: 'multiple_choice', prompt: 'Který zámek je kulturním centrem Horních Počernic?', options: ['Chvalský', 'Trojský', 'Libeňský', 'Ctěnický'], correctIndex: 0, explanation: 'Chvalský zámek nabízí řadu výstav a akcí.', sources: ['https://www.chvalskyzamek.cz/'] }
    ]
  },
  {
    id: 'z21', name: 'Praha 21', order: 21, path: '',
    questions: [
      { id: 'q21_1', zoneId: 'z21', type: 'multiple_choice', prompt: 'Který největší pražský les zasahuje do Újezda?', options: ['Šárka', 'Stromovka', 'Klánovický les', 'Krčský les'], correctIndex: 2, explanation: 'Klánovický les je nejrozsáhlejší lesní komplex v Praze.', sources: ['https://cs.wikipedia.org/wiki/Klánovický_les'] }
    ]
  },
  {
    id: 'z22', name: 'Praha 22', order: 22, path: '',
    questions: [
      { id: 'q22_1', zoneId: 'z22', type: 'multiple_choice', prompt: 'Uhříněves je známá největším evropským?', options: ['Parkovištěm', 'Kontejnerovým terminálem', 'Stadionem', 'Rybníkem'], correctIndex: 1, explanation: 'Nachází se zde největší nákladní terminál ve střední Evropě.', sources: ['https://cs.wikipedia.org/wiki/Uhříněves'] }
    ]
  },
  { id: 'z23', name: 'Praha-Lipence', order: 23, path: '', questions: [{ id: 'q23_1', zoneId: 'z23', type: 'true_false', prompt: 'Lipence jsou známé svou velkou ovocnou tržnicí.', correct: true, explanation: 'Velkotržnice Lipence je klíčovým místem pro distribuci ovoce a zeleniny.', sources: ['https://cs.wikipedia.org/wiki/Lipence'] }] },
  { id: 'z24', name: 'Praha-Kolovraty', order: 24, path: '', questions: [{ id: 'q24_1', zoneId: 'z24', type: 'true_false', prompt: 'Kolovraty leží na jihovýchodním okraji Prahy.', correct: true, explanation: 'Sousedí s Uhříněvsí a Říčany.', sources: ['https://cs.wikipedia.org/wiki/Kolovraty'] }] },
  { id: 'z25', name: 'Praha-Nedvězí', order: 25, path: '', questions: [{ id: 'q25_1', zoneId: 'z25', type: 'true_false', prompt: 'Nedvězí je jednou z nejmenších městských částí Prahy podle počtu obyvatel.', correct: true, explanation: 'Zachovává si venkovský charakter.', sources: ['https://cs.wikipedia.org/wiki/Nedvězí_u_Říčan'] }] },
  { id: 'z26', name: 'Praha-Zbraslav', order: 26, path: '', questions: [{ id: 'q26_1', zoneId: 'z26', type: 'multiple_choice', prompt: 'U soutoku kterých řek leží Zbraslav?', options: ['Vltava a Berounka', 'Vltava a Sázava', 'Vltava a Labe', 'Vltava a Botič'], correctIndex: 0, explanation: 'Zbraslav leží u strategického soutoku Berounky a Vltavy.', sources: ['https://cs.wikipedia.org/wiki/Zbraslav'] }] },
  { id: 'z27', name: 'Praha-Benice', order: 27, path: '', questions: [{ id: 'q27_1', zoneId: 'z27', type: 'true_false', prompt: 'V Benicích se nachází velký jezdecký areál.', correct: true, explanation: 'Park Hotel Benice je známý svými stájemi.', sources: ['https://cs.wikipedia.org/wiki/Benice'] }] },
  { id: 'z28', name: 'Praha-Libuš', order: 28, path: '', questions: [{ id: 'q28_1', zoneId: 'z28', type: 'multiple_choice', prompt: 'Která komunita je v Libuši velmi početná díky tržnici Sapa?', options: ['Vietnamská', 'Řecká', 'Polská', 'Ukrajinská'], correctIndex: 0, explanation: 'Tržnice Sapa je významným centrem vietnamské komunity.', sources: ['https://cs.wikipedia.org/wiki/Libuš'] }] },
  { id: 'z29', name: 'Praha-Šeberov', order: 29, path: '', questions: [{ id: 'q29_1', zoneId: 'z29', type: 'true_false', prompt: 'Šeberov je známý svými rybníky, např. Šeberákem.', correct: true, explanation: 'Šeberák je oblíbený přírodní areál ke koupání.', sources: ['https://cs.wikipedia.org/wiki/Šeberov'] }] },
  { id: 'z30', name: 'Praha-Lochkov', order: 30, path: '', questions: [{ id: 'q30_1', zoneId: 'z30', type: 'true_false', prompt: 'Lochkov je spojen s geologických výzkumem barrandienu.', correct: true, explanation: 'Nachází se zde významné vápencové lomy.', sources: ['https://cs.wikipedia.org/wiki/Lochkov'] }] },
  { id: 'z31', name: 'Praha-Újezd', order: 31, path: '', questions: [{ id: 'q31_1', zoneId: 'z31', type: 'true_false', prompt: 'Újezd u Průhonic sousedí přímo s Průhonickým parkem.', correct: true, explanation: 'Je to vyhledávaná rekreační lokalita.', sources: ['https://cs.wikipedia.org/wiki/Újezd_u_Průhonic'] }] },
  { id: 'z32', name: 'Praha-Křeslice', order: 32, path: '', questions: [{ id: 'q32_1', zoneId: 'z32', type: 'true_false', prompt: 'Křeslicemi protéká potok Botič.', correct: true, explanation: 'Botič tvoří osu této městské části.', sources: ['https://cs.wikipedia.org/wiki/Křeslice'] }] },
  { id: 'z33', name: 'Praha-Kunratice', order: 33, path: '', questions: [{ id: 'q33_1', zoneId: 'z33', type: 'multiple_choice', prompt: 'Který král zemřel na Novém hradě u Kunratic?', options: ['Karel IV.', 'Václav IV.', 'Rudolf II.', 'Jiří z Poděbrad'], correctIndex: 1, explanation: 'Václav IV. zde zemřel v roce 1419.', sources: ['https://cs.wikipedia.org/wiki/Nový_hrad_u_Kunratic'] }] },
  { id: 'z34', name: 'Praha-Petrovice', order: 34, path: '', questions: [{ id: 'q34_1', zoneId: 'z34', type: 'true_false', prompt: 'Petrovice sousedí s Hostivařskou přehradou.', correct: true, explanation: 'Přehrada je důležitým rekreačním bodem sousedství.', sources: ['https://cs.wikipedia.org/wiki/Petrovice_(Praha)'] }] },
  { id: 'z35', name: 'Praha-Královice', order: 35, path: '', questions: [{ id: 'q35_1', zoneId: 'z35', type: 'true_false', prompt: 'V Královicích najdete zříceninu historické tvrze.', correct: true, explanation: 'Královická tvrz je památkově chráněná.', sources: ['https://cs.wikipedia.org/wiki/Královice_(Praha)'] }] },
  { id: 'z36', name: 'Praha-Velká Chuchle', order: 36, path: '', questions: [{ id: 'q36_1', zoneId: 'z36', type: 'multiple_choice', prompt: 'Čím je Velká Chuchle nejvíce proslulá?', options: ['Dostihovým závodištěm', 'Letištěm', 'Pivovarem', 'Sklárnami'], correctIndex: 0, explanation: 'Dostihové závodiště Chuchle Arena Praha je v provozu od roku 1906.', sources: ['https://cs.wikipedia.org/wiki/Dostihové_závodiště_Praha-Velká_Chuchle'] }] },
  { id: 'z37', name: 'Praha-Slivenec', order: 37, path: '', questions: [{ id: 'q37_1', zoneId: 'z37', type: 'true_false', prompt: 'Slivenec je známý těžbou sliveneckého mramoru.', correct: true, explanation: 'Tento červený vápenec byl použit na mnoha pražských stavbách.', sources: ['https://cs.wikipedia.org/wiki/Slivenec'] }] },
  { id: 'z38', name: 'Praha-Řeporyje', order: 38, path: '', questions: [{ id: 'q38_1', zoneId: 'z38', type: 'true_false', prompt: 'V Řeporyjích najdete skanzen Řepora.', correct: true, explanation: 'Je to replika středověké vesnice.', sources: ['https://cs.wikipedia.org/wiki/Řepora'] }] },
  { id: 'z39', name: 'Praha-Koloděje', order: 39, path: '', questions: [{ id: 'q39_1', zoneId: 'z39', type: 'true_false', prompt: 'Zámek v Kolodějích sloužil jako vládní rezidence.', correct: true, explanation: 'Často zde jednala česká vláda.', sources: ['https://cs.wikipedia.org/wiki/Koloděje_(zámek)'] }] },
  { id: 'z40', name: 'Praha-Dolní Měcholupy', order: 40, path: '', questions: [{ id: 'q40_1', zoneId: 'z40', type: 'true_false', prompt: 'Dolní Měcholupy zažívají v posledním desetiletí velký rozvoj bytové výstavby.', correct: true, explanation: 'Původní obec se proměňuje v moderní rezidenční čtvrť.', sources: ['https://cs.wikipedia.org/wiki/Dolní_Měcholupy'] }] },
  { id: 'z41', name: 'Praha-Dubeč', order: 41, path: '', questions: [{ id: 'q41_1', zoneId: 'z41', type: 'true_false', prompt: 'V Dubči se nachází přírodní park Říčanka.', correct: true, explanation: 'Je to krásná oblast pro procházky podél potoka.', sources: ['https://cs.wikipedia.org/wiki/Dubeč'] }] },
  { id: 'z42', name: 'Praha-Štěrboholy', order: 42, path: '', questions: [{ id: 'q42_1', zoneId: 'z42', type: 'multiple_choice', prompt: 'Která bitva sedmileté války se odehrála u Štěrbohol roku 1757?', options: ['Bitva u Štěrbohol', 'Bitva na Bílé hoře', 'Bitva u Lipska', 'Bitva u Slavkova'], correctIndex: 0, explanation: 'Bitva u Prahy (také u Štěrbohol) byla střetem mezi Pruskem a Rakouskem.', sources: ['https://cs.wikipedia.org/wiki/Bitva_u_Prahy_(1757)'] }] },
  { id: 'z43', name: 'Praha-Běchovice', order: 43, path: '', questions: [{ id: 'q43_1', zoneId: 'z43', type: 'multiple_choice', prompt: 'Jaký slavný běžecký závod startuje v Běchovicích?', options: ['Běchovice-Praha', 'Pražský maraton', 'Kunratický kros', 'RunTour'], correctIndex: 0, explanation: 'Je to nejstarší nepřerušený silniční závod v Evropě (od r. 1897).', sources: ['https://cs.wikipedia.org/wiki/Běchovice–Praha'] }] },
  { id: 'z44', name: 'Praha-Klánovice', order: 44, path: '', questions: [{ id: 'q44_1', zoneId: 'z44', type: 'true_false', prompt: 'Klánovice vznikly jako rekreační lesní obec v 19. století.', correct: true, explanation: 'Založil je Václav Klán.', sources: ['https://cs.wikipedia.org/wiki/Klánovice'] }] },
  { id: 'z45', name: 'Praha-Dolní Počernice', order: 45, path: '', questions: [{ id: 'q45_1', zoneId: 'z45', type: 'true_false', prompt: 'V Dolních Počernicích se nachází největší pražský rybník - Počernický rybník.', correct: true, explanation: 'Má rozlohu přes 20 hektarů.', sources: ['https://cs.wikipedia.org/wiki/Velký_Počernický_rybník'] }] },
  { id: 'z46', name: 'Praha-Zličín', order: 46, path: '', questions: [{ id: 'q46_1', zoneId: 'z46', type: 'multiple_choice', prompt: 'Zličín je konečnou stanicí které trasy metra?', options: ['A', 'B', 'C', 'D'], correctIndex: 1, explanation: 'Trasa B končí právě na Zličíně.', sources: ['https://cs.wikipedia.org/wiki/Zličín_(stanice_metra)'] }] },
  { id: 'z47', name: 'Praha-Satalice', order: 47, path: '', questions: [{ id: 'q47_1', zoneId: 'z47', type: 'true_false', prompt: 'V Satalicích se nachází unikátní satalická bažantnice.', correct: true, explanation: 'Je to památkově chráněný lesopark.', sources: ['https://cs.wikipedia.org/wiki/Satalická_bažantnice'] }] },
  { id: 'z48', name: 'Praha-Nebušice', order: 48, path: '', questions: [{ id: 'q48_1', zoneId: 'z48', type: 'true_false', prompt: 'V Nebušicích sídlí Mezinárodní škola v Praze (ISP).', correct: true, explanation: 'Je to jedna z nejprestižnějších škol v ČR.', sources: ['https://cs.wikipedia.org/wiki/Nebušice'] }] },
  { id: 'z49', name: 'Praha-Troja', order: 49, path: '', questions: [{ id: 'q49_1', zoneId: 'z49', type: 'multiple_choice', prompt: 'Která z těchto institucí NESÍDLÍ v Troji?', options: ['ZOO Praha', 'Botanická zahrada', 'Trojský zámek', 'Národní muzeum'], correctIndex: 3, explanation: 'Národní muzeum sídlí na Václavském náměstí.', sources: ['https://cs.wikipedia.org/wiki/Troja'] }] },
  { id: 'z50', name: 'Praha-Lysolaje', order: 50, path: '', questions: [{ id: 'q50_1', zoneId: 'z50', type: 'true_false', prompt: 'V Lysolajích vyvěrá zázračný pramen v Housličkách.', correct: true, explanation: 'Přírodní památka Housličky je známá strží a pramenem.', sources: ['https://cs.wikipedia.org/wiki/Lysolaje'] }] },
  { id: 'z51', name: 'Praha-Přední Kopanina', order: 51, path: '', questions: [{ id: 'q51_1', zoneId: 'z51', type: 'true_false', prompt: 'Rotunda svaté Máří Magdaleny v Přední Kopanině je z opuky.', correct: true, explanation: 'Je to jedna z nejobdivovanějších románských staveb u Prahy.', sources: ['https://cs.wikipedia.org/wiki/Rotunda_svaté_Máří_Magdaleny_(Přední_Kopanina)'] }] },
  { id: 'z52', name: 'Praha-Vinoř', order: 52, path: '', questions: [{ id: 'q52_1', zoneId: 'z52', type: 'true_false', prompt: 'Ve Vinoři se nachází barokní zámek od Kiliána Ignáce Dientzenhofera.', correct: true, explanation: 'Vinořský zámek je dnes uzavřen a slouží ministerstvu vnitra.', sources: ['https://cs.wikipedia.org/wiki/Vinořský_zámek'] }] },
  { id: 'z53', name: 'Praha-Suchdol', order: 53, path: '', questions: [{ id: 'q53_1', zoneId: 'z53', type: 'multiple_choice', prompt: 'Která vysoká škola sídlí v Suchdole?', options: ['VŠE', 'ČZU', 'ČVUT', 'AMU'], correctIndex: 1, explanation: 'Česká zemědělská univerzita má v Suchdole rozsáhlý kampus.', sources: ['https://www.czu.cz/'] }] },
  { id: 'z54', name: 'Praha-Dolní Chabry', order: 54, path: '', questions: [{ id: 'q54_1', zoneId: 'z54', type: 'true_false', prompt: 'V Dolních Chabrech najdete menhir Zkamenělý slouha.', correct: true, explanation: 'Je to jeden z mála pravých menhirů v Čechách.', sources: ['https://cs.wikipedia.org/wiki/Zkamenělý_slouha'] }] },
  { id: 'z55', name: 'Praha-Ďáblice', order: 55, path: '', questions: [{ id: 'q55_1', zoneId: 'z55', type: 'true_false', prompt: 'V Ďáblicích se nachází jedinečná hvězdárna.', correct: true, explanation: 'Hvězdárna Ďáblice stojí na kopci Ládví.', sources: ['https://www.planetum.cz/hvezdarna-dablice/'] }] },
  { id: 'z56', name: 'Praha-Březiněves', order: 56, path: '', questions: [{ id: 'q56_1', zoneId: 'z56', type: 'true_false', prompt: 'Březiněves je známá vítězstvím v soutěži Obec roku v Praze.', correct: true, explanation: 'Je to velmi upravená moderní městská část.', sources: ['https://cs.wikipedia.org/wiki/Březiněves'] }] },
  { id: 'z57', name: 'Praha-Čakovice', order: 57, path: '', questions: [{ id: 'q57_1', zoneId: 'z57', type: 'multiple_choice', prompt: 'Jaký velký průmyslový podnik dříve dominoval Čakovicím?', options: ['Cukrovar', 'Pivovar', 'Automobilka', 'Sklárna'], correctIndex: 0, explanation: 'Čakovický cukrovar byl jedním z největších v Čechách.', sources: ['https://cs.wikipedia.org/wiki/Čakovice'] }] },
];
