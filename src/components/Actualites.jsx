import { images } from "../assets/images";
import imageRepresentatif from "../assets/imageRepresentatif.jpg";
import videoActualite from "../assets/videos/1-web.mp4";


const actualites = Object.entries(images);

const formatTitle = (key, index) => {
  if (!key) return `Actualité ${index + 1}`;

  return key
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Actualites = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20">
      {/* Décor de fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Meta */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
            <svg
              className="h-4 w-4 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Mercredi le 22 Juillet 2026 de 15h00 à 16h30
          </span>

          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">
            <svg
              className="h-4 w-4 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            2 min de lecture
          </span>
        </div>

        {/* Titre */}
        <div className="mb-10 max-w-4xl">
          <span className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
            Actualités sur la préparation de FOIRE MEVA
          </span>

          <h2 className="text-lg font-semibold text-blue-600 uppercase tracking-widest text-center mb-4">
            FIVORIANA MAHAKASIKA NY FANOMANANA NY FOIRE MEVA @ 29 JOLAY
            HATRAMIN'NY 01 AOGOSITRA 2026
          </h2>
        </div>

        {/* Bloc principal */}
        <section className="mb-14">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="grid md:grid-cols-2">
              {/* LEFT POUR CONTENU */}
              <div className="flex flex-col justify-start p-8 sm:p-10 lg:p-12">
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-0">
                  ANTONY FIVORIANA
                </h3>

                <p className="mx-4 text-slate-600 leading-7 text-justify">
                  HAMALY NY FANONTANIANA HOE: Inona ny zavatra hatao sy zavatra
                  hiseho mandritra ny FOIRE MEVA ? <br />
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 marker:text-blue-600">
                    <li>
                      Varotra sy fampiratiana ny vokatra tanjakin'ny faritra
                    </li>
                    <li>
                      Fampafantarana amin'ny halalan'ny dépliant ny
                      andraikitrin'ny Fitaleavam-paritra
                    </li>
                    <li>
                      Hatomboka amin'ny kabary hifandibiasana Handraisan'ny
                      Manampahefana sy Mpisehatra ara-ekonomika anjara. Na izany
                      aza tsy fantatra mazava iza no handray fitenenana ka hoy
                      Président CCI, samia mihomakomana ny lahateniny.
                    </li>
                    <li>
                      Hisy fanomezana souvenir maro hisan-karazany ho
                      atolotrin'ny CCI Antsiranana ireo sponsor mba ho
                      fahatsiarovana mandritra ny lanonana fanokafana
                    </li>
                    <li>
                      Mandritra ny Foire, hisanandro tolakandro dia hisy atelier
                      d'échange irahana amin'ny "CCI la Réunion", "EDBM", sns.
                    </li>
                  </ul>
                </p>

                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl mb-0">
                  IREO MPANDRAY ANJARA
                </h3>
                <p className="mx-4 text-slate-600 leading-7 text-justify">
                  Araka ny voambara tao dia ho tonga i Ramatoa Ministrin'ny
                  Varotra sy ny Fanjifana raha ny Info nazo tamin'ny zoma lasa
                  hoy Président CCI raha ny namaly ny fanontanian'I Atoa Préfet
                  mahakasika iza avy ny solon-tena mpanjakana avy any Tana ho
                  tonga mandritra ny Foire mba ahafana mikarakara izy ireo araka
                  ny tokony ho izy. Fa mbola nanohy i Président CCI hoe: Na
                  izany aza dia mbola tsy azo antoka tanteraka ny fahatongavany
                  satria ny programme hoy izy miovaova ka sarom-patarina, ary ny
                  CCI raha teo moa dia sous tutelle de quatre Ministères.
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700 marker:text-blue-600">
                    <li>Ministrin'ny Varotra sy ny Fanjifana</li>
                    <li>133 mpivarotra manerana ny nosy</li>
                  </ul>
                </p>
              </div>

              {/* RIGHT POUR IMAGE DE imageRepresentatif */}
              <div className="relative min-h-[280px]">
                <img
                  src={imageRepresentatif}
                  alt="Image représentative du festival"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                    Fivoriana hanomanana ny FOIRE MEVA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vidéo */}
        <section className="mb-14 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <span className="mb-4 inline-flex w-fit items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-blue-200">
                Vidéo de l’actualité
              </span>
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Aperçu vidéo de la préparation de la FOIRE MEVA
              </h3>
              <p className="mt-4 text-slate-600 leading-7">
                Pour plus de détails, ci-joint la séquence vidéo.
              </p>
            </div>

            <div className="bg-slate-950">
              <video
                className="h-full w-full min-h-[280px] object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src={videoActualite} type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture vidéo.
              </video>
            </div>
          </div>
        </section>

        {/* Titre section */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 sm:text-2xl">
            <span className="h-7 w-1.5 rounded-full bg-blue-600"></span>
            Toutes les actualités
          </h3>
        </div>

        {/* Grille actualités */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {actualites.map(([key, item], index) => (
            <article
              key={key || index}
              className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item}
                  alt={formatTitle(key, index)}
                  className="h-56 w-full object-cover transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-80" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actualites;
