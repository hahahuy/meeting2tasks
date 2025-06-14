// Kết nối tới database meeting2tasks
db = db.getSiblingDB("meeting2tasks");

// Xóa dữ liệu cũ
db.users.drop();
db.projects.drop();
db.project_members.drop();
db.sprints.drop();
db.milestones.drop();
db.tasks.drop();
db.chat_sessions.drop();
db.chat_history.drop();

var usersData = [
  {
    "_id": ObjectId("6818ca58141f65cabbb62285"),
    "id": 1,
    "name": "Nguyen Minh An",
    "role": "Designer",
    "avatar": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    "created_at": new Date("2024-02-15T00:00:00.000Z")
  },
  {
    "_id": ObjectId("6818ca58141f65cabbb62286"),
    "id": 2,
    "name": "Tran Thi Bich",
    "role": "Designer",
    "avatar": "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    "created_at": new Date("2024-02-20T00:00:00.000Z")
  },
  {
    "_id": ObjectId("6818ca58141f65cabbb62287"),
    "id": 3,
    "name": "Le Van Cuong",
    "role": "Frontend Developer",
    "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    "created_at": new Date("2024-03-10T00:00:00.000Z")
  },
  {
    "_id": ObjectId("6818ca58141f65cabbb62288"),
    "id": 4,
    "name": "Pham Thi Dung",
    "role": "Backend Developer",
    "avatar": "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    "created_at": new Date("2024-03-15T00:00:00.000Z")
  },
  {
    "_id": ObjectId("6818ca58141f65cabbb62289"),
    "id": 5,
    "name": "Hoang Van Em",
    "role": "Tester",
    "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    "created_at": new Date("2024-04-01T00:00:00.000Z")
  },
  {
    "_id": ObjectId("6818ca58141f65cabbb6228a"),
    "id": 6,
    "name": "Do Thi Phuong",
    "role": "Project Manager",
    "avatar": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    "created_at": new Date("2024-02-10T00:00:00.000Z")
  },
  {
    "_id": ObjectId("6818ca58141f65cabbb6228b"),
    "id": 7,
    "name": "Vu Van Giang",
    "role": "Security Engineer",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    "created_at": new Date("2024-03-05T00:00:00.000Z")
  },
  {
    "_id": ObjectId("6818ca58141f65cabbb6228c"),
    "id": 8,
    "name": "Ly Thi Hong",
    "role": "Researcher",
    "avatar": "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
    "created_at": new Date("2024-02-25T00:00:00.000Z")
  }
];

var sprintsData = [{
  "_id": ObjectId("6818caaa141f65cabbb622a5"),
  "id": 1,
  "project_id": 1,
  "name": "Sprint 1 - Core Task Management",
  "description": "Sprint 1 focused on building the core task creation and assignment functionality for the Task Management System.",
  "start_date": new Date("2024-04-01T00:00:00.000Z"),
  "end_date": new Date("2024-04-15T00:00:00.000Z")
},
{
  "_id": ObjectId("6818caaa141f65cabbb622a6"),
  "id": 2,
  "project_id": 1,
  "name": "Sprint 2 - User Interface Enhancement",
  "description": "Sprint 2 focused on designing a user-friendly interface for task visualization and management.",
  "start_date": new Date("2024-04-16T00:00:00.000Z"),
  "end_date": new Date("2024-04-30T00:00:00.000Z")
},
{
  "_id": ObjectId("6818caaa141f65cabbb622a7"),
  "id": 3,
  "project_id": 1,
  "name": "Sprint 3 - Bug Fixes and Optimization",
  "description": "Sprint 3 focused on fixing critical bugs and optimizing performance for better user experience.",
  "start_date": new Date("2024-05-01T00:00:00.000Z"),
  "end_date": new Date("2024-05-15T00:00:00.000Z")
},
{
  "_id": ObjectId("6818caaa141f65cabbb622a8"),
  "id": 4,
  "project_id": 1,
  "name": "Sprint 4 - Security and Final Delivery",
  "description": "Sprint 4 focused on enhancing security measures and finalizing the Task Management System for delivery.",
  "start_date": new Date("2024-05-16T00:00:00.000Z"),
  "end_date": new Date("2024-06-30T00:00:00.000Z")
},
{
  "_id": ObjectId("6818caaa141f65cabbb622a9"),
  "id": 5,
  "project_id": 2,
  "name": "Sprint 1 - Data Ingestion Pipeline",
  "description": "Sprint 1 focused on building the data ingestion pipeline for the Data Analytics Platform.",
  "start_date": new Date("2024-03-01T00:00:00.000Z"),
  "end_date": new Date("2024-03-15T00:00:00.000Z")
},
{
  "_id": ObjectId("6818caaa141f65cabbb622aa"),
  "id": 6,
  "project_id": 2,
  "name": "Sprint 2 - Analytics Dashboard",
  "description": "Sprint 2 focused on developing an analytics dashboard for visualizing data insights.",
  "start_date": new Date("2024-03-16T00:00:00.000Z"),
  "end_date": new Date("2024-03-30T00:00:00.000Z")
},
{
  "_id": ObjectId("6818caaa141f65cabbb622ab"),
  "id": 7,
  "project_id": 2,
  "name": "Sprint 3 - Machine Learning Integration",
  "description": "Sprint 3 focused on integrating machine learning models for predictive analytics.",
  "start_date": new Date("2024-04-01T00:00:00.000Z"),
  "end_date": new Date("2024-04-15T00:00:00.000Z")
},
{
  "_id": ObjectId("6818caaa141f65cabbb622ac"),
  "id": 8,
  "project_id": 2,
  "name": "Sprint 4 - Scalability and Delivery",
  "description": "Sprint 4 focused on improving scalability and delivering the Data Analytics Platform.",
  "start_date": new Date("2024-04-16T00:00:00.000Z"),
  "end_date": new Date("2024-07-15T00:00:00.000Z")
}];

