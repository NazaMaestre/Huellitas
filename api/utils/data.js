const petsData = [
  {
    name: "Moro",
    age: "1 mes",
    species: "perro",
    image:
      "https://www.pronto.com.ar/u/fotografias/m/2023/2/14/f850x638-82038_159527_5050.jpg",
    size: "pequeño",
    color: "negro",
    sex: "hembra",
    temperament: "tranquilo",
    adopted: "no",
    userId: 11,
  },
  {
    name: "Caramelo",
    age: "1 mes",
    species: "perro",
    image:
      "https://www.pronto.com.ar/u/fotografias/m/2023/2/14/f850x638-82038_159527_5050.jpg",
    size: "grande",
    color: "marron",
    sex: "macho",
    temperament: "tranquilo",
    adopted: "no",
    userId: 11,
  },
  {
    name: "Toby",
    age: "8 años",
    species: "perro",
    image:
      "https://cdnb.20m.es/animalesenadopcion/files/2015/04/a1-620x465.jpg",
    size: "grande",
    color: "negro",
    sex: "macho",
    temperament: "tranquilo",
    adopted: "no",
    userId: 12,
  },
  {
    name: "Thor",
    age: "1 año",
    species: "perro",
    image: "https://acortar.link/iPCotm",
    size: "pequeño",
    color: "marron y blanco",
    sex: "macho",
    temperament: "inquieto",
    adopted: "no",
    userId: 13,
  },
  {
    name: "Chipirón",
    age: "6 meses",
    species: "perro",
    image:
      "https://thumbs.dreamstime.com/z/perro-mezclado-blanco-y-negro-de-la-raza-96823458.jpg",
    size: "mediano",
    color: "blanco",
    sex: "macho",
    temperament: "alegre",
    adopted: "no",
    userId: 14,
  },
  {
    name: "Bimba",
    age: "3 años",
    species: "perro",
    image:
      "https://www.molaunhuevo.com/wp-content/uploads/2014/06/border-collie.jpg",
    size: "mediano",
    color: "blanco y negro",
    sex: "hembra",
    temperament: "confiable",
    adopted: "no",
    userId: 4,
  },
  {
    name: "Trufa",
    age: "3 años",
    species: "perro",
    image:
      "https://t1.ea.ltmcdn.com/es/posts/0/2/5/16_pastor_leones_24520_15_600.jpg",
    size: "mediano",
    color: "negro con manchas blancas",
    sex: "hembra",
    temperament: "cuidadora",
    adopted: "no",
    userId: 17,
  },
  {
    name: "Pupi",
    age: "9 meses",
    species: "perro",
    image: "https://acortar.link/BuCrm0",
    size: "pequeño",
    color: "blanco",
    sex: "hembra",
    temperament: "afable",
    adopted: "no",
    userId: 16,
  },
  {
    name: "Bigotes",
    age: "2 años",
    species: "gato",
    image: "https://t2.ea.ltmcdn.com/es/posts/8/1/2/maine_coon_25218_3_600.jpg",
    size: "mediano",
    color: "anaranjado",
    sex: "hembra",
    temperament: "jugueton",
    adopted: "no",
    userId: 7,
  },
  {
    name: "Manchas",
    age: "4 años",
    species: "gato",
    image:
      "https://image.europafm.com//clipping/cmsimages01//2015/12/29/E3CDD244-FAC7-45D1-B33D-7032A7C22C49/30.jpg",
    size: "mediano",
    color: "tricolor",
    sex: "macho",
    temperament: "",
    adopted: "no",
    userId: 8,
  },
  {
    name: "Café con leche",
    age: "6 años",
    species: "perro",
    image: "https://pbs.twimg.com/media/DcjV8GyXUAI7P-u.jpg",
    size: "mediano",
    color: "cafe y blanco",
    sex: "macho",
    temperament: "jugueton",
    adopted: "no",
    userId: 18,
  },
  {
    name: "Ron",
    age: "3 años",
    species: "gato",
    image:
      "https://static.vecteezy.com/system/resources/previews/002/857/818/non_2x/orange-tabby-cat-photo.jpg",
    size: "mediano",
    color: "naranja",
    sex: "macho",
    temperament: "inquieto",
    adopted: "no",
    userId: 2,
  },
  {
    name: "Simba",
    age: "1 año",
    species: "gato",
    image:
      "https://www.feelcats.com/wp-content/uploads/2018/10/gato-atigrado-tic-ticked.jpg",
    size: "mediano",
    color: "gris",
    sex: "macho",
    temperament: "relajado",
    adopted: "no",
    userId: 15,
  },
  {
    name: "Minnie",
    age: "3 meses",
    species: "gato",
    image:
      "https://i.pinimg.com/474x/e3/98/64/e39864f7f4f7c3ae41e7a009379d8721.jpg",
    size: "pequeño",
    color: "siamesa",
    sex: "hembra",
    temperament: "juguetona",
    adopted: "no",
    userId: 17,
  },
];

