<?php


namespace App\Repository;


use App\Services\ImageService;
use App\Models\Todo;
use Illuminate\Support\Arr;

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


}
