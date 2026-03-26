import { getPropertyById } from "@/src/features/properties/actions";
import { getPropertyType } from "@/src/features/properties/actions/get-propertyType";
import { ProductForm } from "@/src/features/properties/components";
import type { PropertyListRow } from "@/src/features/properties/types/properie.type";
import { redirect } from "next/navigation";

interface CreatePropertyPageProps {
    params: Promise<{ slug: string }>;
}

export default async function CreatePropertyPage({ params }: CreatePropertyPageProps) {
    const { slug } = await params;
    const result = await getPropertyType();
    const propertyTypes = result.data;

    let property: PropertyListRow | undefined;
    if (slug !== "create") {
        const resultProperty = await getPropertyById(slug);
        if (!resultProperty.ok) {
            redirect("/dashboard/properties");
        }
        property = resultProperty.data;
    }

    return (
        <>
            <ProductForm propertyTypes={propertyTypes ?? []} property={property} />
        </>
    );
}
