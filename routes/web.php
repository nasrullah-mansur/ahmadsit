<?php

use App\Http\Controllers\CourseController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FrontEndController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\SuccessStoryController;
use App\Http\Controllers\TeacherController;

Route::get('/', [FrontEndController::class, 'index'])->name('home');
Route::get('/about', [FrontEndController::class, 'about'])->name('about');
Route::get('/contact', [FrontEndController::class, 'contact'])->name('contact');
Route::get('/success', [FrontEndController::class, 'success'])->name('success');
Route::get('/courses', [FrontEndController::class, 'courses'])->name('courses');
Route::get('/courses/{slug}', [FrontEndController::class, 'courses_view'])->name('courses.view');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('admin')->group(function() {
        // Courses;
        Route::get('/courses', [CourseController::class, 'index'])->name('course.index');
        Route::get('/courses/create', [CourseController::class, 'create'])->name('course.create');
        Route::post('/courses/store', [CourseController::class, 'store'])->name('course.store');
        Route::get('/courses/edit/{slug}', [CourseController::class, 'edit'])->name('course.edit');
        Route::post('/courses/update/{slug}', [CourseController::class, 'update'])->name('course.update');
        Route::get('/courses/delete/{slug}', [CourseController::class, 'delete'])->name('course.delete');

        // Success;
        Route::get('/success-story', [SuccessStoryController::class, 'index'])->name('success.story.index');
        Route::get('/success-story/create', [SuccessStoryController::class, 'create'])->name('success.story.create');
        Route::post('/success-story/store', [SuccessStoryController::class, 'store'])->name('success.story.store');
        Route::get('/success-story/edit/{id}', [SuccessStoryController::class, 'edit'])->name('success.story.edit');
        Route::post('/success-story/update/{id}', [SuccessStoryController::class, 'update'])->name('success.story.update');
        Route::get('/success-story/delete/{id}', [SuccessStoryController::class, 'delete'])->name('success.story.delete');

        // Teacher;
        Route::get('/teachers', [TeacherController::class, 'index'])->name('teacher.index');
        Route::get('/teachers/create', [TeacherController::class, 'create'])->name('teacher.create');
        Route::post('/teachers/store', [TeacherController::class, 'store'])->name('teacher.store');
        Route::get('/teachers/edit/{id}', [TeacherController::class, 'edit'])->name('teacher.edit');
        Route::post('/teachers/update/{id}', [TeacherController::class, 'update'])->name('teacher.update');
        Route::get('/teachers/delete/{id}', [TeacherController::class, 'delete'])->name('teacher.delete');

        // Sections;
        Route::get('banner-section/edit', [SectionController::class, 'banner_edit'])->name('banner.edit');
        Route::post('banner-section/update', [SectionController::class, 'banner_updated'])->name('banner.update');
    });
});

require __DIR__.'/auth.php';
