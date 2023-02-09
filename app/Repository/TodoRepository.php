<?php


namespace App\Repository;


use App\Models\Todo;
use Illuminate\Pagination\Paginator;

class TodoRepository
{
    /**
     * Functions retrieves Todos.
     *
     * @return Paginator
     */
    public function get_all(): Paginator
    {
        return Todo::paginate();
    }
}
