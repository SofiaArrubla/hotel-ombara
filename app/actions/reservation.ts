"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createReservation(formData: FormData) {
  const roomId = formData.get("roomId") as string;
  const guestName = formData.get("guestName") as string;
  const guestEmail = formData.get("guestEmail") as string;
  const guestPhone = formData.get("guestPhone") as string;
  const checkIn = new Date(formData.get("checkIn") as string);
  const checkOut = new Date(formData.get("checkOut") as string);

  if (checkIn >= checkOut) {
    return { success: false, error: "La fecha de salida debe ser posterior a la de entrada." };
  }

  // Verificar solapamiento de reservas existentes
  const existingConflict = await prisma.reservation.findFirst({
    where: {
      roomId,
      status: "CONFIRMED",
      OR: [
        { checkIn: { lte: checkOut }, checkOut: { gte: checkIn } },
      ],
    },
  });

  if (existingConflict) {
    return { success: false, error: "La habitación no está disponible para las fechas seleccionadas." };
  }

  const room = await prisma.room.findUnique({ where: { id: roomId } });
  if (!room) return { success: false, error: "Habitación no encontrada." };

  const days = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  const totalPrice = days * room.pricePerNight;

  await prisma.reservation.create({
    data: {
      roomId,
      guestName,
      guestEmail,
      guestPhone,
      checkIn,
      checkOut,
      totalPrice,
    },
  });

  return { success: true, totalPrice };
}