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
];
