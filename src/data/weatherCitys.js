import { v4 as uuidv4 } from 'uuid';
const weaterCitys = [
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kyiv',
        lat: '50.4500',
        lng: '30.5233',
        population: 2963199,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kharkiv',
        lat: '49.9925',
        lng: '36.2311',
        population: 1433886,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Odesa',
        lat: '46.4775',
        lng: '30.7326',
        population: 1017699,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Dnipro',
        lat: '48.4675',
        lng: '35.0400',
        population: 980948,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Donetsk',
        lat: '48.0028',
        lng: '37.8053',
        population: 929063,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Zaporizhzhia',
        lat: '47.8500',
        lng: '35.1175',
        population: 741717,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Lviv',
        lat: '49.8425',
        lng: '24.0322',
        population: 724314,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kryvyi Rih',
        lat: '47.9086',
        lng: '33.3433',
        population: 629695,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sevastopol',
        lat: '44.6050',
        lng: '33.5225',
        population: 522057,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Mykolaiv',
        lat: '46.9750',
        lng: '31.9950',
        population: 498748,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Luhansk',
        lat: '48.5667',
        lng: '39.3333',
        population: 417990,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Vinnytsia',
        lat: '49.2333',
        lng: '28.4833',
        population: 371855,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Simferopol',
        lat: '44.9484',
        lng: '34.1000',
        population: 341799,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Poltava',
        lat: '49.5894',
        lng: '34.5514',
        population: 317847,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chernihiv',
        lat: '51.4939',
        lng: '31.2947',
        population: 294522,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Lutsk',
        lat: '50.7500',
        lng: '25.3358',
        population: 217197,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kherson',
        lat: '46.6425',
        lng: '32.6250',
        population: 291428,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Cherkasy',
        lat: '49.4444',
        lng: '32.0597',
        population: 276360,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Khmelnytskyi',
        lat: '49.4167',
        lng: '27.0000',
        population: 274176,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chernivtsi',
        lat: '48.3000',
        lng: '25.9333',
        population: 266550,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sumy',
        lat: '50.9167',
        lng: '34.7500',
        population: 265758,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Zhytomyr',
        lat: '50.2500',
        lng: '28.6667',
        population: 264452,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kropyvnytskyi',
        lat: '48.5000',
        lng: '32.2667',
        population: 227413,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Ternopil',
        lat: '49.5667',
        lng: '25.6000',
        population: 225238,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Rivne',
        lat: '50.6192',
        lng: '26.2519',
        population: 246574,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Uzhhorod',
        lat: '48.6239',
        lng: '22.2950',
        population: 114897,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Ivano-Frankivsk',
        lat: '48.9228',
        lng: '24.7106',
        population: 238196,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Mariupol',
        lat: '47.0958',
        lng: '37.5494',
        population: 449498,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Makiivka',
        lat: '48.0556',
        lng: '37.9611',
        population: 343158,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Horlivka',
        lat: '48.3336',
        lng: '38.0925',
        population: 256714,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kamianske',
        lat: '48.5167',
        lng: '34.6167',
        population: 235066,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kremenchuk',
        lat: '49.0631',
        lng: '33.4039',
        population: 220174,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bila Tserkva',
        lat: '49.7956',
        lng: '30.1167',
        population: 208944,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kramatorsk',
        lat: '48.7392',
        lng: '37.5839',
        population: 159445,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Melitopol',
        lat: '46.8489',
        lng: '35.3675',
        population: 154992,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sievierodonetsk',
        lat: '48.9481',
        lng: '38.4933',
        population: 150000,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kerch',
        lat: '45.3619',
        lng: '36.4711',
        population: 149566,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Drohobych',
        lat: '49.3500',
        lng: '23.5000',
        population: 124269,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Khrustalnyi',
        lat: '48.1214',
        lng: '38.9453',
        population: 124000,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Berdiansk',
        lat: '46.7556',
        lng: '36.7889',
        population: 114205,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sloviansk',
        lat: '48.8533',
        lng: '37.6059',
        population: 113196,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Nikopol',
        lat: '47.5667',
        lng: '34.4000',
        population: 110669,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Brovary',
        lat: '50.5111',
        lng: '30.7900',
        population: 109473,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Yevpatoriia',
        lat: '45.1939',
        lng: '33.3681',
        population: 108248,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Pavlohrad',
        lat: '48.5200',
        lng: '35.8700',
        population: 106082,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Alchevsk',
        lat: '48.4778',
        lng: '38.7978',
        population: 105398,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Konotop',
        lat: '51.2369',
        lng: '33.2027',
        population: 103547,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kamianets-Podilskyi',
        lat: '48.6806',
        lng: '26.5806',
        population: 100462,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Lysychansk',
        lat: '48.9169',
        lng: '38.4306',
        population: 96161,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Dovzhansk',
        lat: '48.0778',
        lng: '39.6472',
        population: 95153,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Mukacheve',
        lat: '48.4414',
        lng: '22.7136',
        population: 86257,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Uman',
        lat: '48.7500',
        lng: '30.2167',
        population: 82762,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chervonohrad',
        lat: '50.3822',
        lng: '24.2275',
        population: 82395,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Yalta',
        lat: '44.4994',
        lng: '34.1700',
        population: 79458,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Yenakiieve',
        lat: '48.2311',
        lng: '38.2053',
        population: 79348,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bakhmut',
        lat: '48.5947',
        lng: '38.0008',
        population: 75798,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Stakhanov',
        lat: '48.5681',
        lng: '38.6586',
        population: 75745,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Nizhyn',
        lat: '51.0474',
        lng: '31.8805',
        population: 73283,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kostiantynivka',
        lat: '48.5333',
        lng: '37.7167',
        population: 72888,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Fedosiia',
        lat: '45.0489',
        lng: '35.3792',
        population: 69145,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kovel',
        lat: '51.2167',
        lng: '24.7167',
        population: 69089,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Smila',
        lat: '49.2167',
        lng: '31.8667',
        population: 68536,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Korosten',
        lat: '50.9500',
        lng: '28.6500',
        population: 63525,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Pokrovsk',
        lat: '48.2828',
        lng: '37.1828',
        population: 63437,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Pervomaisk',
        lat: '48.0500',
        lng: '30.8500',
        population: 63377,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kolomyia',
        lat: '48.5167',
        lng: '25.0333',
        population: 61269,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Rubizhne',
        lat: '49.0336',
        lng: '38.3722',
        population: 59951,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chornomorsk',
        lat: '46.3017',
        lng: '30.6569',
        population: 59800,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Khartsyzk',
        lat: '48.0333',
        lng: '38.1500',
        population: 59763,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Druzhkivka',
        lat: '48.6203',
        lng: '37.5278',
        population: 59400,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Stryi',
        lat: '49.2500',
        lng: '23.8500',
        population: 59325,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bilhorod-Dnistrovskyi',
        lat: '46.1833',
        lng: '30.3500',
        population: 57210,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Irpin',
        lat: '50.5167',
        lng: '30.2500',
        population: 56806,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Novohrad-Volynskyi',
        lat: '50.5833',
        lng: '27.6333',
        population: 56288,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Lozova',
        lat: '48.8892',
        lng: '36.3161',
        population: 55827,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Antratsyt',
        lat: '48.1167',
        lng: '39.0833',
        population: 54640,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chystiakove',
        lat: '48.0219',
        lng: '38.6264',
        population: 53462,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Horishni Plavni',
        lat: '49.0167',
        lng: '33.6667',
        population: 52167,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Myrnohrad',
        lat: '48.2911',
        lng: '37.2681',
        population: 50360,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Shakhtarsk',
        lat: '48.0333',
        lng: '38.4833',
        population: 49482,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Okhtyrka',
        lat: '50.3074',
        lng: '34.9016',
        population: 47971,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Brianka',
        lat: '48.5133',
        lng: '38.6431',
        population: 47512,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Snizhne',
        lat: '48.0167',
        lng: '38.7667',
        population: 47259,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Rovenky',
        lat: '48.0833',
        lng: '39.3667',
        population: 46734,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Fastiv',
        lat: '50.0747',
        lng: '29.9181',
        population: 45907,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Lubny',
        lat: '50.0186',
        lng: '32.9869',
        population: 45786,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Krasnodon',
        lat: '48.3000',
        lng: '39.7333',
        population: 43683,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Shepetivka',
        lat: '50.1833',
        lng: '27.0667',
        population: 41415,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Romny',
        lat: '50.7428',
        lng: '33.4879',
        population: 40316,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Myrhorod',
        lat: '49.9667',
        lng: '33.6000',
        population: 40160,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Podilsk',
        lat: '47.7419',
        lng: '29.5350',
        population: 40155,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Vyshneve',
        lat: '50.3869',
        lng: '30.3581',
        population: 39900,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Vasylkiv',
        lat: '50.1775',
        lng: '30.3217',
        population: 37696,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Dubno',
        lat: '50.3931',
        lng: '25.7350',
        population: 37545,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Boryslav',
        lat: '49.2881',
        lng: '23.4267',
        population: 37093,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Holubivske',
        lat: '48.6375',
        lng: '38.6433',
        population: 36388,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Boyarka',
        lat: '50.3292',
        lng: '30.2886',
        population: 35411,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Yasynuvata',
        lat: '48.1167',
        lng: '37.8333',
        population: 35303,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bucha',
        lat: '50.5486',
        lng: '30.2208',
        population: 35162,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Avdiivka',
        lat: '48.1333',
        lng: '37.7500',
        population: 34938,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sambir',
        lat: '49.5167',
        lng: '23.2000',
        population: 34444,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Toretsk',
        lat: '48.3917',
        lng: '37.8733',
        population: 34378,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Zhmerynka',
        lat: '49.0500',
        lng: '28.1000',
        population: 34353,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chuhuiv',
        lat: '49.8372',
        lng: '36.6899',
        population: 33144,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Mohyliv-Podilskyi',
        lat: '48.4500',
        lng: '27.7833',
        population: 30589,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Truskavets',
        lat: '49.2806',
        lng: '23.5050',
        population: 28867,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Khmilnyk',
        lat: '49.5569',
        lng: '27.9572',
        population: 27941,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kupiansk',
        lat: '49.7064',
        lng: '37.6167',
        population: 27169,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Pereyaslav-Khmel’nyts’kyy',
        lat: '50.0650',
        lng: '31.4450',
        population: 27088,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sofiyivs’ka Borshchahivka',
        lat: '50.4114',
        lng: '30.3692',
        population: 26571,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Perevalsk',
        lat: '48.4333',
        lng: '38.8167',
        population: 26132,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Vynohradiv',
        lat: '48.1397',
        lng: '23.0331',
        population: 25403,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Saky',
        lat: '45.1336',
        lng: '33.5772',
        population: 24282,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Selydove',
        lat: '48.1500',
        lng: '37.3000',
        population: 23793,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Pesochin',
        lat: '49.9539',
        lng: '36.1092',
        population: 23414,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Molodohvardiisk',
        lat: '48.3444',
        lng: '39.6583',
        population: 22937,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Merefa',
        lat: '49.8197',
        lng: '36.0686',
        population: 21794,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bilohorodka',
        lat: '50.4000',
        lng: '30.2167',
        population: 21367,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sukhodilsk',
        lat: '48.3500',
        lng: '39.7167',
        population: 21324,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Liubotyn',
        lat: '49.9489',
        lng: '35.9306',
        population: 20887,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kotsyubyns’ke',
        lat: '50.4883',
        lng: '30.3331',
        population: 16337,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Hostomel',
        lat: '50.5893',
        lng: '30.2584',
        population: 16190,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Taromske',
        lat: '48.4619',
        lng: '34.7829',
        population: 15838,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Vynnyky',
        lat: '49.8156',
        lng: '24.1297',
        population: 15723,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chervonopartyzansk',
        lat: '48.0833',
        lng: '39.7833',
        population: 15218,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Nyzhnia Krynka',
        lat: '48.1144',
        lng: '38.1606',
        population: 13927,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Petrovske',
        lat: '48.2833',
        lng: '38.8833',
        population: 13500,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Antonivka',
        lat: '46.6791',
        lng: '32.7228',
        population: 12812,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Zhdanivka',
        lat: '48.1500',
        lng: '38.2500',
        population: 11913,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Vakhrusheve',
        lat: '48.1667',
        lng: '38.8333',
        population: 11421,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Hirnyk',
        lat: '48.0500',
        lng: '37.3667',
        population: 11378,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sartana',
        lat: '47.1708',
        lng: '37.6954',
        population: 10350,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Haspra',
        lat: '44.4361',
        lng: '34.1106',
        population: 10310,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Novgorodskoye',
        lat: '48.3328',
        lng: '37.8369',
        population: 10227,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Inkerman',
        lat: '44.6142',
        lng: '33.6083',
        population: 10196,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Korolevo',
        lat: '48.1500',
        lng: '23.1333',
        population: 10165,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sniatyn',
        lat: '48.4500',
        lng: '25.5667',
        population: 9942,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sofiivka',
        lat: '48.2683',
        lng: '38.1847',
        population: 9597,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bezliudivka',
        lat: '49.8694',
        lng: '36.2719',
        population: 9436,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bilenke',
        lat: '48.7664',
        lng: '37.6314',
        population: 9136,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Hurzuf',
        lat: '44.5528',
        lng: '34.2875',
        population: 9117,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Horodenka',
        lat: '48.6675',
        lng: '25.5003',
        population: 9113,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Masandra',
        lat: '44.5167',
        lng: '34.1833',
        population: 8571,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Yasnohirka',
        lat: '48.7725',
        lng: '37.5506',
        population: 8034,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Pochaiv',
        lat: '50.0079',
        lng: '25.4977',
        population: 7691,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Vuhlehirsk',
        lat: '48.3128',
        lng: '38.2605',
        population: 7372,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Zorynsk',
        lat: '48.4167',
        lng: '38.6167',
        population: 7173,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Komyshany',
        lat: '46.6400',
        lng: '32.5100',
        population: 6941,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Piskivka',
        lat: '50.7078',
        lng: '29.5950',
        population: 6896,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Karnaukhivka',
        lat: '48.4698',
        lng: '34.7376',
        population: 6631,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Rozkishne',
        lat: '48.4922',
        lng: '39.2719',
        population: 6482,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Vorzel',
        lat: '50.5464',
        lng: '30.1564',
        population: 6441,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Halych',
        lat: '49.1128',
        lng: '24.7217',
        population: 6196,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Petropavlivs’ka Borshchahivka',
        lat: '50.4378',
        lng: '30.3439',
        population: 6125,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Balabyne',
        lat: '47.7350',
        lng: '35.2142',
        population: 6010,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Zelenivka',
        lat: '46.7180',
        lng: '32.6484',
        population: 5775,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chornukhyne',
        lat: '48.3264',
        lng: '38.5156',
        population: 5725,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Koreiz',
        lat: '44.4331',
        lng: '34.0872',
        population: 5455,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bryukhovychi',
        lat: '49.9000',
        lng: '23.9436',
        population: 5400,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Horenka',
        lat: '50.5569',
        lng: '30.3175',
        population: 5358,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Zalizne',
        lat: '48.3750',
        lng: '37.8733',
        population: 4928,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Khotiv',
        lat: '50.3333',
        lng: '30.4664',
        population: 4737,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chabany',
        lat: '50.3400',
        lng: '30.4228',
        population: 4641,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Novooleksandrivka',
        lat: '48.3454',
        lng: '34.9969',
        population: 4502,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Almazna',
        lat: '48.5167',
        lng: '38.5833',
        population: 4301,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Shabelkivka',
        lat: '48.7608',
        lng: '37.4881',
        population: 4267,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Obroshino',
        lat: '49.7853',
        lng: '23.8686',
        population: 4186,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Novopillia',
        lat: '47.9539',
        lng: '33.5278',
        population: 4037,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Simeiz',
        lat: '44.4053',
        lng: '34.0044',
        population: 3901,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Novosilky',
        lat: '50.3544',
        lng: '30.4544',
        population: 3761,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Duliby',
        lat: '49.2306',
        lng: '23.8167',
        population: 3671,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kryukivshchyna',
        lat: '50.3683',
        lng: '30.3681',
        population: 3509,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Rohan',
        lat: '49.9044',
        lng: '36.4889',
        population: 3449,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Mykhaylivka-Rubezhivka',
        lat: '50.5003',
        lng: '30.1458',
        population: 3430,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Valianivske',
        lat: '48.0767',
        lng: '39.5611',
        population: 3324,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Malokaterynivka',
        lat: '47.6570',
        lng: '35.2591',
        population: 3320,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Vylok',
        lat: '48.1119',
        lng: '22.8379',
        population: 3201,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kulynychi',
        lat: '49.9800',
        lng: '36.3833',
        population: 2985,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Sadky',
        lat: '49.0090',
        lng: '33.4602',
        population: 2939,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Pervomaiskyi',
        lat: '47.9736',
        lng: '38.7875',
        population: 2837,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Brytivka',
        lat: '46.1722',
        lng: '30.2833',
        population: 2818,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Blyzhnie',
        lat: '45.0569',
        lng: '35.3306',
        population: 2779,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Lyubymivka',
        lat: '48.3721',
        lng: '35.1772',
        population: 2610,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Mala Rohan',
        lat: '49.9379',
        lng: '36.4874',
        population: 2603,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Kaihador',
        lat: '44.9633',
        lng: '35.3553',
        population: 2572,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Nikita',
        lat: '44.5111',
        lng: '34.2353',
        population: 2466,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Tereshky',
        lat: '49.5471',
        lng: '34.6227',
        population: 2450,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Zarichany',
        lat: '50.2300',
        lng: '28.6500',
        population: 2439,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Aviatorske',
        lat: '48.3664',
        lng: '35.0830',
        population: 2438,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Mykhailivka',
        lat: '48.4964',
        lng: '38.9025',
        population: 2373,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Verkhnosadove',
        lat: '44.6889',
        lng: '33.7056',
        population: 2331,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Aeroflotskyi',
        lat: '45.0194',
        lng: '34.0000',
        population: 2325,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chornotysiv',
        lat: '48.0783',
        lng: '23.0536',
        population: 2232,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Borki',
        lat: '49.9133',
        lng: '23.9178',
        population: 2203,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Piilo',
        lat: '49.0028',
        lng: '24.3036',
        population: 2150,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Yablunytsia',
        lat: '48.3278',
        lng: '24.4944',
        population: 1986,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Dobrovlyany',
        lat: '48.6641',
        lng: '25.7540',
        population: 1980,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bilshivtsi',
        lat: '49.1856',
        lng: '24.7464',
        population: 1938,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Ruski Tyshky',
        lat: '50.1371',
        lng: '36.4174',
        population: 1908,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Shcherbani',
        lat: '49.5334',
        lng: '34.5385',
        population: 1864,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Stari Kodaky',
        lat: '48.3768',
        lng: '35.1240',
        population: 1619,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Berezivka',
        lat: '49.9058',
        lng: '36.0642',
        population: 1584,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Nasypne',
        lat: '45.0458',
        lng: '35.2958',
        population: 1581,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Lisnyky',
        lat: '50.3039',
        lng: '30.5158',
        population: 1513,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Andriivka',
        lat: '44.8161',
        lng: '33.5635',
        population: 1498,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Iverske',
        lat: '48.6367',
        lng: '36.9608',
        population: 1419,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Chukaluvka',
        lat: '48.8681',
        lng: '24.6897',
        population: 1407,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Pokrovske',
        lat: '47.0503',
        lng: '37.4658',
        population: 1383,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Solomonovo',
        lat: '48.4306',
        lng: '22.1639',
        population: 1342,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Lavky',
        lat: '48.4800',
        lng: '22.6944',
        population: 1299,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Slobozhanske',
        lat: '50.1928',
        lng: '36.4136',
        population: 1173,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Shevchenkivske',
        lat: '48.0985',
        lng: '33.5950',
        population: 1140,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Krasnokamianka',
        lat: '44.5625',
        lng: '34.2931',
        population: 1074,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Bairachky',
        lat: '48.3883',
        lng: '38.5992',
        population: 1065,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Marianivka',
        lat: '48.3118',
        lng: '33.5294',
        population: 1016,
    },
    {
        isFavorite: false,
        id: uuidv4(),
        city: 'Volodymyr-Volynskyi',
        lat: '50.8525',
        lng: '24.3236',
    },
];
export default weaterCitys;