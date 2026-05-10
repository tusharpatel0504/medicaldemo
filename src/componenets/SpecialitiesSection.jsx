import React, { useEffect, useRef, useState } from 'react'

const cards = [
  {
    title: 'Orthopedic/Knee Surgery',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Infertility/IVF',
    image: 'https://images.unsplash.com/photo-1620331311520-246422ff82f9?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Heart Care/Surgery',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Obesity/Bariatric Surgery',
    image: 'https://images.unsplash.com/photo-1512677859289-868722942457?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Cosmetic/Plastic Surgery',
    image: 'https://images.unsplash.com/photo-1512677859289-868722942457?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Dentistry',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Hair Transplantation',
    image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Spine Surgery',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Liver Transplant',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Neurology',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cancer Care',
    image: 'https://images.unsplash.com/photo-1579154234428-4c82802611a1?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'IVF & Fertility',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
  },
]

const fallbackImage = '/doctor-specialty-1.svg'

const SpecialitiesSection = () => {
  const trackRef = useRef(null)
  const [page, setPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth
      setItemsPerPage(width < 640 ? 1 : width < 1280 ? 2 : 4)
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  const pages = Math.max(1, Math.ceil(cards.length / itemsPerPage))

  const scrollToPage = (nextPage) => {
    const track = trackRef.current
    if (!track) return

    const target = Math.max(0, Math.min(nextPage, pages - 1))
    const pageWidth = track.scrollWidth / pages

    track.scrollTo({
      left: pageWidth * target,
      behavior: 'smooth',
    })
    setPage(target)
  }

  useEffect(() => {
    scrollToPage(0)
  }, [itemsPerPage])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const pageWidth = track.scrollWidth / pages
      if (!pageWidth) return
      const nextPage = Math.round(track.scrollLeft / pageWidth)
      setPage(Math.max(0, Math.min(nextPage, pages - 1)))
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => track.removeEventListener('scroll', handleScroll)
  }, [pages])

  const next = () => scrollToPage(page + 1)
  const prev = () => scrollToPage(page - 1)

  return (
    <section className="bg-white py-8 md:py-10 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="max-w-3xl pb-8 md:pb-10">
          <h2 className="text-[30px] font-extrabold leading-tight tracking-tight text-slate-950 md:text-[34px] lg:text-[38px]">
            Explore Most Popular <span className="text-[#2bbcd4]">Specialities</span>
          </h2>
          <p className="mt-2 text-[17px] leading-7 text-slate-600">
            Discover the top medical treatments across the globe.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous specialties"
            className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-[58%] items-center justify-center rounded-full border border-slate-100 bg-white text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition hover:bg-slate-50 md:h-14 md:w-14"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={trackRef}
            className="overflow-x-auto scroll-smooth px-8 md:px-10"
            style={{ scrollbarWidth: 'none' }}
          >
            <div
              className="grid gap-5"
              style={{
                gridTemplateColumns: `repeat(${cards.length}, minmax(260px, 1fr))`,
                width: 'max-content',
              }}
            >
              {cards.map((card) => (
                <article
                  key={card.title}
                  className="group relative h-[280px] w-[260px] overflow-hidden rounded-[12px] bg-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    onError={(event) => {
                      const imageElement = event.currentTarget
                      if (imageElement.dataset.fallbackApplied === 'true') return
                      imageElement.dataset.fallbackApplied = 'true'
                      imageElement.src = fallbackImage
                    }}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/18 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="text-[16px] font-semibold leading-snug text-white md:text-[17px] lg:text-[18px]">
                      {card.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next specialties"
            className="absolute right-0 top-1/2 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-[58%] items-center justify-center rounded-full border border-slate-100 bg-white text-slate-700 shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition hover:bg-slate-50 md:h-14 md:w-14"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2.5">
          {Array.from({ length: pages }).map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => scrollToPage(index)}
              aria-label={`Go to specialties page ${index + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === page ? 'bg-[#2bbcd4]' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialitiesSection
