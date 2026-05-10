// import React from 'react';

// const Experiences = () => {
//   const continents = [
//     { name: 'Asia', size: 'large', img: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?auto=format&fit=crop&w=1600&q=80' },
//     { name: 'Europe', size: 'small', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=400' },
//     { name: 'Australia & NZ', size: 'small', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=400' },
//     { name: 'North America', size: 'small', img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=400' },
//     { name: 'Africa', size: 'small', img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=400' },
//     { name: 'South America', size: 'small', img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=400' },
//   ];

//   const countries = [
//     'World',
//     'Egypt',
//     'India',
//     'Malaysia',
//     'Mexico',
//     'South Korea',
//     'Thailand',
//     'Turkey',
//     'Brazil',
//     'Canada',
//     'Spain',
//     'United Kingdom',
//     'United States',
//   ];

//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-900">

//       {/* Hero Header */}
//       <section className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden">
//         <img 
//           src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600" 
//           className="absolute inset-0 w-full h-full object-cover brightness-50"
//           alt="Travel Hero"
//         />
//         <div className="relative z-10 px-4">
//           <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
//             Save 70% On Your Surgery
//           </h1>
//           <p className="text-white text-lg md:text-xl font-light tracking-wide">
//             With An All Expense Paid Travel Experience
//           </p>
//         </div>
//       </section>

//       {/* Top Experiences Grid */}
//       <section className="max-w-7xl mx-auto py-16 px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
//           {/* Main Large Card */}
//           <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
//             <img src={continents[0].img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Asia" />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
//               <h3 className="text-white text-3xl font-bold uppercase tracking-[0.2em]">{continents[0].name}</h3>
//             </div>
//           </div>

//           {/* Smaller Cards */}
//           {continents.slice(1).map((item, idx) => (
//             <div key={idx} className="relative group overflow-hidden rounded-xl">
//               <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.name} />
//               <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center p-2">
//                 <h3 className="text-white text-sm font-bold uppercase tracking-wider leading-tight">{item.name}</h3>
//               </div>
//             </div>
//           ))}

//           {/* Title Card */}
//           <div className="flex flex-col justify-center items-start p-4">
//             <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-cyan-500 pl-4">Top Experiences</h2>
//           </div>
//         </div>
//       </section>

//       {/* Filter Tabs */}
//       <section className="max-w-7xl mx-auto px-8 mb-12">
//         <div className="flex flex-wrap gap-2 items-center border-t border-slate-100 pt-10">
//           {countries.map((country, idx) => (
//             <button 
//               key={idx}
//               className={`px-5 py-2 rounded-md text-xs font-bold tracking-widest uppercase border transition-all ${
//                 country === "World" 
//                 ? "bg-slate-900 text-white border-slate-900" 
//                 : "bg-white text-slate-500 border-slate-200 hover:border-slate-900 hover:text-slate-900"
//               }`}
//             >
//               {country}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Packages Section */}
//       <section className="max-w-7xl mx-auto px-8 pb-24">
//         <div className="mb-10">
//           <h2 className="text-2xl font-bold text-slate-900">Available Packages</h2>
//           <div className="h-1 w-20 bg-cyan-500 mt-2"></div>
//         </div>

//         {/** Package list data */}
//         <div className="grid gap-6 md:grid-cols-3">
//           {[
//             {
//               title: 'Red Sea Dive Discovery – 3-Day PADI Scuba Diver Course',
//               location: 'Hurghada, Egypt',
//               image: 'https://images.unsplash.com/photo-1544551763-47a01596a20d?auto=format&fit=crop&q=80&w=800',
//               description:
//                 'Plunge into the crystal-clear waters of the Red Sea with this 3-day PADI Scuba Diver certification course. Ideal for beginners, this adventure blends technical diving skills with exhilarating open water experiences.',
//               tags: ['PADI Theory', 'Water Skill Practice', '2 Open Water Dives'],
//             },
//             {
//               title: 'Wellness & Recovery Retreat – 7 Days',
//               location: 'Kerala, India',
//               image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
//               description:
//                 'A restorative week focused on post-treatment recovery with guided therapies, nutritious meal plans, and gentle activities to support healing and wellbeing.',
//               tags: ['Post-op Care', 'Ayurvedic Therapy', 'Guided Meditation'],
//             },
//             {
//               title: 'City Recovery & Sightseeing – 5 Days',
//               location: 'Istanbul, Turkey',
//               image: 'https://images.unsplash.com/photo-1505765054886-0b4e7f7b5f7f?auto=format&fit=crop&q=80&w=800',
//               description:
//                 'Combine medical recovery with city exploration. This package includes comfortable recovery accommodations and curated sightseeing tours tailored to your energy levels.',
//               tags: ['Comfort Stay', 'Easy Sightseeing', 'Private Transfers'],
//             },
//           ].map((pkg, i) => (
//             <article key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
//               <div className="h-44 overflow-hidden rounded-t-xl">
//                 <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{pkg.location}</span>
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-800 mb-3">{pkg.title}</h3>
//                 <p className="text-slate-500 text-sm leading-relaxed mb-4">{pkg.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {pkg.tags.map((tag, idx) => (
//                     <span key={idx} className="bg-slate-50 text-slate-400 text-[10px] px-3 py-1 border border-slate-100 font-bold uppercase tracking-tight">{tag}</span>
//                   ))}
//                 </div>

