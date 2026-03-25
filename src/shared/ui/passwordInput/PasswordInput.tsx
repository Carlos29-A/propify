"use client";


interface PasswordInputProps {
    showPassword: boolean;
    setShowPassword: (showPassword: boolean) => void;
}

export const PasswordInput = ({ showPassword, setShowPassword }: PasswordInputProps) => {
    return (
        <button
            type="button"
            className="absolute top-1/2 right-4 -translate-y-1/2 text-outline hover:text-on-surface"
            aria-label="Mostrar contraseña"
            onClick={() => setShowPassword(!showPassword)}
        >
            <span className="material-symbols-outlined text-lg">
                {showPassword ? "visibility_off" : "visibility"}
            </span>
        </button>
    )
}
