import Image from 'next/image';

interface SessionTitle{
    titlesession: string;
}

export function Sugestions(props: SessionTitle) {
    return(  
            <><div className="mt-8 flex">
            <h1 className="font-bold text-2xl cursor-pointer"><a className="hover:underline ">{props.titlesession}</a></h1>
            <button type="button" className="ml-auto font-normal text-zinc-300 border-zinc-500 py-1 px-6 rounded-full border p-2 hover:bg-zinc-400 hover:text-zinc-800 transition-colors"> Mostrar tudo</button>
        </div><div className="grid grid-cols-6 gap-3 items-center mt-4">
                <div className="bg-white/5 hover:bg-white/10 rounded flex flex-col p-3">
                    <a className="text-md font-normal">
                        <Image className="rounded self-center mb-2 w-full" width={300} height={300} src="/assets/album-images/colecao-mpb.jpeg" alt="Capa do album" />
                        Coleção MPB
                        <p className="text-sm text-zinc-400 font-normal">Canções que ajudaram a...</p>
                    </a>
                </div>
                <div className="bg-white/5 hover:bg-white/10 rounded flex flex-col p-3">
                    <a className="text-md font-normal">
                        <Image className="rounded self-center mb-2 w-full" width={300} height={300} src="/assets/album-images/o-grande-circo-mistico.jpeg" alt="Capa do album" />
                        O Grande Circo Místico
                        <p className="text-sm text-zinc-400 font-normal">Vários Intérpretes</p>
                    </a>
                </div>
                <div className="bg-white/5 hover:bg-white/10 rounded flex flex-col p-3">
                    <a className="text-md font-normal">
                        <Image className="rounded self-center mb-2 w-full" width={300} height={300} src="/assets/album-images/america-brasil.jpeg" alt="Capa do album" />
                        América Brasil
                        <p className="text-sm text-zinc-400 font-normal">Seu Jorge</p>
                    </a>
                </div>
                <div className="bg-white/5 hover:bg-white/10 rounded flex flex-col p-3">
                    <a className="text-md font-normal">
                        <Image className="rounded self-center mb-2 w-full" width={300} height={300} src="/assets/album-images/in-tokyo.jpeg" alt="Capa do album" />
                        In Tokyo
                        <p className="text-sm text-zinc-400 font-normal">João Gilberto</p>
                    </a>
                </div>
                <div className="bg-white/5 hover:bg-white/10 rounded flex flex-col p-3">
                    <a className="text-md font-normal">
                        <Image className="rounded self-center mb-2 w-full" width={300} height={300} src="/assets/album-images/verde-que-te-quero-rosa.jpeg" alt="Capa do album" />
                        Verde Que Te Quero...
                        <p className="text-sm text-zinc-400 font-normal">Cartola</p>
                    </a>
                </div>
                <div className="bg-white/5 hover:bg-white/10 rounded flex flex-col p-3">
                    <a className="text-md font-normal">
                        <Image className="rounded self-center mb-2 w-full" width={300} height={300} src="/assets/album-images/essa-e-a-sua-vida.jpeg" alt="Capa do album" />
                        Essa é a Sua Vida
                        <p className="text-sm text-zinc-400 font-normal">João Bosco</p>
                    </a>
                </div>
            </div></>
    )
}