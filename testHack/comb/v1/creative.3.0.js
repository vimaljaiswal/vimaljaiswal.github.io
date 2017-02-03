var EXPO_CREATIVE_CONFIG_JSON = {
    Core: {
        transitions: {
            teaser2VPM: {
                duration: 3e3
                , easing: "Sine.easeIn"
            }
            , teaser2VPMFast: {
                duration: 500
                , easing: "Sine.easeIn"
            }
            , teaserToCollapsed: {
                duration: 500
                , easing: "Sine.easeIn"
            }
            , vpm2Teaser: {
                duration: 500
                , easing: "Sine.easeIn"
            }
            , vpm2TeaserFast: {
                duration: 20
                , easing: "Sine.easeIn"
            }
            , teaser2Collapsed: {
                duration: 500
                , easing: "Sine.easeIn"
            }
            , collapsedTeaser2vpm: {
                duration: 3e3
                , easing: "Sine.easeIn"
            }
            , collapsedTeaser2vpmFast: {
                duration: 500
                , easing: "Sine.easeIn"
            }
            , vpm2collapsedTeaser: {
                duration: 500
                , easing: "Sine.easeIn"
            }
            , vpm2collapsedTeaserFast: {
                duration: 20
                , easing: "Sine.easeIn"
            }
            , vpm2MainUnit: {
                duration: 500
                , easing: "Sine.easeIn"
            }
            , MainUnit2collapsedTeaserFast: {
                duration: 20
                , easing: "Sine.easeIn"
            }
            , MainUnit2TeaserFast: {
                duration: 20
                , easing: "Sine.easeIn"
            }
        }
        , sound: {
            start: 2e3
            , end: 4e3
            , level: "0.5"
        }
        , states: {
            TEASER: {}
            , VPM: {
                delayTime: 4400
            }
        }
    }
    , VideoPlayer: {}
    , Close: {}
    , Localization: {
        locales: {
            ar: {
                name: "Arabic"
                , direction: "right-to-left"
            }
            , zh: {
                name: "Cantonese"
                , direction: "left-to-right"
            }
            , de: {
                name: "German"
                , direction: "left-to-right"
            }
            , es: {
                name: "Spanish"
                , direction: "left-to-right"
            }
            , "es-es": {
                name: "Spanish"
                , country: "Spain"
                , direction: "left-to-right"
            }
            , "es-mx": {
                name: "Spanish"
                , country: "Mexico"
                , direction: "left-to-right"
            }
            , en: {
                name: "English"
                , direction: "left-to-right"
            }
            , "en-us": {
                name: "English"
                , country: "US"
                , direction: "left-to-right"
            }
            , fr: {
                name: "French"
                , direction: "left-to-right"
            }
            , "fr-ca": {
                name: "French"
                , country: "Canada"
                , direction: "left-to-right"
            }
            , "fr-fr": {
                name: "French"
                , country: "France"
                , direction: "left-to-right"
            }
            , hi: {
                name: "Hindi"
                , direction: "left-to-right"
            }
            , id: {
                name: "Indonesian"
                , direction: "left-to-right"
            }
            , it: {
                name: "Italian"
                , direction: "left-to-right"
            }
            , ms: {
                name: "Malaysian"
                , direction: "left-to-right"
            }
            , nl: {
                name: "Dutch"
                , direction: "left-to-right"
            }
            , pt: {
                name: "Portuguese"
                , direction: "left-to-right"
            }
            , th: {
                name: "Thai"
                , direction: "left-to-right"
            }
        }
        , translations: {
            "default": "en"
            , en: {
                explore: {
                    text: "Explore"
                    , fontSize: 12
                    , isFallback: !0
                }
                , "rollover-to-explore": {
                    text: "Rollover to explore"
                    , fontSize: 14
                    , isFallback: !0
                }
                , "tap-to-explore": {
                    text: "Tap to explore"
                    , fontSize: 14
                    , isFallback: !0
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !0
                }
                , "starting-in": {
                    text: "Starting in"
                    , fontSize: 14
                    , isFallback: !0
                }
                , "click-to-expand": {
                    text: "Click to expand"
                    , fontSize: 14
                    , isFallback: !0
                }
                , "explore-more": {
                    text: "Explore more"
                    , fontSize: 16
                    , isFallback: !0
                }
                , "click-to-replay": {
                    text: "Click to replay"
                    , fontSize: 14
                    , isFallback: !0
                }
                , exit: {
                    text: "Exit"
                    , fontSize: 12
                    , isFallback: !0
                }
                , replay: {
                    text: "Replay"
                    , fontSize: 12
                    , isFallback: !0
                }
                , close: {
                    text: "Close"
                    , fontSize: 12
                    , isFallback: !0
                }
                , "click-to-explore-now": {
                    text: "Click to explore now"
                    , fontSize: 14
                    , isFallback: !0
                }
                , "content-starting-in": {
                    text: "Content starting in"
                    , fontSize: 12
                    , isFallback: !0
                }
            }
            , ar: {
                explore: {
                    text: "اكتشف‬"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "مرر الفأرة للاستكشاف‬"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "أنقر للاستكشاف‬"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "يبدأ خلال‬"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "اضغط للتوسيع‬"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "اكتشف المزيد‬"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "اضغط لاعادةالمشاهدة"
                    , fontSize: 14
                    , isFallback: !1
                }
                , exit: {
                    text: "خروج‬"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "اعادة‬"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "اغلاق‬"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "اضغط لاكتشاف المزيد هنا"
                    , fontSize: 18
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "سيبدأ المحتوى خلال‬"
                    , fontSize: 14
                    , isFallback: !1
                }
            }
            , id: {
                explore: {
                    text: "Jelajah"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "Rollover to explore"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "sentuh untuk jelajahi"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "Dimulai dalam"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "Klik untuk memperbesar"
                    , fontSize: 13
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "jelajahi lebih lanjut"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "klik untuk mengulang"
                    , fontSize: 13
                    , isFallback: !1
                }
                , exit: {
                    text: "keluar"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "Memulai ulang"
                    , fontSize: 8
                    , isFallback: !1
                }
                , close: {
                    text: "Tutup"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "Klik untuk menjelajahi"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "konten akan dimulai dalam"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
            , it: {
                explore: {
                    text: "Espandi"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "Espandi qui"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "Scopri"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "Inizia in"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "Clicca per espandere"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "Scopri di più"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "Clicca per rivedere"
                    , fontSize: 14
                    , isFallback: !1
                }
                , exit: {
                    text: "Esci"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "Replay"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "Chiudi"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "Scopri di più"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "Il tuo video partirà in"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
            , fr: {
                explore: {
                    text: "Ouvrir"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "Découvrir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "Découvrir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "Commence dans"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "Agrandir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "Plus de détails"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "Revoir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , exit: {
                    text: "Fermer"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "Rejouer"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "Fermer"
                    , fontSize: 10
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "Cliquer pour voir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "Le contenu commence dans"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
            , zh: {
                explore: {
                    text: "了解更多"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "翻起了解更多"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "按此了解更多"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "開始"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "按此放大廣告"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "了解更多"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "按此重播"
                    , fontSize: 14
                    , isFallback: !1
                }
                , exit: {
                    text: "離開"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "再看一次"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "關閉"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "按此了解更多"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "内容將會呈現"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
            , nl: {
                explore: {
                    text: "Bekijk"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "Roll over om te zien"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "Tap om te zien"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "Uw video begint in"
                    , fontSize: 11
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "Klik om te vergroten"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "Ontdek meer"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "Klik om te herstarten"
                    , fontSize: 13
                    , isFallback: !1
                }
                , exit: {
                    text: "Sluit"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "Replay"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "Sluit"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "Klik om te ontdekken"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "De content begint in"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
            , de: {
                explore: {
                    text: "Entdecke"
                    , fontSize: 10
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "Rollover to explore"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "Mehr erfahren"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "Startet in"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "Zur Vollansicht klicken"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "Mehr entdecken"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "Click to replay"
                    , fontSize: 14
                    , isFallback: !1
                }
                , exit: {
                    text: "Beenden"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "Replay"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "Schließen"
                    , fontSize: 6
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "Hier entdecken"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "Inhalt startet in"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
            , es: {
                explore: {
                    text: "Ver más"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "Click para descubrir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "Toca para descubrir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "Abriendo en"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "Click para expandir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "Clic para reproducir"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "Click para reproducir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , exit: {
                    text: "Cerrar"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "Repetir"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "Cerrar"
                    , fontSize: 10
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "Clic para expandir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "El contenido empezará en"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
            , "es-es": {
                explore: {
                    text: "Ver más"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "Click para descubrir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "Toca para descubrir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "Abriendo en"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "Click para expandir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "Descubre más"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "Click para reproducir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , exit: {
                    text: "Cerrar"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "Repetir"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "Cerrar"
                    , fontSize: 11
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "Clic para expandir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "El contenido empezará en"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
            , "es-mx": {
                explore: {
                    text: "Explorar"
                    , fontSize: 10
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "Rollover para expandir"
                    , fontSize: 12
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "Tap para Expandir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 13
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "Empezando en"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "Click para expandir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "Explora más"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "Click para volver a ver"
                    , fontSize: 12
                    , isFallback: !1
                }
                , exit: {
                    text: "Salir"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "Repetir"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "Cerrar"
                    , fontSize: 10
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "Click para ver más"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "Cargando contenido en"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
            , pt: {
                explore: {
                    text: "Explorar"
                    , fontSize: 10
                    , isFallback: !1
                }
                , "rollover-to-explore": {
                    text: "Passe o mouse"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "tap-to-explore": {
                    text: "Toque para Expandir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "ads-by": {
                    text: "VDX BY %s"
                    , fontSize: 13
                    , isFallback: !1
                }
                , "starting-in": {
                    text: "Início em"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "click-to-expand": {
                    text: "Clique para expandir"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "explore-more": {
                    text: "Explore mais"
                    , fontSize: 16
                    , isFallback: !1
                }
                , "click-to-replay": {
                    text: "Clique para o replay"
                    , fontSize: 14
                    , isFallback: !1
                }
                , exit: {
                    text: "Sair"
                    , fontSize: 12
                    , isFallback: !1
                }
                , replay: {
                    text: "Replay"
                    , fontSize: 12
                    , isFallback: !1
                }
                , close: {
                    text: "Fechar"
                    , fontSize: 10
                    , isFallback: !1
                }
                , "click-to-explore-now": {
                    text: "Clique para explorer agora"
                    , fontSize: 14
                    , isFallback: !1
                }
                , "content-starting-in": {
                    text: "Começando em"
                    , fontSize: 12
                    , isFallback: !1
                }
            }
        }
    }
};
! function () {
    if ("performance" in window == !1 && (window.performance = {}), Date.now = Date.now || function () {
            return (new Date).getTime()
        }, "now" in window.performance == !1) {
        var e = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
        window.performance.now = function () {
            return Date.now() - e
        }
    }
}();
var TWEEN = TWEEN || function () {
    var e = [];
    return {
        getAll: function () {
            return e
        }
        , removeAll: function () {
            e = []
        }
        , add: function (t) {
            e.push(t)
        }
        , remove: function (t) {
            var i = e.indexOf(t);
            i !== -1 && e.splice(i, 1)
        }
        , update: function (t) {
            if (0 === e.length) return !1;
            var i = 0;
            for (t = void 0 !== t ? t : window.performance.now(); i < e.length;) e[i].update(t) ? i++ : e.splice(i, 1);
            return !0
        }
    }
}();
TWEEN.Tween = function (e) {
        var t = e
            , i = {}
            , n = {}
            , s = {}
            , o = 1e3
            , r = 0
            , a = !1
            , l = !1
            , c = !1
            , d = 0
            , h = null
            , u = TWEEN.Easing.Linear.None
            , m = TWEEN.Interpolation.Linear
            , f = []
            , p = null
            , g = !1
            , v = null
            , C = null
            , E = null;
        for (var T in e) i[T] = parseFloat(e[T], 10);
        this.to = function (e, t) {
            return void 0 !== t && (o = t), n = e, this
        }, this.start = function (e) {
            TWEEN.add(this), l = !0, g = !1, h = void 0 !== e ? e : window.performance.now(), h += d;
            for (var o in n) {
                if (n[o] instanceof Array) {
                    if (0 === n[o].length) continue;
                    n[o] = [t[o]].concat(n[o])
                }
                i[o] = t[o], i[o] instanceof Array == !1 && (i[o] *= 1), s[o] = i[o] || 0
            }
            return this
        }, this.stop = function () {
            return l ? (TWEEN.remove(this), l = !1, null !== E && E.call(t), this.stopChainedTweens(), this) : this
        }, this.stopChainedTweens = function () {
            for (var e = 0, t = f.length; e < t; e++) f[e].stop()
        }, this.delay = function (e) {
            return d = e, this
        }, this.repeat = function (e) {
            return r = e, this
        }, this.yoyo = function (e) {
            return a = e, this
        }, this.easing = function (e) {
            return u = e, this
        }, this.interpolation = function (e) {
            return m = e, this
        }, this.chain = function () {
            return f = arguments, this
        }, this.onStart = function (e) {
            return p = e, this
        }, this.onUpdate = function (e) {
            return v = e, this
        }, this.onComplete = function (e) {
            return C = e, this
        }, this.onStop = function (e) {
            return E = e, this
        }, this.update = function (e) {
            var l, E, T;
            if (e < h) return !0;
            g === !1 && (null !== p && p.call(t), g = !0), E = (e - h) / o, E = E > 1 ? 1 : E, T = u(E);
            for (l in n) {
                var y = i[l] || 0
                    , S = n[l];
                S instanceof Array ? t[l] = m(S, T) : ("string" == typeof S && (S = y + parseFloat(S, 10)), "number" == typeof S && (t[l] = y + (S - y) * T))
            }
            if (null !== v && v.call(t, T), 1 === E) {
                if (r > 0) {
                    isFinite(r) && r--;
                    for (l in s) {
                        if ("string" == typeof n[l] && (s[l] = s[l] + parseFloat(n[l], 10)), a) {
                            var w = s[l];
                            s[l] = n[l], n[l] = w
                        }
                        i[l] = s[l]
                    }
                    return a && (c = !c), h = e + d, !0
                }
                null !== C && C.call(t);
                for (var b = 0, x = f.length; b < x; b++) f[b].start(h + o);
                return !1
            }
            return !0
        }
    }, TWEEN.Easing = {
        Linear: {
            None: function (e) {
                return e
            }
        }
        , Quadratic: {
            In: function (e) {
                return e * e
            }
            , Out: function (e) {
                return e * (2 - e)
            }
            , InOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1)
            }
        }
        , Cubic: {
            In: function (e) {
                return e * e * e
            }
            , Out: function (e) {
                return --e * e * e + 1
            }
            , InOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
            }
        }
        , Quartic: {
            In: function (e) {
                return e * e * e * e
            }
            , Out: function (e) {
                return 1 - --e * e * e * e
            }
            , InOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2)
            }
        }
        , Quintic: {
            In: function (e) {
                return e * e * e * e * e
            }
            , Out: function (e) {
                return --e * e * e * e * e + 1
            }
            , InOut: function (e) {
                return (e *= 2) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
            }
        }
        , Sinusoidal: {
            In: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }
            , Out: function (e) {
                return Math.sin(e * Math.PI / 2)
            }
            , InOut: function (e) {
                return .5 * (1 - Math.cos(Math.PI * e))
            }
        }
        , Exponential: {
            In: function (e) {
                return 0 === e ? 0 : Math.pow(1024, e - 1)
            }
            , Out: function (e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
            }
            , InOut: function (e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e *= 2) < 1 ? .5 * Math.pow(1024, e - 1) : .5 * (-Math.pow(2, -10 * (e - 1)) + 2)
            }
        }
        , Circular: {
            In: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            }
            , Out: function (e) {
                return Math.sqrt(1 - --e * e)
            }
            , InOut: function (e) {
                return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }
        }
        , Elastic: {
            In: function (e) {
                var t, i = .1
                    , n = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = n / 4) : t = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)))
            }
            , Out: function (e) {
                var t, i = .1
                    , n = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = n / 4) : t = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1)
            }
            , InOut: function (e) {
                var t, i = .1
                    , n = .4;
                return 0 === e ? 0 : 1 === e ? 1 : (!i || i < 1 ? (i = 1, t = n / 4) : t = n * Math.asin(1 / i) / (2 * Math.PI), (e *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1)
            }
        }
        , Back: {
            In: function (e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t)
            }
            , Out: function (e) {
                var t = 1.70158;
                return --e * e * ((t + 1) * e + t) + 1
            }
            , InOut: function (e) {
                var t = 2.5949095;
                return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }
        }
        , Bounce: {
            In: function (e) {
                return 1 - TWEEN.Easing.Bounce.Out(1 - e)
            }
            , Out: function (e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }
            , InOut: function (e) {
                return e < .5 ? .5 * TWEEN.Easing.Bounce.In(2 * e) : .5 * TWEEN.Easing.Bounce.Out(2 * e - 1) + .5
            }
        }
    }, TWEEN.Interpolation = {
        Linear: function (e, t) {
            var i = e.length - 1
                , n = i * t
                , s = Math.floor(n)
                , o = TWEEN.Interpolation.Utils.Linear;
            return t < 0 ? o(e[0], e[1], n) : t > 1 ? o(e[i], e[i - 1], i - n) : o(e[s], e[s + 1 > i ? i : s + 1], n - s)
        }
        , Bezier: function (e, t) {
            for (var i = 0, n = e.length - 1, s = Math.pow, o = TWEEN.Interpolation.Utils.Bernstein, r = 0; r <= n; r++) i += s(1 - t, n - r) * s(t, r) * e[r] * o(n, r);
            return i
        }
        , CatmullRom: function (e, t) {
            var i = e.length - 1
                , n = i * t
                , s = Math.floor(n)
                , o = TWEEN.Interpolation.Utils.CatmullRom;
            return e[0] === e[i] ? (t < 0 && (s = Math.floor(n = i * (1 + t))), o(e[(s - 1 + i) % i], e[s], e[(s + 1) % i], e[(s + 2) % i], n - s)) : t < 0 ? e[0] - (o(e[0], e[0], e[1], e[1], -n) - e[0]) : t > 1 ? e[i] - (o(e[i], e[i], e[i - 1], e[i - 1], n - i) - e[i]) : o(e[s ? s - 1 : 0], e[s], e[i < s + 1 ? i : s + 1], e[i < s + 2 ? i : s + 2], n - s)
        }
        , Utils: {
            Linear: function (e, t, i) {
                return (t - e) * i + e
            }
            , Bernstein: function (e, t) {
                var i = TWEEN.Interpolation.Utils.Factorial;
                return i(e) / i(t) / i(e - t)
            }
            , Factorial: function () {
                var e = [1];
                return function (t) {
                    var i = 1;
                    if (e[t]) return e[t];
                    for (var n = t; n > 1; n--) i *= n;
                    return e[t] = i, i
                }
            }()
            , CatmullRom: function (e, t, i, n, s) {
                var o = .5 * (i - e)
                    , r = .5 * (n - t)
                    , a = s * s
                    , l = s * a;
                return (2 * t - 2 * i + o + r) * l + (-3 * t + 3 * i - 2 * o - r) * a + o * s + t
            }
        }
    }
    , function (e) {
        "function" == typeof define && define.amd ? define([], function () {
            return TWEEN
        }) : "object" == typeof exports ? module.exports = TWEEN : void 0 !== e && (e.TWEEN = TWEEN)
    }(this)
    , function (e, t) {
        "use strict";

        function i() {
            this.win = window, this.doc = window.document, this.windowCtx = window
        }
        var n, s, o, r, a, l, c, d, h, u, m, f, p, g, v, C, E, T, y, S, w = Object.prototype.toString
            , b = Array.prototype.slice
            , x = Object.prototype.hasOwnProperty
            , A = function (e) {
                var t = new RegExp("\\[object " + e + "\\]", "i");
                return function (e) {
                    return t.test(w.call(e))
                }
            }
            , I = I || {}
            , P = function () {}
            , k = ["log", "warn", "info", "error", "trace", "clear"];
        k.forEach(function (e) {
            I[e] || (I[e] = P)
        });
        var _ = i.prototype;
        r = _.isString = A("String"), l = _.isFunction = A("Function"), c = _.isObject = A("Object"), a = _.isArray = A("Array"), h = _.isBoolean = A("Boolean"), d = _.isNumber = A("Number"), u = _.isUndefined = A("Undefined"), m = _.isNull = A("Null"), f = _.doesExists = function (e) {
            return !(u(e) || m(e))
        }, p = _.doesNotExists = function (e) {
            return !f(e)
        }, s = _.hasProperty = function (e, t) {
            return x.call(e, t)
        }, E = _.toArray = function (e) {
            return b.call(e, 0)
        }, _.toCapital = function (e) {
            return e.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (e, t) {
                return 0 === +e ? "" : e.toUpperCase()
            })
        }, _.deprecate = function (e) {
            I.warn(e)
        }, _.getProperty = function (e, t) {
            return /(\(|\))/gi.test(t) ? void I.warn("Please provide a valid property accessor") : (t = '["' + t.replace(/[.]/g, '"]["') + '"]', new Function("o", "return o" + t)(e))
        }, _.compose = function () {
            var e = arguments
                , t = e.length;
            return function () {
                for (var i = t - 1, n = e[i].apply(this, arguments); i--;) n = e[i].call(this, n);
                return n
            }
        }, _.curry = function (e) {
            function t(e) {
                return function () {
                    var t = [].slice.call(arguments);
                    return i(e, t)
                }
            }

            function i(i, s) {
                var o = i.concat(s);
                return o.length < n ? t(o) : e.apply(this, o)
            }
            var n = e.length;
            return t([])
        }, y = _.each = function (e, t) {
            var i;
            T(c(e), "each Can only be called on Object"), T(l(t), "Provide a callback");
            for (i in e) s(e, i) && t(e[i], i, e)
        }, _.setWindowContext = function (e) {
            n = e || n
        }, _.getWindowContext = function () {
            return n
        }, _.getQueryParamter = function L(e) {
            e = e || n.location.search, e = 0 === e.indexOf("?") ? e.substring(1) : e;
            var t = L.cache || (L.cache = {})
                , i = t[e]
                , s = e.split("&");
            return i || (i = {}, s.forEach(function (e) {
                e = e.split("="), i[decodeURIComponent(e[0])] = decodeURIComponent(e[1])
            }), L.cache[e] = i), L.cache[e]
        }, T = _.assert = function (e, t) {
            var i = !1;
            if (i = l(e) ? !e() : !e) throw new Error("Assertion Failed: " + t)
        }, _.getRunTimeAdConfig = function (e, t, i) {
            var n = t[i] ? t[i] : e.teaser[i];
            return n
        }, _.getElement = function (e, t) {
            return "undefined" != typeof t ? t.document.getElementById(e) : n.document.getElementById(e)
        }, _.isCrossDomain = function () {
            try {
                return window.self !== window.top
            }
            catch (e) {
                return !0
            }
        }, o = _.extend = function (e, t) {
            var i = function (i, n) {
                return function () {
                    var s = e._super;
                    e._super = t[i];
                    var o = n.apply(e, arguments);
                    return e._super = s, o
                }
            };
            for (var n in t) e[n] = s(e, n) && l(e[n]) && l(t[n]) ? i(n, e[n]) : s(e, n) ? e[n] : a(t[n]) ? t[n].concat() : c(t[n]) ? o(t[n], {}) : t[n];
            return e
        }, _.inherit = function (e, t) {
            var i = function (e, i) {
                return function () {
                    var n = this._super;
                    this._super = i;
                    var s = t[e].apply(this, arguments);
                    return this._super = n, s
                }
            };
            for (var n in t) e[n] = l(e[n]) && l(t[n]) ? i(n, e[n]) : t[n];
            return e
        }, _.noop = function () {}, g = _.ajax = function (e, t, i, n, s, o) {
            var r = new XMLHttpRequest
                , a = document.write;
            r.open("GET", e, !0), r.onreadystatechange = function () {
                if (r.status >= 200 && r.status < 400 && 4 === r.readyState) {
                    var e, t, i = document.createElement("div")
                        , l = 0
                        , c = 0
                        , d = function () {
                            l === t && (o(i.innerHTML), document.write = a)
                        };
                    if (i.innerHTML = r.responseText, !s) {
                        e = i.getElementsByTagName("script"), e = Array.prototype.slice.call(e, 0), t = e.length, document.write = function (i) {
                            var n = document.createElement("div");
                            n.innerHTML = i, i = n.childNodes[0], e.splice(c, 0, i), t++
                        };
                        var h = function () {
                            var t = e[c];
                            if (t) {
                                c++;
                                var i, n = document.createElement("script")
                                    , s = t.attributes
                                    , o = s.length;
                                for (i = 0; i < o; i++) n.setAttributeNode(s[i].cloneNode(!0));
                                t.src ? (n.src = t.src, n.onload = function () {
                                    h(), ++l, d()
                                }, n.onerror = function () {
                                    throw new Error("Failed to load the script")
                                }, document.body.appendChild(n)) : (n.innerHTML = t.innerHTML, document.body.appendChild(n), h(), ++l), t.parentNode.removeChild(t)
                            }
                        };
                        h()
                    }
                    n(i.innerHTML, r)
                }
            }, r.send(i)
        }, v = _.ajax.get = function (e, t, i, n, s) {
            this(e, "GET", s, t, i, n)
        }, C = _.ajax.post = function (e, t, i, n, s) {
            this(e, "POST", t, i, n, s)
        }, S = _.debounce = function (e, t, i) {
            var n;
            return function () {
                i = i || this;
                var s = arguments
                    , o = function () {
                        n = null, e.apply(i, s)
                    };
                window.clearTimeout(n), n = window.setTimeout(o, t)
            }
        }, _.createSameDomainIframeNode = function (e, t, i, s, o) {
            var r = (new Date).getTime() % 20000001 + parseInt(1e4 * Math.random(), 10)
                , a = n;
            if (e += r, !a.document.getElementById(e)) {
                var l = document.createElement("iframe");
                l.setAttribute("frameBorder", "0"), l.setAttribute("allowtransparency", "true"), l.setAttribute("marginheight", "0"), l.setAttribute("marginwidth", "0"), l.setAttribute("scrolling", "no"), l.setAttribute("width", t), l.setAttribute("height", i), l.setAttribute("hspace", "0"), l.setAttribute("vspace", "0"), l.setAttribute("id", e), 0 === t && 0 === i && l.setAttribute("style", "position:absolute; top:-15000px; left:-15000px;"), a.document.body.appendChild(l)
            }
            setTimeout(function (t) {
                var i = n.document.getElementById(e);
                s(i, t)
            }(o), 10)
        }, _.writeContentInIframe = function (e, t) {
            if (e) {
                var i = e.contentWindow;
                i.contents = t, i.location.replace('javascript:window["contents"]')
            }
        }, _.createElement = function (e, t, i) {
            var n, s = document.createElement(e);
            for (n in t) s.setAttribute(n, t[n]);
            return i && s.setAttribute("style", i), s
        }, _.setStyle = function (e, t) {
            var i;
            for (i in t) e.style[i] = t[i]
        }, _.setAttribute = function (e, t) {
            var i;
            for (i in t) e.setAttribute(i, t[i])
        }, _.insertChild = function (e, t, i) {
            e || t || ("string" != typeof t || "undefined" != typeof i && null !== typeof i ? "undefined" == typeof i || null === typeof i ? e.appendChild(t) : "undefined" != typeof i && null !== typeof i && e.insertBefore(t, i) : e.innerHTML = t)
        }, _.getBody = function () {
            return this.doc.body || this.doc.documentElement
        }, _.override = function (e, t) {
            var i;
            for (i in e) t[i] && e.hasOwnProperty(i) && (e[i] = t[i])
        }, _.attachEvent = function (e, t, i) {
            window.addEventListener ? e.addEventListener(t, i, !1) : window.attachEvent ? e.attachEvent("on" + t, i) : window.onLoad && (e[t] = i)
        }, _.detachEvent = function (e, t, i) {
            window.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i)
        }, _.createCustomEvent = function (e, t) {
            var i;
            return e.createEvent ? (i = e.createEvent("HTMLEvents"), i.initEvent(t, !0, !0)) : e.createEventObject && (i = e.createEventObject(), i.eventType = t), i.eventName = t, i
        }, _.triggerCustomEvent = function (e, t) {
            e.dispatchEvent ? e.dispatchEvent(t) : e.fireEvent && htmlEvents["on" + t.eventType] ? e.fireEvent("on" + t.eventType, t) : e[t] ? e[t]() : e["on" + t.eventType] && e["on" + t.eventType]()
        }, _.constructDefaultPath = function () {
            if (arguments.length) {
                var e = arguments[0]
                    , t = arguments[1] || {}
                    , i = arguments[2] || "l";
                if (/^http(s)*:\/\//i.test(e)) return e;
                if (t.dir && t.dir.indexOf("$") >= 0 && (t.dir = ""), t.manifestDir && t.manifestDir.indexOf("$RICHMEDIA") >= 0 && (t.manifestDir = ""), "l" == i) return t.dir + e;
                if ("c" == i) return t.manifestDir + e
            }
        }, _.constructMediaPaths = function (e, t, i) {
            "$LOC$" == t.dir && (t.dir = ""), "$LOCPARSE$" == t.parseDir && (t.parseDir = ""), t.manifestDir.indexOf("$RICHMEDIA") >= 0 && (t.manifestDir = ""), e = e[i];
            for (var n = e.length, s = 0; s < n; s++) /^http(s)*:\/\//i.test(e[s].src) || e[s].dir && "l" !== e[s].dir ? /^http(s)*:\/\//i.test(e[s].src) || "c" !== e[s].dir || (e[s].src = t.manifestDir + e[s].src) : e[s].src = t.dir + e[s].src
        }, _.getCssPropertyValue = function (e, t) {
            var i, n;
            if ("undefined" != typeof e && "undefined" != typeof t) {
                if (e.ownerDocument && e.ownerDocument.defaultView) {
                    try {
                        n = e.ownerDocument.defaultView.getComputedStyle(e, null)
                    }
                    catch (s) {}
                    n && (i = n.getPropertyValue(t) || n[t])
                }
                else i = e.currentStyle[t];
                return i
            }
        }, _.isFloatNeeded = function (e) {
            for (var t = !1; e && e.parentNode && "body" !== e.tagName.toString().toLowerCase();) {
                e = e.parentNode;
                var i = this.getCssProperty(e, "overflow");
                if (void 0 !== i && "" !== i && null !== i && "undefined" != typeof i || (i = this.getCssProperty(e, "overflowX"), void 0 !== i && "" !== i && null !== i && "undefined" != typeof i || (i = this.getCssProperty(e, "overflowY"))), "hidden" === i || "scroll" === i || "auto" === i) {
                    t = !0;
                    break
                }
                var n = this.getCssProperty(e, "position");
                if (void 0 !== n && "" !== n && null !== n && "undefined" != typeof n && "relative" === n) {
                    t = !0;
                    break
                }
            }
            return t
        }, _.getCssProperty = function (e, t) {
            var i, n;
            if ("undefined" != typeof e && "undefined" != typeof t) {
                if (e.ownerDocument && e.ownerDocument.defaultView) {
                    try {
                        n = e.ownerDocument.defaultView.getComputedStyle(e, null)
                    }
                    catch (s) {}
                    n && (i = n.getPropertyValue(t) || n[t])
                }
                else i = e.currentStyle[t];
                return i
            }
        }, _.getElementWidth = function (e) {
            return e.clientWidth
        }, _.getElementHeight = function (e) {
            return e.clientHeight
        }, _.getElementPosition = function (e, t) {
            try {
                var i = {};
                return "undefined" != typeof e.getBoundingClientRect && (i = e.getBoundingClientRect()), i
            }
            catch (n) {}
        }, _.getElementOffset = function (e) {
            for (var t = 0, i = 0; e;) t += e.offsetLeft, i += e.offsetTop, e = e.offsetParent;
            return {
                x: t
                , y: i
            }
        }, _.getElementCordinate = function (e) {
            var t = {}
                , i = this.getElementOffset(e);
            return t.topLeft = {
                x: i.x
                , y: i.y
            }, t.topRight = {
                x: i.x + 970
                , y: i.y
            }, t.bottomLeft = {
                x: i.x
                , y: i.y + 250
            }, t.bottomRight = {
                x: i.x + 970
                , y: i.y + 250
            }, t.width = 970, t.height = 250, t
        }, _.isInView = function (e) {
            var t = {};
            t.topLeft = this.getViewportTopLeft(), t.topRight = this.getViewportTopRight(), t.bottomLeft = this.getViewportBottomLeft();
            var i = this.getElementCordinate(e);
            return t.topLeft.x < i.topRight.x && t.topRight.x > i.topLeft.x && t.topLeft.y < i.bottomLeft.y && t.bottomLeft.y > i.topLeft.y
        }, _.getViewportTopLeft = function () {
            return {
                x: this.getScrollX()
                , y: this.getScrollY()
            }
        }, _.getViewportTopRight = function () {
            return {
                x: this.getScrollX() + this.getViewportwidth()
                , y: this.getScrollY()
            }
        }, _.getViewportBottomLeft = function () {
            return {
                x: this.getScrollX()
                , y: this.getScrollY() + this.getViewportHeight()
            }
        }, _.getViewportBottomRight = function () {
            return {
                x: this.getScrollX() + this.getViewportwidth()
                , y: this.getScrollY() + this.getViewportHeight()
            }
        }, _.getScrollX = function () {
            return void 0 !== n.pageXOffset ? n.pageXOffset : (this.doc.documentElement || this.doc.body.parentNode || this.doc.body).scrollLeft
        }, _.getScrollY = function () {
            return void 0 !== n.pageYOffset ? n.pageYOffset : (this.doc.documentElement || this.doc.body.parentNode || this.doc.body).scrollTop
        }, _.getViewportHeight = function () {
            return n.innerHeight || n.document.documentElement.clientHeight || n.document.body.clientHeight
        }, _.getViewportwidth = function () {
            return n.innerWidth || n.document.documentElement.clientWidth || n.document.body.clientWidth
        }, _.getScreenHeight = function () {
            return n.screen.height
        }, _.removeProperty = function (e, t) {
            e.style.removeProperty ? e.style.removeProperty(t) : e.style.removeAttribute(t)
        }, _.moveMainUnitToCenter = function (e) {
            var t, i, s;
            e && (this.element = e, this.divTop = this.getCssProperty(e, "top"), this.VPMAnimIntervalId && (n.clearInterval(this.VPMAnimIntervalId), delete this.VPMAnimIntervalId), void 0 === this.storeScrollX && (this.storeScrollX = this.getScrollX()), void 0 === this.storeScrollY && (this.storeScrollY = this.getScrollY()), s = this.getViewportHeight(), i = parseInt(this.getCssProperty(e, "height").split("px")[0]), t = s < i ? 0 : (s - i) / 2, e.style.top = t + "px")
        }, _.disableScroll = function (e) {
            this.divPosition = this.getCssProperty(e, "position"), e.style.position = "fixed"
        }, _.enableScroll = function (e) {
            e.style.position = this.divPosition, delete this.divPosition
        }, _.bringInView = function (e) {
            var t = e
                , i = {}
                , n = 0
                , s = 0;
            i.height = this.getViewportHeight(), i.width = this.getViewportwidth(), i.left = this.getScrollX(), i.top = this.getScrollY(), this.isVerticalScrollbar && (i.width -= 17), this.isHorizontalScrollbar && (i.height -= 17);
            var o = this.getElementPosition(t);
            o.top < 0 ? n = o.top : o.bottom > i.height && (n = o.bottom - i.height), o.left < 0 ? s = o.left : o.right > i.width && (s = o.right - i.width), I.log(s + "  " + n), this.getWindowContext().scrollBy(s, n)
        }, _.getOrigin = function (e) {
            var t = e.match(/^(http?):\/\/([A-Z\d\.-]{2,})\.([A-Z]{2,})(:\d{2,4})?/i);
            return t[0]
        }, _.isVerticalScrollbar = function () {
            var e = "BackCompat" == n.document.compatMode ? n.document.body : n.document.documentElement;
            return e.scrollHeight > e.clientHeight
        }, _.isHorizontalScrollbar = function () {
            var e = "BackCompat" == n.document.compatMode ? n.document.body : n.document.documentElement;
            return e.scrollWidth > e.clientWidth
        }, _.resetScroll = function () {
            this.element.style.top = this.divTop, n.scrollTo(this.storeScrollX, this.storeScrollY), delete this.storeScrollX, delete this.storeScrollY, delete this.element, delete this.divTop
        }, _.toUpperCase = function (e) {
            return e.toUpperCase()
        }, _.getBrowserPrefix = function (e, t) {
            for (var i, n = "Webkit Moz O ms Khtml".split(" "), s = -1, o = n.length; ++s < o;)
                if (i = n[s].toLowerCase(), e[i + t]) return i + t;
            return !1
        }, _.charectorLimit = function (e) {
            function t(e) {
                l.style.fontSize = e + "px"
            }

            function i() {
                return a.offsetHeight < l.offsetHeight
            }

            function n() {
                if (a.offsetHeight < l.offsetHeight) {
                    for (; a.offsetHeight < l.offsetHeight;) l.innerText = c = c.substr(0, c.length - 1);
                    l.innerText = c = c.substr(0, c.length - 3), l.innerText = l.innerText + "..."
                }
                a.children[0].innerText = l.innerText, a.style.fontSize = s()
            }

            function s() {
                return l.style.fontSize
            }
            var o, r, a, l, c, d = parseInt(e.max)
                , h = parseInt(e.min);
            for (o = d, r = e.text, c = r, a = e.container, l = document.createElement("div"), l.id = "rm-test", l.style.width = a.offsetWidth, e["white-space"] && (l.style.whiteSpace = e["white-space"]), document.body.appendChild(l), t(o), l.innerText = r; o > h;) {
                if (!i()) {
                    n();
                    break
                }
                t(--o)
            }
            o <= h && n(), l.parentNode.removeChild(l)
        }, _.ObjToStyleString = function (e) {
            return JSON.stringify(e).replace(/"/g, "").replace(/,/g, ";").replace(/^\{(.*)\}$/g, "$1")
        }, _.moveVPMToCenter = function (e, t) {
            if (e) {
                var i, s, o, r, a, l = 0
                    , c = this;
                this.storeScrollX = this.getScrollX(), this.storeScrollY = this.getScrollY(), o = this.getViewportHeight(), s = this.getCssProperty(e, "clipBottom") ? parseInt(this.getCssProperty(e, "clipBottom").split("px")[0]) : parseInt(this.getCssProperty(e, "clip").split(" ")[2].split("px")[0]), r = e.getBoundingClientRect().top, o < s ? i = r : (i = (o - s) / 2 - r, i = -i), a = i > 0 ? i : -i, this.VPMAnimIntervalId = n.setInterval(function () {
                    l <= a ? (l += t, c.windowCtx.scrollBy(0, i >= 0 ? t : -t)) : clearInterval(c.VPMAnimIntervalId)
                }, 1)
            }
        }, t.utility = t.utility || new i
    }(window, window.EU || (window.EU = {}))
    , function (e, t) {
        "use strict";

        function i(e) {
            e = e || {};
            var t;
            return t = n.hasProperty(e, "constructor") && n.isFunction(e.constructor) ? e.constructor : function () {}, t.prototype = n.extend({}, e), t.prototype.constructor = t, t.extend = s, t
        }
        var n = t.utility
            , s = function o(e) {
                e = e || {};
                var t = /this\._super\(.*\)/g.test((e.constructor || new Function).toString())
                    , i = this
                    , s = function () {
                        var s, o = this._super;
                        return n.hasProperty(e, "constructor") && n.isFunction(e.constructor) ? (t ? this._super = i : i.apply(this, arguments), s = e.constructor.apply(this, arguments), this._super = o) : s = i.apply(this, arguments), s
                    }
                    , r = function () {
                        this.constructor = s
                    };
                return r.prototype = i.prototype, s.prototype = new r, n.inherit(s.prototype, e), s.extend = o, s
            };
        t.CreateClass = t.CreateClass || i
    }(window, window.EU)
    , function (e, t) {
        "use strict";

        function i(e) {
            return n(e) ? e.match(/(.+)\((.+)\)/) : [e, e, void 0]
        }

        function n(e) {
            return /\((.+)\)/g.test(e)
        }

        function s(e) {
            return e.enumList.forEach(function (t, n) {
                var s;
                l.isObject(t) ? l.each(t, function (t, o) {
                    s = i(o), this[s[1]] = new a(o, s[1], s[2], e, n, t)
                }.bind(this)) : (s = i(t), this[s[1]] = new a(t, s[1], s[2], e, n));
            }.bind(this)), Object.freeze && Object.freeze(this), this
        }

        function o(e) {
            if (this instanceof o) throw new Error("Cannot instantiate Enum");
            return new r(e)
        }

        function r(e) {
            if (l.isObject(e)) return s.call(this, e);
            throw new Error("Not a valid type")
        }

        function a(e, t, i, n, s, o) {
            i = i || "";
            var r = i.indexOf(",") ? i.split(",") : i ? [i] : []
                , a = l.extend({}, n);
            return delete a.enumList, delete a.constructor, l.isObject(o) && l.extend(this, o), this.getName = function () {
                return t
            }, this.ordinal = function () {
                return s
            }, this.constructor = n.constructor || function () {}, l.each(a, function (e, t) {
                l.isFunction(e) && (a[t] = e.bind(this)), l.hasProperty(this, t) || (this[t] = e)
            }.bind(this)), this._super = a, this.constructor.apply(this, r), Object.freeze && Object.freeze(this), this
        }
        var l = t.utility;
        r.prototype = {
            constructor: r
            , values: function () {
                var e = [];
                return l.each(this, function (t) {
                    e.push(t)
                }), e
            }
        }, t.Enum = t.Enum || o
    }(window, window.EU)
    , function (e, t) {
        "use strict";
        var i = t.utility
            , n = function (e) {
                var n = i.isObject(e.data) ? e.data : JSON.parse(e.data)
                    , s = i.isString(n) ? "" : n.eventName;
                s && (delete n.eventName, t.EventManager.fire(s, n))
            }
            , s = t.CreateClass({
                __uidPrefix__: "EventManager_"
                , __uid__: 1
                , __listeners__: null
                , add: function (e, t) {
                    i.assert(e && i.isString(e), "expected type a non-empty String for eventName"), i.assert(t && i.isFunction(t), "expected type Function for handler");
                    var n, s = {
                            type: e
                            , handler: t
                            , namespace: null
                            , id: this.__uidPrefix__ + this.__uid__++
                        }
                        , o = ".";
                    return e.indexOf(o) > 0 && (n = e.split(o), s.type = n[0], s.namespace = n[1]), this.__listeners__ || (this.__listeners__ = {}), this.__listeners__[s.type] || (this.__listeners__[s.type] = []), this.__listeners__[s.type].push(s), s.id
                }
                , remove: function (e, t) {
                    if (i.assert(e && i.isString(e), "expected type a non-empty String for eventName"), this.__listeners__) {
                        var n, s, o, r, a, l, c = ".";
                        if (e.indexOf(c) > 0 && (s = e.split(c), e = s[0], n = s[1]), o = i.isString(t) ? t : null, r = this.__listeners__[e] || [], r.length) return n ? (l = function (e) {
                            return n !== e
                        }, o || t ? o ? a = function (e) {
                            return l(e.namespace) || e.id !== o
                        } : t && (a = function (e) {
                            return l(e.namespace) || e.handler !== t
                        }) : a = function (e) {
                            return l(e.namespace)
                        }, this.__listeners__[e] = r.filter(a), void(this.__listeners__[e].length || delete this.__listeners__[e])) : void(o ? (this.__listeners__[e] = r.filter(function (e) {
                            return e.id !== o
                        }), this.__listeners__[e].length || delete this.__listeners__[e]) : t ? (this.__listeners__[e] = r.filter(function (e) {
                            return e.handler !== t
                        }), this.__listeners__[e].length || delete this.__listeners__[e]) : this.__listeners__[e] && this.__listeners__[e].length && delete this.__listeners__[e])
                    }
                }
                , removeByNS: function (e) {
                    i.assert(e && i.isString(e), "expected type a non-empty String for namespace");
                    var t, n = function (t) {
                        return t.namespace !== e
                    };
                    for (t in this.__listeners__) hasOwnProperty(this.__listeners__, t) && (this.__listeners__[t] = this.__listeners__[t].filter(n), this.__listeners__[t].length || delete this.__listeners__[t])
                }
                , fire: function (e, t) {
                    if (i.assert(e && i.isString(e), "expected type a non-empty String for eventName"), this.__listeners__) {
                        (arguments.length > 2 || !i.isArray(t)) && (t = Array.prototype.slice.call(arguments, 1));
                        var n, s, o, r = ".";
                        e.indexOf(r) && (s = e.split(r), e = s[0], n = s[1]), o = this.__listeners__[e] || [], n && (o = o.filter(function (e) {
                            return e.namespace === n
                        })), o && o.length && this.__callAllHandlers__(e, o, t)
                    }
                }
                , __callAllHandlers__: function (e, t, i) {
                    var n, s, o = t.length;
                    for (s = 0; s < o; s++) n = t[s], n.handler.apply(this, i)
                }
                , once: function (e, t) {
                    i.assert(e && i.isString(e), "expected type a non-empty String for eventName"), i.assert(t && i.isFunction(t), "expected type Function for handler");
                    var n, s = function () {
                        t.apply(null, arguments), this.remove(e, n)
                    }.bind(this);
                    n = this.add(e, s)
                }
                , addMessageListener: function (e) {
                    e.removeEventListener("message", n, !1), e.addEventListener("message", n, !1)
                }
                , _data: function (e) {
                    i.assert(e && i.isString(e), "expected type a non-empty String for eventName");
                    var t, n, s, o = ".";
                    return e.indexOf(o) && (n = e.split(o), e = n[0], t = n[1]), s = this.__listeners__ && this.__listeners__[e] || [], t && (s = s.filter(function (e) {
                        return e.namespace === t
                    })), {
                        eventName: e
                        , handlers: s
                    }
                }
            });
        t.EventManager = t.EventManager || new s, t.BaseEventManager = t.BaseEventManager || s
    }(window, window.EU || (window.EU = {}))
    , function (e, t) {
        "use strict";
        var i = t.utility
            , n = t.CreateClass({
                constructor: function () {
                    this.__observers__ = [], this.__changed__ = !1
                }
                , addObserver: function (e) {
                    i.assert(e instanceof t.ObserverClass, "Please provide instance of EU.ObserverClass"), this.__observers__.push(e)
                }
                , removeObserver: function (e) {
                    i.assert(e instanceof t.ObserverClass, "Please provide instance of EU.ObserverClass"), this.__observers__ = this.__observers__.filter(function (t) {
                        return e !== t
                    })
                }
                , notifyObservers: function () {
                    if (this.__changed__) {
                        var e = i.toArray(arguments);
                        e.unshift(this), this.__observers__.forEach(function (t) {
                            t.update.apply(t, e)
                        }), this.__changed__ = !1
                    }
                }
                , notify: function () {
                    this.setChanged(), this.notifyObservers.apply(this, arguments)
                }
                , setChanged: function () {
                    this.__changed__ = !0
                }
                , clearChanged: function () {
                    this.__changed__ = !1
                }
                , hasChanged: function () {
                    return this.__changed__
                }
                , countObservers: function () {
                    return this.__observers__.length
                }
            });
        t.ObservableClass = t.ObservableClass || n
    }(window, window.EU)
    , function (e, t) {
        "use strict";
        var i = t.CreateClass({
            update: function () {
                throw new Error("Implement the Update method")
            }
        });
        t.ObserverClass = t.ObserverClass || i
    }(window, window.EU)
    , function (e, t) {
        "use strict";
        var i = t.utility
            , n = t.BaseEventManager.extend({
                constructor: function () {}
                , init: i.noop
                , render: i.noop
                , destroy: i.noop
            });
        t.BaseComponent = t.BaseComponent || n
    }(window, window.EU)
    , function (e, t) {
        "use strict";

        function i(e, t, i, n) {
            this.name = e, this.deps = t ? t.slice(0) : t, this.def = i, this.version = n
        }
        i.prototype = {
            constructor: i
            , init: function (e, t) {
                return t && (this.pluginList = t), this.resolveDeps(this, e, this.pluginList)
            }
            , resolveDeps: function (e, t, i) {
                var n = [t]
                    , s = e.deps
                    , o = s ? s.length : 0;
                return o && s.forEach(function (e, s) {
                    e = i[e], e && (e.deps && e.deps.length ? n = n.concat(this.resolveDeps(e, t, i)) : n.push(e.def(t)))
                }.bind(e)), e.def.apply(null, n)
            }
        }, t.PluginManager = t.PluginManager || i
    }(window, window.EU || (window.EU = {}))
    , function (e, t, i) {
        "use strict";

        function n() {}

        function s(e, t) {
            return e + "_" + t
        }

        function o(e, t) {
            return t.dependencies.filter(function (t) {
                return t.name === e
            })[0]
        }
        var r, a = t.utility;
        i = e.EUC = i || t.CreateClass({
            utility: a
            , makeKey: s
            , constructor: function () {
                this.adunits = {}, this.plugins = {}, this.dependenciesList = []
            }
            , initCore: n
            , rendererCallback: n
            , resolvedCallback: n
            , registerPlugin: function (e, i, n, o) {
                var r = t.PluginManager;
                this.utility.isString(n) && (o = n), this.utility.isFunction(i) && (n = i, i = null), this.utility.isString(i) && (i = [i]);
                var a = s(e, o);
                this.plugins[a] || (this.plugins[a] = new r(e, i, n, o))
            }
            , checkPluginLoaded: function (e) {
                return !!this.plugins[s(e.name, e.version)]
            }
            , resolveAdUnitConfig: function (e) {
                var t = !1;
                e.pluginsLoaded || (t = e.dependencies.every(this.checkPluginLoaded.bind(this)), t && (e.pluginsLoaded || (e.pluginsLoaded = !0, this.initiatePlugins(e))))
            }
            , resolvePlugin: function () {
                this.utility.each(this.plugins, function (e, t) {
                    e.deps && (e.deps = e.deps.map(function (e) {
                        var t, i = this.dependenciesList;
                        return t = i.filter(function (t) {
                            return t.name === e
                        })[0], t ? s(t.name, t.version) : e
                    }.bind(this)))
                }.bind(this)), Object.keys(this.adunits).forEach(function (e) {
                    var t = this.adunits[e];
                    this.resolveAdUnitConfig(t)
                }.bind(this))
            }
            , initiatePlugins: function (e) {
                var i, n, s = {};
                void 0 !== e && (s.config = e.config), n = this.bustFrame(s), this.utility.setWindowContext(n), r || (r = t.EventManager), s.baseEventManager = r, s.utility = this.utility, r.addMessageListener(n), e && (i = this.require("render", s)), s.isIFrame = !0, e.renderer = i, this.resolvedCallback(s, i, e)
            }
            , bustFrame: function () {
                return e
            }
            , require: function () {
                var e;
                return function (t, i) {
                    i && (e = i), t = o(t, e.config);
                    var n;
                    if (t) return n = s(t.name, t.version), this.plugins[n].init(e, this.plugins);
                    throw new ReferenceError("Unknown Dependency")
                }
            }()
            , sucessCallback: function (e) {}
            , errorCallback: function (e) {}
            , constructMediaPath: function (e) {
                e.richmediaCommonDir.indexOf("$RICHMEDIA") >= 0 && (e.richmediaCommonDir = "");
                var t = e.dependencies
                    , i = t.length;
                if (i > 0)
                    for (var n = 0; n < i; n++) /^http(s)*:\/\//i.test(t[n].src) || (t[n].src = e.richmediaCommonDir + t[n].src)
            }
            , updateDependenciesList: function (e) {
                return this.dependenciesList = this.union(this.dependenciesList, e)
            }
            , union: function (e, t) {
                var i, n = e.concat(t)
                    , s = []
                    , o = {};
                return n.forEach(function (e) {
                    i = this.makeKey(e.name, e.version), this.utility.hasOwnProperty(o, this.makeKey(e.name, e.version)) || (o[i] = e, s.push(e))
                }.bind(this)), s
            }
        })
    }(window, window.EU, window.EUC)
    , function (e, t) {
        "use strict";
        var i = t.utility
            , n = {
                "teaser.trackers.phaze.teaser_loading_loaded": !0
                , "teaser.trackers.phaze.paused-teaser_vpm_closebtnclick": !0
                , "teaser.trackers.phaze.paused-teaser_mainunit_closebtnclick": !0
                , "teaser.trackers.phaze.paused-collapse-teaser_vpm_closebtnclick": !0
                , "teaser.trackers.phaze.paused-collapse-teaser_mainunit_closebtnclick": !0
                , "teaser.trackers.phaze.paused-collapse-teaser_paused-teaser_transitioncomplete": !0
                , "teaser.trackers.phaze.collapsedteaser_teaser_transitioncomplete": !0
                , "teaser.trackers.phaze.collapsedteaser_mainunit_closevideo": !0
                , "teaser.trackers.phaze.teaser_mainunit_closebtnclick": !0
                , "teaser.trackers.phaze.teaser_vpm_closebtnclick": !0
                , "teaser.trackers.phaze.teaser_mainunit_closevideo": !0
                , "teaser.trackers.impression.imp": !0
            }
            , s = t.CreateClass({
                constructor: function (e) {
                    var t = this.parse(e);
                    this.attr = t, this.init.apply(this, arguments)
                }
                , init: i.noop
                , parse: function (e) {
                    return e
                }
                , set: function (e, t) {
                    n[e] && (this.firePixel(this.getTrackerObj(i.getProperty(this.adConfig, e))), n[e] = !1), this.attr[e] = t
                }
                , get: function (e) {
                    return this.attr[e]
                }
                , getTrackerObj: function (e) {
                    var t, n = e.trackers;
                    return t = n.map(function (t, n) {
                        var s = {}
                            , o = s.custom = {};
                        return s.pixel = t.pixel, s.type = t.type, e.custom1 && (o.custom1 = i.isArray(e.custom1) ? e.custom1[n] : e.custom1, o.custom1 || delete o.custom1), e.custom2 && (o.custom2 = e.custom2), s
                    })
                }
                , firePixel: function (e) {
                    i.isArray(e) || (e = [e]), e.forEach(function (e, t) {
                        this["pixelType" + i.toCapital(e.type)](e)
                    }.bind(this))
                }
                , pixelTypeImg: function (e) {
                    var t, i = this.adConfig.pixelInfo
                        , n = /^http|https?:\/\//i.test(e.pixel) ? e.pixel : "http://" + i.host + i.insPrefixUrl + i.campaignName + i.insMidUrl + e.pixel + "&" + this.serialize(e.custom) + i.insSuffixUrl;
                    t = new Image, t.src = n
                }
                , pixelTypeJs: function (e) {
                    var t = "JSPixelInfo"
                        , n = function (t) {
                            i.writeContentInIframe(t, e.pixel)
                        };
                    i.createSameDomainIframeNode(t, 0, 0, n)
                }
                , pixelTypeIframe: function (e) {
                    var t = "IframePixelInfo"
                        , n = function (t) {
                            t.src = e.pixel
                        };
                    i.createSameDomainIframeNode(t, 0, 0, n)
                }
                , serialize: function (e) {
                    var t, n = [];
                    for (t in e) i.hasProperty(e, t) && n.push(t + "=" + e[t]);
                    return n.join("&")
                }
            });
        t.BaseModel = t.BaseModel || s
    }(window, window.EU)
    , function (e) {
        "use strict";

        function t() {
            this.componentList = {
                VideoPlayer: {
                    name: "VideoPlayer"
                    , appendTo: "teaserContainer"
                }
                , Peel: {
                    name: "Peel"
                    , appendTo: "appsnack_innerContainer"
                }
                , Close: {
                    name: "Close"
                    , appendTo: "appsnack_innerContainer"
                }
                , RectangClose: {
                    name: "RectangClose"
                    , appendTo: "appsnack_innerContainer"
                }
                , Replay: {
                    name: "Replay"
                    , appendTo: "appsnack_innerContainer"
                }
                , Canvas: {
                    name: "Canvas"
                    , appendTo: "teaserContainer"
                }
                , PlayWrapper: {
                    name: "PlayWrapper"
                    , appendTo: "appsnack_innerContainer"
                }
            }
        }
        t.prototype = {
            getComponents: function () {
                return this.componentList
            }
            , setComponent: function (e, t) {
                this.componentList[e] = this.componentList[e] || {}, this.componentList[e] = t, this.componentList[e].name = e
            }
        }, e.ComponentConfig = new t
    }(window)
    , function (e, t, i) {
        "use strict";
        var n = t.CreateClass({
            constructor: function () {
                this.components = {}, this.componentLoaded = !1
            }
            , init: function (t, n, s) {
                this.creativeContCallBack = {}, this.sandBox = t, this.model = n, this.componentList = i.getComponents(), this.CMModel = e.EXPO_CREATIVE.CMModel, this.componentsModel = new this.CMModel(EXPO_CREATIVE.ConfigModel.getComponentsConfig()), Object.keys(this.componentList).forEach(function (e) {
                    this.components[this.componentList[e].name] && this.components[this.componentList[e].name].init(this.componentList[e], this.model, s)
                }.bind(this))
            }
            , registerForComponentLoaded: function (e) {
                return this.componentLoaded ? void e() : void(this.callback = e)
            }
            , communicateState: function (e) {
                this.creativeContCallBack(e)
            }
            , communicateCallback: function (e) {
                this.creativeContCallBack = e
            }
            , registerController: function (e) {
                this.controller = e
            }
            , registerComponent: function (e, t) {
                this.components[t] || (this.components[t] = e), this.resolveComponent()
            }
            , resolveComponent: function () {
                function e(e) {
                    return !!this.components[e]
                }
                var t = i.getComponents();
                this.componentLoaded = Object.keys(t).every(e.bind(this)), this.componentLoaded && this.callback && this.callback("loaded")
            }
            , requireComponent: function (e) {
                return this.components[e]
            }
            , destroyComponent: function (e) {
                this.components[e.id] && delete this.components[e.id]
            }
            , requestConfig: function (e, t) {
                var i = t && e[t] && e[t].appendTo || e.appendTo
                    , n = "#" + i + "_" + this.sandBox.id.replace(/\$/g, "")
                    , s = "get" + e.name + "Config"
                    , o = this.model[s](t, this.componentsModel.getConfigById(e.name, t));
                this.components[e.name].onConfig(o, n, t)
            }
            , mergeModelInfo: function (e, t) {
                var i = {};
                return this.sandBox.utility.extend(i, t), this.sandBox.utility.extend(i, e), i
            }
            , setPlayPixel: function () {}
            , applyStateListeners: function (e) {
                for (var t in e) this.requireComponent(t) && this.requireComponent(t).setListeners(e[t])
            }
            , removeStateListeners: function () {
                Object.keys(componentList).forEach(function (e) {
                    if (this.components[componentList[e].name]) try {
                        this.components[componentList[e].name].removeListeners()
                    }
                    catch (t) {}
                }.bind(this))
            }
            , communicate: function (e, t, i) {
                var n = this.components;
                Object.keys(n).forEach(function (s) {
                    n[s][e] && n[s][e](t, i)
                }), this.sandBox.baseEventManager.fire(e, {
                    event: t
                }, !0)
            }
        });
        e.CM || (e.CM = new n)
    }(window, window.EU, window.ComponentConfig)
    , function (e, t, i, n) {
        "use strict";
        i = e.EUCT = e.EUCT || t.extend({
            iframeId: ""
            , initCreative: function (e) {
                this.utility.assert(this.utility.isObject(e), "expected type for config is Object");
                var t = this.adunits[e.name] = {};
                t.config = e, t.pluginsLoaded = !1, t.dependencies = e.dependencies, this.updateDependenciesList(e.dependencies), this.resolvePlugin()
            }
            , resolvedCallback: function (e, t, i) {
                e.id = e.config.id, e.adContainerId = e.config.adContainerId, e.baseEventManager.fire("creativeFrameworkReady"), t.initRender()
            }
        }), e.EXPO_CREATIVE = n || new i
    }(window, window.EUC, window.EUCT, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = t.BaseModel.extend({
            init: function (e) {
                this.parseConfigJson(e)
            }
            , parseConfigJson: function (e) {
                return this.configData = e, e
            }
            , getConfigById: function (e, t) {
                var i = this.configData && this.configData[e] ? this.configData[e] : null;
                return i && t && i[t] ? i[t] : i
            }
            , mergeConfigById: function (e, t, i) {
                var n = i && this.configData[e][i] ? this.configData[e][i] : this.configData[e];
                if (n)
                    for (var s in t) {
                        var o = this.configData[e][i] || this.configData[e];
                        o[s] = t[s]
                    }
            }
        });
        i.CMModel = i.CMModel || n
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = t.ObservableClass.extend({
            constructor: function (e, t) {
                this.model = e, this.render = t
            }
            , StatesEnum: t.Enum({
                enumList: [{
                    "teaser2VPM(teaser-to-vpm)": {
                        destination: ["vpm", "finalVideo"]
                        , onComplete: "teaser2VPM"
                    }
                }, {
                    "teaser2VPMFast(teaser-to-vpm-fast)": {
                        destination: ["vpm", "finalVideo"]
                        , onComplete: "teaser2VPM"
                    }
                }, {
                    "vpm2Teaser(vpm-to-teaser)": {
                        destination: ["initialTeaser", "initialVideo"]
                        , onComplete: "vpm2Teaser"
                    }
                }, {
                    "vpm2TeaserFast(vpm-to-teaser-fast)": {
                        destination: ["initialTeaser", "initialVideo"]
                        , onComplete: "vpm2Teaser"
                    }
                }, {
                    "teaser2Collapsed(teaser-to-collapsed)": {
                        destination: ["collapsedTeaser", "collapsedVideo"]
                        , onComplete: "teaser2Collapsed"
                    }
                }, {
                    "pausedTeaser2pausedCollapsed(pausedTeaser-to-pausedCollapsed)": {
                        destination: ["collapsedTeaser", "collapsedVideo"]
                        , onComplete: "teaser2Collapsed"
                    }
                }, {
                    "collapsedTeaser2vpm(collapsed-teaser-to-vpm)": {
                        destination: ["vpm", "finalVideo"]
                        , onComplete: "teaser2VPM"
                    }
                }, {
                    "collapsedTeaser2vpmFast(collapsed-teaser-to-vpm-fast)": {
                        destination: ["vpm", "finalVideo"]
                        , onComplete: "teaser2VPM"
                    }
                }, {
                    "vpm2collapsedTeaser(vpm-to-collapsed-teaser)": {
                        destination: ["collapsedTeaser", "collapsedVideo"]
                        , onComplete: "vpm2Collapsed"
                    }
                }, {
                    "vpm2collapsedTeaserFast(vpm-to-collapsed-teaser)": {
                        destination: ["collapsedTeaser", "collapsedVideo"]
                        , onComplete: "vpm2Collapsed"
                    }
                }, {
                    "MainUnit2collapsedTeaserFast(MainUnit-to-collapsed-teaser)": {
                        destination: ["collapsedTeaser", "collapsedVideo"]
                        , onComplete: "MainUnit2Collapsed"
                    }
                }, {
                    "MainUnit2TeaserFast(MainUnit-to-teaser-fast)": {
                        destination: ["initialTeaser", "initialVideo"]
                        , onComplete: "MainUnit2TeaserFast"
                    }
                }]
                , constructor: function (e) {
                    this.name = e
                }
                , getDuration: function (e) {
                    return e.getTransitionTimes()[this.getName()] || 0
                }
            })
            , transitions: {
                teaser2VPM: function (e) {
                    var t = e ? this.StatesEnum.teaser2VPMFast : this.StatesEnum.teaser2VPM;
                    this.notify(t.name), this.startTweenFromState(t)
                }
                , VPM2Teaser: function () {
                    var e = this.teaserCollapsed ? this.StatesEnum.vpm2collapsedTeaser : this.StatesEnum.vpm2Teaser;
                    this.notify(e.name), this.startTweenFromState(e)
                }
                , teaser2Collapsed: function () {
                    var e = this.StatesEnum.teaser2Collapsed;
                    this.startTweenFromState(this.StatesEnum.teaser2Collapsed), this.notify(e.name)
                }
                , pausedTeaser2pausedCollapsed: function () {
                    var e = this.StatesEnum.pausedTeaser2pausedCollapsed;
                    this.startTweenFromState(this.StatesEnum.teaser2Collapsed), this.notify(e.name)
                }
                , collapsed2VPM: function (e) {
                    var t = e ? this.StatesEnum.collapsedTeaser2vpmFast : this.StatesEnum.collapsedTeaser2vpm;
                    this.notify(t.name), this.startTweenFromState(t)
                }
                , VPM2Collapsed: function () {
                    var e = this.StatesEnum.vpm2collapsedTeaser;
                    this.notify(e.name), this.startTweenFromState(e)
                }
                , VPM2TeaserFast: function () {
                    var e = this.teaserCollapsed ? this.StatesEnum.vpm2collapsedTeaserFast : this.StatesEnum.vpm2TeaserFast;
                    this.notify(e.name), this.startTweenFromState(e)
                }
                , VPM2MainUnit: function () {
                    var e = this.StatesEnum.vpm2MainUnit;
                    this.notify(e.name), this.startTweenFromState(e)
                }
                , MainUnit2TeaserFast: function () {
                    var e = this.teaserCollapsed ? this.StatesEnum.MainUnit2collapsedTeaserFast : this.StatesEnum.MainUnit2TeaserFast;
                    this.notify(e.name), this.startTweenFromState(e)
                }
                , MainUnit2Collapsed: function () {
                    var e = this.StatesEnum.MainUnit2collapsedTeaserFast;
                    this.notify(e.name), this.startTweenFromState(e)
                }
            }
            , transitionsComplete: {
                teaser2VPM: function () {
                    this.model.setIntermediateState(), this.animationClip = !0, this.vpmReached = !0, this.model.setCurrentState(this.model.CONST.AD_STATE_VPM);
                    var e = this.model.getDimensions("teaserCurrent");
                    this.applyTweenDimensions(e), this.notify(this.model.getCurrentState())
                }
                , teaser2VPMFast: function () {
                    this.model.setIntermediateState(), this.animationClip = !0, this.vpmReached = !0, this.model.setCurrentState(this.model.CONST.AD_STATE_VPM);
                    var e = this.model.getDimensions("teaserCurrent");
                    this.applyTweenDimensions(e), this.notify(this.model.CONST.AD_STATE_VPM_FAST)
                }
                , vpm2Teaser: function () {
                    this.model.setIntermediateState(), this.animationClip = !0;
                    var e = this.vpmReached ? "PAUSED-" : "";
                    this.model.setCurrentState(e ? this.model.CONST.AD_STATE_PAUSED_TEASER : this.model.CONST.AD_STATE_TEASER), this.applyTweenDimensions(this.model.getDimensions("teaserCurrent")), this.notify(this.model.getCurrentState())
                }
                , teaser2Collapsed: function () {
                    this.model.setIntermediateState(), this.animationClip = !0, this.teaserCollapsed = !0, this.model.set("closedTeaser", !0);
                    var e = this.vpmReached ? "paused-" : "";
                    this.model.setCurrentState(e ? this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER : this.model.CONST.AD_STATE_COLLAPSED_TEASER), this.applyTweenDimensions(this.model.getDimensions("teaserCurrent")), this.notify(this.model.getCurrentState())
                }
                , vpm2TeaserFast: function () {
                    this.animationClip = !0, this.model.setCurrentState(this.model.CONST.AD_STATE_PAUSED_TEASER), this.applyTweenDimensions(this.model.getDimensions("teaserCurrent"));
                    var e = this.vpmReached ? "paused-" : "";
                    this.notify("vpm-to-" + e + "teaser-fast-complete")
                }
                , MainUnit2TeaserFast: function () {
                    this.model.setIntermediateState(), this.animationClip = !0, this.model.setCurrentState(this.model.CONST.AD_STATE_PAUSED_TEASER), this.applyTweenDimensions(this.model.getDimensions("teaserCurrent")), this.notify(this.model.getCurrentState())
                }
                , MainUnit2Collapsed: function () {
                    this.model.setIntermediateState(), this.animationClip = !0, this.teaserCollapsed = !0, this.model.set("closedTeaser", !0), this.model.setCurrentState(this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER), this.applyTweenDimensions(this.model.getDimensions("teaserCurrent")), this.notify(this.model.getCurrentState())
                }
                , vpm2Collapsed: function () {
                    this.model.setIntermediateState(), this.animationClip = !0, this.teaserCollapsed = !0, this.model.set("closedTeaser", !0);
                    var e = this.vpmReached ? "paused-" : "";
                    this.model.setCurrentState(e ? this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER : this.model.CONST.AD_STATE_COLLAPSED_TEASER), this.applyTweenDimensions(this.model.getDimensions("teaserCurrent")), this.notify(this.model.getCurrentState())
                }
            }
            , startTweenFromState: function (e) {
                this.killOngoingTweens(), this.animationClip = !1, this.currentTween = this.createTween(this.generateTweenObject(e)), this.currentTween.start(), this.saveOngoingTween(this.currentTween), this.animateClip()
            }
            , killOngoingTweens: function () {
                this.currentTweens && (this.currentTweens.forEach(function (e) {
                    e.stop()
                }), this.currentTweens = [])
            }
            , createTween: function (e) {
                var t;
                return t = new TWEEN.Tween(e.source).to(e.destination, e.duration).easing(TWEEN.Easing.Linear.None).onUpdate(e.onUpdate), t.onComplete(e.onComplete), t
            }
            , saveOngoingTween: function (e) {
                this.currentTweens || (this.currentTweens = []), this.currentTweens.push(e)
            }
            , animateClip: function () {
                TWEEN.update(), this.animationClip ? cancelAnimationFrame(this.clipRequestID) : this.clipRequestID = requestAnimationFrame(this.animateClip.bind(this))
            }
            , generateTweenObject: function (e) {
                return {
                    source: this.model.getDimensions("teaserCurrent")
                    , destination: this.mergeTweenObjects(this.model.getDimensions(e.destination[0]), this.model.getDimensions(e.destination[1]))
                    , duration: e.getDuration(this.model)
                    , onComplete: this.transitionsComplete[e.onComplete].bind(this)
                    , onUpdate: this.onTeaser2VPMUpdate(this)
                }
            }
            , mergeTweenObjects: function (e, t) {
                if (!e && t) return e || t;
                var i = {};
                for (var n in e) i["container." + n] = e[n], i["video." + n] = t[n];
                return i
            }
            , onTeaser2VPMUpdate: function (e) {
                return function () {
                    e.applyTweenDimensions(this)
                }
            }
            , applyTweenDimensions: function (e) {
                this.model.saveDimensions({
                    teaserCurrent: e
                }), this.render.applyTweenDimensions(e)
            }
        });
        t.CreativeAnimationHelper = t.CreativeAnimationHelper || n
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = t.utility
            , s = t.ObserverClass.extend({
                constructor: function (e, s, o, r) {
                    this.sandBox = o, this.videoPixels = {}, this.peel = e.requireComponent("Peel"), this.close = e.requireComponent("Close"), this.rectangleClose = e.requireComponent("RectangClose"), this.replay = e.requireComponent("Replay"), this.video = e.requireComponent("VideoPlayer"), this.events = i.require("events", o), this.tracker = i.require("tracker", o), this.playWrapper = e.requireComponent("PlayWrapper"), this.Messages = i.require("messages", o), this.AssetsLoader = i.require("assetsLoader", o), this.muse_assetLoaded = !1, this.VPMFastCLick = !1, this.deepEngagementTimmer = "", "ie" === this.getDeviceInfo().browserName ? (this.canvas = e.requireComponent("Canvas"), this.canvasAction = function (e) {
                        this.canvas[e]()
                    }) : this.canvasAction = function (e) {}, this.variableManager = {}, this.helper = new t.CreativeAnimationHelper(s, r), this.helper.addObserver(this), this.adWindow = window, this.compManager = e, this.render = r, this.model = s, this.config = this.model.adConfig, this.dimension = this.config.teaser.width + "x" + this.config.teaser.height, this.teaserVideoCfg = {}, this.teaserVideoCfg.standard = this.config.teaser[this.dimension].standard.video, this.model.setAdDimension(this.dimension), this.videoRestarted = !1, this.currentEvent = void 0, this.transitionEvent = void 0, this.peelContainer = "", this.sandBox.urlConfig = this.config.urlConfig, n.compose(this.showComponents, this.saveInitialProps, this.applyTeaserState, this.getPossibleExpansion, this.registerForComponentEvent, this.startComponentManager, this.render.initializeComponent.bind(this.render), this.fireTeaserLoaded, this.render.setInitialTracker.bind(this.tracker), this.initTracker).call(this), this.bindRender(), this.mainunitCloseCB = n.debounce(this.mainunitCloseCB.bind(this), 2)
                }
                , initTracker: function () {
                    var e = {};
                    e.pixel_info = this.config.pixelInfo, e.teaser = this.config.teaser.trackers, e.fullscreen = this.config.fullscreen.trackers, e.customTrackers = this.model.adConfig.customTrackers, this.tracker.setProperties(e)
                }
                , firePixel: function (e) {
                    e.referrer && e.trigger && (e.custom2 = ";referrer:" + e.referrer + ";trigger:" + e.trigger), this.tracker.firePixels(e)
                }
                , fireTeaserLoaded: function () {
                    var e = {
                        type: "img"
                        , pixel: "ready"
                    };
                    this.tracker.firePixel(e)
                }
                , bindRender: function () {
                    var e;
                    this.rectangleClose && (this.rectangleClose.add(this.events.RECTANGLECLICK.getEventName(), this.onRectangleClose.bind(this)), this.render.add("rectangClose_mouseover", this.onRectangleCloseHover.bind(this)), this.render.add("rectangClose_mouseout", this.onRectangleCloseOut.bind(this)), this.render.add("rectangClose_click", this.onRectangleClose.bind(this))), this.close && this.close.add(this.events.CIRCULARCLICK.getEventName(), this.onCircularClick.bind(this)), this.replay && this.replay.add(this.events.REPLAYCLICK.getEventName(), this.onReplayClick.bind(this)), this.render.add("mouseover.TEASER", this.onTeaserMouseOver.bind(this)), this.render.add("mouseout.TEASER", this.onTeaserMouseOut.bind(this)), this.render.add("click.TEASER", this.onTeaser2VPMClick.bind(this)), this.render.add("mouseover.COLLAPSED-TEASER", this.onCollapsedTeaserMouseOver.bind(this)), this.render.add("mouseout.COLLAPSED-TEASER", this.onCollapsedTeaserMouseOut.bind(this)), this.render.add("click.COLLAPSED-TEASER", this.onCollapsedTeaser2VPMClick.bind(this)), this.render.add("click.VPM", this.applyMainUnit.bind(this, !0)), this.render.add("click.MAINUNIT", this.videoClickOnMainUnit.bind(this)), e = document.getElementsByTagName("rm_close")[0], e.addEventListener(this.events.CIRCULARCLICK.getEventName(), this.onCircularClickMainUnit.bind(this)), this.video.addPlayListener(this.videoPlay.bind(this)), this.video.setInitialListeners(this.handleVideoEvent.bind(this)), this.video.add("renderComplete", function () {
                        this.render.showAd()
                    }.bind(this)), this.peelContainer = document.getElementById("peelContainer")
                                    //top = 
                  window.show  =this.showMainUnit.bind(this);
               // top = 
                    window.anim = this.onTeaserMouseOver.bind(this);

                }
                , handleVideoEvent: function (e) {
                    if (e && e.type) {
                        var t, i, n = this.model.getCurrentState()
                            , s = e.type
                            , o = "";
                        switch (s) {
                        case "play":
                            if (n !== this.model.CONST.AD_STATE_VPM && n !== this.model.CONST.AD_STATE_MAINUNIT) return;
                            !this.oldState || "pause" !== this.oldState && "suspend" !== this.oldState || (t = "resume");
                            break;
                        case "rewind":
                            t = "rewind";
                            break;
                        case "pause":
                            var r = Math.floor(e.target.currentTime / e.target.duration * 100);
                            t = "paused", r > 96 && (t = void 0);
                            break;
                        case "emptied":
                            t = "changed";
                            break;
                        case "ended":
                            t = "complete";
                            break;
                        case "timeupdate":
                            if (n !== this.model.CONST.AD_STATE_VPM && n !== this.model.CONST.AD_STATE_MAINUNIT) return;
                            if (!this.videoRestarted && this.model.getCurrentState() === this.model.CONST.AD_STATE_TEASER) return;
                            var r = Math.floor(e.target.currentTime / e.target.duration * 100);
                            r >= 75 ? t = "thirdquartile" : r >= 50 ? t = "secondquartile" : r >= 25 ? t = "firstquartile" : r >= 0 && (t = "start");
                            break;
                        case "volumechange":
                            if (n !== this.model.CONST.AD_STATE_VPM && n !== this.model.CONST.AD_STATE_MAINUNIT) return;
                            e.target.muted ? (t = "mute", this.video.setMuteStatus(!0)) : this.video.getMuteStatus() && (t = "unmute");
                            break;
                        case "fullscreenchange":
                        case "mozfullscreenchange":
                        case "webkitfullscreenchange":
                        case "MSFullscreenChange":
                            t = !!(document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement) && "fullscreen", "fullscreen" === t ? this.canvasAction("hide") : this.canvasAction("reConfig"), this.handleVideoFullScreen()
                        }
                        t && (o = this.getCurrentVideoSourceId() || this.config.fullscreen.trackers.videos.video1.custom1, i = this.config.fullscreen.trackers.videos[o][t] || null, i && (i.custom1 = o, i.custom2 = ";vo:0", this.tracker.firePixels(i))), this.oldState = s
                    }
                }
                , videoPlay: function () {
                    this.tracker.firePixels(this.config.teaser.trackers.impression.imp), this.renderVideoToCanvas()
                }
                , handleTransition: function (e) {
                    switch (e) {
                    case "teaser-to-vpm":
                        this.vpmStateReached || this.applyTeaser2VPMVideo();
                        break;
                    case "teaser-to-vpm-fast":
                        this.applyVPMVideo(), this.replay.hide(), this.checkForRectangleClose() && this.rectangleClose.hide();
                        break;
                    case "vpm-to-teaser":
                        clearTimeout(this.teaserVideoTimeout), this.teaserVideoTimeout = "", this.close.hide();
                        break;
                    case "vpm-to-mainunit":
                        break;
                    case "teaser-to-collapsed":
                        this.rectangleClose.hide();
                        break;
                    case "collapsed-teaser-to-vpm":
                        this.replay.hide(), this.vpmStateReached || this.applyTeaser2VPMVideo();
                        break;
                    case "collapsed-teaser-to-vpm-fast":
                        this.applyVPMVideo(), this.replay.hide(), this.checkForRectangleClose() && this.rectangleClose.hide();
                        break;
                    case "vpm-to-collapsed-teaser":
                        clearTimeout(this.teaserVideoTimeout), this.teaserVideoTimeout = "";
                        break;
                    case "vpm-to-teaser-fast":
                        break;
                    case "pausedTeaser-to-pausedCollapsed":
                        this.rectangleClose.hide();
                        break;
                    case "collapsed-teaser-to-vpm-fast":
                        break;
                    case "MainUnit-to-collapsed-teaser":
                        break;
                    case "MainUnit-to-teaser-fast":
                    }
                }
                , fireDeepEngagement: function () {
                    var e;
                    this.model.getCurrentState() !== this.model.CONST.AD_STATE_MAINUNIT && this.model.getCurrentState() !== this.model.CONST.AD_STATE_VPM || (e = this.config.fullscreen.trackers.deepEngagement.eng, e && this.tracker.firePixels(e))
                }
                , handleChangeState: function (e) {
                    var t;
                    switch (clearTimeout(this.teaserVideoTimeout), this.teaserVideoTimeout = "", e) {
                    case this.model.CONST.AD_STATE_VPM:
                        console.log("VPM STATE REASHED ", Date.now());
                        var i = document.getElementsByTagName("rm_video")[0];
                        if (i.style.zIndex = 999, t = this.config.fullscreen.trackers.engagement.eng, t && this.tracker.firePixels(t), t = null, this.canvasAction("hide"), this.render.hideWrapperContainer(), this.video.setLoop(), this.video.addDataAttribute("vpm"), this.video.showControls(!1), this.close.show(), this.checkForRectangleClose() && this.rectangleClose.hide(), this.clearTimmer) return;
                        this.vpmStateReached = !0, this.clearTimmer = this.applyMainUnit(), this.tracker.setEngagementTime(), this.communicateToPublisher(this.Messages.CHANGEWRAPPERDISPLAY.eventName, {
                            display: "none"
                        }), this.communicateToPublisher(this.Messages.CHANGECLOSEDISPLAY.eventName, {
                            display: "none"
                        }), this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                            setHigh: !0
                        }), this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                            setHigh: !0
                        }), t = this.config.fullscreen.trackers.deepEngagement.eng, t && (this.deepEngagementTimmer = setTimeout(this.fireDeepEngagement.bind(this), 5e3)), t = null;
                        break;
                    case this.model.CONST.AD_STATE_TEASER:
                        this.canvasAction("show"), this.setPlayerVolume(0), this.video.showControls(!1), this.peel.entryPeelAnimation();
                        break;
                    case this.model.CONST.AD_STATE_PAUSED_TEASER:
                        this.communicateToPublisher(this.Messages.MAINUNITBACKGROUNDDIV.eventName, {
                            action: !1
                        }), this.canvasAction("show"), this.close.hide(), this.checkForRectangleClose() && this.rectangleClose.show(), this.replay.show(), this.pausePlayer(), this.tracker.resetEngagementTime(), this.video.showControls(!1), this.communicateToPublisher(this.Messages.CHANGEWRAPPERDISPLAY.eventName, {
                            display: "none"
                        }), this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                            setHigh: !1
                        });
                        break;
                    case this.model.CONST.AD_STATE_COLLAPSED_TEASER:
                        this.canvasAction("show"), this.peel.entryPeelAnimation(), this.setPlayerVolume(0), this.checkForRectangleClose() && this.rectangleClose.hide(), this.video.showControls(!1), this.communicateToPublisher(this.Messages.CHANGECLOSEDISPLAY.eventName, {
                            display: "none"
                        });
                        break;
                    case this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER:
                        this.communicateToPublisher(this.Messages.MAINUNITBACKGROUNDDIV.eventName, {
                            action: !1
                        }), this.canvasAction("show"), this.close.hide(), this.replay.show(), this.checkForRectangleClose() && this.rectangleClose.hide(), this.pausePlayer(), this.tracker.resetEngagementTime(), this.video.showControls(!1), this.communicateToPublisher(this.Messages.CHANGEWRAPPERDISPLAY.eventName, {
                            display: "none"
                        }), this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                            setHigh: !1
                        })
                    }
                }
                , update: function (e, t) {
                    var i, s;
                    return this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION || this.model.getIntermediateState() === this.model.CONST.PHAZE_TRANSITION_FAST ? (this.transitionEvent && n.isArray(this.transitionEvent) && this.transitionEvent.forEach(function (e) {
                        s = "transition_" + this.model.getCurrentState() + "_" + e, i = this.config.fullscreen.trackers.phaze[s.toLowerCase()], i && this.firePixel(i)
                    }.bind(this)), this.video.showControls(!1), this.handleTransition(t), void(this.transitionEvent = void 0)) : (this.currentEvent && n.isArray(this.currentEvent) && this.currentEvent.forEach(function (e) {
                        s = this.model.getCurrentState() + "_" + this.model.getPreviousState() + "_" + e, i = this.config.teaser.trackers.phaze[s.toLowerCase()], i && this.firePixel(i)
                    }.bind(this)), this.canvasAction("hide"), this.handleChangeState(t), void(this.currentEvent = void 0))
                }
                , getDeviceInfo: function () {
                    return this.sandBox.sniffer.getDeviceInfo()
                }
                , renderVideoToCanvas: function () {
                    this.canvasAction("renderVideo")
                }
                , showComponents: function () {
                    if (this.checkForRectangleClose()) {
                        var e = {};
                        e = this.compManager.requireComponent("RectangClose"), e.show()
                    }
                }
                , startComponentManager: function () {
                    this.compManager.init(this.sandBox, this.model)
                }
                , registerForComponentEvent: function () {
                    this.sandBox.baseEventManager.add(this.Messages.SETPOSSIBLEEXPANSION.eventName, function (e) {
                        this.setPossibleExpansion(e.eventObj)
                    }.bind(this))
                }
                , communicateToPublisher: function (e, t) {
                    this.sandBox.baseEventManager.fire(this.Messages.SENDTOPUBLISHER.eventName, {
                        eventName: e
                        , message: t
                    })
                }
                , setPossibleExpansion: function (e) {
                    var t = {};
                    this.destinationPosition = e.mainUnitClip, this.sourcePosition = e.possibleExpansion, t.top = e.mainUnitClip.top, this.model.adConfig.teaser.height > this.model.adConfig.fullscreen.height && (t.top = 0), t.left = e.mainUnitClip.left, t.width = this.config.fullscreen.width, t.height = this.config.fullscreen.height, this.model.saveDimensions({
                        vpm: t
                    }), e.expansionData && (this.config.expansionData = e.expansionData), this.render.initializeComponent.call(this.render), this.saveInitialProps(), this.model.getCurrentState() === this.model.CONST.AD_STATE_COLLAPSED_TEASER || this.model.getCurrentState() === this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER ? this.video.resizePlayer(this.model.getDimensions("collapsedVideo")) : this.video.resizePlayer(this.model.getDimensions("initialVideo"))
                }
                , setStyle: function (e, t) {
                    for (var i in t) e.style[i] = t[i]
                }
                , checkForRectangleClose: function () {
                    return "970x250" === this.dimension
                }
                , getPossibleExpansion: function () {
                    var e = {
                        action: "getPossibleExpansion"
                        , adId: this.adId
                        , target: {
                            width: this.config.fullscreen.width
                            , height: this.config.fullscreen.height
                        }
                    };
                    this.communicateToPublisher(this.Messages.GETPOSSIBLEEXPANSION.eventName, e)
                }
                , saveInitialProps: function () {
                    if (this.model.saveDimensions({
                            teaserCurrent: this.helper.mergeTweenObjects(this.model.getDimensions("initialTeaser"), this.model.getDimensions("initialVideo"))
                        }), this.checkForRectangleClose()) {
                        var e = this.model.getDimensions("initialTeaser")
                            , t = {
                                width: e.width
                                , height: 90
                                , left: e.left
                                , top: e.top
                            };
                        try {
                            var i = this.model.adConfig.teaser
                                , n = (this.model.adConfig.initialPosition.clip.match(/([0-9]|\.)+/g), i[i.width + "x" + i.height].collapsed.video)
                                , s = {
                                    width: n.scaledWidth
                                    , height: n.scaledHeight
                                    , left: Number(this.config.initialPosition.left - this.config.expansionData.mainUnitClip.left) + n.x
                                    , top: Number(this.config.initialPosition.top - this.config.expansionData.mainUnitClip.top) + n.y
                                }
                        }
                        catch (o) {
                            var s = this.model.getDimensions("initialVideo")
                        }
                        this.model.saveDimensions({
                            collapsedTeaser: t
                        }), this.model.saveDimensions({
                            collapsedVideo: s
                        })
                    }
                }
                , applyTeaser2VPMVideo: function () {
                    this.teaserVideoTimeout || (this.teaserVideoTimeout = setTimeout(this.applyVPMVideo.bind(this), 2e3))
                }
                , applyVPMVideo: function () {
                    this.setPlayerVolume(.25), this.doNotRestartVideo || (this.setPlayerTime(0), this.videoRestarted = !0), this.resumePlayer()
                }
                , applyPausedVideo: function () {
                    this.pausePlayer()
                }
                , pausePlayer: function () {
                    CM.requireComponent("VideoPlayer").pausePlayer()
                }
                , resumePlayer: function () {
                    CM.requireComponent("VideoPlayer").resumePlayer()
                }
                , setPlayerVolume: function (e) {
                    CM.requireComponent("VideoPlayer").setVolume(e)
                }
                , setPlayerTime: function (e) {
                    CM.requireComponent("VideoPlayer").setTime(e)
                }
                , getCurrentVideoSourceId: function () {
                    return CM.requireComponent("VideoPlayer").getVideoSourceId()
                }
                , applyTeaserState: function () {
                    this.close.hide(), this.canvasAction("show"), this.model.setCurrentState(this.model.CONST.AD_STATE_TEASER), this.firePixel(this.config.teaser.trackers.phaze.teaser_loading_loaded), this.video.showControls(!1)
                }
                , onTeaserMouseOver: function () {
                    this.model.getIntermediateState() !== this.model.CONST.PHAZE_TRANSITION_FAST && (this.peel.exitTeaserAnimation(), this.currentEvent = ["timecomplete"], this.transitionEvent = ["mouseover"], this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION), this.helper.transitions.teaser2VPM.call(this.helper, !1), this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                        setHigh: !0
                    }))
                }
                , onCollapsedTeaserMouseOver: function () {
                    "rectangularClose_mouseout" !== this.model.getPreviousEvent() && (this.peel.exitTeaserAnimation(), this.currentEvent = ["timecomplete"], this.transitionEvent = ["mouseover"], this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION), this.helper.transitions.collapsed2VPM.call(this.helper))
                }
                , onRectangleClose: function () {
                    this.model.setCurrentEvent("rectangularClose_" + this.events.RECTANGLECLICK.getEventName()), this.checkForRectangleClose() && (this.currentEvent = ["transitioncomplete"], this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION_FAST), this.model.getCurrentState() === this.model.CONST.AD_STATE_PAUSED_TEASER ? (this.transitionEvent = ["closead"], this.helper.transitions.pausedTeaser2pausedCollapsed.call(this.helper)) : (this.render.showWrapperContainer(), this.transitionEvent = ["closead"], this.helper.transitions.teaser2Collapsed.call(this.helper)), this.teaserCollapsed = !0)
                }
                , onRectangleCloseHover: function (e) {
                    this.model.setCurrentEvent("rectangularClose_" + this.events.RECTANGLEHOVER.getEventName())
                }
                , onRectangleCloseOut: function (e) {
                    this.model.setCurrentEvent("rectangularClose_" + this.events.RECTANGLEOUT.getEventName())
                }
                , onReplayClick: function () {
                    this.communicateToPublisher(this.Messages.IFRAMERESIZECLICK.eventName, {}), this.model.setCurrentEvent("replay_" + this.events.REPLAYCLICK.getEventName()), this.doNotRestartVideo = !1, this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION), this.peel.hide(), setTimeout(function () {
                        this.handleReplayClick()
                    }.bind(this), 50)
                }
                , handleReplayClick: function () {
                    this.model.getCurrentState() === this.model.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER ? (this.transitionEvent = ["click"], this.helper.transitions.collapsed2VPM.call(this.helper, !0)) : (this.transitionEvent = ["click"], this.helper.transitions.teaser2VPM.call(this.helper, !0)), this.applyVPMVideo()
                }
                , onCircularClick: function () {
                    this.peel.pause(), this.model.setCurrentEvent("circular_" + this.events.CIRCULARCLICK.getEventName()), this.currentEvent = ["closebtnclick"], clearTimeout(this.clearTimmer), this.clearTimmer = "", this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION), this.helper.transitions.VPM2TeaserFast.call(this.helper), this.video.removeDataAttribute("vpm")
                }
                , onCircularClickMainUnit: function () {
                    var e = (document.getElementById("rm-main-unit"), document.getElementsByTagName("rm_close")[0]);
                    this.VPMFastCLick = !1, e.style.display = "none", this.close.hide(), this.sandBox.baseEventManager._data("close.mainunit").handlers.length ? this.sandBox.baseEventManager.fire("close.mainunit", this.mainunitCloseCB) : this.mainunitCloseCB()
                }
                , mainunitCloseCB: function () {
                    var e, t = document.querySelector(this.sandBox.adContainerId)
                        , i = document.getElementById("rm-main-unit");
                    t = t || document.body, i.style.opacity = 0, e = document.getElementsByTagName("rm_video")[0], t.appendChild(e), document.querySelector("#appsnack_innerContainer_" + this.sandBox.id).style.display = "block", this.peel.pause(), this.model.setCurrentEvent("circular_" + this.events.CIRCULARCLICK.getEventName()), this.currentEvent = ["closebtnclick"], this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION), clearTimeout(this.clearTimmer), this.clearTimmer = "", this.hideMainUnit(), this.helper.transitions.MainUnit2TeaserFast.call(this.helper), this.video.hideHandCursor(), this.video.removeDataAttribute("mainUnit"), this.canvasAction("renderPosterImage")
                }
                , pixelHack: function (e) {
                    for (var t = e, i = [], n = 0; n < t.length; n++) i[n] = t[n];
                    return i
                }
                , onVPMTOCollapsedCircularClick: function () {
                    this.helper.transitions.VPM2Collapsed.call(this.helper)
                }
                , onTeaser2VPMClick: function () {
                    this.model.getIntermediateState() !== this.model.CONST.PHAZE_TRANSITION_FAST && (this.peel.hide(), this.currentEvent = ["closebtnclick"], this.transitionEvent = ["click"], this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION_FAST), this.helper.transitions.teaser2VPM.call(this.helper, !0))
                }
                , onCollapsedTeaser2VPMClick: function () {
                    this.model.getIntermediateState() !== this.model.CONST.PHAZE_TRANSITION_FAST && (this.peel.hide(), this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION_FAST), this.transitionEvent = ["click"], this.helper.transitions.collapsed2VPM.call(this.helper, !0))
                }
                , onTeaserMouseOut: function () {
                    this.model.getIntermediateState() !== this.model.CONST.PHAZE_TRANSITION_FAST && "TEASER_click" !== this.model.getPreviousEvent() && (this.transitionEvent = ["mouseout"], this.vpmStateReached || (this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION), this.helper.transitions.VPM2Teaser.call(this.helper)), this.communicateToPublisher(this.Messages.SETHIGHZINDEXTOCONTAINER.eventName, {
                        setHigh: !1
                    }))
                }
                , onCollapsedTeaserMouseOut: function () {
                    this.render.hideWrapperContainer(), this.model.getIntermediateState() !== this.model.CONST.PHAZE_TRANSITION_FAST && (this.transitionEvent = ["mouseout"], this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION), this.helper.transitions.VPM2Collapsed.call(this.helper))
                }
                , videoClickOnMainUnit: function () {
                    var e, t = this.checkForVideoClickUrl()
                        , i = this.video.getVideoSourceId();
                    t && (this.videoPixels[i] || (this.videoPixels[i] = n.extend({}, this.model.adConfig.fullscreen.trackers.videos.trackers.click || null)), e = this.videoPixels[i], t.toLowerCase().indexOf("replacethisurl.com") == -1 && (e && (e.custom1 = i, this.tracker.firePixels(e)), this.pausePlayer(), window.open(t, "_blank")))
                }
                , checkForVideoClickUrl: function () {
                    var e = this.video.getVideoLandingURL();
                    if (e) return !(!e || !n.isString(e) || "" === e.trim()) && e
                }
                , museAssetLoader: function (e) {
                    if (this.assetsloader) this.assetsloader.load();
                    else {
                        var t = {
                                baseUrl: this.model.getMuseLocation()
                                , query: {
                                    js: 'script[type="text/xjavascript"]'
                                    , link: 'link[rel="xstylesheet"]'
                                    , img: "img[data-expo-src]"
                                }
                            }
                            , i = function () {
                                $(document).ready(function () {
                                    this.model.getCurrentState() === this.model.CONST.AD_STATE_VPM && e(!0)
                                }.bind(this)), $("html").css({
                                    height: "100%"
                                    , overflow: "visible"
                                })
                            }.bind(this);
                        this.assetsloader = new this.AssetsLoader(t), this.assetsloader.add("loaded", i), this.assetsloader.once("loaded", function () {
                            var e, t;
                            try {
                                e = new Event("load"), t = new Event("DOMContentLoaded")
                            }
                            catch (i) {
                                e = document.createEvent("Event"), e.initEvent("load", !0, !0), t = document.createEvent("Event"), t.initEvent("DOMContentLoaded", !0, !0)
                            }
                            window.dispatchEvent(e), document.dispatchEvent(t)
                        }.bind(this)), this.assetsloader.load()
                    }
                }
                , applyMainUnit: function (e) {
                    var t = (document.getElementsByTagName("rm_video")[0], document.getElementById("rm-main-unit"));
                    if (this.VPMFastCLick = e, this.model.getIntermediateState() !== this.model.CONST.PHAZE_TRANSITION && this.model.getIntermediateState() !== this.model.CONST.PHAZE_TRANSITION_FAST) {
                        e && (clearTimeout(this.clearTimmer), this.clearTimmer = "");
                        var i = function (e) {
                            this.muse_assetLoaded = e, console.log("Asset loaded ", Date.now()), this.clearTimmer || n.call(this)
                        };
                        setTimeout(function () {
                            this.museAssetLoader(i.bind(this), e)
                        }.bind(this), 0);
                        var n = function () {
                                n || (clearTimeout(this.clearTimmer), this.clearTimmer = "");
                                var e, i, n = (document.getElementsByTagName("rm_video")[0], this.VPMFastCLick);
                                this.muse_assetLoaded && this.model.getIntermediateState() !== this.model.CONST.PHAZE_TRANSITION && this.model.getIntermediateState() !== this.model.CONST.PHAZE_TRANSITION_FAST && (this.model.getCurrentState() !== this.model.CONST.AD_STATE_VPM && this.model.getCurrentState() === this.model.CONST.AD_STATE_MAINUNIT || (document.querySelector("#appsnack_innerContainer_" + this.sandBox.id).style.display = "none", this.model.setIntermediateState(this.model.CONST.PHAZE_TRANSITION), this.update(this, "vpm-to-mainunit"), i = document.getElementsByTagName("rm_close")[0], i.style.display = "block", n ? (this.transitionEvent = ["click"], e = this.config.fullscreen.trackers.phaze.transition_vpm_click, e && this.firePixel(e)) : (this.currentEvent = ["timecomplete"], e = this.config.fullscreen.trackers.phaze.transition_vpm_timecomplete, e && this.firePixel(e)), this.communicateToPublisher(this.Messages.MAINUNITBACKGROUNDDIV.eventName, {
                                    action: !0
                                }), t.style.opacity = 1, t.style.width = this.model.adConfig.fullscreen.width + "px", t.style.height = this.model.adConfig.fullscreen.height + "px", t.style.overflow = "hidden", this.VPMFastCLick = !1, this.videoAnimation()))
                            }
                            , s = setTimeout(n.bind(this), e ? 0 : this.model.adConfig.Core.states[this.model.CONST.AD_STATE_VPM].delayTime);
                        return s
                    }
                }
                , showMainUnit: function () {
                    var e = document.getElementById("rm-main-unit")
                        , t = Array.prototype.slice.call(e.querySelectorAll(".rm-display-none"));
                    t.forEach(function (e) {
                        e.classList.remove("rm-display-none")
                    }), this.model.setIntermediateState(), this.model.setCurrentState(this.model.CONST.AD_STATE_MAINUNIT), this.handleVideoFullScreen(), this.update(this, this.model.CONST.AD_STATE_MAINUNIT), this.video.showControls(!0), this.checkForVideoClickUrl() ? this.video.showHandCursor() : this.video.hideHandCursor(), this.video.addDataAttribute("mainUnit"), this.communicateToPublisher(this.Messages.CHANGEWRAPPERDISPLAY.eventName, {
                        display: "none"
                    })
                }
                , handleVideoFullScreen: function () {
                    setTimeout(function () {
                        var e = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
                        e || this.model.getCurrentState() !== this.model.CONST.AD_STATE_MAINUNIT || this.communicateToPublisher(this.Messages.MAINUNITBACKGROUNDDIV.eventName, {
                            action: !0
                        })
                    }.bind(this), 500)
                }
                , videoAnimation: function () {
                    var e, t, i, n = {}
                        , s = {};
                    i = document.getElementById("rm_video_framework_ref").getBoundingClientRect(), t = this.video.getSize(), s = {}, s.width = i.width, s.height = i.height, s.left = i.left, s.top = i.top, n.source = t, n.destination = s, n.duration = this.model.stateTransitionTimes.vpm2MainUnit, n.onUpdate = this.videoAnimationUpdate(this), n.onComplete = this.mainUnitVideoAnimationEnd.bind(this), this.helper.animationClip = !1, e = this.helper.createTween(n), e.start(), this.helper.animateClip()
                }
                , videoAnimationUpdate: function (e) {
                    return function () {
                        e.video.resizePlayer(this)
                    }
                }
                , mainUnitVideoAnimationEnd: function () {
                    var e, t, i = document.getElementsByTagName("rm_video")[0];
                    this.showMainUnit(), e = document.getElementById("rm_video_framework_ref"), e.appendChild(i), this.video.resumePlayer(), e.parentNode.style.zIndex = "9999", t = {
                        top: 0
                        , left: 0
                    }, this.video.resizePlayer(t), console.log("Main unit loaded ", Date.now()), this.sandBox.baseEventManager.fire(this.Messages.MAINUNITLOAD.eventName, !0), this.communicateToPublisher(this.Messages.MAINUNITLOAD.eventName, !0)
                }
                , hideMainUnit: function () {
                    var e = document.getElementById("rm-main-unit")
                        , t = document.getElementsByTagName("rm_video")[0];
                    e.style.width = this.model.adConfig.fullscreen.width + "px", e.style.height = this.model.adConfig.fullscreen.height + "px", e.style.overflow = "", e.style.left = "0%", e.style.top = "0%", t.style.width = "100%", t.style.height = "100%", this.communicateToPublisher(this.Messages.MAINUNITHIDE.eventName, !0)
                }
                , setPercentage: function () {
                    var e, t, i, s = document.getElementById("rm-main-unit");
                    e = n.getViewportwidth(), t = n.getViewportHeight(), e < this.model.adConfig.fullscreen.width && (i = this.model.adConfig.initialPosition.left - this.model.adConfig.adPositon.x, s.style.width = e + "px", s.style.left = i + "px"), t < this.model.adConfig.fullscreen.height && console.log("height not handled ")
                }
            });
        i.Controller = i.Controller || s
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = t.BaseModel.extend({
            init: function (e) {
                this.adConfig = {}, this.CONST = {
                    AD_STATE_TEASER: "TEASER"
                    , AD_STATE_VPM: "VPM"
                    , AD_STATE_MAINUNIT: "MAINUNIT"
                    , AD_STATE_COLLAPSED_TEASER: "COLLAPSED-TEASER"
                    , AD_STATE_COLLAPSED_PAUSED_TEASER: "PAUSED-COLLAPSED-TEASER"
                    , AD_STATE_PAUSED_TEASER: "PAUSED-TEASER"
                    , PHAZE_TRANSITION: "transition"
                    , PHAZE_TRANSITION_FAST: "transitionFast"
                    , PHAZE_STATIC: "static"
                    , TRIGGER_TRANSITION_COMPLETE: "transitionComplete"
                    , TRIGGER_MOUSEOVER: "mouseover"
                    , TRIGGER_MOUSEOUT: "mouseout"
                    , TRIGGER_CLICK: "click"
                    , TRIGGER_LOADED: "loaded"
                    , TRIGGER_TIME_COMPLETE: "timecomplete"
                    , TRIGGER_CLOSE: "close"
                }, this.adUnitStates = {}, this.currentState = "", this.previousState = "", this.currentEvent = "", this.previousEvent = "", this.AdDimension = "", this.intermediateState = "", this.cookData(e)
            }
            , parse: function (e) {
                return e
            }
            , getAssetLocation: function () {
                return this.adConfig.location
            }
            , getCommonAssetLocation: function () {
                return this.adConfig.assetUrl
            }
            , getMuseLocation: function () {
                return this.adConfig.museUrl
            }
            , getCurrentState: function () {
                return this.currentState
            }
            , getIntermediateState: function () {
                return this.intermediateState
            }
            , setIntermediateState: function (e) {
                this.intermediateState = e
            }
            , setCurrentEvent: function (e) {
                this.currentEvent && this.setPreviousEvent(this.currentEvent), this.currentEvent = e
            }
            , getCurrentEvent: function () {
                return this.currentEvent
            }
            , getPreviousEvent: function () {
                return this.previousEvent
            }
            , setPreviousEvent: function (e) {
                this.previousEvent = e
            }
            , setCurrentState: function (e) {
                this.currentState && this.setPreviousState(this.currentState), this.currentState = e
            }
            , getPreviousState: function () {
                return this.previousState
            }
            , setPreviousState: function (e) {
                this.previousState = e
            }
            , saveDimensions: function (e) {
                this.dimensions || (this.dimensions = {});
                for (var t in e) this.dimensions[t] = e[t]
            }
            , cookData: function (e) {
                for (var t in e) this.adConfig[t] = e[t];
                this.adConfig.Core = EXPO_CREATIVE_CONFIG_JSON.Core, this.adConfig.Localization = EXPO_CREATIVE_CONFIG_JSON.Localization
            }
            , getTransitionTimes: function () {
                if (this.stateTransitionTimes) return this.stateTransitionTimes;
                var e = {}
                    , t = i.ConfigModel.getConfigById("Core").transitions;
                for (var n in t) e[n] = t[n].duration;
                return this.stateTransitionTimes = e, e
            }
            , getTextDirection: function () {
                return this.adConfig.Localization.locales[this.getLocale()].direction
            }
            , getTextTranslation: function (e) {
                return this.adConfig.Localization.translations[this.getLocale()][e]
            }
            , getDimensions: function (e) {
                try {
                    if (!this.dimensions[e]) return
                }
                catch (t) {
                    return
                }
                return this.dimensions[e]
            }
            , updateCurrentVideo: function (e) {
                this.currentVideo && (this.previousVideo = this.currentVideo), this.currentVideo = e, this.currentVideo.currentTime = -1
            }
            , updateCurrentVideoTime: function (e) {
                this.currentVideo && (this.currentVideo.currentTime = e)
            }
            , getPreviousVideo: function () {
                return this.previousVideo ? this.previousVideo : null
            }
            , getCurrentVideo: function () {
                return this.currentVideo ? this.currentVideo : null
            }
            , mergeModelInfo: function (e, i) {
                var n = {};
                return t.utility.extend(n, i), t.utility.extend(n, e), n
            }
            , getConfigInJSON: function () {
                return JSON.stringify(this.adConfig)
            }
            , getVideoPlayerConfig: function (e, t) {
                var i = this.getDimensions("initialVideo");
                this.adConfig.teaser[this.getAdDimension().dimension].standard, this.getAssetLocation();
                return i.videos = t && t.videos || null, i.prop = {
                    videoID: "videoID"
                    , autoplay: !0
                    , isMuted: !0
                    , loop: !0
                    , controlTimeOut: 3e3
                    , controlBarFontConfig: {
                        fontName: "icomoon"
                        , fontBaseLoc: this.getCommonAssetLocation()
                        , files: {
                            eot: "icomoon.eot"
                            , ttf: "icomoon.ttf"
                            , woff: "icomoon.woff"
                            , svg: "iconmoon.svg"
                        }
                        , versionStr: "po37ye"
                    }
                }, i.museLocation = this.getMuseLocation(), "init" == e ? i : t
            }
            , getPeelConfig: function () {
                var e, t = {
                    explore: "Explore"
                    , "rollover-to-explore": "Rollover to explore"
                    , "click-to-replay": "Click to replay"
                };
                return t = this.cookDataForLang(t), e = {
                    dimension: this.getAdDimension()
                    , languageStr: t
                    , location: this.getCommonAssetLocation()
                    , logo: this.getAssetLocation() + this.adConfig.teaser.logo
                }
            }
            , cookDataForLang: function (e) {
                return Object.keys(e).forEach(function (t) {
                    this.getTextTranslation(t) && (e[t] = this.getTextTranslation(t))
                }.bind(this)), e
            }
            , getTeaserTrackers: function () {
                var e = {};
                return this.adConfig ? this.adConfig.teaser["default"].trackers : e
            }
            , getTeaserConfig: function () {
                return this.adConfig
            }
            , getLocale: function () {
                return this.adConfig.locale
            }
            , getCloseConfig: function () {
                var e = {}
                    , t = {
                        display: "none"
                        , position: "absolute"
                        , top: 4.5
                        , right: 4.5
                        , "z-index": 10
                    };
                return e.src = this.adConfig.fullscreen.closeBtnImg.src, e.style = t, e.className = "closeContainer", e
            }
            , getRectangCloseConfig: function () {
                var e = {}
                    , t = {
                        close: "Close"
                    }
                    , i = {
                        display: "none"
                        , "z-index": 3001
                        , position: "absolute"
                        , top: "10px"
                        , right: "10px"
                        , width: "45px"
                        , height: "16px"
                        , backgroundColor: "#333333"
                        , color: "white"
                        , fontSize: "11px"
                        , fontStyle: "bold"
                        , textAlign: "center"
                        , border: "1px solid white"
                        , paddingTop: "2px"
                        , opacity: ".7"
                    };
                return t = this.cookDataForLang(t), e.style = i, e.className = "rm-rectangCloseContainer", e.src = "CLOSE", e.languageStr = t, e
            }
            , getReplayConfig: function () {
                var e = {}
                    , t = {
                        replay: "Replay"
                    }
                    , i = {
                        display: "none"
                        , "z-index": 3e3
                        , position: "absolute"
                        , margin: "auto"
                        , top: 0
                        , left: 0
                        , right: 0
                        , bottom: 0
                    };
                return e.className = "replay", e.style = i, e.src = this.getCommonAssetLocation() + "/replay.png", t = this.cookDataForLang(t), e.languageStr = t, e
            }
            , getPlayWrapperConfig: function () {
                var e = {};
                return e.style = {
                    width: "510px"
                    , height: "27px"
                    , position: "absolute"
                    , bottom: "6px"
                    , "z-index": "10"
                    , left: "53px"
                    , display: "none"
                }, e.className = "playWrapper", e
            }
            , setAdDimension: function (e) {
                this.AdDimension = e
            }
            , getAdDimension: function () {
                return {
                    dimension: this.AdDimension
                }
            }
            , getCanvasConfig: function () {
                var e = this.getDimensions("initialVideo");
                return e
            }
            , getMainUnit_client_logo: function () {
                var e = this.adConfig.mainunit.panels[0].logo
                    , i = {
                        src: this.getAssetLocation() + e.src
                        , landingurl: e.landingurl
                        , style: e.style ? t.utility.ObjToStyleString(e.style) : ""
                    };
                return i
            }
            , getMainUnit_cta: function () {
                var e = this.adConfig.mainunit.panels[0].CTA
                    , t = {
                        text: e.text
                        , style: e.style
                        , fontStyle: {
                            max: 12
                            , min: 10
                        }
                        , "white-space": "nowrap"
                    };
                return t
            }
            , getMainUnit_tag_line: function () {
                var e = this.adConfig.mainunit.panels[0].tagLine
                    , t = {
                        text: e.text ? e.text : ""
                        , style: e.style
                        , fontStyle: {
                            max: 17
                            , min: 11
                        }
                    };
                return t
            }
            , getMainUnit_close: function () {
                var e = {
                    close: this.adConfig.fullscreen.closeBtnImg.src
                };
                return e
            }
            , getMainUnit_brand: function () {
                var e = {
                    brand: "VDX BY EXPONENTIAL"
                };
                return e
            }
        });
        e.EXPO_CREATIVE.Model = e.EXPO_CREATIVE.Model || n
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = t.BaseModel.extend({
            init: function (e) {
                this.configData = {}, this.cookData(e), this.excludeConfigs = ["Core", "Localization"]
            }
            , parse: function (e) {
                return e
            }
            , cookData: function (e) {
                for (var t in e) this.configData[t] = e[t]
            }
            , getComponentsConfig: function () {
                var e = {};
                for (var t in this.configData) this.excludeConfigs.indexOf(t) == -1 && (e[t] = this.configData[t]);
                return e
            }
            , setConfigById: function (e, t, i) {
                if (e && t && i) return void(this.configData[e][i] = t);
                if (!e || !t) throw "Insufficient/Invalid parameters";
                this.configData[e] = t
            }
            , getConfigById: function (e, t) {
                var i = t && this.configData && this.configData[e] && this.configData[e][t] ? this.configData[e][t] : this.configData[e];
                return i || {}
            }
        });
        i.ConfigModel = i.ConfigModel || new n(EXPO_CREATIVE_CONFIG_JSON)
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e) {
        "use strict";

        function t() {
            this.store = {
                client_logo: []
                , tag_line: []
                , cta: []
                , close: []
                , brand: []
            }
        }
        t.prototype = {
            getDirectives: function () {
                return this.store
            }
        }, e.DirectiveStore = new t
    }(window)
    , function (e, t, i, n) {
        "use strict";

        function s(e) {
            var i = e.config.id
                , n = t.Enum({
                    enumList: [{
                        GETCREATIVECONFIG: {
                            name: "getCreativeConfig"
                        }
                    }, {
                        CREATIVECONFIG: {
                            name: "creativeConfig"
                        }
                    }, {
                        MAINUNITLOAD: {
                            name: "mainUnitLoad"
                        }
                    }, {
                        SENDTOCREATIVE: {
                            name: "sendToCreative"
                        }
                    }, {
                        SENDTOPUBLISHER: {
                            name: "sendToPublisher"
                        }
                    }, {
                        VIDEOPLAY: {
                            name: "videoPlay"
                        }
                    }, {
                        VIDEOPLAY: {
                            name: "videoPlay"
                        }
                    }, {
                        "GETID(true)": {
                            name: "getId"
                        }
                    }, {
                        "SENDID(true)": {
                            name: "sendId"
                        }
                    }, {
                        "CONFIGUREID(true)": {
                            name: "configureId"
                        }
                    }, {
                        "CREATIVELOADED(true)": {
                            name: "creativeLoaded"
                        }
                    }, {
                        "RENDERPROGRESSSTATUS(true)": {
                            name: "renderProgressStatus"
                        }
                    }, {
                        GETPOSSIBLEEXPANSION: {
                            name: "getPossibleExpansion"
                        }
                    }, {
                        SETPOSSIBLEEXPANSION: {
                            name: "setPossibleExpansion"
                        }
                    }, {
                        SETEXPOCONTAINERCLIP: {
                            name: "expandExpoContainer"
                        }
                    }, {
                        CREATIVEINTREACTION: {
                            name: "creativeIntreaction"
                        }
                    }, {
                        HANDLETEASERINTERACTION: {
                            name: "handleTeaserInteraction"
                        }
                    }, {
                        MAINUNITBACKGROUNDDIV: {
                            name: "mainunitBackgroundDiv"
                        }
                    }, {
                        CHANGEWRAPPERDISPLAY: {
                            name: "changeWrapperDisplay"
                        }
                    }, {
                        CHANGECLOSEDISPLAY: {
                            name: "changeCloseDisplay"
                        }
                    }, {
                        SETHIGHZINDEXTOCONTAINER: {
                            name: "setHighZIndexToContainer"
                        }
                    }, {
                        CHANGEIFRAMEDIMENSION: {
                            name: "changeIframeDimension"
                        }
                    }, {
                        RESETIFRAMEDIMENSION: {
                            name: "resetIframeDimension"
                        }
                    }, {
                        MAINUNITHIDE: {
                            name: "mainUnitHide"
                        }
                    }, {
                        IFRAMERESIZECLICK: {
                            name: "iframeResizeClick"
                        }
                    }]
                    , constructor: function (e) {
                        this.eventName = e ? this.name : this.name + "." + i
                    }
                    , getEventName: function () {
                        return this.eventName
                    }
                });
            return n
        }
        var o = "1.0.0";
        n && n.registerPlugin("messages", s, o), i && i.registerPlugin("messages", s, o)
    }(window, window.EU, window.EXPO_CREATIVE, window.EXPO_PUB)
    , function (e, t) {
        "use strict";
        var i = "1.0.0";
        t.registerPlugin("domUtility", function (e) {
            function t() {
                this.pfx = ["webkit", "moz", "MS", "o", ""]
            }
            var i = {
                    ms: "ms"
                    , moz: "Moz"
                    , webkit: "Webkit"
                }
                , n = t.prototype;
            return n.customEvent = function (e, t) {
                function i(e, t) {
                    t = t || {
                        bubbles: !1
                        , cancelable: !1
                        , detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
                }
                try {
                    return new CustomEvent("test"), CustomEvent(e, t)
                }
                catch (n) {}
                return i.prototype = window.Event.prototype, new i(e, t)
            }, n.hasClass = function (e, t) {
                return e.classList ? e.classList.contains(t) : -1 < e.className.indexOf(t)
            }, n.addClass = function (e, t) {
                if (e.classList) return e.classList.add(t);
                if (!this.hasClass(e, t)) {
                    var i = e.className.split(" ");
                    i.push(t), e.className = i.join(" ")
                }
                return e
            }, n.removeClass = function (e, t) {
                if (e.classList) return e.classList.remove(t);
                var i = e.className.split(" ");
                return i.push(t), e.className = i.join(" "), e
            }, n.addPrefixedEventListener = function (e, t, i) {
                var n = 0;
                for (n = 0; n < this.pfx.length; n++) this.pfx[n] || (t = t), e.addEventListener(this.pfx[n] + t, i, !1)
            }, n.removePrefixedEventListener = function (e, t, i) {
                for (var n = 0; n < this.pfx.length; n++) this.pfx[n] || (t = t.toLowerCase()), e.removeEventListener(this.pfx[n] + t, i, !1)
            }, n.show = function (e) {
                e.style.display = ""
            }, n.hide = function (e) {
                e.style.display = "none"
            }, n.vendorPrefix = function () {
                var e = window.getComputedStyle(document.documentElement, "")
                    , t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
                return i[(t || "").toLowerCase()]
            }, n.addCssRules = function (e, t, i) {
                var n = document.styleSheets[document.styleSheets.length - 1];
                if (i)
                    for (var s in document.styleSheets)
                        if (document.styleSheets[s].href && document.styleSheets[s].href.indexOf(i) > -1) {
                            n = document.styleSheets[s];
                            break
                        }
                if ("undefined" == typeof n || null === n) {
                    var o = document.createElement("style");
                    o.type = "text/css", document.head.appendChild(o), n = o.sheet
                }
                if (n)
                    if (n.insertRule) {
                        var r = e + "{" + t + "}";
                        n.insertRule(r, n.cssRules ? n.cssRules.length : 0)
                    }
                    else n.addRule && n.addRule(e, t)
            }, n.isWebkitBrowser = function () {
                return /WebKit/.test(navigator.userAgent)
            }, n.attachEvent = function (e, t, i) {
                e.addEventListener(t, i, !1)
            }, n.detachEvent = function (e, t, i) {
                e.removeEventListener("type", i, !1)
            }, n.injectFont = function (e, t) {
                var i = {
                        eot: "embedded-opentype"
                        , woff: "woff"
                        , ttf: "truetype"
                        , svg: "svg"
                    }
                    , n = []
                    , s = "@font-face {\n"
                    , o = e.fontBaseLoc;
                s = s + "font-family:'" + e.fontName + "';\n";
                for (var r = e.files, a = Object.keys(r), l = 0; l < a.length; l++) {
                    var c = "";
                    c = 0 === l ? c + "src:" : "";
                    var d = "url('" + o + r[a[l]] + "?" + e.versionStr;
                    c = 0 === l ? c + d + "');\nsrc:" + d + "#iefix')" : c + d + "')", c = c + " format('" + i[a[l]] + "')", n.push(c)
                }
                s += n.join(",\n"), s += ";\nfont-weight: normal;\nfont-style: normal; \n}";
                var h = document.createElement("style");
                h.type = "text/css", h.styleSheet ? h.styleSheet.cssText = s : h.appendChild(document.createTextNode(s)), document.getElementsByTagName("head")[0].appendChild(h)
            }, new t
        }, i)
    }(window, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        t.registerPlugin("templateEngine", function (e) {
            var t = {}
                , i = EU.CreateClass({
                    constructor: function () {}
                    , tmpl: function n(e, i) {
                        var s = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : t[e] = t[e] || n(document.getElementById(e).innerHTML);
                        return i ? s(i) : s
                    }
                });
            return new i
        }, n)
    }(window, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i) {
        "use strict";

        function n(e) {
            var t = navigator.userAgent
                , i = EU.CreateClass({
                    deviceInfo: {}
                    , constructor: function () {
                        this.initiateDeviceInfo()
                    }
                    , initiateDeviceInfo: function () {
                        var e = t.toLowerCase();
                        this.deviceInfo.browserName = this.getBrowserName(e)
                    }
                    , getBrowserName: function (e) {
                        return e.match(/Trident/i) && e.match(/Trident/i)[0] ? "ie" : "unknown"
                    }
                    , getDeviceInfo: function () {
                        return this.deviceInfo
                    }
                    , checkForSameOrign: function () {
                        try {
                            return top.location.href
                        }
                        catch (e) {
                            return !1
                        }
                    }
                    , isMobile: function () {
                        return this.deviceInfo.isMobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)
                    }
                });
            return new i
        }
        var s = "1.0.0";
        t && t.registerPlugin("sniffer", n, s), i && i.registerPlugin("sniffer", n, s)
    }(window, window.EXPO_CREATIVE, window.EXPO_PUB)
    , function (e, t) {
        "use strict";
        var i = t.utility
            , n = t.CreateClass({
                constructor: function (e) {
                    this.directive = e
                }
                , cookData: function (e) {
                    var t;
                    for (var i in e) t[i] = e[i];
                    return t
                }
                , compile: function (e) {
                    i.assert(e && i.isString(e), "expected type a non-empty String for template string");
                    var t, n = this.createVirtualElement(e);
                    return t = this.createStore(n, this.directive), {
                        virtualElement: n.children[0]
                        , store: t
                    }
                }
                , createVirtualElement: function (e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t
                }
                , createStore: function (e, t) {
                    var i, n = Array.prototype.slice.call(e.getElementsByTagName("*"), 0);
                    return n.forEach(function (e) {
                        i = e.tagName.toLowerCase().split("_"), i.shift(), i = i.join("_"), t[i] && t[i].push(this.directiveSystem(i, e))
                    }.bind(this)), t
                }
                , directiveSystem: function (e, t) {
                    return {
                        id: "expo_" + e
                        , tag: t
                    }
                }
            });
        t.Template = t.Template || new n(e.DirectiveStore.getDirectives())
    }(window, window.EU)
    , function (e, t, i, n) {
        "use strict";
        var s = "1.0.0"
            , o = {}
            , r = e.top !== e;
        i.registerPlugin("render", ["events", "videoPlayer", "Peel", "close", "rectangClose", "replay", "canvas", "sniffer", "templateEngine", "messages", "playWrapper", "customHandlers"], function (s, a, l, c, d, h, u, m, f, p, g, v, C) {
            var E, T = (s.baseEventManager, s.utility)
                , y = t.BaseEventManager.extend({
                    constructor: function () {
                        this.compManager = n, this.directiveObj = "", this.initializeComponent = T.compose(this.setConfig, this.createInnerContainerDiv), this.currentListeners = {}
                    }
                    , renderTheme: function (e) {
                        var i = document.getElementById("expo_template_mainUnit").innerHTML;
                        this.directiveObj = t.Template.compile(i), e.appendChild(this.directiveObj.virtualElement), e.appendChild(this.directiveObj.virtualElement.querySelector("rm_video"))
                    }
                    , renderMainUnitComponent: function (e) {
                        Object.keys(e).forEach(function (t) {
                            if (e[t][0]) {
                                var i = this.creativeModel["getMainUnit_" + t]()
                                    , n = this.generateElement(p.tmpl(e[t][0].id, i));
                                e[t][0].tag.appendChild(n)
                            }
                        }.bind(this))
                    }
                    , checkForCharectorLimitMainUnit: function () {
                        var e = this.directiveObj.store;
                        Object.keys(e).forEach(function (t) {
                            var i = this.creativeModel["getMainUnit_" + t]();
                            if (e[t][0] && e[t][0].tag.dataset.character) {
                                var n = {
                                    max: i.fontStyle.max
                                    , min: i.fontStyle.min
                                    , text: i.text
                                    , container: e[t][0].tag
                                    , "white-space": i["white-space"]
                                };
                                T.charectorLimit(n)
                            }
                        }.bind(this))
                    }
                    , generateElement: function (e) {
                        var t = document.createElement("div");
                        return t.innerHTML = e, t.children[0]
                    }
                    , initRender: function () {
                        var e = this.getHandler(r);
                        s.sniffer = f, s.baseEventManager.add(g.CREATIVELOADED.eventName, e);
                        var t = document.querySelector(s.adContainerId);
                        t = t || document.body, this.renderTheme(t);
                        var i = t.getElementsByTagName("rm_video")[0];
                        this.createContainerDiv(i || document.body), this.createWrapperContainer(i || document.body), this.bindCommunications(e), s.baseEventManager.fire(g.SENDTOPUBLISHER.eventName, {
                            eventName: g.GETCREATIVECONFIG.eventName
                        }, !0), C.setCustomHandlerss()
                    }
                    , createContainerDiv: function (e) {
                        this.teaserContainer = document.createElement("div"), this.teaserContainer.id = "teaserContainer_" + s.id.replace(/\$/g, ""), this.teaserContainer.style.position = "absolute", this.teaserContainer.style.width = "100%", this.teaserContainer.style.height = "100%", e.appendChild(this.teaserContainer)
                    }
                    , createWrapperContainer: function () {
                        this.wrapperContainer = document.createElement("div"), this.wrapperContainer.className = "rm-wrapper-container", this.hideWrapperContainer(), this.teaserContainer.appendChild(this.wrapperContainer)
                    }
                    , showWrapperContainer: function () {
                        this.wrapperContainer.style.display = "block"
                    }
                    , hideWrapperContainer: function () {
                        this.wrapperContainer.style.display = "none"
                    }
                    , getHandler: function (t) {
                        var i, n;
                        return i = t ? function (t, i) {
                            document.referrer && (n = document.referrer), e.parent.postMessage(JSON.stringify(t), n)
                        } : function (e, t) {
                            s.baseEventManager.fire(e.eventName, e)
                        }
                    }
                    , initComponents: function (e) {
                        this.config = this.creativeModel.adConfig, this.controller = new i.Controller(n, this.creativeModel, s, this), this.registerEventHandlers()
                    }
                    , bindCommunications: function (e) {
                        s.baseEventManager.add(g.SENDTOPUBLISHER.eventName, e), s.baseEventManager.add(g.CREATIVECONFIG.eventName, function (e) {
                            var t = i.Model;
                            this.creativeModel = new t(e), this.applyMainUnitBGColor(), this.renderMainUnitComponent(this.directiveObj.store), this.compManager.registerForComponentLoaded(this.initComponents.bind(this))
                        }.bind(this)), s.baseEventManager.add(g.CREATIVEINTREACTION.eventName, this.handleIntractions.bind(this))
                    }
                    , applyMainUnitBGColor: function () {
                        var e = document.getElementById("rm-main-unit");
                        this.creativeModel.adConfig.fullscreen && this.creativeModel.adConfig.fullscreen.mainUnitBGColor && (e.style.backgroundColor = this.creativeModel.adConfig.fullscreen.mainUnitBGColor)
                    }
                    , registerEventHandlers: function () {
                        n.requireComponent("Replay").registerEventHandler(this.handleIntractions.bind(this)), this.teaserContainer.addEventListener(a.TEASERCLICK.getEventName(), this.handleIntractions.bind(this))
                    }
                    , handleIntractions: function (e) {
                        if (e.stopImmediatePropagation && e.stopImmediatePropagation(), e.name && ~e.name.indexOf("rectangClose")) this.fire(e.name);
                        else {
                            this.creativeModel.setCurrentEvent(this.creativeModel.getCurrentState() + "_" + e.type);
                            var t = e.type + "." + this.creativeModel.getCurrentState();
                            this.fire(t)
                        }
                    }
                    , handleTeaserInteractions: function (e) {
                        e.name = "teaser_" + e.type, this.handleIntractions(e)
                    }
                    , applyStateListeners: function (e, t) {
                        this.currentListeners = e
                    }
                    , removeStateListeners: function (e, t) {
                        delete(this.currentListeners[t] || o)[e]
                    }
                    , setInitialTracker: function () {
                        var e = {
                            type: "img"
                            , pixel: "load"
                        };
                        this.firePixel(e)
                    }
                    , createInnerContainerDiv: function () {
                        this.innerContDiv || (this.innerContDiv = document.createElement("div"), this.innerContDiv.id = "appsnack_innerContainer_" + this.config.id.replace(/\$/g, ""), this.teaserContainer.appendChild(this.innerContDiv)), this.innerContDiv.style.height = this.config.teaser.height + "px", this.creativeModel.getCurrentState() !== this.creativeModel.CONST.AD_STATE_COLLAPSED_PAUSED_TEASER && this.creativeModel.getCurrentState() !== this.creativeModel.CONST.AD_STATE_COLLAPSED_TEASER || (this.innerContDiv.style.height = "90px"), this.innerContDiv.style.width = this.config.teaser.width + "px", this.innerContDiv.style.left = this.config.initialPosition.left - this.config.expansionData.mainUnitClip.left, this.innerContDiv.style.top = this.config.initialPosition.top - this.config.expansionData.mainUnitClip.top, this.config.teaser.height > this.config.fullscreen.height && (this.innerContDiv.style.top = this.config.initialPosition.top), this.innerContDiv.style.position = "absolute"
                    }
                    , resizeInnerContainer: function () {
                        this.innerContDiv.style.width = "100%", this.innerContDiv.style.height = "100%", this.innerContDiv.style.left = "", this.innerContDiv.style.top = ""
                    }
                    , setConfig: function () {
                        var e = (this.config.initialPosition.clip.match(/([0-9]|\.)+/g), this.config.teaser.width + "x" + this.config.teaser.height)
                            , t = {
                                standard: this.config.teaser[e].standard.video
                            };
                        this.creativeModel.saveDimensions({
                            initialTeaser: {
                                width: parseInt(this.innerContDiv.style.width)
                                , height: parseInt(this.innerContDiv.style.height)
                                , left: parseInt(this.config.initialPosition.left)
                                , top: parseInt(this.config.initialPosition.top)
                            }
                            , initialVideo: {
                                left: Number(this.config.initialPosition.left - this.config.expansionData.mainUnitClip.left) + t.standard.x
                                , top: Number(this.config.initialPosition.top - (this.config.teaser.height > this.config.fullscreen.height ? 0 : this.config.expansionData.mainUnitClip.top)) + t.standard.y
                                , width: t.standard.scaledWidth
                                , height: t.standard.scaledHeight
                            }
                            , finalVideo: {
                                left: 0
                                , top: 0
                                , width: this.creativeModel.adConfig.fullscreen.width
                                , height: this.creativeModel.adConfig.fullscreen.height
                            }
                        })
                    }
                    , applyTweenDimensions: function (e) {
                        var t, i, o, r, a, l = ["width", "height", "top", "left"]
                            , c = {}
                            , d = {};
                        r = this.creativeModel.getCurrentState(), a = this.creativeModel.CONST;
                        for (var h in l) c[l[h]] = e["container." + l[h]], d[l[h]] = e["video." + l[h]];
                        this.creativeModel.getIntermediateState() !== a.PHAZE_TRANSITION && (t = this.innerContDiv, t.style.width = c.width + "px", t.style.height = c.height + "px", t.style.top = c.top - this.config.expansionData.mainUnitClip.top + "px", this.config.teaser.height > this.config.fullscreen.height && (t.style.top = c.top + "px"), t.style.left = c.left - this.config.expansionData.mainUnitClip.left + "px"), i = {}, i.right = c.left + c.width, i.bottom = c.top + c.height, i.top = c.top, i.left = c.left;
                        var u = "rect(" + i.top + "px " + i.right + "px " + i.bottom + "px " + i.left + "px)";
                        n.requireComponent("VideoPlayer").resizePlayer(d), o = s.sniffer.getDeviceInfo(), "ie" === o.browserName && n.requireComponent("Canvas").resizeCanvas(d), this.setIframeClip(u)
                    }
                    , setIframeClip: function (e, t) {
                        var i = {
                            action: "setIframeClip"
                            , adId: this.adId
                            , gridDiv: "appsnack_teaser_iframe_" + this.config.id.replace(/\$/g, "")
                            , teaserDiv: this.config.divid
                            , clip: e
                            , currentState: this.creativeModel.getCurrentState()
                            , previousState: this.creativeModel.getPreviousState()
                            , transition: this.creativeModel.getIntermediateState()
                        };
                        s.baseEventManager.fire(g.SENDTOPUBLISHER.eventName, {
                            eventName: g.SETEXPOCONTAINERCLIP.eventName
                            , message: i
                        })
                    }
                    , showAd: function () {
                        document.documentElement.style.visibility = "visible"
                    }
                });
            return E = new y
        }, s)
    }(window, window.EU, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i) {
        "use strict";
        var n, s = "1.0.0";
        t.registerPlugin("tracker", function (e) {
            function t() {
                this.engagementTime = 0, this.appendCustomvalue = "", this.isEngFired = !1, this.previousTdValue = 0
            }
            var i, s = e.utility
                , o = function (e) {
                    function t(t) {
                        t.src = e.url
                    }
                    var i = "tf_thirdparty_iframe_pixel_";
                    s.createSameDomainIframeNode(i, 0, 0, t)
                }
                , r = function (e) {
                    function t(e, t) {
                        var i, n = e;
                        0 === t.pixel.indexOf("http") || 0 === t.pixel.indexOf("//") ? (i = document.createElement("script"), i.src = t.pixel, i.type = "text/javascript", n.contentWindow.document.write(i.outerHTML)) : 0 === t.pixel.indexOf("<script") ? n.contentWindow.document.write(t.pixel) : (i = document.createElement("script"), i.innerHTML = t.pixel, i.type = "text/javascript", n.contentWindow.document.write(i.outerHTML))
                    }
                    var i = "tf_thirdparty_js_pixel_";
                    s.createSameDomainIframeNode(i, 0, 0, t, e)
                }
                , a = function (e) {
                    var t = document.createElement("img");
                    t.src = e
                }
                , l = []
                , c = t.prototype;
            return c.queued = function (e) {
                l.push(e)
            }, c.resetQueue = function () {
                l = []
            }, c.unqueued = function () {
                for (var e = l.length, t = {}, i = 0; i < e; i++) t = l.shift(), this.firePixels(t)
            }, c.setProperties = function (e) {
                for (var t in e) this[t] = e[t]
            }, c.setHost = function (e) {
                this.pixelInfo.host = e
            }, c.resetEngagementTime = function () {
                "resetEngagementTime" != i && (this.previousTdValue = this.previousTdValue + this.getSessionTime(), this.engagementTime = 0, i = "resetEngagementTime")
            }, c.setEngagementTime = function () {
                i && "setEngagementTime" == i || (this.engagementTime = (new Date).getTime(), this.isEngFired = !0, i = "setEngagementTime")
            }, c.getSessionTime = function () {
                var e = (new Date).getTime() - this.engagementTime;
                return e
            }, c.getTimeDifference = function () {
                var e;
                return e = 0 === this.engagementTime ? this.previousTdValue : this.previousTdValue + ((new Date).getTime() - this.engagementTime)
            }, c.replaceTimeDifference = function (e, t) {
                return e = e.replace(/@TIMEDIFFERENCE@/g, t)
            }, c.getPixelUrl = function (e) {
                var t, i, n, s = this.pixel_info
                    , o = s.insSuffixUrl;
                if (/^https?:\/\//i.test(e.pixel)) return e.pixel;
                t = "undefined" == typeof e.custom1 ? "" : "&custom1=" + e.custom1, "undefined" == typeof e.custom2 ? i = "" : o += e.custom2, n = "undefined" == typeof e.custom4 ? "" : "&custom4=" + e.custom4;
                var r = "http://" + s.host + s.insPrefixUrl + s.campaignName + s.insMidUrl + e.pixel + t + o + n
                    , a = this.getTimeDifference();
                return r = this.replaceTimeDifference(r, a)
            }, c.getAppendCustomValue = function () {
                return this.appendCustomvalue
            }, c.firePixelsById = function (e, t) {
                if (this.customTrackers && this.customTrackers[e]) {
                    var i = this.customTrackers[e];
                    i.multi = i.multi || t, this.firePixels(i)
                }
            }, c.firePixel = function (e) {
                switch (e.type) {
                case "img":
                    var t = this.getPixelUrl(e);
                    a(t);
                    break;
                case "js":
                    r(e);
                    break;
                case "iframe":
                    o(e)
                }
            }, c.firePixels = function (e) {
                try {
                    var t = e.trackers
                        , i = t.length
                        , n = {};
                    if (i > 0 && (e.multi || !e.isFirePixel)) {
                        for (var s = 0; s < i; s++) n.custom1 = e.custom1 && e.custom1.length > 0 && e.custom1 instanceof Array ? e.custom1[s] : e.custom1, n.custom2 = e.custom2, n.pixel = t[s].pixel, n.type = t[s].type, this.firePixel(n);
                        e.isFirePixel = !0
                    }
                }
                catch (o) {
                    console.log(o)
                }
            }, n ? n : n = new t
        }, s)
    }(window, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i, n) {
        "use strict";
        var s = "1.0.0";
        i.registerPlugin("Peel", ["PeelModel", "PeelView", "PeelConfig"], function (e, i, s, o) {
            var r = t.BaseComponent.extend({
                constructor: function (e) {
                    this.id = "Peel", this.appendTo = "", this.objectConf = ""
                }
                , init: function (e) {
                    i.setConfig(o), s.init(i), n.requestConfig(e)
                }
                , render: function (e, t) {
                    this.appendTo = e, this.objectConf = t, this.element = s.prepareHtml(), s.render(e, t)
                }
                , hide: function () {
                    this.element.style.display = "none"
                }
                , show: function () {
                    this.element.style.display = "block"
                }
                , destroy: function () {
                    this.element.parentNode.removeChild(this.element), this.element = null, n.destroyComponent(this)
                }
                , onConfig: function (e, t) {
                    i.setlanguageString(e.languageStr), i.setAssetLocation(e.location), i.setPeelClientLogo(e.logo), this.render(t, e.dimension)
                }
                , pause: function () {
                    s.pauseTeaser()
                }
                , exitTeaserAnimation: function () {
                    s.exitTeaserAnimation()
                }
                , entryPeelAnimation: function () {
                    s.entryPeelAnimation()
                }
            });
            n.registerComponent(new r(e), "Peel")
        }, s)
    }(window, window.EU, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        i.registerPlugin("PeelModel", function (e) {
            var i = e.utility
                , n = t.CreateClass({
                    constructor: function () {
                        this.config = void 0
                    }
                    , setConfig: function (e) {
                        this.config = i.extend({}, e) || {}
                    }
                    , setlanguageString: function (e) {
                        this.config.languageText = e, this.repaceHifen()
                    }
                    , setAssetLocation: function (e) {
                        this.config.location = e ? e : "", this.setImageAssets()
                    }
                    , repaceHifen: function () {
                        Object.keys(this.config.languageText).forEach(function (e) {
                            var t, i = this.config.languageText[e];
                            delete this.config.languageText[e], t = e.split("-").join("_"), this.config.languageText[t] = i
                        }.bind(this))
                    }
                    , getLanguageString: function () {
                        return this.config.languageText
                    }
                    , getPeelClientLogo: function () {
                        return this.config.logo
                    }
                    , setPeelClientLogo: function (e) {
                        this.config.logo = e
                    }
                    , getId: function () {
                        return this.config.id
                    }
                    , getLan: function () {
                        return this.config.lan
                    }
                    , getPeelContainerDimension: function (e) {
                        return this.config.peelContainerDimension[e]
                    }
                    , getEvents: function () {
                        return this.config.events
                    }
                    , setImageAssets: function () {
                        this.config.location && Object.keys(this.config.assets).forEach(function (e) {
                            this.config.assets[e] = this.config.location + this.config.assets[e]
                        }.bind(this))
                    }
                    , getImageAssets: function () {
                        return this.config.assets
                    }
                });
            return new n
        }, n)
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        i.registerPlugin("PeelView", ["domUtility", "templateEngine", "sniffer"], function (e, i, n, s) {
            var o, r, a, l, c, d, h, u, m, f, p, g = t.BaseComponent.extend({
                constructor: function () {}
                , init: function (e) {
                    this.modelObj = e, p = this, this.exitAnimation
                }
                , prepareHtml: function () {
                    var t, i = {
                        languageStr: this.modelObj.getLanguageString()
                        , assets: this.modelObj.getImageAssets()
                        , utility: e.utility
                        , logo: this.modelObj.getPeelClientLogo()
                    };
                    return t = n.tmpl("expo_peel", i), p.element = document.createElement("div"), p.element.innerHTML = t, this.element.children[0]
                }
                , render: function (e, t) {
                    var n;
                    p.appendTo = document.querySelector(e), p.appendTo.appendChild(p.element.children[0]), r = document.getElementById("rm_peel_wrapper_container"), a = r.querySelector("#rm_peel_container"), o = r.querySelector(".rm_peelContent"), l = r.querySelector(".rm_muteButton"), c = r.querySelector(".rm_peel-replay"), d = a.querySelector("#rm_peelText"), h = o.querySelector(".rm_peel_cube"), f = r.querySelector(".rm-white-image-scale"), m = i.vendorPrefix(), "160x600" === t.dimension && (n = s.getDeviceInfo(), "ie" === n.browserName ? r.classList.add("rm_peel_wrapper_container_ie_160X600") : r.classList.add("rm_peel_wrapper_container_scale_160X600")), p.initAnimation()
                }
                , initAnimation: function () {
                    p.hideContent(o), p.hideContent(h), h.classList.remove("hoverCube"), p.hideContent(c), a.addEventListener("webkitAnimationEnd", p.moveForward), a.addEventListener("animationend", p.moveForward)
                }
                , hideContent: function (e) {
                    e.style.opacity = 0
                }
                , showContent: function (e) {
                    e.style.opacity = 1
                }
                , startScaleAnimation: function () {
                    a.classList.add("rm_peel_element_animation")
                }
                , removeScaleAnimation: function () {
                    a.classList.remove("rm_peel_element_animation")
                }
                , moveForward: function () {
                    var e;
                    m && (a.classList.remove("rm_peel_element_animation"), f.classList.remove("whiteAnimation"), p.showContent(o), p.hideContent(d), p.hideContent(l), p.showContent(h), e = a.clientWidth, a.removeEventListener("webkitAnimationEnd", p.moveForward), a.removeEventListener("animationend", p.moveForward), a.addEventListener("webkitTransitionEnd", p.cubeAnimation), a.addEventListener("transitionend", p.cubeAnimation), a.style[m + "Transform"] = "translate3d(-149px ,0 ,0)", o.style[m + "Transform"] = "translate3d(-149px ,0 ,0)", f.style[m + "Transform"] = "translate3d(-143px ,0 ,0)skewX(-7deg)", e = null)
                }
                , cubeAnimation: function () {
                    u = !1, a.removeEventListener("webkitTransitionEnd", p.cubeAnimation), a.removeEventListener("transitionend", p.cubeAnimation), setTimeout(function () {
                        u || (h.classList.add("hoverCube"), h.addEventListener("webkitTransitionEnd", p.moveBackWard), h.addEventListener("transitionend", p.moveBackWard))
                    }, 2e3)
                }
                , moveBackWard: function () {
                    h.removeEventListener("webkitTransitionEnd", p.moveBackWard), h.removeEventListener("transitionend", p.moveBackWard), setTimeout(function () {
                        m && (p.showContent(d), a.style[m + "Transform"] = "translate3d(0px ,0 ,0)", o.style[m + "Transform"] = "translate3d(0px ,0 ,0)", f.style[m + "Transform"] = "translate3d(0px ,0 ,0)skewX(-7deg)", a.addEventListener("webkitTransitionEnd", p.scaleAnimation), a.addEventListener("transitionend", p.scaleAnimation))
                    }, 1e3)
                }
                , scaleAnimation: function () {
                    p.showContent(l), a.removeEventListener("webkitTransitionEnd", p.scaleAnimation), a.removeEventListener("transitionend", p.scaleAnimation), a.classList.add("rm_peel_element_animation"), f.classList.add("whiteAnimation"), p.initAnimation()
                }
                , reset: function () {
                    a.classList.remove("rm_peel_element_animation"), f.classList.remove("whiteAnimation"), a.removeEventListener("webkitTransitionEnd", p.scaleAnimation), a.removeEventListener("transitionend", p.scaleAnimation), h.removeEventListener("webkitTransitionEnd", p.moveBackWard), h.removeEventListener("transitionend", p.moveBackWard), a.removeEventListener("webkitAnimationEnd", p.moveForward), a.removeEventListener("animationend", p.moveForward), a.removeEventListener("webkitTransitionEnd", p.cubeAnimation), a.removeEventListener("transitionend", p.cubeAnimation)
                }
                , pause: function () {
                    var e;
                    u = !0, p.exitTeaserAnimation(), p.reset(), r.style.display = "block", p.hideContent(o), p.hideContent(f), p.hideContent(a), p.hideContent(h), p.hideContent(l), a.classList.add("zeroTime"), o.classList.add("zeroTime"), f.classList.add("zeroTime"), e = a.clientWidth, a.addEventListener("webkitTransitionEnd", p.pauseAnimation), a.addEventListener("transitionend", p.pauseAnimation), a.style[m + "Transform"] = "translate3d(100px ,0 ,0)", o.style[m + "Transform"] = "translate3d(100px ,0 ,0)", f.style[m + "Transform"] = "translate3d(100px ,0 ,0)skewX(-7deg)", e = null
                }
                , pauseAnimation: function () {
                    r.style.opacity = 1, a.classList.remove("zeroTime"), o.classList.remove("zeroTime"), f.classList.remove("zeroTime"), a.style[m + "TransitionDuration"] = ".3s", o.style[m + "TransitionDuration"] = ".3s", f.style[m + "TransitionDuration"] = ".3s", p.hideContent(h), p.hideContent(l), p.showContent(o), p.showContent(a), p.showContent(f), p.showContent(d), a.classList.add("transition"), o.classList.add("transition"), f.classList.add("transition"), a.style[m + "Transform"] = "translate3d(-149px ,0 ,0)", o.style[m + "Transform"] = "translate3d(-149px ,0 ,0)", f.style[m + "Transform"] = "translate3d(-141px ,0 ,0)skewX(-7deg)", p.showContent(c), a.removeEventListener("webkitTransitionEnd", p.pauseAnimation), a.removeEventListener("transitionend", p.pauseAnimation)
                }
                , pauseTeaser: function () {
                    p.pause()
                }
                , exitTeaserAnimation: function () {
                    p.exitAnimation = !0;
                    var e;
                    p.reset(), p.hideContent(l), p.hideContent(o), a.style[m + "TransitionDuration"] = ".3s", o.style[m + "TransitionDuration"] = ".3s", f.style[m + "TransitionDuration"] = ".3s", e = a.clientWidth, a.style[m + "Transform"] = "translate3d(90px ,0 ,0)", o.style[m + "Transform"] = "translate3d(90px ,0 ,0)", f.style[m + "Transform"] = "translate3d(90px ,0 ,0)skewX(-7deg)", r.style.opacity = 0, r.style.display = "none", r.addEventListener("webkitTransitionEnd", p.opacityAnimationCallback), r.addEventListener("transitionend", p.opacityAnimationCallback), e = null
                }
                , opacityAnimationCallback: function () {
                    r.removeEventListener("webkitTransitionEnd", p.opacityAnimationCallback), r.removeEventListener("transitionend", p.opacityAnimationCallback), !u && p.exitAnimation && (r.style.display = "none")
                }
                , entryPeelAnimation: function () {
                    u = !0;
                    var e;
                    p.exitAnimation = !1, r.style.display = "block", e = r.clientWidth, r.style.opacity = "1", p.reset(), a.style[m + "Transform"] = "translate3d(0px ,0 ,0)", o.style[m + "Transform"] = "translate3d(0px ,0 ,0)", f.style[m + "Transform"] = "translate3d(0px ,0 ,0)skewX(-7deg)", a.classList.add("rm_peel_element_animation"), f.classList.add("whiteAnimation"), p.showContent(d), p.showContent(l), p.showContent(o), a.style[m + "TransitionDuration"] = ".5s", o.style[m + "TransitionDuration"] = ".5s", f.style[m + "TransitionDuration"] = ".5s", p.initAnimation()
                }
            });
            return new g
        }, n)
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e, t) {
        "use strict";
        var i = "1.0.0";
        t.registerPlugin("PeelConfig", function () {
            var e = {
                id: "peelContainer"
                , events: {
                    initialize: "initialize"
                    , addedToDom: "added to dom"
                    , removedFromDom: "removedFromDom"
                    , clicked: "clicked"
                }
                , languageText: {
                    explore: "Explore"
                    , "rollover-to-explore": "Rollover to explore"
                    , "click-to-replay": "Click to replay"
                    , VDX_BY_Exponential: "VDX BY Exponential"
                }
                , assets: {
                    mute: "mute.gif"
                    , backGroundImage: "bg.png"
                    , peel_dummy: "peel_dummy.png"
                    , whiteMC: "whiteMC.png"
                    , peel_bg: "peel_bg.png"
                }
                , peelContainerDimension: {
                    "160x600": {
                        width: 253
                        , height: 90
                    }
                    , "300x250": {
                        width: 253
                        , height: 90
                    }
                    , "300x600": {
                        width: 253
                        , height: 90
                    }
                    , "728x90": {
                        width: 253
                        , height: 90
                    }
                    , "970x250": {
                        width: 253
                        , height: 90
                    }
                }
            };
            return e
        }, i)
    }(window, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        t.registerPlugin("rectangClose", function (e) {
            var t = EU.BaseComponent.extend({
                constructor: function () {}
                , config: {}
                , element: {}
                , wrapperElement: {}
                , init: function (e) {
                    i.requestConfig(e), this.handleInteractions()
                }
                , prepareHtml: function () {
                    this.element = document.createElement("div"), this.element.className = this.config.className, Object.keys(this.config.style).forEach(function (e) {
                        this.element.style[e] = this.config.style[e]
                    }.bind(this)), this.element.innerHTML = this.config.src, this.element.innerHTML = this.config.languageStr.close.text.toUpperCase(), this.element.style.fontSize = this.config.languageStr.close.fontSize + "px"
                }
                , render: function (e) {
                    this.wrapperElement = document.createElement("div"), this.wrapperElement.className = "rm-rectangular-close-wrapper";
                    var t = document.querySelector(e);
                    t.appendChild(this.element), t.appendChild(this.wrapperElement)
                }
                , hide: function () {
                    this.element.style.display = "none", this.wrapperElement.style.display = "none"
                }
                , show: function () {
                    this.element.style.display = "block", this.wrapperElement.style.display = "block"
                }
                , handleInteractions: function () {
                    this.element.addEventListener("click", this.handler.bind(this)), this.element.addEventListener("mouseover", this.handler.bind(this)), this.element.addEventListener("mouseout", this.handler.bind(this)), this.wrapperElement.addEventListener("mouseover", function (e) {
                        e.stopImmediatePropagation()
                    }), this.wrapperElement.addEventListener("mouseout", function (e) {
                        e.stopImmediatePropagation()
                    })
                }
                , registerEventHandler: function (e) {}
                , handler: function (e) {
                    e.stopImmediatePropagation(), this.fire(e.type)
                }
                , onConfig: function (e, t) {
                    this.config = e, this.prepareHtml(), this.render(t)
                }
            });
            i.registerComponent(new t, "RectangClose")
        }, n)
    }(window, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        t.registerPlugin("close", function (e) {
            var t = EU.BaseComponent.extend({
                constructor: function () {}
                , config: {}
                , element: {}
                , init: function (e, t) {
                    i.requestConfig(e), this.creativeModel = t
                }
                , prepareHtml: function () {
                    this.element = document.createElement("div"), this.element.className = this.config.className, Object.keys(this.config.style).forEach(function (e) {
                        this.element.style[e] = this.config.style[e]
                    }.bind(this)), this.element.innerHTML = this.config.src
                }
                , render: function (e) {
                    var t = document.querySelector(e);
                    t.appendChild(this.element), this.registerEventHandler()
                }
                , hide: function () {
                    this.element.style.display = "none"
                }
                , show: function () {
                    this.element.style.display = "block"
                }
                , registerEventHandler: function (e) {
                    this.element.addEventListener("click", this.handleClick.bind(this))
                }
                , handleClick: function (e) {
                    e.stopImmediatePropagation(), this.fire(e.type)
                }
                , onConfig: function (e, t) {
                    this.config = e, this.prepareHtml(), this.render(t)
                }
            });
            i.registerComponent(new t, "Close")
        }, n)
    }(window, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        t.registerPlugin("playWrapper", function (e) {
            var t = EU.BaseComponent.extend({
                constructor: function () {}
                , config: {}
                , element: {}
                , init: function (e, t) {
                    i.requestConfig(e), this.creativeModel = t
                }
                , prepareHtml: function () {
                    this.element = document.createElement("div"), this.element.className = this.config.className, Object.keys(this.config.style).forEach(function (e) {
                        this.element.style[e] = this.config.style[e]
                    }.bind(this))
                }
                , render: function (e) {
                    var t = document.querySelector(e);
                    t.appendChild(this.element)
                }
                , hide: function () {
                    this.element.style.display = "none"
                }
                , show: function () {
                    this.element.style.display = "block"
                }
                , onConfig: function (e, t) {
                    this.config = e, this.prepareHtml(), this.render(t)
                }
            });
            i.registerComponent(new t, "PlayWrapper")
        }, n)
    }(window, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        t.registerPlugin("canvas", function (e) {
            var n = EU.CreateClass({
                constructor: function () {}
                , config: {}
                , element: ""
                , init: function (n, s, o) {
                    this.Messages = t.require("messages", e), "ie" === e.sniffer.getDeviceInfo().browserName && (i.requestConfig(n, o || "init"), this.creativeModel = s, e.baseEventManager.add(this.Messages.MAINUNITLOAD.eventName, function () {
                        this.reConfig()
                    }.bind(this)))
                }
                , prepareHtml: function () {
                    this.element = document.createElement("canvas"), this.element.className = "canvasID", Object.keys(this.config).forEach(function (e) {
                        "prop" !== e && (this.element.style[e] = this.config[e])
                    }.bind(this)), this.element.style.position = "absolute", this.element.style.top = 0, this.element.style.left = 0, this.renderPosterImage()
                }
                , renderPosterImage: function () {
                    var e, t, n = i.requireComponent("VideoPlayer")
                        , s = (n.getSize(), document.getElementById("videoID"));
                    n.getVideoTag();
                    e = this.element.getContext("2d"), t = new Image, t.onload = function () {
                        e.drawImage(t, 0, 0, this.model.dimensions.initialVideo.width, this.model.dimensions.initialVideo.height)
                    }, t.src = s.getAttribute("poster")
                }
                , renderVideo: function () {
                    function e() {
                        function i(e, t, n, s) {
                            return !e.paused && !e.ended && (t.drawImage(e, 0, 0, n, s), void setTimeout(i, 20, e, t, n, s))
                        }
                        t = this.element && !t ? this.element.getContext("2d") : t, t ? (this.element.width = s.width, this.element.height = s.height, i(o, t, s.width, s.height)) : e.call(this)
                    }
                    var t, n = i.requireComponent("VideoPlayer")
                        , s = n.getSize()
                        , o = document.getElementById("videoID");
                    this.video = n, e.call(this)
                }
                , resizeCanvas: function (e) {
                    this.element.style.width = e.width, this.element.style.height = e.height, this.element.style.top = 0, this.element.style.left = 0
                }
                , render: function (e) {
                    var t = (document.querySelector(e), i.requireComponent("VideoPlayer").getVideoTag());
                    t.parentNode.insertBefore(this.element, t.nextSibling)
                }
                , hide: function () {
                    var e = document.getElementById("videoID");
                    e.classList.remove("hide"), this.element.style.display = "none"
                }
                , show: function () {
                    var e = document.getElementById("videoID");
                    e.classList.add("hide"), this.element.style.display = "block"
                }
                , onConfig: function (e, t, i) {
                    this.config = e, this.prepareHtml(), this.render(t)
                }
                , reConfig: function () {
                    this.resizeCanvas(this.video.getSize())
                }
            });
            i.registerComponent(new n, "Canvas")
        }, n)
    }(window, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        t.registerPlugin("replay", ["templateEngine"], function (e, t) {
            var n = EU.BaseComponent.extend({
                constructor: function () {}
                , config: {}
                , element: {}
                , init: function (e) {
                    i.requestConfig(e)
                }
                , prepareHtml: function () {
                    var e, i, n, s = "";
                    Object.keys(this.config.style).forEach(function (e) {
                        s += e + ": " + this.config.style[e] + ";"
                    }.bind(this)), e = {
                        cssStyle: s
                        , langulageStr: {
                            replay: this.config.languageStr.replay.text
                        }
                        , replayFontSize: this.config.languageStr.replay.fontSize + "px"
                        , replaySrc: this.config.src
                    }, i = t.tmpl("expo_replay", e), n = document.createElement("div"), n.innerHTML = i, this.element = n.children[0]
                }
                , render: function (e) {
                    var t = document.querySelector(e);
                    t.appendChild(this.element)
                }
                , hide: function () {
                    this.element.style.display = "none"
                }
                , show: function () {
                    this.element.style.display = "block"
                }
                , registerEventHandler: function (e) {
                    this.element.addEventListener("click", this.handleClick.bind(this))
                }
                , handleClick: function (e) {
                    e.stopImmediatePropagation(), this.fire(e.type)
                }
                , onConfig: function (e, t) {
                    this.config = e, this.prepareHtml(), this.render(t)
                }
            });
            i.registerComponent(new n, "Replay")
        }, n)
    }(window, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i) {
        "use strict";
        i.registerPlugin("events", ["sniffer"], function (e, i) {
            var n = i.isMobile()
                , s = t.Enum({
                    enumList: [{
                        TEASERHOVER: {
                            desktop: "mouseover"
                            , mobile: ""
                        }
                    }, {
                        TEASEROUT: {
                            desktop: "mouseout"
                            , mobile: ""
                        }
                    }, {
                        TEASERCLICK: {
                            desktop: "click"
                            , mobile: ""
                        }
                        , RECTANGLECLICK: {
                            desktop: "click"
                            , mobile: ""
                        }
                        , RECTANGLEHOVER: {
                            desktop: "mouseover"
                            , mobile: ""
                        }
                        , RECTANGLEOUT: {
                            desktop: "mouseout"
                            , mobile: ""
                        }
                        , CIRCULARCLICK: {
                            desktop: "click"
                            , mobile: ""
                        }
                        , REPLAYCLICK: {
                            desktop: "click"
                            , mobile: ""
                        }
                        , CTACLICK: {
                            desktop: "click"
                            , mobile: ""
                        }
                        , MAINUNITCLIENTLOGO: {
                            desktop: "click"
                            , mobile: ""
                        }
                        , VIDEOPLAYERCLICK: {
                            desktop: "click"
                            , mobile: ""
                        }
                        , VIDEOPLAYERMOVE: {
                            desktop: "mousemove"
                            , mobile: ""
                        }
                        , VIDEOPLAYERLEAVE: {
                            desktop: "mouseleave"
                            , mobile: ""
                        }
                        , VIDEOREWIND: {
                            desktop: "rewind"
                            , mobile: ""
                        }
                    }]
                    , constructor: function () {
                        this.eventName = n ? this.mobile : this.desktop
                    }
                    , getEventName: function () {
                        return this.eventName
                    }
                });
            return s
        }, "1.0.0")
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        t.registerPlugin("assetsLoader", function (e) {
            function t(e) {
                this.autoLoad = !!e.autoLoad, this.root = e.root || this.root, l.doesExists(e.js) && (this.js = this.js.concat(l.toArray(e.js))), l.doesExists(e.img) && (this.img = this.img.concat(l.toArray(e.img))), l.doesExists(e.link) && (this.link = this.link.concat(l.toArray(e.link))), e.query && (this.query = e.query), e.baseUrl && (this.baseUrl = e.baseUrl)
            }

            function n() {
                this.query && (this.query.js && (this.js = this.js.concat(l.toArray(this.root.querySelectorAll(this.query.js)))), this.query.img && (this.img = this.img.concat(l.toArray(this.root.querySelectorAll(this.query.img)))), this.query.link && (this.link = this.link.concat(l.toArray(this.root.querySelectorAll(this.query.link)))))
            }

            function s() {
                (g = !(u = this.js.length)) || this.loadJsFiles(this.js), (p = !(d = this.img.length)) || this.loadImages(this.img), (v = !(m = this.link.length)) || this.loadCssFiles(this.link), r.call(this)
            }

            function o() {
                c = 0, h = 0, f = 0
            }

            function r() {
                p && g && v && (this.fire("loaded"), this.__loaded = !0)
            }

            function a(e) {
                return 0 !== e.trim().indexOf("http") && (e = this.baseUrl + e), e
            }
            var l = e.utility
                , c = 0
                , d = 0
                , h = 0
                , u = 0
                , m = 0
                , f = 0
                , p = !1
                , g = !1
                , v = !1
                , C = document.write
                , E = i.BaseEventManager.extend({
                    autoLoad: !1
                    , root: document
                    , js: null
                    , img: null
                    , link: null
                    , query: null
                    , baseUrl: ""
                    , inProgress: !1
                    , __loaded: !1
                    , constructor: function (e) {
                        l.assert(l.doesExists(e), "Configuration not set"), o(), this.js = [], this.img = [], this.link = [], t.call(this, e), this.autoLoad && this.load()
                    }
                    , load: function () {
                        this.__loaded ? this.fire("loaded") : this.inProgress || (this.inProgress = !0, n.call(this), s.call(this))
                    }
                    , loadImages: function (e) {
                        for (var t = e, i = function () {
                                ++c, d === c && (p = !0, r.call(this))
                            }.bind(this), n = 0; n < t.length; n++) t[n].src = a.call(this, t[n].dataset.expoSrc), t[n].onload = i
                    }
                    , loadJsFiles: function (e) {
                        var t = e
                            , i = function () {
                                u === h && (g = !0, document.write = C, r.call(this))
                            }.bind(this);
                        document.write = function (e) {
                            var i = document.createElement("div");
                            i.innerHTML = e, e = i.childNodes[0], t.splice(n, 0, e), u++
                        };
                        var n = 0
                            , s = function () {
                                var e = t[n];
                                if (e) {
                                    n++;
                                    var o, r = document.createElement("script")
                                        , l = e.attributes
                                        , c = l.length;
                                    for (o = 0; o < c; o++) r.setAttributeNode(l[o].cloneNode(!0));
                                    if (r.type = "text/javascript", e.dataset.expoSrc || e.src) {
                                        var d;
                                        e.attributes.onload && (d = new Function(e.getAttribute("onload"))), r.src = a.call(this, e.dataset.expoSrc || e.getAttribute("src", 2)), r.dataset.main && (r.dataset.main = a.call(this, r.dataset.main)), r.onload = function (e) {
                                            d && d.call(this, e), h++, i(), s()
                                        }, document.body.appendChild(r)
                                    }
                                    else r.innerHTML = e.innerHTML, document.body.appendChild(r), h++, i(), s();
                                    e.parentNode.removeChild(e)
                                }
                            }.bind(this);
                        s()
                    }
                    , loadCssFiles: function (e) {
                        for (var t = e, i = function () {
                                f++, m === f && (v = !0, r.call(this))
                            }.bind(this), n = 0; n < t.length; n++) t[n].rel = "stylesheet", t[n].href && (t[n].href = a.call(this, t[n].getAttribute("href", 2))), t[n].onload = i
                    }
                });
            return E
        }, n)
    }(window, window.EXPO_CREATIVE, window.EU)
    , function (e, t, i, n) {
        "use strict";
        var s = "1.0.0"
            , o = "designerAPI"
            , r = ["VideoPlayer"];
        i.registerPlugin(o, r, function (e, t) {
            var s, t = n.requireComponent("VideoPlayer")
                , o = i.require("tracker", e)
                , r = {
                    openUrl: function (t, i, n) {
                        t = e.urlConfig && e.urlConfig[i] || t, t && (n === !0 ? window.open(t, "_blank") : window.open(t))
                    }
                    , resume: function () {
                        t.resumePlayer()
                    }
                    , pause: function () {
                        t.pausePlayer()
                    }
                    , mute: function () {
                        t.setVolume(0)
                    }
                    , unmute: function () {
                        t.setVolume(.2)
                    }
                    , setVideo: function (e) {
                        t.setVideo(null, e)
                    }
                    , setDesignerAPIObject: function (t) {
                        t && (e.config.designerEditable = t)
                    }
                    , getDesignerApiObject: function () {
                        return e.config.designerEditable
                    }
                    , firePixel: function (e, t) {
                        if (t = t || !1, !e || "string" != typeof e) throw new Error("PixelId has to be a string ");
                        o.firePixelsById(e, t)
                    }
                    , fireInteractionPixel: function (e, t) {
                        this.firePixel(e, t)
                    }
                    , fireClickPixel: function (e, t) {
                        this.firePixel(e, t)
                    }
                };
            if (s = r.getDesignerApiObject())
                for (var a in s) r[a] = s[a];
            return r
        }, s)
    }(window, window.EU, window.EXPO_CREATIVE, window.CM)
    , function (W, EXPO_CREATIVE, CM) {
        "use strict";
        var version = "1.0.0"
            , customHandlers;
        EXPO_CREATIVE.registerPlugin("customHandlers", ["designerAPI"], function (sandBox, designerAPI) {
            function stringToJSON(jsonString) {
                return JSON.parse(JSON.stringify(eval("(" + jsonString.split("=")[1] + ")")))
            }

            function setCallBacks(e) {
                return function () {
                    for (var t = 0; t < e.length; t++) designerAPI.getDesignerApiObject()[e[t]].apply(designerAPI)
                }
            }
            var _utility = sandBox.utility
                , CustomHandlers = EU.CreateClass({
                    setCustomHandlerss: function () {
                        var e = document.querySelectorAll("div[title*='VDXEvents']");
                        if (e.length > 0)
                            for (var t = 0; t < e.length; t++) {
                                e[t].setAttribute("data-title", e[t].title);
                                var i = stringToJSON(e[t].title);
                                e[t].removeAttribute("title"), e[t].addEventListener(i.event.toLowerCase(), setCallBacks(i.callbacks), !1)
                            }
                    }
                });
            return sandBox.baseEventManager.add("close.mainunit", function (e) {
                window.switchTab && window.switchTab(0), e()
            }), customHandlers ? customHandlers : customHandlers = new CustomHandlers
        }, version)
    }(window, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i, n) {
        "use strict";
        var s = "1.0.0"
            , o = "videoPlayer"
            , r = ["VideoModel", "VideoView", "VideoController"];
        i.registerPlugin(o, r, function (e, s, o, r) {
            var a = t.BaseComponent.extend({
                init: function (t, s, r) {
                    o.setRenderCompleteCallback(function () {
                        this.fire("renderComplete")
                    }.bind(this)), this.Messages = i.require("messages", e), this.componentKey = t, n.requestConfig(t, r || "init"), this.mute = !1
                }
                , setInitialListeners: function (e) {
                    r.setInitialListeners(e)
                }
                , onConfig: function (e, t, i) {
                    s.onConfig(e, i), o.onConfig(s, t, i), r.onConfig(o, s, i), this.addPlayListener(function () {
                        n.setPlayPixel()
                    })
                }
                , bindListeners: function () {}
                , reConfig: function () {
                    n.requestConfig(this.componentKey, "mainunit"), this.resizePlayer(s.getPlayerDimensions())
                }
                , showHandCursor: function () {
                    r.showHandCursor()
                }
                , hideHandCursor: function () {
                    r.hideHandCursor()
                }
                , addDataAttribute: function (e) {
                    r.addDataAttribute(e)
                }
                , removeDataAttribute: function (e) {
                    r.removeDataAttribute(e)
                }
                , setMuteStatus: function (e) {
                    this.mute = e
                }
                , getMuteStatus: function () {
                    return this.mute
                }
                , resizePlayer: function (e) {
                    r.resizePlayer(e)
                }
                , showControls: function (e) {
                    r.showControls(e)
                }
                , setLoop: function (e) {
                    r.setLoop(e)
                }
                , setTime: function (e) {
                    r.setTime(e)
                }
                , getSize: function () {
                    return r.getSize()
                }
                , setVolume: function (e) {
                    r && r.setVolume(e)
                }
                , pausePlayer: function () {
                    r.pausePlayer()
                }
                , addPlayListener: function (e) {
                    r.addPlayListener(e)
                }
                , resumePlayer: function () {
                    r.resumePlayer()
                }
                , resetPlayer: function () {
                    r.reset(), o.reset()
                }
                , setVideo: function (e, t, i) {
                    (e || t) && (r.reset(), this.resetPlayer(), o.setSrc(e || s.getVideoSrc(t)), o.setPosterImage(e || s.getPosterImage(t)), i || o.resume())
                }
                , getVideoSrc: function (e) {
                    return s.getVideoSrc(e)
                }
                , togglePosition: function (e) {
                    o.togglePosition(e)
                }
                , getVideoTag: function () {
                    return o.getVideoTag()
                }
                , getVideoSourceId: function () {
                    return r.getVideoSourceId()
                }
                , getVideoLandingURL: function (e) {
                    return r.getVideoLandingURL(e)
                }
            });
            n.registerComponent(new a(e), "VideoPlayer")
        }, s)
    }(window, window.EU, window.EXPO_CREATIVE, window.CM)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        i.registerPlugin("VideoView", ["domUtility", "templateEngine", "events"], function (e, i, n, s) {
            var o = ["loadstart", "progress", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "play", "pause", "ratechange", "resize", "volumechange"]
                , r = e.utility
                , a = t.CreateClass({
                    init: function () {
                        this.handCursorEnabled = !1
                    }
                    , setRenderCompleteCallback: function (e) {
                        this.renderCompleteCallback = e
                    }
                    , setHandCursorFlag: function (e) {
                        this.handCursorEnabled = e
                    }
                    , getHandCursorFlag: function () {
                        return this.handCursorEnabled
                    }
                    , onConfig: function (e, t, n) {
                        this.model = e, this.container = document.querySelector(t), i.injectFont(e.config.prop.controlBarFontConfig, e), this.videoContainer || this.renderVideoPlayer()
                    }
                    , renderVideoPlayer: function () {
                        this.videoContainer = this.createVideoPlayer(), this.container.appendChild(this.videoContainer), this.controls = this.videoContainer.querySelector(".control"), this.btnPlay = this.videoContainer.querySelector(".btnPlay"), this.btnFullScreen = this.videoContainer.querySelector(".btnFS"), this.sound = this.videoContainer.querySelector(".sound"), this.soundIcon = this.videoContainer.querySelector(".sound span"), this.rewindButton = this.videoContainer.querySelector(".btnRewind"), this.progressbar = this.videoContainer.querySelector(".progress-bar")
                    }
                    , handleControlsClick: function (e) {
                        e.stopPropagation()
                    }
                    , renderComplete: function () {
                        this.renderCompleteCallback && this.renderCompleteCallback()
                    }
                    , addPlayListener: function (e) {
                        this.videoTag.addEventListener("play", e)
                    }
                    , createVideoPlayer: function () {
                        var e, t, i, s, o, r;
                        return t = {
                            src: this.model.getVideoSrc()
                            , id: this.model.getVideoId()
                        }, e = n.tmpl("video_player", t), s = document.createElement("div"), s.innerHTML = e, o = s.querySelector(".videoContainer"), r = o.querySelector("#videoID"), i = this.model.getPosterImage(), o.style.cssText = this.model.getInitialStyle(), i && r.setAttribute("poster", i), r.id = this.model.getVideoId(), r.volume = this.model.getVideoMuted() ? 0 : 1, this.videoTag = r, o
                    }
                    , pause: function () {
                        this.videoTag.pause()
                    }
                    , resume: function () {
                        this.videoTag.play()
                    }
                    , handleFullScreen: function (e) {
                        e.stopImmediatePropagation(), this.videoTag.webkitRequestFullscreen ? this.videoTag.webkitRequestFullscreen() : this.videoTag.mozRequestFullScreen ? this.videoTag.mozRequestFullScreen() : this.videoTag.requestFullscreen ? this.videoTag.requestFullscreen() : this.videoTag.msRequestFullscreen && this.videoTag.msRequestFullscreen()
                    }
                    , exitFullscreen: function () {
                        document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
                    }
                    , handlePlayBut: function (e) {
                        e.stopImmediatePropagation(), this.playPause()
                    }
                    , handleRewind: function (e) {
                        e.stopImmediatePropagation();
                        var t = i.customEvent("rewind", {
                            type: "rewind"
                            , status: "rewind"
                        });
                        this.setTime(0), this.rewindButton.dispatchEvent(t), this.videoTag.paused && this.videoTag.play()
                    }
                    , playPause: function () {
                        this.videoTag.paused || this.videoTag.ended ? (this.videoTag.ended && this.videoTag.load(), this.videoTag.play()) : (this.videoTag.setAttribute("data-pause", !0), this.videoTag.pause())
                    }
                    , handleVolume: function (e) {
                        e.stopImmediatePropagation(), this.videoTag.muted = !this.videoTag.muted, this.videoTag.muted ? this.addMuteClass() : (this.removeMuteClass(), this.setVolume(.25))
                    }
                    , addMuteClass: function () {
                        this.sound.classList.add("muted"), this.soundIcon.classList.remove("icon-volume-up"), this.soundIcon.classList.add("icon-volume-off")
                    }
                    , removeMuteClass: function () {
                        this.sound.classList.remove("muted"), this.soundIcon.classList.add("icon-volume-up"), this.soundIcon.classList.remove("icon-volume-off")
                    }
                    , addPauseIcon: function () {
                        var e;
                        e = this.btnPlay.querySelector(".icon-play"), e && (e.classList.add("icon-pause"), e.classList.remove("icon-play"))
                    }
                    , addPlayIcon: function () {
                        var e;
                        e = this.btnPlay.querySelector(".icon-pause"), e && (e.classList.add("icon-play"), e.classList.remove("icon-pause"))
                    }
                    , handleVideoMoveEvent: function () {
                        var e = this
                            , t = e.videoContainer.getAttribute("data-state");
                        "block" !== e.controls.style.display && t ? (e.showControls(!0), i.removeClass(e.videoContainer, "rm-cursor-none"), 1 == e.getHandCursorFlag() && i.addClass(e.videoTag, "rm-hover-hand-cursor")) : t && (this.timmer && clearTimeout(this.timmer), this.timmer = setTimeout(function () {
                            "block" === e.controls.style.display && t && (e.showControls(!1), i.addClass(e.videoContainer, "rm-cursor-none"), i.removeClass(e.videoTag, "rm-hover-hand-cursor"))
                        }.bind(e), e.model.config.prop.controlTimeOut))
                    }
                    , addDataAttribute: function (e) {
                        "mainUnit" === e && this.handleVideoMoveEvent(), this.videoContainer.setAttribute("data-state", e)
                    }
                    , removeDataAttribute: function (e) {
                        this.videoContainer.removeAttribute("data-state")
                    }
                    , handleVideoLeaveEvent: function () {
                        this.showControls()
                    }
                    , handleProgressEvent: function (e) {
                        e.stopImmediatePropagation()
                    }
                    , setInitialListeners: function (e) {
                        function i() {
                            function e(e) {
                                n.call(this, e)
                            }
                            var t = ["MSFullscreenChange", "fullscreenchange", "mozfullscreenchange", "webkitfullscreenchange", "msfullscreenchange"];
                            t.forEach(function (t) {
                                document.addEventListener(t, e.bind(this))
                            }.bind(this))
                        }

                        function n(i) {
                            this.videoTag.removeAttribute("controls");
                            var n, s = i.type;
                            switch (this.videoTag.muted || 0 == this.videoTag.volume ? this.addMuteClass() : this.removeMuteClass(), s) {
                            case "playing":
                                this.timmer && clearTimeout(this.timmer), this.timmer = setTimeout(function () {
                                    "block" === this.controls.style.display && this.showControls(!1)
                                }.bind(this), this.model.config.prop.controlTimeOut);
                                break;
                            case "ended":
                                this.showControls(!0), "fullscreen" === this.checkForFullScreen() && (this.exitFullscreen(), this.showControls(!0)), this.videoTag.pause();
                                break;
                            case "loadedmetadata":
                                h = this.videoContainer.querySelector(".totalTime");
                                var o = this.videoTag.duration
                                    , r = Math.round(Math.floor(o / 60))
                                    , d = Math.round(o - 60 * r);
                                h.textContent = r + ":" + d, setTimeout(c.bind(this), 150), this.renderComplete();
                                break;
                            case "timeupdate":
                                var h, u = this.videoTag.currentTime
                                    , r = Math.round(Math.floor(u / 60))
                                    , d = Math.round(u - 60 * r)
                                    , m = this.videoTag.duration
                                    , f = 100 * u / m;
                                l.innerText = r + ":" + d, a.style.width = f + "%";
                                break;
                            case "fullscreenchange":
                            case "mozfullscreenchange":
                            case "webkitfullscreenchange":
                            case "MSFullscreenChange":
                                n = this.checkForFullScreen(), "fullscreen" === n ? (this.videoTag.removeAttribute("controls"), this.showControls(!0)) : (this.showControls(!0), this.videoTag.muted ? (this.sound.classList.add("muted"), this.soundIcon.classList.remove("icon-volume-up"), this.soundIcon.classList.add("icon-volume-off")) : (this.sound.classList.remove("muted"), this.soundIcon.classList.add("icon-volume-up"), this.soundIcon.classList.remove("icon-volume-off")), this.videoTag.paused || this.videoTag.ended ? this.addPlayIcon() : this.addPauseIcon());
                                break;
                            case "play":
                                this.addPauseIcon();
                                break;
                            case "pause":
                                this.addPlayIcon(), this.videoTag.getAttribute("data-pause") || (i = null), this.videoTag.removeAttribute("data-pause")
                            }
                            e(i), i && i.type && t.EventManager.fire("VideoPlayer_e_" + i.type, i)
                        }
                        var r = s;
                        this.btnFullScreen.addEventListener(r.VIDEOPLAYERCLICK.getEventName(), this.handleFullScreen.bind(this)), this.sound.addEventListener(r.VIDEOPLAYERCLICK.getEventName(), this.handleVolume.bind(this)), this.btnPlay.addEventListener(r.VIDEOPLAYERCLICK.getEventName(), this.handlePlayBut.bind(this)), this.progressbar.addEventListener(r.VIDEOPLAYERCLICK.getEventName(), this.handleProgressEvent.bind(this)), this.controls.addEventListener(r.VIDEOPLAYERCLICK.getEventName(), this.handleControlsClick.bind(this)), this.videoContainer.addEventListener(r.VIDEOPLAYERMOVE.getEventName(), function (e) {
                            this.oldClientX && this.oldClientY || (this.oldClientX = e.clientX, this.oldClientY = e.clientY), e.clientX === this.oldClientX && e.clientY === this.oldClientY || this.handleVideoMoveEvent.call(this), this.oldClientX = e.clientX, this.oldClientY = e.clientY
                        }.bind(this)), this.videoContainer.addEventListener(r.VIDEOPLAYERLEAVE.getEventName(), this.handleVideoLeaveEvent.bind(this)), this.rewindButton.addEventListener(r.VIDEOPLAYERCLICK.getEventName(), this.handleRewind.bind(this)), this.rewindButton.addEventListener(r.VIDEOREWIND.getEventName(), n.bind(this));
                        var a = this.videoContainer.querySelector(".timeBar")
                            , l = (this.videoContainer.querySelector(".current"), this.videoContainer.querySelector(".elapsedTime"));
                        i.call(this);
                        var c = function () {
                            if (this.videoTag.buffered.length > 0) {
                                var e, t = this.videoTag.buffered.end(0)
                                    , i = this.videoTag.duration
                                    , n = 100 * t / i;
                                e = this.videoContainer.querySelector(".bufferBar"), e.style.width = n + "%", t < i && setTimeout(c.bind(this), 500)
                            }
                        };
                        o.forEach(function (e) {
                            this.videoTag.addEventListener(e, n.bind(this))
                        }.bind(this))
                    }
                    , checkForFullScreen: function () {
                        var e = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement ? "fullscreen" : "fullscreenOff";
                        return e
                    }
                    , resizePlayer: function (e) {
                        e.width && (!r.isNumber(e.width) && e.width.indexOf("%") > 1 ? this.videoContainer.style.width = e.width : this.videoContainer.style.width = parseInt(e.width, 10)), e.height && (!r.isNumber(e.height) && e.height.indexOf("%") > 1 ? this.videoContainer.style.height = e.height : this.videoContainer.style.height = parseInt(e.height, 10)), r.isNumber(e.top) && (this.videoContainer.style.top = e.top), r.isNumber(e.left) && (this.videoContainer.style.left = e.left)
                    }
                    , getSize: function () {
                        return {
                            width: this.videoContainer.clientWidth
                            , height: this.videoContainer.clientHeight
                            , left: this.videoContainer.offsetLeft
                            , top: this.videoContainer.offsetTop
                        }
                    }
                    , showControls: function (e) {
                        e ? this.controls.style.display = "block" : this.controls.style.display = "none"
                    }
                    , setLoop: function (e) {
                        e ? this.videoTag.setAttribute("loop", "loop") : this.videoTag.removeAttribute("loop")
                    }
                    , setTime: function (e) {
                        this.videoTag.currentTime = e
                    }
                    , showHandCursor: function () {
                        this.setHandCursorFlag(!0), i.addClass(this.videoTag, "rm-hover-hand-cursor")
                    }
                    , hideHandCursor: function () {
                        this.setHandCursorFlag(!1), i.removeClass(this.videoTag, "rm-hover-hand-cursor")
                    }
                    , reset: function () {
                        this.videoTag.pause(), this.videoTag.removeAttribute("src")
                    }
                    , setSrc: function (e) {
                        if (!e) throw "Src must be specfied";
                        this.videoTag.setAttribute("src", e)
                    }
                    , setPosterImage: function (e) {
                        e && this.videoTag.setAttribute("poster", e)
                    }
                    , setVolume: function (e) {
                        e > 0 ? (this.removeMuteClass(), this.videoTag.muted = !1) : this.addMuteClass(), this.videoTag.volume = e
                    }
                    , getVideoTag: function () {
                        return this.videoTag
                    }
                    , togglePosition: function (e) {
                        e ? (this.container.parentNode.style.setProperty("position", e, "important"), this.videoContainer.style.top = 0, this.container.parentNode.style.left = e ? "1px" : "") : (this.container.parentNode.style.removeProperty("position"), this.videoContainer.style.removeProperty("top"), this.container.parentNode.style.left = "")
                    }
                });
            return new a
        }, n)
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        i.registerPlugin("VideoModel", function (e) {
            var i = t.BaseModel.extend({
                init: function () {}
                , onConfig: function (e) {
                    this.maintainAspectRatio = !1, this.controlsVisible = !1, this.cookData(e)
                }
                , getPlayerDimensions: function () {
                    return {
                        top: this.config.top || 0
                        , left: this.config.left || 0
                        , width: this.config.width || "100%"
                        , height: this.config.height || "100%"
                    }
                }
                , cookData: function (e) {
                    this.config = e
                }
                , getVideoId: function () {
                    return this.config.prop.videoID
                }
                , getVideoSourceId: function () {
                    return this.currentVideoId
                }
                , getVideoLandingURL: function (e) {
                    var t = e || this.currentVideoId;
                    return this.config.videos && this.config.videos[t] && this.config.videos[t].landingURL || ""
                }
                , getVideoSrc: function (e) {
                    if (!e && !this.config.prop.src) {
                        var t = null;
                        if (this.config.videos) {
                            var i = this.config.videos;
                            return Object.keys(i).forEach(function (e) {
                                i[e]["default"] === !0 && (this.currentVideoId = e, t = this.getPath() + i[e].src)
                            }.bind(this)), null === t ? this.getPath() + this.config.videos.video1.src : t
                        }
                    }
                    var n = e && this.config.videos && this.config.videos[e].src;
                    return n && (this.currentVideoId = e), this.getPath() + (n || this.config.prop.src)
                }
                , getVideoMuted: function () {
                    return this.config.prop.isMuted
                }
                , getInitialAttributes: function () {
                    return {
                        width: this.config.width
                        , height: this.config.height
                    }
                }
                , getPosterImage: function (e) {
                    if (!e && !this.config.prop.posterImage) {
                        var t = null;
                        if (this.config.videos) {
                            var i = this.config.videos;
                            return Object.keys(i).forEach(function (e) {
                                i[e]["default"] === !0 && (t = this.getPath() + i[e].poster)
                            }.bind(this)), null === t ? this.getPath() + this.config.videos.video1.poster : t
                        }
                    }
                    return this.getPath() + (e && this.config.videos && this.config.videos[e].poster) || this.config.prop.posterImage
                }
                , getInitialStyle: function () {
                    var t = !e.utility.isNumber(this.config.width) && this.config.width.indexOf("%") > -1 ? "width:" + this.config.width + ";" : "width:" + this.config.width + "px;"
                        , i = null === this.config.height ? "" : "height:" + this.config.height + "px;"
                        , n = this.config.top ? "top:" + this.config.top + "px;" : ""
                        , s = this.config.left ? "left:" + this.config.left + "px;" : "";
                    return "position:relative;" + t + i + n + s
                }
                , setVideoTime: function (e) {
                    this.videoTime = e
                }
                , getVideoTime: function () {
                    return this.videoTime
                }
                , getPath: function () {
                    return this.config.museLocation ? this.config.museLocation : ""
                }
            });
            return new i
        }, n)
    }(window, window.EU, window.EXPO_CREATIVE)
    , function (e, t, i) {
        "use strict";
        var n = "1.0.0";
        i.registerPlugin("VideoController", function () {
            var e = t.CreateClass({
                init: function () {}
                , onConfig: function (e, t) {
                    this.view = e, this.model = t, this.reset()
                }
                , onVideoClick: function () {}
                , onVideoOver: function () {}
                , onVideoOut: function () {}
                , onVideoEnd: function () {
                    this.dispatchVideoEnd()
                }
                , resizePlayer: function (e) {
                    this.view.resizePlayer(e)
                }
                , showControls: function (e) {
                    this.view.showControls(e)
                }
                , setLoop: function (e) {
                    this.view.setLoop(e)
                }
                , setTime: function (e) {
                    this.view.setTime(e)
                }
                , getSize: function () {
                    return this.view.getSize()
                }
                , setVolume: function (e) {
                    this.view && this.view.setVolume(e)
                }
                , addDataAttribute: function (e) {
                    this.view.addDataAttribute(e)
                }
                , removeDataAttribute: function (e) {
                    this.view.removeDataAttribute(e)
                }
                , pausePlayer: function () {
                    this.view.pause()
                }
                , addPlayListener: function (e) {
                    this.view.addPlayListener(e)
                }
                , setInitialListeners: function (e) {
                    this.view.setInitialListeners(e)
                }
                , resumePlayer: function () {
                    this.view.resume()
                }
                , onVideoProgress: function (e) {
                    return this.model.setVideoTime(e.target.currentTime), this.progressPixels.start ? e.target.currentTime > e.target.duration / 4 && !this.progressPixels.q1 ? void this.dispatchVideoQ1() : e.target.currentTime > e.target.duration / 2 && !this.progressPixels.q2 ? void this.dispatchVideoQ2() : e.target.currentTime > 3 * e.target.duration / 4 && !this.progressPixels.q3 ? void this.dispatchVideoQ3() : void 0 : void this.dispatchVideoStart()
                }
                , dispatchVideoStart: function () {
                    this.progressPixels.start = !0
                }
                , dispatchVideoQ1: function () {
                    this.progressPixels.q1 = !0
                }
                , dispatchVideoQ2: function () {
                    this.progressPixels.q2 = !0
                }
                , dispatchVideoQ3: function () {
                    this.progressPixels.q3 = !0
                }
                , dispatchVideoEnd: function () {
                    this.progressPixels.end = !0
                }
                , showHandCursor: function () {
                    this.view.showHandCursor()
                }
                , hideHandCursor: function () {
                    this.view.hideHandCursor()
                }
                , reset: function () {
                    this.progressPixels = {
                        start: !1
                        , q1: !1
                        , q2: !1
                        , q3: !1
                        , end: !1
                    }
                }
                , getVideoSourceId: function () {
                    return this.model.getVideoSourceId()
                }
                , getVideoLandingURL: function (e) {
                    return this.model.getVideoLandingURL(e)
                }
            });
            return new e
        }, n)
    }(window, window.EU, window.EXPO_CREATIVE);