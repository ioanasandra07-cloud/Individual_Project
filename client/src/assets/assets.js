import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'


export const assets = {
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

// ---------------------------------------------------------
// EDUCATOR
// ---------------------------------------------------------

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "Alex Carter",
    "email": "alex.carter.educator@example.com",
    "imageUrl": "https://img.clerk.com/educator_img_01",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
};

// ---------------------------------------------------------
// DASHBOARD DATA
// ---------------------------------------------------------

export const dummyDashboardData = {
    "totalEarnings": 707.38,
    "enrolledStudentsData": [
        {
            "courseTitle": "Introduction to JavaScript",
            "student": {
                "_id": "user_A12bzXP92ksL001aa",
                "name": "Liam Edwards",
                "imageUrl": "https://randomuser.me/api/portraits/men/32.jpg"
            }
        },
        {
            "courseTitle": "Advanced Python Programming",
            "student": {
                "_id": "user_B77opQW55klJ772bb",
                "name": "Nora Williams",
                "imageUrl": "https://randomuser.me/api/portraits/women/44.jpg"
            }
        },
        {
            "courseTitle": "Web Development Bootcamp",
            "student": {
                "_id": "user_C91lmRT20ppF188cc",
                "name": "Ethan Brooks",
                "imageUrl": "https://randomuser.me/api/portraits/men/68.jpg"
            }
        },
        {
            "courseTitle": "Data Science with Python",
            "student": {
                "_id": "user_D44qweMM72rtF552dd",
                "name": "Chloe Martinez",
                "imageUrl": "https://randomuser.me/api/portraits/women/65.jpg"
            }
        },
        {
            "courseTitle": "Cybersecurity Basics",
            "student": {
                "_id": "user_E09ptLA33zzW901ee",
                "name": "Owen Mitchell",
                "imageUrl": "https://randomuser.me/api/portraits/men/15.jpg"
            }
        }
    ],
    "totalCourses": 8
};

// ---------------------------------------------------------
// STUDENT ENROLLMENTS
// ---------------------------------------------------------

export const dummyStudentEnrolled = [
    {
        "student": {
            "_id": "user_A12bzXP92ksL001aa",
            "name": "Liam Edwards",
            "imageUrl": "https://randomuser.me/api/portraits/men/32.jpg"
        },
        "courseTitle": "Introduction to JavaScript",
        
    },
    {
        "student": {
            "_id": "user_B77opQW55klJ772bb",
            "name": "Nora Williams",
            "imageUrl": "https://randomuser.me/api/portraits/women/44.jpg"
        },
        "courseTitle": "Introduction to JavaScript",
        
    },
    {
        "student": {
            "_id": "user_C91lmRT20ppF188cc",
            "name": "Ethan Brooks",
            "imageUrl": "https://randomuser.me/api/portraits/men/68.jpg"
        },
        "courseTitle": "Advanced Python Programming",
        
    },
    {
        "student": {
            "_id": "user_D44qweMM72rtF552dd",
            "name": "Chloe Martinez",
            "imageUrl": "https://randomuser.me/api/portraits/women/65.jpg"
        },
        "courseTitle": "Web Development Bootcamp",
        
    }
];

// ---------------------------------------------------------
// ALL COURSES (NO PRICE, NO DISCOUNT)
// ---------------------------------------------------------

