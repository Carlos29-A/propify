import { formatPrice } from "@/src/lib/format";
import { formatArea } from "@/src/shared/lib";
import { PropertyPublic } from "@/src/shared/types";
import Link from "next/link";

interface PropertyCardPublicProps {
    property: PropertyPublic;
}

export const PropertyCardPublic = ({ property }: PropertyCardPublicProps) => {

    return (
        <>
            <div className="group overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm transition-all duration-500 hover:shadow-2xl">
                <div className="relative aspect-4/3 overflow-hidden">
                    <img
                        alt={property.property.title}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={property.property_image.url}
                    />
                    <button
                        type="button"
                        className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-md transition-all hover:bg-white hover:text-error"
                    >
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <div className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                        {property.property_type.name}
                    </div>
                </div>
                <div className="p-6">
                    <div className="mb-3 flex items-start justify-between">
                        <h3 className="text-xl font-bold text-on-surface">
                            {property.property.title}
                        </h3>
                        <span className="text-xl font-black text-primary">
                            {formatPrice(Number(property.property.price))}
                        </span>
                    </div>
                    <p className="mb-6 flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-sm">
                            location_on
                        </span>
                        {property.property.location}
                    </p>
                    <div className="flex justify-between border-t border-surface-container pt-6">
                        <div className="flex items-center gap-4 text-sm font-semibold text-on-surface-variant">
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-primary">
                                    bed
                                </span>{" "}
                                {property.property.rooms}
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-primary">
                                    bathtub
                                </span>{" "}
                                {property.property.bathrooms}
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-primary">
                                    square_foot
                                </span>{" "}
                                {formatArea(Number(property.property.area))}
                            </span>
                        </div>

                        <Link href={`/properties/${property.property.id}`} className=" cursor-pointer bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
                            Ver propiedad
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
