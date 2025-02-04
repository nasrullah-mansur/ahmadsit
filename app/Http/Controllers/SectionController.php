<?php

namespace App\Http\Controllers;

use App\Models\BannerSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectionController extends Controller
{
    public function banner_edit() {
        $banner = BannerSection::first();

        return Inertia::render('Dashboard/Section/Banner', ["banner" => $banner]); 
    }

    public function banner_updated(Request $request) {
        
        $request->validate([
            'subtitle' => "required",
            'title' => "required",
            'details' => "required",
            'iframe' => "required"
        ]);

        $check_exist = BannerSection::first();

        if($check_exist) {
            $banner = $check_exist;
        } else {
            $banner = new BannerSection();
        }

        if($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $imageName);

            $banner->image = $imageName;
        } 

        $banner->subtitle = $request->subtitle;
        $banner->title = $request->title;
        $banner->details = $request->details;
        $banner->iframe = $request->iframe;
        $banner->save();

        return redirect()->route("banner.edit");
    }
}
