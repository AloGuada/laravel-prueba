
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Index({ categories }) {
    return (
        <AuthenticatedLayout title="Categorías">

            <Head title="Categorías" />

            <div className="mx-auto max-w-7xl">

                {/* ENCABEZADO */}
                <div className="mb-6 flex items-center justify-between">

                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900">
                            Categorías
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Consulta las categorías y los productos que pertenecen a cada una.
                        </p>
                    </div>


                    {/* BOTONES */}
                    <div className="flex gap-3">

                        {/* EXPORTAR PDF */}
                        <a
                            href={route('categories.pdf')}
                            className="rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                        >
                            Exportar PDF
                        </a>


                        {/* NUEVA CATEGORÍA */}
                        <Link
                            href={route('categories.create')}
                            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                        >
                            + Nueva categoría
                        </Link>

                    </div>

                </div>


                {/* CATEGORÍAS */}
                <div className="space-y-6">

                    {categories.length === 0 ? (

                        <div className="rounded-lg border border-slate-200 bg-white p-8 text-center">

                            <p className="text-sm text-slate-500">
                                No hay categorías registradas.
                            </p>

                            <Link
                                href={route('categories.create')}
                                className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                Crear primera categoría
                            </Link>

                        </div>

                    ) : (

                        categories.map((category) => (

                            <div
                                key={category.id}
                                className="overflow-hidden rounded-lg border border-slate-200 bg-white"
                            >

                                {/* ENCABEZADO DE LA CATEGORÍA */}
                                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">

                                    <div>

                                        <h2 className="text-lg font-semibold text-slate-900">
                                            {category.name}
                                        </h2>

                                        <p className="text-sm text-slate-500">
                                            {category.products?.length ?? 0}{' '}
                                            {category.products?.length === 1
                                                ? 'producto'
                                                : 'productos'}
                                        </p>

                                    </div>

                                </div>


                                {/* PRODUCTOS */}
                                {category.products?.length > 0 ? (

                                    <div className="overflow-x-auto">

                                        <table className="min-w-full divide-y divide-slate-200">

                                            <thead className="bg-white">

                                                <tr>

                                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                                        Producto
                                                    </th>

                                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                                        Precio
                                                    </th>

                                                    <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                                                        Stock
                                                    </th>

                                                    <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                                                        Acciones
                                                    </th>

                                                </tr>

                                            </thead>


                                            <tbody className="divide-y divide-slate-200">

                                                {category.products.map((product) => (

                                                    <tr
                                                        key={product.id}
                                                        className="hover:bg-slate-50"
                                                    >

                                                        {/* PRODUCTO */}
                                                        <td className="whitespace-nowrap px-6 py-4">

                                                            <div className="text-sm font-medium text-slate-900">
                                                                {product.name}
                                                            </div>

                                                        </td>


                                                        {/* PRECIO */}
                                                        <td className="whitespace-nowrap px-6 py-4">

                                                            <div className="text-sm text-slate-700">
                                                                ${Number(product.price).toFixed(2)}
                                                            </div>

                                                        </td>


                                                        {/* STOCK */}
                                                        <td className="whitespace-nowrap px-6 py-4">

                                                            <div className="text-sm text-slate-700">
                                                                {product.stock}
                                                            </div>

                                                        </td>


                                                        {/* ACCIONES */}
                                                        <td className="whitespace-nowrap px-6 py-4 text-right">

                                                            <Link
                                                                href={route(
                                                                    'products.edit',
                                                                    product.id
                                                                )}
                                                                className="text-sm font-medium text-blue-600 hover:text-blue-800"
                                                            >
                                                                Editar
                                                            </Link>

                                                        </td>

                                                    </tr>

                                                ))}

                                            </tbody>

                                        </table>

                                    </div>

                                ) : (

                                    <div className="px-6 py-8 text-center">

                                        <p className="text-sm text-slate-500">
                                            Esta categoría todavía no tiene productos.
                                        </p>

                                    </div>

                                )}

                            </div>

                        ))

                    )}

                </div>

            </div>

        </AuthenticatedLayout>
    );
}
