var testData = {};
  
// JSON string, could get this from anywhere
testData.kingsofLeon = '[{"id":"FO","text":"Jared Followill"},{"id":"FO1","text":"Caleb Followill"},{"id":"FO3","text":"Nathan Followill"},{"id":"FO2","text":"Matthew Followill"},{"id":"FO4","text":"Betty-Ann Followill"},{"id":"FO5","text":"Ivan Followill"},{"id":"FO6","text":"Taper Jean Girl"},{"id":"FO7","text":"The Bucket"},{"id":"FO8","text":"Mollys Chambers"},{"id":"FO8","text":"Four Kicks"},{"id":"FO10","text":"Use Somebody"},{"id":"FO9","text":"Holy Roller Novocaine"},{"id":"FO11","text":"On Call"},{"id":"FO12","text":"Wasted Time"},{"id":"FO13","text":"On Call"},{"id":"FO14","text":"King of the Rodeo"},{"id":"FO15","text":"Charmer"},{"id":"FO16","text":"Sex on Fire"},{"id":"FO17","text":"Fans"},{"id":"FO18","text":"Because of the Times"},{"id":"FO19","text":"Only by the Night"},{"id":"FO20","text":"Aha Shake Heartbreak"},{"id":"FO21","text":"Youth and Young Manhood"}]';
testData.countryCodes = '[{"id":"AD","text":"Andorra"},{"id":"AE","text":"United Arab Emirates"},{"id":"AF","text":"Afghanistan"},{"id":"AG","text":"Antigua and Barbuda"},{"id":"AI","text":"Anguilla"},{"id":"AL","text":"Albania"},{"id":"AM","text":"Armenia"},{"id":"AN","text":"Netherlands Antilles"},{"id":"AO","text":"Angola"},{"id":"AQ","text":"Antarctica"},{"id":"AR","text":"Argentina"},{"id":"AS","text":"American Samoa"},{"id":"AT","text":"Austria"},{"id":"AU","text":"Australia"},{"id":"AW","text":"Aruba"},{"id":"AX","text":"Aland Islands"},{"id":"AZ","text":"Azerbaijan"},{"id":"BA","text":"Bosnia and Herzegovina"},{"id":"BB","text":"Barbados"},{"id":"BD","text":"Bangladesh"},{"id":"BE","text":"Belgium"},{"id":"BF","text":"Burkina Faso"},{"id":"BG","text":"Bulgaria"},{"id":"BH","text":"Bahrain"},{"id":"BI","text":"Burundi"},{"id":"BJ","text":"Benin"},{"id":"BM","text":"Bermuda"},{"id":"BN","text":"Brunei Darussalam"},{"id":"BO","text":"Bolivia"},{"id":"BR","text":"Brazil"},{"id":"BS","text":"Bahamas"},{"id":"BT","text":"Bhutan"},{"id":"BV","text":"Bouvet Island"},{"id":"BW","text":"Botswana"},{"id":"BY","text":"Belarus"},{"id":"BZ","text":"Belize"},{"id":"CA","text":"Canada"},{"id":"CC","text":"Cocos (Keeling) Islands"},{"id":"CD","text":"Democratic Republic of the Congo"},{"id":"CF","text":"Central African Republic"},{"id":"CG","text":"Congo"},{"id":"CH","text":"Switzerland"},{"id":"CI","text":"Cote D\'Ivoire (Ivory Coast)"},{"id":"CK","text":"Cook Islands"},{"id":"CL","text":"Chile"},{"id":"CM","text":"Cameroon"},{"id":"CN","text":"China"},{"id":"CO","text":"Colombia"},{"id":"CR","text":"Costa Rica"},{"id":"CS","text":"Serbia and Montenegro"},{"id":"CU","text":"Cuba"},{"id":"CV","text":"Cape Verde"},{"id":"CX","text":"Christmas Island"},{"id":"CY","text":"Cyprus"},{"id":"CZ","text":"Czech Republic"},{"id":"DE","text":"Germany"},{"id":"DJ","text":"Djibouti"},{"id":"DK","text":"Denmark"},{"id":"DM","text":"Dominica"},{"id":"DO","text":"Dominican Republic"},{"id":"DZ","text":"Algeria"},{"id":"EC","text":"Ecuador"},{"id":"EE","text":"Estonia"},{"id":"EG","text":"Egypt"},{"id":"EH","text":"Western Sahara"},{"id":"ER","text":"Eritrea"},{"id":"ES","text":"Spain"},{"id":"ET","text":"Ethiopia"},{"id":"FI","text":"Finland"},{"id":"FJ","text":"Fiji"},{"id":"FK","text":"Falkland Islands (Malvinas)"},{"id":"FM","text":"Federated States of Micronesia"},{"id":"FO","text":"Faroe Islands"},{"id":"FR","text":"France"},{"id":"FX","text":"France"},{"id":"Me","text":"Metropolitan"},{"id":"GA","text":"Gabon"},{"id":"GB","text":"Great Britain (UK)"},{"id":"GD","text":"Grenada"},{"id":"GE","text":"Georgia"},{"id":"GF","text":"French Guiana"},{"id":"GH","text":"Ghana"},{"id":"GI","text":"Gibraltar"},{"id":"GL","text":"Greenland"},{"id":"GM","text":"Gambia"},{"id":"GN","text":"Guinea"},{"id":"GP","text":"Guadeloupe"},{"id":"GQ","text":"Equatorial Guinea"},{"id":"GR","text":"Greece"},{"id":"GS","text":"S. Georgia and S. Sandwich Islands"},{"id":"GT","text":"Guatemala"},{"id":"GU","text":"Guam"},{"id":"GW","text":"Guinea-Bissau"},{"id":"GY","text":"Guyana"},{"id":"HK","text":"Hong Kong"},{"id":"HM","text":"Heard Island and McDonald Islands"},{"id":"HN","text":"Honduras"},{"id":"HR","text":"Croatia (Hrvatska)"},{"id":"HT","text":"Haiti"},{"id":"HU","text":"Hungary"},{"id":"ID","text":"Indonesia"},{"id":"IE","text":"Ireland"},{"id":"IL","text":"Israel"},{"id":"IN","text":"India"},{"id":"IO","text":"British Indian Ocean Territory"},{"id":"IQ","text":"Iraq"},{"id":"IR","text":"Iran"},{"id":"IS","text":"Iceland"},{"id":"IT","text":"Italy"},{"id":"JM","text":"Jamaica"},{"id":"JO","text":"Jordan"},{"id":"JP","text":"Japan"},{"id":"KE","text":"Kenya"},{"id":"KG","text":"Kyrgyzstan"},{"id":"KH","text":"Cambodia"},{"id":"KI","text":"Kiribati"},{"id":"KM","text":"Comoros"},{"id":"KN","text":"Saint Kitts and Nevis"},{"id":"KP","text":"Korea (North)"},{"id":"KR","text":"Korea (South)"},{"id":"KW","text":"Kuwait"},{"id":"KY","text":"Cayman Islands"},{"id":"KZ","text":"Kazakhstan"},{"id":"LA","text":"Laos"},{"id":"LB","text":"Lebanon"},{"id":"LC","text":"Saint Lucia"},{"id":"LI","text":"Liechtenstein"},{"id":"LK","text":"Sri Lanka"},{"id":"LR","text":"Liberia"},{"id":"LS","text":"Lesotho"},{"id":"LT","text":"Lithuania"},{"id":"LU","text":"Luxembourg"},{"id":"LV","text":"Latvia"},{"id":"LY","text":"Libya"},{"id":"MA","text":"Morocco"},{"id":"MC","text":"Monaco"},{"id":"MD","text":"Moldova"},{"id":"MG","text":"Madagascar"},{"id":"MH","text":"Marshall Islands"},{"id":"MK","text":"Macedonia"},{"id":"ML","text":"Mali"},{"id":"MM","text":"Myanmar"},{"id":"MN","text":"Mongolia"},{"id":"MO","text":"Macao"},{"id":"MP","text":"Northern Mariana Islands"},{"id":"MQ","text":"Martinique"},{"id":"MR","text":"Mauritania"},{"id":"MS","text":"Montserrat"},{"id":"MT","text":"Malta"},{"id":"MU","text":"Mauritius"},{"id":"MV","text":"Maldives"},{"id":"MW","text":"Malawi"},{"id":"MX","text":"Mexico"},{"id":"MY","text":"Malaysia"},{"id":"MZ","text":"Mozambique"},{"id":"NA","text":"Namibia"},{"id":"NC","text":"New Caledonia"},{"id":"NE","text":"Niger"},{"id":"NF","text":"Norfolk Island"},{"id":"NG","text":"Nigeria"},{"id":"NI","text":"Nicaragua"},{"id":"NL","text":"Netherlands"},{"id":"NO","text":"Norway"},{"id":"NP","text":"Nepal"},{"id":"NR","text":"Nauru"},{"id":"NU","text":"Niue"},{"id":"NZ","text":"New Zealand (Aotearoa)"},{"id":"OM","text":"Oman"},{"id":"PA","text":"Panama"},{"id":"PE","text":"Peru"},{"id":"PF","text":"French Polynesia"},{"id":"PG","text":"Papua New Guinea"},{"id":"PH","text":"Philippines"},{"id":"PK","text":"Pakistan"},{"id":"PL","text":"Poland"},{"id":"PM","text":"Saint Pierre and Miquelon"},{"id":"PN","text":"Pitcairn"},{"id":"PR","text":"Puerto Rico"},{"id":"PS","text":"Palestinian Territory"},{"id":"PT","text":"Portugal"},{"id":"PW","text":"Palau"},{"id":"PY","text":"Paraguay"},{"id":"QA","text":"Qatar"},{"id":"RE","text":"Reunion"},{"id":"RO","text":"Romania"},{"id":"RU","text":"Russian Federation"},{"id":"RW","text":"Rwanda"},{"id":"SA","text":"Saudi Arabia"},{"id":"SB","text":"Solomon Islands"},{"id":"SC","text":"Seychelles"},{"id":"SD","text":"Sudan"},{"id":"SE","text":"Sweden"},{"id":"SG","text":"Singapore"},{"id":"SH","text":"Saint Helena"},{"id":"SI","text":"Slovenia"},{"id":"SJ","text":"Svalbard and Jan Mayen"},{"id":"SK","text":"Slovakia"},{"id":"SL","text":"Sierra Leone"},{"id":"SM","text":"San Marino"},{"id":"SN","text":"Senegal"},{"id":"SO","text":"Somalia"},{"id":"SR","text":"Suriname"},{"id":"ST","text":"Sao Tome and Principe"},{"id":"SU","text":"USSR (former)"},{"id":"SV","text":"El Salvador"},{"id":"SY","text":"Syria"},{"id":"SZ","text":"Swaziland"},{"id":"TC","text":"Turks and Caicos Islands"},{"id":"TD","text":"Chad"},{"id":"TF","text":"French Southern Territories"},{"id":"TG","text":"Togo"},{"id":"TH","text":"Thailand"},{"id":"TJ","text":"Tajikistan"},{"id":"TK","text":"Tokelau"},{"id":"TL","text":"Timor-Leste"},{"id":"TM","text":"Turkmenistan"},{"id":"TN","text":"Tunisia"},{"id":"TO","text":"Tonga"},{"id":"TP","text":"East Timor"},{"id":"TR","text":"Turkey"},{"id":"TT","text":"Trinidad and Tobago"},{"id":"TV","text":"Tuvalu"},{"id":"TW","text":"Taiwan"},{"id":"TZ","text":"Tanzania"},{"id":"UA","text":"Ukraine"},{"id":"UG","text":"Uganda"},{"id":"UK","text":"United Kingdom"},{"id":"UM","text":"United States Minor Outlying Islands"},{"id":"US","text":"United States"},{"id":"UY","text":"Uruguay"},{"id":"UZ","text":"Uzbekistan"},{"id":"VA","text":"Vatican City State (Holy See)"},{"id":"VC","text":"Saint Vincent and the Grenadines"},{"id":"VE","text":"Venezuela"},{"id":"VG","text":"Virgin Islands (British)"},{"id":"VI","text":"Virgin Islands (U.S.)"},{"id":"VN","text":"Viet Nam"},{"id":"VU","text":"Vanuatu"},{"id":"WF","text":"Wallis and Futuna"},{"id":"WS","text":"Samoa"},{"id":"YE","text":"Yemen"},{"id":"YT","text":"Mayotte"},{"id":"YU","text":"Yugoslavia (former)"},{"id":"ZA","text":"South Africa"},{"id":"ZM","text":"Zambia"},{"id":"ZR","text":"Zaire (former)"},{"id":"ZW","text":"Zimbabwe"},{"id":"BIZ","text":"Business"},{"id":"COM","text":"Commercial"},{"id":"EDU","text":"US Educational"},{"id":"GOV","text":"US Government"},{"id":"INT","text":"International"},{"id":"MIL","text":"US Military"},{"id":"NET","text":"Network"},{"id":"ORG","text":"Nonprofit Organization"},{"id":"PRO","text":"Professional Services"},{"id":"AERO","text":"Aeronautic"},{"id":"ARPA","text":"Arpanet Technical Infrastructure"},{"id":"COOP","text":"Cooperative"},{"id":"INFO","text":"Info Domain"},{"id":"NAME","text":"Personal Name"},{"id":"NATO","text":"North Atlantic Treaty Organization"}]';

