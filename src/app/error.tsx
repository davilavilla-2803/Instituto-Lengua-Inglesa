'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-[120px] font-black text-brandSecondary/10 select-none leading-none">
        500
      </span>
      <h1 className="text-3xl md:text-5xl font-bold font-display text-typographyMain -mt-4 mb-4">
        Algo salió mal
      </h1>
      <p className="text-gray-500 text-lg mb-8 max-w-md">
        Ocurrió un error inesperado. Por favor intentá de nuevo.
      </p>
      <button
        onClick={reset}
        className="h-12 px-8 bg-brandAccent text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center hover:bg-brandAccentDark transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
