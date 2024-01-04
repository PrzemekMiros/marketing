window.addEventListener("load", function () {
CookieConsent.run({
    page_scripts: true,
    guiOptions: {
        consentModal: {
            layout: "cloud",
            position: "bottom center",
            equalWeightButtons: false,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },  
    categories: {
        necessary: {
            enabled: true, 
            readOnly: true  
        },
        analytics: {
            enabled: true
        }
    },
    language: {
        default: "pl",
        autoDetect: "browser",
        translations: {
            pl: {
                consentModal: {
                    title: "Ta strona używa plików cookies",
                    description: "Używam plików cookie do analizowania ruchu na stronie. Możesz wyłączyć skrypty śledzące w ustawieniach",
                    acceptAllBtn: "Akceptuj",
                    showPreferencesBtn: "Ustawienia"
                },
                preferencesModal: {
                    title: "Ustawienia plików cookies",
                    acceptAllBtn: "Akceptuj",
                    savePreferencesBtn: "Zapisz ustawienia",
                    closeIconLabel: "Zamknij",
                    serviceCounterLabel: "Service|Services",
                    sections: [
                        {
                            title: "Wykorzystanie plików cookie",
                            description: "Ponieważ szanuje Twoje prawo do prywatności, możesz nie zezwalać na niektóre rodzaje plików cookie. Kliknij nagłówki kategorii, żeby zmienić domyślne ustawienia."
                        },
                        {
                            title: "Niezbędne pliki cookie<span class=\"pm__badge\">Zawsze aktywne</span>",
                            description: "Zazwyczaj są one ustawiane wyłącznie w odpowiedzi na podejmowane przez Ciebie działania, które są równoznaczne z żądaniem usług, jak np. ustawienie preferencji dotyczących prywatności, logowanie czy wypełnianie formularzy. Możesz ustawić swoją przeglądarkę tak, aby blokowała lub ostrzegała Cię o tych plikach cookie, ale niektóre części witryny nie będą wtedy działać. Te pliki cookie nie przechowują żadnych danych osobowych.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analityczne pliki cookie",
                            description: "Te pliki cookie mogą być ustawiane za pośrednictwem naszej witryny przez naszych partnerów reklamowych. Mogą być one wykorzystywane przez te firmy do tworzenia profilu Twoich zainteresowań i wyświetlania odpowiednich reklam w innych witrynach. Nie przechowują bezpośrednio danych osobowych, ale opierają się na jednoznacznej identyfikacji Twojej przeglądarki i urządzenia internetowego. ",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Więcej informacji",
                            description: "W przypadku jakichkolwiek pytań związanych z polityką dotyczącą plików cookie, proszę <a class=\"cc__link\" href=\"mailto:kontakt@futurewebstudio.pl\">skontaktuj się</a>."
                        }
                    ]
                }
            }
        }
    }
});
});
