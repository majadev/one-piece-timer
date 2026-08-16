import MatchConfig from "@/components/home/MatchConfig.tsx";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-linear-to-br from-[#0e0716] via-[#160b24] to-[#07030b] text-white flex flex-col justify-center items-center p-6">
      {/* Ta bort items-center och sätt items-stretch så barnen får samma höjd */}
      <div className="parent w-full max-w-5xl flex flex-col md:flex-row items-stretch justify-between gap-12">

        <section className="child flex flex-col justify-between flex-1 space-y-8 relative">
          {/* HELP COMPONENT HERE */}
          <div>
            ?
          </div>

          <div className="text-left space-y-2">
            <h1 className="text-xl md:text-4xl font-extrabold tracking-wider">
              ONE PIECE
            </h1>
            <h1 className="text-xl md:text-4xl font-extrabold tracking-wider">
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

        {/* Match Configuration Card */}
        <MatchConfig />

      </div>
    </main>
  );
}