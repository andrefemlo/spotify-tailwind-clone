import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Airplay, Mic2 as Mic, ListMusic, PictureInPicture, Volume2 } from "lucide-react";
import Image from 'next/image';

export function LatestPlayed() {
    return(
        <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="bg-white/5 rounded hover:bg-white/10 transition-colors group">
          <a href="" className="flex font-semibold items-center gap-4">
          <Image className="rounded-l" width={72} height={72} src="/assets/album-images/verde-que-te-quero-rosa.jpeg" alt="Capa do album Verde Que Te Quero Rosa, do artista Cartola." />
          Verde Que Te Quero Rosa
          <button className="w-10 h-10 pl-1 flex justify-center items-center rounded-full bg-green-400 text-black/90 ml-auto mr-4 invisible group-hover:visible hover:scale-110 duration-100">
            <Play strokeWidth={1.25} className="fill-black"/>
          </button>
          </a>
        </div>
        <div className="bg-white/5 rounded hover:bg-white/10 transition-colors group">
          <a href="" className="flex font-semibold items-center gap-4">
          <Image className="rounded-l" width={72} height={72} src="/assets/album-images/o-grande-circo-mistico.jpeg" alt="Capa do album O Grande Circo Místico, de Vários Interpetres." />
          O Grande Circo Místico
          <button className="w-10 h-10 pl-1 flex justify-center items-center rounded-full bg-green-400 text-black/90 ml-auto mr-4 invisible group-hover:visible hover:scale-110 duration-100">
            <Play strokeWidth={1.25} className="fill-black"/>
          </button>
          </a>
        </div>
        <div className="bg-white/5 rounded hover:bg-white/10 transition-colors group">
          <a href="" className="flex font-semibold items-center gap-4">
          <Image className="rounded-l" width={72} height={72} src="/assets/album-images/colecao-mpb.jpeg" alt="Coletânea de diversas músicas que fizeram sucesso no popular brasileiro." />
          Coleção MPB
          <button className="w-10 h-10 pl-1 flex justify-center items-center rounded-full bg-green-400 text-black/90 ml-auto mr-4 invisible group-hover:visible hover:scale-110 duration-100">
            <Play strokeWidth={1.25} className="fill-black"/>
          </button>
          </a>
        </div>
        <div className="bg-white/5 rounded hover:bg-white/10 transition-colors group">
          <a href="" className="flex font-semibold items-center gap-4">
          <Image className="rounded-l" width={72} height={72} src="/assets/album-images/america-brasil.jpeg" alt="Capa do album América Brasil, do artista Seu Jorge." />
          América Brasil
          <button className="w-10 h-10 pl-1 flex justify-center items-center rounded-full bg-green-400 text-black/90 ml-auto mr-4 invisible group-hover:visible hover:scale-110 duration-100">
            <Play strokeWidth={1.25} className="fill-black"/>
          </button>
          </a>
        </div>
        <div className="bg-white/5 rounded hover:bg-white/10 transition-colors group">
          <a href="" className="flex font-semibold items-center gap-4">
          <Image className="rounded-l" width={72} height={72} src="/assets/album-images/in-tokyo.jpeg" alt="Capa do album In Tokyo, do artista João Gilberto" />
          In Tokyo
          <button className="w-10 h-10 pl-1 flex justify-center items-center rounded-full bg-green-400 text-black/90 ml-auto mr-4 invisible group-hover:visible hover:scale-110 duration-100">
            <Play strokeWidth={1.25} className="fill-black"/>
          </button>
          </a>
        </div>
        <div className="bg-white/5 rounded hover:bg-white/10 transition-colors group">
          <a href="" className="flex font-semibold items-center gap-4">
          <Image className="rounded-l" width={72} height={72} src="/assets/album-images/essa-e-a-sua-vida.jpeg" alt="Capa do album Essa é a Sua Vida, do artista João Bosco" />
          Essa é a Sua Vida
          <button className="w-10 h-10 pl-1 flex justify-center items-center rounded-full bg-green-400 text-black/90 ml-auto mr-4 invisible group-hover:visible hover:scale-110 duration-100">
            <Play strokeWidth={1.25} className="fill-black"/>
          </button>
          </a>
        </div>
      </div>
    )
    
}

