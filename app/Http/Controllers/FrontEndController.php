<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontEndController extends Controller
{
    function index()
    {
        $courses = Course::all();
        return Inertia::render('Welcome', ['courses' => $courses]);
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
        $course = Course::where('slug', $slug)->firstOrFail();
        return Inertia::render('Public/CourseView/Index', [
            'slug' => $slug,
            "course" => $course
        ]);
    }
}
