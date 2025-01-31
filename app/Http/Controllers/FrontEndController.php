<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontEndController extends Controller
{
    function index()
    {
        return Inertia::render('Welcome');
    }

    function about()
    {
        return Inertia::render('Public/About/Index');
    }

    function contact()
    {
        return Inertia::render('Public/Contact/Index');
    }   

    function courses()
    {
        return Inertia::render('Public/Courses/Index');
    }

    function success()
    {
        return Inertia::render('Public/Success/Index');
    }

    function courses_view($slug)
    {
        return Inertia::render('Public/CourseView/Index', [
            'slug' => $slug
        ]);
    }
}
