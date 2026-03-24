import { RegisterForm } from "@/src/features/auth/components";
import { AuthSwitcher } from "@/src/features/auth/components";
import { Title } from "@/src/shared/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propify | Crear cuenta",
};

const iconFilled = { fontVariationSettings: "'FILL' 1" as const };

export default function RegisterPage() {
  return (
    <div className="relative flex min-h-screen flex-col bg-surface text-on-surface">
      <main className="relative flex grow flex-col items-center justify-center overflow-hidden px-6 py-20">
        <div className="z-10 w-full max-w-md">
          <Title title="Crear tu cuenta" subtitle="Para empezar a usar nuestra plataforma" />
          <div className="rounded-lg bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(11,28,48,0.06)] md:p-10">
            <AuthSwitcher />
            {
              /* Proximamente 
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-xl border border-transparent bg-surface-container-low px-4 py-3 transition-all hover:border-outline-variant active:scale-95"
                >
                  <img
                    alt="Google"
                    className="size-5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYSBrDqscmQN3DpuTP4i5jUX7ibQQ5bSp9H25pv39PD-hDb6V39dFKxB2yIEAOJ9EgKj0rTKONPYt-ERe5dc6CnfQrlf_4JpZcltUWl4O3_XqGUN_2q6-2LJ052wJPG35vK2mMIyRj1qJP-WFANjON9aihBMlNXYT8GLdZMo92CGhBmICLEBOZ2Zu8GCGpDmXBnUbAjdCSsb3Xpe3Lk2n9sRFQRn4LOfkz8XRuIZDMAfMDyzSyTDUbpe_lpibMEDhKERxVY85yWC0M"
                  />
                  <span className="text-sm font-semibold text-on-surface">
                    Google
                  </span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 rounded-xl border border-transparent bg-surface-container-low px-4 py-3 transition-all hover:border-outline-variant active:scale-95"
                >
                  <span
                    className="material-symbols-outlined text-xl align-middle"
                    style={iconFilled}
                  >
                    ios
                  </span>
                  <span className="text-sm font-semibold text-on-surface">
                    Apple
                  </span>
                </button>
              </div>

              <div className="relative flex items-center py-2">
                <div className="grow border-t border-surface-variant" />
                <span className="mx-4 shrink text-xs font-bold tracking-widest text-outline">
                  OR EMAIL
                </span>
                <div className="grow border-t border-surface-variant" />
              </div>
              
              */
            }
            <div className="space-y-6">
              <RegisterForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