//                 <div className="flex gap-3">
//                   <button className="flex-1 bg-slate-900 text-white py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors">
//                     Details
//                   </button>
//                   <button className="flex-1 bg-cyan-500 text-white py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-cyan-600 transition-colors">
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Experiences;

import React from 'react';

const Experiences = () => {
  const continents = [
    {
      name: 'Asia',
      size: 'large',
      img: 'https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=1200&q=80',
    },
    {
      name: 'Europe',
      size: 'small',
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Australia & NZ',
      size: 'small',
      img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'North America',
      size: 'small',
      img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Africa',
      size: 'small',
      img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'South America',
      size: 'small',
      img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const countries = [
    'World',
    'Egypt',
    'India',
    'Malaysia',
    'Mexico',
    'South Korea',
    'Thailand',
    'Turkey',
    'Brazil',
    'Canada',
    'Spain',
    'United Kingdom',
    'United States',
  ];

  const packages = [
    {
      title: 'Red Sea Dive Discovery – 3-Day PADI Scuba Diver Course',
      location: 'Hurghada, Egypt',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', 
        description:
        'Plunge into the crystal-clear waters of the Red Sea with this 3-day PADI Scuba Diver certification course.',
      tags: ['PADI Theory', 'Water Skill Practice', '2 Open Water Dives'],
    },
    {
      title: 'Wellness & Recovery Retreat – 7 Days',
      location: 'Kerala, India',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      description:
        'A restorative week focused on post-treatment recovery with guided therapies and wellness programs.',
      tags: ['Post-op Care', 'Ayurvedic Therapy', 'Meditation'],
    },
    {
      title: 'City Recovery & Sightseeing – 5 Days',
      location: 'Istanbul, Turkey',
      image:
        'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80',
      description:
        'Combine medical recovery with curated sightseeing tours and premium accommodations.',
      tags: ['Comfort Stay', 'Easy Sightseeing', 'Private Transfers'],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pt-24 md:pt-28">
      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[32px] min-h-[360px] md:min-h-[440px] shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=80"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Travel Hero"
          />
          <div className="absolute inset-0 bg-slate-950/35" />

          <div className="relative z-10 flex min-h-[360px] md:min-h-[440px] items-start px-6 py-8 md:px-10 md:py-12">
            <div className="max-w-2xl text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">
                Medical Travel Experiences
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Save 70% on your surgery journey.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/90 md:text-base">
                With all-expense travel support, recovery-friendly stays, and curated treatment destinations.
              </p>

              <div className="mt-6 max-w-md rounded-full bg-white px-4 py-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search destination"
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP EXPERIENCES */}
      <section className="max-w-7xl mx-auto py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {/* Large Asia Card */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
            <img
              src={continents[0].img}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Asia"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold uppercase tracking-[0.2em]">
                {continents[0].name}
              </h3>
            </div>
          </div>

          {/* Small Cards */}
          {continents.slice(1).map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={item.name}
              />

              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center p-2">
                <h3 className="text-white text-sm font-bold uppercase tracking-wider leading-tight">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}

          {/* Title Card */}
          <div className="flex flex-col justify-center items-start p-4">
            <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-cyan-500 pl-4">
              Top Experiences
            </h2>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex flex-wrap gap-2 items-center border-t border-slate-100 pt-10">
          {countries.map((country, idx) => (
            <button
              key={idx}
              className={`px-5 py-2 rounded-md text-xs font-bold tracking-widest uppercase border transition-all ${country === 'World'
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-900 hover:text-slate-900'
                }`}
            >
              {country}
            </button>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto px-8 pb-24">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900">
            Available Packages
          </h2>

          <div className="h-1 w-20 bg-cyan-500 mt-2"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <article
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {pkg.location}
                </span>

                <h3 className="text-lg font-bold text-slate-800 mt-3 mb-3">
                  {pkg.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {pkg.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-50 text-slate-400 text-[10px] px-3 py-1 border border-slate-100 font-bold uppercase tracking-tight"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-slate-900 text-white py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors">
                    Details
                  </button>

                  <button className="flex-1 bg-cyan-500 text-white py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-cyan-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experiences;