var projectsData = [{
  "_id": ObjectId("6818ca72141f65cabbb6228f"),
  "id": 1,
  "name": "E-commerce Platform Redesign",
  "description": "A comprehensive redesign of an existing e-commerce platform to improve user experience, optimize performance, and enhance security.",
  "created_at": new Date("2024-03-01T00:00:00.000Z"),
  "start_date": new Date("2024-04-01T00:00:00.000Z"),
  "end_date": new Date("2024-06-30T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca72141f65cabbb62290"),
  "id": 2,
  "name": "Healthcare Patient Portal",
  "description": "Development of a secure patient portal for a healthcare provider, featuring appointment scheduling and medical record access.",
  "created_at": new Date("2024-02-15T00:00:00.000Z"),
  "start_date": new Date("2024-03-01T00:00:00.000Z"),
  "end_date": new Date("2024-07-15T00:00:00.000Z")
}];

var projectMembersData = [{
  "_id": ObjectId("6818ca8f141f65cabbb62293"),
  "user_id": 1,
  "project_id": 1,
  "joined_at": new Date("2024-04-05T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb62294"),
  "user_id": 2,
  "project_id": 1,
  "joined_at": new Date("2024-04-06T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb62295"),
  "user_id": 3,
  "project_id": 1,
  "joined_at": new Date("2024-04-07T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb62296"),
  "user_id": 4,
  "project_id": 1,
  "joined_at": new Date("2024-04-08T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb62297"),
  "user_id": 5,
  "project_id": 1,
  "joined_at": new Date("2024-04-09T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb62298"),
  "user_id": 6,
  "project_id": 1,
  "joined_at": new Date("2024-04-10T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb62299"),
  "user_id": 7,
  "project_id": 1,
  "joined_at": new Date("2024-04-11T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb6229a"),
  "user_id": 8,
  "project_id": 1,
  "joined_at": new Date("2024-04-12T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb6229b"),
  "user_id": 1,
  "project_id": 2,
  "joined_at": new Date("2024-03-05T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb6229c"),
  "user_id": 2,
  "project_id": 2,
  "joined_at": new Date("2024-03-06T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb6229d"),
  "user_id": 3,
  "project_id": 2,
  "joined_at": new Date("2024-03-07T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb6229e"),
  "user_id": 4,
  "project_id": 2,
  "joined_at": new Date("2024-03-08T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb6229f"),
  "user_id": 5,
  "project_id": 2,
  "joined_at": new Date("2024-03-09T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb622a0"),
  "user_id": 6,
  "project_id": 2,
  "joined_at": new Date("2024-03-10T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb622a1"),
  "user_id": 7,
  "project_id": 2,
  "joined_at": new Date("2024-03-11T00:00:00.000Z")
},
{
  "_id": ObjectId("6818ca8f141f65cabbb622a2"),
  "user_id": 8,
  "project_id": 2,
  "joined_at": new Date("2024-03-12T00:00:00.000Z")
}];

