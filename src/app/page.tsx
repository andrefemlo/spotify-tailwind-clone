import { Footer } from '@/components/footer';
import { Sidebar } from '@/components/sidebar';
import { LatestPlayed } from '@/components/latest-played';
import { Sugestions } from '@/components/sugestions';
import { TopControls } from '@/components/topcontrols';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6 bg-zinc-900">
          <TopControls />
          
          <h1 className="font-bold text-3xl mt-4">Good Afternoon!</h1>

          <LatestPlayed />

          <Sugestions titlesession="Baseados em músicas curtidas"/>
          <Sugestions titlesession="Lorem Ipsum"/>
          
        </main>
      </div>
    <Footer />
    </div>
  )
}
