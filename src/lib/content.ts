export const BUSINESS = {
  phone: "9842811905",
  phoneHref: "tel:+9779842811905",
  whatsapp: "https://wa.me/9779842811905",
  facebook: "https://www.facebook.com/kopilatvservice",
  directions: "https://maps.google.com/?q=Gaighat,Udayapur,Nepal",
  mapEmbed:
    "https://www.google.com/maps?q=Gaighat,+Udayapur,+Nepal&output=embed",
};

type Bi = { en: string; np: string };

export const SERVICES: { icon: string; title: Bi; desc: Bi }[] = [
  {
    icon: "Tv",
    title: { en: "LED, LCD & Smart TVs", np: "एलईडी, एलसीडी र स्मार्ट टिभी" },
    desc: {
      en: "Panel, backlight, power board, main board and software faults on all major brands.",
      np: "सबै प्रमुख ब्रान्डका प्यानल, ब्याकलाइट, पावर बोर्ड, मेन बोर्ड र सफ्टवेयर समस्या।",
    },
  },
  {
    icon: "Speaker",
    title: { en: "Speakers & Sound Systems", np: "स्पिकर तथा साउन्ड सिस्टम" },
    desc: {
      en: "Home theatre, amplifiers, woofers and portable speakers — no sound, distortion or dead channels.",
      np: "होम थिएटर, एम्प्लिफायर, वुफर र पोर्टेबल स्पिकर — आवाज नआउने, बिग्रिएको वा च्यानल नचल्ने समस्या।",
    },
  },
  {
    icon: "Radio",
    title: { en: "Radios & Watches", np: "रेडियो तथा घडी" },
    desc: {
      en: "Classic radios, cassette players and wall or wrist watches serviced with care.",
      np: "पुराना रेडियो, क्यासेट प्लेयर तथा भित्ते र हातघडीको ध्यानपूर्वक मर्मत।",
    },
  },
  {
    icon: "BatteryCharging",
    title: { en: "Inverters & Batteries", np: "इन्भर्टर तथा ब्याट्री" },
    desc: {
      en: "Inverter boards, charging faults, wiring and battery health checks for home backup.",
      np: "घरायसी ब्याकअपका लागि इन्भर्टर बोर्ड, चार्जिङ समस्या, वायरिङ र ब्याट्री जाँच।",
    },
  },
  {
    icon: "Fan",
    title: { en: "Fans & Motors", np: "पंखा तथा मोटर" },
    desc: {
      en: "Ceiling, table and stand fans — rewinding, capacitors, bearings and regulators.",
      np: "सिलिङ, टेबल र स्ट्यान्ड पंखा — रिवाइन्डिङ, क्यापासिटर, बेयरिङ र रेगुलेटर।",
    },
  },
  {
    icon: "CookingPot",
    title: { en: "Kitchen Appliances", np: "भान्साका उपकरण" },
    desc: {
      en: "Rice cookers, mixers, electric kettles and induction units repaired and tested.",
      np: "राइस कुकर, मिक्सर, इलेक्ट्रिक केतली र इन्डक्सनको मर्मत तथा परीक्षण।",
    },
  },
  {
    icon: "Iron",
    title: { en: "Irons & Heaters", np: "इस्त्री तथा हिटर" },
    desc: {
      en: "Electric irons, room heaters and immersion rods — elements, thermostats and cords.",
      np: "इलेक्ट्रिक इस्त्री, रुम हिटर र इमर्सन रड — एलिमेन्ट, थर्मोस्ट्याट र तार।",
    },
  },
  {
    icon: "Flashlight",
    title: { en: "Torches & Emergency Lights", np: "टर्च तथा इमर्जेन्सी लाइट" },
    desc: {
      en: "Rechargeable torches, emergency lamps and LED drivers brought back to life.",
      np: "रिचार्जेबल टर्च, इमर्जेन्सी बत्ती र एलईडी ड्राइभरको मर्मत।",
    },
  },
  {
    icon: "PlugZap",
    title: { en: "Extension Boards & Wiring", np: "एक्सटेन्सन बोर्ड तथा वायरिङ" },
    desc: {
      en: "Extension boards, switches, sockets and small household electrical repairs.",
      np: "एक्सटेन्सन बोर्ड, स्विच, सकेट र घरायसी साना इलेक्ट्रिकल मर्मत।",
    },
  },
];

