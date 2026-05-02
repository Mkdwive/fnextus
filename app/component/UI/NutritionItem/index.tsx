interface NutritionType {
    label: string;
    value?: number;
}
function NutritionItem({ label, value }: NutritionType) {
    
    const gradients: Record<string, string> = {
        Energy: "from-orange-200 to-orange-400",
        Fat: "from-yellow-200 to-yellow-400",
        Carbs: "from-blue-200 to-blue-400",
        Sugar: "from-pink-200 to-pink-400",
        Protein: "from-green-200 to-green-400",
        Salt: "from-gray-200 to-gray-400",
    };

    return (
        <div
            className={`
        relative overflow-hidden rounded-2xl p-4 text-center
        bg-linear-to-br ${gradients[label] || "from-gray-200 to-gray-300"}
        shadow-md hover:shadow-xl
        transition duration-300 ease-in-out
        hover:-translate-y-1
      `}
        >
            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl" />

            <div className="relative z-10">
                <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">
                    {label}
                </p>
                <p className="text-xl font-bold text-gray-900 mt-1">
                    {value ?? "N/A"}
                </p>
            </div>
        </div>
    );
}
export default NutritionItem;