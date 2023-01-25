import Hotel from './hotel';
import Hotels from './hotels';
import Place from './place';
import Restaurent from './restaurent';

export default function Home() {
  return (
    <main className="flex flex-col h-screen overflow-y-auto gap-1 mx-2">
      <Hotel />
      <div className="my-3 w-3/4 h-[3px] rounded-full bg-gradient-to-r from-gray-400 to-orange-300 mx-auto"></div>
      <Place />
      <div className="my-3 w-3/4 h-[3px] rounded-full bg-gradient-to-r from-gray-400 to-orange-300 mx-auto"></div>
      <Restaurent />
      <div className="my-3 w-3/4 h-[3px] rounded-full bg-gradient-to-r from-gray-400 to-orange-300 mx-auto"></div>
      <Hotels />
    </main>
  );
}