export const PRODUCTS: {
  title: Bi;
  desc: Bi;
  image: "kitchen" | "fans" | "speakers" | "lights" | "switches" | "chargers";
}[] = [
  {
    title: { en: "Kitchen Appliances", np: "भान्साका उपकरण" },
    desc: {
      en: "Rice cookers, mixer grinders, electric kettles and hot plates from trusted brands.",
      np: "भरपर्दो ब्रान्डका राइस कुकर, मिक्सर ग्राइन्डर, इलेक्ट्रिक केतली र हट प्लेट।",
    },
    image: "kitchen",
  },
  {
    title: { en: "Fans", np: "पंखा" },
    desc: {
      en: "Ceiling, table, stand and rechargeable fans for homes, shops and offices.",
      np: "घर, पसल तथा कार्यालयका लागि सिलिङ, टेबल, स्ट्यान्ड र रिचार्जेबल पंखा।",
    },
    image: "fans",
  },
  {
    title: { en: "Speakers", np: "स्पिकर" },
    desc: {
      en: "Bluetooth speakers, woofers and sound boxes for home and events.",
      np: "घर तथा कार्यक्रमका लागि ब्लुटुथ स्पिकर, वुफर र साउन्ड बक्स।",
    },
    image: "speakers",
  },
  {
    title: { en: "LED Bulbs & Lights", np: "एलईडी बल्ब तथा बत्ती" },
    desc: {
      en: "Energy-saving LED bulbs, tube lights, panel lights and emergency lamps.",
      np: "ऊर्जा बचत गर्ने एलईडी बल्ब, ट्युब लाइट, प्यानल लाइट र इमर्जेन्सी बत्ती।",
    },
    image: "lights",
  },
  {
    title: { en: "Switches & Sockets", np: "स्विच तथा सकेट" },
    desc: {
      en: "Modular switches, sockets, holders and boards for new or repaired wiring.",
      np: "नयाँ वा मर्मत गरिएको वायरिङका लागि मोड्युलर स्विच, सकेट, होल्डर र बोर्ड।",
    },
    image: "switches",
  },
  {
    title: { en: "Chargers & Extension Boards", np: "चार्जर तथा एक्सटेन्सन बोर्ड" },
    desc: {
      en: "Mobile chargers, cables, multi-plugs and surge-protected extension boards.",
      np: "मोबाइल चार्जर, केबल, मल्टिप्लग र सर्ज सुरक्षित एक्सटेन्सन बोर्ड।",
    },
    image: "chargers",
  },
];

export const WHY_US: { icon: string; title: Bi; desc: Bi }[] = [
  {
    icon: "ShieldCheck",
    title: { en: "20+ years of experience", np: "२० वर्षभन्दा बढीको अनुभव" },
    desc: {
      en: "Serving Gaighat since 2060 B.S., with skills passed down inside the family.",
      np: "२०६० सालदेखि गाईघाटको सेवामा, परिवारभित्रै हस्तान्तरण भएको सीपसहित।",
    },
  },
  {
    icon: "BadgeIndianRupee",
    title: { en: "Honest, upfront pricing", np: "इमानदार र स्पष्ट मूल्य" },
    desc: {
      en: "You get a quote before any work starts. No hidden charges after the repair.",
      np: "काम सुरु गर्नुअघि नै मूल्य भनिन्छ। मर्मतपछि कुनै लुकेको शुल्क हुँदैन।",
    },
  },
  {
    icon: "Wrench",
    title: { en: "Genuine spare parts", np: "सक्कली स्पेयर पार्ट्स" },
    desc: {
      en: "Quality components sourced from reliable suppliers, not the cheapest available.",
      np: "सस्तो होइन, भरपर्दो आपूर्तिकर्ताबाट ल्याइएका गुणस्तरीय पार्ट्स।",
    },
  },
  {
    icon: "Clock",
    title: { en: "Fast turnaround", np: "छिटो सेवा" },
    desc: {
      en: "Most small appliances are returned the same day; TVs usually within 1–3 days.",
      np: "अधिकांश साना उपकरण सोही दिन फिर्ता; टिभी सामान्यतया १–३ दिनभित्र।",
    },
  },
  {
    icon: "CalendarCheck",
    title: { en: "Open 7 days a week", np: "हप्ताको सातै दिन खुला" },
    desc: {
      en: "Early mornings to late evenings in summer, so you can come before or after work.",
      np: "गर्मीमा बिहान सबेरैदेखि बेलुकासम्म खुला, कामअघि वा कामपछि आउन सकिने।",
    },
  },
  {
    icon: "MessageCircle",
    title: { en: "Advice in your language", np: "तपाईंकै भाषामा सल्लाह" },
    desc: {
      en: "We explain the fault clearly in Nepali or English before you decide.",
      np: "निर्णय गर्नुअघि समस्या नेपाली वा अंग्रेजीमा स्पष्ट रूपमा बुझाइन्छ।",
    },
  },
];

