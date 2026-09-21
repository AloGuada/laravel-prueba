<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Barryvdh\DomPDF\Facade\Pdf;

class CategoryController extends Controller
{
    // =========================
    // MOSTRAR CATEGORÍAS
    // =========================
    public function index(): Response
    {
        $categories = Category::with('products')->get();

        return Inertia::render('Categories/Index', [
            'categories' => $categories,
        ]);
    }


    // =========================
    // EXPORTAR CATEGORÍAS A PDF
    // =========================
    public function pdf()
    {
        $categories = Category::with('products')->get();

        $pdf = Pdf::loadView('categories.pdf', [
            'categories' => $categories,
        ]);

        return $pdf->download('categorias.pdf');
    }


    // =========================
    // FORMULARIO CREAR
    // =========================
    public function create(): Response
    {
        return Inertia::render('Categories/Create');
    }


    // =========================
    // GUARDAR CATEGORÍA
    // =========================
    public function store(Request $request)
    {
        $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
            ],
        ]);

        Category::create([
            'name' => $request->name,
        ]);

        return redirect()
            ->route('categories.index')
            ->with('success', 'Categoría creada correctamente.');
    }


    // =========================
    // MOSTRAR CATEGORÍA
    // =========================
    public function show(Category $category): Response
    {
        $category->load('products');

        return Inertia::render('Categories/Show', [
            'category' => $category,
        ]);
    }


    // =========================
    // FORMULARIO EDITAR
    // =========================
    public function edit(Category $category): Response
    {
        return Inertia::render('Categories/Edit', [
            'category' => $category,
        ]);
    }


    // =========================
    // ACTUALIZAR
    // =========================
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
            ],
        ]);

        $category->update([
            'name' => $request->name,
        ]);

        return redirect()
            ->route('categories.index')
            ->with('success', 'Categoría actualizada correctamente.');
    }


    // =========================
    // ELIMINAR
    // =========================
    public function destroy(Category $category)
    {
        $category->delete();

        return redirect()
            ->route('categories.index')
            ->with('success', 'Categoría eliminada correctamente.');
    }
}