// The object that the JSON string should represent, can use this as it is if you want.
testData.searchChatyeo = [
    {
        id: 1,
  nameTag: 'Katie',
        text: 'ok what\'s been up in the news recently?...all the deaths?',
        image: 'avatars/avatarkatie.jpg',
        extra: ''
    },
    {
        id: 2,
  nameTag: 'Tess',
        text: 'it\'s getting a little scary, so many!',
        image: 'avatars/avatarkatie.jpg',
        extra: ''
    },
    {
        id: 3,
  nameTag: 'Katie',
        text: 'i was reading about that the other day in the news, but i can\'t remember the details.... A few people have died and it sounds like that theory where people die in threes. They came up with that theory because there was an incident in the past...but I don\'t think that many celebrities have died within in a close time period with one another for awhile.',
        image: 'avatars/avatarkatie.jpg',
        extra: ''
    },
    {
        id: 4,
  nameTag: 'Katie',
        text: 'so who are all the people who\'ve died?...fawcett? michael jackson?...billy mayes?',
        image: 'avatars/avatarkatie.jpg',
        extra: ''
    },
    {
        id: 5,
  nameTag: 'Tess',
        text: 'then the guy yesterday who was secretary of state during Vietnam...can\'t remember his name..',
        image: 'avatars/avatar-photo18.jpg',
        extra: ''
    },
    {
        id: 6,
  nameTag: 'Katie',
        text: 'i dont know either, and the football player',
        image: 'avatars/avatarkatie.jpg',
        extra: ''
    },
    {
        id: 7,
  nameTag: 'Mike',
        text: 'Robert McNamara, Farah Fawcett, Michael Jackson and Billy Mayes.........I think they all died within a week of one another',
        image: 'avatars/avatar-photo15.jpg',
        extra: ''
    },
    {
        id: 8,
  nameTag: 'Tess',
        text: 'McNamara is the state guy right? Yeah both Farah and Michael died on June 25th. I can\'t believe it. MJ is getting a lot more publicity too which is pretty sad. I used to watch Charlies Angels back in the day with Farrah Fawcett.',
        image: 'avatars/avatar-photo18.jpg',
        extra: ''
    },
    {
        id: 9,
  nameTag: 'Mike',
        text: 'and the football player was steve mcnai *mcnair',
        image: 'avatars/avatar-photo15.jpg',
        extra: ''
    },
    {
        id: 10,
  nameTag: 'Katie',
        text: 'yeah mcnair. Charlies Angels was my favorite! But I loved Kate Jackson.',
        image: 'avatars/avatarkatie.jpg',
	extra: ''
    },
    {
	id: 11,
  nameTag: 'Tess',
        text: 'now there\'s a crazy story too',
        image: 'avatars/avatar-photo18.jpg',
        extra: ''
    },
    {
        id: 12,
  nameTag: 'Mike',
        text: 'i can\'t believe he was having an affair with a 20 yr old',
        image: 'avatars/avatar-photo15.jpg',
        extra: ''
    },
    {
        id: 13,
  nameTag: 'Katie',
        text: 'how old is he? so he shot the girl he was having an affair with?',
        image: 'avatars/avatarkatie.jpg',
        extra: ''
    },
    {
        id: 14,
  nameTag: 'Tess',
        text: 'he\'s at least 30 i think. He used to play for the Tennessee Titans and he also played for the Baltimore Ravens but he retired after 13 seasons in 2008.....and the girl shot him then herself...crazy drama story. Apparently they were dating. McNair has a wife and four kids, but was having an affair with this 20 year old. I\'m pretty sure they confirmed that it was a murder suicide.',
        image: 'avatars/avatar-photo18.jpg',
        extra: ''
    },
    {
        id: 15,
  nameTag: 'Katie',
        text: 'that\'s a bit old but what about linda hogan and her younger b/f',
        image: 'avatars/avatarkatie.jpg',
        extra: ''

    },
    {
        id: 16,
  nameTag: 'Tess',
        text: 'omigosh yeah that\'s kinda gross...have they been in the news lately for something else?',
        image: 'avatars/avatar-photo18.jpg',
        extra: ''
    },
    {
        id: 17,
  nameTag: 'Katie',
        text: 'Not really...but did you know her boyfriend Charlie Hill who\'s only 19 went to school with Brooke and Nick???He\'s only a year older than Nick and a year younger than Brooke. That\'s probably why Brooke\'s so upset on her TV show Brooke Knows Best. I watched it the other day and she wouldn\'t even talk to her mom. No wonder!',
        image: 'avatars/avatarkatie.jpg',
        extra: ''
   }];



