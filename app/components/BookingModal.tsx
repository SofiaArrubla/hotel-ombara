"use client";

import { useState } from "react";
import { createReservation } from "@/app/actions/reservation";

export default function BookingModal({ room }: { room: { id: string; title: string; pricePerNight: number } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setStatus("Procesando reserva...");
    formData.append("roomId", room.id);
    const res = await createReservation(formData);
    
    if (res.success) {
      setStatus(`¡Reserva confirmada! Total a pagar: $${res.totalPrice?.toLocaleString()} COP`);
    } else {
      setStatus(`Error: ${res.error}`);
    }
  }

  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded transition"
      >
        {isOpen ? "Cerrar" : "Reservar Ahora"}
      </button>

      {isOpen && (
        <form action={handleSubmit} className="mt-4 space-y-3 bg-zinc-800 p-4 rounded text-white text-sm">
          <div>
            <label className="block text-zinc-300">Nombre completo</label>
            <input required type="text" name="guestName" className="w-full p-2 rounded bg-zinc-700 border border-zinc-600" />
          </div>
          <div>
            <label className="block text-zinc-300">Correo electrónico</label>
            <input required type="email" name="guestEmail" className="w-full p-2 rounded bg-zinc-700 border border-zinc-600" />
          </div>
          <div>
            <label className="block text-zinc-300">Teléfono</label>
            <input required type="tel" name="guestPhone" className="w-full p-2 rounded bg-zinc-700 border border-zinc-600" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-zinc-300">Llegada</label>
              <input required type="date" name="checkIn" className="w-full p-2 rounded bg-zinc-700 border border-zinc-600" />
            </div>
            <div>
              <label className="block text-zinc-300">Salida</label>
              <input required type="date" name="checkOut" className="w-full p-2 rounded bg-zinc-700 border border-zinc-600" />
            </div>
          </div>
          <button type="submit" className="w-full bg-zinc-900 border border-amber-500 py-2 rounded font-semibold text-amber-400 hover:bg-amber-500 hover:text-black transition">
            Confirmar Fechas
          </button>
          {status && <p className="text-center font-medium mt-2 text-amber-300">{status}</p>}
        </form>
      )}
    </div>
  );
}