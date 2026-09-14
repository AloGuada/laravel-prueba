import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Dashboard() {
    return (
        <AuthenticatedLayout title="Dashboard">

            <div className="rounded-lg border border-slate-200 bg-white p-6">

                <h1 className="text-xl font-semibold text-slate-900">
                    Dashboard
                </h1>

                <p className="mt-2 text-sm text-slate-600">
                    Bienvenida al sistema de productos.
                </p>

            </div>

        </AuthenticatedLayout>
    );
}