import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state : {
        verbs: [
            {
                Infinitive: "abide",
                Simple_Past: "abode",
                Past_Participle: "abode",
                French: "respecter | se conformer à",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "arise",
                Simple_Past: "arose",
                Past_Participle: "arisen",
                French: "survenir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "awake",
                Simple_Past: "awoke",
                Past_Participle: "awoken",
                French: "se réveiller",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "be",
                Simple_Past: "was / were",
                Past_Participle: "been",
                French: "être",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "bear",
                Simple_Past: "bore",
                Past_Participle: "borne | born",
                French: "porter | supporter | naître",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "beat",
                Simple_Past: "beat",
                Past_Participle: "beaten",
                French: "battre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "become",
                Simple_Past: "became",
                Past_Participle: "become",
                French: "devenir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "beget",
                Simple_Past: "begat | begot",
                Past_Participle: "begotten",
                French: "engendrer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "begin",
                Simple_Past: "began",
                Past_Participle: "begun",
                French: "commencer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "bend",
                Simple_Past: "bent",
                Past_Participle: "bent",
                French: "plier | se courber",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "bet",
                Simple_Past: "bet",
                Past_Participle: "bet",
                French: "parier",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "bid",
                Simple_Past: "bid | bade",
                Past_Participle: "bid | bidden",
                French: "offrir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "bite",
                Simple_Past: "bit",
                Past_Participle: "bitten",
                French: "mordre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "bleed",
                Simple_Past: "bled",
                Past_Participle: "bled",
                French: "saigner",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "blow",
                Simple_Past: "blew",
                Past_Participle: "blown",
                French: "souffler | gonfler",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "break",
                Simple_Past: "broke",
                Past_Participle: "broken",
                French: "casser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "bring",
                Simple_Past: "brought",
                Past_Participle: "brought",
                French: "apporter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "broadcast",
                Simple_Past: "broadcast",
                Past_Participle: "broadcast",
                French: "diffuser | émettre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "build",
                Simple_Past: "built",
                Past_Participle: "built",
                French: "construire",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "burn",
                Simple_Past: "burnt | burned",
                Past_Participle: "burnt | burned",
                French: "brûler",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "burst",
                Simple_Past: "burst",
                Past_Participle: "burst",
                French: "éclater",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "buy",
                Simple_Past: "bought",
                Past_Participle: "bought",
                French: "acheter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "can",
                Simple_Past: "could",
                Past_Participle: "could",
                French: "pouvoir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "cast",
                Simple_Past: "cast",
                Past_Participle: "cast",
                French: "jeter | distribuer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "catch",
                Simple_Past: "caught",
                Past_Participle: "caught",
                French: "attraper",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "chide",
                Simple_Past: "chid / chided",
                Past_Participle: "chidden / chided",
                French: "gronder",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "choose",
                Simple_Past: "chose",
                Past_Participle: "chosen",
                French: "choisir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "cling",
                Simple_Past: "clung",
                Past_Participle: "clung",
                French: "s'accrocher",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "come",
                Simple_Past: "came",
                Past_Participle: "come",
                French: "venir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "cost",
                Simple_Past: "cost",
                Past_Participle: "cost",
                French: "coûter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "creep",
                Simple_Past: "crept",
                Past_Participle: "crept",
                French: "ramper",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "cut",
                Simple_Past: "cut",
                Past_Participle: "cut",
                French: "couper",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "deal",
                Simple_Past: "dealt",
                Past_Participle: "dealt",
                French: "distribuer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "dig",
                Simple_Past: "dug",
                Past_Participle: "dug",
                French: "creuser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "dive",
                Simple_Past: "dived | dove",
                Past_Participle: "dived",
                French: "plonger",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "do",
                Simple_Past: "did",
                Past_Participle: "done",
                French: "faire",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "draw",
                Simple_Past: "drew",
                Past_Participle: "drawn",
                French: "dessiner | tirer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "dream",
                Simple_Past: "dreamt | dreamed",
                Past_Participle: "dreamt | dreamed",
                French: "rêver",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "drink",
                Simple_Past: "drank",
                Past_Participle: "drunk",
                French: "boire",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "drive",
                Simple_Past: "drove",
                Past_Participle: "driven",
                French: "conduire",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "dwell",
                Simple_Past: "dwelt | dwelled",
                Past_Participle: "dwelt | dwelled",
                French: "habiter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "eat",
                Simple_Past: "ate",
                Past_Participle: "eaten",
                French: "manger",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "fall",
                Simple_Past: "fell",
                Past_Participle: "fallen",
                French: "tomber",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "feed",
                Simple_Past: "fed",
                Past_Participle: "fed",
                French: "nourrir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "feel",
                Simple_Past: "felt",
                Past_Participle: "felt",
                French: "se sentir | ressentir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "fight",
                Simple_Past: "fought",
                Past_Participle: "fought",
                French: "se battre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "find",
                Simple_Past: "found",
                Past_Participle: "found",
                French: "trouver",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "flee",
                Simple_Past: "fled",
                Past_Participle: "fled",
                French: "s'enfuir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "fling",
                Simple_Past: "flung",
                Past_Participle: "flung",
                French: "lancer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "fly",
                Simple_Past: "flew",
                Past_Participle: "flown",
                French: "voler",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "forbid",
                Simple_Past: "forbade",
                Past_Participle: "forbidden",
                French: "interdire",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "forecast",
                Simple_Past: "forecast",
                Past_Participle: "forecast",
                French: "prévoir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "foresee",
                Simple_Past: "foresaw",
                Past_Participle: "foreseen",
                French: "prévoir | presentir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "forget",
                Simple_Past: "forgot",
                Past_Participle: "forgotten",
                French: "oublier",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "forgive",
                Simple_Past: "forgave",
                Past_Participle: "forgiven",
                French: "pardonner",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "forsake",
                Simple_Past: "forsook",
                Past_Participle: "forsaken",
                French: "abandonner",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "freeze",
                Simple_Past: "froze",
                Past_Participle: "frozen",
                French: "geler",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "get",
                Simple_Past: "got",
                Past_Participle: "got | gotten",
                French: "obtenir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "give",
                Simple_Past: "gave",
                Past_Participle: "given",
                French: "donner",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "go",
                Simple_Past: "went",
                Past_Participle: "gone",
                French: "aller",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "grind",
                Simple_Past: "ground",
                Past_Participle: "ground",
                French: "moudre | opprimer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "grow",
                Simple_Past: "grew",
                Past_Participle: "grown",
                French: "grandir | pousser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "hang",
                Simple_Past: "hung",
                Past_Participle: "hung",
                French: "tenir | pendre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "have",
                Simple_Past: "had",
                Past_Participle: "had",
                French: "avoir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "hear",
                Simple_Past: "heard",
                Past_Participle: "heard",
                French: "entendre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "hide",
                Simple_Past: "hid",
                Past_Participle: "hidden",
                French: "cacher",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "hit",
                Simple_Past: "hit",
                Past_Participle: "hit",
                French: "taper | appuyer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "hold",
                Simple_Past: "held",
                Past_Participle: "held",
                French: "tenir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "hurt",
                Simple_Past: "hurt",
                Past_Participle: "hurt",
                French: "blesser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "keep",
                Simple_Past: "kept",
                Past_Participle: "kept",
                French: "garder",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "kneel",
                Simple_Past: "knelt | kneeled",
                Past_Participle: "knelt | kneeled",
                French: "s'agenouiller",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "know",
                Simple_Past: "knew",
                Past_Participle: "known",
                French: "connaître | savoir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "lay",
                Simple_Past: "laid",
                Past_Participle: "laid",
                French: "poser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "lead",
                Simple_Past: "led",
                Past_Participle: "led",
                French: "mener | guider",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "lean",
                Simple_Past: "leant | leaned",
                Past_Participle: "leant | leaned",
                French: "s'incliner | se pencher",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "leap",
                Simple_Past: "leapt | leaped",
                Past_Participle: "leapt | leaped",
                French: "sauter | bondir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "learn",
                Simple_Past: "learnt",
                Past_Participle: "learnt",
                French: "apprendre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "leave",
                Simple_Past: "left",
                Past_Participle: "left",
                French: "laisser | quitter | partir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "lend",
                Simple_Past: "lent",
                Past_Participle: "lent",
                French: "prêter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "let",
                Simple_Past: "let",
                Past_Participle: "let",
                French: "permettre | louer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "lie",
                Simple_Past: "lay",
                Past_Participle: "lain",
                French: "s'allonger",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "light",
                Simple_Past: "lit | lighted",
                Past_Participle: "lit | lighted",
                French: "allumer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "lose",
                Simple_Past: "lost",
                Past_Participle: "lost",
                French: "perdre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "make",
                Simple_Past: "made",
                Past_Participle: "made",
                French: "fabriquer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "mean",
                Simple_Past: "meant",
                Past_Participle: "meant",
                French: "signifier",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "meet",
                Simple_Past: "met",
                Past_Participle: "met",
                French: "rencontrer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "mow",
                Simple_Past: "mowed",
                Past_Participle: "mowed | mown",
                French: "tondre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "offset",
                Simple_Past: "offset",
                Past_Participle: "offset",
                French: "compenser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "overcome",
                Simple_Past: "overcame",
                Past_Participle: "overcome",
                French: "surmonter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "partake",
                Simple_Past: "partook",
                Past_Participle: "partaken",
                French: "prendre part à",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "pay",
                Simple_Past: "paid",
                Past_Participle: "paid",
                French: "payer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "plead",
                Simple_Past: "pled | pleaded",
                Past_Participle: "pled | pleaded",
                French: "supplier | plaider",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "preset",
                Simple_Past: "preset",
                Past_Participle: "preset",
                French: "programmer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "prove",
                Simple_Past: "proved",
                Past_Participle: "proved | proven",
                French: "prouver",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "put",
                Simple_Past: "put",
                Past_Participle: "put",
                French: "mettre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "quit",
                Simple_Past: "quit",
                Past_Participle: "quit",
                French: "quitter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "read",
                Simple_Past: "read",
                Past_Participle: "read",
                French: "lire",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "relay",
                Simple_Past: "relaid",
                Past_Participle: "relaid",
                French: "relayer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "rend",
                Simple_Past: "rent",
                Past_Participle: "rent",
                French: "déchirer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "rid",
                Simple_Past: "rid",
                Past_Participle: "rid",
                French: "débarrasser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "ring",
                Simple_Past: "rang",
                Past_Participle: "rung",
                French: "sonner | téléphoner",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "rise",
                Simple_Past: "rose",
                Past_Participle: "risen",
                French: "lever",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "run",
                Simple_Past: "ran",
                Past_Participle: "run",
                French: "courir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "saw",
                Simple_Past: "sawed",
                Past_Participle: "sawn | sawed",
                French: "scier",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "say",
                Simple_Past: "said",
                Past_Participle: "said",
                French: "dire",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "see",
                Simple_Past: "saw",
                Past_Participle: "seen",
                French: "voir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "seek",
                Simple_Past: "sought",
                Past_Participle: "sought",
                French: "chercher",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "sell",
                Simple_Past: "sold",
                Past_Participle: "sold",
                French: "vendre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "send",
                Simple_Past: "sent",
                Past_Participle: "sent",
                French: "envoyer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "set",
                Simple_Past: "set",
                Past_Participle: "set",
                French: "fixer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "shake",
                Simple_Past: "shook",
                Past_Participle: "shaken",
                French: "secouer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "shed",
                Simple_Past: "shed",
                Past_Participle: "shed",
                French: "répandre | laisser tomber",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "shine",
                Simple_Past: "shone",
                Past_Participle: "shone",
                French: "briller",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "shoe",
                Simple_Past: "shod",
                Past_Participle: "shod",
                French: "chausser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "shoot",
                Simple_Past: "shot",
                Past_Participle: "shot",
                French: "tirer | fusiller",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "show",
                Simple_Past: "showed",
                Past_Participle: "shown",
                French: "montrer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "shut",
                Simple_Past: "shut",
                Past_Participle: "shut",
                French: "fermer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "sing",
                Simple_Past: "sang",
                Past_Participle: "sung",
                French: "chanter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "sink",
                Simple_Past: "sank",
                Past_Participle: "sunk",
                French: "couler",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "sit",
                Simple_Past: "sat",
                Past_Participle: "sat",
                French: "s'asseoir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "slay",
                Simple_Past: "slew",
                Past_Participle: "slain",
                French: "tuer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "sleep",
                Simple_Past: "slept",
                Past_Participle: "slept",
                French: "dormir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "slide",
                Simple_Past: "slid",
                Past_Participle: "slid",
                French: "glisser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "slit",
                Simple_Past: "slit",
                Past_Participle: "slit",
                French: "fendre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "smell",
                Simple_Past: "smelt",
                Past_Participle: "smelt",
                French: "sentir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "sow",
                Simple_Past: "sowed",
                Past_Participle: "sowed | sown",
                French: "semer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "speak",
                Simple_Past: "spoke",
                Past_Participle: "spoken",
                French: "parler",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "speed",
                Simple_Past: "sped",
                Past_Participle: "sped",
                French: "aller vite",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "spell",
                Simple_Past: "spelt",
                Past_Participle: "spelt",
                French: "épeler | orthographier",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "spend",
                Simple_Past: "spent",
                Past_Participle: "spent",
                French: "dépenser | passer du temps",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "spill",
                Simple_Past: "spilt | spilled",
                Past_Participle: "spilt | spilled",
                French: "renverser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "spin",
                Simple_Past: "spun",
                Past_Participle: "spun",
                French: "tourner | faire tourner",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "spit",
                Simple_Past: "spat",
                Past_Participle: "spat",
                French: "cracher",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "split",
                Simple_Past: "split",
                Past_Participle: "split",
                French: "fendre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "spoil",
                Simple_Past: "spoilt",
                Past_Participle: "spoilt",
                French: "gâcher | gâter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "spread",
                Simple_Past: "spread",
                Past_Participle: "spread",
                French: "répandre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "spring",
                Simple_Past: "sprang",
                Past_Participle: "sprung",
                French: "surgir | jaillir | bondir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "stand",
                Simple_Past: "stood",
                Past_Participle: "stood",
                French: "être debout",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "steal",
                Simple_Past: "stole",
                Past_Participle: "stolen",
                French: "voler | dérober",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "stick",
                Simple_Past: "stuck",
                Past_Participle: "stuck",
                French: "coller",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "sting",
                Simple_Past: "stung",
                Past_Participle: "stung",
                French: "piquer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "stink",
                Simple_Past: "stank",
                Past_Participle: "stunk",
                French: "puer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "strew",
                Simple_Past: "strewed",
                Past_Participle: "strewn | strewed",
                French: "éparpiller",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "strike",
                Simple_Past: "struck",
                Past_Participle: "struck",
                French: "frapper",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "strive",
                Simple_Past: "strove",
                Past_Participle: "striven",
                French: "s'efforcer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "swear",
                Simple_Past: "swore",
                Past_Participle: "sworn",
                French: "jurer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "sweep",
                Simple_Past: "swept",
                Past_Participle: "swept",
                French: "balayer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "swell",
                Simple_Past: "swelled",
                Past_Participle: "swollen | swelled",
                French: "gonfler | enfler",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "swim",
                Simple_Past: "swam",
                Past_Participle: "swum",
                French: "nager",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "swing",
                Simple_Past: "swung",
                Past_Participle: "swung",
                French: "se balancer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "take",
                Simple_Past: "took",
                Past_Participle: "taken",
                French: "prendre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "teach",
                Simple_Past: "taught",
                Past_Participle: "taught",
                French: "enseigner",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "tear",
                Simple_Past: "tore",
                Past_Participle: "torn",
                French: "déchirer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "tell",
                Simple_Past: "told",
                Past_Participle: "told",
                French: "dire | raconter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "think",
                Simple_Past: "thought",
                Past_Participle: "thought",
                French: "penser",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "thrive",
                Simple_Past: "throve | thrived",
                Past_Participle: "thriven | thrived",
                French: "prospérer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "throw",
                Simple_Past: "threw",
                Past_Participle: "thrown",
                French: "jeter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "thrust",
                Simple_Past: "thrust",
                Past_Participle: "thrust",
                French: "enfoncer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "typeset",
                Simple_Past: "typeset",
                Past_Participle: "typeset",
                French: "composer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "undergo",
                Simple_Past: "underwent",
                Past_Participle: "undergone",
                French: "subir",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "understand",
                Simple_Past: "understood",
                Past_Participle: "understood",
                French: "comprendre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "wake",
                Simple_Past: "woke",
                Past_Participle: "woken",
                French: "réveiller",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "weep",
                Simple_Past: "wept",
                Past_Participle: "wept",
                French: "pleurer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "wet",
                Simple_Past: "wet | wetted",
                Past_Participle: "wet | wetted",
                French: "mouiller",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "win",
                Simple_Past: "won",
                Past_Participle: "won",
                French: "gagner",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "wind",
                Simple_Past: "wound",
                Past_Participle: "wound",
                French: "enrouler | remonter",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "withdraw",
                Simple_Past: "withdrew",
                Past_Participle: "withdrawn",
                French: "se retirer",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "wring",
                Simple_Past: "wrung",
                Past_Participle: "wrung",
                French: "tordre",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            },
            {
                Infinitive: "write",
                Simple_Past: "wrote",
                Past_Participle: "written",
                French: "écrire",
                correct: 0,
                uncorrect: 0,
                challenge: 0
            }
        ],

        training_session: {
            value: "null",
            difficulty: "easy",
            max: 0,
            min: 0
        },

        username: localStorage.lastuser,
        beta_alert: 0,

        verbSelect: [-1]


    },

    mutations: {
        setTrainingSessionValue: function (state, value){
            state.training_session.value = value;
        },

        setTrainingSessionDifficulty: function(state, difficulty){
            state.training_session.difficulty = difficulty;
        },

        setTrainingSessionMax: function (state, max){
            state.training_session.max = max;
        },

        setTrainingSessionMin: function (state, min){
            state.training_session.min = min;
        },

        setVerbSelect: function (state, verbs){
            state.verbSelect = verbs;
        },

        setUsername: function(state, username){
            state.username = username;
        },

        setBetaAelrt: function(state, value){
            state.beta_alert = value;
        }


    },

    actions: {
        setTrainingSessionValueAction: function (context, value){
            context.commit("setTrainingSessionValue", value);
        },

        setTrainingSessionDifficultyAction: function (context, difficulty){
            context.commit("setTrainingSessionDifficulty", difficulty);
        },

        setTrainingSessionMaxAction: function (context, max){
            context.commit("setTrainingSessionMax", max);
        },

        setTrainingSessionMinAction: function (context, min){
            context.commit("setTrainingSessionMin", min);
        },

        setVerbSelectAction: function (context, verbs){
            context.commit("setVerbSelect", verbs);
        },

        setUsernameAction: function(context, username){
            context.commit("setUsername", username);
        },

        setBetaAlertAction: function(context, value){
            context.commit(context, value);
        }

    },

    getters: {
        getVerbSelectValue: function (state){
            return state.verbSelect;
        },

        getTrainingSession: function (state){
            return state.training_session;
        },

        getTrainingSessionValue: function (state){
            return state.training_session.value;
        },

        getTrainingSessionMax: function (state){
            return state.training_session.max;
        },

        getTrainingSessionMin: function (state){
            return state.training_session.min;
        },

        getTrainingSessionDifficulty: function (state){
            return state.training_session.difficulty;
        },

        getVerbs: function(state){
            var verbs = [];
            var i = 0;
            state.verbs.forEach(function (e){

                    var item = {index: i++,
                                Infinitive: e.Infinitive,
                                Simple_Past: e.Simple_Past,
                                Past_Participle: e.Past_Participle,
                                French: e.French
                    };
                    verbs.push(item)
                }
            );

            return verbs;
        },

        getAllVerbs: function (state){
            return state.verbs;
        },

        getUsername: function(state){
            return state.username;
        },

        getBetaAlert: function(state){
            return state.beta_alert;
        }
    }
});
