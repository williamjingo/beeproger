<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTodoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title' => 'required|unique:todos|max:50',
            'description' => 'required|max:255',
            'is_complete' => 'boolean',
            'image' => 'image|max:1024|mimes:jpg,png,jpeg'
        ];
    }
}

//jpg, jpeg, png
