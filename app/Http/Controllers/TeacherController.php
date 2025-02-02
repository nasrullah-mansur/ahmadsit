<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class TeacherController extends Controller
{
    public function index() {
        $teachers = Teacher::all();
        return Inertia::render('Dashboard/Teacher/Index', ["teachers" => $teachers]);
    }
    public function create() {
        return Inertia::render('Dashboard/Teacher/Create');
    }
    public function store(Request $request) {
        $request->validate([
            "name" => "required",
            "title" => "required",
            "details" => "required",
            "image" => "required|mimes:png,jpg"
        ]);

        $teacher = new Teacher();
        $teacher->name = $request->name;
        $teacher->title = $request->title;
        $teacher->details = $request->details;

        if($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $imageName);

            $teacher->image = $imageName;
        } 

        $teacher->save();

        return redirect()->route('teacher.index')->with('success', 'teacher added successfully');
    }
    public function edit($id) {
        $teacher = Teacher::where('id', $id)->firstOrFail();
        return Inertia::render('Dashboard/Teacher/Edit', ["teacher" => $teacher]);
    }
    public function update(Request $request, $id) {
        $request->validate([
            "name" => "required",
            "title" => "required",
            "details" => "required",
            "image" => "required|mimes:png,jpg"
        ]);

        $teacher = Teacher::where('id', $id)->firstOrFail();
        $teacher->name = $request->name;
        $teacher->title = $request->title;
        $teacher->details = $request->details;

        if($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $imageName);

            $teacher->image = $imageName;
        } 

        $teacher->save();

        return redirect()->route('teacher.index')->with('success', 'teacher updated successfully');
    }
    public function delete($id) {
        $teacher = Teacher::where('id', $id)->firstOrFail();

        $imagePath = public_path('uploads/' . $teacher->image);

        if (File::exists($imagePath)) {
            File::delete($imagePath);
        }

        $teacher->delete();
    }
   
}
