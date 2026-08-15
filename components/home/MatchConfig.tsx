export default function MatchConfig() {
  return (
    <section className="w-full flex-1 max-w-md bg-[#120a1c]/60 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
      <h3 className="text-xs font-bold tracking-widest text-gray-400 mb-6 uppercase">
        Match Configuration
      </h3>

      <div className="space-y-4 text-sm font-semibold tracking-wider">
        {/* Total Time */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <span className="text-gray-300">Total Time</span>
          <span className="text-pink-500 font-mono text-base font-bold">
            30:00
          </span>
        </div>

        {/* Fair Mode */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <span className="text-gray-300">Fair Mode</span>
          <span className="text-white">No</span>
        </div>

        {/* Devices Connected */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <span className="text-gray-300">Devices Connected</span>
          <span className="text-white">1</span>
        </div>

        {/* Player 1 Color */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <span className="text-gray-300">Player 1 Color</span>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span>RED</span>
          </div>
        </div>

        {/* Player 2 Color */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Player 2 Color</span>
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span>PURPLE</span>
          </div>
        </div>
      </div>
    </section>
  );
}