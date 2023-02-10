<?php


namespace App\Repository;


use App\Services\ImageService;
use App\Models\Todo;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class TodoRepository
{
    /**
     * Functions retrieves Todos.
     *
     * @return mixed
     */
    public function get_all()
    {
        return Todo::orderBy('id', 'desc')->paginate();
    }

    /**
     * Function creates a App\Models\Todo in the database
     *
     * @param array $data
     * @return Todo
     */
    public function store(array $data): Todo
    {
        if($data['image']) {

            $file_chars = (new ImageService())->upload('image');

            // merge image path and name to $data
            $data = Arr::except([...$data, ...$file_chars], ['image']);
        }

        return Todo::create($data);
    }

    /**
     * Function creates a App\Models\Todo in the database
     *
     * @param array $data
     * @return Todo
     */
    public function update(Todo $todo ,array $data): Todo
    {
        if($data['image']) {
            $imageService = new ImageService();

            $file_chars = $imageService->upload('image');

            // merge image path and name to $data
            $data = Arr::except([...$data, ...$file_chars], ['image']);

            // drop image at path if exists
            if($todo->image_path && Storage::exists($todo->image_path)) Storage::delete($todo->image_path);
        }

        return tap($todo)->update($data);
    }
}
//8chyoBcIm0DI2EOHqi2fIkz9tnWB4x78STCnxoSL.png
