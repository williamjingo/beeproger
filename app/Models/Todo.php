<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
