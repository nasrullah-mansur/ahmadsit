<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Mpdf\Mpdf;

class PDFController extends Controller
{
    public function vorti_pdf($id)
    {
        $student = Student::where('id', $id)->with('course')->firstOrFail();

        $defaultConfig = (new \Mpdf\Config\ConfigVariables())->getDefaults();
        $fontDirs = $defaultConfig['fontDir'];

        $defaultFontConfig = (new \Mpdf\Config\FontVariables())->getDefaults();
        $fontData = $defaultFontConfig['fontdata'];

        $mpdf = new \Mpdf\Mpdf([
            'default_font_size' => 12,
            'fontDir' => array_merge($fontDirs, [
                public_path('font'),
            ]),
            'fontdata' => $fontData + [
                'kalpurush' => [
                    'R' => 'Kalpurush.ttf',
                    'useOTL' => true,
                    'useKashida' => true,
                ],
            ],
            'default_font' => 'kalpurush',
            'format' => 'A5',
            'margin_left' => 10,
            'margin_right' => 10,
            'margin_top' => 12,
            'margin_bottom' => 12,
            'autoScriptToLang' => true,
            'autoLangToFont' => true,
        ]);

        $html = view('pdf.vorti', compact('student'))->render();
        $mpdf->WriteHTML($html);

        $fileName = $student->transaction_id;
        $mpdf->SetTitle($fileName);

        return $mpdf->OutputHttpDownload($fileName . '.pdf');
    }

}
