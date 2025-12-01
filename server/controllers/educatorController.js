import { clerkClient} from '@clerk/express'
import Course from '../models/Course.js'
import { v2 as cloudinary } from 'cloudinary'

//update role to educator
export const updateRoleToEducator = async(req, res)=>{
    try {
        const userId = req.auth.userId
        
        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata:{
                role: 'educator',
            }
        })

        res.json({ succes: true, message: 'You can publish a course now' })
        
    } catch (error) {
        res.json({ succes: false, message: error.message })
    }
}

// Add New Course
export const addCourse = async (req, res)=>{
    try {
        const { courseData } = req.body
        const imageFile = req.file
        const educatorId = req.auth.userId

        if(!imageFile){
            return res.json({ succes: false, message: 'Thumbnail Not Attached' })
        }

        const parsedCourseData = await JSON.parse(courseData)
        parsedCourseData.educator = educatorId
        const newCourse = await Course.create(parsedCourseData)
        const imageUpload = await cloudinary.uploader.upload(imageFile.path)
        newCourse.courseThumbnail = imageUpload.secure_url
        await newCourse.save()

        res.json({ succes: true, message: 'Course Added' })

    } catch (error) {
        res.json({ succes: false, message: error.message })
    }
}

//Get Educator Courses
export const getEducatorCourses = async (req, res)=>{
    try {
        const educator = req.auth.userId

        const courses = await Course.find({educator})
        res.json({ succes: true, courses })
    } catch (error) {
        res.json({ succes: false, message: error.message })
    }
}

//Get Educator Dashboard Data
export const educatorDashboardData = async () => {
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({ educator });
        const totalCourses = courses.length;

        const courseIds = courses.map(course => course._id);

// collect unique enrolled student IDs with their course titles
const enrolledStudentsData = [];
for(const course of courses){
    const students = await User.find({
        _id: { $in: course.enrolledStudents }
    }, 'name imageUrl');

    students.forEach(student => {
        enrolledStudentsData.push({
            courseTitle: course.courseTitle,
            student
        });
    });
}


res.json({success: true, dashboardData: {
    enrolledStudentsData, totalCourses
}})

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Get Enrolled Students Data
export const getEnrolledStudentsData = async (req, res) => {
    try {
        const educator = req.auth.userId;
        const courses = await Course.find({ educator });
        const courseIds = courses.map(course => course._id);

        const enrolledStudents = [];

        for (const course of courses) {
            // find all students by their IDs
            const students = await User.find(
                { _id: { $in: course.enrolledStudents } },
                'name imageUrl'
            );

           
            students.forEach(student => {
                enrolledStudents.push({
                    courseId: course._id,
                    courseTitle: course.courseTitle,
                    student
                });
            });
        }

        return res.json({
            success: true,
            enrolledStudents
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Failed to load enrolled students data."
        });
    }
};


