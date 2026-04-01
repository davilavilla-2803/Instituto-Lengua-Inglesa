import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-[120px] font-black text-brandSecondary/10 select-none leading-none">
        404
      </span>
      <h1 className="text-3xl md:text-5xl font-bold font-display text-typographyMain -mt-4 mb-4">
        Página no encontrada
      </h1>
      <p className="text-gray-500 text-lg mb-8 max-w-md">
        La página que buscás no existe o fue movida. Podés volver al inicio o explorar nuestros cursos.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/"
          className="h-12 px-8 bg-brandAccent text-white rounded-full text-[10px] font-black uppercase tracking-widest flex items-center hover:bg-brandAccentDark transition-colors"
        >
          Volver al Inicio
        </Link>
        <Link
          href="/cursos"
          className="h-12 px-8 border border-brandAccent text-brandAccent rounded-full text-[10px] font-black uppercase tracking-widest flex items-center hover:bg-brandAccent hover:text-white transition-colors"
        >
          Ver Cursos
        </Link>
      </div>
    </div>
  );
}
