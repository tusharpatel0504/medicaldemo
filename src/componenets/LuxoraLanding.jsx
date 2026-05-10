import React from 'react';

const LuxoraLanding = () => {
  const destinations = [
    { name: 'India', flag: 'https://flagcdn.com/w80/in.png' },
    { name: 'UK', flag: 'https://flagcdn.com/w80/gb.png' },
    { name: 'Mexico', flag: 'https://flagcdn.com/w80/mx.png' },
    { name: 'Turkey', flag: 'https://flagcdn.com/w80/tr.png' },
    { name: 'South Korea', flag: 'https://flagcdn.com/w80/kr.png' },
    { name: 'Thailand', flag: 'https://flagcdn.com/w80/th.png' },
    { name: 'Egypt', flag: 'https://flagcdn.com/w80/eg.png' },
    { name: 'USA', flag: 'https://flagcdn.com/w80/us.png' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-cyan-50 to-transparent pt-16 pb-0 px-8 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="md:w-1/2 z-10 mb-12 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Luxora Services Are <span className="text-cyan-500">Absolutely Free.</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8 max-w-md">
              You pay same rates for treatments as in the hospital's original price list.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg shadow-cyan-200">
              Find A Solution
            </button>
          </div>

          {/* Right Image Content */}
          <div className="md:w-1/2 relative flex justify-end items-end">
            {/* Background Blob Shape */}
            <div className="absolute bottom-0 right-0 w-[120%] h-[80%] bg-cyan-100 rounded-tl-[100px] -z-10 opacity-60"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
              alt="Healthcare Professional" 
              className="relative z-10 w-full max-w-md object-cover"
            />

            {/* Floating Consultation Card */}
            <div className="absolute bottom-10 left-0 md:-left-20 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-50">
              <div className="bg-cyan-500 p-3 rounded-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold">Get Free Consultation</p>
                <p className="text-xs text-cyan-500 cursor-pointer hover:underline">Schedule now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Luxora's Featured <span className="text-cyan-500">Destinations</span>
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 items-center">
            {destinations.map((dest, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 mb-3 rounded-full overflow-hidden shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <img 
                    src={dest.flag} 
                    alt={dest.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-slate-500 group-hover:text-cyan-600">
                  {dest.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LuxoraLanding;