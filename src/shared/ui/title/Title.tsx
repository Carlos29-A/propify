interface Props {
    title: string;
    subtitle?: string;
}

export const Title = ({ title, subtitle }: Props) => {
    return (
        <div className="mb-10 flex flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-on-surface">
                {title}
            </h1>
            {subtitle && (
                <p className="mt-2 text-sm font-medium tracking-wide text-on-surface-variant">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
