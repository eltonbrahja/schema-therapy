// src/pages/Privacy.tsx
function Privacy() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d1f16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Titolo */}
        <header className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b5a3c] mb-3">
            Informativa sul trattamento dei dati personali
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-[#2d1f16] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#5c4a3d] max-w-2xl">
            La presente informativa è resa ai sensi del Regolamento (UE)
            2016/679 (&quot;GDPR&quot;) e della normativa nazionale applicabile in
            materia di protezione dei dati personali, e descrive le modalità di
            trattamento dei dati personali degli utenti che visitano il sito{" "}
            <span className="font-medium">schematherapy.shop</span>.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-[#5c4a3d]">
          {/* 1. Titolare del trattamento */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              1. Titolare del trattamento
            </h2>
            <p>
              Il Titolare del trattamento dei dati personali è{" "}
              <span className="font-medium">[Nome e Cognome / Ragione sociale]</span>, 
              con sede in <span className="font-medium">[indirizzo completo]</span>, 
              e contattabile all&apos;indirizzo e-mail{" "}
              <span className="font-medium">[indirizzo email di contatto]</span>.
            </p>
          </section>

          {/* 2. Tipologie di dati trattati */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              2. Tipologie di dati trattati
            </h2>
            <p className="mb-2">
              Attraverso il sito possono essere raccolte e trattate le seguenti
              categorie di dati personali:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-medium">Dati di navigazione</span>: indirizzi
                IP, informazioni sul dispositivo, dati relativi alle sessioni e
                alla navigazione (log), raccolti in forma automatizzata e
                aggregata per il funzionamento del sito e per finalità di
                sicurezza.
              </li>
              <li>
                <span className="font-medium">Dati forniti volontariamente</span>: 
                dati identificativi e di contatto (ad es. nome, cognome, e-mail, 
                numero di telefono) forniti tramite moduli di contatto, form di 
                richiesta informazioni o procedura di acquisto.
              </li>
              <li>
                <span className="font-medium">Dati relativi agli acquisti</span>: 
                informazioni relative ai prodotti acquistati, importi, eventuali 
                dati di fatturazione; i dati di pagamento sono trattati tramite 
                provider terzi (es. gateway di pagamento) e non vengono archiviati 
                direttamente sul sito.
              </li>
              <li>
                <span className="font-medium">Cookie e strumenti di tracciamento</span>: 
                per maggiori dettagli consulta la{" "}
                <a
                  href="/cookie"
                  className="underline decoration-[#8b5a3c] underline-offset-2"
                >
                  Cookie Policy
                </a>
                .
              </li>
            </ul>
          </section>

          {/* 3. Finalità e basi giuridiche */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              3. Finalità del trattamento e basi giuridiche
            </h2>
            <p className="mb-2">
              I dati personali raccolti tramite il sito sono trattati per le
              seguenti finalità e sulla base delle relative basi giuridiche:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-medium">
                  Navigazione sul sito e sicurezza:
                </span>{" "}
                consentire il corretto funzionamento del sito, monitorarne la
                sicurezza e le prestazioni. Base giuridica: legittimo interesse
                del Titolare al funzionamento sicuro e stabile del sito.
              </li>
              <li>
                <span className="font-medium">
                  Gestione delle richieste di contatto:
                </span>{" "}
                rispondere a richieste di informazioni, preventivi o supporto
                inviate tramite i form presenti sul sito o tramite i contatti
                indicati. Base giuridica: esecuzione di misure precontrattuali
                adottate su richiesta dell&apos;interessato.
              </li>
              <li>
                <span className="font-medium">
                  Gestione di ordini e acquisti:
                </span>{" "}
                permettere la conclusione ed esecuzione di contratti di
                acquisto, adempiere a obblighi amministrativi, contabili e
                fiscali. Base giuridica: esecuzione di un contratto e obblighi
                di legge.
              </li>
              <li>
                <span className="font-medium">
                  Attività di marketing diretto (se previste):
                </span>{" "}
                invio di comunicazioni informative e promozionali via e-mail o
                altri canali sui prodotti e servizi del Titolare. Base
                giuridica: consenso dell&apos;interessato, liberamente
                revocabile in qualsiasi momento.
              </li>
              <li>
                <span className="font-medium">Adempimento di obblighi legali</span>: 
                ottemperare agli obblighi previsti da leggi, regolamenti o dalla 
                normativa comunitaria. Base giuridica: adempimento di obblighi 
                legali.
              </li>
            </ul>
          </section>

          {/* 4. Modalità del trattamento e conservazione */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              4. Modalità del trattamento e tempi di conservazione
            </h2>
            <p className="mb-2">
              I dati personali sono trattati con strumenti elettronici e, in
              casi limitati, anche con strumenti manuali, secondo principi di
              liceità, correttezza, trasparenza, minimizzazione e limitazione
              della conservazione.
            </p>
            <p className="mb-2">
              I dati sono conservati per il tempo strettamente necessario al
              conseguimento delle finalità per le quali sono stati raccolti e
              comunque nel rispetto dei termini di legge applicabili. In via
              esemplificativa:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                dati relativi alle richieste di contatto: per il tempo
                necessario a gestire la richiesta e fino a un massimo di{" "}
                <span className="font-medium">[es. 12 mesi]</span>;
              </li>
              <li>
                dati relativi agli acquisti e alla fatturazione: per i tempi
                previsti dalla normativa fiscale e civilistica{" "}
                (<span className="font-medium">[es. 10 anni]</span>);
              </li>
              <li>
                dati trattati per finalità di marketing: fino alla revoca del
                consenso o, in mancanza, per un periodo massimo di{" "}
                <span className="font-medium">[es. 24 mesi]</span>.
              </li>
            </ul>
          </section>

          {/* 5. Destinatari e trasferimenti */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              5. Destinatari dei dati e trasferimenti extra UE
            </h2>
            <p className="mb-2">
              I dati personali possono essere comunicati a soggetti che
              operano, in qualità di responsabili del trattamento ex art. 28
              GDPR o di autonomi titolari, quali a titolo esemplificativo:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                fornitori di servizi tecnici e di hosting, provider di servizi
                di pagamento, consulenti fiscali e legali, piattaforme per la
                gestione di newsletter o comunicazioni commerciali;
              </li>
              <li>
                autorità e enti pubblici, ove ciò sia richiesto da obblighi di
                legge o da ordini dell&apos;autorità.
              </li>
            </ul>
            <p className="mt-2">
              Qualora il trasferimento dei dati personali avvenga verso paesi
              extra UE/SEE, esso sarà effettuato nel rispetto degli artt. 44 ss.
              GDPR, adottando le garanzie adeguate (ad es. decisioni di
              adeguatezza della Commissione UE, clausole contrattuali standard).
            </p>
          </section>

          {/* 6. Diritti dell'interessato */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              6. Diritti dell&apos;interessato
            </h2>
            <p className="mb-2">
              In qualità di interessato, l&apos;utente può esercitare in qualsiasi
              momento i diritti riconosciuti dagli artt. 15–22 GDPR, tra cui:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>diritto di accesso ai dati personali;</li>
              <li>diritto di rettifica o cancellazione;</li>
              <li>diritto di limitazione del trattamento;</li>
              <li>diritto di opposizione al trattamento;</li>
              <li>diritto alla portabilità dei dati, ove applicabile;</li>
              <li>
                diritto di revocare il consenso prestato, senza pregiudicare la
                liceità del trattamento effettuato prima della revoca;
              </li>
              <li>
                diritto di proporre reclamo all&apos;Autorità Garante per la protezione
                dei dati personali o ad altra autorità di controllo competente.
              </li>
            </ul>
            <p>
              Per esercitare i propri diritti è possibile contattare il Titolare
              all&apos;indirizzo e-mail{" "}
              <span className="font-medium">[indirizzo email di contatto]</span>.
            </p>
          </section>

          {/* 7. Aggiornamenti */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              7. Modifiche alla presente informativa
            </h2>
            <p>
              La presente Privacy Policy può essere soggetta ad aggiornamenti nel
              tempo, anche in relazione a modifiche normative o a cambiamenti nei
              trattamenti effettuati. Le modifiche saranno pubblicate su questa
              pagina e, se rilevanti, potranno essere comunicate agli utenti
              attraverso i canali appropriati.
            </p>
            <p className="mt-2 text-xs text-[#7a6555]">
              Ultimo aggiornamento: [data].
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Privacy;
