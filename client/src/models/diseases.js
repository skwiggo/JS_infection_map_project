var Disease = require("./disease");
var Fact = require('./fact');

var Diseases = function() {

  var tbFact1 = new Fact({
    comment: "A quarter of all deaths in Europe are estimated to have been caused by tuberculosis infection during the 19th and early 20th century. Famous people who died from tuberculosis during this period included: John Keats, Frédéric Chopin, Charlotte, Emily and Anne Bronte, Anton Chekhov and Franz Kafka.",
    image: "http://emilyspoetryblog.com/wp-content/uploads/2016/04/Emily-Bronte.jpg"
  });

  var tbFact2 = new Fact({
    comment: "The World Health Organization estimates that 9 million people get TB every year, and an estimated 1.5 to 3 million people die from TB every year. The disease leaves more than 10 million children orphaned each year.",
    image: "http://www.tommallens.com/wp-content/uploads/2014/02/people-in-the-world.png"
  });

  var tbFact3 = new Fact({
    comment: "Tuberculosis appears to be one of the most ancient diseases in human history. Skeletons of Egyptian mummies show clear evidence of the disease dating back 6,000 years, although some scientists believe it is much older than that.",
    image: "http://i.telegraph.co.uk/multimedia/archive/01670/tuberculosis_1670496i.jpg"
  });

  var tbFact4 = new Fact({
    comment: "It is widely believed that Tuberculosis was first documented in Greek literature by Hippocrates. In his 'Book Of the Epidemics' (410-400 BCE) he described a disease of “weakness of the lung” associated with fever, chills, “constant sweats” and a cough “brought up rarely and with difficulty”.",
    image: "http://www-tc.pbs.org/wgbh/nova/assets/img/hippocratic-oath-today/image-01-large.jpg"
  });

  var tbFact5 = new Fact({
    comment: "TB is usually treatable and curable. Standard TB is treated with four antimicrobial medicines over a six-month period. But without access to a strict, appropriate regimen, the disease can persist and spread. TB also has the potential to develop drug resistance.",
    image: "http://newsfromafrica.org/wp-content/uploads/2016/09/tuberculosis-drugs.jpg"
  });

  var spFact1 = new Fact({
    comment: "Smallpox is a relatively weak virus when it’s all by itself. If you were to spray smallpox into the air, 90% of the virus was sprayed into the year would die within 24 hours. Because of this weakness, insects and animals are not able to transmit the disease at all. Humans can only get smallpox from other humans who have an active infection.",
    image: "https://www.thestar.com/content/dam/thestar/news/insight/2015/05/22/sneeze-politics-sorting-out-fact-from-sinus-fiction/sneezing.jpg.size.xxlarge.letterbox.jpg"
  });

  var spFact2 = new Fact({
    comment: "As smallpox has not been active wordwide for almost 40 years, the current world population has almost no inbuilt immunity to the disease. It is therefore feared that if smallpox were to be used as a biological weapon, it could have a devastating effect.",
    image: "http://science.dodlive.mil/files/2013/11/Caution-Biowarfare.jpg"
  });

  var spFact3 = new Fact({
    comment: "Smallpox is the only human based infection that has been completely eradicated from the world. The world has been smallpox free since 1979 after a widescale vaccination programme. ",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Dryvax.jpg"
  });

  var spFact4 = new Fact({
    comment: "The first signs and symptoms of smallpox usually appear 12 to 14 days after infection, although the incubation period can range from 7 to 17 days. During this time, an infected person may look and feel normal.",
    image: "http://www.freeiconspng.com/uploads/thermometer-png-icon-4.png"
  });

  var spFact5 = new Fact({
    comment: "For centuries, epidemics of smallpox affected people all over the globe. But in 1796, an English doctor named Edward Jenner discovered a way to protect people from getting smallpox, and his experiments eventually led to the development of the first smallpox vaccine.",
    image: "http://blog.rsb.org.uk/wp-content/uploads/2014/09/jenner.jpg"
  });

  var zikaFact1 = new Fact({
    comment: "The Zika virus was first discovered in Ugandan monkeys in 1947. It spread to the South Pacific and caused an outbreak on Yap Island in Micronesia in 2007. The island’s population was too small for scientists to observe whether the virus caused side effects like birth defects or neurological damage.",
    image: "http://www.esayap.com/images/Island1.jpg"
  });

  var zikaFact2 = new Fact({
    comment: "In early 2015, Brazil experienced a spike in Zika cases, and the virus quickly spread throughout other parts of the Americas. It could have been introduced in 2014, when Brazil hosted the FIFA World Cup and an international canoeing competition. The Zika virus is now in 23 countries in the Americas.",
    image: "http://images.huffingtonpost.com/2016-05-22-1463949471-6072763-BrazilFlagMap.png"
  });

  var zikaFact3 = new Fact({
    comment: "Symptoms of Zika in adults are usually mild. Along with fever, joint pain, rash, or conjunctivitis (red eyes), an affected person might experience headache and muscle pain. Hospitalization is uncommon, and symptoms generally only last up to a week.",
    image: "http://image.shutterstock.com/z/stock-vector-zika-virus-symptom-icons-fever-headache-muscle-pain-joint-pain-red-eyes-rash-zika-virus-380603164.jpg"
  });

  var zikaFact4 = new Fact({
    comment: "The virus is spread primarily by mosquito. According to the World Health Organization, all countries in the Americas will have the disease sometime in the future with the exception of mainland Chile and Canada because the mosquito can’t live there.",
    image: "http://i2.cdn.turner.com/cnnnext/dam/assets/160128185001-zika-mutant-male-mosquitos-mclaughlin-pkg-00020830-large-169.jpg"
  });

  var zikaFact5 = new Fact({
    comment: "There are no approved drugs or vaccines for Zika, in large part because scientists long assumed the virus was so benign that it wasn’t worth the resources required to investigate treatment.",
    image: "http://static2.businessinsider.com/image/56a7acb5c08a80d7118bc7c5-1200/as-of-right-now-theres-no-treatment-for-the-zika-virus-which-is-why-the-cdc-is-urging-pregnant-women-to-avoid-traveling-to-countries-where-the-virus-is-growing-in-strength-labs-are-currently-doing-studies-to-find-more-answers.jpg"
  });

  var hivFact1 = new Fact({
    comment: "HIV (Human Immunodeficiency Virus) is a virus that infects the immune system, decreasing its ability to fight off other infections and diseases. The first known human to become infected with HIV was a citizen of the Democratic Republic of the Congo whose blood was collected and tested in 1959. Scientists believe the first human infection may have occurred in the late 1940s or early 50s.",
    image: "https://c2.staticflickr.com/4/3551/3463183104_2fa0c1b251_z.jpg?zz=1"
  });

  var hivFact2 = new Fact({
    comment: "As of 2013, there were 35.0 million people living with HIV around the globe, up from 29.8 million in 2001. Scientists attribute these staggering HIV statistics to new infections, but also to general population growth and the fact that research and treatments have allowed those with HIV to live longer lives.",
    image: "http://www.foundcare.org/cache.trustedpartner.com/images/library/Foundcare2010/Content/globe1.jpg"
  });

  var hivFact3 = new Fact({
    comment: "About 30 million people have died from HIV/AIDS-related causes since its discovery in 1981. Geographically, the worst AIDS epidemic is in sub-Sahara Africa, with approximately 65% of all cases located there. Almost 90% of children with HIV live in sub-Sahara Africa.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/HIV_in_Africa_2011.svg/2000px-HIV_in_Africa_2011.svg.png"
  });

  var hivFact4 = new Fact({
    comment: "In 1988, DC Comics introduced a villain named “Hemo-Goblin.” The HIV-positive vampire was created by a group of white supremacists and used to infect minorities. Not surprisingly, Hemo-Goblin wasn’t much of a fan favorite and the character appeared in only one issue of The New Guardians.",
    image: "http://vignette4.wikia.nocookie.net/marvel_dc/images/0/0d/Hemo-Goblin_01.jpg/revision/latest?cb=20091006193609"
  });

  var hivFact5 = new Fact({
    comment: "Two strains of HIV have been identified: HIV-1 (from the Central Common Chimpanzee) and HIV-2 (from the Sooty Mangabey monkey). HIV-1 is more virulent, more easily transmitted, and is the cause of the vast majority of global HIV infections. HIV-2 is harder to transmit and is mainly confined to West Africa.",
    image: "http://www.awf.org/sites/default/files/media/gallery/wildlife/Chimpanzee/chimp_Craig_R_Sholley.jpg?itok=4QfFXY3F"
  });

  var smallPox = new Disease({
    name: "smallPox",
    nineteenthCentury: [{
                          name: "UK", 
                          coords: {lat: 55.378051, 
                                   lng: -3.435973},
                          mortality: "medium"             
                          },  
                            
                          { 
                            name: "France", 
                            coords: {lat: 46.227638, 
                                     lng: 2.213749},
                            mortality: "medium"             
                          },

                          {
                            name: "Spain", 
                            coords: {lat: 40.463667, 
                                    lng: -3.74922},
                            mortality: "medium"             
                          },

                           {
                             name: "USA", 
                             coords: {lat: 37.09024, 
                                      lng: -95.712891},
                             mortality: "medium"             
                           },
                           
                           {
                             name: "South Africa", 
                             coords: {lat: -30.559482, 
                                      lng: 22.937506},
                             mortality: "high"             
                           },

                           {
                             name: "DR Congo", 
                             coords: {lat: -2.930652, 
                                      lng: 23.285279},
                             mortality: "high"
                           },

                            {
                              name: "Russia", 
                              coords: {lat: 62.333724,  
                                       lng: 92.189755},
                              mortality: "medium"             
                            },

                            {
                              name: "India", 
                              coords: {lat: 20.593684, 
                                      lng: 78.96288},
                              mortality: "medium"             
                            },

                          {
                            name: "Argentina", 
                            coords: {lat: -38.416097, 
                                     lng: -63.616672},
                            mortality: "medium"             
                          },
                          
                          {
                            name: "Brazil", 
                            coords: {lat: -14.235004, 
                                     lng:  -51.92528},
                            mortality: "medium"             
                          },

                          {
                            name: "Mexico", 
                            coords: {lat: 23.634501, 
                                     lng: -102.552784},
                            mortality: "medium"             
                          },
                           
                          {
                            name: "China", 
                            coords: {lat: 34.560541,  
                                     lng: 102.994444},
                            mortality: "medium"             
                          }],
   
    twentiethCentury: [{
                         name: "UK", 
                         coords: {lat: 55.378051, 
                                  lng: -3.435973},
                         mortality: "none"             
                         },  
                           
                         { 
                           name: "France", 
                           coords: {lat: 46.227638, 
                                    lng: 2.213749},
                           mortality: "none"             
                         },

                         {
                           name: "Spain", 
                           coords: {lat: 40.463667, 
                                   lng: -3.74922},
                           mortality: "none"             
                         },

                          {
                            name: "USA", 
                            coords: {lat: 37.09024, 
                                     lng: -95.712891},
                            mortality: "none"             
                          },
                          
                          {
                            name: "South Africa", 
                            coords: {lat: -30.559482, 
                                     lng: 22.937506},
                            mortality: "low"             
                          },

                          {
                            name: "DR Congo", 
                            coords: {lat: -2.930652, 
                                     lng: 23.285279},
                            mortality: "medium"
                          },

                         {
                           name: "Russia", 
                           coords: {lat: 62.333724,  
                                    lng: 92.189755},
                           mortality: "low"             
                         },

                         {
                           name: "India", 
                           coords: {lat: 20.593684, 
                                   lng: 78.96288},
                           mortality: "none"             
                         },

                         {
                           name: "Argentina", 
                           coords: {lat: -38.416097, 
                                    lng: -63.616672},
                           mortality: "low"             
                         },
                       
                         {
                           name: "Brazil", 
                           coords: {lat: -14.235004, 
                                    lng:  -51.92528},
                           mortality: "low"             
                         },

                         {
                           name: "Mexico", 
                           coords: {lat: 23.634501, 
                                    lng: -102.552784},
                           mortality: "low"             
                         },
                          
                         {
                           name: "China", 
                           coords: {lat: 34.560541,  
                                    lng: 102.994444},
                           mortality: "low"             
                         }],

          presentDay: [{
                         name: "UK", 
                         coords: {lat: 55.378051, 
                                  lng: -3.435973},
                         mortality: "none"             
                         },  
                           
                         { 
                           name: "France", 
                           coords: {lat: 46.227638, 
                                    lng: 2.213749},
                           mortality: "none"             
                         },

                         {
                           name: "Spain", 
                           coords: {lat: 40.463667, 
                                   lng: -3.74922},
                           mortality: "none"             
                         },

                          {
                            name: "USA", 
                            coords: {lat: 37.09024, 
                                     lng: -95.712891},
                            mortality: "none"             
                          },
                          
                          {
                            name: "South Africa", 
                            coords: {lat: -30.559482, 
                                     lng: 22.937506},
                            mortality: "none"             
                          },

                          {
                            name: "DR Congo", 
                            coords: {lat: -2.930652, 
                                     lng: 23.285279},
                            mortality: "none"
                          },

                           {
                             name: "Russia", 
                             coords: {lat: 62.333724,  
                                      lng: 92.189755},
                             mortality: "none"             
                           },

                           {
                             name: "India", 
                             coords: {lat: 20.593684, 
                                     lng: 78.96288},
                             mortality: "none"             
                           },

                         {
                           name: "Argentina", 
                           coords: {lat: -38.416097, 
                                    lng: -63.616672},
                           mortality: "none"             
                         },
                         
                         {
                           name: "Brazil", 
                           coords: {lat: -14.235004, 
                                    lng:  -51.92528},
                           mortality: "none"             
                         },

                         {
                           name: "Mexico", 
                           coords: {lat: 23.634501, 
                                    lng: -102.552784},
                           mortality: "none"             
                         },
                          
                         {
                           name: "China", 
                           coords: {lat: 34.560541,  
                                    lng: 102.994444},
                           mortality: "none"             
                         }]
                      });

var tuberculosis = new Disease({
  name: "Tuberculosis",        
  nineteenthCentury: [{
                        name: "UK", 
                        coords: {lat: 55.378051, 
                                 lng: -3.435973},
                        mortality: "high"             
                        },  
                          
                        { 
                          name: "France", 
                          coords: {lat: 46.227638, 
                                   lng: 2.213749},
                          mortality: "high"             
                        },

                        {
                          name: "Spain", 
                          coords: {lat: 40.463667, 
                                  lng: -3.74922},
                          mortality: "high"             
                        },

                         {
                           name: "USA", 
                           coords: {lat: 37.09024, 
                                    lng: -95.712891},
                           mortality: "high"             
                         },
                         
                         {
                           name: "South Africa", 
                           coords: {lat: -30.559482, 
                                    lng: 22.937506},
                           mortality: "medium"             
                         },

                         {
                           name: "DR Congo", 
                           coords: {lat: -2.930652, 
                                    lng: 23.285279},
                           mortality: "low"
                         },

                          {
                            name: "Russia", 
                            coords: {lat: 62.333724,  
                                     lng: 92.189755},
                            mortality: "none"             
                          },

                          {
                            name: "India", 
                            coords: {lat: 20.593684, 
                                    lng: 78.96288},
                            mortality: "high"             
                          },

                        {
                          name: "Argentina", 
                          coords: {lat: -38.416097, 
                                   lng: -63.616672},
                          mortality: "medium"             
                        },
                        
                        {
                          name: "Brazil", 
                          coords: {lat: -14.235004, 
                                   lng:  -51.92528},
                          mortality: "medium"             
                        },

                        {
                          name: "Mexico", 
                          coords: {lat: 23.634501, 
                                   lng: -102.552784},
                          mortality: "medium"             
                        },
                         
                        {
                          name: "China", 
                          coords: {lat: 1.352083, 
                                   lng: 103.819836},
                          mortality: "low"             
                        }],
    
    twentiethCentury: [{
                        name: "UK", 
                        coords: {lat: 55.378051, 
                                 lng: -3.435973},
                        mortality: "none"             
                        },  
                          
                        { 
                          name: "France", 
                          coords: {lat: 46.227638, 
                                   lng: 2.213749},
                          mortality: "none"             
                        },

                        {
                          name: "Spain", 
                          coords: {lat: 40.463667, 
                                  lng: -3.74922},
                          mortality: "none"             
                        },

                         {
                           name: "USA", 
                           coords: {lat: 37.09024, 
                                    lng: -95.712891},
                           mortality: "none"             
                         },
                         
                         {
                           name: "South Africa", 
                           coords: {lat: -30.559482, 
                                    lng: 22.937506},
                           mortality: "medium"             
                         },

                         {
                           name: "DR Congo", 
                           coords: {lat: -2.930652, 
                                    lng: 23.285279},
                           mortality: "low"
                         },

                          {
                            name: "Russia", 
                            coords: {lat: 62.333724,  
                                     lng: 92.189755},
                            mortality: "low"             
                          },

                          {
                            name: "India", 
                            coords: {lat: 20.593684, 
                                    lng: 78.96288},
                            mortality: "high"             
                          },

                        {
                          name: "Argentina", 
                          coords: {lat: -38.416097, 
                                   lng: -63.616672},
                          mortality: "low"             
                        },
                        
                        {
                          name: "Brazil", 
                          coords: {lat: -14.235004, 
                                   lng:  -51.92528},
                          mortality: "low"             
                        },

                        {
                          name: "Mexico", 
                          coords: {lat: 23.634501, 
                                   lng: -102.552784},
                          mortality: "low"             
                        },
                         
                        {
                          name: "China", 
                          coords: {lat: 1.352083, 
                                   lng: 103.819836},
                          mortality: "medium"             
                        }],

          presentDay: [{
                        name: "UK", 
                        coords: {lat: 55.378051, 
                                 lng: -3.435973},
                        mortality: "none"             
                        },  
                        
                      { 
                        name: "France", 
                        coords: {lat: 46.227638, 
                                 lng: 2.213749},
                        mortality: "none"             
                      },

                      {
                        name: "Spain", 
                        coords: {lat: 40.463667, 
                                lng: -3.74922},
                        mortality: "none"             
                      },

                       {
                         name: "USA", 
                         coords: {lat: 37.09024, 
                                  lng: -95.712891},
                         mortality: "none"             
                       },
                       
                       {
                         name: "South Africa", 
                         coords: {lat: -30.559482, 
                                  lng: 22.937506},
                         mortality: "medium"             
                       },

                       {
                         name: "DR Congo", 
                         coords: {lat: -2.930652, 
                                  lng: 23.285279},
                         mortality: "medium"
                       },

                        {
                          name: "Russia", 
                          coords: {lat: 62.333724,  
                                   lng: 92.189755},
                          mortality: "low"             
                        },

                        {
                          name: "India", 
                          coords: {lat: 20.593684, 
                                  lng: 78.96288},
                          mortality: "medium"             
                        },

                      {
                        name: "Argentina", 
                        coords: {lat: -38.416097, 
                                 lng: -63.616672},
                        mortality: "none"             
                      },
                      
                      {
                        name: "Brazil", 
                        coords: {lat: -14.235004, 
                                 lng:  -51.92528},
                        mortality: "none"             
                      },

                      {
                        name: "Mexico", 
                        coords: {lat: 23.634501, 
                                 lng: -102.552784},
                        mortality: "none"             
                      },
                       
                      {
                        name: "China", 
                        coords: {lat: 1.352083, 
                                 lng: 103.819836},
                        mortality: "none"             
                      }],
                    });


var zika = new Disease({
  name: "zika",
  nineteenthCentury: [],
  twentiethCentury: [ { 
                        name: "Uganda", 
                        coords: {lat: 1.373333, 
                                 lng: 32.290275},
                        mortality: "low"             
                      },

                      {
                        name: "Nigeria", 
                        coords: {lat: 9.081999, 
                                lng: 8.675277},
                        mortality: "low"             
                      },

                      {
                        name: "Sierra Leone", 
                        coords: {lat: 8.460555, 
                                lng: -11.779889},
                        mortality: "low"             
                      },
                       
                      {
                        name: "Senegal", 
                        coords: {lat: 14.497401, 
                                lng: -14.452362},
                        mortality: "low"             
                      },

                      {
                        name: "Pakistan", 
                        coords: {lat: 30.375321, 
                                lng: 69.345116},
                        mortality: "low"
                      },

                      {
                        name: "Malaysia", 
                        coords: {lat: 4.210484,  
                                lng: 101.975766},
                        mortality: "low"             
                      },

                      {
                        name: "Indonesia", 
                        coords: {lat: -0.789275, 
                                lng: 113.921327},
                        mortality: "low"             
                      } ],

          presentDay: [ { 
                          name: "Mexico", 
                          coords: {lat: 23.634501, 
                                  lng: -102.552784},
                          mortality: "medium"             
                        },

                        {
                          name: "Brazil", 
                          coords: {lat: -14.235004, 
                                  lng: -51.92528},
                          mortality: "high"             
                        },

                        {
                          name: "USA", 
                          coords: {lat: 37.09024, 
                                  lng: -95.712891},
                          mortality: "low"             
                        },
                         
                        {
                          name: "Ecuador", 
                          coords: {lat: -1.831239, 
                                  lng: -78.183406},
                          mortality: "high"             
                        },

                        {
                          name: "Columbia", 
                          coords: {lat: 4.570868, 
                                  lng: -74.297333},
                          mortality: "high"
                        },

                        {
                          name: "Bolivia", 
                          coords: {lat: -16.290154,  
                                  lng: -63.588653},
                          mortality: "high"             
                        },

                        {
                          name: "El Salvador", 
                          coords: {lat: 13.794185, 
                                  lng: -88.89653},
                          mortality: "high"             
                        },

                        { 
                          name: "Costa Rica", 
                          coords: {lat: 9.748917, 
                                  lng:  -83.753428},
                          mortality: "high"             
                        },

                        {
                          name: "Paraguay", 
                          coords: {lat: -23.442503, 
                                  lng: -58.443832},
                          mortality: "high"             
                        },

                        {
                          name: "Thailand", 
                          coords: {lat: 15.870032, 
                                  lng: 100.992541},
                          mortality: "medium"             
                        },
                         
                        {
                          name: "Indonesia", 
                          coords: {lat: -0.789275, 
                                  lng: 113.921327},
                          mortality: "medium"             
                        },

                        {
                          name: "Philippines", 
                          coords: {lat: 12.879721, 
                                  lng: 121.774017},
                          mortality: "medium"
                        },

                        {
                          name: "Malaysia", 
                          coords: {lat: 4.210484,  
                                  lng: 101.975766},
                          mortality: "medium"             
                        },

                        { 
                          name: "Cambodia", 
                          coords: {lat: 12.565679, 
                                  lng: 104.990963},
                          mortality: "medium"             
                        },

                        {
                          name: "Pakistan", 
                          coords: {lat: 30.375321, 
                                  lng: 69.345116},
                          mortality: "low"             
                        },

                        {
                          name: "Nigeria", 
                          coords: {lat: 9.081999, 
                                  lng: 8.675277},
                          mortality: "low"             
                        },
                         
                        {
                          name: "Sierra Leone", 
                          coords: {lat: 8.460555, 
                                  lng: -11.779889},
                          mortality: "low"             
                        },

                        {
                          name: "Senegal", 
                          coords: {lat: 14.497401, 
                                  lng: -14.452362},
                          mortality: "low"
                        },

                        {
                          name: "Uganda", 
                          coords: {lat: 1.373333,  
                                  lng: 32.290275},
                          mortality: "low"             
                        },

                        {
                          name: "China", 
                          coords: {lat: 35.86166, 
                                  lng: 104.195397},
                          mortality: "low"             
                        },

                        {
                          name: "India", 
                          coords: {lat: 20.593684, 
                                  lng: 78.96288},
                          mortality: "low"             
                        },

                        {
                          name: "Russia", 
                          coords: {lat: 61.52401, 
                                  lng: 105.318756},
                          mortality: "low"             
                        },

                        {
                          name: "Spain", 
                          coords: {lat: 40.463667, 
                                  lng: -3.74922},
                          mortality: "low"             
                        },

                        {
                          name: "Germany", 
                          coords: {lat: 51.165691, 
                                  lng: 10.451526},
                          mortality: "low"             
                        } ]    
});

var hiv = new Disease({
  name: "HIV",   
  nineteenthCentury: [],     
  twentiethCentury: [ {
                        name: "UK", 
                        coords: {lat: 55.378051, 
                                lng: -3.435973},
                        mortality: "medium"             
                      },  
                        
                      { 
                        name: "France", 
                        coords: {lat: 46.227638, 
                                lng: 2.213749},
                        mortality: "medium"             
                      },

                      {
                        name: "Spain", 
                        coords: {lat: 40.463667, 
                                lng: -3.74922},
                        mortality: "medium"             
                      },

                      {
                        name: "USA", 
                        coords: {lat: 37.09024, 
                                lng: -95.712891},
                        mortality: "high"             
                      },
                       
                      {
                        name: "South Africa", 
                        coords: {lat: -30.559482, 
                                lng: 22.937506},
                        mortality: "high"             
                      },

                      {
                        name: "DR Congo", 
                        coords: {lat: -2.930652, 
                                lng: 23.285279},
                        mortality: "medium"
                      },

                      {
                        name: "Russia", 
                        coords: {lat: 62.333724,  
                                lng: 92.189755},
                        mortality: "high"             
                      },

                      {
                        name: "India", 
                        coords: {lat: 20.593684, 
                                lng: 78.96288},
                        mortality: "high"             
                      },

                      {
                        name: "Argentina", 
                        coords: {lat: -38.416097, 
                                lng: -63.616672},
                        mortality: "medium"             
                      },
                      
                      {
                        name: "Brazil", 
                        coords: {lat: -14.235004, 
                                lng:  -51.92528},
                        mortality: "high"             
                      },

                      {
                        name: "Mexico", 
                        coords: {lat: 23.634501, 
                                lng: -102.552784},
                        mortality: "medium"             
                      },
                       
                      {
                        name: "China", 
                        coords: {lat: 1.352083, 
                                lng: 103.819836},
                        mortality: "high"             
                      },

                      {
                        name: "Italy", 
                        coords: {lat: 41.87194, 
                                lng: 12.56738},
                        mortality: "medium"             
                      },
                      
                      {
                        name: "Portugal", 
                        coords: {lat: 39.399872, 
                                lng: -8.224454},
                        mortality: "low"             
                      },

                      {
                        name: "Germany", 
                        coords: {lat: 51.165691, 
                                lng: 10.451526},
                        mortality: "medium"             
                      },

                      {
                        name: "Poland", 
                        coords: {lat: 51.919438, 
                                lng: 19.145136},
                        mortality: "low"             
                      },

                      {
                        name: "Ukraine", 
                        coords: {lat: 48.379433, 
                                lng: 31.16558},
                        mortality: "medium"             
                      },

                      {
                        name: "Belarus", 
                        coords: {lat: 53.709807, 
                                lng: 27.953389},
                        mortality: "low"             
                      },

                      {
                        name: "Romania", 
                        coords: {lat: 45.943161, 
                                lng: 24.96676},
                        mortality: "low"             
                      },

                      {
                        name: "Ireland", 
                        coords: {lat: 53.41291, 
                                lng: -8.24389},
                        mortality: "low"             
                      },

                      {
                        name: "Lithuania", 
                        coords: {lat: 55.169438, 
                                lng: 23.881275},
                        mortality: "high"             
                      },

                      {
                        name: "Canada", 
                        coords: {lat: 56.130366, 
                                lng: -106.346771},
                        mortality: "medium"             
                      },

                      {
                        name: "Australia", 
                        coords: {lat: -25.274398, 
                                lng: 133.775136},
                        mortality: "low"             
                      },
                       
                      {
                        name: "Sweden", 
                        coords: {lat: 60.128161, 
                                lng: 18.643501},
                        mortality: "low"             
                      },

                      {
                        name: "Egypt", 
                        coords: {lat: 26.820553, 
                                lng: 30.802498},
                        mortality: "low"             
                      },

                      {
                        name: "Algeria", 
                        coords: {lat: 28.033886, 
                                lng: 1.659626},
                        mortality: "low"             
                      },

                      {
                        name: "Morocco", 
                        coords: {lat: 31.791702, 
                                lng: -7.09262},
                        mortality: "low"             
                      },

                      {
                        name: "Tanzania", 
                        coords: {lat: -6.369028, 
                                lng: 34.888822},
                        mortality: "high"             
                      },
                       
                      {
                        name: "Zambia", 
                        coords: {lat: -13.133897, 
                                lng: 27.849332},
                        mortality: "medium"             
                      },

                      {
                        name: "Mozambique", 
                        coords: {lat: -18.665695, 
                                lng: 35.529562},
                        mortality: "high"             
                      },

                      {
                        name: "Zimbabwe", 
                        coords: {lat: -19.015438, 
                                lng: 29.154857},
                        mortality: "high"             
                      },
                       
                      {
                        name: "Kenya", 
                        coords: {lat: -0.023559, 
                                lng: 37.906193},
                        mortality: "high"             
                      },

                      {
                        name: "Ethiopia", 
                        coords: {lat: 9.145, 
                                lng: 40.489673},
                        mortality: "high"             
                      },

                      {
                        name: "Sudan", 
                        coords: {lat: 12.862807, 
                                lng: 30.217636},
                        mortality: "high"             
                      },

                      {
                        name: "Somalia", 
                        coords: {lat: 5.152149, 
                                lng: 46.199616},
                        mortality: "high"             
                      },

                      {
                        name: "Botswana", 
                        coords: {lat: -22.328474, 
                                lng: 24.684866},
                        mortality: "high"             
                      },

                      {
                        name: "Angola", 
                        coords: {lat: -11.202692, 
                                lng: 17.873887},
                        mortality: "medium"             
                      } ],

          presentDay: [ {
                          name: "UK", 
                          coords: {lat: 55.378051, 
                                  lng: -3.435973},
                          mortality: "low"       
                        },  
                          
                        { 
                          name: "France", 
                          coords: {lat: 46.227638, 
                                  lng: 2.213749},
                          mortality: "low"      
                        },

                        {
                          name: "Spain", 
                          coords: {lat: 40.463667, 
                                  lng: -3.74922},
                          mortality: "low"       
                        },

                        {
                          name: "USA", 
                          coords: {lat: 37.09024, 
                                  lng: -95.712891},
                          mortality: "low"
                        },
                         
                        {
                          name: "South Africa", 
                          coords: {lat: -30.559482, 
                                  lng: 22.937506},
                          mortality: "high"
                        },

                        {
                          name: "DR Congo", 
                          coords: {lat: -2.930652, 
                                  lng: 23.285279},
                          mortality: "medium"
                        },

                        {
                          name: "Russia", 
                          coords: {lat: 62.333724,  
                                  lng: 92.189755},
                          mortality: "medium"
                        },

                        {
                          name: "India", 
                          coords: {lat: 20.593684, 
                                  lng: 78.96288},
                          mortality: "low"
                        },

                        {
                          name: "Argentina", 
                          coords: {lat: -38.416097, 
                                  lng: -63.616672},
                          mortality: "low"
                        },
                        
                        {
                          name: "Brazil", 
                          coords: {lat: -14.235004, 
                                  lng:  -51.92528},
                          mortality: "low"
                        },

                        {
                          name: "Mexico", 
                          coords: {lat: 23.634501, 
                                  lng: -102.552784},
                          mortality: "low"
                        },
                         
                        {
                          name: "China", 
                          coords: {lat: 1.352083, 
                                  lng: 103.819836},
                          mortality: "low"
                        },

                        {
                          name: "Italy", 
                          coords: {lat: 41.87194, 
                                  lng: 12.56738},
                          mortality: "low"
                        },
                        
                        {
                          name: "Portugal", 
                          coords: {lat: 39.399872, 
                                  lng: -8.224454},
                          mortality: "low"
                        },

                        {
                          name: "Germany", 
                          coords: {lat: 51.165691, 
                                  lng: 10.451526},
                          mortality: "low"
                        },

                        {
                          name: "Poland", 
                          coords: {lat: 51.919438, 
                                  lng: 19.145136},
                          mortality: "low"
                        },

                        {
                          name: "Ukraine", 
                          coords: {lat: 48.379433, 
                                  lng: 31.16558},
                          mortality: "low"
                        },

                        {
                          name: "Belarus", 
                          coords: {lat: 53.709807, 
                                  lng: 27.953389},
                          mortality: "low"
                        },

                        {
                          name: "Romania", 
                          coords: {lat: 45.943161, 
                                  lng: 24.96676},
                          mortality: "low"
                        },

                        {
                          name: "Ireland", 
                          coords: {lat: 53.41291, 
                                  lng: -8.24389},
                          mortality: "low"
                        },

                        {
                          name: "Lithuania", 
                          coords: {lat: 55.169438, 
                                  lng: 23.881275},
                          mortality: "low"
                        },

                        {
                          name: "Canada", 
                          coords: {lat: 56.130366, 
                                  lng: -106.346771},
                          mortality: "low"
                        },

                        {
                          name: "Australia", 
                          coords: {lat: -25.274398, 
                                  lng:  133.775136},
                          mortality: "low"
                        },
                         
                        {
                          name: "Sweden", 
                          coords: {lat: 60.128161, 
                                  lng: 18.643501},
                          mortality: "low" 
                        },

                        {
                          name: "Egypt", 
                          coords: {lat: 26.820553, 
                                  lng: 30.802498},
                          mortality: "low"  
                        },

                        {
                          name: "Algeria", 
                          coords: {lat: 28.033886, 
                                  lng: 1.659626},
                          mortality: "low"
                        },

                        {
                          name: "Morocco", 
                          coords: {lat: 31.791702, 
                                  lng: -7.09262},
                          mortality: "low"
                        },

                        {
                          name: "Tanzania", 
                          coords: {lat: -6.369028, 
                                  lng: 34.888822},
                          mortality: "medium"
                        },
                         
                        {
                          name: "Zambia", 
                          coords: {lat: -13.133897, 
                                  lng: 27.849332},
                          mortality: "medium"
                        },

                        {
                          name: "Mozambique", 
                          coords: {lat: -18.665695, 
                                  lng: 35.529562},
                          mortality: "high"
                        },

                        {
                          name: "Zimbabwe", 
                          coords: {lat: -19.015438, 
                                  lng: 29.154857},
                          mortality: "high"
                        },
                         
                        {
                          name: "Kenya", 
                          coords: {lat: -0.023559, 
                                  lng: 37.906193},
                          mortality: "medium"
                        },

                        {
                          name: "Ethiopia", 
                          coords: {lat: 9.145, 
                                  lng: 40.489673},
                          mortality: "high"
                        },

                        {
                          name: "Sudan", 
                          coords: {lat: 12.862807, 
                                  lng: 30.217636},
                          mortality: "medium"
                        },

                        {
                          name: "Somalia", 
                          coords: {lat: 5.152149, 
                                  lng: 46.199616},
                          mortality: "medium"
                        },

                        {
                          name: "Botswana", 
                          coords: {lat: -22.328474, 
                                  lng: 24.684866},
                          mortality: "high"
                        },

                        {
                          name: "Angola", 
                          coords: {lat: -11.202692, 
                                  lng: 17.873887},
                          mortality: "high"
                        } ]
});

smallPox.addFact(spFact1);
smallPox.addFact(spFact2);
smallPox.addFact(spFact3);
smallPox.addFact(spFact4);
smallPox.addFact(spFact5);

tuberculosis.addFact(tbFact1);
tuberculosis.addFact(tbFact2);
tuberculosis.addFact(tbFact3);
tuberculosis.addFact(tbFact4);
tuberculosis.addFact(tbFact5);

zika.addFact(zikaFact1);
zika.addFact(zikaFact2);
zika.addFact(zikaFact3);
zika.addFact(zikaFact4);
zika.addFact(zikaFact5);

hiv.addFact(hivFact1);
hiv.addFact(hivFact2);
hiv.addFact(hivFact3);
hiv.addFact(hivFact4);
hiv.addFact(hivFact5);

return [smallPox, tuberculosis, zika, hiv];

}

module.exports = Diseases;

