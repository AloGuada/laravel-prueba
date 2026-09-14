import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create() {

    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        name: '',
    });


    function handleSubmit(e) {
        e.preventDefault();

        post(route('categories.store'));
    }


    return (
        <AuthenticatedLayout title="Crear Categoría">

            <Head title="Crear Categoría" />

            <div className="mx-auto max-w-3xl">

                {/* TÍTULO */}
                <div className="mb-6">

                    <h1 className="text-2xl font-semibold text-slate-900">
                        Crear Categoría
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Registra una nueva categoría para tus productos.
                    </p>

                </div>


                {/* FORMULARIO */}
                <div className="rounded-lg border border-slate-200 bg-white p-6">

                    <form onSubmit={handleSubmit}>

                        {/* NOMBRE DE LA CATEGORÍA */}
                        <div className="mb-6">

                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Nombre de la categoría
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Ejemplo: Refrescos"
                            />

                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.name}
                                </p>
                            )}

                        </div>


                        {/* BOTONES */}
                        <div className="flex gap-3">

                            {/* CANCELAR */}
                            <Link
                                href={route('products.index')}
                                className="rounded-md bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-300"
                            >
                                Cancelar
                            </Link>


                            {/* GUARDAR */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                            >
                                {processing
                                    ? 'Guardando...'
                                    : 'Guardar categoría'}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </AuthenticatedLayout>
    );
}