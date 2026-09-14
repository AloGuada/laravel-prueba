import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({ categories = [] }) {

    const {
        data,
        setData,
        post,
        processing,
        errors,
    } = useForm({
        name: '',
        description: '',
        stock: '',
        price: '',
        category_id: '',
    });


    function handleSubmit(e) {
        e.preventDefault();

        post('/products');
    }


    return (
        <AuthenticatedLayout title="Create Product">

            <Head title="Create Product" />

            <div className="mx-auto max-w-3xl">

                {/* TÍTULO */}
                <div className="mb-6">

                    <h1 className="text-2xl font-semibold text-slate-900">
                        Crear Producto
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Registra un nuevo producto en el sistema.
                    </p>

                </div>


                {/* FORMULARIO */}
                <div className="rounded-lg border border-slate-200 bg-white p-6">

                    <form onSubmit={handleSubmit}>

                        {/* NOMBRE */}
                        <div className="mb-5">

                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Nombre
                            </label>

                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
                                placeholder="Nombre del producto"
                            />

                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.name}
                                </p>
                            )}

                        </div>


                        {/* DESCRIPCIÓN */}
                        <div className="mb-5">

                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Descripción
                            </label>

                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                className="min-h-24 w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
                                placeholder="Descripción del producto"
                            />

                            {errors.description && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.description}
                                </p>
                            )}

                        </div>


                        {/* CATEGORÍA */}
                        <div className="mb-5">

                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Categoría
                            </label>

                            <select
                                value={data.category_id}
                                onChange={(e) =>
                                    setData('category_id', e.target.value)
                                }
                                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
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
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.category_id}
                                </p>
                            )}

                        </div>


                        {/* STOCK */}
                        <div className="mb-5">

                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Stock
                            </label>

                            <input
                                type="number"
                                min="0"
                                value={data.stock}
                                onChange={(e) =>
                                    setData('stock', e.target.value)
                                }
                                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
                                placeholder="0"
                            />

                            {errors.stock && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.stock}
                                </p>
                            )}

                        </div>


                        {/* PRECIO */}
                        <div className="mb-6">

                            <label className="mb-2 block text-sm font-medium text-slate-700">
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
                                className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-500"
                                placeholder="0.00"
                            />

                            {errors.price && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.price}
                                </p>
                            )}

                        </div>


                        {/* BOTONES */}
                        <div className="flex justify-end gap-3">

                            <Link
                                href="/products"
                                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                            >
                                Cancelar
                            </Link>


                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700 disabled:opacity-50"
                            >
                                {processing
                                    ? 'Guardando...'
                                    : 'Guardar Producto'}
                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </AuthenticatedLayout>
    );
}