export const PROCESS: { step: string; title: Bi; desc: Bi }[] = [
  {
    step: "01",
    title: { en: "Bring it in or call", np: "ल्याउनुहोस् वा फोन गर्नुहोस्" },
    desc: {
      en: "Drop the device at the shop or describe the fault over the phone or WhatsApp.",
      np: "उपकरण पसलमा ल्याउनुहोस् वा फोन/ह्वाट्सएपमार्फत समस्या बताउनुहोस्।",
    },
  },
  {
    step: "02",
    title: { en: "Free diagnosis", np: "नि:शुल्क जाँच" },
    desc: {
      en: "We test the device and identify exactly what has failed before quoting.",
      np: "मूल्य भन्नुअघि उपकरण परीक्षण गरी के बिग्रेको हो पत्ता लगाइन्छ।",
    },
  },
  {
    step: "03",
    title: { en: "Approved repair", np: "स्वीकृत मर्मत" },
    desc: {
      en: "Work begins only after you approve the estimate. Parts are shown to you.",
      np: "तपाईंले अनुमानित मूल्य स्वीकृत गरेपछि मात्र काम सुरु हुन्छ। पार्ट्स देखाइन्छ।",
    },
  },
  {
    step: "04",
    title: { en: "Tested & handed back", np: "परीक्षणपछि हस्तान्तरण" },
    desc: {
      en: "The device is run and tested at the counter before you take it home.",
      np: "घर लैजानुअघि उपकरण पसलमै चलाएर परीक्षण गरिन्छ।",
    },
  },
];

export const TESTIMONIALS: { name: string; place: Bi; quote: Bi }[] = [
  {
    name: "Ramesh Karki",
    place: { en: "Gaighat", np: "गाईघाट" },
    quote: {
      en: "My 43-inch LED had no picture. They found a backlight fault, showed me the parts and returned it the next day at a fair price.",
      np: "मेरो ४३ इन्चको एलईडीमा तस्बिर आउँदैनथ्यो। ब्याकलाइटको समस्या पत्ता लगाएर पार्ट्स देखाउँदै भोलिपल्टै उचित मूल्यमा फिर्ता दिनुभयो।",
    },
  },
  {
    name: "Sunita Rai",
    place: { en: "Katari", np: "कटारी" },
    quote: {
      en: "I have been buying bulbs, switches and a rice cooker here for years. Honest shop, and they never refuse a small repair.",
      np: "वर्षौंदेखि यहीँबाट बल्ब, स्विच र राइस कुकर किन्दै आएकी छु। इमानदार पसल, सानो मर्मत पनि कहिल्यै अस्वीकार गर्नुहुन्न।",
    },
  },
  {
    name: "Dipesh Shrestha",
    place: { en: "Udayapur", np: "उदयपुर" },
    quote: {
      en: "Our hotel inverter failed during a long outage. They came, fixed the board and the backup has worked ever since.",
      np: "लामो लोडसेडिङका बेला हाम्रो होटलको इन्भर्टर बिग्रियो। आएर बोर्ड मर्मत गरिदिनुभयो, त्यसपछि ब्याकअप राम्रो चलिरहेको छ।",
    },
  },
];