// Conversation Search script
testData.conversationSearch = [
    {
        id: 1,
  nameTag: 'Finance',
        text: 'yeah...i had comerica before. I really liked them and would keep using their services but they don\'t have any locations in the Chicago area.',
  image: 'images/spacer.gif" class="fin',
        extra: '<img src="images/popularity_high.gif" alt="" />'
    },
    {
        id: 2,
  nameTag: 'News',
        text: 'McNamara is the state guy right? Yeah both Farah and Michael died on June 25th. I can\'t believe it. MJ is getting a lot more publicity too which is pretty sad. I used to watch Charlies Angels back in the day with Farrah Fawcett.',
        image: 'images/spacer.gif" class="news',
        extra: '<img src="images/popularity_high.gif" alt="" />'
    },
    {
        id: 3,
  nameTag: 'Shopping',
        text: 'i think the sale has been going on for awhile because there aren\'t many items left on sale',
        image: 'images/spacer.gif" class="shop',
        extra: '<img src="images/popularity_high.gif" alt="" />'
    },
    {
        id: 4,
  nameTag: 'Finance',
        text: 'I sounded like they have a good rewards program or i could get the united card..i fly united a lot',
        image: 'images/spacer.gif" class="fin',
        extra: '<img src="images/popularity_high.gif" alt="" />'
    },
    {
        id: 5,
  nameTag: 'Shopping',
        text: 'Forever 21\'s clothes are SO cheap, but sometimes the quality is bad. I still shop there anyways. I love getting tops there because I\'m such a slob when I eat and I spill on myself every time. That way I don\'t have to feel bad for ruining the top...I can just buy another one for ten bucks.',
        image: 'images/spacer.gif" class="shop',
        extra: '<img src="images/popularity_high.gif" alt="" />'
    },
    {
        id: 6,
  nameTag: 'News',
        text: 'so I can\'t believe that Sarah Palin resigned before the end of her term. During the presidential campagin she was really enthusiastic about serving Alaska and representing her state on a national level. I wonder if all of the attention that\'s been place on her family influenced her decision.', 
        image: 'images/spacer.gif" class="news',
        extra: '<img src="images/popularity_high.gif" alt="" />'
    },
    {
        id: 7,
  nameTag: 'Politics',
        text: 'yeah...her family is getting a lot of heat...a lot of scrutiny has been put on bristol and her child and david letterman made fun of her family',
        image: 'images/spacer.gif" class="pol',
        extra: '<img src="images/popularity_average.gif" alt="" />'
    },
    {
        id: 8,
  nameTag: 'News',
        text: 'it seems like every celebrity couple who has a reality show gets divorced. Jon and Kate plus eight is the biggest shocker. Kate really wanted things to work out. I remember her saying she didn\'t want to be a statistic during one of the previous shows. She said the more kids you have, your chances increase for divorce. I guess that statistic proved to be true. I feel bad for those kids they\'re so cute! but at least they have each other.',
        image: 'images/spacer.gif" class="news',
        extra: '<img src="images/popularity_average.gif" alt="" />'
    },
    {
        id: 9,
  nameTag: 'Music',
        text: 'Have you heard Michael Jackson\'s song with Akon?',
        image: 'images/spacer.gif" class="mus',
        extra: '<img src="images/popularity_low.gif" alt="" />'
    },
    {
        id: 10,
  nameTag: 'Music',
        text: 'I love listening to Metallica when I\'m driving. I drive really fast when i listen to their music. And I tend to rock out and sing to the lyrics...although I don\'t know all of the lyrics I kind of mumble and pretend like I do haha...',
        image: 'images/spacer.gif" class="mus',
        extra: '<img src="images/popularity_low.gif" alt="" />'
    },
    {
        id: 11,
  nameTag: 'Music',
        text: 'The King of Pop has died...crazy!',
        image: 'images/spacer.gif" class="mus',
        extra: '<img src="images/popularity_low.gif" alt="" />'
    }];
// JSON string of the above object, just as an example
testData.webSitesJSON = JSON.stringify(testData.webSites);
