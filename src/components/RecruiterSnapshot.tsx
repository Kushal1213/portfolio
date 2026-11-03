import { ArrowUpRight, DownloadSimple, EnvelopeSimple } from '@phosphor-icons/react/dist/ssr'
import { SITE } from '@/data/portfolio'

const signals = [
  { value: 'Data · Backend · AI', label: 'Best-fit roles' },
  { value: '3 merged PRs', label: 'AMD Lemonade SDK' },
  { value: '500K+ records', label: 'Largest ML pipeline' },
  { value: '2026 graduate', label: 'B.Tech CSE · VIT Chennai' },
] as const

export default function RecruiterSnapshot() {
  return (
    <section aria-labelledby="recruiter-snapshot-title" className="border-y site-rule">
      <div className="container-main grid lg:grid-cols-[0.72fr_1.28fr]">
        <div className="flex flex-col justify-between border-b py-9 site-rule lg:border-b-0 lg:border-r lg:py-12 lg:pr-10">
          <div>
            <p className="text-sm font-semibold site-accent">Recruiter snapshot</p>
            <h2 id="recruiter-snapshot-title" className="mt-3 max-w-md text-3xl font-extrabold leading-[0.98] tracking-[-0.055em] text-balance sm:text-4xl">
              The useful version in 30 seconds.
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={SITE.resumeUrl} download className="site-button-primary">
              <DownloadSimple size={17} weight="bold" aria-hidden="true" />
              Download résumé
            </a>
            <a href={`mailto:${SITE.email}`} className="site-link inline-flex items-center gap-2 text-sm font-bold">
              <EnvelopeSimple size={17} weight="bold" aria-hidden="true" />
              Email directly
              <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <dl className="grid sm:grid-cols-2">
          {signals.map((signal, index) => (
            <div
              key={signal.label}
              className={`min-h-36 px-0 py-8 sm:px-8 lg:min-h-44 lg:px-10 lg:py-10 ${index % 2 === 0 ? 'sm:border-r site-rule' : ''} ${index >= 2 ? 'border-t site-rule' : index === 1 ? 'border-t site-rule sm:border-t-0' : ''}`}
            >
              <dd className="text-2xl font-extrabold tracking-[-0.045em] text-balance sm:text-3xl">{signal.value}</dd>
              <dt className="mt-3 text-sm leading-6 site-muted">{signal.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
