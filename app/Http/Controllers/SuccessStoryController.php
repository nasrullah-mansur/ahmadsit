<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Course;
use App\Models\SuccessStory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class SuccessStoryController extends Controller
{
    public function index() {
        $stories = SuccessStory::all();
        return Inertia::render('Dashboard/SuccessStory/Index', ["stories" => $stories]);
    }

    public function create() {
        $courses = Course::all();
        return Inertia::render('Dashboard/SuccessStory/Create', ["courses" => $courses]);
    }

    public function store(Request $request) {
        $request->validate([
            "iframe" => "required",
            'image' => "required|mimes:png,jpg",
            'course_id' => "required|numeric"
        ]);

        $success = new SuccessStory();
        $success->iframe = $request->iframe;
        $success->course_id = $request->course_id;

        if($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $imageName);

            $success->image = $imageName;
        } 

        $success->save();

        return redirect()->route('success.story.index')->with('success', 'Success Story added successfully');

    }

    public function edit($id) {
        $success = SuccessStory::where('id', $id)->firstOrFail();
        $courses = Course::all();
        return Inertia::render('Dashboard/SuccessStory/Edit', ["courses" => $courses, "success" => $success]);
    }

    public function update(Request $request, $id) {
        $request->validate([
            "iframe" => "required",
            'image' => "nullable|mimes:png,jpg",
            'course_id' => "required|numeric"
        ]);

        $success = SuccessStory::where('id', $id)->firstOrFail();
        $success->iframe = $request->iframe;
        $success->course_id = $request->course_id;

        if($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $imageName);

            $success->image = $imageName;
        } 

        $success->save();

        return redirect()->route('success.story.index')->with('success', 'Success Story updated successfully');

    }

    public function delete($id) {
        $story = SuccessStory::where('id', $id)->firstOrFail();

        $imagePath = public_path('uploads/' . $story->image);

        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }

        $story->delete();
    }
}
