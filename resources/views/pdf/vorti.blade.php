<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enrollment Information</title>
    <style>
        body {
            font-family: kalpurush, sans-serif;
            margin: 40px;
            padding: 20px;
            border: 2px solid #333;
            background-color: #f8f9fa;
        }
        h1 {
            text-align: center;
            color: #2c3e50;
            font-size: 28px;
            margin-bottom: 10px;
        }
        p {
            text-align: center;
            font-size: 18px;
            color: #555;
            margin-bottom: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #2c3e50;
            color: #fff;
            font-size: 16px;
        }
        tr:nth-child(even) {
            background-color: #f4f4f4;
        }
        .footer {
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            margin-top: 30px;
            color: #2c3e50;
        }
    </style>
</head>
<body>
    <h1>Enrollment Information</h1>
    <p>Thank you for enrolling in our course. Your details are below:</p>
    <table>
        <tr>
            <th>Field</th>
            <th>Details</th>
        </tr>
        <tr>
            <td>Name</td>
            <td>{{ $student->name }}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>{{ $student->email }}</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>{{ $student->phone }}</td>
        </tr>
        <tr>
            <td>Course Fee</td>
            <td>{{ $student->amount }}</td>
        </tr>
        <tr>
            <td>Course Name</td>
            <td>{{ $student->course->title }}</td>
        </tr>
        <tr>
            <td>Transaction ID</td>
            <td>{{ $student->transaction_id }}</td>
        </tr>
    </table>
    <p class="footer">Ahmad's IT Institute</p>
</body>
</html>
