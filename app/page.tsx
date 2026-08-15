export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#0e0716] via-[#160b24] to-[#07030b] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Vänster sektion: Rubrik & Startknapp */}
        <section className="flex flex-col items-center justify-center flex-1 space-y-8 relative">
          {/* HELP COMPONENT HERE */}
          <div className="absolute -top-12 left-0">
            {/* <HelpButton /> */}
            ?
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider">
              ONE PIECE
            </h1>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider">
              TIMER
            </h1>
            <p className="text-xs tracking-widest text-gray-400 mt-2">
              BY MAJA
            </p>
          </div>

          {/* START BUTTON COMPONENT HERE */}
          <button className="w-full max-w-xs py-4 rounded-2xl bg-gradient-to-r from-[#ff2a6d] to-[#9b00e8] text-white font-bold tracking-wider shadow-lg shadow-pink-500/20 hover:opacity-90 transition-all">
            START MATCH
          </button>
        </section>

        {/* Höger sektion: Match Configuration Card */}
        <section className="w-full flex-1 max-w-md bg-[#120a1c]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* MATCH CONFIG COMPONENT HERE */}
        </section>

      </div>
    </main>
  );
}