const app = Vue.createApp({
    data() {
        return {
            attachment: [
                'bi-image-fill',
                'bi-sticky-fill',
                'bi-camera-fill',
                'bi-file-earmark',
                'bi-person-fill',
                'bi-bar-chart-fill',
            ],
            emoticons: [
                '\u{1F600}', 
                '\u{1F601}', 
                '\u{1F602}', 
                '\u{1F603}', 
                '\u{1F604}', 
                '\u{1F605}', 
                '\u{1F606}', 
                '\u{1F607}',
                '\u{1F608}', 
                '\u{1F609}', 
                '\u{1F60A}', 
                '\u{1F60B}', 
                '\u{1F60C}', 
                '\u{1F60D}', 
                '\u{1F60E}', 
                '\u{1F60F}',
                '\u{1F610}', 
                '\u{1F611}', 
                '\u{1F612}', 
                '\u{1F613}', 
                '\u{1F614}', 
                '\u{1F615}', 
                '\u{1F616}', 
                '\u{1F617}',
                '\u{1F618}', 
                '\u{1F619}', 
                '\u{1F61A}', 
                '\u{1F61B}', 
                '\u{1F61C}', 
                '\u{1F61D}', 
                '\u{1F61E}', 
                '\u{1F61F}',
                '\u{1F620}', 
                '\u{1F621}', 
                '\u{1F622}', 
                '\u{1F623}', 
                '\u{1F624}', 
                '\u{1F625}', 
                '\u{1F626}', 
                '\u{1F627}',
                '\u{1F628}', 
                '\u{1F629}',
                '\u{1F62A}', 
                '\u{1F62B}', 
                '\u{1F62C}', 
                '\u{1F62D}', 
                '\u{1F62E}', 
                '\u{1F62F}',
                '\u{1F630}', 
                '\u{1F631}', 
                '\u{1F632}', 
                '\u{1F633}', 
                '\u{1F634}', 
                '\u{1F635}', 
                '\u{1F636}', 
                '\u{1F637}',
                '\u{1F638}', 
                '\u{1F639}',
                '\u{1F63A}', 
                '\u{1F63B}', 
                '\u{1F63C}', 
                '\u{1F63D}', 
                '\u{1F63E}', 
                '\u{1F63F}',
                '\u{1F640}', 
                '\u{1F641}', 
                '\u{1F642}', 
                '\u{1F643}', 
                '\u{1F644}', 
                '\u{1F645}', 
                '\u{1F646}', 
                '\u{1F647}',
                '\u{1F648}', 
                '\u{1F649}',
                '\u{1F64A}', 
                '\u{1F64B}', 
                '\u{1F64C}', 
                '\u{1F64D}', 
                '\u{1F64E}', 
                '\u{1F64F}',
            ],
            user: {
                name: 'Mandrake',
                avatar: 'img/Logo maglietta - Versione finale.png',
            },
            activeIndex: 0,
            newMessage: '',
            searchStr: '',
            dateNow: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]


        };
    },
    methods: {
        activeChat(index) {
            this.activeIndex = this.contacts.indexOf(index);
            
        },
        addMessage(nuovoMessaggio) {
            let newMex = {
                date: this.returnDate(),
                message: nuovoMessaggio,
                status: 'sent',
            };
            this.contacts[this.activeIndex].messages.push(newMex);
            this.newMessage = '';
            setTimeout(this.pcMessage, 1000);
        },
        pcMessage() {
            let pcMex = {
                date: this.returnDate(),
                message: 'danzi mai con il diavolo nel pallido plenilunio?!',
                status: 'received',
            };
            this.contacts[this.activeIndex].messages.push(pcMex);
        },
        returnDate() {
            return luxon.DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
        },
        deleteItem(index) {
            this.contacts[this.activeIndex].messages.splice(index, 1);
        },
        addEmoticon(index) {
            this.newMessage += ` ${this.emoticons[index]} `
        },
        
    },
    computed: {
        filter() {
            return this.contacts.filter((contacts) => {
                return contacts.name.toLowerCase().includes(this.searchStr.toLowerCase());
            },
            
        )},
    },
});


app.mount("#app");