const usersData = [
  {
    type: "admin",
    name: "admin",
    username: "admin",
    email: "huellitas2901@gmail.com",
    address: "Henry",
    phone: "Henry",
    website: "Huellitas",
    facebook: "no",
    instagram: "huellitaswebpets",
    twitter: "Huellitas Web",
    tiktok: "no",
    description:
      "Administrador global, todos podemos usar este usuario como admin. Para iniciar sesión debemos cargarlo a la base de datos con un post a / y luego en el login ingresar por gmail con huellitas",
    image: "https://ucarecdn.com/c7c6c96a-edae-49bb-a723-a040d408ee16/",
    CVU: "826221765285480",
    status: "activo",
    password: "#huellitas1919",
  },
  {
    type: "usuario",
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    address: "Victor Plains 879, Wisokyburgh, Cordoba",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    facebook: "ErvinH",
    instagram: "ErvinH12",
    twitter: "ErvinHowell",
    tiktok: "ErvinMiRey",
    description: "Almorcé con una llama debajo de tu cama porque puedo",
    image:
      "https://ucarecdn.com/fc4aae84-317c-4330-9407-d8f6c12081ad/f608x342sf.jpg",
    latitude: -31.41555,
    longitude: -64.186793,
    CVU: "",
    status: "activo",
    password: "1234",
  },
  {
    type: "usuario",
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: "Douglas Extension Suite 847, McKenziehaven, La Pampa",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    facebook: "ClemBauch",
    instagram: "",
    twitter: "",
    tiktok: "ClemBauch",
    description: "Recibí una fuerte multa pero no logró aplastar mi espíritu",
    image:
      "https://ucarecdn.com/5c8c24ae-6895-4849-8301-793e868819cd/pngtransparentfemaleavatargirlfacewomanuserflatclassyusersicon.png",
    latitude: -36.624463,
    longitude: -64.284073,
    CVU: "",
    status: "activo",
    password: "1234",
  },
  {
    type: "usuario",
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: "Hoeger Mall Apt. 692, South Elvis, Formosa",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    facebook: "PatoLeb",
    instagram: "PatoLeb123",
    twitter: "PatoPato",
    tiktok: "",
    status: "activo",
    description:
      "Ella insistió en que limpiar tu armario era la clave para una buena conducción",
    image:
      "https://ucarecdn.com/dd6d52be-5c97-4f44-9b51-cdc96130712d/avatarperfilusuariofemeninoesmujerpersonajeprotectorpantallaemociones_505620617.avif",
    latitude: -26.184669,
    longitude: -58.174414,
    CVU: "",
    password: "1234",
  },
  {
    type: "usuario",
    name: "José Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: "Skiles Walks Suite 351, Roscoeview, Santa Fe",
    phone: "(254)954-1289",
    website: "demarco.info",
    facebook: "DemarcoRules",
    instagram: "parislove",
    twitter: "bebitofiufiu",
    tiktok: "reinadelbaile",
    status: "activo",
    description:
      "Ella le pidió prestado el libro hace muchos años y aún no lo ha devuelto",
    image:
      "https://ucarecdn.com/ca905753-2a96-44c2-b997-f7a8d3fd352f/pngtreeuservectoravatarpngimage_1541962.jpg",
    latitude: -31.619454,
    longitude: -60.697159,
    CVU: "",
    password: "1234",
  },
  {
    type: "usuario",
    name: "Mrs. Juan Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: "Norberto Crossing 950, South Christy, Buenos Aires",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    facebook: "DemarcoRules",
    instagram: "parislove",
    twitter: "bebitofiufiu",
    tiktok: "reinadelbaile",
    status: "activo",
    description:
      "Tu novia compró tu cereal crujiente de galleta favorito pero se olvidó de comprar leche",
    image:
      "https://ucarecdn.com/5868696c-47b5-4569-88b9-13d4011d4533/kisspnguserprofileavatarcomputericons5affbbaf05c5a47133825315267091670237.jpg",
    latitude: -34.796194,
    longitude: -58.278075,
    CVU: "",
    password: "1234",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quo quidem nihil et voluptates, iusto tenetur delectus fugit repellendus amet, earum eligendi saepe. Quos placeat nam quam voluptatem deserunt minima distinctio eveniet, ratione velit quis aliquid in nobis quia enim repellat facere aliquam eos ducimus? Debitis, corporis iusto quidem numquam autem ipsum eos commodi voluptas dolorem perferendis ullam maxime incidunt neque earum explicabo, maiores placeat cum exercitationem eligendi. Cumque asperiores modi accusamus nesciunt excepturi ratione perferendis, iste officia expedita deleniti rerum eaque laudantium deserunt mollitia sunt quaerat reprehenderit, quo cupiditate amet sed? Iste delectus iusto, corporis incidunt ab natus error possimus eius placeat dicta voluptate beatae. Veniam laudantium expedita blanditiis magnam dolorum alias laborum quod harum officia, autem tenetur voluptate delectus nihil porro ducimus cumque minima, reiciendis itaque dolores quaerat praesentium tempora, esse enim eos! Eius ipsa magni sit tempora, alias distinctio delectus doloribus, deserunt aliquid explicabo, commodi fugit voluptates?",
    stars: 5,
  },
  {
    type: "usuario",
    name: "Juana Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: "Rex Trail 280, Howemouth, Capital Federal",
    phone: "210.067.6132",
    website: "elvis.io",
    facebook: "KurtKurt",
    instagram: "Kurtina",
    twitter: "Kratos123",
    tiktok: "",
    status: "activo",
    description:
      "Seamos todos únicos juntos hasta que nos demos cuenta de que todos somos iguales",
    image:
      "https://ucarecdn.com/18bf0fce-eb8c-49b0-a192-d2a9bae859be/pngclipartcomputericonsavataruseravatarheroeswoman.png",
    latitude: -34.608052,
    longitude: -58.376166,
    CVU: "",
    password: "1234",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quo quidem nihil et voluptates, iusto tenetur delectus fugit repellendus amet, earum eligendi saepe. Quos placeat nam quam voluptatem deserunt minima distinctio eveniet, ratione velit quis aliquid in nobis quia enim repellat facere aliquam eos ducimus? Debitis, corporis iusto quidem numquam autem ipsum eos commodi voluptas dolorem perferendis ullam maxime incidunt neque earum explicabo, maiores placeat cum exercitationem eligendi. Cumque asperiores modi accusamus nesciunt excepturi ratione perferendis, iste officia expedita deleniti rerum eaque laudantium deserunt mollitia sunt quaerat reprehenderit, quo cupiditate amet sed? Iste delectus iusto, corporis incidunt ab natus error possimus eius placeat dicta voluptate beatae. Veniam laudantium expedita blanditiis magnam dolorum alias laborum quod harum officia, autem tenetur voluptate delectus nihil porro ducimus cumque minima, reiciendis itaque dolores quaerat praesentium tempora, esse enim eos! Eius ipsa magni sit tempora, alias distinctio delectus doloribus, deserunt aliquid explicabo, commodi fugit voluptates?",
    stars: 3,
  },
  {
    type: "usuario",
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: "Ellsworth Summit 729, Aliyaview, Capital Federal",
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    facebook: "NicoNicoNi",
    instagram: "ElQuinto",
    twitter: "55Nico5",
    tiktok: "NicoPasion",
    status: "activo",
    description:
      "Aunque pensaba que el mundo era plano, no veía la ironía de querer viajar alrededor del mundo",
    image:
      "https://ucarecdn.com/6d7c0e44-12e6-4719-ae35-908b9e5b4037/pngtransparentcomputericonsuserprofileavataruserheroesbusinessuser.png",
    latitude: -34.608052,
    longitude: -58.376166,
    CVU: "",
    password: "1234",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quo quidem nihil et voluptates, iusto tenetur delectus fugit repellendus amet, earum eligendi saepe. Quos placeat nam quam voluptatem deserunt minima distinctio eveniet, ratione velit quis aliquid in nobis quia enim repellat facere aliquam eos ducimus? Debitis, corporis iusto quidem numquam autem ipsum eos commodi voluptas dolorem perferendis ullam maxime incidunt neque earum explicabo, maiores placeat cum exercitationem eligendi. Cumque asperiores modi accusamus nesciunt excepturi ratione perferendis, iste officia expedita deleniti rerum eaque laudantium deserunt mollitia sunt quaerat reprehenderit, quo cupiditate amet sed? Iste delectus iusto, corporis incidunt ab natus error possimus eius placeat dicta voluptate beatae. Veniam laudantium expedita blanditiis magnam dolorum alias laborum quod harum officia, autem tenetur voluptate delectus nihil porro ducimus cumque minima, reiciendis itaque dolores quaerat praesentium tempora, esse enim eos! Eius ipsa magni sit tempora, alias distinctio delectus doloribus, deserunt aliquid explicabo, commodi fugit voluptates?",
    stars: 4,
  },
  {
    type: "usuario",
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: "Dayna Park 449, Bartholomebury, Cordoba",
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    facebook: "Enna",
    instagram: "EnaReich123",
    twitter: "",
    tiktok: "",
    description:
      "Solo quería decirte que pude ver el amor que sientes por tu hija por la forma en que la miras",
    image:
      "https://ucarecdn.com/6af60d4b-3444-43f5-bdc1-db12f38085f8/images.png",
    latitude: -31.41555,
    longitude: -64.186793,
    CVU: "",
    password: "1234",
  },
  {
    type: "usuario",
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: "Kattie Turnpike 198, Lebsackbury, Capital Federal",
    phone: "024-648-3804",
    website: "ambrose.net",
    facebook: "Clemmme1987",
    instagram: "Perritos99",
    twitter: "Perritos99",
    tiktok: "amolosperritos",
    description:
      "En el momento en que aterrizó comprendió la razón por la que se trataba de un estado de sobrevuelo",
    image:
      "https://ucarecdn.com/6d71e24b-53e7-4fbb-b4ab-7b9813d05154/images1.png",
    latitude: -34.608052,
    longitude: -58.376166,
    CVU: "",
    password: "1234",
  },
  {
    type: "fundacion",
    name: "Perritos Fundacion",
    username: "PerritosFundacion",
    email: "perritos@gmail.com",
    address: "Belgrano 198, Rio Tercero, Cordoba",
    phone: "024-648-3804",
    website: "perritos.net",
    facebook: "FundacionPerritos",
    instagram: "FundacionPerritos",
    twitter: "FundacionPerritos",
    tiktok: "",
    description:
      "Nuestro Centro de Adopciones está siempre abierto a quienes estén buscando una mascota para amar y cuidar.  Durante todo el año hay perritos de todas las edades, tamaños y colores esperando que lleguen sus nuevos humanos. ",
    image:
      "https://ucarecdn.com/6bc03969-82d2-4ee3-8325-a5c0bbf6c226/exampleimage.jpg",
    latitude: -32.175477,
    longitude: -64.111845,
    CVU: "596013402768904",
    password: "1234",
  },
  {
    type: "fundacion",
    name: "De Patitas En La Calle",
    username: "depatitasenlacalle",
    email: "depatitasenlacalle@gmail.com",
    address: "Lamadrid 2530, San Miguel de Tucuman, Tucuman",
    phone: "381-648-3804",
    website: "depatitasenlacalle.net",
    facebook: "depatitasenlacalle",
    instagram: "depatitasenlacalle",
    twitter: "depatitasenlacalle",
    tiktok: "",
    description:
      "AYUDANOS A AYUDAR!Somos un Grupo que trabaja Ad Honorem, RESCATANDO,AYUDANDO ,CONCIENTIZANDO,",
    image:
      "https://ucarecdn.com/a58ebf1f-6c9e-444b-a752-df49492839a5/kisspngdoglogopetkennelclubbonedog5abebc30c2c1138323652015224494567977.jpg",
    latitude: -26.826678,
    longitude: -65.187033,
    CVU: "948360284814368",
    password: "1234",
  },
  {
    type: "fundacion",
    name: "Bigotes y Narices",
    username: "bigotesynarices",
    email: "bigotesynarices@gmail.com",
    address: "San Martin 1989, Salta, Salta",
    phone: "388-648-3804",
    website: "bigotesynarices.net",
    facebook: "bigotesynarices",
    instagram: "bigotesynarices",
    twitter: "bigotesynarices",
    tiktok: "",
    description:
      "El rescate y adopción de gatos es una experiencia gratificante y gratificante. Como todos los animales, los gatos requieren cuidado y atención. También son una delicia para tener en la familia.",
    image:
      "https://ucarecdn.com/8c49d528-e5cf-4e72-83cb-0879b1bb47b8/1151150090_goggglogosdefundacionesdeanimales.png",
    latitude: -24.816949,
    longitude: -65.410718,
    CVU: "842254369748662",
    password: "1234",
  },
  {
    type: "fundacion",
    name: "Fundacion Vida Animal",
    username: "vidaanimal",
    email: "vidaanimal@gmail.com",
    address: "Buenos Aires 968, Santa Rosa, La Pampa",
    phone: "11-648-3804",
    website: "vidaanimal.org.ar",
    facebook: "Fundacionvidaanimal",
    instagram: "vidaanimalFundacion",
    twitter: "vidaanimal",
    tiktok: "vidaanimal",
    description:
      "Fundación Vidanimal es una organización no gubernamental sin fines de lucro abocada a difundir, proteger y promover los derechos de los animales.",
    image:
      "https://ucarecdn.com/e0a51a6f-adf4-4596-af49-b861fdb29483/perromascotasconceptologotipoiconovectorconceptodiseno2dh318m.jpg",
    latitude: -36.624463,
    longitude: -64.284073,
    CVU: "106672908060515",
    password: "1234",
  },
  {
    type: "fundacion",
    name: "Fundacion Adoptemos",
    username: "adop",
    email: "adop@gmail.com",
    address: "Buenos aires 963, santa Rosa, La Pampa",
    phone: "11-6248-3804",
    website: "adopt.org.ar",
    facebook: "adop123",
    instagram: "aoptFund",
    twitter: "adopte",
    tiktok: "adopte",
    description:
      "Fundación adoptemos es una organización no gubernamental sin fines de lucro abocada a difundir, proteger y promover los derechos de los animales.",
    image:
      "https://ucarecdn.com/2eacd4d1-6f11-4dee-a67e-9b2fbbcd6aa6/logofpai001.jpg",
    latitude: -36.624463,
    longitude: -64.284073,
    CVU: "106672908063515",
    password: "1234",
  },
  {
    type: "fundacion",
    name: "Futuro Ideal",
    username: "Ideal",
    email: "Ideal@gmail.com",
    address: "Buenos Fe 968, Santa Rosa, La Pampa",
    phone: "11-6438-3804",
    website: "Ideal.org.ar",
    facebook: "Ideal Vida Animal",
    instagram: "Ideal123",
    twitter: "@idealVida",
    tiktok: "vida_ideal",
    description:
      "Fundación futuro ideal es una organización no gubernamental sin fines de lucro abocada a difundir, proteger y promover los derechos de los animales.",
    image:
      "https://ucarecdn.com/e885f955-e0be-47a6-b36b-d2233ea0b92f/handlovesignwithincircle260nw1970062876.webp",
    latitude: -36.624463,
    longitude: -64.284073,
    CVU: "106672908560515",
    password: "1234",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quo quidem nihil et voluptates, iusto tenetur delectus fugit repellendus amet, earum eligendi saepe. Quos placeat nam quam voluptatem deserunt minima distinctio eveniet, ratione velit quis aliquid in nobis quia enim repellat facere aliquam eos ducimus? Debitis, corporis iusto quidem numquam autem ipsum eos commodi voluptas dolorem perferendis ullam maxime incidunt neque earum explicabo, maiores placeat cum exercitationem eligendi. Cumque asperiores modi accusamus nesciunt excepturi ratione perferendis, iste officia expedita deleniti rerum eaque laudantium deserunt mollitia sunt quaerat reprehenderit, quo cupiditate amet sed? Iste delectus iusto, corporis incidunt ab natus error possimus eius placeat dicta voluptate beatae. Veniam laudantium expedita blanditiis magnam dolorum alias laborum quod harum officia, autem tenetur voluptate delectus nihil porro ducimus cumque minima, reiciendis itaque dolores quaerat praesentium tempora, esse enim eos! Eius ipsa magni sit tempora, alias distinctio delectus doloribus, deserunt aliquid explicabo, commodi fugit voluptates?",
    stars: 5,
  },
  {
    type: "fundacion",
    name: "Fundacion patitas cortas y largas",
    username: "patis",
    email: "patis@gmail.com",
    address: "patis 968, Santa Rosa, La Pampa",
    phone: "11-41-3804",
    website: "patis.org.ar",
    facebook: "patisPa",
    instagram: "patis__",
    twitter: "@patiss",
    tiktok: "pa_tis",
    description:
      "Fundación patitas cortas y largas es una organización no gubernamental sin fines de lucro abocada a difundir, proteger y promover los derechos de los animales.",
    image:
      "https://ucarecdn.com/b12b8881-581e-4956-bde2-9f68c2fb251e/caridadfundacionlogovector_23987228.avif",
    latitude: -36.624463,
    longitude: -64.284073,
    CVU: "133372908060515",
    password: "1234",
  },
  {
    type: "fundacion",
    name: "Fundacion por la naturaleza",
    username: "naturaleza",
    email: "naturaleza@gmail.com",
    address: "naturaleza 968, Santa Rosa, La Pampa",
    phone: "11-134-3804",
    website: "naturaleza.org.ar",
    facebook: "naturalezaA",
    instagram: "naturaleza__",
    twitter: "@naturaleza",
    tiktok: "natur_aleza",
    description:
      "Fundación naturaleza es una organización no gubernamental sin fines de lucro abocada a difundir, proteger y promover los derechos de los animales.",
    image:
      "https://ucarecdn.com/4f4c1644-9b38-4da5-86db-f3b7bdd6a9c6/e36255a93896664d4f7f9c439e311721.jpg",
    latitude: -36.624463,
    longitude: -64.284073,
    CVU: "106672908060515",
    password: "1234",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quo quidem nihil et voluptates, iusto tenetur delectus fugit repellendus amet, earum eligendi saepe. Quos placeat nam quam voluptatem deserunt minima distinctio eveniet, ratione velit quis aliquid in nobis quia enim repellat facere aliquam eos ducimus? Debitis, corporis iusto quidem numquam autem ipsum eos commodi voluptas dolorem perferendis ullam maxime incidunt neque earum explicabo, maiores placeat cum exercitationem eligendi. Cumque asperiores modi accusamus nesciunt excepturi ratione perferendis, iste officia expedita deleniti rerum eaque laudantium deserunt mollitia sunt quaerat reprehenderit, quo cupiditate amet sed? Iste delectus iusto, corporis incidunt ab natus error possimus eius placeat dicta voluptate beatae. Veniam laudantium expedita blanditiis magnam dolorum alias laborum quod harum officia, autem tenetur voluptate delectus nihil porro ducimus cumque minima, reiciendis itaque dolores quaerat praesentium tempora, esse enim eos! Eius ipsa magni sit tempora, alias distinctio delectus doloribus, deserunt aliquid explicabo, commodi fugit voluptates?",
    stars: 5,
  },
];

