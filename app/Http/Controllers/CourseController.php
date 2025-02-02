<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Course;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class CourseController extends Controller
{
    public function index() {
        $courses = Course::all();

        return Inertia::render("Dashboard/Course/Index", ["courses" => $courses]);
    }

    public function create() {
        return Inertia::render("Dashboard/Course/Create");
    }

    public function store(Request $request) {
        $request->validate([
            "title" => "required",
            "image" => "required",
            "description" => "required",
            "details" => "required",
            "studentCount" => "required",
            "courseFee" => "required",
            "courseDuration" => "required",
            "courseLecture" => "required",
            "courseProject" => "required",
            "courseCurriculum" => "required",
            "phone" => "required",
        ]);

        $course = new Course();
        $course->title = $request->title;
        $course->slug = Str::slug($request->title);
        $course->description = $request->description;
        $course->details = $request->details;
        $course->studentCount = $request->studentCount;
        $course->courseFee = $request->courseFee;
        $course->courseDuration = $request->courseDuration;
        $course->courseLecture = $request->courseLecture;
        $course->courseProject = $request->courseProject;
        $course->courseCurriculum = $request->courseCurriculum;
        $course->phone = $request->phone;

        
        if($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $imageName);

            $course->image = $imageName;
        }

        $course->save();

        return redirect()->route('course.index')->with('success', 'course added successfully');

    }

    public function edit($slug) {
        $course = Course::where('slug', $slug)->firstOrFail();
        return Inertia::render("Dashboard/Course/Edit", ['course' => $course]);
    }

    public function update(Request $request, $slug) {
        
        $request->validate([
            "title" => "required",
            "image" => "nullable",
            "description" => "required",
            "details" => "required",
            "studentCount" => "required",
            "courseFee" => "required",
            "courseDuration" => "required",
            "courseLecture" => "required",
            "courseProject" => "required",
            "courseCurriculum" => "required",
            "phone" => "required",
        ]);

        $course = Course::where('slug', $slug)->firstOrFail();
        $course->title = $request->title;
        $course->slug = Str::slug($request->title);
        $course->description = $request->description;
        $course->details = $request->details;
        $course->studentCount = $request->studentCount;
        $course->courseFee = $request->courseFee;
        $course->courseDuration = $request->courseDuration;
        $course->courseLecture = $request->courseLecture;
        $course->courseProject = $request->courseProject;
        $course->courseCurriculum = $request->courseCurriculum;
        $course->phone = $request->phone;

        
        if($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $imageName);

            $course->image = $imageName;
        } 


        $course->save();
        return redirect()->route('course.index')->with('success', 'course updated successfully');
    }

    public function delete($slug) {
        $course = Course::where('slug', $slug)->firstOrFail();

        $imagePath = public_path('uploads/' . $course->image);

        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }

        $course->delete();
    }
}
