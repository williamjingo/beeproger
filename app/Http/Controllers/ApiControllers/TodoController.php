<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use App\Http\Resources\TodoResource;
use App\Models\Todo;
use App\Repository\TodoRepository;
use Illuminate\Http\Resources\Json\JsonResource;

class TodoController extends Controller
{

    /**
     * @var TodoRepository
     */
    private TodoRepository $todoRepository;

    public function __construct(TodoRepository $todoRepository)
    {
        $this->todoRepository = $todoRepository;
    }

    /**
     * Returns a listing of the Todos.
     *
     * @return JsonResource
     */
    public function index(): JsonResource
    {
        return TodoResource::collection($this->todoRepository->get_all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreTodoRequest $request
     * @return TodoResource
     */
    public function store(StoreTodoRequest $request)
    {
        // get validated request params
        $data = $request->validated();

        // save
        $todo = $this->todoRepository->store($data);

        // return created todos
        return new TodoResource($todo);
    }

    /**
     * Retrieves the specified resource.
     *
     * @param Todo $todo
     * @return TodoResource
     */
    public function show(Todo $todo): TodoResource
    {
        return new TodoResource($todo);
    }

    /**
     * Update the specified resource.
     *
     * @param UpdateTodoRequest $request
     * @param Todo $todo
     * @return TodoResource
     */
    public function update(UpdateTodoRequest $request, Todo $todo)
    {
        // get validated request params
        $data = $request->validated();

        // update
        $todo = $this->todoRepository->update($todo, $data);

        // return updated resource
        return new TodoResource($todo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Todo $todo
     * @return TodoResource
     */
    public function destroy(Todo $todo)
    {
        return new TodoResource($this->todoRepository->destroy($todo));
    }
}
