<?php


namespace App\Repository;


use App\Models\Todo;

class TodoRepository
{
    /**
     * Functions retrieves Todos.
     *
     * @return mixed
     */
    public function get_all()
    {
        return Todo::paginate();
    }

    /**
     * Function creates a App\Models\Todo in the database
     *
     * @param array $data
     * @return Todo
     */
    public function store(array $data): Todo
    {
        return Todo::create($data);
    }
}
