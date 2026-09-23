<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">

    <title>Lista de Productos</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            margin: 30px;
        }

        h1 {
            text-align: center;
            margin-bottom: 10px;
        }

        .fecha {
            text-align: right;
            margin-bottom: 20px;
            font-size: 11px;
            color: #555;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            background-color: #eeeeee;
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }

        td {
            border: 1px solid #000;
            padding: 8px;
        }

        .sin-productos {
            text-align: center;
            padding: 20px;
        }
    </style>
</head>

<body>

    <h1>Lista de Productos</h1>

    <div class="fecha">
        Fecha de generación: {{ now()->format('d/m/Y H:i') }}
    </div>

    <table>

        <thead>
            <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Categoría</th>
            </tr>
        </thead>

        <tbody>

            @forelse ($products as $product)

                <tr>
                    <td>
                        {{ $product->id }}
                    </td>

                    <td>
                        {{ $product->name }}
                    </td>

                    <td>
                        {{ $product->description ?? '-' }}
                    </td>

                    <td>
                        {{ $product->stock }}
                    </td>

                    <td>
                        ${{ number_format($product->price, 2) }}
                    </td>

                    <td>
                        {{ $product->category->name ?? '-' }}
                    </td>
                </tr>

            @empty

                <tr>
                    <td colspan="6" class="sin-productos">
                        No hay productos registrados.
                    </td>
                </tr>

            @endforelse

        </tbody>

    </table>

</body>
</html>