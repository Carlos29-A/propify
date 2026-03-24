/** Datos que envía el formulario de registro */
export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/** Datos para persistir usuario (sin confirmación de contraseña) */
export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  /** Por defecto el servicio usa "user" si no se envía */
  role?: string;
}
