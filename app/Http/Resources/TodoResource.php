<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TodoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'is_complete' => $this->is_complete,
            'image' =>
                $this->when(
                    $this->image_name,
                    [
                        'path' => $this->image_path,
                        'name' => $this->image_name
                    ]
                )

        ];
    }
}
