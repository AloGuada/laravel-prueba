```blade
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">

    <title>Reporte de Categorías</title>

    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 12px;
            color: #333;
        }

        h1 {
            text-align: center;
            margin-bottom: 10px;
        }

        .fecha {
            text-align: right;
            font-size: 10px;
            color: #666;
            margin-bottom: 20px;
        }

        .categoria {
            margin-bottom: 25px;
        }

        .categoria-titulo {
            background-color: #e5e7eb;
            padding: 8px;
            font-size: 16px;
            font-weight: bold;
        }

        .categoria-info {
            margin: 5px 0 10px 0;
            color: #666;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            background-color: #f3f4f6;
            font-weight: bold;
        }

        th,
        td {
            border: 1px solid #d1d5db;
            padding: 7px;
            text-align: left;
        }

        .precio {
            text-align: right;
        }

        .stock {
            text-align: center;
        }

        .sin-productos {
            padding: 10px;
            text-align: center;
            color: #777;
            border: 1px solid #d1d5db;
        }

        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 10px;
            color: #777;
        }
    </style>
</head>

<body>

    <h1>Reporte de Categorías</h1>

    <div class="fecha">
        Fecha de generación: {{ now()->format('d/m/Y H:i') }}
    </div>


    @foreach ($categories as $category)

        <div class="categoria">

            {{-- NOMBRE DE LA CATEGORÍA --}}
            <div class="categoria-titulo">
                {{ $category->name }}
            </div>

            {{-- CANTIDAD DE PRODUCTOS --}}
            <div class="categoria-info">
                Total de productos:
                {{ $category->products->count() }}
            </div>


            {{-- PRODUCTOS --}}
            @if ($category->products->count() > 0)

                <table>

                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Stock</th>
                        </tr>
                    </thead>

                    <tbody>

                        @foreach ($category->products as $product)

                            <tr>

                                <td>
                                    {{ $product->name }}
                                </td>

                                <td class="precio">
                                    ${{ number_format($product->price, 2) }}
                                </td>

                                <td class="stock">
                                    {{ $product->stock }}
                                </td>

                            </tr>

                        @endforeach

                    </tbody>

                </table>

            @else

                <div class="sin-productos">
                    Esta categoría todavía no tiene productos.
                </div>

            @endif

        </div>

    @endforeach


    <div class="footer">
        Reporte generado desde el sistema de inventario
    </div>

</body>
</html>
```
