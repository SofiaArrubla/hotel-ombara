import { PrismaClient } from "@prisma/client";
import BookingModal from "./BookingModal";

const prisma = new PrismaClient();

export default async function Rooms() {
  const rooms = await prisma.room.findMany();

  return (
    <section id="rooms" className="rooms section-padding py-16 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-amber-500 uppercase tracking-widest text-sm">Sanctuaries</span>
          <h2 className="text-3xl font-serif mt-2">Exquisite Accommodations</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900">
              <img src={room.imageUrl} alt={room.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <span className="text-amber-400 font-bold">${room.pricePerNight.toLocaleString()} COP / noche</span>
                </div>
                <p className="text-zinc-400 text-sm mb-4">{room.description}</p>
                <span className="text-xs text-zinc-500 block mb-4">Capacidad: {room.capacity} huéspedes</span>
                <BookingModal room={room} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}