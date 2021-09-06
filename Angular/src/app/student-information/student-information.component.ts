import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {

  studentData:any = [
    {
      "name": "Thor",
      "city": "Hualaihué",
      "email": "in@eu.com",
      "phone": "16021002 3727"
    },
    {
      "name": "Wayne",
      "city": "Malartic",
      "email": "enim.gravida.sit@sodales.co.uk",
      "phone": "16340808 3412"
    },
    {
      "name": "Hashim",
      "city": "Irapuato",
      "email": "sed.libero@volutpat.org",
      "phone": "16910120 1169"
    },
    {
      "name": "Laith",
      "city": "Latera",
      "email": "dui.Cras@pretiumaliquetmetus.com",
      "phone": "16370921 9749"
    },
    {
      "name": "Marvin",
      "city": "Gargazzone/Gargazon",
      "email": "nec.orci@montesnasceturridiculus.co.uk",
      "phone": "16200213 2609"
    },
    {
      "name": "Amal",
      "city": "Koekelberg",
      "email": "pede@dolorsitamet.net",
      "phone": "16810827 9913"
    },
    {
      "name": "Channing",
      "city": "Shatura",
      "email": "elit.a@gravida.ca",
      "phone": "16050403 1675"
    },
    {
      "name": "Alfonso",
      "city": "Dawson Creek",
      "email": "lorem.ipsum@tellusimperdietnon.co.uk",
      "phone": "16150521 2264"
    },
    {
      "name": "Lucius",
      "city": "Wardin",
      "email": "congue.a.aliquet@euerat.org",
      "phone": "16610223 4546"
    },
    {
      "name": "Byron",
      "city": "Aserrí",
      "email": "fermentum@velquam.edu",
      "phone": "16710914 0553"
    },
    {
      "name": "Lev",
      "city": "Ivanteyevka",
      "email": "tristique.aliquet.Phasellus@pellentesqueSeddictum.org",
      "phone": "16271219 1713"
    },
    {
      "name": "Owen",
      "city": "Tuticorin",
      "email": "sit@leo.org",
      "phone": "16370706 8627"
    },
    {
      "name": "Dante",
      "city": "Lloydminster",
      "email": "sed.leo.Cras@maurisa.net",
      "phone": "16410710 6876"
    },
    {
      "name": "Edward",
      "city": "Logan City",
      "email": "dapibus.id.blandit@cursusdiamat.edu",
      "phone": "16070221 5864"
    },
    {
      "name": "Elton",
      "city": "Siena",
      "email": "scelerisque@risus.ca",
      "phone": "16850827 3219"
    },
    {
      "name": "Rigel",
      "city": "Pacoa",
      "email": "Nam.porttitor@euismod.co.uk",
      "phone": "16090502 3289"
    },
    {
      "name": "Damon",
      "city": "Kusa",
      "email": "Morbi.non.sapien@dictummagnaUt.com",
      "phone": "16150606 0357"
    },
    {
      "name": "Alexander",
      "city": "Itzehoe",
      "email": "semper.rutrum@Curae.ca",
      "phone": "16490205 1020"
    },
    {
      "name": "Amir",
      "city": "Kilmalcolm",
      "email": "erat.Vivamus@nibh.org",
      "phone": "16520503 3516"
    },
    {
      "name": "Palmer",
      "city": "Charny",
      "email": "feugiat.Lorem.ipsum@sedconsequat.com",
      "phone": "16180809 2298"
    },
    {
      "name": "Lee",
      "city": "Limal",
      "email": "pretium.neque@Curabitur.edu",
      "phone": "16210530 3255"
    },
    {
      "name": "Dante",
      "city": "Jasper",
      "email": "sed.dolor.Fusce@fermentummetus.net",
      "phone": "16750525 4636"
    },
    {
      "name": "Aaron",
      "city": "Vito d'Asio",
      "email": "diam@aliquetPhasellusfermentum.org",
      "phone": "16460611 8166"
    },
    {
      "name": "Tucker",
      "city": "Sandy",
      "email": "Aenean.sed.pede@nislelementum.com",
      "phone": "16560709 8844"
    },
    {
      "name": "Seth",
      "city": "Civo",
      "email": "lobortis@rutrummagnaCras.org",
      "phone": "16300818 1947"
    },
    {
      "name": "Harper",
      "city": "Heist-aan-Zee",
      "email": "Nulla.semper@liberoest.co.uk",
      "phone": "16740307 5513"
    },
    {
      "name": "Joel",
      "city": "Sargodha",
      "email": "tempor.diam.dictum@aliquet.ca",
      "phone": "16910221 6893"
    },
    {
      "name": "Troy",
      "city": "Shikarpur",
      "email": "ac@pellentesquetellussem.edu",
      "phone": "16120708 9333"
    },
    {
      "name": "Akeem",
      "city": "Pitt Meadows",
      "email": "ante.blandit@nonluctussit.com",
      "phone": "16730324 9846"
    },
    {
      "name": "Evan",
      "city": "Nemoli",
      "email": "Suspendisse.aliquet.molestie@sit.org",
      "phone": "16890714 6115"
    },
    {
      "name": "Gary",
      "city": "Bungay",
      "email": "quam@ipsumprimisin.net",
      "phone": "16550605 2330"
    },
    {
      "name": "David",
      "city": "Nederokkerzeel",
      "email": "sit.amet@Nullamutnisi.ca",
      "phone": "16380728 6830"
    },
    {
      "name": "Hu",
      "city": "Lieferinge",
      "email": "tortor@enimnonnisi.edu",
      "phone": "16580806 3902"
    },
    {
      "name": "Troy",
      "city": "Çaldıran",
      "email": "adipiscing@felisNulla.org",
      "phone": "16770505 0040"
    },
    {
      "name": "Zachery",
      "city": "Virton",
      "email": "varius.Nam@dui.net",
      "phone": "16310815 2491"
    },
    {
      "name": "Tate",
      "city": "Luik",
      "email": "et.netus.et@arcu.net",
      "phone": "16960307 1813"
    },
    {
      "name": "Ulysses",
      "city": "Pincher Creek",
      "email": "dignissim.lacus.Aliquam@acrisus.org",
      "phone": "16160303 6037"
    },
    {
      "name": "Drake",
      "city": "Westmount",
      "email": "Nunc.ullamcorper@magnaDuis.ca",
      "phone": "16700728 9007"
    },
    {
      "name": "Tobias",
      "city": "Bekegem",
      "email": "tincidunt.tempus.risus@fermentummetus.ca",
      "phone": "16570909 0822"
    },
    {
      "name": "Tanek",
      "city": "Feira de Santana",
      "email": "dis@ultricies.edu",
      "phone": "16240903 5587"
    },
    {
      "name": "Abdul",
      "city": "Rulles",
      "email": "turpis@nectempusscelerisque.com",
      "phone": "16481224 1075"
    },
    {
      "name": "Perry",
      "city": "San Rafael",
      "email": "magnis.dis.parturient@egestasurnajusto.org",
      "phone": "16950520 9461"
    },
    {
      "name": "Blaze",
      "city": "Bonnyville",
      "email": "elit.Etiam@ullamcorperviverra.net",
      "phone": "16950916 1189"
    },
    {
      "name": "Keegan",
      "city": "Palermo",
      "email": "turpis@nonenim.net",
      "phone": "16611121 9538"
    },
    {
      "name": "Jackson",
      "city": "Stokrooie",
      "email": "vulputate@enim.net",
      "phone": "16351114 2030"
    },
    {
      "name": "Kasper",
      "city": "Laja",
      "email": "arcu.eu@Proinvelnisl.co.uk",
      "phone": "16851029 7230"
    },
    {
      "name": "Austin",
      "city": "Kayseri",
      "email": "purus@sit.com",
      "phone": "16670304 7446"
    },
    {
      "name": "Lev",
      "city": "Rhyl",
      "email": "nascetur.ridiculus@iaculisodioNam.co.uk",
      "phone": "16330829 2766"
    },
    {
      "name": "Len",
      "city": "Huancayo",
      "email": "elit@intempus.com",
      "phone": "16670817 1050"
    },
    {
      "name": "Aristotle",
      "city": "Ludlow",
      "email": "eget@auctor.org",
      "phone": "16100309 0253"
    },
    {
      "name": "Raja",
      "city": "Newport News",
      "email": "malesuada@egestas.co.uk",
      "phone": "16990319 4182"
    },
    {
      "name": "Barry",
      "city": "Buckingham",
      "email": "Praesent.eu@ipsumdolor.org",
      "phone": "16021108 5436"
    },
    {
      "name": "Josiah",
      "city": "Bostaniçi",
      "email": "auctor@Nuncquisarcu.edu",
      "phone": "16080324 5521"
    },
    {
      "name": "Reece",
      "city": "Lieferinge",
      "email": "lectus@eu.com",
      "phone": "16101109 3653"
    },
    {
      "name": "Ferris",
      "city": "Kawerau",
      "email": "diam.at@enimgravida.com",
      "phone": "16481202 8498"
    },
    {
      "name": "Ulric",
      "city": "Rabbi",
      "email": "Morbi.metus.Vivamus@nullaante.co.uk",
      "phone": "16510618 6942"
    },
    {
      "name": "Mark",
      "city": "Roxburgh",
      "email": "mauris.Morbi.non@ornare.edu",
      "phone": "16760814 3983"
    },
    {
      "name": "Blaze",
      "city": "Irricana",
      "email": "interdum@ametante.edu",
      "phone": "16440806 0368"
    },
    {
      "name": "Matthew",
      "city": "Sovizzo",
      "email": "pede.nonummy.ut@risus.edu",
      "phone": "16440108 5883"
    },
    {
      "name": "Colby",
      "city": "Bunbury",
      "email": "consequat@dui.ca",
      "phone": "16910503 2933"
    },
    {
      "name": "Gray",
      "city": "Matagami",
      "email": "id.risus.quis@enim.edu",
      "phone": "16751210 8155"
    },
    {
      "name": "Perry",
      "city": "Paita",
      "email": "sollicitudin@Aeneanegestas.net",
      "phone": "16670111 1699"
    },
    {
      "name": "Carlos",
      "city": "Enterprise",
      "email": "molestie@rutrum.org",
      "phone": "16011205 2386"
    },
    {
      "name": "Otto",
      "city": "Mazatlán",
      "email": "dolor.dapibus.gravida@Inatpede.co.uk",
      "phone": "16921029 5185"
    },
    {
      "name": "Martin",
      "city": "Harrison Hot Springs",
      "email": "fermentum.arcu.Vestibulum@nonnisi.ca",
      "phone": "16010411 0531"
    },
    {
      "name": "Callum",
      "city": "Mansfield-et-Pontefract",
      "email": "mi.Aliquam.gravida@ac.co.uk",
      "phone": "16730415 3401"
    },
    {
      "name": "Castor",
      "city": "Grimaldi",
      "email": "Cras@fringillaDonecfeugiat.ca",
      "phone": "16940323 3597"
    },
    {
      "name": "Curran",
      "city": "Anápolis",
      "email": "odio.auctor.vitae@auctornonfeugiat.com",
      "phone": "16280613 9990"
    },
    {
      "name": "Arsenio",
      "city": "Airdrie",
      "email": "elit.Etiam.laoreet@gravida.edu",
      "phone": "16521220 6477"
    },
    {
      "name": "Drew",
      "city": "Puerto Nariño",
      "email": "purus.in.molestie@Cras.org",
      "phone": "16260928 0207"
    },
    {
      "name": "Charles",
      "city": "Quinta de Tilcoco",
      "email": "Mauris.non.dui@maurisa.edu",
      "phone": "16831029 2092"
    },
    {
      "name": "Price",
      "city": "Stendal",
      "email": "Phasellus.dolor@ipsumDonecsollicitudin.net",
      "phone": "16880701 7606"
    },
    {
      "name": "Kevin",
      "city": "Yogyakarta",
      "email": "enim@tortor.edu",
      "phone": "16850625 8543"
    },
    {
      "name": "Alfonso",
      "city": "Lafayette",
      "email": "Maecenas@tristiqueac.ca",
      "phone": "16580313 3791"
    },
    {
      "name": "Leroy",
      "city": "Castelluccio Inferiore",
      "email": "nisi.magna@ettristiquepellentesque.net",
      "phone": "16340720 0520"
    },
    {
      "name": "Valentine",
      "city": "Sirsa",
      "email": "orci.Phasellus@liberoet.co.uk",
      "phone": "16710615 9549"
    },
    {
      "name": "Lucius",
      "city": "Barra do Corda",
      "email": "purus.mauris.a@estmauris.co.uk",
      "phone": "16940630 5871"
    },
    {
      "name": "Demetrius",
      "city": "Tulln an der Donau",
      "email": "netus.et.malesuada@enim.co.uk",
      "phone": "16071225 5520"
    },
    {
      "name": "Patrick",
      "city": "Castello di Godego",
      "email": "orci@velsapien.ca",
      "phone": "16660630 7046"
    },
    {
      "name": "Joseph",
      "city": "Uruapan",
      "email": "massa@bibendumsedest.net",
      "phone": "16520118 1251"
    },
    {
      "name": "Beck",
      "city": "Alwar",
      "email": "Nam.consequat.dolor@facilisisfacilisismagna.org",
      "phone": "16860205 9704"
    },
    {
      "name": "Porter",
      "city": "Freising",
      "email": "leo.Cras@lobortismauris.org",
      "phone": "16740422 1546"
    },
    {
      "name": "Arsenio",
      "city": "Maser",
      "email": "Integer@dolor.edu",
      "phone": "16530428 8284"
    },
    {
      "name": "Keegan",
      "city": "Kallo",
      "email": "arcu@lobortis.ca",
      "phone": "16570529 6233"
    },
    {
      "name": "Devin",
      "city": "Nasino",
      "email": "varius.et.euismod@hendrerit.edu",
      "phone": "16130416 4070"
    },
    {
      "name": "Kirk",
      "city": "Naarden",
      "email": "odio.Etiam@sedorci.co.uk",
      "phone": "16011106 8862"
    },
    {
      "name": "Castor",
      "city": "Whitby",
      "email": "ornare.egestas@sodalesnisimagna.com",
      "phone": "16930125 2491"
    },
    {
      "name": "Kadeem",
      "city": "Multan",
      "email": "pellentesque.tellus@magnamalesuadavel.ca",
      "phone": "16910620 1024"
    },
    {
      "name": "Mason",
      "city": "Pescopagano",
      "email": "eu.eros.Nam@auctorodioa.net",
      "phone": "16050627 6443"
    },
    {
      "name": "Fuller",
      "city": "Mapiripana",
      "email": "ante.bibendum@Quisqueaclibero.edu",
      "phone": "16871230 8884"
    },
    {
      "name": "Amal",
      "city": "Lutsel K'e",
      "email": "nunc@PraesentluctusCurabitur.ca",
      "phone": "16461202 4903"
    },
    {
      "name": "Channing",
      "city": "Bangor",
      "email": "Donec@tortorat.org",
      "phone": "16590406 5108"
    },
    {
      "name": "Arsenio",
      "city": "Valparai",
      "email": "elementum@porttitor.ca",
      "phone": "16670121 7736"
    },
    {
      "name": "Ashton",
      "city": "Bossuit",
      "email": "diam.vel@ultricesposuerecubilia.com",
      "phone": "16700725 5479"
    },
    {
      "name": "Clayton",
      "city": "Nadiad",
      "email": "vitae.purus.gravida@ligulaAenean.org",
      "phone": "16191223 3283"
    },
    {
      "name": "Mufutau",
      "city": "Saint-LŽger",
      "email": "bibendum.fermentum@a.net",
      "phone": "16920610 1892"
    },
    {
      "name": "Norman",
      "city": "Tarvisio",
      "email": "sem.ut@ridiculusmus.edu",
      "phone": "16851112 4334"
    },
    {
      "name": "Caesar",
      "city": "Fulda",
      "email": "Proin@sitametante.co.uk",
      "phone": "16870707 1232"
    },
    {
      "name": "Raja",
      "city": "İnegöl",
      "email": "magnis.dis.parturient@dictumultricies.net",
      "phone": "16230619 3521"
    },
    {
      "name": "Ciaran",
      "city": "Kediri",
      "email": "gravida@sempertellus.ca",
      "phone": "16070629 2679"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
