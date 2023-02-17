<?php

namespace Tests\Feature;

use App\Models\Todo;
use Database\Seeders\TodoSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TodoTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    private string $apiEndPoint = '/api/todos';
    private array $payload = [
                'title' => 'first title',
                'description' => 'first description',
                'is_complete' => false,
            ];

    /**
     * Test resource can be retrieved
     */
    public function test_can_get_todos()
    {
        Todo::factory()->create();

        $response = $this->getJson($this->apiEndPoint);

        // assert 201
        $response->assertOk();
    }

    /**
     * Test resource can be updated
     */
    public function test_can_delete_todo()
    {
        $todo = Todo::factory()->create();

        $response = $this->deleteJson("$this->apiEndPoint/$todo->id");

        // assert 200
        $response->assertOk();

        // assert record is deleted
        $this->assertDatabaseCount('todos', 0);

        // assert create object matches payload array
        $response->assertJsonPath('data.title', $todo['title']);
        $response->assertJsonPath('data.description', $todo['description']);
    }

    /**
     * Test resource can be updated
     */
    public function test_can_update_todo()
    {
        $todo = Todo::factory()->create();

        $this->payload['title'] = "updated title";
        $this->payload['description'] = $todo->description;

        $response = $this->putJson("$this->apiEndPoint/$todo->id", $this->payload);

        // assert 200
        $response->assertOk();

        // assert create object matches payload array
        $response->assertJsonPath('data.title', $this->payload['title']);
        $response->assertJsonPath('data.description', $this->payload['description']);
    }

    /**
     * Test resource can be updated
     */
    public function test_can_fail_to_create_todo_with_invalid_params()
    {
        $this->payload['title'] = $this->faker->text(100);

        $response = $this->postJson($this->apiEndPoint, $this->payload);

        // assert 201
        $response->assertStatus(422);
        $response->assertJsonPath('message', 'The title must not be greater than 50 characters.');
    }

    /**
     * Test resource can be created
     */
    public function test_can_create_todos()
    {
        $response = $this->postJson($this->apiEndPoint, $this->payload);

        // assert 201
        $response->assertCreated();

        // assert record is created in the database
        $this->assertDatabaseCount('todos', 1);
    }
}
