import bancarellaImg from "../assets/img/polizia_locale_bancarella-2.jpg"
export default function AboutUs() {

    return (
        <div class="p-5 mb-4 bg-light ">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Chi siamo</h1>
                <p class="col fs-4">
                    Fondata oltre 20 anni fa,
                    la nostra azienda nasce dalla passione per le bancarelle.
                    Sin dai primi giorni, l’obiettivo è stato offrire ai clienti soluzioni affidabili e innovative,
                    con un’attenzione particolare alla qualità e al servizio.
                    Con il tempo, siamo cresciuti,
                    ampliando il catalogo e abbracciando le nuove tecnologie,
                    senza mai perdere di vista i valori che ci hanno guidato fin dall’inizio: integrità,
                    passione e cura del cliente.
                    Oggi siamo orgogliosi di continuare a portare sul mercato prodotti selezionati con cura e un’esperienza d’acquisto unica,
                    mantenendo vivo lo spirito che ci ha contraddistinto fin dalla fondazione.
                </p>
            </div>
            <div>
                <img className="w-100" src={bancarellaImg} alt="" />
            </div>
        </div>

    )
}