const campaignsData = [
  {
    title: "Lola necesita una operacion",
    reason: "Recaudar fondos para operación",
    description:
      "Lola es una perrita muy buena que fue rescatada hace poco, necesita una operacion de cadera porque fue atropellada. Por favor ayudanos a recaudar fondos para cubrir los gastos veterinarios",
    goal: 100000,
    image:
      "https://infofunes.com.ar/uploads/Marga%20perrita%20rescatada%202.png",
    userId: 11,
  },
  {
    title: "Refugio necesita dinero para alimento",
    reason: "Recaudar fondos para gastos diarios",
    description:
      "El refugio animal 'Patitas Frias' recibe hasta 10 animales rescatados por día. Son muchas bocas para alimentar asi que necesitamos colaboracion para poder darles de comer a todos",
    goal: 150000,
    image:
      "https://diarioresumen.com.ar/static/old/uploads/2020/01/Perros-calle-web.jpg",
    userId: 12,
  },
  {
    title: "Refugio necesita dinero para perros lisiados",
    reason: "Recaudar fondos para comprar suministros médicos",
    description:
      "La cantidad de mascotas enfermas y heridas nos excede y necesitamos su ayuda!",
    goal: 175000,
    image:
      "https://ucarecdn.com/b1678ac5-096e-4879-87b4-e66e5a5d8d7c/H1xYGQ60ml_1256x620.webp",
    userId: 13,
  },
  {
    title: "Necesitan un techo",
    reason: "Pasan la noche afuera y se viene el invierno",
    description:
      "No contamos con un techo, nuestros animales se encuentran al aire libre y se acerca el invierno",
    goal: 670000,
    image:
      "https://ucarecdn.com/ae9337bf-41bd-4e67-a48d-5ec34fc6ccd3/Portoalegreperros.jpg",
    userId: 16,
  },
  {
    title: "Compra de alimentos",
    reason: "Necesitamos alimento para nuestros animales",
    description:
      "La comision se está quedando sin recursos, necesitamos su ayuda, ellos necesitan su ayuda.",
    goal: 175000,
    image:
      "https://ucarecdn.com/ebf9e838-8211-42c8-957d-208ec972278e/dia_mundial_de_los_animales.jpg",
    userId: 18,
  },
  {
    title: "Necesitamos 20 bolsas de comida",
    reason:
      "20 bolsas de comida para repartir a diferentes pequeños refugios de la zona",
    description:
      "Muchos refugios cerca del nuestro nos pidieron ayuda y estamos tratando de ayudarlos.",
    goal: 175000,
    image:
      "https://ucarecdn.com/53e16bb7-c749-486a-a16a-7019a65a1a16/PostDonacionesPerro.jpg",
    userId: 17,
  },
  {
    title: "Refugio necesita ampliar su refugio",
    reason:
      "Recaudar fondos para comprar un nuevo terreno para nuestras mascotas.",
    description:
      "Nuestro refugio es muy pequeño y tenemos muchos animales. Necesitamos ampliarnos.",
    goal: 125456,
    image:
      "https://ucarecdn.com/c3e8aa64-4d0b-4f18-bec8-72220743f30a/000767173W.jpg",
    userId: 15,
  },
  {
    title: "Refugios de perros y gatos por separado",
    reason: "Nuestros perros y gatos no pueden convivir juntos.",
    description:
      "Debido a las peleas entre los perros y gatos, para mantener su integridad física estamos en campaña para hacerles refugios separados.",
    goal: 300000,
    image: "https://ucarecdn.com/b2eb3317-65d9-4bcb-8267-264a506c31bb/mas.jpg",
    userId: 13,
  },
  {
    title: "Gastos varios para refugio",
    reason: "Recaudar fondos para medicina y alimento",
    description:
      "Este mes encontramos muchos perritos abandonados y no los podemos cuidar como nos gustaria.",
    goal: 75000,
    image:
      "https://ucarecdn.com/3506f523-7f91-48ad-8427-835bed78b485/jcr_content.png",
    userId: 14,
  },
];

module.exports = { petsData, usersData, campaignsData };
