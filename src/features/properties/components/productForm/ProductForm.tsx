"use client";

import { useForm } from "react-hook-form";
import { PropertyFormData, PropertyListRow, PropertyType } from "../../types/properie.type";
import { useRouter } from "next/navigation";
import { GiPhotoCamera } from "react-icons/gi";
import { createUpdateProperty } from "../../actions/create-update-property";
import { toast } from "react-toastify";

interface ProductFormProps {
    propertyTypes: PropertyType[];
    /** Si viene de la BD → modo edición (incluye `id` en los valores iniciales). */
    property?: PropertyListRow;
}

/** Valores iniciales del formulario al crear una propiedad nueva. */
const EMPTY_VALUES: PropertyFormData = {
    title: "",
    description: "",
    price: 0,
    location: "",
    typeId: 0,
    rooms: 1,
    bathrooms: 1,
    area: 0,
};

/** Convierte la fila del servidor al shape que usa react-hook-form. */
function defaultsFromServerRow(row: PropertyListRow | undefined): PropertyFormData {
    if (!row) return EMPTY_VALUES;
    const p = row.property;
    return {
        id: p.id,
        title: p.title,
        description: p.description,
        price: p.price ? parseFloat(String(p.price)) : 0,
        location: p.location,
        typeId: p.typeId,
        rooms: p.rooms,
        bathrooms: p.bathrooms,
        area: p.area !== undefined && p.area !== "" ? parseFloat(String(p.area)) : 0,
    };
}

/**
 * Cuando cambian datos relevantes en el servidor, este string cambia.
 * Lo usamos como `key` del formulario interno: React desmonta y vuelve a montar,
 * así `useForm` arranca otra vez con los valores nuevos (sin useEffect).
 */
function serverFingerprint(row: PropertyListRow | undefined): string {
    if (!row) return "create";
    const p = row.property;
    return [
        p.id,
        p.title,
        p.description,
        String(p.price),
        p.location,
        p.typeId,
        p.rooms,
        p.bathrooms,
        String(p.area),
    ].join("|");
}

export function ProductForm({ propertyTypes, property }: ProductFormProps) {
    const defaults = defaultsFromServerRow(property);
    const key = serverFingerprint(property);

    return (
        <ProductFormFields
            key={key}
            defaults={defaults}
            propertyTypes={propertyTypes}
            existingImageUrl={property?.property_image?.url}
        />
    );
}

interface ProductFormFieldsProps {
    defaults: PropertyFormData;
    propertyTypes: PropertyType[];
    existingImageUrl?: string;
}

