import React from "react";

const WelcomeCard = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Salón de actos</h2>
            <p className="text-gray-600">Capacidad: 110 personas</p>
            <p className="text-gray-500 text-sm mt-2">Fecha reservada: 25 abril 2025</p>
            <span className="inline-block mt-4 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Disponible
            </span>
        </div>
    );
};

export default WelcomeCard;