export const FAQS: { q: Bi; a: Bi }[] = [
  {
    q: { en: "How long does a TV repair take?", np: "टिभी मर्मत गर्न कति समय लाग्छ?" },
    a: {
      en: "Most TV repairs are completed within 1 to 3 days. If a spare part must be ordered from Kathmandu, it can take a few days longer — we will tell you the expected date when you drop the set off.",
      np: "अधिकांश टिभी मर्मत १ देखि ३ दिनभित्र सकिन्छ। काठमाडौंबाट पार्ट्स मगाउनुपर्ने भएमा केही दिन बढी लाग्न सक्छ — टिभी छाड्दा नै अनुमानित मिति बताइन्छ।",
    },
  },
  {
    q: { en: "Do you charge for diagnosis?", np: "जाँचको शुल्क लाग्छ?" },
    a: {
      en: "Basic diagnosis at the counter is free. If a device needs to be opened and bench-tested, we discuss any charge with you first.",
      np: "पसलमा गरिने साधारण जाँच नि:शुल्क छ। उपकरण खोलेर बेन्च टेस्ट गर्नुपर्ने भएमा शुल्कबारे पहिले नै कुरा गरिन्छ।",
    },
  },
  {
    q: { en: "Do you give a warranty on repairs?", np: "मर्मतमा वारेन्टी दिनुहुन्छ?" },
    a: {
      en: "Yes. Repairs carry a service warranty on the replaced part and the work done. The period depends on the part — ask at the counter and it will be written on your bill.",
      np: "हो। परिवर्तन गरिएको पार्ट्स र गरिएको कामको सेवा वारेन्टी दिइन्छ। अवधि पार्ट्स अनुसार फरक हुन्छ — पसलमा सोध्नुहोस्, बिलमा लेखिन्छ।",
    },
  },
  {
    q: { en: "Do you repair all brands?", np: "सबै ब्रान्डको मर्मत गर्नुहुन्छ?" },
    a: {
      en: "We work on all common brands of TVs, speakers, fans and appliances sold in Nepal, including Samsung, LG, Sony, CG, Videocon, Baltra and local assemblies.",
      np: "नेपालमा बिक्री हुने स्याम्सङ, एलजी, सोनी, सीजी, भिडियोकन, बल्ट्रा तथा स्थानीय असेम्बलीसहित सबै प्रचलित ब्रान्डका टिभी, स्पिकर, पंखा र उपकरणमा काम गर्छौं।",
    },
  },
  {
    q: { en: "Can you collect the device from my home?", np: "घरबाट उपकरण लिन आउन सक्नुहुन्छ?" },
    a: {
      en: "For large televisions and inverters inside Gaighat we can usually arrange pickup and delivery. Call us to check availability and any transport cost.",
      np: "गाईघाटभित्र ठूला टिभी र इन्भर्टरका लागि सामान्यतया पिकअप र डेलिभरी मिलाउन सकिन्छ। उपलब्धता र ढुवानी शुल्कका लागि फोन गर्नुहोस्।",
    },
  },
  {
    q: { en: "Do you sell as well as repair?", np: "मर्मतसँगै सामान पनि बेच्नुहुन्छ?" },
    a: {
      en: "Yes. The shop stocks LED bulbs, switches, chargers, extension boards, fans, speakers, emergency lights and kitchen appliances at local retail prices.",
      np: "हो। पसलमा एलईडी बल्ब, स्विच, चार्जर, एक्सटेन्सन बोर्ड, पंखा, स्पिकर, इमर्जेन्सी लाइट तथा भान्साका उपकरण स्थानीय खुद्रा मूल्यमा उपलब्ध छन्।",
    },
  },
  {
    q: { en: "What are your opening hours?", np: "खुल्ने समय के हो?" },
    a: {
      en: "In summer we open around 6–7 AM and close between 8 and 8:30 PM. In winter we open at 7 AM and close at 6 PM. The shop is open all seven days.",
      np: "गर्मीमा बिहान करिब ६–७ बजे खुल्छ र बेलुका ८ देखि ८:३० बजेसम्म खुला रहन्छ। जाडोमा बिहान ७ बजेदेखि साँझ ६ बजेसम्म। पसल सातै दिन खुला रहन्छ।",
    },
  },
];
