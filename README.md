 Student Enrollment Form — Micro Project

This project is a web-based Student Enrollment Form** built using HTML, CSS, and JavaScript. It interacts with a backend database (e.g., JsonPowerDB or a RESTful API) to store and manage student enrollment data.

 Features

Capture and store student information such as Roll No, Name, Class, etc.
 Implements Create (Save), Update, and Reset functionalities.
 Automatically detects if a Roll No exists:
   If not: Enables form for new data entry.
   If exists: Loads data for editing.
 All fields are validated (no empty inputs).
 Clean, intuitive UI with field-wise control and proper button states.
 Ideal for learning **JavaScript DOM manipulation**, **AJAX**, and **form handling**.


 Technologies Used

 HTML5 & CSS3
 JavaScript (Vanilla)
 [JsonPowerDB](https://login2explore.com/jpdb/docs.html) (or any RESTful backend)*


 Database Details

 Database Name: 'SCHOOL-DB'
 Relation (Table): 'STUDENT-TABLE'
 Primary Key: 'Roll-No'
Input Fields:
Roll-No
Full-Name
Class
Birth-Date
Address
Enrollment-Date
How It Works

1. On load, only the **Roll-No** field is enabled. All others and buttons are disabled.
2. After entering a Roll-No:
   - If **not found** in DB: Enables form for **new entry**. Shows `[Save]` and `[Reset]` buttons.
   - If **found**: Auto-fills form, enables editing, and shows `[Update]` and `[Reset]` buttons.
3. `[Save]` inserts a new record.
4. `[Update]` updates an existing record.
5. `[Reset]` clears and disables the form.m



1. Clone the repository:
   bash
   git clone https://github.com/KYoganandha01/student-enrollment-form.git
   cd student-enrollment-form