function ProductFormFields({ defaults, propertyTypes, existingImageUrl }: ProductFormFieldsProps) {
    const router = useRouter();
    const editingId = defaults.id;

    const { register, handleSubmit, reset, setValue, getValues, formState: { errors } } =
        useForm<PropertyFormData>({ defaultValues: defaults });

    const bumpRooms = (delta: number) => {
        const current = Number(getValues("rooms")) || 1;
        const next = Math.max(1, current + delta);
        setValue("rooms", next, { shouldValidate: true, shouldDirty: true });
    };

    const bumpBathrooms = (delta: number) => {
        const current = Number(getValues("bathrooms")) || 1;
        const next = Math.max(1, current + delta);
        setValue("bathrooms", next, { shouldValidate: true, shouldDirty: true });
    };

    const onSubmit = async (data: PropertyFormData) => {
        const { images, ...rest } = data;
        const imageFiles =
            images && images.length > 0 ? Array.from(images) : undefined;

        const payload: PropertyFormData = {
            ...rest,
            ...(editingId ? { id: editingId } : {}),
        };

        const { success, message } = await createUpdateProperty(payload, imageFiles);

        if (!success) {
            toast.error(message);
            return;
        }

        toast.success(message);
        router.refresh();

        if (!editingId) {
            reset(EMPTY_VALUES);
        }
    };

    return (
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            {editingId ? <input type="hidden" {...register("id")} /> : null}

            <section>
                <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-primary" data-icon="home_work">
                        home_work
                    </span>
                    <h2 className="text-xl font-bold">Detalles de la Propiedad</h2>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant block">
                            Título de la Propiedad
                        </label>
                        <input
                            className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                            placeholder="e.g. Modern Penthouse with City View"
                            type="text"
                            {...register("title", { required: "El título es requerido" })}
                        />
                        {errors.title && (
                            <p className="text-red-500 text-xs">{errors.title.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant block">
                            Descripción
                        </label>
                        <textarea
                            className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                            placeholder="Describe las características clave, el vecindario y los amenities..."
                            rows={4}
                            {...register("description", { required: "La descripción es requerida" })}
                        />
                        {errors.description && (
                            <p className="text-red-500 text-xs">{errors.description.message}</p>
                        )}
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant block">
                        Tipo de Propiedad
                    </label>
                    <select
                        className="w-full px-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                        {...register("typeId", { required: "El tipo de propiedad es requerido" })}
                    >
                        <option value="">Seleccione un tipo de propiedad</option>
                        {propertyTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                    {errors.typeId && (
                        <p className="text-red-500 text-xs">{errors.typeId.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant block">
                        Precio ($)
                    </label>
                    <input
                        className="w-full pl-11 pr-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                        placeholder="500,000"
                        type="number"
                        {...register("price", { required: "El precio es requerido" })}
                    />
                    {errors.price && (
                        <p className="text-red-500 text-xs">{errors.price.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant block">
                        Ubicación
                    </label>
                    <div className="relative">
                        <span
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-outline material-symbols-outlined text-sm"
                            data-icon="location_on"
                        >
                            location_on
                        </span>
                        <input
                            className="w-full pl-11 pr-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                            placeholder="Ciudad, Vecindario"
                            type="text"
                            {...register("location", { required: "La ubicación es requerida" })}
                        />
                    </div>
                    {errors.location && (
                        <p className="text-red-500 text-xs">{errors.location.message}</p>
                    )}
                </div>
            </section>

            <section>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant block">
                            Habitaciones
                        </label>
                        <div className="flex items-center bg-surface-container-high rounded-lg p-1">
                            <button
                                type="button"
                                onClick={() => bumpRooms(-1)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-lowest rounded-md transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm" data-icon="remove">
                                    remove
                                </span>
                            </button>
                            <input
                                className="w-full text-center bg-transparent border-none focus:ring-0 font-bold"
                                type="number"
                                {...register("rooms", { required: "El número de habitaciones es requerido" })}
                            />
                            <button
                                type="button"
                                onClick={() => bumpRooms(1)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-lowest rounded-md transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm" data-icon="add">
                                    add
                                </span>
                            </button>
                        </div>
                        {errors.rooms && (
                            <p className="text-red-500 text-xs">{errors.rooms.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant block">Baños</label>
                        <div className="flex items-center bg-surface-container-high rounded-lg p-1">
                            <button
                                type="button"
                                onClick={() => bumpBathrooms(-1)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-lowest rounded-md transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm" data-icon="remove">
                                    remove
                                </span>
                            </button>
                            <input
                                className="w-full text-center bg-transparent border-none focus:ring-0 font-bold"
                                type="number"
                                {...register("bathrooms", {
                                    required: "El número de baños es requerido",
                                })}
                            />
                            <button
                                type="button"
                                onClick={() => bumpBathrooms(1)}
                                className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-lowest rounded-md transition-colors"
                            >
                                <span className="material-symbols-outlined text-sm" data-icon="add">
                                    add
                                </span>
                            </button>
                        </div>
                        {errors.bathrooms && (
                            <p className="text-red-500 text-xs">{errors.bathrooms.message}</p>
                        )}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant block">
                            Área (m²)
                        </label>
                        <input
                            className="w-full px-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all"
                            placeholder="1,200"
                            type="number"
                            {...register("area", { required: "El área es requerida" })}
                        />
                        {errors.area && (
                            <p className="text-red-500 text-xs">{errors.area.message}</p>
                        )}
                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <GiPhotoCamera className="text-primary text-2xl" />
                        <h2 className="text-xl font-bold">Medios de la Propiedad</h2>
                    </div>
                    <span className="text-xs font-medium text-outline">Max 3 imágenes</span>
                </div>
                <input
                    type="file"
                    multiple
                    className="border-2 border-dashed border-surface-variant rounded-xl p-10 flex flex-col items-center justify-center bg-surface-container-low group hover:bg-surface-container transition-colors cursor-pointer"
                    {...register("images")}
                />
            </section>

            <span className="text-sm font-semibold text-on-surface-variant block">
                Imágenes de la Propiedad
            </span>
            {existingImageUrl ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <img
                            src={existingImageUrl}
                            alt="Imagen de la propiedad"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            ) : null}

            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
                <button
                    type="submit"
                    className="w-full sm:flex-1 py-4 px-8 bg-linear-to-r from-primary to-primary-container text-on-primary font-bold cursor-pointer shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    {editingId ? "Actualizar Propiedad" : "Publicar Propiedad"}
                    <span className="material-symbols-outlined text-lg" data-icon="arrow_forward">
                        arrow_forward
                    </span>
                </button>
            </div>
        </form>
    );
}
