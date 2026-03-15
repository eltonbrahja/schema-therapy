export function Privacy() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d1f16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Titolo */}
        <header className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b5a3c] mb-3">
            Informativa Privacy
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-[#2d1f16] mb-3">
            Privacy Policy ai sensi del Regolamento (UE) 2016/679 (&quot;GDPR&quot;)
          </h1>
          <p className="text-sm text-[#5c4a3d] max-w-2xl">
            La presente informativa è resa ai sensi dell&apos;art. 13 del
            Regolamento (UE) 2016/679 (&quot;GDPR&quot;) e descrive le modalità con
            cui il Titolare tratta i dati personali degli utenti che consultano il
            sito <span className="font-medium">schematherapy.shop</span> e/o
            utilizzano il modulo di contatto.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-[#5c4a3d]">
          {/* 1. Titolare */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              1. Titolare del trattamento
            </h2>
            <p>
              Titolare del trattamento è{' '}
              <span className="font-medium">[Nome e Cognome / Studio]</span>, con
              sede in <span className="font-medium">[Indirizzo completo]</span>, C.F./P.IVA{' '}
              <span className="font-medium">[dati fiscali]</span>, e-mail{' '}
              <a
                href="mailto:[email]"
                className="underline decoration-[#8b5a3c] underline-offset-2"
              >
                [email]
              </a>{' '}
              e telefono{' '}
              <span className="font-medium">[numero di telefono]</span>.
            </p>
          </section>

          {/* 2. Tipi di dati trattati */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              2. Tipologie di dati trattati
            </h2>
            <p className="mb-2">
              Tramite il sito possono essere trattate le seguenti categorie di dati
              personali:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-medium">Dati di navigazione</span>: sistemi
                informatici e procedure software preposte al funzionamento del sito
                acquisiscono, nel corso del loro normale esercizio, alcuni dati
                personali la cui trasmissione è implicita nell&apos;uso dei protocolli
                di comunicazione di Internet (es. indirizzi IP, nomi a dominio dei
                computer utilizzati dagli utenti, informazioni sul browser, data e
                orario della visita). Tali dati sono utilizzati al solo fine di
                ricavare informazioni statistiche anonime sull&apos;uso del sito e per
                controllarne il corretto funzionamento. [web:99][web:102]
              </li>
              <li>
                <span className="font-medium">Dati forniti volontariamente</span>:
                dati identificativi e di contatto (nome, cognome, e-mail, eventuale
                numero di telefono, contenuto del messaggio) inviati tramite il
                modulo di contatto presente sul sito.
              </li>
              <li>
                <span className="font-medium">Cookie e strumenti di tracciamento</span>:
                il sito utilizza cookie tecnici e, previo consenso, eventuali cookie
                di analisi o di terze parti, secondo quanto meglio descritto nella{' '}
                <a
                  href="/cookie"
                  className="underline decoration-[#8b5a3c] underline-offset-2"
                >
                  Cookie Policy
                </a>
                .
              </li>
            </ul>
            <p className="mt-2">
              Non vengono raccolti intenzionalmente dati appartenenti alle categorie
              particolari di cui all&apos;art. 9 GDPR (es. dati sulla salute) tramite il
              sito. Eventuali riferimenti a situazioni personali inseriti
              spontaneamente dall&apos;utente nel messaggio saranno trattati solo nella
              misura strettamente necessaria a rispondere alla richiesta. [web:98]
            </p>
          </section>

          {/* 3. Finalità e basi giuridiche */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              3. Finalità del trattamento e basi giuridiche
            </h2>
            <p className="mb-2">
              I dati personali vengono trattati per le seguenti finalità e sulle
              seguenti basi giuridiche:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="font-medium">
                  Gestione delle richieste inviate tramite il modulo di contatto
                </span>
                : rispondere a quesiti, richieste di informazioni sui prodotti e
                sull&apos;attività professionale, preventivi, richieste di ordine o
                supporto. Base giuridica: esecuzione di misure precontrattuali o
                contrattuali adottate su richiesta dell&apos;interessato (art. 6.1.b
                GDPR).
              </li>
              <li>
                <span className="font-medium">
                  Adempimento di obblighi legali e contabili
                </span>
                : qualora dall&apos;utilizzo del sito o dall&apos;ordine derivino obblighi
                amministrativi, contabili o fiscali in capo al Titolare. Base
                giuridica: obbligo legale (art. 6.1.c GDPR).
              </li>
              <li>
                <span className="font-medium">
                  Funzionamento, sicurezza e miglioramento del sito
                </span>
                : analisi anonime o aggregate dei dati di navigazione, prevenzione e
                rilevazione di attività fraudolente o abusi. Base giuridica:
                legittimo interesse del Titolare (art. 6.1.f GDPR), nel rispetto dei
                diritti e delle libertà degli utenti. [web:99]
              </li>
              <li>
                <span className="font-medium">Attività di analisi statistica</span> su
                dati aggregati o pseudonimizzati, ove presenti strumenti di
                analytics, con eventuale consenso dell&apos;utente quando richiesto dalla
                normativa sui cookie. Base giuridica: consenso (art. 6.1.a GDPR).
              </li>
            </ul>
          </section>

          {/* 4. Modalità e tempi di conservazione */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              4. Modalità del trattamento e tempi di conservazione
            </h2>
            <p className="mb-2">
              I dati sono trattati con strumenti prevalentemente informatici e
              telematici, adottando misure tecniche e organizzative adeguate a
              garantirne la sicurezza e la riservatezza, in conformità agli artt. 24,
              25 e 32 GDPR.
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>
                I dati trasmessi tramite il modulo di contatto vengono conservati per
                il tempo necessario a rispondere alla richiesta e, se del caso, per
                instaurare o gestire un rapporto professionale o contrattuale.
              </li>
              <li>
                I dati di navigazione sono normalmente conservati per brevi periodi,
                salvo eventuali necessità di accertamento di responsabilità in caso di
                reati informatici ai danni del sito.
              </li>
              <li>
                I dati trattati per finalità di adempimento legale sono conservati per
                i periodi previsti dalla normativa civile, fiscale e contabile
                applicabile.
              </li>
            </ul>
          </section>

          {/* 5. Destinatari */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              5. Destinatari dei dati personali
            </h2>
            <p className="mb-2">
              I dati potranno essere trattati, nel rispetto delle finalità sopra
              indicate, da:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>
                collaboratori e soggetti che agiscono sotto l&apos;autorità del
                Titolare, appositamente istruiti;
              </li>
              <li>
                fornitori di servizi tecnici (ad es. provider hosting, servizi di
                invio e gestione e-mail, servizi di manutenzione IT), nominati, ove
                necessario, responsabili del trattamento ai sensi dell&apos;art. 28 GDPR;
              </li>
              <li>
                consulenti professionali (es. consulente fiscale o legale), nei limiti
                necessari all&apos;adempimento dei relativi incarichi.
              </li>
            </ul>
            <p>
              I dati personali non sono oggetto di diffusione. L&apos;eventuale
              trasferimento di dati verso Paesi extra UE/SEE avverrà nel rispetto
              degli artt. 44 ss. GDPR, sulla base di decisioni di adeguatezza della
              Commissione Europea o di garanzie adeguate (es. clausole contrattuali
              standard). [web:97][web:101]
            </p>
          </section>

          {/* 6. Diritti dell'interessato */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              6. Diritti degli interessati
            </h2>
            <p className="mb-2">
              In qualunque momento l&apos;utente può esercitare, nei confronti del
              Titolare, i diritti previsti dagli artt. 15–22 GDPR, tra cui:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>ottenere conferma che sia o meno in corso un trattamento di dati che lo riguardano;</li>
              <li>accedere ai propri dati personali e ottenerne copia;</li>
              <li>chiedere la rettifica o l&apos;aggiornamento dei dati inesatti o incompleti;</li>
              <li>chiedere la cancellazione dei dati nei casi previsti dall&apos;art. 17 GDPR;</li>
              <li>
                ottenere la limitazione del trattamento nei casi previsti dall&apos;art. 18
                GDPR;
              </li>
              <li>
                opporsi, in tutto o in parte, al trattamento basato sul legittimo
                interesse;
              </li>
              <li>
                richiedere la portabilità dei dati, ove applicabile (art. 20 GDPR).
              </li>
            </ul>
            <p className="mb-2">
              Le richieste possono essere inviate all&apos;indirizzo e-mail{' '}
              <a
                href="mailto:[email]"
                className="underline decoration-[#8b5a3c] underline-offset-2"
              >
                [email]
              </a>
              . L&apos;interessato ha inoltre il diritto di proporre reclamo
              all&apos;Autorità Garante per la protezione dei dati personali (www.garanteprivacy.it). [web:104]
            </p>
          </section>

          {/* 7. Obbligo di conferimento */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              7. Natura del conferimento dei dati
            </h2>
            <p>
              Il conferimento dei dati tramite il modulo di contatto è facoltativo,
              ma necessario per poter ottenere una risposta alle richieste inoltrate:
              in mancanza dei dati contrassegnati come obbligatori, potrebbe non
              essere possibile fornire il servizio richiesto. Il conferimento dei
              dati per finalità di analisi tramite cookie non tecnici è invece
              facoltativo e subordinato al consenso dell&apos;utente, come indicato nella
              Cookie Policy. [web:100][web:103]
            </p>
          </section>

          {/* 8. Aggiornamenti */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              8. Modifiche alla presente informativa
            </h2>
            <p>
              Il Titolare si riserva il diritto di modificare in qualsiasi momento la
              presente Privacy Policy per adeguarla a eventuali novità normative o
              cambiamenti nei trattamenti effettuati. Le modifiche saranno
              tempestivamente pubblicate su questa pagina. Si invita pertanto
              l&apos;utente a consultare periodicamente questa sezione.
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