var milestonesData = [{
  "_id": ObjectId("6818cb35141f65cabbb622af"),
  "id": 1,
  "sprint_id": "6818caaa141f65cabbb622a5",
  "name": "Milestone 1 - Delivery Component 1",
  "description": "Milestone 1 to achieve Implement the core functionality of the system in Sprint 1 - Development Module 1",
  "start_date": new Date("2024-04-01T00:00:00.000Z"),
  "end_date": new Date("2024-04-08T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b0"),
  "id": 2,
  "sprint_id": "6818caaa141f65cabbb622a5",
  "name": "Milestone 2 - Delivery Feature 1",
  "description": "Milestone 2 to achieve Design a user-friendly interface in Sprint 1 - Development Module 1",
  "start_date": new Date("2024-04-09T00:00:00.000Z"),
  "end_date": new Date("2024-04-15T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b1"),
  "id": 3,
  "sprint_id": "6818caaa141f65cabbb622a6",
  "name": "Milestone 1 - Delivery Component 2",
  "description": "Milestone 1 to achieve Fix critical bugs affecting user experience in Sprint 2 - Development Component 2",
  "start_date": new Date("2024-04-16T00:00:00.000Z"),
  "end_date": new Date("2024-04-23T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b2"),
  "id": 4,
  "sprint_id": "6818caaa141f65cabbb622a6",
  "name": "Milestone 2 - Delivery Feature 2",
  "description": "Milestone 2 to achieve Conduct thorough performance and load testing in Sprint 2 - Development Component 2",
  "start_date": new Date("2024-04-24T00:00:00.000Z"),
  "end_date": new Date("2024-04-30T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b3"),
  "id": 5,
  "sprint_id": "6818caaa141f65cabbb622a7",
  "name": "Milestone 1 - Delivery Component 3",
  "description": "Milestone 1 to achieve Enhance security measures against common vulnerabilities in Sprint 3 - Development Feature 3",
  "start_date": new Date("2024-05-01T00:00:00.000Z"),
  "end_date": new Date("2024-05-08T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b4"),
  "id": 6,
  "sprint_id": "6818caaa141f65cabbb622a7",
  "name": "Milestone 2 - Delivery Feature 3",
  "description": "Milestone 2 to achieve Research cutting-edge technologies for integration in Sprint 3 - Development Feature 3",
  "start_date": new Date("2024-05-09T00:00:00.000Z"),
  "end_date": new Date("2024-05-15T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b5"),
  "id": 7,
  "sprint_id": "6818caaa141f65cabbb622a8",
  "name": "Milestone 1 - Delivery Component 4",
  "description": "Milestone 1 to achieve Plan and coordinate project milestones and deliverables in Sprint 4 - Development Update 4",
  "start_date": new Date("2024-05-16T00:00:00.000Z"),
  "end_date": new Date("2024-05-23T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b6"),
  "id": 8,
  "sprint_id": "6818caaa141f65cabbb622a8",
  "name": "Milestone 2 - Delivery Feature 4",
  "description": "Milestone 2 to achieve Finalize the project delivery in Sprint 4 - Development Update 4",
  "start_date": new Date("2024-05-24T00:00:00.000Z"),
  "end_date": new Date("2024-06-30T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b7"),
  "id": 9,
  "sprint_id": "6818caaa141f65cabbb622a9",
  "name": "Milestone 1 - Delivery Component 1",
  "description": "Milestone 1 to achieve Implement the core functionality of the system in Sprint 1 - Development Module 1",
  "start_date": new Date("2024-03-01T00:00:00.000Z"),
  "end_date": new Date("2024-03-08T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b8"),
  "id": 10,
  "sprint_id": "6818caaa141f65cabbb622a9",
  "name": "Milestone 2 - Delivery Feature 1",
  "description": "Milestone 2 to achieve Design a user-friendly interface in Sprint 1 - Development Module 1",
  "start_date": new Date("2024-03-09T00:00:00.000Z"),
  "end_date": new Date("2024-03-15T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622b9"),
  "id": 11,
  "sprint_id": "6818caaa141f65cabbb622aa",
  "name": "Milestone 1 - Delivery Component 2",
  "description": "Milestone 1 to achieve Fix critical bugs affecting user experience in Sprint 2 - Development Component 2",
  "start_date": new Date("2024-03-16T00:00:00.000Z"),
  "end_date": new Date("2024-03-23T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622ba"),
  "id": 12,
  "sprint_id": "6818caaa141f65cabbb622aa",
  "name": "Milestone 2 - Delivery Feature 2",
  "description": "Milestone 2 to achieve Conduct thorough performance and load testing in Sprint 2 - Development Component 2",
  "start_date": new Date("2024-03-24T00:00:00.000Z"),
  "end_date": new Date("2024-03-30T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622bb"),
  "id": 13,
  "sprint_id": "6818caaa141f65cabbb622ab",
  "name": "Milestone 1 - Delivery Component 3",
  "description": "Milestone 1 to achieve Enhance security measures against common vulnerabilities in Sprint 3 - Development Feature 3",
  "start_date": new Date("2024-04-01T00:00:00.000Z"),
  "end_date": new Date("2024-04-08T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622bc"),
  "id": 14,
  "sprint_id": "6818caaa141f65cabbb622ab",
  "name": "Milestone 2 - Delivery Feature 3",
  "description": "Milestone 2 to achieve Research cutting-edge technologies for integration in Sprint 3 - Development Feature 3",
  "start_date": new Date("2024-04-09T00:00:00.000Z"),
  "end_date": new Date("2024-04-15T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622bd"),
  "id": 15,
  "sprint_id": "6818caaa141f65cabbb622ac",
  "name": "Milestone 1 - Delivery Component 4",
  "description": "Milestone 1 to achieve Plan and coordinate project milestones and deliverables in Sprint 4 - Development Update 4",
  "start_date": new Date("2024-04-16T00:00:00.000Z"),
  "end_date": new Date("2024-04-23T00:00:00.000Z")
},
{
  "_id": ObjectId("6818cb35141f65cabbb622be"),
  "id": 16,
  "sprint_id": "6818caaa141f65cabbb622ac",
  "name": "Milestone 2 - Delivery Feature 4",
  "description": "Milestone 2 to achieve Finalize the project delivery in Sprint 4 - Development Update 4",
  "start_date": new Date("2024-04-24T00:00:00.000Z"),
  "end_date": new Date("2024-07-15T00:00:00.000Z")
}];

