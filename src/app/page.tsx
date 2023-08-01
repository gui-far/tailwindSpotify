import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='flex flex-col gap-3 mt-6 pt-10 border-t border-zinc-800'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Rock</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Classica</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Nacional</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Flashback</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Romantica</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist Sertanejo</a>

          </nav>

        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='bg-black/40 rounded-full p-1'>
              <ChevronLeft />
            </button>

            <button className='bg-black/40 rounded-full p-1'>
              <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'> Good Afernoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} className="" src="/RHCP.jpg" alt="RHCP" />
              <strong>Red Hot Chili Peppers</strong>
              <button className='group-hover:visible invisible w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} className="" src="/RHCP.jpg" alt="RHCP" />
              <strong>Red Hot Chili Peppers</strong>
              <button className='group-hover:visible invisible w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} className="" src="/RHCP.jpg" alt="RHCP" />
              <strong>Red Hot Chili Peppers</strong>
              <button className='group-hover:visible invisible w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} className="" src="/RHCP.jpg" alt="RHCP" />
              <strong>Red Hot Chili Peppers</strong>
              <button className='group-hover:visible invisible w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} className="" src="/RHCP.jpg" alt="RHCP" />
              <strong>Red Hot Chili Peppers</strong>
              <button className='group-hover:visible invisible w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} className="" src="/RHCP.jpg" alt="RHCP" />
              <strong>Red Hot Chili Peppers</strong>
              <button className='group-hover:visible invisible w-12 h-12 flex items-center justify-center rounded-full pl-1 bg-green-400 text-black ml-auto mr-8'>
                <Play />
              </button>
            </a>

          </div>

          <h2 className='font-semibold text-2xl mt-10'> Good Afernoon</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image width={120} height={120} className="w-full" src="/RHCP.jpg" alt="RHCP" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image width={120} height={120} className="w-full" src="/RHCP.jpg" alt="RHCP" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image width={120} height={120} className="w-full" src="/RHCP.jpg" alt="RHCP" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image width={120} height={120} className="w-full" src="/RHCP.jpg" alt="RHCP" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image width={120} height={120} className="w-full" src="/RHCP.jpg" alt="RHCP" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>

          </div>

        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-600 px-6 py-4 flex justify-between">
        <div className='flex items-center gap-2'>
          <Image width={56} height={56} className="" src="/RHCP.jpg" alt="RHCP" />
          <div className='flex flex-col'>
            <strong className='font-normal'>Californication</strong>
            <span className='text-xs text-zinc-400'>Red Hot Chili Peppers</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='h-1 w-40 bg-zinc-200 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:41</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='h-1 w-18 bg-zinc-200 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  )
}


/*

text-xs: tamanho do texto
font-semibold: font weight

h-screen: faz a div ocupar a tela toda
w-64: faz a width ficar com 256px, pois no tailwind os dados são multiplos de 4

flex: faz a div ficar flex
flex-1: faz a div ocupar o espaço baseado no espaço livre da tela
flex-col: muda o direction para column

Background: bg-zinc-950

FontColor: text-zinc-50

border-t: faz bordar top
border-zinc-600: faz a cor da borda

px-6: padding no eixo x
py-6: padding no eixo x
p-6: padding no x e y

items-center: faz o align-center
gap-2: faz gap

mt-10: margin top
pt-10: padding

overflow-hidden: hidden do overflow da div
ml-auto joga o objeto para direita

!!!!!!!!!!!!!!
space-y-4: permite fazer o gap na horizontal sem flex e margin bottom ou top
rounded-full deixa todos os cantos arrendodados perfeitos para uma bolinha, desde que altura e largura sejam iguais
pode ser trocada por sm
grid: transforma em "grid"
grid-cols: faz com que as divs sejam separadas em grupos de 3
Se eu adicionar cols = 3 e adicionar 6 divis então a tela tera duas linhas com 3 divs
*/