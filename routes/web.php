<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware(['auth', 'verified'])->group(function () {

    // =========================
    // DASHBOARD
    // =========================

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');


    // =========================
    // PRODUCTOS
    // =========================

    // VER TODOS LOS PRODUCTOS
    Route::get('/products', [ProductController::class, 'index'])
        ->name('products.index');

    // CREAR PRODUCTO
    Route::get('/products/create', [ProductController::class, 'create'])
        ->name('products.create');

    // GUARDAR PRODUCTO
    Route::post('/products', [ProductController::class, 'store'])
        ->name('products.store');

    // EDITAR PRODUCTO
    Route::get('/products/{product}/edit', [ProductController::class, 'edit'])
        ->name('products.edit');

    // ACTUALIZAR PRODUCTO
    Route::put('/products/{product}', [ProductController::class, 'update'])
        ->name('products.update');

    // VER DETALLES DEL PRODUCTO
    Route::get('/products/{product}', [ProductController::class, 'show'])
        ->name('products.show');

    // BORRAR PRODUCTO
    Route::delete('/products/{product}', [ProductController::class, 'destroy'])
        ->name('products.destroy');


    // =========================
    // CATEGORÍAS
    // =========================

    // VER TODAS LAS CATEGORÍAS
    Route::get('/categories', [CategoryController::class, 'index'])
        ->name('categories.index');

    // EXPORTAR CATEGORÍAS A PDF
    Route::get('/categories/pdf', [CategoryController::class, 'pdf'])
        ->name('categories.pdf');

    // CREAR CATEGORÍA
    Route::get('/categories/create', [CategoryController::class, 'create'])
        ->name('categories.create');

    // GUARDAR CATEGORÍA
    Route::post('/categories', [CategoryController::class, 'store'])
        ->name('categories.store');

    // EDITAR CATEGORÍA
    Route::get('/categories/{category}/edit', [CategoryController::class, 'edit'])
        ->name('categories.edit');

    // ACTUALIZAR CATEGORÍA
    Route::put('/categories/{category}', [CategoryController::class, 'update'])
        ->name('categories.update');

    // ELIMINAR CATEGORÍA
    Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])
        ->name('categories.destroy');

});


Route::middleware('auth')->group(function () {

    // =========================
    // PERFIL
    // =========================

    Route::get('/profile', [ProfileController::class, 'edit'])
        ->name('profile.edit');

    Route::patch('/profile', [ProfileController::class, 'update'])
        ->name('profile.update');

    Route::delete('/profile', [ProfileController::class, 'destroy'])
        ->name('profile.destroy');

});


require __DIR__.'/auth.php';