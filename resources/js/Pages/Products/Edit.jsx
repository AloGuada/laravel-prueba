import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit({ product, categories }) {

    const {
        data,
        setData,
        put,
        processing,
        errors,
    } = useForm({
        name: product.name || '',
        description: product.description || '',
        stock: product.stock || '',
        price: product.price || '',
        category_id: product.category_id || '',
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('products.update', product.id));
    };

    return (
        <AuthenticatedLayout title="Editar Producto">

            <Head title="Editar Producto" />

            <div className="mx-auto max-w-3xl">

                {/* TÍTULO */}
                <div className="mb-6">

                    <h1 className="text-2xl font-semibold text-slate-900">
                        Editar Producto
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Modifica la información del producto.
                    </p>

                </div>


                <form onSubmit={submit}>

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

                            <label className="text-sm text-slate-500">
                                Nombre
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                className="mt-2 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />

                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.name}
                                </p>
                            )}

                        </div>


                        {/* DESCRIPCIÓN */}
                        <div className="border-b border-slate-200 p-5">

                            <label className="text-sm text-slate-500">
                                Descripción
                            </label>

                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                rows="3"
                                className="mt-2 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />

                            {errors.description && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.description}
                                </p>
                            )}

                        </div>


                        {/* CATEGORÍA */}
                        <div className="border-b border-slate-200 p-5">

                            <label className="text-sm text-slate-500">
                                Categoría
                            </label>

                            <select
                                value={data.category_id}
                                onChange={(e) =>
                                    setData('category_id', e.target.value)
                                }
                                className="mt-2 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >

                                <option value="">
                                    Selecciona una categoría
                                </option>

                                {categories.map((category) => (
                                    <option
                                        key={category.id}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}

                            </select>

                            {errors.category_id && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.category_id}
                                </p>
                            )}

                        </div>


                        {/* STOCK */}
                        <div className="border-b border-slate-200 p-5">

                            <label className="text-sm text-slate-500">
                                Stock
                            </label>

                            <input
                                type="number"
                                min="0"
                                value={data.stock}
                                onChange={(e) =>
                                    setData('stock', e.target.value)
                                }
                                className="mt-2 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />

                            {errors.stock && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.stock}
                                </p>
                            )}

                        </div>


                        {/* PRECIO */}
                        <div className="p-5">

                            <label className="text-sm text-slate-500">
                                Precio
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                value={data.price}
                                onChange={(e) =>
                                    setData('price', e.target.value)
                                }
                                className="mt-2 w-full rounded-md border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />

                            {errors.price && (
                                <p className="mt-1 text-sm text-red-600">
                                    {errors.price}
                                </p>
                            )}

                        </div>

                    </div>


                    {/* BOTONES */}
                    <div className="mt-5 flex gap-3">

                        {/* VOLVER A DETALLES */}
                        <Link
                            href={route('products.show', product.id)}
                            className="inline-flex rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                        >
                            Volver a detalles
                        </Link>


                        {/* GUARDAR */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {processing
                                ? 'Guardando...'
                                : 'Guardar cambios'}
                        </button>

                    </div>

                </form>

            </div>

        </AuthenticatedLayout>
    );
}