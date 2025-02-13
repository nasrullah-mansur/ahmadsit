<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function enroll() {
        return Inertia::render("Public/Enroll/Enroll");
    }

    public function all_student() {
        return Inertia::render('Dashboard/Student/Index');
    }
}
