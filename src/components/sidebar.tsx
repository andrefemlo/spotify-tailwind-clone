import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Airplay, Mic2 as Mic, ListMusic, PictureInPicture, Volume2 } from "lucide-react";

export function Sidebar() {
    return (        
<aside className="w-64 p-6">
    <div className="fixed w-56">
        <div className="flex items-center gap-2 mb-8">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        
        </div>
        <nav className="space-y-6">
        <a href="#" className="flex items-center gap-4 text-sm font-semibold text-zinc-200"><HomeIcon />Home</a>
        <a href="#" className="flex items-center gap-4 text-sm font-semibold text-zinc-200"><Search />Search</a>
        <a href="#" className="flex items-center gap-4 text-sm font-semibold text-zinc-200"><Library/> Your Libary</a>
        </nav>
        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col text-base text-zinc-400 gap-2 relative" style={{ maxHeight: 'calc(100vh - 320px)', overflowY: 'auto'}}>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Leandro & Leonardo</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Só pra Contrariar</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Quatro Estações</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Um Sonhador</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Mamonas Assassinas</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Tribalistas</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Terra Samba ao Vivo</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Coleção MPB</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Tribalistas</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Esse Cara Sou Eu</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">As Quatro Estações</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Mix anos 90</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">O Grande Circo Místico</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Exaltasamba</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Leandro & Leonardo</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Só pra Contrariar</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Quatro Estações</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Um Sonhador</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Mamonas Assassinas</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Tribalistas</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Terra Samba ao Vivo</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Coleção MPB</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Tribalistas</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Esse Cara Sou Eu</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">As Quatro Estações</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Mix anos 90</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">O Grande Circo Místico</a>
        <a href="#" className="hover:text-zinc-200 hover: ease-in-out duration-200">Exaltasamba</a>
        </nav>
    </div>
  </aside>
  )
}
