<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Student;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function enroll() {
        $courses = Course::all();
        return Inertia::render("Public/Enroll/Enroll", ["courses" => $courses]);
    }

    public function all_student() {
       $students = Student::with('course')->orderBy('created_at', "DESC")->paginate(10);
        return Inertia::render('Dashboard/Student/Index', ["students" => $students]);
    }

    public function delete($id) {
        $student = Student::find($id);
        $student->delete();
        return redirect()->route('all.student');
    }
}
