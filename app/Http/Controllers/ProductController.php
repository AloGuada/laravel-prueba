<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    // =========================
    // VER TODOS LOS PRODUCTOS
    // =========================
    public function index(): Response
    {
        // Traer datos desde la tabla products
        $products = Product::latest()->get();

        return Inertia::render('Products/Index', [
            'products' => $products,
        ]);
    }


    // =========================
    // MOSTRAR FORMULARIO CREAR
    // =========================
    public function create(): Response
    {
        // Obtener todas las categorías
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
        // Obtener todas las categorías
        $categories = Category::all();

        return Inertia::render('Products/Edit', [
            'product' => $product,
            'categories' => $categories,
        ]);
    }


    // =========================
    // ACTUALIZAR PRODUCTO EDITAR
    // =========================
    public function update(StoreProductRequest $request, Product $product)
    {
        // Modificar el producto en la base de datos
        $product->update($request->validated());

        // Regresar a la página de productos
        return redirect()
            ->route('products.index')
            ->with('success', 'Producto actualizado correctamente.');
    }


    // =========================
    // VER DETALLES
    // =========================
    public function show(Product $product): Response
    {
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