<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\SuccessStory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontEndController extends Controller
{
    function index()
    {
        $stories = SuccessStory::all();
        $courses = Course::all();
        return Inertia::render('Welcome', ['courses' => $courses, "stories" => $stories]);
    }

    function about()
    {
        $stories = SuccessStory::all();
        return Inertia::render('Public/About/Index', ["stories" => $stories]);
    }

    function contact()
    {
        return Inertia::render('Public/Contact/Index');
    }   

    function courses()
    {
        $courses = Course::all();
        return Inertia::render('Public/Courses/Index', ["courses" => $courses]);
    }

    function success()
    {
        $stories = SuccessStory::all();
        return Inertia::render('Public/Success/Index', ["stories" => $stories]);
    }

    function courses_view($slug)
    {
        $course = Course::where('slug', $slug)->firstOrFail();
        $stories = SuccessStory::where('course_id', $course->id)->get();
        return Inertia::render('Public/CourseView/Index', [
            'slug' => $slug,
            "course" => $course,
            "stories" => $stories
        ]);
    }
}
