import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Airplay, Mic2 as Mic, ListMusic, PictureInPicture, Volume2 } from "lucide-react";

export function Footer() {
    return(
        <footer className="flex items-center justify-between bg-zinc-800 border-t border-zinc-700 p-4 sticky bottom-0 left-0">
        {/* Player */}
        <div className="flex items-center gap-2">
          <Image width={64} height={64} src="/assets/album-images/verde-que-te-quero-rosa.jpeg" alt="Capa do album" />
          <div className="flex flex-col">
            <strong className="font-normal">Tempos Idos</strong>
            <span className="text-sm text-zinc-400">Cartola</span>
          </div>
        </div>
        {/* Controls */}
        <div className="flex flex-col items-center gap-2">
          {/* Buttons */}
          <div className="flex items-center gap-6 text-zinc-400">
            <Shuffle size={20} className="cursor-pointer hover:text-zinc-50" />
            <SkipBack size={20} className="cursor-pointer hover:text-zinc-50" />
            <button className="w-8 h-8 pl-1 flex justify-center items-center rounded-full bg-zinc-100 text-black/90 hover:scale-105 duration-100">
              <Play fill="#000" size={20} className="cursor-pointer" />
            </button>
            <SkipForward size={20} className="cursor-pointer hover:text-zinc-50" />
            <Repeat size={20} className="cursor-pointer hover:text-zinc-50" />
          
          {/* Progress Bar */}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-zinc-500">0:31</span>
            <div className=" h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 h-1 rounded-full w-16"></div>
            </div>
            <span className="text-sm text-zinc-300">3:32</span>
          </div>
        </div>

        {/* Options Buttons */}
        <div className="flex items-center gap-3 text-zinc-500">
          <Airplay size={18} className="cursor-pointer hover:text-zinc-50"/>
          <Mic size={18} className="cursor-pointer hover:text-zinc-50"/>
          <ListMusic size={18} className="cursor-pointer hover:text-zinc-50"/>
          <PictureInPicture size={18} className="cursor-pointer hover:text-zinc-50"/>

          {/* Volume Bar */}
          <div className="group flex items-center cursor-pointer">

          <Volume2 size={18} className="mr-3 group-hover:text-zinc-50"/>
            <div className=" h-1 rounded-full w-24 bg-zinc-600 flex items-center cursor-pointer">
              <div className="bg-zinc-200 h-1 rounded-full w-12 group-hover:bg-green-500"></div>
              <div className="bg-white w-3 h-3 rounded-full invisible group-hover:visible -ml-2"></div>
            </div>
          </div>  
        </div>
      </footer>
    )
    
}