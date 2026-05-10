import React from 'react'

const highlights = [
  {
    title: 'Speciality Hospitals',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Specialized Surgeons',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Popular Specialities',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Advanced Diagnostics',
    image:
      'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1200&q=80',
  },
]

const destinations = [
  {
    name: 'Korea',
    image:
      'https://images.unsplash.com/photo-1538485399081-7c8974d7d6d6?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'India',
    image:
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Turkey',
    image:
      'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80',
  },
]

const GlobalHealthcareSection = () => {
  return (
    <section className="bg-white py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mb-5 max-w-4xl">
          <h2 className="text-[26px] font-extrabold leading-tight tracking-tight text-slate-950 md:text-[32px] lg:text-[36px]">
            The <span className="text-[#2bbcd4]">Best of Global Healthcare</span> at Your Fingertips
          </h2>
          <p className="mt-2 text-[14px] leading-6 text-slate-600 md:text-[15px]">
            Explore top doctors, world-renowned hospitals, and cutting-edge specialties. All handpicked.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group relative h-[236px] overflow-hidden rounded-[10px] bg-slate-100 shadow-[0_10px_28px_rgba(15,23,42,0.08)] md:h-[252px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                <h3 className="text-[14px] font-semibold leading-tight text-white md:text-[15px]">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-[12px] bg-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.18)]">
          <div className="relative min-h-[330px] md:min-h-[390px]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
                alt="Global medical travel destinations"
                className="h-full w-full object-cover object-center opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
            </div>

            <div className="relative z-10 flex min-h-[330px] flex-col justify-between p-5 md:min-h-[390px] md:p-6 lg:flex-row lg:items-end lg:gap-6">
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
                  Luxora
                </p>
                <h3 className="mt-2 text-[34px] font-black leading-[0.9] text-white md:text-[48px] lg:text-[58px]">
                  Top
                  <span className="block text-[42px] md:text-[58px] lg:text-[72px]">
                    Destinations
                  </span>
                </h3>
                <p className="mt-4 max-w-md text-[13px] leading-6 text-white/90 md:text-[14px]">
                  Explore the best medical tourism globally.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 self-start lg:self-end">
                {destinations.map((destination) => (
                  <div
                    key={destination.name}
                    className="relative h-[156px] w-[94px] overflow-hidden rounded-[12px] bg-white/10 shadow-[0_10px_24px_rgba(15,23,42,0.18)] md:h-[184px] md:w-[112px]"
                  >
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/55 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-2 pb-2">
                      <span className="text-[11px] font-semibold text-white">{destination.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <button className="rounded-full bg-[#2bbcd4] px-7 py-3 text-[13px] font-semibold text-white transition hover:bg-[#23acc3]">
            Plan Your Medical Travel
          </button>
        </div>
      </div>
    </section>
  )
}

export default GlobalHealthcareSection
