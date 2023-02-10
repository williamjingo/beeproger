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
}
