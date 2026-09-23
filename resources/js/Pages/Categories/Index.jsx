
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ categories }) {

    const deleteProduct = (product) => {
        if (confirm(`¿Seguro que deseas eliminar "${product.name}"?`)) {
            router.delete(route('products.destroy', product.id));
        }
    };

    //CONVERTIMOS TODOS LOS PRODUCTOS EN UNA SOLA LISTA
    const products = categories.flatMap((category) =>
        (category.products || []).map((product) => ({
            ...product,
            categoryName: category.name,
        }))
    );

    return (
        <AuthenticatedLayout title="Categorías">

            <Head title="Categorías" />

            {/* CONTENEDOR MÁS PEQUEÑO */}
            <div className="mx-auto max-w-3xl">

                {/* ENCABEZADO */}
                <div className="mb-5 flex items-center justify-between">

                    <div>
                        <h1 className="text-xl font-semibold text-slate-900">
                            Categorías
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Consulta los productos y las categorías a las que pertenecen.
                        </p>
                    </div>

                    {/* BOTONES */}
                    <div className="flex gap-2">

                       

                        {/* NUEVA CATEGORÍA */}
                        <Link
                            href={route('categories.create')}
                            className="rounded-md bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700"
                        >
                            + Nueva categoría
                        </Link>

                    </div>

                </div>

                {/* TABLA GENERAL */}
                <div className="overflow-hidden rounded-lg border border-slate-100 bg-white">

                    {products.length === 0 ? (

                        <div className="p-4 text-center">

                            <p className="text-sm text-slate-500">
                                No hay productos registrados.
                            </p>

                            <Link
                                href={route('categories.create')}
                                className="mt-3 inline-block rounded-md bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700"
                            >
                                Crear primera categoría
                            </Link>

                        </div>

                    ) : (

                        <div className="overflow-x-auto">

                            <table className="min-w-full divide-y divide-slate-200">

                                {/* ENCABEZADOS */}
                                <thead className="bg-slate-50">

                                    <tr>

                                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Categoría
                                        </th>

                                        <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                            Acciones
                                        </th>

                                    </tr>

                                </thead>

                                {/* PRODUCTOS */}
                                <tbody className="divide-y divide-slate-200">

                                    {products.map((product) => (

                                        <tr
                                            key={product.id}
                                            className="hover:bg-slate-50"
                                        >

                            

                                            {/* CATEGORÍA */}
                                            <td className="whitespace-nowrap px-4 py-3">

                                                <div className="text-sm text-slate-700">
                                                    {product.categoryName || '-'}
                                                </div>

                                            </td>

                                            {/* ACCIONES */}
                                            <td className="px-4 py-3">

                                                <div className="flex gap-2">

                                                    {/* EDITAR */}
                                                    <Link
                                                        href={route(
                                                            'products.edit',
                                                            product.id
                                                        )}
                                                        className="rounded-md bg-slate-400 px-3 py-1.5 text-xs font-medium text-blue-800 hover:text-blue-900"
                                                    >
                                                        Editar
                                                    </Link>

                                                    {/* ELIMINAR */}
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            deleteProduct(product)
                                                        }
                                                        className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-red-700"
                                                    >
                                                        Eliminar
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </div>

        </AuthenticatedLayout>
    );
}