export type Term = {
  term: string;
  translation: string;
  description: string;
};

export const terms: Term[] = [
  {
    term: "API",
    translation: "Dasturiy interfeys",
    description:
      "Dasturlar o‘rtasida ma’lumot almashish va funksiyalardan foydalanish imkonini beradigan interfeys.",
  },
  {
    term: "Backend",
    translation: "Server tomoni",
    description:
      "Dastur yoki saytning serverda ishlaydigan va foydalanuvchiga bevosita ko‘rinmaydigan qismi.",
  },
  {
    term: "Frontend",
    translation: "Foydalanuvchi tomoni",
    description:
      "Foydalanuvchi ko‘radigan va bevosita ishlatadigan dastur yoki sayt qismi.",
  },
  {
    term: "Database",
    translation: "Ma’lumotlar bazasi",
    description:
      "Ma’lumotlarni saqlash, boshqarish va izlash uchun ishlatiladigan tizim.",
  },
  {
    term: "Server",
    translation: "Server",
    description:
      "Boshqa qurilma yoki dasturlarga xizmat va ma’lumot taqdim etadigan tizim.",
  },
  {
    term: "Client",
    translation: "Mijoz",
    description:
      "Serverdan ma’lumot yoki xizmat so‘raydigan dastur yoki qurilma.",
  },
  {
    term: "Deployment",
    translation: "Ishga chiqarish",
    description:
      "Dastur yoki yangi versiyani serverga joylashtirib, foydalanishga tayyorlash jarayoni.",
  },
  {
    term: "Repository",
    translation: "Kod ombori",
    description:
      "Dastur kodi va uning o‘zgarishlar tarixini saqlash uchun ishlatiladigan joy.",
  },
  {
    term: "Commit",
    translation: "O‘zgarishni saqlash",
    description:
      "Git tizimida koddagi o‘zgarishlarning ma’lum holatini tarixga yozib qo‘yish.",
  },
  {
    term: "Branch",
    translation: "Tarmoq",
    description:
      "Asosiy kodga ta’sir qilmasdan alohida o‘zgarishlar ustida ishlash imkonini beradigan Git tarmog‘i.",
  },
  {
    term: "Merge",
    translation: "Birlashtirish",
    description:
      "Bir Git tarmog‘idagi o‘zgarishlarni boshqa tarmoqqa qo‘shish jarayoni.",
  },
  {
    term: "Pull Request",
    translation: "O‘zgarishlarni birlashtirish so‘rovi",
    description:
      "Koddagi o‘zgarishlarni tekshirish va asosiy tarmoqqa qo‘shishni so‘rash jarayoni.",
  },
  {
    term: "Bug",
    translation: "Xato",
    description:
      "Dastur kutilganidek ishlamasligiga sabab bo‘ladigan muammo.",
  },
  {
    term: "Debugging",
    translation: "Xatoni aniqlash va tuzatish",
    description:
      "Dasturdagi muammoning sababini topish va uni tuzatish jarayoni.",
  },
  {
    term: "Framework",
    translation: "Dasturiy karkas",
    description:
      "Dastur yaratishni tezlashtirish uchun tayyor struktura va vositalar to‘plami.",
  },
  {
    term: "Library",
    translation: "Dasturiy kutubxona",
    description:
      "Dasturda qayta foydalanish mumkin bo‘lgan tayyor kod va funksiyalar to‘plami.",
  },
  {
    term: "Docker",
    translation: "Konteynerlash platformasi",
    description:
      "Ilovalarni konteynerlarda ishga tushirish va tarqatishga yordam beradigan platforma.",
  },
  {
    term: "Container",
    translation: "Konteyner",
    description:
      "Ilova va uning kerakli komponentlarini izolyatsiyalangan muhitda ishga tushirish usuli.",
  },
  {
    term: "Kubernetes",
    translation: "Konteynerlarni boshqarish platformasi",
    description:
      "Ko‘p sonli konteynerlarni avtomatik boshqarish, ishga tushirish va masshtablash uchun platforma.",
  },
  {
    term: "CI/CD",
    translation: "Uzluksiz integratsiya va yetkazib berish",
    description:
      "Koddagi o‘zgarishlarni avtomatik test qilish, yig‘ish va deploy qilish jarayonlarini avtomatlashtirish usuli.",
  },
  {
    term: "Cloud",
    translation: "Bulutli hisoblash",
    description:
      "Server, saqlash va boshqa IT resurslaridan internet orqali foydalanish modeli.",
  },
  {
    term: "Virtual Machine",
    translation: "Virtual mashina",
    description:
      "Bitta fizik kompyuter ichida alohida kompyuter kabi ishlaydigan virtual tizim.",
  },
  {
    term: "IP Address",
    translation: "IP manzil",
    description:
      "Tarmoqdagi qurilmani aniqlash uchun ishlatiladigan raqamli manzil.",
  },
  {
    term: "DNS",
    translation: "Domen nomlari tizimi",
    description:
      "Domen nomlarini IP manzillarga aylantiradigan tizim.",
  },
  {
    term: "HTTP",
    translation: "Gipermatn uzatish protokoli",
    description:
      "Brauzer va server o‘rtasida ma’lumot almashish uchun ishlatiladigan protokol.",
  },
  {
    term: "Algorithm",
    translation: "Algoritm",
    description: "Muammoni hal qilish uchun ketma-ket bajariladigan aniq qadamlar.",
  },
  {
    term: "Array",
    translation: "Massiv",
    description: "Bir nechta qiymatni tartib bilan saqlaydigan ma’lumot tuzilmasi.",
  },
  {
    term: "Boolean",
    translation: "Mantiqiy qiymat",
    description: "Faqat rost yoki yolg‘on qiymatini qabul qiladigan ma’lumot turi.",
  },
  {
    term: "Compiler",
    translation: "Kompilyator",
    description: "Dastur kodini boshqa tilga yoki kompyuter bajara oladigan ko‘rinishga o‘giradigan vosita.",
  },
  {
    term: "Data Type",
    translation: "Ma’lumot turi",
    description: "Qiymat son, matn yoki boshqa turga tegishli ekanini belgilaydi.",
  },
  {
    term: "Function",
    translation: "Funksiya",
    description: "Muayyan vazifani bajaradigan va qayta chaqirish mumkin bo‘lgan kod bo‘lagi.",
  },
  {
    term: "Loop",
    translation: "Takrorlash sikli",
    description: "Kod bo‘lagini bir necha marta bajarish uchun ishlatiladigan tuzilma.",
  },
  {
    term: "Object",
    translation: "Obyekt",
    description: "Bir narsaga tegishli xususiyatlar va amallarni birlashtiradigan dasturiy tuzilma.",
  },
  {
    term: "Open Source",
    translation: "Ochiq kodli dastur",
    description: "Kodi ochiq bo‘lib, litsenziyasi uni o‘rganish, o‘zgartirish va tarqatishga ruxsat beradigan dastur.",
  },
  {
    term: "Variable",
    translation: "O‘zgaruvchi",
    description: "Dasturda qiymatni saqlash va unga nom orqali murojaat qilish vositasi.",
  },
  {
    term: "HTML",
    translation: "Gipermatn belgilash tili",
    description: "Veb-sahifadagi sarlavha, matn, rasm va havolalar tuzilishini belgilaydigan til.",
  },
  {
    term: "CSS",
    translation: "Kaskadli uslublar jadvallari",
    description: "Veb-sahifaning rangi, o‘lchami va elementlar joylashuvini belgilaydigan til.",
  },
  {
    term: "JavaScript",
    translation: "JavaScript dasturlash tili",
    description: "Veb-sahifaga interaktivlik qo‘shish va server dasturlarini yozishda ishlatiladigan til.",
  },
  {
    term: "TypeScript",
    translation: "Turlar bilan ishlaydigan JavaScript",
    description: "JavaScript kodiga tur tekshiruvini qo‘shib, ayrim xatolarni ishga tushirishdan oldin topishga yordam beradigan til.",
  },
  {
    term: "Component",
    translation: "Interfeys komponenti",
    description: "Tugma yoki menyu kabi qayta ishlatish mumkin bo‘lgan interfeys bo‘lagi.",
  },
  {
    term: "DOM",
    translation: "Hujjat obyekt modeli",
    description: "Brauzer sahifani dastur orqali o‘qish va o‘zgartirish mumkin bo‘lgan obyektlar daraxti sifatida ifodalaydi.",
  },
  {
    term: "Event",
    translation: "Hodisa",
    description: "Tugma bosilishi yoki matn kiritilishi kabi dastur javob berishi mumkin bo‘lgan holat.",
  },
  {
    term: "Responsive Design",
    translation: "Moslashuvchan dizayn",
    description: "Sahifa ko‘rinishining telefon, planshet va kompyuter ekranlariga moslashishi.",
  },
  {
    term: "State",
    translation: "Holat",
    description: "Interfeysning joriy ko‘rinishi yoki xatti-harakatiga ta’sir qiladigan ma’lumotlar.",
  },
  {
    term: "Accessibility",
    translation: "Hamma uchun foydalanish qulayligi",
    description: "Saytdan turli imkoniyatlarga ega odamlar, jumladan ekran o‘qish vositasidan foydalanuvchilar ham foydalana olishi.",
  },
  {
    term: "Authentication",
    translation: "Shaxsni tasdiqlash",
    description: "Foydalanuvchining kimligini, masalan, parol orqali tekshirish jarayoni.",
  },
  {
    term: "Authorization",
    translation: "Ruxsatni tekshirish",
    description: "Foydalanuvchi qaysi ma’lumot yoki amallardan foydalanishi mumkinligini tekshirish.",
  },
  {
    term: "Cache",
    translation: "Vaqtinchalik tezkor saqlash",
    description: "Tez-tez kerak bo‘ladigan ma’lumot nusxasini qayta olishni tezlashtirish uchun saqlash.",
  },
  {
    term: "Cookie",
    translation: "Brauzerda saqlanadigan kichik ma’lumot",
    description: "Sayt brauzerda saqlaydigan va brauzer tegishli so‘rovlar bilan serverga yuboradigan ma’lumot.",
  },
  {
    term: "Endpoint",
    translation: "API murojaat manzili",
    description: "API orqali ma’lum xizmat yoki ma’lumotga murojaat qilish manzili.",
  },
  {
    term: "JSON",
    translation: "Ma’lumot almashish formati",
    description: "Ma’lumotlarni matn ko‘rinishida saqlash va dasturlar o‘rtasida uzatish formati.",
  },
  {
    term: "Middleware",
    translation: "Oraliq ishlov beruvchi",
    description: "So‘rovga javob tayyorlash jarayonida tekshirish yoki qayd yozish kabi qo‘shimcha ishni bajaradigan kod.",
  },
  {
    term: "Request",
    translation: "So‘rov",
    description: "Mijozning serverdan ma’lumot yoki biror amal bajarilishini so‘rab yuborgan xabari.",
  },
  {
    term: "Response",
    translation: "Javob",
    description: "Serverning so‘rovga qaytaradigan ma’lumoti va bajarilish holati.",
  },
  {
    term: "Session",
    translation: "Seans",
    description: "Foydalanuvchining ketma-ket so‘rovlarini bog‘lab, uning holatini saqlash usuli.",
  },
  {
    term: "Git",
    translation: "Versiyalarni boshqarish tizimi",
    description: "Fayllardagi o‘zgarishlar tarixini saqlash va kod ustida birgalikda ishlash vositasi.",
  },
  {
    term: "Clone",
    translation: "Ombordan nusxa olish",
    description: "Git omborini uning tarixi bilan birga kompyuterga ko‘chirish.",
  },
  {
    term: "Conflict",
    translation: "O‘zgarishlar to‘qnashuvi",
    description: "Git o‘zgarishlarni avtomatik birlashtira olmay, foydalanuvchi yechimini talab qiladigan holat.",
  },
  {
    term: "Diff",
    translation: "Farqlar ko‘rinishi",
    description: "Faylning ikki holati orasida qo‘shilgan, o‘chirilgan yoki o‘zgargan satrlarni ko‘rsatadi.",
  },
  {
    term: "Fetch",
    translation: "Masofaviy o‘zgarishlarni olish",
    description: "Git omboridagi yangiliklarni joriy tarmoqqa birlashtirmasdan kompyuterga yuklash.",
  },
  {
    term: "Pull",
    translation: "O‘zgarishlarni olib qo‘shish",
    description: "Masofaviy Git omboridagi yangiliklarni olish va joriy tarmoqqa qo‘shish.",
  },
  {
    term: "Push",
    translation: "O‘zgarishlarni yuborish",
    description: "Mahalliy Git commitlarini masofaviy omborga yuborish.",
  },
  {
    term: "Linux",
    translation: "Ochiq kodli operatsion tizim yadrosi",
    description: "Ubuntu kabi operatsion tizimlar asosidagi yadro; kundalik nutqda shu tizimlar oilasini ham anglatadi.",
  },
  {
    term: "Terminal",
    translation: "Buyruq kiritish oynasi",
    description: "Kompyuterga matnli buyruqlar kiritish va natijasini ko‘rish uchun dastur.",
  },
  {
    term: "Shell",
    translation: "Buyruqlar qobig‘i",
    description: "Foydalanuvchi yozgan buyruqlarni talqin qilib, ularni bajaradigan dastur.",
  },
  {
    term: "Directory",
    translation: "Katalog",
    description: "Fayllar va boshqa kataloglarni bir joyga jamlaydigan papka.",
  },
  {
    term: "File Permission",
    translation: "Faylga kirish huquqi",
    description: "Faylni kim o‘qishi, o‘zgartirishi yoki ishga tushirishi mumkinligini belgilaydi.",
  },
  {
    term: "Process",
    translation: "Jarayon",
    description: "Operatsion tizimda hozir bajarilayotgan dastur nusxasi.",
  },
  {
    term: "SSH",
    translation: "Xavfsiz masofaviy ulanish",
    description: "Boshqa kompyuterga shifrlangan aloqa orqali ulanib, buyruqlar bajarish protokoli.",
  },
  {
    term: "Environment Variable",
    translation: "Muhit o‘zgaruvchisi",
    description: "Dastur sozlamalarini ishga tushirish muhitidan olish uchun ishlatiladigan nomlangan qiymat.",
  },
  {
    term: "QA",
    translation: "Sifatni ta’minlash",
    description: "Dastur yaratish jarayonini yaxshilash va xatolarning oldini olishga qaratilgan ishlar.",
  },
  {
    term: "Test Case",
    translation: "Sinov holati",
    description: "Bir xususiyatni tekshirish uchun shartlar, qadamlar va kutilgan natija tavsifi.",
  },
  {
    term: "Unit Test",
    translation: "Alohida qism sinovi",
    description: "Funksiya kabi kichik kod bo‘lagining to‘g‘ri ishlashini tekshiradigan sinov.",
  },
  {
    term: "Integration Test",
    translation: "Qismlar hamkorligi sinovi",
    description: "Dasturning bir nechta qismi birgalikda to‘g‘ri ishlashini tekshiradigan sinov.",
  },
  {
    term: "End-to-End Test",
    translation: "Boshidan oxirigacha sinov",
    description: "Foydalanuvchining to‘liq amalini, masalan, mahsulot tanlashdan buyurtma berishgacha tekshirish.",
  },
  {
    term: "Regression Testing",
    translation: "Avvalgi imkoniyatlarni qayta tekshirish",
    description: "Yangi o‘zgarishlar ilgari ishlagan imkoniyatlarni buzmaganini tekshirish.",
  },
  {
    term: "Smoke Test",
    translation: "Asosiy imkoniyatlar sinovi",
    description: "Yangi versiyaning eng muhim imkoniyatlari ishlashini tez tekshirish.",
  },
  {
    term: "DevOps",
    translation: "Dasturlash va tizim boshqaruvi hamkorligi",
    description: "Dastur yaratish va uni ishlatish jamoalarining hamkorligi hamda ishlarni avtomatlashtirish yondashuvi.",
  },
  {
    term: "Build",
    translation: "Dasturni yig‘ish",
    description: "Dastur kodi va fayllarini ishga tushirish yoki tarqatish uchun tayyor ko‘rinishga keltirish.",
  },
  {
    term: "Pipeline",
    translation: "Avtomatik ishlar ketma-ketligi",
    description: "Kodni tekshirish, yig‘ish va chiqarish kabi bosqichlarni belgilangan tartibda bajarish.",
  },
  {
    term: "Monitoring",
    translation: "Tizim holatini kuzatish",
    description: "Dastur tezligi, xatolari va resurs sarfini kuzatib borish.",
  },
  {
    term: "Log",
    translation: "Hodisalar qaydi",
    description: "Dastur ishlashi davomida yuz bergan hodisa va xatolar haqidagi yozuv.",
  },
  {
    term: "Rollback",
    translation: "Oldingi holatga qaytarish",
    description: "Muammo chiqqanda dastur yoki ma’lumotni avvalgi holatiga qaytarish.",
  },
  {
    term: "HTTPS",
    translation: "Himoyalangan HTTP",
    description: "Brauzer va server orasidagi HTTP aloqasini TLS yordamida shifrlaydigan protokol.",
  },
  {
    term: "TCP",
    translation: "Ishonchli uzatish protokoli",
    description: "Tarmoqda ma’lumotlarni tartib bilan yetkazish va yo‘qolgan qismlarni qayta yuborishni boshqaradi.",
  },
  {
    term: "UDP",
    translation: "Yetkazishni kafolatlamaydigan uzatish protokoli",
    description: "Ma’lumotlarni yetib borishi yoki tartibini kafolatlamasdan yuboradigan tarmoq protokoli.",
  },
  {
    term: "Port",
    translation: "Tarmoq porti",
    description: "Qurilmadagi tarmoq aloqasi qaysi xizmatga tegishli ekanini ajratadigan raqam.",
  },
  {
    term: "Router",
    translation: "Yo‘naltirgich",
    description: "Ma’lumot paketlarini bir tarmoqdan boshqasiga yo‘naltiradigan qurilma.",
  },
  {
    term: "Firewall",
    translation: "Tarmoq himoya devori",
    description: "Belgilangan qoidalar asosida tarmoq aloqalariga ruxsat beradigan yoki ularni to‘sadigan vosita.",
  },
  {
    term: "SQL",
    translation: "Tuzilmali so‘rovlar tili",
    description: "Jadvalli ma’lumotlar bazasida ma’lumot izlash, qo‘shish va o‘zgartirish uchun til.",
  },
  {
    term: "NoSQL",
    translation: "Jadvalli model bilan cheklanmagan bazalar",
    description: "Ma’lumotni hujjat, kalit-qiymat yoki graf kabi shakllarda saqlaydigan bazalar oilasi.",
  },
  {
    term: "Table",
    translation: "Jadval",
    description: "Ma’lumotlar bazasida yozuvlarni satr va ustunlarda saqlaydigan tuzilma.",
  },
  {
    term: "Primary Key",
    translation: "Birlamchi kalit",
    description: "Jadvaldagi har bir satrni yagona tarzda aniqlaydigan ustun yoki ustunlar to‘plami.",
  },
  {
    term: "Foreign Key",
    translation: "Tashqi kalit",
    description: "Bir jadvaldagi yozuvni boshqa yoki shu jadvaldagi yozuv bilan bog‘laydigan kalit.",
  },
  {
    term: "Index",
    translation: "Qidiruv indeksi",
    description: "Bazadagi ma’lumotni tezroq topishga yordam beradigan qo‘shimcha tuzilma.",
  },
  {
    term: "Transaction",
    translation: "Yaxlit amallar guruhi",
    description: "Bazadagi bir nechta amalning barchasini saqlash yoki barchasini bekor qilish imkonini beradi.",
  },
  {
    term: "Backup",
    translation: "Zaxira nusxa",
    description: "Ma’lumot yo‘qolsa yoki buzilsa, uni tiklash uchun oldindan saqlangan nusxa.",
  },
  {
    term: "CDN",
    translation: "Kontent yetkazib berish tarmog‘i",
    description: "Rasm va boshqa fayllarni foydalanuvchiga yaqin serverlardan yetkazib beradigan tarmoq.",
  },
  {
    term: "Load Balancer",
    translation: "Yuklamani taqsimlagich",
    description: "Kiruvchi so‘rovlarni bir nechta server o‘rtasida taqsimlaydigan vosita.",
  },
  {
    term: "Object Storage",
    translation: "Obyektli saqlash",
    description: "Rasm, video va boshqa fayllarni alohida identifikatorli obyektlar sifatida saqlash xizmati.",
  },
  {
    term: "CEO",
    translation: "Bosh ijrochi direktor",
    description:
      "Chief Executive Officer — kompaniyaning umumiy yo‘nalishi va asosiy boshqaruv qarorlariga mas’ul rahbar.",
  },
  {
    term: "CTO",
    translation: "Texnologiyalar bo‘yicha direktor",
    description:
      "Chief Technology Officer — kompaniyaning texnologik yo‘nalishi va texnik yechimlariga mas’ul rahbar.",
  },
  {
    term: "CIO",
    translation: "Axborot tizimlari bo‘yicha direktor",
    description:
      "Chief Information Officer — kompaniyaning ichki IT tizimlari va axborot resurslarini boshqaradigan rahbar.",
  },
  {
    term: "CISO",
    translation: "Axborot xavfsizligi bo‘yicha direktor",
    description:
      "Chief Information Security Officer — kompaniyaning axborot xavfsizligi dasturi va himoya siyosatiga mas’ul rahbar.",
  },
  {
    term: "PM",
    translation: "Loyiha yoki mahsulot menejeri",
    description:
      "Kontekstga qarab Project Manager yoki Product Manager qisqartmasi; vazifalari bir-biridan farq qiladi.",
  },
  {
    term: "Project Manager",
    translation: "Loyiha menejeri",
    description:
      "Loyiha muddatlari, resurslari va ishlar muvofiqligini boshqaradigan mutaxassis.",
  },
  {
    term: "Product Manager",
    translation: "Mahsulot menejeri",
    description:
      "Foydalanuvchi ehtiyojlarini o‘rganib, mahsulot maqsadlari va rivojlanish ustuvorliklarini belgilaydigan mutaxassis.",
  },
  {
    term: "Product Owner",
    translation: "Mahsulot egasi",
    description:
      "Scrum jamoasida mahsulot qiymatini oshirish va mahsulot backlogini tartiblashga mas’ul shaxs.",
  },
  {
    term: "Scrum Master",
    translation: "Scrum jarayoni yo‘lboshchisi",
    description:
      "Jamoaga Scrumni tushunish va qo‘llashda hamda ishdagi to‘siqlarni bartaraf etishda yordam beradigan shaxs.",
  },
  {
    term: "Team Lead",
    translation: "Jamoa yetakchisi",
    description:
      "Jamoa ishini muvofiqlashtirib, a’zolariga vazifalarni bajarish va rivojlanishda yordam beradigan mutaxassis.",
  },
  {
    term: "Tech Lead",
    translation: "Texnik yetakchi",
    description:
      "Jamoaning texnik qarorlari, kod sifati va yechimlari bo‘yicha yo‘l ko‘rsatadigan mutaxassis.",
  },
  {
    term: "Business Analyst",
    translation: "Biznes tahlilchi",
    description:
      "Biznes ehtiyojlarini o‘rganib, ularni tushunarli talablar shakliga keltiradigan mutaxassis.",
  },
  {
    term: "Stakeholder",
    translation: "Manfaatdor tomon",
    description:
      "Loyiha natijasiga ta’sir qiladigan yoki undan manfaatdor bo‘lgan shaxs yoki tashkilot.",
  },
  {
    term: "Jira",
    translation: "Ishlarni boshqarish vositasi",
    description:
      "Atlassian yaratgan, vazifalar va xatolarni qayd etish hamda bajarilishini kuzatish uchun vosita.",
  },
  {
    term: "Agile",
    translation: "Moslashuvchan ishlash yondashuvi",
    description:
      "Kichik bosqichlarda natija yetkazish, fikr-mulohaza olish va o‘zgarishlarga moslashishga asoslangan yondashuv.",
  },
  {
    term: "Scrum",
    translation: "Jamoaviy ishni tashkil etish usuli",
    description:
      "Murakkab mahsulotni qisqa sprintlar, aniq mas’uliyatlar va muntazam tekshiruvlar orqali rivojlantirish usuli.",
  },
  {
    term: "Kanban",
    translation: "Ish oqimini boshqarish usuli",
    description:
      "Vazifalarni ko‘rgazmali taxtada kuzatish va bir paytdagi ishlar sonini cheklash orqali oqimni yaxshilash usuli.",
  },
  {
    term: "Sprint",
    translation: "Qisqa ish davri",
    description:
      "Scrumda bir oy yoki undan kam davom etadigan, jamoa belgilangan maqsad sari ishlaydigan davr.",
  },
  {
    term: "Backlog",
    translation: "Rejalashtirilgan ishlar ro‘yxati",
    description:
      "Mahsulot yoki jamoa uchun bajarilishi kerak bo‘lgan, ustuvorlik bo‘yicha tartiblangan ishlar.",
  },
  {
    term: "Epic",
    translation: "Yirik ish bo‘lagi",
    description:
      "Bir nechta kichik vazifa yoki foydalanuvchi hikoyalariga ajratiladigan katta ish.",
  },
  {
    term: "User Story",
    translation: "Foydalanuvchi hikoyasi",
    description:
      "Foydalanuvchiga qanday imkoniyat va nima sababdan kerakligini qisqa ifodalovchi talab.",
  },
  {
    term: "Task",
    translation: "Vazifa",
    description:
      "Bajarilishi kerak bo‘lgan aniq ish bo‘lagi.",
  },
  {
    term: "Subtask",
    translation: "Quyi vazifa",
    description:
      "Kattaroq vazifani bajarish uchun ajratilgan kichik ish bo‘lagi.",
  },
  {
    term: "Issue",
    translation: "Kuzatiladigan ish yozuvi",
    description:
      "Jirada vazifa, xato yoki boshqa ishni tavsiflab, uning holatini kuzatish uchun yozuv.",
  },
  {
    term: "Assignee",
    translation: "Vazifaga mas’ul shaxs",
    description:
      "Vazifani bajarish uchun biriktirilgan jamoa a’zosi.",
  },
  {
    term: "Workflow",
    translation: "Ish jarayoni",
    description:
      "Vazifa o‘tadigan holatlar va ular orasidagi o‘tish qoidalari.",
  },
  {
    term: "Acceptance Criteria",
    translation: "Qabul qilish mezonlari",
    description:
      "Ish natijasi qabul qilinishi uchun bajarilishi kerak bo‘lgan aniq shartlar.",
  },
  {
    term: "Definition of Done",
    translation: "Tugallanganlik mezonlari",
    description:
      "Ish tugallangan deb hisoblanishi uchun jamoa kelishgan umumiy sifat talablari.",
  },
  {
    term: "Story Point",
    translation: "Nisbiy baholash birligi",
    description:
      "Jamoa ishning murakkabligi, hajmi va noaniqligini nisbiy baholash uchun ishlatadigan birlik.",
  },
  {
    term: "Roadmap",
    translation: "Rivojlanish rejasi",
    description:
      "Mahsulotning asosiy maqsadlari va rejalashtirilgan yo‘nalishlarini ko‘rsatadigan reja.",
  },
  {
    term: "MVP",
    translation: "Eng zarur imkoniyatli mahsulot",
    description:
      "Asosiy g‘oyani foydalanuvchilar bilan tekshirish uchun yetarli imkoniyatlarga ega dastlabki mahsulot.",
  },
  {
    term: "Retrospective",
    translation: "Ish jarayonini tahlil qilish uchrashuvi",
    description:
      "Jamoa avvalgi ish davrini muhokama qilib, hamkorlik va jarayonni yaxshilash yo‘llarini belgilaydigan uchrashuv.",
  },
  {
    term: "Manual Testing",
    translation: "Qo‘lda sinash",
    description:
      "Sinov qadamlarini inson bajarib, dastur natijasini tekshirishi.",
  },
  {
    term: "Automation Testing",
    translation: "Avtomatlashtirilgan sinov",
    description:
      "Tekshiruvlarni dastur yoki maxsus vositalar yordamida avtomatik bajarish.",
  },
  {
    term: "Test Plan",
    translation: "Sinov rejasi",
    description:
      "Nima, qanday, qachon va kim tomonidan tekshirilishini belgilaydigan hujjat.",
  },
  {
    term: "Test Scenario",
    translation: "Sinov ssenariysi",
    description:
      "Tekshiriladigan foydalanuvchi amali yoki imkoniyatning umumiy tavsifi.",
  },
  {
    term: "Test Suite",
    translation: "Sinovlar to‘plami",
    description:
      "Birgalikda bajarish yoki boshqarish uchun guruhlangan sinov holatlari.",
  },
  {
    term: "Test Data",
    translation: "Sinov ma’lumotlari",
    description:
      "Dasturni tekshirishda kiritiladigan yoki oldindan tayyorlanadigan ma’lumotlar.",
  },
  {
    term: "Bug Report",
    translation: "Xato hisoboti",
    description:
      "Xatoni takrorlash qadamlari, kutilgan va haqiqiy natijalar yozilgan hisobot.",
  },
  {
    term: "Severity",
    translation: "Xatoning ta’sir darajasi",
    description:
      "Xato dastur ishlashi yoki foydalanuvchiga qanchalik jiddiy ta’sir qilishini bildiradi.",
  },
  {
    term: "Priority",
    translation: "Ustuvorlik",
    description:
      "Vazifa yoki xatoni boshqa ishlarga nisbatan qanchalik tez bajarish kerakligini bildiradi.",
  },
  {
    term: "Retesting",
    translation: "Tuzatishni qayta sinash",
    description:
      "Oldin topilgan xato tuzatilganini aynan o‘sha holatni qayta tekshirib tasdiqlash.",
  },
  {
    term: "Exploratory Testing",
    translation: "Izlanishga asoslangan sinov",
    description:
      "Dastur bilan tanishish, sinovlarni o‘ylab topish va bajarishni birgalikda olib borish.",
  },
  {
    term: "Positive Testing",
    translation: "To‘g‘ri ma’lumotlar bilan sinash",
    description:
      "Ruxsat etilgan qiymatlar va odatiy amallarda dastur kutilganidek ishlashini tekshirish.",
  },
  {
    term: "Negative Testing",
    translation: "Noto‘g‘ri ma’lumotlar bilan sinash",
    description:
      "Xato qiymatlar yoki ruxsat etilmagan amallarga dastur to‘g‘ri javob berishini tekshirish.",
  },
  {
    term: "Boundary Value Analysis",
    translation: "Chegaraviy qiymatlarni tahlil qilish",
    description:
      "Ruxsat etilgan oraliq chegaralaridagi va ularga yaqin qiymatlar bilan tekshirish usuli.",
  },
  {
    term: "Equivalence Partitioning",
    translation: "Teng kuchli guruhlarga ajratish",
    description:
      "Bir xil ishlov berilishi kutilgan qiymatlarni guruhlab, har biridan namuna bilan sinash usuli.",
  },
  {
    term: "Performance Testing",
    translation: "Unumdorlikni sinash",
    description:
      "Dasturning tezligi, barqarorligi va resurs sarfini turli sharoitlarda tekshirish.",
  },
  {
    term: "Load Testing",
    translation: "Yuklama bilan sinash",
    description:
      "Kutilgan foydalanuvchi yoki so‘rovlar sonida tizim qanday ishlashini tekshirish.",
  },
  {
    term: "Stress Testing",
    translation: "Haddan tashqari yuklama bilan sinash",
    description:
      "Tizim imkoniyatidan ortiq yuklamada uning chegaralari va tiklanishini tekshirish.",
  },
  {
    term: "UAT",
    translation: "Foydalanuvchi qabul sinovi",
    description:
      "User Acceptance Testing — mahsulot biznes ehtiyojlariga mosligini foydalanuvchi yoki buyurtmachi tekshirishi.",
  },
  {
    term: "Test Coverage",
    translation: "Sinov qamrovi",
    description:
      "Talablar, kod yoki holatlarning qanchasi sinovlar bilan tekshirilganini ko‘rsatuvchi o‘lchov.",
  },
  {
    term: "Cybersecurity",
    translation: "Kiberxavfsizlik",
    description:
      "Tizimlar, tarmoqlar va ma’lumotlarni raqamli tahdidlar hamda ruxsatsiz amallardan himoya qilish.",
  },
  {
    term: "Penetration Testing (Pentest)",
    translation: "Ruxsatli xavfsizlik sinovi",
    description:
      "Egasi ruxsati bilan tizim zaifliklarini amalda tekshirib, ularning ta’sirini baholash.",
  },
  {
    term: "Vulnerability",
    translation: "Zaiflik",
    description:
      "Tizim, kod yoki sozlamadagi xavfsizlikni buzish uchun foydalanilishi mumkin bo‘lgan kamchilik.",
  },
  {
    term: "Threat",
    translation: "Tahdid",
    description:
      "Tizim yoki ma’lumotga zarar yetkazishi mumkin bo‘lgan hodisa, holat yoki tomon.",
  },
  {
    term: "Risk",
    translation: "Xavf",
    description:
      "Noqulay hodisaning yuz berish ehtimoli va uning oqibatlari bilan bog‘liq baho.",
  },
  {
    term: "Exploit",
    translation: "Zaiflikdan foydalanish usuli",
    description:
      "Zaiflik orqali tizimning kutilmagan amalini yuzaga keltiradigan usul yoki kod.",
  },
  {
    term: "Attack Surface",
    translation: "Hujumga ochiq nuqtalar majmui",
    description:
      "Tizimga ta’sir qilishga urinish mumkin bo‘lgan interfeyslar, xizmatlar va boshqa kirish nuqtalari.",
  },
  {
    term: "Vulnerability Assessment",
    translation: "Zaifliklarni baholash",
    description:
      "Tizimdagi xavfsizlik kamchiliklarini aniqlash, tahlil qilish va ustuvorlik bo‘yicha tartiblash.",
  },
  {
    term: "Reconnaissance",
    translation: "Dastlabki ma’lumot yig‘ish",
    description:
      "Xavfsizlik tekshiruvida belgilangan tizim va uning ochiq xizmatlari haqida ma’lumot to‘plash bosqichi.",
  },
  {
    term: "Scope",
    translation: "Ish chegarasi",
    description:
      "Loyiha yoki pentest doirasiga kiradigan tizimlar, ishlar va cheklovlar.",
  },
  {
    term: "Rules of Engagement",
    translation: "Sinov o‘tkazish qoidalari",
    description:
      "Pentestning ruxsat etilgan amallari, vaqti va aloqa tartibini oldindan belgilovchi kelishuv.",
  },
  {
    term: "Black Box Testing",
    translation: "Ichki tuzilmani bilmasdan sinash",
    description:
      "Tizimning ichki kodi haqida ma’lumotsiz, tashqi kirish va natijalarni tekshirish usuli.",
  },
  {
    term: "White Box Testing",
    translation: "Ichki tuzilmani bilgan holda sinash",
    description:
      "Kod yoki ichki tuzilma haqidagi ma’lumotdan foydalanib tizimni tekshirish usuli.",
  },
  {
    term: "Gray Box Testing",
    translation: "Qisman ma’lumot bilan sinash",
    description:
      "Tizimning ichki tuzilishi yoki kirish huquqlari haqida cheklangan ma’lumot bilan tekshirish.",
  },
  {
    term: "SQL Injection",
    translation: "SQL so‘roviga zararli kiritma qo‘shish",
    description:
      "Ishonchsiz kiritma SQL buyrug‘i sifatida talqin qilinib, so‘rov mazmunini o‘zgartiradigan zaiflik.",
  },
  {
    term: "XSS",
    translation: "Saytlararo skript bajarilishi",
    description:
      "Cross-Site Scripting — ishonchsiz kod sayt orqali foydalanuvchi brauzerida bajarilishiga olib keladigan zaiflik.",
  },
  {
    term: "CSRF",
    translation: "Saytlararo so‘rovni soxtalashtirish",
    description:
      "Cross-Site Request Forgery — foydalanuvchi nomidan uning istagisiz so‘rov yuborishga undaydigan hujum.",
  },
  {
    term: "SSRF",
    translation: "Server nomidan so‘rov yuborish",
    description:
      "Server-Side Request Forgery — serverni hujumchi tanlagan manzilga so‘rov yuborishga majbur qiladigan zaiflik.",
  },
  {
    term: "IDOR",
    translation: "Obyektga ruxsatsiz murojaat",
    description:
      "Insecure Direct Object Reference — ruxsat tekshiruvi yetishmagani uchun identifikator orqali begona ma’lumotga kirish zaifligi.",
  },
  {
    term: "Privilege Escalation",
    translation: "Huquqlarni oshirish",
    description:
      "Foydalanuvchi yoki dasturga berilganidan yuqori huquqlarni qo‘lga kiritish.",
  },
  {
    term: "Phishing",
    translation: "Aldov orqali ma’lumot olish",
    description:
      "Soxta xabar yoki sayt bilan ishonch uyg‘otib, parol yoki boshqa maxfiy ma’lumotni olishga urinish.",
  },
  {
    term: "Social Engineering",
    translation: "Insonni aldash orqali hujum",
    description:
      "Odamning ishonchi yoki odatlaridan foydalanib, maxfiy ma’lumot yoki kirish imkonini olish.",
  },
  {
    term: "Malware",
    translation: "Zararli dastur",
    description:
      "Ma’lumot o‘g‘irlash, tizimni buzish yoki boshqa zararli ishlarni bajarish uchun yaratilgan dastur.",
  },
  {
    term: "Ransomware",
    translation: "Tovlamachi dastur",
    description:
      "Fayllarni shifrlash yoki tizimni bloklash orqali ularni tiklash evaziga to‘lov talab qiladigan zararli dastur.",
  },
  {
    term: "Brute Force",
    translation: "Variantlarni ketma-ket sinash",
    description:
      "Parol yoki boshqa sirni ko‘plab variantlarni tekshirish orqali topishga urinish.",
  },
  {
    term: "MFA",
    translation: "Ko‘p omilli tasdiqlash",
    description:
      "Multi-Factor Authentication — shaxsni parol va qurilma kabi turli omillar bilan tekshirish.",
  },
  {
    term: "Encryption",
    translation: "Shifrlash",
    description:
      "Ma’lumotni tegishli kalitsiz o‘qib bo‘lmaydigan ko‘rinishga o‘zgartirish.",
  },
  {
    term: "Hashing",
    translation: "Xesh hisoblash",
    description:
      "Ma’lumotdan uni solishtirish yoki yaxlitligini tekshirish uchun xesh qiymat hosil qilish.",
  },
  {
    term: "Least Privilege",
    translation: "Eng kam huquq tamoyili",
    description:
      "Foydalanuvchi yoki dasturga faqat vazifasi uchun zarur ruxsatlarni berish.",
  },
  {
    term: "Security Incident",
    translation: "Xavfsizlik hodisasi",
    description:
      "Ma’lumot yoki tizim xavfsizligini buzadigan yoxud unga bevosita xavf tug‘diradigan hodisa.",
  },
  {
    term: "Incident Response",
    translation: "Xavfsizlik hodisasiga javob berish",
    description:
      "Hodisani aniqlash, zararni cheklash, sababni bartaraf etish va tizimni tiklash ishlari.",
  },
  {
    term: "Responsible Disclosure",
    translation: "Zaiflikni mas’uliyat bilan bildirish",
    description:
      "Topilgan zaiflikni tizim egasiga xabar qilib, oshkor etish tartibini tuzatish jarayoni bilan muvofiqlashtirish.",
  },
  {
    term: "React",
    translation: "Interfeys yaratish kutubxonasi",
    description:
      "Foydalanuvchi interfeysini qayta ishlatiladigan komponentlar yordamida yaratish uchun JavaScript kutubxonasi.",
  },
  {
    term: "JSX",
    translation: "JavaScript ichidagi belgilash sintaksisi",
    description:
      "JavaScript kodida interfeys tuzilishini HTMLga o‘xshash shaklda yozish imkonini beradigan sintaksis.",
  },
  {
    term: "Props",
    translation: "Komponentga uzatiladigan qiymatlar",
    description:
      "Reactda ota komponentdan bola komponentga beriladigan ma’lumotlar.",
  },
  {
    term: "Hook",
    translation: "React imkoniyatlaridan foydalanish funksiyasi",
    description:
      "React komponentida holat yoki boshqa imkoniyatlardan foydalanishga yordam beradigan maxsus funksiya.",
  },
  {
    term: "Rendering",
    translation: "Ko‘rinishni hosil qilish",
    description:
      "Ma’lumot va komponentlardan foydalanuvchiga ko‘rsatiladigan interfeysni hosil qilish jarayoni.",
  },
  {
    term: "SSR",
    translation: "Serverda sahifa hosil qilish",
    description:
      "Server-Side Rendering — sahifaning HTML ko‘rinishini serverda tayyorlab brauzerga yuborish.",
  },
  {
    term: "CSR",
    translation: "Brauzerda sahifa hosil qilish",
    description:
      "Client-Side Rendering — sahifa interfeysini JavaScript yordamida brauzerda hosil qilish.",
  },
  {
    term: "SSG",
    translation: "Statik sahifalar yaratish",
    description:
      "Static Site Generation — sahifalarni oldindan, odatda loyiha yig‘ilayotganda HTML ko‘rinishida tayyorlash.",
  },
  {
    term: "Hydration",
    translation: "Tayyor sahifaga interaktivlik ulash",
    description:
      "Serverdan kelgan HTMLga brauzerda komponent mantig‘i va hodisa ishlovchilarini ulash.",
  },
  {
    term: "SPA",
    translation: "Bir sahifali ilova",
    description:
      "Single-Page Application — bo‘limlar orasida o‘tishda odatda butun sahifani qayta yuklamasdan ishlaydigan veb-ilova.",
  },
  {
    term: "Routing",
    translation: "Manzilga mos sahifani tanlash",
    description:
      "URLga qarab qaysi sahifa yoki ishlov beruvchi ishga tushishini belgilash.",
  },
  {
    term: "Flexbox",
    translation: "Bir yo‘nalishli joylashtirish usuli",
    description:
      "CSSda elementlarni satr yoki ustun bo‘ylab joylashtirish va tekislash vositasi.",
  },
  {
    term: "CSS Grid",
    translation: "Katakli joylashtirish usuli",
    description:
      "CSSda elementlarni satr va ustunlardan iborat to‘r bo‘yicha joylashtirish vositasi.",
  },
  {
    term: "Media Query",
    translation: "Ekran shartiga bog‘liq uslub",
    description:
      "Ekran kengligi kabi shartlarga qarab CSS qoidalarini qo‘llash usuli.",
  },
  {
    term: "Breakpoint",
    translation: "Dizayn o‘zgarish chegarasi",
    description:
      "Ekran kengligi ma’lum qiymatga yetganda sahifa joylashuvi o‘zgaradigan chegara.",
  },
  {
    term: "Lazy Loading",
    translation: "Kerak bo‘lganda yuklash",
    description:
      "Rasm yoki kodni darhol emas, foydalanish zarur bo‘lganda yuklash usuli.",
  },
  {
    term: "Code Splitting",
    translation: "Kodni bo‘laklarga ajratish",
    description:
      "Ilova kodini alohida yuklanadigan qismlarga ajratib, dastlabki yuklash hajmini kamaytirish.",
  },
  {
    term: "Bundler",
    translation: "Kod yig‘uvchi vosita",
    description:
      "Dastur modullari va resurslarini brauzer yoki boshqa muhit uchun tayyor fayllarga birlashtiradigan vosita.",
  },
  {
    term: "Local Storage",
    translation: "Brauzerning mahalliy xotirasi",
    description:
      "Saytga tegishli kichik matnli ma’lumotlarni brauzer yopilgandan keyin ham saqlaydigan vosita.",
  },
  {
    term: "Debounce",
    translation: "Ketma-ket chaqiruvlarni kechiktirish",
    description:
      "Tez takrorlanayotgan hodisalar to‘xtagach amalni bajarish, masalan, yozish tugagach qidirish usuli.",
  },
  {
    term: "REST",
    translation: "Resurslarga asoslangan arxitektura uslubi",
    description:
      "Resurslar va bir xil murojaat qoidalari asosida mijoz hamda server aloqasini tashkil etish uslubi.",
  },
  {
    term: "GraphQL",
    translation: "API uchun so‘rovlar tili",
    description:
      "Mijozga kerakli ma’lumot maydonlarini aniq so‘rash imkonini beradigan API tili va bajarish muhiti.",
  },
  {
    term: "CRUD",
    translation: "Asosiy ma’lumot amallari",
    description:
      "Create, Read, Update, Delete — ma’lumot yaratish, o‘qish, yangilash va o‘chirish amallari.",
  },
  {
    term: "ORM",
    translation: "Obyekt va jadvalni bog‘lash vositasi",
    description:
      "Object-Relational Mapping — dastur obyektlari orqali jadvalli ma’lumotlar bazasi bilan ishlash usuli.",
  },
  {
    term: "Database Migration",
    translation: "Baza tuzilishini o‘zgartirish",
    description:
      "Jadval yoki ustun qo‘shish kabi baza o‘zgarishlarini boshqariladigan bosqichlarda qo‘llash.",
  },
  {
    term: "Validation",
    translation: "Ma’lumotni tekshirish",
    description:
      "Kiritilgan qiymatning talab qilingan format va qoidalarga mosligini tekshirish.",
  },
  {
    term: "Serialization",
    translation: "Ma’lumotni uzatish shakliga o‘girish",
    description:
      "Dasturdagi ma’lumotni saqlash yoki yuborish mumkin bo‘lgan formatga aylantirish.",
  },
  {
    term: "Pagination",
    translation: "Natijalarni sahifalash",
    description:
      "Ko‘p natijani birdaniga emas, kichik qismlarga bo‘lib qaytarish usuli.",
  },
  {
    term: "Rate Limiting",
    translation: "So‘rovlar sonini cheklash",
    description:
      "Ma’lum vaqt ichida mijoz yuborishi mumkin bo‘lgan so‘rovlar soniga chegara qo‘yish.",
  },
  {
    term: "WebSocket",
    translation: "Ikki tomonlama doimiy aloqa",
    description:
      "Mijoz va serverga bitta ulanish orqali istalgan paytda xabar yuborish imkonini beradigan protokol.",
  },
  {
    term: "Webhook",
    translation: "Hodisa haqida avtomatik xabar",
    description:
      "Bir tizimda hodisa yuz berganda boshqa tizimning belgilangan manziliga HTTP so‘rovi yuborish.",
  },
  {
    term: "Message Queue",
    translation: "Xabarlar navbati",
    description:
      "Dasturlar orasidagi xabarlarni keyinroq qayta ishlash uchun navbatda saqlaydigan vosita.",
  },
  {
    term: "Background Job",
    translation: "Orqa fondagi vazifa",
    description:
      "Asosiy so‘rovga javob berish jarayonidan tashqarida bajariladigan ish, masalan, hisobot tayyorlash.",
  },
  {
    term: "Microservices",
    translation: "Kichik mustaqil xizmatlar",
    description:
      "Ilovani alohida vazifalarni bajaradigan va mustaqil chiqarilishi mumkin bo‘lgan xizmatlarga ajratish.",
  },
  {
    term: "Monolith",
    translation: "Yaxlit ilova",
    description:
      "Asosiy qismlari bitta dastur sifatida yig‘ilib, birgalikda chiqariladigan ilova.",
  },
  {
    term: "JWT",
    translation: "JSON veb-tokeni",
    description:
      "JSON Web Token — da’volarni ixcham shaklda uzatadigan token formati; imzolangan token mazmuni yashirin bo‘lishi shart emas.",
  },
  {
    term: "CORS",
    translation: "Boshqa manbadan murojaat qoidalari",
    description:
      "Brauzerga boshqa manbadagi server javobini o‘qishga ruxsat berilishini HTTP sarlavhalari orqali belgilash mexanizmi.",
  },
  {
    term: "Idempotency",
    translation: "Takroriy amal natijasining o‘zgarmasligi",
    description:
      "Bir xil amalni qayta bajarish tizim holatiga uni bir marta bajarish bilan bir xil ta’sir ko‘rsatishi.",
  },
  {
    term: "Connection Pool",
    translation: "Ulanishlar jamlanmasi",
    description:
      "Bazaga har safar yangi ulanish ochmasdan, tayyor ulanishlardan qayta foydalanish vositasi.",
  },
  {
    term: "HTTP Status Code",
    translation: "HTTP holat kodi",
    description:
      "So‘rov natijasini bildiradigan raqam, masalan, muvaffaqiyat uchun 200 yoki topilmagan sahifa uchun 404.",
  },
  {
    term: "Infrastructure as Code (IaC)",
    translation: "Infratuzilmani kod orqali boshqarish",
    description:
      "Server va tarmoq kabi resurslarni qo‘lda sozlash o‘rniga kod yoki tavsif fayllari bilan boshqarish.",
  },
  {
    term: "Terraform",
    translation: "Infratuzilmani tavsiflash vositasi",
    description:
      "Resurslarni konfiguratsiya fayllarida tasvirlab, ularni yaratish va o‘zgartirishni boshqaradigan vosita.",
  },
  {
    term: "Ansible",
    translation: "Sozlashni avtomatlashtirish vositasi",
    description:
      "Serverlarni sozlash va takroriy boshqaruv ishlarini yozilgan ko‘rsatmalar orqali bajaradigan vosita.",
  },
  {
    term: "Docker Image",
    translation: "Konteyner tasviri",
    description:
      "Konteyner yaratish uchun dastur, kerakli fayllar va ishga tushirish sozlamalarini saqlaydigan andoza.",
  },
  {
    term: "Dockerfile",
    translation: "Image yaratish ko‘rsatmalari",
    description:
      "Docker image yig‘ishda bajariladigan bosqichlar yozilgan matnli fayl.",
  },
  {
    term: "Container Registry",
    translation: "Konteyner tasvirlari ombori",
    description:
      "Docker kabi konteyner image’larini saqlash va tarqatish xizmati.",
  },
  {
    term: "Docker Compose",
    translation: "Bir nechta konteynerni boshqarish vositasi",
    description:
      "Ilova xizmatlari va ularning bog‘lanishlarini bitta konfiguratsiyada belgilab ishga tushirish vositasi.",
  },
  {
    term: "Kubernetes Pod",
    translation: "Kubernetesning eng kichik ish birligi",
    description:
      "Umumiy tarmoq va ayrim resurslardan foydalanadigan bir yoki bir nechta konteyner guruhi.",
  },
  {
    term: "Kubernetes Cluster",
    translation: "Kubernetes tugunlari guruhi",
    description:
      "Konteynerli ilovalarni boshqarish va bajarish uchun birgalikda ishlaydigan kompyuterlar to‘plami.",
  },
  {
    term: "Kubernetes Node",
    translation: "Kubernetes ish tuguni",
    description:
      "Klasterdagi podlarni bajaradigan jismoniy yoki virtual kompyuter.",
  },
  {
    term: "Namespace",
    translation: "Resurslarni mantiqiy ajratish sohasi",
    description:
      "Kubernetes klasterida resurslarni loyihalar yoki jamoalar bo‘yicha guruhlash vositasi.",
  },
  {
    term: "Helm",
    translation: "Kubernetes paketlarini boshqarish vositasi",
    description:
      "Kubernetes ilovalarini chart deb ataladigan tayyor shablonlar to‘plami orqali o‘rnatish va yangilash vositasi.",
  },
  {
    term: "Reverse Proxy",
    translation: "Serverlar oldidagi vositachi",
    description:
      "Mijoz so‘rovini qabul qilib, tegishli ichki serverga uzatadigan va javobni qaytaradigan xizmat.",
  },
  {
    term: "Autoscaling",
    translation: "Resurslarni avtomatik moslash",
    description:
      "Yuklama yoki belgilangan ko‘rsatkichlarga qarab hisoblash resurslarini avtomatik ko‘paytirish yoki kamaytirish.",
  },
  {
    term: "Health Check",
    translation: "Ishlash holatini tekshirish",
    description:
      "Xizmatning ishlayotgani yoki so‘rov qabul qilishga tayyorligini muntazam tekshirish.",
  },
  {
    term: "Observability",
    translation: "Tizim ichki holatini anglash imkoniyati",
    description:
      "Qaydlar, o‘lchovlar va so‘rov izlari orqali tizimda nima yuz berayotganini tushunish imkoniyati.",
  },
  {
    term: "Alerting",
    translation: "Ogohlantirish yuborish",
    description:
      "Xato yoki belgilangan chegaradan chetlanish aniqlanganda mas’ullarga avtomatik xabar berish.",
  },
  {
    term: "Staging",
    translation: "Ishga chiqarishdan oldingi muhit",
    description:
      "Yangi versiyani haqiqiy foydalanish muhitiga o‘xshash sharoitda tekshirish uchun muhit.",
  },
  {
    term: "Production",
    translation: "Haqiqiy foydalanish muhiti",
    description:
      "Dasturdan haqiqiy foydalanuvchilar foydalanadigan ish muhiti.",
  },
  {
    term: "Canary Deployment",
    translation: "Yangi versiyani bosqichma-bosqich chiqarish",
    description:
      "Yangi versiyani avval oz sonli foydalanuvchiga berib, natijaga qarab qamrovni kengaytirish usuli.",
  },
  {
    term: "Data Analytics",
    translation: "Ma’lumotlar tahlili",
    description:
      "Ma’lumotlarni o‘rganib, savollarga javob va qarorlar uchun foydali xulosalar olish jarayoni.",
  },
  {
    term: "Data Analyst",
    translation: "Ma’lumotlar tahlilchisi",
    description:
      "Ma’lumotlarni tayyorlab, tahlil va hisobotlar orqali qaror qabul qilishga yordam beradigan mutaxassis.",
  },
  {
    term: "Dataset",
    translation: "Ma’lumotlar to‘plami",
    description:
      "Biror mavzu yoki vazifaga tegishli, birgalikda o‘rganiladigan ma’lumotlar jamlanmasi.",
  },
  {
    term: "Data Cleaning",
    translation: "Ma’lumotlarni tozalash",
    description:
      "Takroriy, xato yoki nomuvofiq qiymatlarni aniqlash va tuzatish jarayoni.",
  },
  {
    term: "Missing Value",
    translation: "Yetishmayotgan qiymat",
    description:
      "Yozuvdagi ma’lum bir maydon uchun qiymat kiritilmagan yoki mavjud bo‘lmagan holat.",
  },
  {
    term: "Outlier",
    translation: "Keskin farqlanuvchi qiymat",
    description:
      "Boshqa kuzatuvlardan ancha farq qiladigan qiymat; u xato yoki haqiqiy noyob holat bo‘lishi mumkin.",
  },
  {
    term: "ETL",
    translation: "Ajratib olish, o‘zgartirish va yuklash",
    description:
      "Extract, Transform, Load — ma’lumotni manbadan olib, qayta ishlab, maqsadli tizimga joylashtirish jarayoni.",
  },
  {
    term: "ELT",
    translation: "Ajratib olish, yuklash va o‘zgartirish",
    description:
      "Extract, Load, Transform — ma’lumotni maqsadli tizimga yuklagandan keyin o‘sha yerda qayta ishlash jarayoni.",
  },
  {
    term: "Data Warehouse",
    translation: "Tahliliy ma’lumotlar ombori",
    description:
      "Turli manbalardan kelgan ma’lumotlarni hisobot va tahlil uchun jamlaydigan tizim.",
  },
  {
    term: "Data Lake",
    translation: "Keng turdagi ma’lumotlar ombori",
    description:
      "Tuzilmali va tuzilmasiz ma’lumotlarni ko‘pincha asl shaklida saqlaydigan ombor.",
  },
  {
    term: "Business Intelligence (BI)",
    translation: "Biznes ma’lumotlarini tahlil qilish",
    description:
      "Biznes holatini tushunish uchun ma’lumotlardan hisobot, ko‘rsatkich va tahlillar yaratish amaliyoti.",
  },
  {
    term: "Dashboard",
    translation: "Ko‘rsatkichlar paneli",
    description:
      "Muhim raqam va grafiklarni bitta ko‘rinishda jamlab ko‘rsatadigan sahifa.",
  },
  {
    term: "KPI",
    translation: "Asosiy samaradorlik ko‘rsatkichi",
    description:
      "Key Performance Indicator — belgilangan maqsadga erishish darajasini baholaydigan muhim o‘lchov.",
  },
  {
    term: "Metric",
    translation: "O‘lchanadigan ko‘rsatkich",
    description:
      "Tashriflar soni yoki javob vaqti kabi raqam bilan ifodalanadigan o‘lchov.",
  },
  {
    term: "Data Visualization",
    translation: "Ma’lumotlarni ko‘rgazmali tasvirlash",
    description:
      "Ma’lumotdagi farq va bog‘lanishlarni grafik, diagramma yoki xarita orqali ko‘rsatish.",
  },
  {
    term: "Aggregation",
    translation: "Ma’lumotlarni umumlashtirish",
    description:
      "Bir nechta qiymatdan yig‘indi, o‘rtacha yoki son kabi umumiy natija hisoblash.",
  },
  {
    term: "JOIN",
    translation: "Jadvallarni bog‘lab olish",
    description:
      "SQLda ikki yoki undan ortiq jadval yozuvlarini belgilangan shart asosida birlashtirish amali.",
  },
  {
    term: "GROUP BY",
    translation: "Guruhlar bo‘yicha jamlash",
    description:
      "SQLda bir xil qiymatli yozuvlarni guruhlab, har bir guruh uchun umumiy natija hisoblash.",
  },
  {
    term: "Pivot Table",
    translation: "Yig‘ma jadval",
    description:
      "Ma’lumotni tanlangan satr va ustunlar bo‘yicha guruhlab, yig‘indi yoki boshqa ko‘rsatkichlarni hisoblaydigan jadval.",
  },
  {
    term: "CSV",
    translation: "Vergul bilan ajratilgan qiymatlar",
    description:
      "Jadval ma’lumotlarini satrlar va odatda vergul bilan ajratilgan maydonlarda saqlaydigan matnli format.",
  },
  {
    term: "Mean",
    translation: "Arifmetik o‘rtacha",
    description:
      "Qiymatlar yig‘indisini ularning soniga bo‘lish orqali topiladigan ko‘rsatkich.",
  },
  {
    term: "Median",
    translation: "O‘rtadagi qiymat",
    description:
      "Tartiblangan qiymatlar markazi; soni juft bo‘lsa, o‘rtadagi ikki qiymatning arifmetik o‘rtachasi olinadi.",
  },
  {
    term: "Standard Deviation",
    translation: "Standart og‘ish",
    description:
      "Qiymatlar o‘rtacha qiymat atrofida qanchalik tarqalganini ko‘rsatuvchi o‘lchov.",
  },
  {
    term: "Correlation",
    translation: "O‘zaro bog‘liqlik",
    description:
      "Ikki ko‘rsatkichning birga o‘zgarish darajasi; bu birining boshqasiga sabab bo‘lishini isbotlamaydi.",
  },
  {
    term: "A/B Testing",
    translation: "Ikki variantni taqqoslash sinovi",
    description:
      "Foydalanuvchilarni guruhlarga ajratib, ikki variant natijasini belgilangan ko‘rsatkich bo‘yicha taqqoslash.",
  },
  {
    term: "Sample",
    translation: "Tanlanma",
    description:
      "Katta to‘plamni o‘rganish uchun undan ajratib olingan kuzatuvlar qismi.",
  },
  {
    term: "Time Series",
    translation: "Vaqt qatori",
    description:
      "Vaqt tartibida yozilgan qiymatlar ketma-ketligi, masalan, har kungi savdo miqdori.",
  },
  {
    term: "Conversion Rate",
    translation: "Maqsadli amal ulushi",
    description:
      "Kerakli amalni bajarganlar sonining tegishli jami foydalanuvchi yoki tashriflar soniga nisbati.",
  },
  {
    term: "Cohort Analysis",
    translation: "Guruhlar bo‘yicha vaqtli tahlil",
    description:
      "Umumiy belgiga ega guruhlarning, masalan, bir oyda kelgan foydalanuvchilarning vaqt davomida xatti-harakatini solishtirish.",
  },
  {
    term: "Funnel Analysis",
    translation: "Bosqichlar bo‘yicha o‘tish tahlili",
    description:
      "Foydalanuvchilarning maqsadga eltuvchi bosqichlardan o‘tishi va qayerda chiqib ketishini o‘rganish.",
  },
];
