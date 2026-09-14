<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            //CREAMOS LOS IDENTIFICADORES
            $table->id();
            //SE CREA UNA COLUMNA PARA EL NOMBRE DE LA COLUMNA
            $table->string('name');
            //NOS AYUDA A LA IDENTIFICACION DE SABER CUANDO SE CREO OTRA CATEGORIA LOS TIEMPOS
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};