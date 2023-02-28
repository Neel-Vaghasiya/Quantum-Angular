interface DataObject {
    "total_classes" : Number,
    "courses" : 
        {
            "thumbnail": string,
            "title": string,
            "subject": string,
            "grade": Number,
            "grade_change": Number,
            "units": Number,
            "lessons": Number,
            "topics": Number,
            "classes": string[],
            "students": Number,
            "start_date": string,
            "end_date": string,
            "is_favourite": boolean,
            "is_Expired": boolean,
            "is_grade_submission": boolean,
            "is_manage_course": boolean
        }[]
}

interface CoursesObject  {
    "thumbnail": string,
    "title": string,
    "subject": string,
    "grade": Number,
    "grade_change": Number,
    "units": Number,
    "lessons": Number,
    "topics": Number,
    "classes": string[],
    "students": Number,
    "start_date": string,
    "end_date": string,
    "is_favourite": boolean,
    "is_Expired": boolean,
    "is_grade_submission": boolean,
    "is_manage_course": boolean
}

interface AlertObject {
    "notifications" : {
        "message": string,
        "course": string,
        "class": string,
        "date": string,
        "time": string,
        "isSeen": boolean
    }[]
}

interface AnnouncementObject {
    "pa": string,
    "message": string,
    "course": string,
    "attached_files": number,
    "date": string,
    "time": string,
    "isSeen": boolean
}

export { DataObject, CoursesObject, AlertObject, AnnouncementObject }