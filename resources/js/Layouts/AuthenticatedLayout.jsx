import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';

export default function AuthenticatedLayout({
    title = 'Dashboard',
    children,
}) {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-800">

            <Head title={title} />

            <div className="flex min-h-screen">

                {/* MENU LATERAL */}
                <aside className="fixed inset-y-0 left-0 z-30 w-56 border-r border-slate-200 bg-white">

                    {/* LOGO */}
                    <div className="flex h-16 items-center border-b border-slate-200 px-5">

                        <div className="flex items-center gap-3">

                            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900">
                                <ApplicationLogo className="h-5 w-5 fill-white text-white" />
                            </div>

                            <span className="text-sm font-semibold text-slate-900">
                                Laravel Starter Kit
                            </span>

                        </div>

                    </div>


                    {/* MENU */}
                    <div className="p-4">

                        <p className="mb-3 px-3 text-xs font-semibold uppercase text-slate-400">
                            Platform
                        </p>


                        {/* DASHBOARD */}
                        <Link
                            href="/dashboard"
                            className="mb-2 flex rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                        >
                            Dashboard
                        </Link>


                        {/* PRODUCTS */}
                        <Link
                            href="/products"
                            className="flex rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                        >
                            Productos
                        </Link>

                        
                          {/* CATEGORIA */}
                        <Link
                            href="/categories"
                            className="flex rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                        >
                            Categoria
                        </Link>

                        

                    </div>

                </aside>


                {/* CONTENIDO PRINCIPAL */}
                <div className="ml-56 flex min-h-screen flex-1 flex-col">

                    {/* ENCABEZADO */}
                    <header className="flex h-16 items-center border-b border-slate-200 bg-white px-6">

                        <h2 className="text-lg font-semibold text-slate-800">
                            {title}
                        </h2>

                    </header>


                    {/* CONTENIDO */}
                    <main className="flex-1 p-6">

                        {children}

                    </main>

                </div>

            </div>

        </div>
    );
}