export const dummyCourses = [
    {
        "_id": "course_js101_001",
        "courseTitle": "Introduction to JavaScript",
        "courseDescription":
            "<h2>Learn JavaScript Fundamentals</h2><p>JavaScript powers modern websites...</p>",
        "isPublished": true,
        "courseContent": [
            {
                "chapterId": "js_ch1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started",
                "chapterContent": [
                    {
                        "lectureId": "js_lc1",
                        "lectureTitle": "What is JavaScript?",
                        "lectureDuration": 16,
                        "lectureUrl": "https://youtu.be/CBWnBi-awSA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "js_lc2",
                        "lectureTitle": "Environment Setup",
                        "lectureDuration": 19,
                        "lectureUrl": "https://youtu.be/4l87c2aeB4I",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_A12bzXP92ksL001aa",
            "user_B77opQW55klJ772bb",
            "user_D44qweMM72rtF552dd"
        ],
        "courseRatings": [
            {
                "userId": "user_B77opQW55klJ772bb",
                "rating": 5,
                "_id": "rate_js001"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 1,
        "courseThumbnail":
            "https://images.unsplash.com/photo-1587620962725-abab7fe55159"
    },

    {
        "_id": "course_py201_002",
        "courseTitle": "Advanced Python Programming",
        "courseDescription":
            "<h2>Deep Dive into Python</h2><p>Decorators, generators, advanced OOP...</p>",
        "isPublished": true,
        "courseContent": [
            {
                "chapterId": "py_ch1",
                "chapterOrder": 1,
                "chapterTitle": "Advanced Structures",
                "chapterContent": [
                    {
                        "lectureId": "py_lc1",
                        "lectureTitle": "Lists and Tuples",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "py_lc2",
                        "lectureTitle": "Dictionaries and Sets",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/HdLIMoQkXFA",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_C91lmRT20ppF188cc",
            "user_E09ptLA33zzW901ee"
        ],
        "courseRatings": [
            {
                "userId": "user_C91lmRT20ppF188cc",
                "rating": 5,
                "_id": "rate_py002"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:47:54.446Z",
        "__v": 1,
        "courseThumbnail":
            "https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg"
    },

    {
        "_id": "course_cy301_003",
        "courseTitle": "Cybersecurity Basics",
        "courseDescription":
            "<h2>Protect Systems and Networks</h2><p>Threats, vulnerabilities, secure coding...</p>",
        "isPublished": true,
        "courseContent": [],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_E09ptLA33zzW901ee",
            "user_A12bzXP92ksL001aa"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-27T11:30:00.000Z",
        "updatedAt": "2024-12-31T04:14:49.773Z",
        "__v": 1,
        "courseThumbnail":
            "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
    },

    {
        "_id": "course_web401_004",
        "courseTitle": "Web Development Bootcamp",
        "courseDescription":
            "<h2>Become a Full-Stack Developer</h2><p>HTML, CSS, JS, backend...</p>",
        "isPublished": true,
        "courseContent": [],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_D44qweMM72rtF552dd",
            "user_B77opQW55klJ772bb"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "__v": 1,
        "courseThumbnail":
            "https://images.unsplash.com/photo-1521790361543-f645cf042ec4"
    },

    {
        "_id": "course_cloud501_005",
        "courseTitle": "Cloud Computing Essentials",
        "courseDescription":
            "<h2>Master Cloud Infrastructure</h2><p>AWS, Azure, GCP basics...</p>",
        "isPublished": true,
        "courseContent": [],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_C91lmRT20ppF188cc"],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:32:55.357Z",
        "__v": 1,
        "courseThumbnail":
            "https://images.unsplash.com/photo-1493217465235-252dd9c0d632"
    },

    {
        "_id": "course_ds601_006",
        "courseTitle": "Data Science with Python",
        "courseDescription":
            "<h2>Start Your Data Science Journey</h2>",
        "isPublished": true,
        "courseContent": [],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_C91lmRT20ppF188cc",
            "user_A12bzXP92ksL001aa",
            "user_D44qweMM72rtF552dd"
        ],
        "courseRatings": [
            {
                "userId": "user_D44qweMM72rtF552dd",
                "rating": 5,
                "_id": "rate_ds006"
            }
        ],
        "createdAt": "2024-12-27T10:00:00.000Z",
        "updatedAt": "2024-12-31T09:57:48.992Z",
        "__v": 1,
        "courseThumbnail":
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
    },

    {
        "_id": "course_ml701_007",
        "courseTitle": "Data Science and Machine Learning",
        "courseDescription":
            "<h2>Unlock Machine Learning Capabilities</h2>",
        "isPublished": true,
        "courseContent": [],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_E09ptLA33zzW901ee"],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:53:59.753Z",
        "__v": 1,
        "courseThumbnail":
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
    },

    {
        "_id": "course_cy802_008",
        "courseTitle": "Introduction to Cybersecurity",
        "courseDescription":
            "<h2>Protect the Digital World</h2>",
        "isPublished": true,
        "courseContent": [],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_B77opQW55klJ772bb"],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail":
            "https://images.unsplash.com/photo-1556157382-97eda2d62296"
    }
];
