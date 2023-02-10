<?php


namespace App\Services;


use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class ImageService
{

    /**
     * Function uploads a file from a network request
     *
     * @param string $file_name
     * @return array
     */
    public function upload(string $file_name): array
    {
        // create dir if not exists
        if (!Arr::exists(Storage::directories("public"), "images")) {
            Storage::makeDirectory("public/images");
        }

        // pick image from request object
        $file_object = request()->file($file_name);
        $file_path = $file_object->store('public/images');
        $file_name = $file_object->getClientOriginalName();

        return ['image_path' => $file_path, 'image_name' => $file_name];
    }
}
