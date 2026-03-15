// src/pages/Cookie.tsx
function Cookie() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#2d1f16]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Titolo */}
        <header className="mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-[#8b5a3c] mb-3">
            Informativa Cookie
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-[#2d1f16] mb-3">
            Cookie Policy
          </h1>
          <p className="text-sm text-[#5c4a3d] max-w-2xl">
            La presente informativa descrive l&apos;utilizzo dei cookie e di altri
            strumenti di tracciamento sul sito{" "}
            <span className="font-medium">schematherapy.shop</span>, in conformità
            al Regolamento (UE) 2016/679 (&quot;GDPR&quot;) e alle Linee guida
            del Garante per la protezione dei dati personali in materia di cookie e
            altri strumenti di tracciamento (provvedimento 10.06.2021).
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-[#5c4a3d]">
          {/* 1. Cosa sono i cookie */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              1. Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dall&apos;utente
              inviano al suo dispositivo, dove vengono memorizzati per essere poi
              ritrasmessi agli stessi siti alla visita successiva. I cookie
              permettono al sito di funzionare in modo efficiente e di migliorare
              l&apos;esperienza di navigazione, nonché di raccogliere informazioni,
              in forma aggregata o meno, sul numero degli utenti e su come il sito
              viene utilizzato.
            </p>
          </section>

          {/* 2. Tipologie di cookie utilizzati */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              2. Tipologie di cookie utilizzati dal sito
            </h2>
            <p className="mb-2">
              Il presente sito utilizza le seguenti categorie di cookie:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>
                <span className="font-medium">Cookie tecnici (necessari)</span>:{" "}
                sono indispensabili per il corretto funzionamento del sito e per
                consentire la navigazione e l&apos;utilizzo delle sue funzionalità
                (ad es. gestione della sessione, salvataggio delle preferenze di
                consenso ai cookie). Non richiedono il consenso dell&apos;utente e
                sono installati automaticamente al momento dell&apos;accesso al sito.
              </li>
              <li>
                <span className="font-medium">
                  Cookie analitici (di prima o terza parte)
                </span>
                : utilizzati per raccogliere informazioni sulle visite e sull&apos;uso
                del sito (ad es. pagine visitate, tempo di permanenza, pagine di
                provenienza). Quando sono configurati in modo da non consentire la
                identificazione dell&apos;utente (es. IP anonimizzato, dati aggregati),
                possono essere equiparati ai cookie tecnici; diversamente richiedono
                il consenso dell&apos;utente.
              </li>
              <li>
                <span className="font-medium">Cookie di profilazione</span> (se
                presenti): sono volti a creare profili relativi all&apos;utente e
                vengono utilizzati per inviare messaggi pubblicitari in linea con le
                preferenze manifestate nell&apos;ambito della navigazione in rete.
                Questo sito, allo stato attuale,{" "}
                <span className="font-medium">
                  [non utilizza / utilizza] cookie di profilazione
                </span>
                . In caso di utilizzo, tali cookie vengono installati solo previo
                consenso esplicito dell&apos;utente.
              </li>
            </ul>
            <p className="mt-2">
              L&apos;elenco aggiornato e dettagliato dei cookie effettivamente utilizzati
              (nome, tipo, durata, finalità e provenienza) dovrebbe essere
              riportato in una tabella specifica, sulla base della configurazione
              tecnica effettiva del sito.
            </p>
          </section>

          {/* 3. Cookie di terze parti */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              3. Cookie di terze parti
            </h2>
            <p className="mb-2">
              Alcuni cookie potrebbero essere installati da soggetti terzi rispetto
              al Titolare (ad es. fornitori di servizi di analisi del traffico,
              piattaforme di pagamento, strumenti di marketing). In tal caso, tali
              terze parti agiscono come autonomi titolari o come responsabili del
              trattamento, secondo quanto indicato nelle rispettive informative,
              alle quali si rinvia:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                [Es. Google Analytics / altro strumento]: link all&apos;informativa
                privacy e cookie del fornitore.
              </li>
              <li>[Eventuali altre terze parti]: link alle rispettive informative.</li>
            </ul>
            <p className="mt-2">
              Si invita l&apos;utente a consultare tali informative per avere maggiori
              dettagli sul trattamento effettuato dalle singole terze parti.
            </p>
          </section>

          {/* 4. Banner cookie e raccolta del consenso */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              4. Banner cookie e raccolta del consenso
            </h2>
            <p className="mb-2">
              Al primo accesso al sito, un banner informa l&apos;utente che il sito
              utilizza cookie tecnici e, previo consenso, eventuali cookie per
              finalità ulteriori (analitiche o di profilazione). L&apos;utente può:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>accettare tutti i cookie cliccando sul pulsante &quot;Accetta tutti&quot;;</li>
              <li>
                rifiutare i cookie non tecnici cliccando sul pulsante &quot;Solo
                necessari&quot; o chiudendo il banner tramite l&apos;apposita &quot;X&quot;;
              </li>
              <li>
                personalizzare le proprie scelte accedendo alla sezione di
                gestione dettagliata delle preferenze, se prevista.
              </li>
            </ul>
            <p>
              Le preferenze espresse tramite il banner sono registrate mediante un
              apposito cookie tecnico e non verranno richieste nuovamente per almeno
              6 mesi, salvo che cambino in modo significativo le condizioni del
              trattamento o l&apos;utente cancelli i cookie dal proprio browser.
            </p>
          </section>

          {/* 5. Come gestire i cookie dal browser */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              5. Gestione dei cookie tramite le impostazioni del browser
            </h2>
            <p className="mb-2">
              L&apos;utente può in ogni momento modificare le proprie preferenze sui
              cookie anche attraverso le impostazioni del browser utilizzato,
              scegliendo, ad esempio, di bloccare l&apos;installazione di cookie da parte
              di siti terzi o di cancellare i cookie già presenti sul dispositivo.
            </p>
            <p className="mb-2">
              Le modalità di gestione dei cookie variano a seconda del browser
              utilizzato. Di seguito alcuni link alle pagine di supporto dei
              principali browser:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-[#8b5a3c] underline-offset-2"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/it/kb/attivare-e-disattivare-i-cookie"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-[#8b5a3c] underline-offset-2"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-[#8b5a3c] underline-offset-2"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  href="https://support.microsoft.com/it-it/topic/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-[#8b5a3c] underline-offset-2"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          {/* 6. Diritti dell'utente */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              6. Diritti dell&apos;utente
            </h2>
            <p className="mb-2">
              In qualità di interessato, l&apos;utente può esercitare i diritti previsti
              dagli artt. 15–22 del GDPR (accesso, rettifica, cancellazione,
              limitazione, opposizione, portabilità, reclamo al Garante), secondo
              quanto indicato nella{" "}
              <a
                href="/privacy"
                className="underline decoration-[#8b5a3c] underline-offset-2"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* 7. Aggiornamenti */}
          <section>
            <h2 className="font-semibold text-base text-[#2d1f16] mb-2">
              7. Aggiornamenti della presente Cookie Policy
            </h2>
            <p>
              La presente Cookie Policy può essere soggetta a modifiche nel tempo,
              anche in relazione all&apos;entrata in vigore di nuove normative di
              settore o all&apos;aggiornamento dei cookie utilizzati dal sito. Le
              modifiche sostanziali saranno comunicate tramite il sito e, se del
              caso, tramite il banner cookie.
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

export default Cookie;
