interface StatsProps {
    title: string;
    value: number;
    description?: string;
    icon: React.ReactNode;
    className?: string;
}


export const Stats = ({ title, value, description, icon, className }: StatsProps) => {
    return (
        <div className={`bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border-l-4 ${className}`}>
            <span className="text-sm font-semibold text-gray-400">{title}</span>
            <div className="mt-4 flex items-center gap-2">
                <span className="text-3xl font-black">{value}</span>
                {/* Icono de propiedades */}
                {icon}
            </div>
        </div>
    )
}
