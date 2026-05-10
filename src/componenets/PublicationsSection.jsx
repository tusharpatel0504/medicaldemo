import React from 'react'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const articles = [
  {
    date: 'Jun 30, 2025',
    title: 'Luxora Experiences enters market to transform medical tourism',
    source: 'Bio Spectrum India',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    date: 'Jun 27, 2025',
    title: 'Luxora Experiences launches to tap into booming medical travel',
    source: 'Media Brief',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  },
  {
    date: 'Jun 30, 2025',
    title: 'After successful stint in EV startup, founders pivot to health',
    source: 'APN News',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
]

const PublicationsSection = () => {
  return (
    <section className="bg-white py-14 md:py-16 lg:py-18">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-slate-950 md:text-[34px] lg:text-[40px]">
            Featured in <span className="text-[#2bbcd4]">Leading Publications</span>
          </h2>
          <div className="mt-4 flex items-center justify-between gap-4 text-left">
            <p className="max-w-4xl text-[14px] leading-7 text-slate-600 md:text-[16px]">
              Discover how Luxora is making headlines in the world of medical tourism and healthcare innovation
            </p>

            <Link to="/about" className="shrink-0 text-[15px] font-semibold text-[#2bbcd4] underline decoration-2 underline-offset-4">
              View All Articles
            </Link>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous articles"
            className="absolute left-0 top-[44%] z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition hover:bg-slate-50"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            aria-label="Next articles"
            className="absolute right-0 top-[44%] z-10 flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.10)] transition hover:bg-slate-50"
          >
            <ChevronRight size={22} />
          </button>

          <div className="grid gap-5 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
              >
                <p className="mb-3 text-[15px] font-semibold text-slate-500">
                  Published on: <span className="text-slate-700">{article.date}</span>
                </p>

                <div className="overflow-hidden rounded-[14px] bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[198px] w-full object-cover md:h-[210px]"
                  />
                </div>

                <h3 className="mt-4 min-h-[96px] text-[22px] font-extrabold leading-[1.18] tracking-tight text-slate-900 md:text-[24px]">
                  {article.title}
                </h3>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-[15px] font-medium text-slate-500">{article.source}</span>
                  <ExternalLink size={18} className="text-[#2bbcd4]" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-9 flex justify-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#2bbcd4]" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
          <span className="h-3 w-3 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  )
}

export default PublicationsSection