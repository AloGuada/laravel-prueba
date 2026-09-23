<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use App\Models\Category;
use Barryvdh\DomPDF\Facade\Pdf;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    // =========================
    // VER TODOS LOS PRODUCTOS
    // =========================
    public function index(): Response
    {
        $products = Product::with('category')
            ->latest()
            ->get();

        return Inertia::render('Products/Index', [
            'products' => $products,
        ]);
    }


    // =========================
    // EXPORTAR PRODUCTOS A PDF
    // =========================
    public function pdf()
    {
        $products = Product::with('category')
            ->latest()
            ->get();

        $pdf = Pdf::loadView('products.pdf', [
            'products' => $products,
        ]);

        return $pdf->download('productos.pdf');
    }


    // =========================
    // MOSTRAR FORMULARIO CREAR
    // =========================
    public function create(): Response
    {
        $categories = Category::all();

        return Inertia::render('Products/Create', [
            'categories' => $categories,
        ]);
    }


    // =========================
    // GUARDAR PRODUCTO
    // =========================
    public function store(StoreProductRequest $request)
    {
        Product::create($request->validated());

        return redirect()
            ->route('products.index')
            ->with('success', 'Producto registrado correctamente.');
    }


    // =========================
    // MOSTRAR FORMULARIO EDITAR
    // =========================
    public function edit(Product $product): Response
    {
        $categories = Category::all();

        return Inertia::render('Products/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }


    // =========================
    // ACTUALIZAR PRODUCTO
    // =========================
    public function update(StoreProductRequest $request, Product $product)
    {
        $product->update($request->validated());

        return redirect()
            ->route('products.index')
            ->with('success', 'Producto actualizado correctamente.');
    }


    // =========================
    // VER DETALLES
    // =========================
    public function show(Product $product): Response
    {
        $product->load('category');

        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }


    // =========================
    // BORRAR PRODUCTO
    // =========================
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()
            ->route('products.index')
            ->with('success', 'Producto eliminado correctamente.');
    }
}