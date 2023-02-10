<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'is_complete', 'image_path', 'image_name'
    ];

    protected $attributes = ['is_complete' => false];

    protected $casts = [
        'is_complete' => 'boolean'
    ];

    /**
     * Get the Todo's image_path.
     *
     * @return Attribute
     */
    protected function ImagePath(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => env('APP_URL').Storage::url($value),
        );
    }
}
