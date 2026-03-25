import { getPropertyType } from "@/src/features/properties/actions/get-propertyType";
import { ProductForm } from "@/src/features/properties/components";

export default async function CreatePropertyPage() {
    const result = await getPropertyType();
    const propertyTypes = result.data;


    return (
        <>
            <ProductForm propertyTypes={propertyTypes} />
        </>
    )
}
