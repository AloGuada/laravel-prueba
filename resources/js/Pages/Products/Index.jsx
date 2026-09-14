import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ products = [] }) {

    function deleteProduct(product) {

        const confirmar = window.confirm(
            `¿Estás seguro de que deseas eliminar el producto "${product.name}"?`
        );

        if (confirmar) {
            router.delete(`/products/${product.id}`);
        }
    }

    return (
        <AuthenticatedLayout title="Products">

            <Head title="Products" />

            <div className="w-full">

                {/* =========================
                    BOTONES CREAR
                ========================== */}
                <div className="mb-5 flex gap-3">

                    {/* CREAR PRODUCTO */}
                    <Link
                        href={route('products.create')}
                        className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                    >
                        Crear Producto
                    </Link>


                    {/* CREAR CATEGORÍA */}
                    <Link
                        href={route('categories.create')}
                        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        Crear Categoría
                    </Link>

                </div>


                {/* =========================
                    TABLA
                ========================== */}
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">

                    <div className="overflow-x-auto">

                        <table className="w-full text-left">

                            {/* ENCABEZADOS */}
                            <thead className="border-b border-slate-200 bg-slate-50">

                                <tr>

                                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                                        ID
                                    </th>

                                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                                        Producto
                                    </th>

                                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                                        Descripcion
                                    </th>

                                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                                        Stock
                                    </th>

                                    <th className="px-5 py-3 text-xs font-semibold text-slate-500">
                                        Precio
                                    </th>

                                    <th className="px-5 py-3 text-right text-xs font-semibold text-slate-500">
                                        Acciones
                                    </th>

                                </tr>

                            </thead>


                            {/* =========================
                                PRODUCTOS
                            ========================== */}
                            <tbody className="divide-y divide-slate-200">

                                {products.length > 0 ? (

                                    products.map((product) => (

                                        <tr
                                            key={product.id}
                                            className="hover:bg-slate-50"
                                        >

                                            <td className="px-5 py-3 text-sm text-slate-600">
                                                {product.id}
                                            </td>


                                            <td className="px-5 py-3 text-sm font-medium text-slate-800">
                                                {product.name}
                                            </td>


                                            <td className="px-5 py-3 text-sm text-slate-600">
                                                {product.description || '-'}
                                            </td>


                                            <td className="px-5 py-3 text-sm text-slate-600">
                                                {product.stock}
                                            </td>


                                            <td className="px-5 py-3 text-sm text-slate-600">
                                                ${Number(product.price).toFixed(2)}
                                            </td>


                                            {/* =========================
                                                ACCIONES
                                            ========================== */}
                                            <td className="px-5 py-3">

                                                <div className="flex justify-end gap-2">

                                                    {/* VER DETALLES */}
                                                    <Link
                                                        href={route(
                                                            'products.show',
                                                            product.id
                                                        )}
                                                        className="rounded-md bg-slate-500 px-3 py-2 text-xs font-medium text-white hover:bg-slate-600"
                                                    >
                                                        Detalles
                                                    </Link>


                                                    {/* BORRAR */}
                                                    <button
                                                        onClick={() =>
                                                            deleteProduct(product)
                                                        }
                                                        className="rounded-md bg-red-600 px-3 py-2 text-xs font-medium text-white hover:bg-red-700"
                                                    >
                                                        Eliminar
                                                    </button>

                                                </div>

                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td
                                            colSpan="6"
                                            className="px-5 py-12 text-center text-sm text-slate-500"
                                        >
                                            No hay productos registrados.
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </AuthenticatedLayout>
    );
}