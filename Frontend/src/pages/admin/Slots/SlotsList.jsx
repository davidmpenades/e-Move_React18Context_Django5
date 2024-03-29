import React from "react";
import { useSlots } from "../../../hooks/useSlots"
import SlotsListAdmin from "../../../component/Admin/Slots/SlotsListAdmin";

export default function SlotsList() {
    const { slots } = useSlots()
    return(
        <>
        <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border w-48">ID</th>
            <th className="border w-48">PERTENECE A LA ESTACIÓN</th>
            <th className="border w-48">ID BICICLETA</th>
            <th className="border w-48">NUMERO ANCLAJE</th>
            <th className="border w-48">ESTADO</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((slot) => (
            <SlotsListAdmin
              key={slot.id}
              slot={slot}
            />
          ))}
        </tbody>
      </table>
        </>
    )
}