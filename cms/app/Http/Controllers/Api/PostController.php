<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// postモデルをuseする
use App\Models\Post; 

class PostController extends Controller
{
    // postの一覧を表示する
    // post::all()でpostの一覧を取得してJSONを返す
    public function index()
    {
        $posts = Post::all();
        return response()->json($posts, 200);
    }
}
