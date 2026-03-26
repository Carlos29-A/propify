import { PropertyPublic } from "@/src/shared/types"
import { PropertyCardPublic } from "../PropertyCardPublic/PropertyCardPublic";

interface PropertyGridPublicProps {
    properties: PropertyPublic[];
}



export const PropertyGridPublic = ({ properties }: PropertyGridPublicProps) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    properties.map((property) => (
                        <PropertyCardPublic key={property.property_image.url + property.property.title} property={property} />
                    ))
                }
            </div>
        </>
    )
}
