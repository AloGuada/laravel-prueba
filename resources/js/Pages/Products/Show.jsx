import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ product }) {

    return (
        <AuthenticatedLayout title="Product Details">

            <Head title="Product Details" />

            <div className="mx-auto max-w-3xl">

                <div className="mb-6">

                    <h1 className="text-2xl font-semibold text-slate-900">
                        Detalles del producto
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Información completa del producto.
                    </p>

                </div>


                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">

                    {/* ID */}
                    <div className="border-b border-slate-200 p-5">

                        <p className="text-sm text-slate-500">
                            ID
                        </p>

                        <p className="mt-1 text-lg font-semibold text-slate-900">
                            {product.id}
                        </p>

                    </div>


                    {/* NOMBRE */}
                    <div className="border-b border-slate-200 p-5">

                        <p className="text-sm text-slate-500">
                            Nombre
                        </p>

                        <p className="mt-1 text-lg font-semibold text-slate-900">
                            {product.name}
                        </p>

                    </div>


                    {/* DESCRIPCIÓN */}
                    <div className="border-b border-slate-200 p-5">

                        <p className="text-sm text-slate-500">
                            Descripción
                        </p>

                        <p className="mt-1 text-base text-slate-800">
                            {product.description || 'Sin descripción'}
                        </p>

                    </div>


                    {/* STOCK */}
                    <div className="border-b border-slate-200 p-5">

                        <p className="text-sm text-slate-500">
                            Stock
                        </p>

                        <p className="mt-1 text-lg font-semibold text-slate-900">
                            {product.stock}
                        </p>

                    </div>


                    {/* PRECIO */}
                    <div className="p-5">

                        <p className="text-sm text-slate-500">
                            Precio
                        </p>

                        <p className="mt-1 text-lg font-semibold text-slate-900">
                            ${Number(product.price).toFixed(2)}
                        </p>

                    </div>

                </div>


                {/* BOTONES */}
                <div className="mt-5 flex gap-3">

                    {/* VOLVER A PRODUCTOS */}
                    <Link
                        href={route('products.index')}
                        className="inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                    >
                        Volver a productos
                    </Link>


                    {/* EDITAR */}
                    <Link
                        href={route('products.edit', product.id)}
                        className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        Editar
                    </Link>

                </div>

            </div>

        </AuthenticatedLayout>
    );
}