var tasksData = [
  // Milestone 1: 6818cb35141f65cabbb622af
  {
    "_id": "ObjectId('6818cccc141f65cabbb622c5')",
    "id": 1,
    "milestone_id": "6818cb35141f65cabbb622af",
    "assigned_user_id": "6818ca58141f65cabbb62285",
    "name": "Design Dashboard UI",
    "description": "Create a modern dashboard interface",
    "assigned_at": "2024-04-01T00:00:00",
    "deadline": "2024-04-15T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Task",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622c6')",
    "id": 2,
    "milestone_id": "6818cb35141f65cabbb622af",
    "assigned_user_id": "6818ca58141f65cabbb62287",
    "name": "Implement Login Feature",
    "description": "Design a user-friendly interface",
    "assigned_at": "2025-04-15T00:00:00",
    "deadline": "2025-05-05T00:00:00",
    "priority": "High",
    "story_points": 3,
    "type": "Feature",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622c7')",
    "id": 3,
    "milestone_id": "6818cb35141f65cabbb622af",
    "assigned_user_id": "6818ca58141f65cabbb62288",
    "name": "Fix API Bugs",
    "description": "Fix critical bugs affecting user experience",
    "assigned_at": "2025-04-20T00:00:00",
    "deadline": "2025-05-20T00:00:00",
    "priority": "Low",
    "story_points": 2,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622c8')",
    "id": 4,
    "milestone_id": "6818cb35141f65cabbb622af",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Plan Sprint 2",
    "description": "Plan additional features",
    "assigned_at": "2025-05-15T00:00:00",
    "deadline": "2025-06-10T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 2: 6818cb35141f65cabbb622b0
  {
    "_id": "ObjectId('6818cccc141f65cabbb622c9')",
    "id": 5,
    "milestone_id": "6818cb35141f65cabbb622b0",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Run Performance Tests",
    "description": "Conduct performance and load testing",
    "assigned_at": "2024-04-10T00:00:00",
    "deadline": "2024-04-25T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622ca')",
    "id": 6,
    "milestone_id": "6818cb35141f65cabbb622b0",
    "assigned_user_id": "6818ca58141f65cabbb6228b",
    "name": "Enhance Security Measures",
    "description": "Enhance security measures",
    "assigned_at": "2025-04-20T00:00:00",
    "deadline": "2025-05-10T00:00:00",
    "priority": "High",
    "story_points": 6,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622cb')",
    "id": 7,
    "milestone_id": "6818cb35141f65cabbb622b0",
    "assigned_user_id": "6818ca58141f65cabbb6228c",
    "name": "Study New UI Trends",
    "description": "Research cutting-edge technologies",
    "assigned_at": "2025-04-25T00:00:00",
    "deadline": "2025-05-25T00:00:00",
    "priority": "Low",
    "story_points": 1,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622cc')",
    "id": 8,
    "milestone_id": "6818cb35141f65cabbb622b0",
    "assigned_user_id": "6818ca58141f65cabbb62286",
    "name": "Create User Manual",
    "description": "Prepare documentation",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-06-15T00:00:00",
    "priority": "Medium",
    "story_points": 3,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 3: 6818cb35141f65cabbb622b1
  {
    "_id": "ObjectId('6818cccc141f65cabbb622cd')",
    "id": 9,
    "milestone_id": "6818cb35141f65cabbb622b1",
    "assigned_user_id": "6818ca58141f65cabbb62287",
    "name": "Resolve Frontend Issues",
    "description": "Fix critical bugs",
    "assigned_at": "2024-04-15T00:00:00",
    "deadline": "2024-04-30T00:00:00",
    "priority": "High",
    "story_points": 4,
    "type": "Bug",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622ce')",
    "id": 10,
    "milestone_id": "6818cb35141f65cabbb622b1",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Test Backend Performance",
    "description": "Conduct performance testing",
    "assigned_at": "2025-04-25T00:00:00",
    "deadline": "2025-05-08T00:00:00",
    "priority": "Medium",
    "story_points": 3,
    "type": "Feature",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622cf')",
    "id": 11,
    "milestone_id": "6818cb35141f65cabbb622b1",
    "assigned_user_id": "6818ca58141f65cabbb6228b",
    "name": "Secure Database Access",
    "description": "Enhance security measures",
    "assigned_at": "2025-04-30T00:00:00",
    "deadline": "2025-05-18T00:00:00",
    "priority": "Low",
    "story_points": 2,
    "type": "Task",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d0')",
    "id": 12,
    "milestone_id": "6818cb35141f65cabbb622b1",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Plan Next Phase",
    "description": "Plan next phase",
    "assigned_at": "2025-05-25T00:00:00",
    "deadline": "2025-06-20T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 4: 6818cb35141f65cabbb622b2
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d1')",
    "id": 13,
    "milestone_id": "6818cb35141f65cabbb622b2",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Conduct Load Testing",
    "description": "Conduct performance testing",
    "assigned_at": "2024-04-20T00:00:00",
    "deadline": "2024-05-05T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d2')",
    "id": 14,
    "milestone_id": "6818cb35141f65cabbb622b2",
    "assigned_user_id": "6818ca58141f65cabbb6228b",
    "name": "Implement Security Patch",
    "description": "Enhance security measures",
    "assigned_at": "2025-05-01T00:00:00",
    "deadline": "2025-05-09T00:00:00",
    "priority": "High",
    "story_points": 6,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d3')",
    "id": 15,
    "milestone_id": "6818cb35141f65cabbb622b2",
    "assigned_user_id": "6818ca58141f65cabbb6228c",
    "name": "Research Tech Trends",
    "description": "Research technologies",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-22T00:00:00",
    "priority": "Low",
    "story_points": 1,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d4')",
    "id": 16,
    "milestone_id": "6818cb35141f65cabbb622b2",
    "assigned_user_id": "6818ca58141f65cabbb62286",
    "name": "Document Requirements",
    "description": "Document requirements",
    "assigned_at": "2025-05-25T00:00:00",
    "deadline": "2025-06-25T00:00:00",
    "priority": "Medium",
    "story_points": 3,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 5: 6818cb35141f65cabbb622b3
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d5')",
    "id": 17,
    "milestone_id": "6818cb35141f65cabbb622b3",
    "assigned_user_id": "6818ca58141f65cabbb6228b",
    "name": "Audit Security System",
    "description": "Enhance security measures",
    "assigned_at": "2024-04-25T00:00:00",
    "deadline": "2024-05-10T00:00:00",
    "priority": "High",
    "story_points": 7,
    "type": "Task",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d6')",
    "id": 18,
    "milestone_id": "6818cb35141f65cabbb622b3",
    "assigned_user_id": "6818ca58141f65cabbb6228c",
    "name": "Study AI Algorithms",
    "description": "Research technologies",
    "assigned_at": "2025-05-02T00:00:00",
    "deadline": "2025-05-10T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d7')",
    "id": 19,
    "milestone_id": "6818cb35141f65cabbb622b3",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Coordinate Milestones",
    "description": "Coordinate project milestones",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-20T00:00:00",
    "priority": "Low",
    "story_points": 3,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d8')",
    "id": 20,
    "milestone_id": "6818cb35141f65cabbb622b3",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Finalize Test Plan",
    "description": "Finalize testing plan",
    "assigned_at": "2025-05-25T00:00:00",
    "deadline": "2025-06-30T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 6: 6818cb35141f65cabbb622b4
  {
    "_id": "ObjectId('6818cccc141f65cabbb622d9')",
    "id": 21,
    "milestone_id": "6818cb35141f65cabbb622b4",
    "assigned_user_id": "6818ca58141f65cabbb6228c",
    "name": "Research New Tech",
    "description": "Research technologies",
    "assigned_at": "2024-05-01T00:00:00",
    "deadline": "2024-05-15T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622da')",
    "id": 22,
    "milestone_id": "6818cb35141f65cabbb622b4",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Prepare Project Delivery",
    "description": "Finalize project delivery",
    "assigned_at": "2025-05-03T00:00:00",
    "deadline": "2025-05-11T00:00:00",
    "priority": "High",
    "story_points": 6,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622db')",
    "id": 23,
    "milestone_id": "6818cb35141f65cabbb622b4",
    "assigned_user_id": "6818ca58141f65cabbb62288",
    "name": "Fix Backend Bugs",
    "description": "Enhance security measures",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-25T00:00:00",
    "priority": "Low",
    "story_points": 2,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622dc')",
    "id": 24,
    "milestone_id": "6818cb35141f65cabbb622b4",
    "assigned_user_id": "6818ca58141f65cabbb62286",
    "name": "Review Documentation",
    "description": "Review documentation",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-07-01T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 7: 6818cb35141f65cabbb622b5
  {
    "_id": "ObjectId('6818cccc141f65cabbb622dd')",
    "id": 25,
    "milestone_id": "6818cb35141f65cabbb622b5",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Schedule Team Meeting",
    "description": "Coordinate project milestones",
    "assigned_at": "2024-05-05T00:00:00",
    "deadline": "2024-05-20T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622de')",
    "id": 26,
    "milestone_id": "6818cb35141f65cabbb622b5",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Finalize Delivery Plan",
    "description": "Finalize project delivery",
    "assigned_at": "2025-05-04T00:00:00",
    "deadline": "2025-05-10T00:00:00",
    "priority": "High",
    "story_points": 7,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622df')",
    "id": 27,
    "milestone_id": "6818cb35141f65cabbb622b5",
    "assigned_user_id": "6818ca58141f65cabbb62287",
    "name": "Fix UI Bugs",
    "description": "Enhance security measures",
    "assigned_at": "2025-05-06T00:00:00",
    "deadline": "2025-05-22T00:00:00",
    "priority": "Low",
    "story_points": 3,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e0')",
    "id": 28,
    "milestone_id": "6818cb35141f65cabbb622b5",
    "assigned_user_id": "6818ca58141f65cabbb62285",
    "name": "Prepare Final Report",
    "description": "Prepare final report",
    "assigned_at": "2025-05-25T00:00:00",
    "deadline": "2025-07-05T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 8: 6818cb35141f65cabbb622b6
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e1')",
    "id": 29,
    "milestone_id": "6818cb35141f65cabbb622b6",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Coordinate Final Delivery",
    "description": "Finalize project delivery",
    "assigned_at": "2024-05-10T00:00:00",
    "deadline": "2024-05-25T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e2')",
    "id": 30,
    "milestone_id": "6818cb35141f65cabbb622b6",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Set Up Milestones",
    "description": "Coordinate milestones",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-11T00:00:00",
    "priority": "High",
    "story_points": 6,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e3')",
    "id": 31,
    "milestone_id": "6818cb35141f65cabbb622b6",
    "assigned_user_id": "6818ca58141f65cabbb62288",
    "name": "Optimize API Performance",
    "description": "Enhance security measures",
    "assigned_at": "2025-05-07T00:00:00",
    "deadline": "2025-05-20T00:00:00",
    "priority": "Low",
    "story_points": 2,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e4')",
    "id": 32,
    "milestone_id": "6818cb35141f65cabbb622b6",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Review Deliverables",
    "description": "Review final deliverables",
    "assigned_at": "2025-05-25T00:00:00",
    "deadline": "2025-07-10T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 9: 6818cb35141f65cabbb622b7
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e5')",
    "id": 33,
    "milestone_id": "6818cb35141f65cabbb622b7",
    "assigned_user_id": "6818ca58141f65cabbb62287",
    "name": "Develop Payment Module",
    "description": "Implement core functionality",
    "assigned_at": "2024-03-01T00:00:00",
    "deadline": "2024-03-15T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e6')",
    "id": 34,
    "milestone_id": "6818cb35141f65cabbb622b7",
    "assigned_user_id": "6818ca58141f65cabbb62285",
    "name": "Design Payment UI",
    "description": "Design user interface",
    "assigned_at": "2025-05-03T00:00:00",
    "deadline": "2025-05-10T00:00:00",
    "priority": "High",
    "story_points": 5,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e7')",
    "id": 35,
    "milestone_id": "6818cb35141f65cabbb622b7",
    "assigned_user_id": "6818ca58141f65cabbb62287",
    "name": "Fix Payment Bugs",
    "description": "Fix bugs",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-18T00:00:00",
    "priority": "Low",
    "story_points": 3,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e8')",
    "id": 36,
    "milestone_id": "6818cb35141f65cabbb622b7",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Plan Testing Phase",
    "description": "Plan testing phase",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-06-15T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 10: 6818cb35141f65cabbb622b8
  {
    "_id": "ObjectId('6818cccc141f65cabbb622e9')",
    "id": 37,
    "milestone_id": "6818cb35141f65cabbb622b8",
    "assigned_user_id": "6818ca58141f65cabbb62286",
    "name": "Design Profile Page",
    "description": "Design user interface",
    "assigned_at": "2024-03-10T00:00:00",
    "deadline": "2024-03-25T00:00:00",
    "priority": "Medium",
    "story_points": 6,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622ea')",
    "id": 38,
    "milestone_id": "6818cb35141f65cabbb622b8",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Test Profile Features",
    "description": "Conduct performance testing",
    "assigned_at": "2025-05-04T00:00:00",
    "deadline": "2025-05-09T00:00:00",
    "priority": "High",
    "story_points": 4,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622eb')",
    "id": 39,
    "milestone_id": "6818cb35141f65cabbb622b8",
    "assigned_user_id": "6818ca58141f65cabbb62288",
    "name": "Secure Profile Data",
    "description": "Enhance security measures",
    "assigned_at": "2025-05-06T00:00:00",
    "deadline": "2025-05-20T00:00:00",
    "priority": "Low",
    "story_points": 2,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622ec')",
    "id": 40,
    "milestone_id": "6818cb35141f65cabbb622b8",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Schedule Profile Review",
    "description": "Schedule review meeting",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-06-20T00:00:00",
    "priority": "Medium",
    "story_points": 3,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 11: 6818cb35141f65cabbb622b9
  {
    "_id": "ObjectId('6818cccc141f65cabbb622ed')",
    "id": 41,
    "milestone_id": "6818cb35141f65cabbb622b9",
    "assigned_user_id": "6818ca58141f65cabbb62287",
    "name": "Fix Critical Bugs",
    "description": "Fix critical bugs",
    "assigned_at": "2024-03-15T00:00:00",
    "deadline": "2024-03-30T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622ee')",
    "id": 42,
    "milestone_id": "6818cb35141f65cabbb622b9",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Test System Performance",
    "description": "Conduct performance testing",
    "assigned_at": "2025-05-03T00:00:00",
    "deadline": "2025-05-10T00:00:00",
    "priority": "High",
    "story_points": 6,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622ef')",
    "id": 43,
    "milestone_id": "6818cb35141f65cabbb622b9",
    "assigned_user_id": "6818ca58141f65cabbb62288",
    "name": "Enhance API Security",
    "description": "Enhance security measures",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-18T00:00:00",
    "priority": "Low",
    "story_points": 3,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f0')",
    "id": 44,
    "milestone_id": "6818cb35141f65cabbb622b9",
    "assigned_user_id": "6818ca58141f65cabbb62285",
    "name": "Prepare Training Materials",
    "description": "Prepare training materials",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-06-25T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 12: 6818cb35141f65cabbb622ba
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f1')",
    "id": 45,
    "milestone_id": "6818cb35141f65cabbb622ba",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Stress Test System",
    "description": "Conduct performance testing",
    "assigned_at": "2024-03-20T00:00:00",
    "deadline": "2024-04-05T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f2')",
    "id": 46,
    "milestone_id": "6818cb35141f65cabbb622ba",
    "assigned_user_id": "6818ca58141f65cabbb6228b",
    "name": "Patch Security Vulnerabilities",
    "description": "Enhance security measures",
    "assigned_at": "2025-05-04T00:00:00",
    "deadline": "2025-05-10T00:00:00",
    "priority": "High",
    "story_points": 5,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f3')",
    "id": 47,
    "milestone_id": "6818cb35141f65cabbb622ba",
    "assigned_user_id": "6818ca58141f65cabbb6228c",
    "name": "Research Market Trends",
    "description": "Research technologies",
    "assigned_at": "2025-05-06T00:00:00",
    "deadline": "2025-05-20T00:00:00",
    "priority": "Low",
    "story_points": 2,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f4')",
    "id": 48,
    "milestone_id": "6818cb35141f65cabbb622ba",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Schedule Deployment",
    "description": "Schedule deployment",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-06-30T00:00:00",
    "priority": "Medium",
    "story_points": 3,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 13: 6818cb35141f65cabbb622bb
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f5')",
    "id": 49,
    "milestone_id": "6818cb35141f65cabbb622bb",
    "assigned_user_id": "6818ca58141f65cabbb6228b",
    "name": "Secure User Data",
    "description": "Enhance security measures",
    "assigned_at": "2024-03-25T00:00:00",
    "deadline": "2024-04-10T00:00:00",
    "priority": "Medium",
    "story_points": 6,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f6')",
    "id": 50,
    "milestone_id": "6818cb35141f65cabbb622bb",
    "assigned_user_id": "6818ca58141f65cabbb6228c",
    "name": "Study Cloud Solutions",
    "description": "Research technologies",
    "assigned_at": "2025-05-03T00:00:00",
    "deadline": "2025-05-09T00:00:00",
    "priority": "High",
    "story_points": 4,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f7')",
    "id": 51,
    "milestone_id": "6818cb35141f65cabbb622bb",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Coordinate Deliverables",
    "description": "Coordinate deliverables",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-18T00:00:00",
    "priority": "Low",
    "story_points": 3,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f8')",
    "id": 52,
    "milestone_id": "6818cb35141f65cabbb622bb",
    "assigned_user_id": "6818ca58141f65cabbb62285",
    "name": "Plan User Training",
    "description": "Plan user training",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-07-01T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 14: 6818cb35141f65cabbb622bc
  {
    "_id": "ObjectId('6818cccc141f65cabbb622f9')",
    "id": 53,
    "milestone_id": "6818cb35141f65cabbb622bc",
    "assigned_user_id": "6818ca58141f65cabbb6228c",
    "name": "Research Scalability Options",
    "description": "Research technologies",
    "assigned_at": "2024-04-01T00:00:00",
    "deadline": "2024-04-15T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622fa')",
    "id": 54,
    "milestone_id": "6818cb35141f65cabbb622bc",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Finalize System Delivery",
    "description": "Finalize delivery",
    "assigned_at": "2025-05-03T00:00:00",
    "deadline": "2025-05-10T00:00:00",
    "priority": "High",
    "story_points": 6,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622fb')",
    "id": 55,
    "milestone_id": "6818cb35141f65cabbb622bc",
    "assigned_user_id": "6818ca58141f65cabbb62288",
    "name": "Enhance Data Encryption",
    "description": "Enhance security",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-22T00:00:00",
    "priority": "Low",
    "story_points": 2,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622fc')",
    "id": 56,
    "milestone_id": "6818cb35141f65cabbb622bc",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Schedule Final Review",
    "description": "Schedule review",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-07-05T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 15: 6818cb35141f65cabbb622bd
  {
    "_id": "ObjectId('6818cccc141f65cabbb622fd')",
    "id": 57,
    "milestone_id": "6818cb35141f65cabbb622bd",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Set Up Project Timeline",
    "description": "Coordinate milestones",
    "assigned_at": "2024-04-05T00:00:00",
    "deadline": "2024-04-20T00:00:00",
    "priority": "Medium",
    "story_points": 4,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622fe')",
    "id": 58,
    "milestone_id": "6818cb35141f65cabbb622bd",
    "assigned_user_id": "6818ca58141f65cabbb62287",
    "name": "Deliver Frontend Updates",
    "description": "Finalize delivery",
    "assigned_at": "2025-05-03T00:00:00",
    "deadline": "2025-05-10T00:00:00",
    "priority": "High",
    "story_points": 7,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb622ff')",
    "id": 59,
    "milestone_id": "6818cb35141f65cabbb622bd",
    "assigned_user_id": "6818ca58141f65cabbb62288",
    "name": "Secure Backend Services",
    "description": "Enhance security",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-20T00:00:00",
    "priority": "Low",
    "story_points": 3,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb62300')",
    "id": 60,
    "milestone_id": "6818cb35141f65cabbb622bd",
    "assigned_user_id": "6818ca58141f65cabbb62289",
    "name": "Plan System Maintenance",
    "description": "Plan maintenance",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-07-10T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "To Do"
  },

  // Milestone 16: 6818cb35141f65cabbb622be
  {
    "_id": "ObjectId('6818cccc141f65cabbb62301')",
    "id": 61,
    "milestone_id": "6818cb35141f65cabbb622be",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Finalize Project Delivery",
    "description": "Finalize delivery",
    "assigned_at": "2024-04-10T00:00:00",
    "deadline": "2024-04-25T00:00:00",
    "priority": "Medium",
    "story_points": 5,
    "type": "Feature",
    "status": "Done"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb62302')",
    "id": 62,
    "milestone_id": "6818cb35141f65cabbb622be",
    "assigned_user_id": "6818ca58141f65cabbb6228a",
    "name": "Coordinate Team Efforts",
    "description": "Coordinate milestones",
    "assigned_at": "2025-05-03T00:00:00",
    "deadline": "2025-05-10T00:00:00",
    "priority": "High",
    "story_points": 8,
    "type": "Task",
    "status": "In Review"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb62303')",
    "id": 63,
    "milestone_id": "6818cb35141f65cabbb622be",
    "assigned_user_id": "6818ca58141f65cabbb62287",
    "name": "Fix Security Bugs",
    "description": "Enhance security",
    "assigned_at": "2025-05-05T00:00:00",
    "deadline": "2025-05-22T00:00:00",
    "priority": "Low",
    "story_points": 4,
    "type": "Bug",
    "status": "In Progress"
  },
  {
    "_id": "ObjectId('6818cccc141f65cabbb62304')",
    "id": 64,
    "milestone_id": "6818cb35141f65cabbb622be",
    "assigned_user_id": "6818ca58141f65cabbb62285",
    "name": "Plan System Upgrade",
    "description": "Plan upgrade",
    "assigned_at": "2025-05-20T00:00:00",
    "deadline": "2025-07-15T00:00:00",
    "priority": "Medium",
    "story_points": 6,
    "type": "Feature",
    "status": "To Do"
  }
];

var chatSessionsData = [{
  "_id": ObjectId("6818cd42141f65cabbb622f7"),
  "id": 1,
  "project_id": 1,
  "started_at": new Date("2024-04-10T10:00:00.000Z"),
  "ended_at": new Date("2024-04-12T16:00:00.000Z")
},
{
  "_id": ObjectId("6818cd42141f65cabbb622f8"),
  "id": 2,
  "project_id": 1,
  "started_at": new Date("2024-05-01T09:00:00.000Z"),
  "ended_at": new Date("2024-05-03T15:00:00.000Z")
},
{
  "_id": ObjectId("6818cd42141f65cabbb622f9"),
  "id": 3,
  "project_id": 2,
  "started_at": new Date("2024-03-10T08:00:00.000Z"),
  "ended_at": new Date("2024-03-12T14:00:00.000Z")
},
{
  "_id": ObjectId("6818cd42141f65cabbb622fa"),
  "id": 4,
  "project_id": 2,
  "started_at": new Date("2024-04-01T11:00:00.000Z"),
  "ended_at": new Date("2024-04-03T17:00:00.000Z")
}];

var chatHistoryData = [{
  "_id": ObjectId("6818cd53141f65cabbb622fd"),
  "id": 1,
  "chat_session_id": 1,
  "sender": "user",
  "message": "Discussing the latest sprint progress for E-commerce redesign.",
  "sent_at": new Date("2024-04-10T10:30:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb622fe"),
  "id": 2,
  "chat_session_id": 1,
  "sender": "bot",
  "message": "Need clarification on task priorities for the UI redesign.",
  "sent_at": new Date("2024-04-10T11:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb622ff"),
  "id": 3,
  "chat_session_id": 1,
  "sender": "user",
  "message": "Proposing a new feature for the checkout page.",
  "sent_at": new Date("2024-04-11T09:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62300"),
  "id": 4,
  "chat_session_id": 1,
  "sender": "bot",
  "message": "Reporting a bug in the payment gateway integration.",
  "sent_at": new Date("2024-04-11T14:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62301"),
  "id": 5,
  "chat_session_id": 1,
  "sender": "user",
  "message": "Planning the next milestone review for security enhancements.",
  "sent_at": new Date("2024-04-12T15:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62302"),
  "id": 6,
  "chat_session_id": 2,
  "sender": "bot",
  "message": "Discussing the latest sprint progress for the final testing phase.",
  "sent_at": new Date("2024-05-01T09:30:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62303"),
  "id": 7,
  "chat_session_id": 2,
  "sender": "user",
  "message": "Need clarification on task priorities for the performance testing.",
  "sent_at": new Date("2024-05-01T10:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62304"),
  "id": 8,
  "chat_session_id": 2,
  "sender": "bot",
  "message": "Proposing a new feature for the user dashboard.",
  "sent_at": new Date("2024-05-02T08:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62305"),
  "id": 9,
  "chat_session_id": 2,
  "sender": "user",
  "message": "Reporting a bug in the backend API response time.",
  "sent_at": new Date("2024-05-02T13:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62306"),
  "id": 10,
  "chat_session_id": 2,
  "sender": "bot",
  "message": "Planning the next milestone review for deployment.",
  "sent_at": new Date("2024-05-03T14:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62307"),
  "id": 11,
  "chat_session_id": 3,
  "sender": "user",
  "message": "Discussing the latest sprint progress for the Healthcare Portal.",
  "sent_at": new Date("2024-03-10T08:30:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62308"),
  "id": 12,
  "chat_session_id": 3,
  "sender": "bot",
  "message": "Need clarification on task priorities for the appointment scheduling module.",
  "sent_at": new Date("2024-03-10T09:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62309"),
  "id": 13,
  "chat_session_id": 3,
  "sender": "user",
  "message": "Proposing a new feature for telemedicine integration.",
  "sent_at": new Date("2024-03-11T10:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb6230a"),
  "id": 14,
  "chat_session_id": 3,
  "sender": "bot",
  "message": "Reporting a bug in the medical record access system.",
  "sent_at": new Date("2024-03-11T12:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb6230b"),
  "id": 15,
  "chat_session_id": 3,
  "sender": "user",
  "message": "Planning the next milestone review for HIPAA compliance.",
  "sent_at": new Date("2024-03-12T13:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb6230c"),
  "id": 16,
  "chat_session_id": 4,
  "sender": "bot",
  "message": "Discussing the latest sprint progress for the security phase.",
  "sent_at": new Date("2024-04-01T11:30:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb6230d"),
  "id": 17,
  "chat_session_id": 4,
  "sender": "user",
  "message": "Need clarification on task priorities for the encryption implementation.",
  "sent_at": new Date("2024-04-01T12:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb6230e"),
  "id": 18,
  "chat_session_id": 4,
  "sender": "bot",
  "message": "Proposing a new feature for user authentication.",
  "sent_at": new Date("2024-04-02T09:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb6230f"),
  "id": 19,
  "chat_session_id": 4,
  "sender": "user",
  "message": "Reporting a bug in the patient data privacy module.",
  "sent_at": new Date("2024-04-02T14:00:00.000Z")
},
{
  "_id": ObjectId("6818cd53141f65cabbb62310"),
  "id": 20,
  "chat_session_id": 4,
  "sender": "bot",
  "message": "Planning the next milestone review for final testing.",
  "sent_at": new Date("2024-04-03T16:00:00.000Z")
}];

// Hàm import dữ liệu
function importData(collectionName, data) {
    print("Importing data into collection: " + collectionName);
    try {
        db[collectionName].insertMany(data);
        print("Inserted " + data.length + " documents into " + collectionName);
    } catch (e) {
        print("Error importing " + collectionName + ": " + e);
    }
}

// Thực hiện import
importData("users", usersData);
importData("projects", projectsData);
importData("project_members", projectMembersData);
importData("sprints", sprintsData);
importData("milestones", milestonesData);
importData("tasks", tasksData);
importData("chat_sessions", chatSessionsData);
importData("chat_history", chatHistoryData);

// In số lượng bản ghi
print("Users created: " + db.users.countDocuments({}));
print("Projects created: " + db.projects.countDocuments({}));
print("Project Members created: " + db.project_members.countDocuments({}));
print("Sprints created: " + db.sprints.countDocuments({}));
print("Milestones created: " + db.milestones.countDocuments({}));
print("Tasks created: " + db.tasks.countDocuments({}));
print("Chat Sessions created: " + db.chat_sessions.countDocuments({}));
print("Chat History created: " + db.chat_history.countDocuments({}));